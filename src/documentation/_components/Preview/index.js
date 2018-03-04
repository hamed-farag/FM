import React from "react";
import styles from './styles.scss';

export default function ({ title, description, children }) {
    return (
        <div className="Hub-documentation-preview">
            <h4 className="Hub-documentation-preview__title">{title}</h4>
            <p>{description}</p>
            <div className="Hub-documentation-preview__body">
                {children}
            </div>
        </div>
    )
}
