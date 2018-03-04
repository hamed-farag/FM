import React from "react";

import Section from '../_components/Section';

const introduction = {
    title: 'Nebula UI Framework',
    main: `Nebula UI Framework, The official front-end framework for building experiences that fit seamlessly into ITWORX HUB.`
}

export default function ({ }) {
    return (
        <Section title={introduction.title} body={introduction.main} subBody={introduction.sub} />
    )
}
