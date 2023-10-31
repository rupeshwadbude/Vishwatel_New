import React from "react";
import { Accordion } from "react-bootstrap";
import ProgressBarComponent from "../Progressbar";

// import PersonalInfo from "../../../pages/Details/personalInfo";

function AccordionComponent({
  AccordionContent,
  hasNumber = false,
  ProgressBar = false,
}) {
  return (
    <>
      {ProgressBar ? (
        <Accordion defaultActiveKey={0}>
          {AccordionContent.map((item, key) => {
            return (
              <Accordion.Item eventKey={key} key={key}>
                <ProgressBarComponent now={40}>
                  <Accordion.Header>
                    <> {` ${hasNumber ? `${key + 1}.` : ""} ${item.title}`}</>
                  </Accordion.Header>{" "}
                </ProgressBarComponent>

                <Accordion.Body>
                  <div>
                    <ul>{item?.content}</ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      ) : (
        <Accordion defaultActiveKey={0}>
          {AccordionContent.map((item, key) => {
            return (
              <Accordion.Item eventKey={key} key={key}>
                <Accordion.Header>
                  {` ${hasNumber ? `${key + 1}.` : ""} ${item.title}`}
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <ul>{item?.content}</ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      )}
    </>
  );
}

export default AccordionComponent;
