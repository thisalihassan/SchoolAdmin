import React from "react";

export function AdminForm2({ className }) {

    return (
        <div className={`card card-custom bg-gray-100 ${className}`}>
            {/* Header */}
            <div className="card-header border-0 bg-light">
                <div className="card-body">
                    <form role="form" action="#">
                        <h3 className=" font-weight-bolder text-primary">
                            Add School
                    </h3>
                        <hr />
                        <div class="form-group">
                            <label class="control-label">School Name</label>
                            <input type="text" placeholder="Name" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Address</label>
                            <input type="text" placeholder="Address" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Mobile Number</label>
                            <input type="text" placeholder="+1 646 580 DEMO (6284)" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Postal Code</label>
                            <input type="text" placeholder="Postal Code" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Fax Number</label>
                            <input type="text" placeholder="Fax" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">About</label>
                            <textarea class="form-control" rows="3" placeholder="We are KeenThemes!!!" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Website Url</label>
                            <input type="text" placeholder="http://www.mywebsite.com" class="form-control" />
                        </div>
                        <div class="margiv-top-10">
                            <button href="#!" class="btn btn-success"> Add </button>
                            <button href="#!" class="btn btn-danger"> Cancel </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
}


