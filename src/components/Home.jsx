import { useContext } from "react";
import Form from "./Form";
import Header from "./Header";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SelectTab from "./SelectTab";
import Response from "./Response";
import ErrorScreen from "./ErrorScreen";
import {DataContext} from '../context/Dataprovider';

import {checkParams} from '../utils/common-utils'
const useStyles = makeStyles({
    component: {
        width :'60%',
        margin: '20px auto 0 auto'
    }
})

const Home = ()=> {
    const classes = useStyles();
    const {formData ,jsonText,paramData,headerData} =useContext(DataContext);
    const onSendClick =() => {
        if(checkParams(formData ,jsonText,paramData,headerData)){
            return false;
        }

    }
    return (
        <>
        <Header />
        <Box className={classes.component}>
            <Form onSendClick={onSendClick}/>
            <SelectTab />
            {/* <Response /> */}
            <ErrorScreen />
        </Box>
       
        </>

    )

}
export default Home;