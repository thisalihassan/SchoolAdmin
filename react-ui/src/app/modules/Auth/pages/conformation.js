import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LayoutSplashScreen } from "../../../../_metronic/layout";
import * as auth from "../_redux/authRedux";
import { URL, config } from "../../../../utils/utils";
import axios from "axios";
import queryString from "query-string";
class Confirmation extends Component {
  async componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    if (values.token && values.id) {
      const id = values.id;
      const token = values.token;
      const body = JSON.stringify({ id, token });
      console.log(body);
      const res = await axios.post(URL + "api/auth/confirmation", body, config);
      this.props.register(res.data.token);
    }
  }

  render() {
    const { hasAuthToken } = this.props;
    return hasAuthToken ? <Redirect to="/" /> : <LayoutSplashScreen />;
  }
}

export default connect(
  ({ auth }) => ({ hasAuthToken: Boolean(auth.authToken) }),
  auth.actions
)(Confirmation);
