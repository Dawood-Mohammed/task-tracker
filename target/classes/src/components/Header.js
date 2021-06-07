import React from 'react';
import Button from './Button';

const Header = ({ title, toggleAdd ,showAdd}) => {
  return (
    <header>
      <div className='header'>
        <h2>{title}</h2>
        <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={toggleAdd}/>
      </div>
    </header>
  )
}

export default Header
