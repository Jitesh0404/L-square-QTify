import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Section from "../common/Section/Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Top Albums */}
      <Section
        title="Top Albums"
        endpoint="/albums/top"
      />

      {/* New Albums */}
      <Section
        title="New Albums"
        endpoint="/albums/new"
        showToggle
      />
    </>
  );
}
