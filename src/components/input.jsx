import React from "react";
function Input({ handleOnChane }) {
  return (
    <>
      <input type="search" placeholder="search product ....." onChange={handleOnChane} />
    </>
  )
}
export default Input;