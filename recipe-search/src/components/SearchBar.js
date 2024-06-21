import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const SearchContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
});

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <TextField id="searchbarcss"
          variant="outlined"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </SearchContainer>
  );
}

export default SearchBar;
