import axios from "axios";
import { URL, config } from "../../../../utils/utils";
export const ADD_USER = URL + "api/members/addMember";

export const ME_URL = URL + "api/auth/";

export async function addMember(formData) {
    console.log(formData)
    var message ={type:null, msg:""}
    await axios.post(ADD_USER, formData, config)
    .then(res=>{
        message.type="success";
        message.msg="User added successfully"
    })
    .catch(err=>{
    const errors = err.response.data.errors;
    if (errors) {
        message.type="danger"
        errors.forEach(error => { message.msg +=error.msg+" " })
    }
    });
    return message
  
}
