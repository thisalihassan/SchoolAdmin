import axios from "axios";
import { URL, config } from "../../../../utils/utils";
export const LOGIN_URL = URL + "api/auth/";
export const REGISTER_URL = URL + "api/users/";
export const REQUEST_PASSWORD_URL = URL + "api/auth/forgot-password";
export const RESET_PASSWORD_URL = URL + "api/auth/reset-password";
export const CHANGE_PASS = URL + "api/auth/change-pass";

export const ME_URL = URL + "api/auth/";

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password }, config);
}

export function register(email, fullname, password) {
  return axios.post(REGISTER_URL, { email, fullname, password }, config);
}

export function requestPassword(email) {

  return axios.post(REQUEST_PASSWORD_URL, { email }, config);
}

export function resetPassword(id, password, cpassword, token){
  return axios.post(RESET_PASSWORD_URL, { id, password, cpassword, token }, config);
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL, {}, config);
}

export async function changePass(formData) {
  var message ={type:null, msg:""}
  await axios.post(CHANGE_PASS, formData, config)
  .then(res=>{
      message.type="success";
      message.msg="Password Changed successfully"
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