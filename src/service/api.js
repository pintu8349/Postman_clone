import axios from "axios";
import { getHeadersAndParams } from "../utils/common-utils";
export const getData =async (formData ,jsonText,paramData,headerData) =>
{
    const apiType = formData.type.toLowerCase();
    const apiURL = formData.url;
    const apiHeaders =getHeadersAndParams(headerData);
    const apiParams =getHeadersAndParams(paramData);
    try {
        return await axios({
            method:apiType,
            url:apiURL,
            body: jsonText,
            headers:apiHeaders,
            params:apiParams
        })
    } catch (error) {
        console.log('error while caling getdata Api', error);
        return 'error';
        
    }
}