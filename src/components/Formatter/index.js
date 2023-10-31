import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Rate } from "antd";
import { PhoneNumber } from "../../utils";
import { AntTooltip, Switch } from "../Antd";
// import { EditCommissionForm } from "../Form";
import { ActionButton } from "../UiElement";

export const imageFormatter = (cell, text) => {
  return (
    <>
      {cell ? (
        <img className="category-img rounded-3" src={cell} alt="img" />
      ) : (
        text
      )}
    </>
  );
};

export const logoFormatter = (path, text) => {
  return (
    <>
      {path ? (
        <div className="table-img">
          <img src={path} alt="Category1" />
        </div>
      ) : (
        text
      )}
    </>
  );
};

function getButton(data) {
  let element;
  if (data.action === "redirect") {
    element = (
      <Link to={data.path}>
        <em className={data.icon} /> {data.name}
      </Link>
    );
  } else if (data.action === "modal") {
    element = (
      <Link to="#" onClick={(e) => { e.preventDefault(); data.onClickHandle();}}>
        <em className={data.icon} /> {data.name}
      </Link>
    );
  } else if (data.action === "confirm") {
    element = (
      <Link
        to="#"
        onClick={(e) => {
          e.preventDefault();
          data.onClickHandle();
        }}
      >
        <em className={data.icon} /> {data.name}
      </Link>
    );
  }

  return element;
}

export function actionFormatter(options) {
  return (
    <>
      <div className="text-end">
      <Dropdown className="position-static">
        <Dropdown.Toggle as="a" className="btn btn-icon btn-trigger">
          <em className="icon ni ni-more-h" />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end" size="sm" className="wide-xs">
          <ul className="link-list-plain">
            {options.map((item, key) => {
              return <li className="action_list" key={key}> {getButton(item)} </li>;
            })}
          </ul>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    </>
  );
}

export const actionButtonFormatter = (btnText, status, onHandleAction) => {
  return (
    <>
      {status === "pending" ? (
        <ActionButton
          onHandleAction={() => {
            onHandleAction();
          }}
          btnText={btnText}
        />
      ) : (
        ""
      )}
    </>
  );
};

export const linkFormatter = (cell, link = "#", extraClassName = "") => {
  return (
    <Link className={`${extraClassName}`} to={link}>
      {cell}
    </Link>
  );
};

export const nameImageFormatter = (name, imgPath, path, email) => {
  return (
    <div>
      {name ? (
        <Link to={path} className="user-card">
          <div className="user-avatar">
            <img src={imgPath} alt="UserImage" />
          </div>
          <div className="user-info">
            <span className="user-name fw-medium">{name}</span>
            <span className="d-block">{email}</span>
          </div>
        </Link>
      ) : (
        "-"
      )}
    </div>
  );
};

export const phoneEmailFormatter = (number, email, path) => {
  return (
    <div>
      {number ? (
        <Link to={path} className="user-card">
          <div className="user-info">
            <span className="user-name fw-medium">{number}</span>
            <span className="d-block">{email}</span>
          </div>
        </Link>
      ) : (
        "-"
      )}
    </div>
  );
};

export const statusFormatter = (cell) => {
  const successArr = [
    "active",
    "inStock",
    "delivered",
    "paid",
    "accepted",
    "assigned",
    "completed",
    "approved",
  ];
  const failedArr = [
    "rejected",
    "outOfStock",
    "cancelled",
    "inactive",
    "reject",
    "canceled",
  ];
  const onGoingArr = [
    "scheduled",
    "pending",
    "lowStock",
    "pendingApproval",
    "readyToShip",
    "lowInventory",
    "packed",
    "pickedUp",
  ];
  const pastArr = ["expired"];
  const doneArr = ["shipped"];
  const incompleteArr = ["profileInComplete", "credited", "received", "refund"];

  const statusArr = {
    active: "Active",
    inactive: "Inactive",
    scheduled: "Scheduled",
    expired: "Expired",
    delivered: "Delivered",
    shipped: "Shipped",
    pending: "Pending",
    rejected: "Rejected",
    outOfStock: "Out of Stock",
    lowStock: "Low Stock",
    inStock: "In stock",
    pendingApproval: "Pending Approval",
    paid: "Paid",
    readyToShip: "Ready to Ship",
    cancelled: "Cancelled",
    received: "Received",
    profileInComplete: "Profile Incomplete",
    reject: "Rejected",
    lowInventory: "Low Inventory",
    credited: "Credited",
    accepted: "Accepted",
    assigned: "Assigned",
    packed: "Packed",
    pickedUp: "pickedUp",
    completed: "Completed",
    canceled: "canceled",
    refund: "Refund",
    approved: "Approved",
  };
  let data;

  if (successArr.includes(cell)) {
    data = (
      <span className="badge rounded-pill badge-dim bg-outline-success badge-sm">{statusArr?.[cell]}</span>
    );
  } else if (failedArr.includes(cell)) {
    data = (
      <span className="badge rounded-pill badge-dim bg-outline-danger badge-sm">{statusArr?.[cell]}</span>
    );
  } else if (onGoingArr.includes(cell)) {
    data = (
      <span className="badge rounded-pill badge-dim bg-outline-warning badge-sm">{statusArr?.[cell]}</span>
    );
  } else if (pastArr.includes(cell)) {
    data = (
      <span className="badge rounded-pill badge-dim bg-outline-secondary badge-sm">
        {statusArr?.[cell]}
      </span>
    );
  } else if (doneArr.includes(cell)) {
    data = (
      <span className="badge badge-dot text-purple">{statusArr?.[cell]}</span>
    );
  } else if (incompleteArr.includes(cell)) {
    data = (
      <span className="badge rounded-pill badge-dim bg-outline-info badge-sm">{statusArr?.[cell]}</span>
    );
  }

  return data;
};

