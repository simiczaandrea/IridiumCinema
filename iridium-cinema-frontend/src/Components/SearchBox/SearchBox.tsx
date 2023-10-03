import React from 'react'
import { searchBoxProps } from './SearchBoxInterface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './SearchBox.scss';

const SearchBox = (props:searchBoxProps) => {
  const {name, placeholder, value, onChange} = props;
  
  
  return (
    <div className='search-box'>
      <input
        className='search-box__inputField'
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <FontAwesomeIcon className='search-box__icon' icon={faMagnifyingGlass} />
    </div>
  )
}

export default SearchBox