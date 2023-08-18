// DealerSearch.js
import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const DealerSearch = ({ search, setSearch }) => (
  <div className="dealer-search-bar">
    <InputGroup className="mb-3">
      <InputGroup.Text id="search-addon" className="search-button">
        Search
      </InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Search for dealers"
        aria-label="Search"
        aria-describedby="search-addon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="dealer-search-input"
      />
    </InputGroup>
  </div>
);

export default DealerSearch;
