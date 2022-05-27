import React, { useState } from "react";
import { TextField, Checkbox, TableCell, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  textfield: {
    width: "100%",
  },
  tablecell: {
    padding: ["7px 5px", "!important"],
    border: "1px solid rgba(224, 224, 224, 1)",
    borderCollapse: "collapse",
  },
  checkbox: {
    padding: ["2px 5px", "!important"],
  },
});
const AddRow = ({addRows,rowId}) => {
  const classes = useStyles();
  const [checkCheckbox,setCheckCheckbox]=useState(false);
  const handleChange = (e) =>{
    if(!checkCheckbox){
      setCheckCheckbox(true);
      addRows(oldArr => [...oldArr,rowId ])

    }
    else {
      setCheckCheckbox(false);

    }

  }
  const onTextChange = (e) =>{
    
  }
  return (
    <TableRow>
      <TableCell className={classes.tablecell}>
        <Checkbox 
        checked={checkCheckbox}
        size="large" className={classes.checkbox}
        onChange={(e) => handleChange(e)} />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField 
        className={classes.textfield}
            inputProps={{style: {height:30,padding: '0 5px'}}}
            onChange={(e) => onTextChange(e)}
        />
      </TableCell>
      <TableCell className={classes.tablecell}>
      <TextField 
        className={classes.textfield}
            inputProps={{style: {height:30,padding: '0 5px'}}}
            onChange={(e) => onTextChange(e)}
        />
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
