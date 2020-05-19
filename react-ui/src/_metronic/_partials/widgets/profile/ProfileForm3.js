import React, {useState} from "react";
import { changePass } from "../../../../app/modules/Auth/_redux/authCrud";

const alertInitialState = {
    type: null,
    msg: null
}
export function ProfileForm3({ className }) {
    const [formData, setFormData] = useState({
        oldpass: null,
        newPass: null,
        confirmNewPass: null
    });
    const [alert, setAlert] = useState(alertInitialState)

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (alert.type !== null) {
            setAlert(alertInitialState)
        }
    }

    const onSubmit = async e => {
        e.preventDefault();
        if (formData.newPass === formData.confirmNewPass) {
            const result = await changePass(formData);
            setAlert({ type: result.type, msg: result.msg });
        }
        else {
            setAlert({ type: "danger", msg: "New Password and confirm password doesnot match!" })
        }


        // history.push('/CandProfile');
    };

    return (
        <div className={`card card-custom bg-gray-100 ${className}`}>
            {/* Header */}
            <div className="card-header border-0 bg-light">
                <div className="card-body">
                    <form role="form"  onSubmit={(e)=> onSubmit(e)} style={{ justifyContent: "center" }}>
                        {alert.type !== null ?
                            <div role="alert" className={`alert alert-${alert.type}`}>
                                <div className="alert-text">{alert.msg}</div>
                            </div>
                            : null
                        }
                        <div className="form-group">
                            <label className="control-label">Current Password</label>
                            <input onChange={e => onChange(e)} name="oldpass" type="password" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">New Password</label>
                            <input onChange={e => onChange(e)} name="newPass" type="password" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Re-type New Password</label>
                            <input onChange={e => onChange(e)} name="confirmNewPass"  type="password"  className="form-control" required/>
                        </div>
                        <div className="margiv-top-10">
                            <button type="submit" className="btn btn-success"> Change Password </button>
                            {/* <button href="#!" className="btn btn-danger"> Cancel </button> */}
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
}


