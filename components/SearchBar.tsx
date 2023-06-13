"use client";

import { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setmanufacturer] = useState('');
  
  const handlerSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handlerSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar