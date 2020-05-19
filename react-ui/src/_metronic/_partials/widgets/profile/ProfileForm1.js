import React, { useState, useEffect } from "react";
import {updateProfile} from "../../../../app/modules/Auth/_redux/profileCrud";
import { URL, config } from "../../../../utils/utils";
import axios from "axios";

export function ProfileForm1({ className }) {

    const [formData, setFormData] = useState({
        fname:null,
        lname:null, 
        mobno:null,
        interests: null,
        occupation: null,
        about: null,
        websiteurl:null
    })
    useEffect( () => {
    axios.get(URL + "api/profile/get-user-profile", config)
    .then(res=>{
        var {firstName, lastName, moblieNo, interests, occupation, about, websiteUrl }= res.data
        setFormData({fname:firstName, lname:lastName, occupation:occupation, mobno:moblieNo,
                        websiteurl:websiteUrl, interests:interests, about:about})
    })
    .catch(err=>{})

    },[]);
    

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        updateProfile(formData);

        
        // history.push('/CandProfile');
    };  
    const { fname, lname, occupation, mobno, websiteurl, interests, about } = formData;
    return (
        <div className={`card card-custom bg-gray-100 ${className}`}>
            {/* Header */}
            <div className="card-header border-0 bg-light">
                <div className="card-body">
                    <form role="form" action="#" onSubmit={onSubmit} style={{ justifyContent: "center" }}>
                        <div class="form-group">
                            <label class="control-label">First Name</label>
                            <input onChange={e => onChange(e)} value={fname} name="fname" type="text" placeholder="John" class="form-control" /> 
                        </div>
                        <div class="form-group">
                            <label class="control-label">Last Name</label>
                            <input onChange={e => onChange(e)} value={lname} name="lname" type="text" placeholder="Doe" class="form-control" /> 
                        </div>
                        <div class="form-group">
                            <label class="control-label">Mobile Number</label>
                            <input  onChange={e => onChange(e)} value={mobno} name="mobno" type="text" placeholder="+1 646 580 DEMO (6284)" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Interests</label>
                            <input  onChange={e => onChange(e)} value={interests} name="interests" type="text" placeholder="Design, Web etc." class="form-control" /> 
                        </div>
                        <div class="form-group">
                            <label class="control-label">Occupation</label>
                            <input  onChange={e => onChange(e)} value={occupation} name="occupation" type="text" placeholder="Web Developer" class="form-control" /> 
                        </div>
                        <div class="form-group">
                            <label class="control-label">About</label>
                            <textarea  onChange={e => onChange(e)} value={about} name="about" class="form-control" rows="3" placeholder="We are KeenThemes!!!"/>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Website Url</label>
                            <input  onChange={e => onChange(e)} value={websiteurl} name="websiteurl" type="text" placeholder="http://www.mywebsite.com" class="form-control" /> 
                        </div>
                        <div class="margiv-top-10">
                            <button class="btn btn-success"> Save Changes </button>
                            <button href="#!" class="btn btn-danger"> Cancel </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
}


