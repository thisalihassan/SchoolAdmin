/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";

export function AdvanceTablesWidget4({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* Head */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">User Stat</span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span>
        </h3>
        <div className="card-toolbar">
          <a href="#" className="btn btn-success font-weight-bolder font-size-sm mr-3">New Report</a>
          <a href="#" className="btn btn-danger font-weight-bolder font-size-sm">Create</a>
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-0 pb-3">
        <div className="tab-content">
          <div className="table-responsive">
            <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
              <thead>
                <tr className="text-left text-uppercase">
                  <th className="pl-7" style={{ minWidth: "250px" }}><span className="text-dark-75">User Name</span></th>
                  <th style={{ minWidth: "100px" }}>Email</th>
                  <th style={{ minWidth: "100px" }}>Website</th>
                  <th style={{ minWidth: "130px" }}>rating</th>
                  <th style={{ minWidth: "80px" }} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pl-0 py-8">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                        <span className="symbol-label">
                          <span className="svg-icon h-75 align-self-end">
                            <SVG src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")} />
                          </span>
                        </span>
                      </div>
                      <div>
                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Brad
                          Simmons</a>
                        <span className="text-muted font-weight-bold d-block">HTML, JS, ReactJS</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Bradsimmons@hotmail.com
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      https://bradsimmons.cf
                      </span>
                  </td>
                  <td>
                    <img src={toAbsoluteUrl("/media/logos/stars.png")} alt="image" style={{ width: "5.5rem" }} />
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Best Rated
                      </span>
                  </td>
                  <td className="pr-0 text-right">
                    <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Write.svg"
                          )}
                        ></SVG>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0 py-0">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                        <span className="symbol-label">
                          <span className="svg-icon h-75 align-self-end">
                            <SVG src={toAbsoluteUrl("/media/svg/avatars/018-girl-9.svg")} />
                          </span>
                        </span>
                      </div>
                      <div>
                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Jessie
                          Clarcson</a>
                        <span className="text-muted font-weight-bold d-block">C#, ASP.NET, MS SQL</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Jessie@hotmail.com
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      https://JessieClar.cf
                      </span>
                  </td>
                  <td>
                    <img src={toAbsoluteUrl("/media/logos/stars.png")} alt="image" style={{ width: "5.5rem" }} />
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Best Rated
                      </span>
                  </td>
                  <td className="pr-0 text-right">
                    <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Write.svg"
                          )}
                        ></SVG>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0 py-8">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                        <span className="symbol-label">
                          <span className="svg-icon h-75 align-self-end">
                            <SVG src={toAbsoluteUrl("/media/svg/avatars/047-girl-25.svg")} />
                          </span>
                        </span>
                      </div>
                      <div>
                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                          Lebron Wayde
                        </a>
                        <span className="text-muted font-weight-bold d-block">PHP, Laravel, VueJS</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      LWayde@hotmail.com
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      https://Wayde.cf
                      </span>
                  </td>
                  <td>
                    <img src={toAbsoluteUrl("/media/logos/stars.png")} alt="image" style={{ width: "5.5rem" }} />
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Best Rated
                      </span>
                  </td>
                  <td className="pr-0 text-right">
                    <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Write.svg"
                          )}
                        ></SVG>
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