export const phoneNumberFormatter = (cell, row) => {
  return (
    <PhoneNumber
      countryCode={row.phoneNumberCountryCode}
      contactNumber={row.phoneNumber}
    />
  );
};

export const mobileFormatter = (countryCode, number) => {
  return <>{number ? ` ${countryCode} ${" "} ${number}` : "-"}</>;
};

export const percentageFormatter = (val) => {
  return <>{val ? `${val} %` : "-"}</>;
};

export const serialNumberFormatter = (page, sizePerPage, index) => {
  return (page - 1) * sizePerPage + index + 1;
};

export const checkValidData = (data) => {
  return data || "-";
};

export const checkValidCount = (data) => {
  return <>{data || 0}</>;
};

export const checkValidPrice = (data) => {
  return <>{data ? `$ ${data}` : "0"}</>;
};

export const currencyFormatter = (dollar, type) => {
  return (
    <>
      {dollar
        ? dollar?.toLocaleString(type === "INR" ? `en-IN` : `en-US`, {
            style: "currency",
            currency: `${type}`,
          })
        : "0"}
    </>
  );
};

export const nameFormatter = (firstName, lastName) => {
  return <>{firstName ? ` ${firstName} ${" "} ${lastName}` : "-"}</>;
};

export const textFormatter = (data) => {
  return data && data?.charAt(0)?.toUpperCase() + data.slice(1);
};

export const checkValidDateFormatter = (data, formatter) => {
  return <>{data ? formatter : "-"}</>;
};

export function truncate(source, size) {
  return source.length > size ? `${source.slice(0, size - 1)}…` : source;
}

export const addressFormatter = (cell) => {
  let addressLength = cell.length;
  return (
    <>
      {addressLength > 20 ? (
        <AntTooltip placement="top" promptText={`${cell}`}>
          {truncate(cell, 20)}
        </AntTooltip>
      ) : (
        truncate(cell, 20)
      )}
    </>
  );
};

export const checkCount = (data) => {
  return <>{data > 0 ? data : "-"}</>;
};

export const decimalValueFormatter = (cell) => {
  if (Number(cell) >= 0) {
    return Number(cell).toFixed(2);
  } else {
    return ``;
  }
};

export function getText(html) {
  let divContainer = document.createElement("div");
  divContainer.innerHTML = html;
  return divContainer.textContent || divContainer.innerText || "";
}

export const showLinkFormatter = (data) => {
  if ([undefined, null, false].includes(data)) {
    return <>-</>;
  }
  if (data.length < 30) {
    return <a href={data}>{data}</a>;
  }
  return <a href={data}>{data.substring(0, 30)}...</a>;
};

export const switchFormatter = (checked, onChange, extraClassName = "") => {
  return (
    <Switch checked={checked} className={`${extraClassName}`} onChange={onChange} />
  );
};

export const ratingFormatter = (extraClassName = "") => {
  return (
    <Rate className={` ${extraClassName}`} disabled defaultValue={2} />
  );
};

export const modalFormatter = (cell, onClickHandle, extraClassName = "") => {
  return (
    <Link className={` ${extraClassName}`} to="#" onClick={(e) => { e.preventDefault(); onClickHandle(); }} >{cell}</Link>
  );
};