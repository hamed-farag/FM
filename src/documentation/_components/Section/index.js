import React from "react";

import styles from './styles.scss';

export default function ({ title, body, children, isBodyHTML }) {
    return (
        <div className="Hub-documentation-section">
            <h1>{title}</h1>
            {isBodyHTML ? <div dangerouslySetInnerHTML={{ __html: body }}></div>: <div>{body}</div>}
            <div>
                {children}
            </div>
        </div>
    )
}
