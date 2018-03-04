import React from "react";
import styles from './styles.scss';

//Components
import Button from "../../components/Button";

import Section from '../_components/Section';
import Code from '../_components/Code';
import Preview from '../_components/Preview';

const _button = {
	title: 'Button',
	main: `Use HUB button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.`
}

export default function ({ }) {
	return (
		<div className="ButtonContainer">
			<Section title={_button.title} body={_button.main} />
			<Preview title="Examples" desciption="Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control." >
				<div className="ButtonContainer__Button"><Button title="Primary" /></div>
				<div className="ButtonContainer__Button"><Button type="hub-button-secondary" title="Secondary" /></div>
				<div className="ButtonContainer__Button"><Button type="hub-button-primary hub-button-large" title="Large" /></div>
				<div className="ButtonContainer__Button"><Button buttonState="disabled" title="Disabled" /></div>
			</Preview>
			<Code title="Code">

			</Code>
		</div>
	)
}



/*
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
*/