import React, { useState } from "react";

function Item({ name, category }) {

  const [li, liState] = useState(false)

  function handleClick() {
    liState((li) => !li)
  }

  const [text, textState] = useState(false)

  function textChange() {
    textState((text) => !text)
  }

  return (
    <li onClick={handleClick} className={li ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={textChange} className="add">{text ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
