import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Input } from "../../../../_metronic/_partials/controls";
import * as auth from "../_redux/authRedux";
import { login } from "../_redux/authCrud";

function Login(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

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
  {
    /* email: "admin@demo.com",
              password: "demo" */
  }
  return (
    <div className="login-form login-signin">
      {/* begin::Head */}
      <div className="text-center mb-10 mb-lg-20">
        {/* https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage */}
        <h3 className="font-size-h1">
          <FormattedMessage id="AUTH.LOGIN.TITLE" />
        </h3>
        <p className="text-muted font-weight-bold">
          Enter your username and password
        </p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            // https://github.com/formatjs/react-intl/blob/master/docs/API.md#injection-api
            errors.email = intl.formatMessage({
              id: "AUTH.VALIDATION.REQUIRED_FIELD",
            });
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = intl.formatMessage({
              id: "AUTH.VALIDATION.INVALID_FIELD",
            });
          }

          if (!values.password) {
            errors.password = intl.formatMessage({
              id: "AUTH.VALIDATION.REQUIRED_FIELD",
            });
          }

          return errors;
        }}
        onSubmit={(values, { setStatus, setSubmitting }) => {
          enableLoading();
          setTimeout(() => {
            login(values.email, values.password)
              .then((payload) => {
                disableLoading();
                props.login(payload.data.token);
                {
                  /* localStorage.setItem("token", payload.token); */
                }
              })
              .catch(() => {
                disableLoading();
                setSubmitting(false);
                setStatus(
                  intl.formatMessage({
                    id: "AUTH.VALIDATION.INVALID_LOGIN",
                  })
                );
              });
          }, 1000);
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
            className="form"
            noValidate={true}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            {status ? (
              <div
                role="alert"
                className="mb-10 alert alert-custom alert-light-danger alert-dismissible"
              >
                <div className="alert-text font-weight-bold">{status}</div>
              </div>
            ) : (
              <div
                role="alert"
                className="mb-10 alert alert-custom alert-light-info alert-dismissible"
              >
                <div className="alert-text ">
                  Use account <strong>admin@demo.com</strong> and password{" "}
                  <strong>demo</strong> to continue.
                </div>
              </div>
            )}

            <div className="form-group">
              {/* <TextField
                    type="email"
                    label="Email"
                    margin="normal"
                    className="form-control form-control-solid rounded"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    helperText={touched.email && errors.email}
                    error={Boolean(touched.email && errors.email)}
                  /> */}
              <Field
                name="email"
                component={Input}
                placeholder="Email"
                label="Email"
              >
                {({ field, form, meta }) => (
                  <div>
                    <input
                      type="email"
                      {...field}
                      className={`${getInputClasses(meta)}`}
                      placeholder="Enter Email"
                    />
                    {meta.touched && meta.error && (
                      <div className="error invalid-feedback">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            </div>

            <div className="form-group">
              <Field
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
              {/* <TextField
                    type="password"
                    margin="normal"
                    label="Password"
                    className="form-control form-control-solid text-dark rounded"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    helperText={touched.password && errors.password}
                    error={Boolean(touched.password && errors.password)}
                  /> */}
            </div>

            {/* begin::Actions */}
            <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
              <Link
                to="/auth/forgot-password"
                className="text-dark-50 text-hover-primary my-3 mr-2"
                id="kt_login_forgot"
              >
                <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
              </Link>

              <button
                id="kt_login_signin_submit"
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
              >
                <span className={`${loading ? "pr-3" : ""}`}>Sign In</span>
                {loading && <span className="spinner-border text-light"></span>}
              </button>
              {/* OLD ONE: <button
                    id="kt_login_signin_submit"
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary shadow px-10 py-5 ${clsx({
                      "spinner spinner--right spinner--md spinner--light": loading
                    })}`}
                    style={loadingButtonStyle}
                  >
                    Sign In
                  </button> */}
            </div>
            {/* end::Actions */}
          </form>
        )}
      </Formik>
      {/*end::Form*/}
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
