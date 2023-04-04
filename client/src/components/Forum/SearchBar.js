import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import '../Forum/Forum.css';


export default function SearchBar({ posts, setSearchResults }) {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

  return (
    <form className="search" onSubmit={handleSubmit}>
    <input
        className="search__input"
        type="text"
        id="search"
        placeholder='Search Through Topics..'
        onChange={handleSearchChange}
    />
    <button className="search__button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
</form>
  );
}
