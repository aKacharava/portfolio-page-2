import "./Hero.css";
import logo from "../../..//img/logo.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text-container">
        <div className="hero-title">
          <h1>Hi,</h1>
        </div>
        <div className="hero-title">
          <h2 className="hero-big-title">I'm Alex,</h2>
        </div>
        <div className="hero-title">
          <h3 className="hero-big-title">Web developer.</h3>
        </div>
        <div className="hero-text">
          <p>
            I’m a software engineer specializing in building exceptional web
            apps. Currently, I’m focused on building accessible, human-friendly
            products at{" "}
            <a href="https://cube.nl/" target="_blank">
              Cube
            </a>
            .
          </p>
        </div>
        <a className="hero-scroll-down" href="#about">
          Scroll Down!
        </a>
      </div>
      <div className="hero-img-container">
        <img src={logo}  alt='logo'/>
      </div>
    </section>
  );
}

export default Hero;
