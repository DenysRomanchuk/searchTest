import React from 'react';
import './ListItem.css';
const ListItem = ({ title, isOpen, setIsOpen, setSelected, ...res }) => {
    const handleClick = ({ ...res }) => {
        setSelected({ ...res })
        setIsOpen(!isOpen)
    }
    return (
        <div class="list-item-container">
            <div className="center"
                onClick={() => handleClick({ ...res })}>
                <h4>{title}</h4>
            </div>
        </div>
    );
};
export default ListItem;