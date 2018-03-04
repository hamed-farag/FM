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
			<Preview title="Examples" description="Nebula-UI includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control." >
				<div className="ButtonContainer__Button"><Button title="Primary" /></div>
				<div className="ButtonContainer__Button"><Button type="hub-button-secondary" title="Secondary" /></div>
				<div className="ButtonContainer__Button"><Button type="hub-button-primary hub-button-large" title="Large" /></div>
				<div className="ButtonContainer__Button"><Button buttonState="disabled" title="Disabled" /></div>
			</Preview>
			<Code title="Code">
				<div className="ButtonContainer__Button__Code">{`<button type="button" class="hub-button hub-button-primary"><span>Primary</span></button>`}</div>
				<div className="ButtonContainer__Button__Code">{`<button type="button" class="hub-button hub-button-secondary"><span>Secondary</span></button>`}</div>
				<div className="ButtonContainer__Button__Code">{`<button type="button" class="hub-button hub-button-primary hub-button-large"><span>Large</span></button>`}</div>
				<div className="ButtonContainer__Button__Code">{`<button type="button" class="hub-button hub-button-primary" disabled=""><span>Disabled</span></button>`}</div>
			</Code>
		</div>
	)
}
