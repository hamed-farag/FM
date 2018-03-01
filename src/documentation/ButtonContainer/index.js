import React from "react";

//Components
import Button from "../../components/Button";

const ButtonContainer = () => {
  return (
    <div className="hub-grid">
      <div className="hub-row">
        <div className="hub-column hub-width-sm-12 hub-width-md-3">
          <Button />
        </div>
        <div className="hub-column hub-width-sm-12 hub-width-md-6">
          <Button type="hub-button-primary hub-button-large" />
        </div>
      </div>
      <div className="hub-row">this is a primary Button</div>
      <div className="hub-row">
        <div className="hub-column hub-width-sm-12 hub-width-md-3">
          <Button type="hub-button-secondary" />
        </div>
        <div className="hub-column hub-width-sm-12 hub-width-md-6">
          <Button type="hub-button-secondary hub-button-large" />
        </div>
      </div>
      <div className="hub-row">this is a secondary Button</div>
      <div className="hub-row">
        <div className="hub-column hub-width-sm-12 hub-width-md-3">
          <Button buttonState="disabled" />
        </div>
        <div className="hub-column hub-width-sm-12 hub-width-md-6">
          <Button type="hub-button-large" buttonState="disabled" />
        </div>
      </div>
      <div className="hub-row">this is a disabled Button</div>
    </div>
  );
};
export default ButtonContainer;
