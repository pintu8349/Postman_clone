import React from 'react';
import {Box, Select,MenuItem,TextField,Button } from '@mui/material';
import {makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  component: {
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  select : {
    width: 150,
    height:40
  },
  Textfield :{
    width: '100%',
    background:'#F6F6F6'
  },
  button: {
    width:100,
    height: 40,
    marginLeft:[5 , '!important']
  }
})


function Form() {
  const classes = useStyles();

  return (
    <Box className={classes.component}>
  <Select
   
    //value={age}
    className={classes.select}
    label="POST"
    //onChange={handleChange}
  >
    <MenuItem value={10}>POST </MenuItem>
    <MenuItem value={20}>GET</MenuItem>
    
  </Select>
  <TextField 
    size='small'
    className={classes.Textfield}
  />
  <Button
   className={classes.button}
   variant="contained"
   >
  Send</Button>
    </Box>
  )
}

export default Form