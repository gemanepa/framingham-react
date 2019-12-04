import React from 'react';
import Head from 'next/head';


export default function HeadComponent(translations) {
    return(
    <Head>
        <title>{translations.title}</title>
        <meta name="application-name" content={translations.appname} />
        <meta name="description" content={translations.description} />
        <meta name="keywords" content={translations.keywords} />
    </Head>
    )
}