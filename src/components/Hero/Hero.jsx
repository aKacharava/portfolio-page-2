import './Hero.css'
import logo from '../../assets/img/logo.png'
import Button from '../Button/Button'

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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            tempore est cupiditate dolorem culpa vitae soluta accusamus ab
            animi, reprehenderit, aspernatur odit voluptate delectus architecto
            in corporis velit ad officia.
          </p>
        </div>
        <Button className="hero-scroll-down" name="Scroll Down!" />
      </div>
      <div className="hero-img-container">
        <img src={logo} />
      </div>
    </section>
  );
}

export default Hero