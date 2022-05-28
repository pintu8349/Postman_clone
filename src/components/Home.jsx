import { useContext ,useState } from "react";
import Form from "./Form";
import Header from "./Header";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SelectTab from "./SelectTab";
import Response from "./Response";
import ErrorScreen from "./ErrorScreen";
import SnackBar from "./SnackBar"
import {DataContext} from '../context/Dataprovider';
import {getData} from '../service/api'

import {checkParams} from '../utils/common-utils'
const useStyles = makeStyles({
    component: {
        width :'60%',
        margin: '20px auto 0 auto'
    }
})
//home started building
const Home = ()=> {
    const classes = useStyles();
    const [error,setError] =useState(false);
    const [errorMsg,setErrorMsg]=useState('');
    const {formData ,jsonText,paramData,headerData} =useContext(DataContext);
    const onSendClick =async () => {
        if(!checkParams(formData ,jsonText,paramData,headerData,setErrorMsg)){
            setError(true);
            return false;
        }
        let response= await getData(formData ,jsonText,paramData,headerData);
    }
    return (
        <>
        <Header />
        <Box className={classes.component}>
            <Form onSendClick={onSendClick}/>
            <SelectTab />
            {/* <Response /> */}
            <ErrorScreen />
            {error && <SnackBar error={error} setError={setError} errorMsg={errorMsg}  />}
        </Box>
       
        </>

    )

}
export default Home;