import css from "./SearchBox.module.css"

const SearchBox = ({filter, setFilter}) => { 

    return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.inputSearch}
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;