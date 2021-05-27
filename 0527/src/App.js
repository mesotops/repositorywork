import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Checkbox from '@material-ui/core/Checkbox';
import { ButtonGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {makeStyles} from '@material-ui/core/styles';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { orange,green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const outerTheme = createMuiTheme({
  palette: {
    primary:{
      main: green[400],
    },
    secondary: {
      main: orange[400],
    }
  },
});

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
    marginBottom: 10,
  },
});

function ButtonStyled(){
  const classes = useStyles();
  return(
    <Button className={classes.root}>
      自定義
    </Button>
  )
}

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
  <ThemeProvider theme={outerTheme}>
    <div className="App">
        
        <AppBar color="primary">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <Typography variant="h6">
                News
              </Typography>
             <Button color="secondary">Login</Button>
            </Toolbar>
        </AppBar>

        <header className="App-header">        
          <img src={logo} className="App-logo" alt="logo" />

          <TextField label="Outlined" variant="outlined" color="secondary" />
          <TextField label="date" variant="outlined" type="date" color="secondary"/>
          <TextField label="number" variant="outlined" type="number" color="secondary"/>
          <TextField
            label="email" color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <Typography variant="h4">
            Hello would
          </Typography>
          <ButtonStyled/>

          <CheckboxExample></CheckboxExample>

          <ButtonGroup>
          <Button startIcon={<SaveIcon />} endIcon={<SaveIcon />} href="#" style={{fontSize: 20}} size="large" onClick={() => { alert('yea') }} variant="contained" color="secondary">
            Kick Me
          </Button>

          <Button style={{fontSize: 20}} size="large" variant="contained" color="primary" startIcon={<CloudUploadIcon />} >
            Upload
          </Button>
          </ButtonGroup>

        </header>
    </div>
  </ThemeProvider>
  );
}

export default App;
