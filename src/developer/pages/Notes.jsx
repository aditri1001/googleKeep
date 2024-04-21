import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import TakeNote from '../components/TakeNote'
import Cards from '../components/Cards'
import { useSelector } from 'react-redux'

const Notes = () => {
  const [searchInput, setSearchInput] = useState("");

  const list = useSelector((state) => state.todos)

  return (
    <>
      <SearchBar setSearchInput={setSearchInput} />
      <TakeNote />
      <Cards list={list} searchInput={searchInput} />
    </>
  )
}

export default Notes