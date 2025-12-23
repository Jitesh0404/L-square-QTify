import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Section from "../common/Section/Section";
import { Colors } from "../common/Color";

export default function Home() {
  return (
    <div style={{backgroundColor:Colors.primary_black}}>
      <Navbar />
      <Hero />

      <Section
        title="Top Albums"
        endpoint="/albums/top"
        enableShowAll
      />

      <Section
        title="New Albums"
        endpoint="/albums/new"
        enableShowAll
      />

      {/* Songs untouched */}
      <Section
        title="Songs"
        endpoint="/songs"
        isSongsSection
      />
    </div>
  );
}

