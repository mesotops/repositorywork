import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Checkbox from '@material-ui/core/Checkbox';
import { ButtonGroup } from '@material-ui/core';

function CheckboxExample(){
  const [checked, setChecked] = React.useState(true);
  return(
    <div>
      <Checkbox 
        checked={checked} 
        onChange={(e)=>setChecked(e.target.checked)} 
        inputProps={{'aria-label':'secondary checkbox'}}        
      />
    </div>
  )
}

function App() {
  return (

    <div className="App">
        
        <header className="App-header">        
          <img src={logo} className="App-logo" alt="logo" />

          <CheckboxExample></CheckboxExample>
          <ButtonGroup>
          <Button startIcon={<SaveIcon />} endIcon={<SaveIcon />} href="#" style={{fontSize: 20}} size="large" onClick={() => { alert('yea') }} variant="contained" color="secondary">
            Kick Me
          </Button>

          <Button style={{fontSize: 20}} size="large" variant="contained" color="default" startIcon={<CloudUploadIcon />} >
            Upload
          </Button>
          </ButtonGroup>
        </header>
    </div>

  );
}

export default App;
