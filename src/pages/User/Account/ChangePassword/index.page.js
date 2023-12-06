import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Password as TextPassword, CommonButton, PageHeader, AcountSidebar} from "../../../../components/index";

function AdminChangePassword() {
    const [asideView, setAsideView] = useState(false);
    const [currentPassword, setCurrentPassword] = useState(false);
    const [newPassword, setNewPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const asideToggle = () =>{
        setAsideView(!asideView);
    }
    if(asideView){
        document.querySelector('body').classList.add('toggle-shown')
    }else{
        document.querySelector('body').classList.remove('toggle-shown')
    }
    return(
        <>
            <div className="nk-block">
                <div className="card">
                    <div className="card-aside-wrap">
                        <div className="card-inner card-inner-lg">
                            <div className="nk-block-head nk-block-head-lg">
                                <div className="nk-block-between">
                                    <PageHeader heading="Change Password">
                                        <p>Set a unique password to protect your account.</p>
                                    </PageHeader>
                                    <div className="nk-block-head-content align-self-start d-lg-none">
                                        <Link to="#" onClick={() => asideToggle()} className={`toggle btn btn-icon btn-trigger mt-n1 ${asideView ? 'active' : ''}`}><em className="icon ni ni-menu-alt-r"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="nk-block wide-xs">
                                <form>
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label" htmlFor="password">Old Password</label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <TextPassword
                                                className="form-control form-control-lg"
                                                name="password"
                                                placeholder="Enter current password"
                                                setFieldValue=""
                                                type={currentPassword ? "text" : "password"}
                                                toggleIcon={
                                                <Link
                                                    to="#"
                                                    onClick={(e) => {
                                                    e.preventDefault();
                                                    setCurrentPassword(!currentPassword);
                                                    }}
                                                    className="form-icon lg form-icon-right passcode-switch"
                                                    data-target="password"
                                                >
                                                    <em
                                                    className={`passcode-icon icon-show icon ni ni-eye${
                                                        currentPassword ? "" : "-off"
                                                    } `}
                                                    />
                                                </Link>
                                                }
                                                icon=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label" htmlFor="password">New Password</label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <TextPassword
                                                className="form-control form-control-lg"
                                                name="password"
                                                placeholder="Enter new password"
                                                setFieldValue=""
                                                type={newPassword ? "text" : "password"}
                                                toggleIcon={
                                                <Link
                                                    to="#"
                                                    onClick={(e) => {
                                                    e.preventDefault();
                                                    setNewPassword(!newPassword);
                                                    }}
                                                    className="form-icon lg form-icon-right passcode-switch"
                                                    data-target="password"
                                                >
                                                    <em
                                                    className={`passcode-icon icon-show icon ni ni-eye${
                                                        newPassword ? "" : "-off"
                                                    } `}
                                                    />
                                                </Link>
                                                }
                                                icon=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group passwordInfo">
                                        <h6>Password contains:</h6>
                                        <p className="text-success mb-1"><em className="icon ni ni-check"/> At least 1 Capital Letter.</p>
                                        <p className="text-success mb-1"><em className="icon ni ni-check"/> At least 1 Special Character &amp; 1 Number.</p>
                                        <p className="text-danger mb-1"><em className="icon ni ni-check"/> 6-15 characters long.</p>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label" htmlFor="password">Confirm New Password</label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <TextPassword
                                                className="form-control form-control-lg"
                                                name="password"
                                                placeholder="Confirm new password"
                                                setFieldValue=""
                                                type={confirmPassword ? "text" : "password"}
                                                toggleIcon={
                                                <Link
                                                    to="#"
                                                    onClick={(e) => {
                                                    e.preventDefault();
                                                    setConfirmPassword(!confirmPassword);
                                                    }}
                                                    className="form-icon lg form-icon-right passcode-switch"
                                                    data-target="password"
                                                >
                                                    <em
                                                    className={`passcode-icon icon-show icon ni ni-eye${
                                                        confirmPassword ? "" : "-off"
                                                    } `}
                                                    />
                                                </Link>
                                                }
                                                icon=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <CommonButton
                                        extraClassName="btn btn-lg btn-primary btn-block"
                                        // loading={loading}
                                        htmlType="button"
                                        // type="submit"
                                        >Update Password</CommonButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <AcountSidebar asideView={asideView} asideToggle={asideToggle}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminChangePassword;