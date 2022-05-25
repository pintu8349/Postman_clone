import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Tabs, Tab } from "@mui/material";
import CreateTable from "./CreateTable";

const useStyles = makeStyles({
    component: {
        marginTop:20
    },
    tab :{
        textTransform: ['none', "!important"]
    }
})
const SelectTab = () => {
    const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className= {classes.component} >
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{sx: {backgroundColor: '#f26B3A', height: 4, bottom:2}}}
        textColor="none"
        
      > 
        <Tab label="Params" className={classes.tab} />
        <Tab label="Header" className={classes.tab}/>
        <Tab label="Body" className={classes.tab}/>
      </Tabs>
      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        <CreateTable text={'Query Params'}/>
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <CreateTable text={'Header'} />
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        Body
      </Box>
    </Box>
  );
};

export default SelectTab;
