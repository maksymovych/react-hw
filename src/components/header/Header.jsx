import FilterByAge from "./FilterByAge/FilterByAge";
import FilterByName from "./FilterByName/FilterByName";
import s from "./Header.module.css";
import React from "react";

function Header(props) {
  return (
    <header className={s.header}>
      <form className={s.searchWrapper}>
        <h2>Filter:</h2>
        <FilterByName setFilter={props.setFilter} filter={props.filter} />
        <FilterByAge sort={props.sort} setSort={props.setSort} />
      </form>
    </header>
  );
}

export default Header;
