import React from "react";

import Section from '../_components/Section';

const philosophy = {
    title: 'Philosophy',
    main: `A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Nebulae are often star-forming regions In these regions the formations of gas, dust, and other materials "clump" together to form denser regions, which attract further matter, and eventually will become dense enough to form stars.`,
    sub: `Nebula framework contains UI and JS Components so you can build your design and focus on your business and make your app looks like ITWORX HUB Design.`
}

export default function ({ }) {
    return (
        <Section title={philosophy.title} body={philosophy.main} subBody={philosophy.sub} />
    )
}
