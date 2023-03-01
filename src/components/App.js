import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [goods, setGoods] = useState([])

  function removeListingFromState(goodId) { 
    const filteredArray = goods.filter( good => {
      return good.id !== goodId;
    } )
    setGoods( filteredArray )
  }
  

  useEffect(() => {
  
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(setGoods)
  },[])
 
  const [searchString, setSearchString] = useState('')

  const toggleSearch = aNewString => {
    setSearchString(aNewString.toLowerCase())
  }

  const searchedListings = goods.filter( goodObj => {
    if( goodObj.description.toLowerCase().includes( searchString ) ) {
      return true
    }
  } )
  
  return (
    <div className="app">
      <Header toggleSearch={toggleSearch}/>
      <ListingsContainer goods={searchedListings} removeListingFromState={removeListingFromState} />
    </div>
  );
}

export default App;
