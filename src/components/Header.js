import React from 'react';

import SearchForm from './SearchForm';

const Header = props =>
    <div className="container">
        <SearchForm onSearch={props.onSearch}/>
    </div>

export default Header;