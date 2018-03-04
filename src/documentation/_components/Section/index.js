import React from "react";

import styles from './styles.scss';
import Code from '../Code';
import Preview from '../Preview';

export default function ({ title, body, subBody, children, isBodyHTML }) {
    return (
        <div className="Hub-documentation-section">
            <h1>{title}</h1>
            {isBodyHTML ? <div className="Hub-documentation-section__Content" dangerouslySetInnerHTML={{ __html: body }}></div> : <div className="Hub-documentation-section__Content">{body}</div>}
            <Code title='Hamed' description="bla bla bla bla bla bla bla bla bla " code="<div>Hamed</div>"/>
            <Preview title="Hi" description="bla bla bla bla bla bla bla bla bla ">
                <button>Hamed</button>
            </Preview>
            {isBodyHTML ? <div className="Hub-documentation-section__Content" dangerouslySetInnerHTML={{ __html: subBody }}></div> : <div className="Hub-documentation-section__Content">{subBody}</div>}
            <div className="Hub-documentation-section__Content">
                {children}
            </div>
        </div>
    )
}
