import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import './SearchBar.css'


function SearchBar() {

    const cameras = useSelector((state) => state.cameras)
    const camerasArr = Object.values(cameras)

    const [value, setValue] = useState("");
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const onClick = () => {
        setShowSearch(false)
        setQuery("")
    }

    return (
        <div>
            <div className="nav-search-div">
                <input
                    id="nav-search"
                    placeholder="Search Cameras..."
                    onChange={(e) => {
                        setShowSearch(true);
                        setQuery(e.target.value)}}
                    value={query}
                />
                <div className="results-div">
                {query && showSearch
                    ? camerasArr
                        .filter((camera) => {
                            if (camera.brand.toLowerCase().includes(query.toLowerCase())) {
                                return camera;
                            } else if (camera.model.toLowerCase().includes(query.toLowerCase())) {
                                return camera;
                            }
                        })
                        .map((camera) => (
                            <div className="camera-search-result" key={camera.id}>
                                <NavLink to={`/cameras/${camera.id}`} onClick={onClick} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                    <p className="camera-result">{camera.brand} {camera.model}</p>
                                </NavLink>
                            </div>
                        ))
                    : null}
                    </div>
            </div>
        </div>
    )
}

export default SearchBar;
