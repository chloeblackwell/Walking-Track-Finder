import React, { Component } from "react";


class Search extends Component {
    render() {
        return (
            <form>
                <input
                    name="search"
                    type="text"
                    label="Search!"
                    className="form-control"
                    placeholder="Search Name"
                    id="searchBar"
                />
                <button type="submit" className="btn btn-success mt-3 searchButton">
                    Search
                </button>
            </form>
        )

    }
}

export default Search;