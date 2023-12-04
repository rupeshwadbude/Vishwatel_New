/** ****Function is driver function for authenticate*******
 * ****user and route for which it will**************
 * ****return true and false************************** */

import {} from "./common.util";

function authDriver(route, userData, pathname) {
  try {
    let checkData = "";
    let user = "";
    if (pathname.search("/") >= 0) {
      user = "/";
    } else {
      user = "user";
    }

    console.log("ffhgfhygfh", pathname.search("/"));

    const Role = userData?.role === "superadmin" ? "admin" : "user";

    console.log("Role", Role);

    let userCheck = Role ?? user;

    if (userCheck === "user" && route?.common === true) {
      return true;
    } else if (route.private && Role === user) {
      // ********For secure route**************
      if (!!checkData) {
        return true;
      } else {
        return false;
      }
    } else {
      // **Non secure route****
      if (!!checkData) {
        return false;
      }
      if (route.private === false) {
        return true;
      } else {
        return false;
      }
    }
  } catch (err) {
    return false;
  }
}

export default authDriver;
