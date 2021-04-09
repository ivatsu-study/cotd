// @flow
import React from "react";

/**
 * 
 * @returns 
 */
export default function StorePicker(): any {
  return (
    <form className="store-selector">
      <h2>Please Enter A Store</h2>
      <input type="text" placeholder="Store Name" required />
      <button type="submit">Visit Store -></button>
    </form>
  );
}
