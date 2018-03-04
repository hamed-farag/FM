import React from "react";

import styles from './styles.scss';

export default function ({ title, description, code }) {
    return (
        <div className="Hub-documentation-code">
            <h4 className="Hub-documentation-code__title">{title}</h4>
            <p>{description}</p>
            <div className="Hub-documentation-code__body">
                {code}
            </div>
        </div>
    )
}
