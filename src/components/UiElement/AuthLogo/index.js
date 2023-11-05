import React from "react";
import { Link } from "react-router-dom";

function AuthLogo() {
  return (
    <>
        <div className="brand-logo text-center">
            <Link to="/" className="logo-link">
                <img className="logo-dark logo-img logo-img-lg" src="../assets/images/admin/logo.png"
                    srcSet="../assets/images/admin/logo.png" alt="logo"/>
            </Link>
        </div>
    </>
  );
}

export default AuthLogo;