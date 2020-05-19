import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Input } from "../../../../_metronic/_partials/controls";
import * as auth from "../_redux/authRedux";
import { resetPassword } from "../_redux/authCrud";
import { URL, config } from "../../../../utils/utils";
import axios from "axios";
import queryString from "query-string";


 const ResetPassword =  (props) => {
  

  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [validToken, setTokenValdation] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false)
  const [formData, setFormData] = useState({
    id:null, 
    token:null
  });

  const checkToken = async (id, token) =>{
    
    const body = JSON.stringify({ id, token })
    const res = await axios.post(URL + "api/auth/confirmResetToken", body, config)
    .then(response=>{
      setFormData({id:id, token:token})
      setTokenValdation(true);
      setWaiting(false);
    }
    )
    .catch(err=>{
      
      setTokenValdation(false);
      setWaiting(false);
      
    });


  }

  useEffect( () => {

    const values = queryString.parse(window.location.search);
    if (values.token && values.id) {
      const id = values.id;
      const token = values.token;
      checkToken(id, token)
      
    }
    else{
    setTokenValdation(false);
    setWaiting(false);
      }

  

  },[]);

 

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const displaySuccessAltert = () =>{
    return(
        
       <div role="alert" className="alert alert-success">
                            <div className="alert-text">Password Reset Successfully</div>
                        </div>
    
    )
}

  const getInputClasses = (meta, fieldname) => {
    let result = "form-control form-control-solid h-auto py-5 px-6 ";
    if (meta.touched && meta.error) {
      result += " is-invalid";
    }

    if (meta.touched && !meta.error) {
      result += " is-valid";
    }

    return result;
  };

  return waiting ? null :
         !validToken ?  <Redirect to="/" /> :(

    
    <div className="login-form">
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">
          {/* <FormattedMessage id="AUTH.REGISTER.TITLE" /> */}
          Reset Password
        </h3>
        {/* <p className="text-muted font-weight-bold">
          Enter your details to create your account
        </p> */}
      </div>

      <Formik
        initialValues={{
          // email: "",
          // fullname: "",
          password: "",
          acceptTerms: true,
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.password) {
            errors.password = intl.formatMessage({
              id: "AUTH.VALIDATION.REQUIRED_FIELD",
            });
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = intl.formatMessage({
              id: "AUTH.VALIDATION.REQUIRED_FIELD",
            });
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword =
              "Password and Confirm Password didn't match.";
          }

          if (!values.acceptTerms) {
            errors.acceptTerms = "Accept Terms";
          }

          return errors;
        }}
        onSubmit={(values, { setStatus, setSubmitting }) => {
          enableLoading();
          console.log(formData)
          resetPassword( formData.id, values.password, values.confirmPassword, formData.token)
            .then((payload) => {
              disableLoading();
              setResetSuccess(true)
            })
            .catch(() => {
              setSubmitting(false);
              setStatus(
                intl.formatMessage({
                  id: "AUTH.VALIDATION.INVALID_LOGIN",
                })
              );
              disableLoading();
            });
        }}
      >
        {({
          values,
          status,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="form"
          >
            {status && (
              <div
                role="alert"
                className="mb-10 alert alert-custom alert-light-danger alert-dismissible"
              >
                <div className="alert-text font-weight-bold">{status}</div>
              </div>
            )}

  

            <div className="form-group">
              {/* <TextField
                  type="password"
                  margin="normal"
                  label="Password"
                  className="form-control form-control-solid rounded"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password && errors.password)}
                /> */}
                {resetSuccess? displaySuccessAltert():null}
              <Field
                type="password"
                name="password"
                component={Input}
                placeholder="Password"
                label="Password"
              >
                {({ field, form, meta }) => (
                  <div>
                    <input
                      type="password"
                      {...field}
                      className={`${getInputClasses(meta)}`}
                      placeholder="Enter Password"
                    />
                    {meta.touched && meta.error && (
                      <div className="error invalid-feedback">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            </div>

            <div className="form-group">
              {/* <TextField
                  type="password"
                  margin="normal"
                  label="Confirm Password"
                  className="form-control form-control-solid rounded"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                /> */}
              <Field
                type="password"
                name="confirmPassword"
                component={Input}
                placeholder="Confirm Password"
                label="Confirm Password"
              >
                {({ field, form, meta }) => (
                  <div>
                    <input
                      type="password"
                      {...field}
                      className={`${getInputClasses(meta)}`}
                      placeholder="Confirm Password"
                    />
                    {meta.touched && meta.error && (
                      <div className="error invalid-feedback">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            </div>

            <div className="form-group">
              <FormControlLabel
                label={
                  <>
                    I agree the{" "}
                    <Link to="/terms" target="_blank" rel="noopener noreferrer">
                      Terms & Conditions
                    </Link>
                    .
                    <span />
                  </>
                }
                control={
                  <Checkbox
                    color="primary"
                    name="acceptTerms"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    checked={values.acceptTerms}
                  />
                }
              />
            </div>

            <div className="form-group d-flex flex-wrap flex-center">
              <button
                type="submit"
                disabled={isSubmitting || !values.acceptTerms}
                className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
              >
                <span className={`${loading ? "pr-3" : ""}`}>Submit</span>
                {loading && <span className="spinner-border text-light"></span>}
              </button>

              <Link to="/auth/login">
                <button
                  type="button"
                  className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default injectIntl(connect(({ auth }) => ({ hasAuthToken: Boolean(auth.authToken) }),
 auth.actions)(ResetPassword));
