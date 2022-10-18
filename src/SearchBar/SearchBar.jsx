import './searchBar.css';
const SearchBar = () => {
    return (
        <div className="search-bar + logo">
            <div></div>

            <div className="search-bar">
                <input type="text" name="searchBar" id="searchBar"></input>
                <button className="search-button">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
