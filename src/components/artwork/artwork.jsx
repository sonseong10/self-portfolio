import React from "react";
import SectionHeader from "../section-header/section-header";

const Artwork = ({ artwork }) => {
  console.log(artwork);
  return (
    <section>
      <SectionHeader title="Artworks" />
    </section>
  );
};

export default Artwork;
