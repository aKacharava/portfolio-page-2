import './About.css'
import logo from "../../assets/img/logo.png";

import Text from '../Text/Text'
import List from '../List/List'

const listItems = [
  { id: 1, content: "JavaScript" },
  { id: 2, content: "HTML" },
  { id: 3, content: "CSS" },
];

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-inner">
        <div className="about-img-container">
          <div className="about-img-wrapper">
            <div>
              <div>
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-text-container">
          <div>
            <Text
              content="Hello! My name is Alex and I enjoy creating things that live on
              the internet. My interest in web development started back in 2016
              when I decided to try programming for the first time — turns out
              hacking together a custom webpage (With terrible color
              combinations) taught me a lot about HTML & CSS!"
            />
            <Text
              content="Fast-forward to today, and I’ve had the privilege of working at an
              VR/AR Agency, a start-up and a corporation with 25+ years of
              experience. My main focus these days is building accessible,
              inclusive products and digital experiences at Muze for a variety
              of clients."
            />
            <Text content="Here are a few technologies I’ve been working with recently:" />
            <List listItems={listItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About