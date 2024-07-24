import Contact from "./Contact/Contact";
import Education from "./education/Education";
import FAQ from "./FAQ";
import Header from "./Header/Header";
import Univercity from "./univercity/Univercity";

export default function Main() {
  return (
    <div>
      <Header />
      <Education />
      <Univercity />
      <FAQ />
      <Contact/>
    </div>
  )
}
