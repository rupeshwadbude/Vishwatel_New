import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import adminRouteMap from "../../../routeControl/adminRouteMap";

function AcountSidebar({asideView, asideToggle}) {
  return (
    <>
        <div className={` min-vh-auto card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg ${asideView ? 'content-active' : ''}`}>
            <div className="card-inner-group" data-simplebar>
                <div className="card-inner">
                    <div className="user-card">
                        <div className="user-avatar bg-primary">
                            <span>AB</span>
                        </div>
                        <div className="user-info">
                            <span className="lead-text">Abu Bin Ishtiyak</span>
                            <span className="sub-text">info@softnio.com</span>
                        </div>
                        <div className="user-action">
                        <Dropdown>
                            <Dropdown.Toggle as="a" className="btn btn-icon btn-trigger me-n2">
                                <em className="icon ni ni-more-v"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                                <ul className="link-list-opt no-bdr">
                                    <li><Link to="#"><em className="icon ni ni-camera-fill"/><span>Change Photo</span></Link></li>
                                    {/* <li><Link to="#"><em className="icon ni ni-edit-fill"/><span>Update Profile</span></Link></li> */}
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="card-inner p-0">
                    <ul className="link-list-menu">
                        <li><Link className="active" to={adminRouteMap.ADMIN_PROFILE.path}><em className="icon ni ni-user-fill-c"/><span>Personal Infomation</span></Link></li>
                        <li><Link to={adminRouteMap.ADMIN_CHANGE_PASSWORD.path}><em className="icon ni ni-lock-alt-fill"/><span>Change Password</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
        { asideView ? <div onClick={() => asideToggle()} className="toggle-overlay" data-target="userAside"/> : ""}
    </>
  );
}

export default AcountSidebar;