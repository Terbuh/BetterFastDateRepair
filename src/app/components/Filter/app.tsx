import React from 'react';
import { useDebounce } from 'use-debounce';
import './styles.css';

import Result from './Result';
import { DataContextProvider } from './DataContext';

const searchData = {
  query: '',
  fields: ['director']
};

const filtersData = {
  type: []
};

export default function App() {
  const [filters, setFilters] = React.useState(filtersData);
  const [search, setSearch] = React.useState('');
  const [value] = useDebounce(search, 300);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e, label) => {
    setFilters({
      ...filters,
      type: e.target.checked
        ? [...filters.type, label]
        : filters.type.filter((i) => i !== label)
    });
  };
  return (
    <DataContextProvider>
      <div className="App">
        <h1>useFilter Demo</h1>
        <input
          type="text"
          placeholder="Search for director name"
          className="search-input"
          onChange={handleSearchChange}
        />
        <div style={{ marginTop: 10 }}>
          <b>Filter</b>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleFilterChange(e, 'Movie')}
              checked={filters.type.includes('Movie')}></input>{' '}
            Movie
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleFilterChange(e, 'TV Show')}
              checked={filters.type.includes('TV Show')}></input>{' '}
            TV Show
          </label>
        </div>
        <Result
          search={{
            query: value,
            fields: searchData.fields,
            enableHighlighting: true
          }}
          filters={filters}
        />
      </div>
    </DataContextProvider>
  );
}
s;
