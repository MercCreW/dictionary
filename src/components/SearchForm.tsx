import React from 'react';
import './SearchForm.css';
import search from '../images/searchBtn.png'

interface ISearchProps{
  onSubmitSearch: (item: String) => void;
}


const SearchForm: React.FC<ISearchProps> = ({onSubmitSearch}) => {
  const [query, setQuery] = React.useState('');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitSearch(query);
  }


  return (
    <section className="search">
      <form name="search" className="search__form" onSubmit={handleOnSubmit}>
        <input className="search__input" placeholder="text" onChange={handleOnChange} />
        <button className="search__button" type='submit'>
          <img className="search__img" src={search} alt="Искать" />
        </button>
      </form>
    </section>

  );
}

export default SearchForm;
