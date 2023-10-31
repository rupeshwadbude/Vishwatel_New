import React from "react";

function SectionComponent({ extraClassName, children }) {
  return (
    <>
      <section className={`${extraClassName}`}>{children}</section>
    </>
  );
}

export default SectionComponent;
