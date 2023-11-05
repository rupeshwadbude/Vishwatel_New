// import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ImageElement from "../ImageElement";
// import HeaderDropdownMenu from "../HeaderDropdown";
// import moduleRoutesMap from "../../../routeControl";

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState("");
  let headerData = [];
  //   const userToken = false;
  useEffect(() => {
    setExpanded("");
    setShow(false);
  }, [pathname]);
  //   const dropDownList = [
  //     {
  //       label: "My Profile",
  //       path: moduleRoutesMap?.user?.PROFILE?.path,
  //     },
  //     {
  //       label: "My Message",
  //       path: moduleRoutesMap?.user?.MY_MESSAGE?.path,
  //       // path: moduleRoutesMap?.[userData?.user_type]?.PROVIDER_MESSAGE?.path,
  //     },
  //     {
  //       label: "Logout",
  //       path: "#",
  //       onClick: (e) => {
  //         e.preventDefault();
  //       },
  //     },
  //   ];

  return (
    <>
      <header className="header position-fixed w-100">
        <Container>
          <Navbar
            expand="lg"
            variant="none"
            // className="d-flex"
            onToggle={() => setShow(!show)}
            collapseOnSelect
            expanded={expanded}
          >
            <Link className="navbar-brand d-flex align-items-center" to="#">
              <ImageElement
                source="splash-logo.svg"
                className="img-fluid after-login-header"
                alt="splash-logo"
              />
              <ImageElement
                source="header-logo.svg"
                className="img-fluid header-logo"
                alt="splash-logo"
              />
            </Link>
            {/* <Link
              to={routesMap.LOGIN.path}
              className="btn ripple-effect-dark btn-primary order-lg-last"
            >
              {t("text.common.login")}
            </Link>{" "} */}

            <Navbar.Collapse
              // className="flex-grow-0"
              id="navbarSupportedContent"
            >
              <Nav as="ul" className="mx-auto  beforeLogin">
                {headerData?.map((item, key) => {
                  return (
                    <li
                      className={`nav-item ${
                        item.path === pathname ? "active" : ""
                      }`}
                      key={key}
                    >
                      <Nav.Link
                        as={Link}
                        className="nav-link p-0"
                        to={item.path}
                        href="#"
                      >
                        {item.label}
                      </Nav.Link>
                    </li>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
            <div className="d-flex actionBtn align-items-center hideLogin">
              <Link className="btn me-1 signUp" to="#">
                {t("text.userAuth.signUp")}
              </Link>
              <Link to="#" className="btn btn-warning btn-sm" id="loginHeader">
                {t("text.userAuth.login")}
              </Link>
            </div>
            <Navbar.Toggle
              as="a"
              aria-controls="navbarSupportedContent"
              aria-expanded={!!show}
              className="navbar-toggler border-0 p-0"
              onClick={(e) => {
                e.preventDefault();
                setShow(!show);
                setExpanded((prev) => (prev === "" ? "expanded" : ""));
              }}
            >
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </Navbar.Toggle>
          </Navbar>
        </Container>
      </header>
    </>
  );
}

export default Header;
