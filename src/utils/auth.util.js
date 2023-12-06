/** ****Function is driver function for authenticate*******
 * ****user and route for which it will**************
 * ****return true and false************************** */

import {} from "./common.util";

function authDriver(route, userData, pathname) {
  try {
    let checkData = "";
    let user = "";
    if (pathname.search("/") >= 0) {
      user = "user";
    } else if (pathname.search("channal-partner") >= 0) {
      user = "channal-partner";
    } else if (pathname.search("superAdmin") >= 0) {
      user = "superAdmin";
    }

    const Role = userData?.role === user;

    let userCheck = user;

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
