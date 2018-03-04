import React from "react";

import Section from '../_components/Section';
import Code from '../_components/Code';

const getStarted = {
    title: 'Getting Started',
    main: `Nebula UI Framework, The official front-end framework for building experiences that fit seamlessly into ITWORX HUB.`
}

export default function ({ }) {
    return (
        <div>
            <Section title={getStarted.title} body={getStarted.main} subBody={getStarted.sub} />
            <Code
                title="CSS"
                description="Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS."
                code={`<link rel="stylesheet" href="https://githubdummy/nebula-ui/nebula-ui-0.0.1.css" />`} />
        </div>
    )
}
