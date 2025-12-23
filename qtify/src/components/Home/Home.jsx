import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Section from "../common/Section/Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        title="Top Albums"
        endpoint="/albums/top"
      />

      <Section
        title="New Albums"
        endpoint="/albums/new"
      />
    </>
  );
}
