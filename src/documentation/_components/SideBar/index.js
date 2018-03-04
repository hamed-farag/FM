import React from "react";
import { Link, Route } from "react-router-dom";

import styles from './styles.scss';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideBar: true
        }
    }

    render() {
        const openSideBarClass = this.props.showSideBar ? "hub-sidebar--open" : undefined;

        return (
            <div>
                {openSideBarClass ? <div className="SideBar__Shadow"></div> : null}
                <div className={`hub-sidebar ${openSideBarClass}`}>
                    <div className="hub-sidebar__header">
                        <h2>Nebula-UI</h2>
                        <h5>v 0.1</h5>
                    </div>
                    <div className="hub-sidebar__body">
                        <div className="hub-sidebar__body__section">
                            <div className="hub-sidebar__body__section__nav">
                                <ul className="hub-sidebar__body__section__nav__list" onClick={() => this.props.closeSideBar()}>
                                <li className="hub-sidebar__body__section__nav__list__item" >
                                        <Link to="/"> Introduction </Link>
                                    </li>
                                    <li className="hub-sidebar__body__section__nav__list__item" >
                                        <Link to="/"> Philosophy </Link>
                                    </li>
                                    <li className="hub-sidebar__body__section__nav__list__item">
                                        <Link to="/"> Getting Started </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hub-sidebar__body__section">
                            <h4> Components </h4>
                            <div className="hub-sidebar__body__section__nav">
                                <ul className="hub-sidebar__body__section__nav__list" onClick={() => this.props.closeSideBar()}>
                                    <li className="hub-sidebar__body__section__nav__list__item">
                                        <Link to="/button"> Button </Link>
                                    </li>
                                    <li className="hub-sidebar__body__section__nav__list__item">
                                        <Link to="/grid"> Grid </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {openSideBarClass ? <button className="SideBar__Close" onClick={() => this.props.closeSideBar()}></button> : null}
            </div>
        );
    }
}

export default SideBar;
