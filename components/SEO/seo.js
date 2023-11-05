import Head from 'next/head'

const SEOHead = ({ title = "OnestCrypto", description, image = "/assets/imgs/logo.svg", url = "NFT"}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description | "Made My onestTech"} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta name="onest:card" content="summary_large_image" />
            <meta name="onest:title" content={title} />
            <meta name="onest:description" content={description} />
            <meta name="onest:image" content={image} />
            <link rel="canonical" href={url} />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default SEOHead
