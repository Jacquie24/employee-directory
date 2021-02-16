import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        
            <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Employee Directory</h1>
    <p className="lead">Click on Name to filter alphabetically or use the search bar to narrow your results.</p>
    <div className="row push-to-bottom"></div>

  </div>
</div>
        
    );
};

export default Header;