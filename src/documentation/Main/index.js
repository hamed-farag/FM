import React from "react";
import { Link, Route } from "react-router-dom";

import styles from './main.scss';

//Components
import ButtonContainer from "../ButtonContainer";
import GridContainer from "../GridContainer";

import SideBar from '../_components/SideBar';
// import Component from '../Component';


class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSideBar: false
		}
	}

	closeSideBar() {
		this.setState({ showSideBar: false })
	}

	render() {
		return (
			<div>
				<SideBar showSideBar={this.state.showSideBar} closeSideBar={this.closeSideBar.bind(this)} />
				<div className="hub-documentation">
					<div className="hub-documentation-header">
						<div className="hub-documentation-header-burger" onClick={() => { this.setState({ showSideBar: !this.state.showSideBar }) }}>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<h2 className="hub-documentation-header-component">Button</h2>
						<div className="hub-documentation-header-logo">
							<svg className="hub-documentation-header-logo-svg" focusable="false" viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg>
						</div>
					</div>
					<div className="hub-documentation-body">
						<div className="hub-grid">
							<div className="hub-row">
								<div className="hub-column hub-width-sm-12 hub-width-md-8">
									<div className="hub-grid">
										<div className="hub-row">
											<div className="hub-column hub-width-sm-12 hub-width-md-10 hub-width-lg-8">
												<Route exact path="/button" component={ButtonContainer} />
												<Route exact path="/grid" component={GridContainer} />
												<Route
													exact
													path="/"
													render={() => {
														return (
															<div className="hub-grid">
																<div className="hub-row">
																	<h3> Please select a element. </h3>
																</div>
															</div>
														);
													}}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		);
	}
}

export default Main;
