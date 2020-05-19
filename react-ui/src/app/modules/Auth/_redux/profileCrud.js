import axios from "axios";
import { URL, config, ImageConfig } from "../../../../utils/utils";
export const UPDATE_PROFILE = URL + "api/profile/update-user-profile";
export const FETCH_PROFILE = URL + "api/profile/fetch-user-profile";
export const UPDATE_AVATAR = URL + "api/profile/update-user-avatar";
export const GET_AVATAR = URL + "api/profile/get-user-avatar";


export const ME_URL = URL + "api/auth/";

export function updateProfile(profile) {
    return axios.post(UPDATE_PROFILE, profile, config);
}

export async function getAvatar() {
    var avatarPath = null
    await axios.get(GET_AVATAR, null, config)
    .then(res=>{
        avatarPath = res.data
    })
    .catch({});
    return avatarPath
}

export async function updateAvatar(file) {
    var message ={type:null, msg:""}
    await axios.post(UPDATE_AVATAR, file, ImageConfig)
    .then(res=>{
        message.type="success";
        message.msg="Image uploaded successfully"
    })
    .catch(err=>{
    
    const errors = err.response.data.errors;
    if (errors) {
        message.type="danger"
        errors.forEach(error => { message.msg +=error.msg+" " })
    }
    })
    return message;
}

