import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About — Preview, Edit and Generate</title>
        <meta name="title" content="About — Preview, Edit and Generate" />
        <meta
          name="description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
      </Helmet>
      <div>About</div>
    </>
  );
};

export default About;
