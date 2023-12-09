import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { SweetAlert } from "../UiElement";
import { Input as TextInput } from "../Antd";
import { modalNotification } from "../../utils";
import customerRouteMap from "../../routeControl/customerRouteMap";
import userRouteMap from "../../routeControl/userRouteMap";

function CustomerHeader({ menuToggle }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const userData = localStorage.getItem("userData");
  const showSweetAlert = () => {
    setIsAlertVisible(true);
  };

  const onConfirmAlert = () => {
    setLoading(false);
    // accountLogout();
    setIsAlertVisible(false);
    modalNotification({
      type: "success",
      message: "Logout Successfully"
    });
    setTimeout(() => {
      localStorage.setItem("userData", null);
      navigate(userRouteMap.LOGIN.path);
    }, 1000);
    // return true;
  };

  return (
    <div className="nk-header nk-header-fixed is-light">
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ms-n1">
            <Link
              onClick={() => menuToggle()}
              to="#"
              className="nk-nav-toggle nk-quick-nav-icon ps-0"
            >
              <em className="icon ni ni-menu" />
            </Link>
          </div>
          <div className="nk-header-brand d-xl-none">
            <Link to={customerRouteMap.DASHBOARD.path} className="logo-link">
              <img className="logo-img" src="" alt="logo" />
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-between w-100">
            <div>
              <form>
                <div className="form-group mb-0">
                  <TextInput 
                    id="search"
                    name="search"
                    className="form-control"
                    placeholder="search"
                    icon={
                      <div className="form-icon form-icon-right">
                        <em className="icon ni ni-search" />
                      </div>
                    }
                  />
                </div>
              </form>
            </div>
            <div className="nk-header-tools">
              <ul className="nk-quick-nav">
                <li className="balanceTop">
                  <b>Upgrade: </b> Balance 
                  <span>$25</span>
                </li>
                <Dropdown as="li" className="notification-dropdown cartItem">
                  <Dropdown.Toggle
                    as="a"
                    className="nk-quick-nav-icon btn-icon btn-icon-break p-0"
                  >
                    <em className="icon ni ni-cart-fill"/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end" className="dropdown-menu-xxl cartItem_menu">
                    <div className="dropdown-head">
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <h2>+91-8310-77100</h2>
                        <Link to="#" className="notification-link d-inline-block">Continue shopping</Link>
                      </div>
                    </div>
                    <div className="dropdown-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="cartItem_img">
                            <img src="/assets/images/admin/bharat-flag.png" width="60" className="img-fluid" alt="flagBharat"/>
                          </div>

                          <div className="cartItem_number">
                            <p>+91-8310-771100</p>
                            <span>India, New Delhi(11)</span>
                            <em className="icon ni ni-info-i"/>
                          </div>
                        </div>
                        <Link to="" className="closeIcon">
                          <em className="icon ni ni-cross-circle"/>
                        </Link>
                      </div>

                      <div className="cartItem_price my-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0">Subtotal</p>
                          <p className="mb-0">$500.00</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0">Subtotal</p>
                          <p className="mb-0">$500.00</p>
                        </div>
                      </div>

                      <div className="cartItem_price-plan">
                          <p className="mb-0"><b>Upgrad plan</b></p>
                          <p className="mb-0">Monthly saving on numbers <b>$419.88</b></p>
                      </div>

                      <div className="cartItem_footer text-center mt-5">
                        <Link to="#" className="btn btn-secondary">$ Proceed to Checkout</Link>
                        <Link to="#" className="d-block link-secondary mt-2 text-decoration-underline">Terms & Conditions</Link>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown as="li" className="notification-dropdown">
                  <Dropdown.Toggle
                    as="a"
                    className="nk-quick-nav-icon btn-icon btn-icon-break p-0"
                  >
                    <div className="badge badge-circle align-items-center bg-primary">
                      5
                    </div>
                    <em className="ni ni-bell" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end" className="dropdown-menu-xl">
                    <div className="dropdown-head">
                      <span className="sub-title nk-dropdown-title">
                        text.notification.name
                      </span>
                      <Link to="#">text.notification.markAllRead</Link>
                    </div>
                    <div className="dropdown-body">
                      <div className="nk-notification">
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              You have requested to <span>Widthdrawl</span>
                            </div>
                            <div className="nk-notification-time">2 hrs ago</div>
                          </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              Your <span>Deposit Order</span> is placed
                            </div>
                            <div className="nk-notification-time">2 hrs ago</div>
                          </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              You have requested to <span>Widthdrawl</span>
                            </div>
                            <div className="nk-notification-time">2 hrs ago</div>
                          </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              Your <span>Deposit Order</span> is placed
                            </div>
                            <div className="nk-notification-time">2 hrs ago</div>
                          </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              You have requested to <span>Widthdrawl</span>
                            </div>
                            <div className="nk-notification-time">2 hrs ago</div>
                          </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              Your <span>Deposit Order</span> is placed
                            </div>
                            <div className="nk-notification-time">2 hrs ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-foot center">
                      <Link to="#">text.common.viewAll</Link>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown as="li" className="user-dropdown">
                  <Dropdown.Toggle as="a" className="me-n1" id="dropdown-basic">
                    <div className="user-toggle">
                      <div className="user-avatar sm">
                        <em className="icon ni ni-user-alt" />
                      </div>
                      <div className="user-info d-none d-xl-block">
                        {/* <div className="user-status user-status-unverified">Unverified</div> */}
                        <div className="user-name dropdown-indicator">
                          Abu Bin Ishityak
                        </div>
                      </div>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end" className="dropdown-menu-md">
                    <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                      <div className="user-card">
                        <div className="user-avatar">
                          <span>AB</span>
                        </div>
                        <div className="user-info">
                          <span className="lead-text">Abu Bin Ishtiyak</span>
                          <span className="sub-text">info@softnio.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-inner">
                      <ul className="link-list">
                        <li>
                          <Link
                            to={
                              userData === "user"
                                ? userRouteMap.CUSTOMER_PROFILE.path
                                : customerRouteMap.CUSTOMER_PROFILE.path
                            }
                            onClick={() => {
                              document.body.click();
                            }}
                          >
                            <em className="icon ni ni-user-alt" />
                            <span>View Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={
                              userData === "user"
                                ? userRouteMap.CUSTOMER_CHANGE_PASSWORD.path
                                : customerRouteMap.CUSTOMER_CHANGE_PASSWORD.path
                            }
                            onClick={() => {
                              document.body.click();
                            }}
                          >
                            <em className="icon ni ni-lock-alt-fill" />
                            <span>Change Password</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-inner">
                      <ul className="link-list">
                        <li>
                          <Link
                            to="/"
                            onClick={(e) => {
                              e.preventDefault();
                              showSweetAlert();
                            }}
                          >
                            <em className="icon ni ni-signout" />
                            <span>Sign out</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Dropdown.Menu>
                  <SweetAlert
                    reverseButtons
                    title="Logout"
                    text="Are you sure want to logout?"
                    show={isAlertVisible}
                    icon="warning"
                    showCancelButton
                    cancelButtonText="No"
                    confirmButtonText="Yes"
                    setIsAlertVisible={setIsAlertVisible}
                    showLoaderOnConfirm
                    loading={loading}
                    onConfirmAlert={onConfirmAlert}
                  />
                </Dropdown>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHeader;
