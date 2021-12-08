import { React, useState, useEffect } from 'react';
import './SearchInput.css';

const SearchInput = ({ value, onChangeHandler }) => {
    return (
        <div class="search-container">
            <input
                type="text"
                value={value}
                onChange={(e) => onChangeHandler(e)}
                placeholder="Search..."
            />
        </div>
    );
};
export default SearchInput