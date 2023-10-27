// Search.tsx
import React, { Component } from 'react';

interface SearchProps {
  onSearchResults: (searchResults: SearchResult[]) => void;
  searchTerm: string;
}

interface SearchResult {
  name: string;
  description: string;
}

class Search extends Component<SearchProps> {
  componentDidMount() {
    if (this.props.searchTerm) {
      this.fetchSearchResults(this.props.searchTerm);
    }
  }

  componentDidUpdate(prevProps: SearchProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.fetchSearchResults(this.props.searchTerm);
    }
  }

  fetchSearchResults = (searchTerm: string) => {
    // Make an API call with the search term and get results
    // Replace this with your actual API call

    const results: SearchResult[] = [
      // Sample data - replace with your actual search results
      { name: 'Result 1', description: 'Description for Result 1' },
      { name: 'Result 2', description: 'Description for Result 2' },
    ];

    this.props.onSearchResults(results);
  };

  render() {
    return null; // Search component doesn't render anything visible
  }
}

export default Search;
