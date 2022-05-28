import axios from "axios";
export const getData =async (formData ,jsonText,paramData,headerData) =>
{
    
    try {
        return await axios({

        })
    } catch (error) {
        console.log('error while caling getdate Api', error);
        return 'error';
        
    }
}