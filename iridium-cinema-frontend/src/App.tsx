import React, { useEffect, useState } from 'react';
import './App.scss';
import Button from './Components/Button/Button';
import TextField from './Components/TextFeild/TextField';
import Checkbox from './Components/Checkbox/Checkbox';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import SearchBox from './Components/SearchBox/SearchBox';

function App() {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const [helpText, setHelpText] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleClick = () => {
    alert('Leave me alone')
  }

  const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }
  const handleValidation = () => {
      if(text === ""){
          setIsError(true);
          setHelpText('The input field should be filled!')
      } else {
          setIsError(false);
          setHelpText('');
      }
  }

  useEffect(() => {
    setTimeout(()=> {
      setLoading(false);
    }, 2000)
  })

  const handleChecked = () => {
    setChecked(!checked)
  }

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event?.target.value)
  }

  return (
    <div className="App">
       {loading && <LoadingSpinner/>}
     
       <Button 
          type= 'button'
          label= 'Click Me!!!'
          variant='outline'
          onClick={handleClick}
        />
        
        <div className='container'>
          <TextField 
            label='Some text' 
            type='text' 
            isRequired={true} 
            name='text' 
            onChange={handleChange} 
            isError={isError}
            value={text}
            helpText={helpText}
          />

        <Button 
          type= 'button'
          label= 'Validate textfield '
          variant='filled'
          onClick={handleValidation}
        />

        <SearchBox 
          name={'searchMovie'} 
          placeholder={'Find movie'} 
          value={searchInput} 
          onChange={handleSearchInput}          
        />
        
        </div>
        <Checkbox
          name="test"
          label= "test"
          isChecked={checked}
          onChange={handleChecked}
        />
    </div>
  );
}

export default App;
