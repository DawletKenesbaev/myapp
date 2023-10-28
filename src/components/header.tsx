// Header.tsx
import React, { Component } from 'react';

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
  initialSearchTerm: string;
}

interface HeaderState {
  searchTerm: string;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      searchTerm: this.props.initialSearchTerm,
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchTerm.trim());
  };

  render() {
    return (
      <div className="header">
        <div className='header-box'>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
            placeholder="Enter search term"
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </div>
    );
  }
}

export default Header;
