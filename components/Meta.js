import Head from 'next/head'

const Meta = ({title, keywords, description, image, url}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta property="language" content="en-US" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="copyright" content="Gian Roi Calvario" />
      <meta property="creator" content="Gian Roi Calvario" />
      <meta name="publisher" content="Gian Roi Calvario" />
      <meta name="author" content="Gian Roi Calvario" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content={image} />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap" rel="stylesheet"></link>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Gian Roi Calvario",
  keywords: "Gian Roi Calvario, Giro Calvario, Gian, Roi, Giro, Calvario, Web, Mobile, API, Development, IT, Bulacan State University, Game, Plan, Marketing, Solutions, GP, Nagata, HTML, CSS, Javascript, NodeJS, SASS, React, Next, Native",
  description: "Professional web developer with more than 2 years of experience in creating tools for the company, partners, and clients. Involved in product development, resource management, leading operations, supporting sales and creating new business opportunities.",
  url: "https://girocalvario.herokuapp.com",
  image: "https://girocalvario.herokuapp.com/images/og-giro-calvario.png"
}

export default Meta