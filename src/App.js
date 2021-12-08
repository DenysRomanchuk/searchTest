import { React, useEffect, useState, useCallback } from 'react';
import './App.css';
import ListItem from './components/ListItem';
import { SelectedBox } from './components/SelectedBox';
import SearchInput from './components/SearchInput';
import { debouncedFetchData } from './helpers/debounce';

export default function App() {
  const [queryString, setQueryString] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState({})
  const [isNoResult, setIsNoResult] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onChangeHandler = (e) => {
    setQueryString(e.target.value)
  }

  useEffect(() => { 
    if (queryString.length > 1 && !results.length && !isLoading) {
      setIsNoResult(true)
    } else { 
      setIsNoResult(false)
    }
  }, [results, queryString, isLoading])

  const fetchData = useCallback(() => {
    setIsLoading(true)
    debouncedFetchData(queryString, res => {
      setIsLoading(false)
      setResults(res);
    });
  }, [queryString])

  useEffect(() => {
    fetchData();
  }, [queryString, fetchData]);

  return (
    <div>
      <SearchInput
        value={queryString}
        onChangeHandler={onChangeHandler}
      />
      {results.map((result, index) => (
        <div key={index}>
          <ListItem
            title={result.name}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            setSelected={setSelected}
            {...result}
          />
        </div>
      ))}

      {
        isNoResult && !isLoading ?
          <div>No Result </div>
          : null
      }

      {isOpen && selected ?
        <SelectedBox
          {...selected}
        />
        : null}
        
    </div>
  );
}