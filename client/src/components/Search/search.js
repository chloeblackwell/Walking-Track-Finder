import React, { useEffect, useState } from "react";
import './style.css';

function Search(props) {

    // Filter through results 
    return (
        <form>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                name="search"
                type="text"
                label="Search!"
                className="form-control"
                placeholder="Search Name"
                id="searchBar"
            />
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success mt-3 searchButton">
                Search
                </button>
        </form>
    )

}

export default Search;