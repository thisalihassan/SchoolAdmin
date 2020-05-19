import React from "react";

export function AdminForm1({ className }) {

    return (
        <div className={`card card-custom bg-gray-100 ${className}`}>
            {/* Header */}
            <div className="card-header border-0 bg-light">
                <div className="card-body">
                    <br />
                    <form role="form" action="#">
                    <h3 className=" font-weight-bolder text-primary">
                        Add / Update User
                    </h3>
                    <hr/>
                        <div className="form-group">
                            <label className="control-label">First Name</label>
                            <input type="text" placeholder="John" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Last Name</label>
                            <input type="text" placeholder="Doe" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Mobile Number</label>
                            <input type="text" placeholder="+1 646 580 DEMO (6284)" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Interests</label>
                            <input type="text" placeholder="Design, Web etc." className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Occupation</label>
                            <input type="text" placeholder="Web Developer" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">About</label>
                            <textarea className="form-control" rows="3" placeholder="We are KeenThemes!!!" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Website Url</label>
                            <input type="text" placeholder="http://www.mywebsite.com" className="form-control" />
                        </div>
                        <div className="margiv-top-10">
                            <button href="#!" className="btn btn-success"> Submit </button>
                            <button href="#!" className="btn btn-danger"> Cancel </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
}


