import React from 'react'

const Filter = ({filter, onFilterChange}) => {
    return (
    <div>
        Filter shown with <input value = {filter} onChange={onFilterChange} />
    </div>
    );
}

export default Filter;