import React from 'react';
import "./SearchBar.css";


const SearchBar = (props) => {
    return (
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
           <form>
      <input className="form-control mr-sm-2" type="search" placeholder="Name" aria-label="Search"></input>
      <button className="btn my-2 my-sm-2 mb-2" type="submit" onSubmit={props.change}>Search</button>
    </form> 
        </div>
        </div>
    );
};

export default SearchBar;