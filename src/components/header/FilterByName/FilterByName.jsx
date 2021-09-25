import React from "react";
import Input from "../../ui/Input/Input";

function FilterByName({ setFilter, filter }) {
  return (
    <>
      <Input
        placeholder="Enter Name"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </>
  );
}

export default FilterByName;
