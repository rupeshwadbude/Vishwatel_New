import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logger, modalNotification } from "../../../../utils";
import {
    AcountSidebar,
//   Breadcrumb,
Input as TextInput,
  MetaTags, ModalComponent, PageHeader,
//   PageHeader,
//   ProfileForm,
} from "../../../../components";
// import Media from "../../../../apiEndPoints/Admin/Media";
// import { AdminAuthServices } from "../../../../services";
// import {
//   selectUserData,
//   updateUserData,
// } from "../../../../redux/AuthSlice/index.slice";
// import moduleRoutesMap from "../../../../routeControl";

function AdminProfile() {
    const [showEdit, setShowEdit] = useState(false);
    const editProfileModal = () => {
        setShowEdit(true);
    };
    const closeEditProfileModal = () => {
        setShowEdit(false);
    };
    const [asideView, setAsideView] = useState(false);
    const asideToggle = () =>{
        setAsideView(!asideView);
    }
    if(asideView){
        document.querySelector('body').classList.add('toggle-shown')
    }else{
        document.querySelector('body').classList.remove('toggle-shown')
    }
    return (
        <>
        <MetaTags title="" />
        {/* <div className="nk-block-head nk-block-head-sm">
            <div className="nk-block-between">
            <PageHeader heading={t("text.profile.title")}>
                <Breadcrumb breadcrumb={breadcrumb} />
            </PageHeader>
            </div>
        </div> */}
        <div className="nk-block">
            <div className="card">
                <div className="card-aside-wrap">
                    <div className="card-inner card-inner-lg">
                        <div className="nk-block-head nk-block-head-lg">
                            <div className="nk-block-between">
                                <PageHeader heading="Personal Information">
                                    <p>Basic info, like your name and address, that you use on Nio Platform.</p>
                                </PageHeader>
                                <div className="nk-block-head-content align-self-start d-lg-none">
                                    <Link to="#" onClick={() => asideToggle()} className={`toggle btn btn-icon btn-trigger mt-n1 ${asideView ? 'active' : ''}`}><em className="icon ni ni-menu-alt-r"/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="nk-block">
                            <div className="nk-data data-list">
                                <div className="data-head">
                                    <h6 className="overline-title">Basics</h6>
                                </div>
                                <div className="data-item" onClick={() => editProfileModal()}>
                                    <div className="data-col">
                                        <span className="data-label">Full Name</span>
                                        <span className="data-value">Abu Bin Ishtiyak</span>
                                    </div>
                                    <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"/></span></div>
                                </div>
                                <div className="data-item" onClick={() => editProfileModal()}>
                                    <div className="data-col">
                                        <span className="data-label">Display Name</span>
                                        <span className="data-value">Ishtiyak</span>
                                    </div>
                                    <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"/></span></div>
                                </div>
                                <div className="data-item">
                                    <div className="data-col">
                                        <span className="data-label">Email</span>
                                        <span className="data-value">info@splash.com</span>
                                    </div>
                                    <div className="data-col data-col-end"><span className="data-more disable"><em className="icon ni ni-lock-alt"/></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AcountSidebar asideView={asideView} asideToggle={asideToggle}/>
                </div>
            </div>
        </div>
        <ModalComponent closeButton={false} extraTitleClassName="justify-content-center" onHandleCancel={() => {  setShowEdit(false); }} backdrop show={showEdit} title="Update Profile">
            <form className="w-100">
                <div className="form-group">
                    <label className="form-label" htmlFor="full-name">Full Name</label>
                    <TextInput
                        id="full-name"
                        className="form-control form-control-lg"
                        name="fullName"
                        disabled={false}
                        variant="standard"
                        type="text"
                        placeholder="Enter full name"
                        value="Abu Bin Ishtiyak"
                        icon=""
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="display-name">Display Name</label>
                    <TextInput
                        id="display-name"
                        className="form-control form-control-lg"
                        name="displayName"
                        disabled={false}
                        variant="standard"
                        type="text"
                        placeholder="Enter display name"
                        value="Ishtiyak"
                        icon=""
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <TextInput
                        id="email"
                        className="form-control form-control-lg"
                        name="email"
                        disabled
                        variant="standard"
                        type="email"
                        placeholder="Enter email"
                        value="info@dakkia.com"
                        icon=""
                    />
                </div>
                <div className="mt-4 align-center justify-content-center flex-wrap flex-sm-nowrap gx-1 gy-2">
                    <div>
                        <Link href="#" onClick={() => closeEditProfileModal()} className="btn btn-primary">Update Profile</Link>
                    </div>
                    <div>
                        <Link href="#" onClick={() => closeEditProfileModal()} className="btn btn-secondary">Cancel</Link>
                    </div>
                </div>
            </form>
        </ModalComponent>
        </>
    );
}

export default AdminProfile;
