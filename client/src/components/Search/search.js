// import React, { useEffect, useState } from "react";
// import './style.css';

// function Search() {

//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchResults, setSearchResults] = useState([]);

//     const handleInputChange = event => {
//         setSearchTerm(event.target.value);
//     }

//     useEffect(() => {
//         const results = tracks.filter(track => {
//             track.toLowerCase().includes(searchResults)
//         });
//         setSearchResults(results);
//     }), [searchResults];

//     // Filter through results 
//     return (
//         <form>
//             <input
//                 value={searchTerm}
//                 onChange={handleInputChange}
//                 name="search"
//                 type="text"
//                 label="Search!"
//                 className="form-control"
//                 placeholder="Search Name"
//                 id="searchBar"
//             />
//             <button type="submit"  className="btn btn-success mt-3 searchButton">
//                 Search
//                 </button>
//         </form>
//     )

// }

// export default Search;