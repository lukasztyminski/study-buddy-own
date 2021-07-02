import React from 'react';
import { Helmet } from 'react-helmet';

export const SEO = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Basic example" />
        <title>My Title</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
      </Helmet>
    </>
  );
};
