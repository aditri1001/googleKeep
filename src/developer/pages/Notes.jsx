import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import TakeNote from '../components/TakeNote'
import Cards from '../components/Cards'
import { useSelector } from 'react-redux'

const styles = {
  background: "rgb(255,255,255)",
background: "linear-gradient(0deg, rgba(255,255,255,1) 35%, rgba(240,240,240,1) 98%)"
}

const Notes = () => {
  const [searchInput, setSearchInput] = useState("");
  const [alignTrue, setAlignTrue] = useState(false)
  const [align, setAlign] = useState({ css: "flex-row", height: 317 })

  const list = useSelector((state) => state.todos)

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <>
      <SearchBar setSearchInput={setSearchInput} alignTrue={alignTrue} setAlignTrue={setAlignTrue} setAlign={setAlign} />
      <div className='w-full h-full' style={styles}>
        <TakeNote />
        <Cards list={list} searchInput={searchInput} align={align} />
      </div>
    </>
  )
}

export default Notes