import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({goods, removeListingFromState}) {
 
  const cardArray = goods.map(good => <ListingCard key={good.id} goodId={good.id} image={good.image} 
    location={good.location} description={good.description} removeListingFromState={removeListingFromState}/>)
  // console.log(cardArray)
    // <ListingCard />
  
  
  return (
    <main>
      <ul className="cards">
        {cardArray}
      </ul>
    </main>
  );
  }

export default ListingsContainer;
