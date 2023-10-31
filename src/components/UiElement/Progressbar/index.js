import React from "react";
import { ProgressBar } from "react-bootstrap";

function ProgressBarComponent({ children, now = 0 }) {
  return (
    <ProgressBar now={now} striped variant="success">
      {children}{" "}
    </ProgressBar>
  );
}

export default ProgressBarComponent;
