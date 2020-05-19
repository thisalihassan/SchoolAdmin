/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownMenu2 } from "../../dropdowns";
import {getAvatar} from "../../../../app/modules/Auth/_redux/profileCrud";
import { URL, config } from "../../../../utils/utils";
import axios from "axios";

export function ProfileSideBar({ className }) {
    // const [avatar, setAvatar] = useState(null);
    const [formData, setFormData] = useState({
        user:null,
        occupation: null,
        about: null,
        avatar:null,
        websiteUrl:null
    })

    // const getProfilePic = async () =>{
    //     const avatarPath = await getAvatar();
    //     setAvatar(avatarPath)
    // }
    useEffect( () => {
        axios.get(URL + "api/profile/get-user-profile", config)
            .then(res=>{
                console.log(res.data)
                var {user, occupation, about, avatar, websiteUrl, fullname}= res.data
                setFormData({user:user, occupation:occupation, avatar:avatar,
                             about:about,websiteUrl:websiteUrl, fullname:fullname})
            })
            .catch(err=>{})
        // getProfilePic();
    },[]);

    return (
        <>
            <div className={`card card-custom bg-gray-10 ${className}`}>
                {/* Header */}
                <div className="card-header">
                    <br />
                    <div className="card card-body bg-gray-100">
                        <img src= {formData.user && formData.user.avatar ? `${URL}${formData.user.avatar}`
                        :"data:image/jpeg;base64,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"
                    }    
                        alt="profile-pic"
                            className="UserProfileImage"
                        />
                        <br />
                        <h4 className="card-title font-weight-bolder text-gray-100" style={{ justifyContent: "center" }}> {formData && formData.user && formData.user.fullname} </h4>
                        <h6 className="card-title" style={{ justifyContent: "center" }}> {formData && formData.occupation ? formData.occupation : "Not Specified"} </h6>
                        <button type="button" className="btn btn-circle btn-danger btn-sm">Message</button>
                    </div>
                </div>
                <div className="card card-body bg-gray-100 UserProfileSidebar">
                    <div className="portlet light bordered">
                        <div className="row list-separated profile-stat">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="uppercase profile-stat-title"> 37 </div>
                                <div className="uppercase profile-stat-text"> Projects </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="uppercase profile-stat-title"> 51 </div>
                                <div className="uppercase profile-stat-text"> Tasks </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <br/>
                        <h4 class="profile-desc-title">{`About ${formData && formData.user && formData.user.fullname}`}</h4>
                        <span class="profile-desc-text"> {formData.about !==null ? formData.about : "Bio Not provided"} </span>
                        <br/>
                        <div class="margin-top-20 profile-desc-link">
                            <i class="fa fa-globe"></i>
                        <a href={formData && formData.websiteUrl}>{formData && formData.websiteUrl!==null ? formData.websiteUrl : "Website not specified"}</a>
                        </div>
                        <div class="margin-top-20 profile-desc-link">
                            <i class="fa fa-twitter"></i>
                            <a href="http://www.twitter.com/keenthemes/">@keenthemes</a>
                        </div>
                        <div class="margin-top-20 profile-desc-link">
                            <i class="fa fa-facebook"></i>
                            <a href="http://www.facebook.com/keenthemes/">keenthemes</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


