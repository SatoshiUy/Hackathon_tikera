import React from "react";
import propTypes from "prop-types";
import { MainFormWrapper } from "./style/form.styled";
import { Fade } from "react-awesome-reveal";

const MultiForm = () => {
  const [formStep, setFormStep] = React.useState(0);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  return (
    <MainFormWrapper>
      <form className="mutli-form">
        {formStep === 0 && (
          <>
            <Fade direction="up" cascade triggerOnce>
              <div className="input-group">
                <label htmlFor="fullname">First Name</label>
                <input
                  name="firstname"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  name="lastname"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </Fade>
          </>
        )}
        <button className="btn" name="button" onClick={nextForm}>
          Next Step
        </button>
      </form>
    </MainFormWrapper>
  );
};
export default MultiForm;