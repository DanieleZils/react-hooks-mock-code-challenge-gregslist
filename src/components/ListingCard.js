import React, {useState} from "react";

function ListingCard({image, location, description, goodId, removeListingFromState}) {
const [like, setLike] = useState(false)

function handleLike(){
 setLike(like => !like)
}

const handleDelete = () => {
  fetch( `http://localhost:6001/listings/${goodId}`, { method: 'DELETE' } )
  removeListingFromState(goodId)
}
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick ={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
