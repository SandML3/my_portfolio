import "../../styles/components/Home.scss";
import myPhoto from "../../images/myself.png";

const Home = () => {
  return (
    <div className="home">
      <main className="home__main">
        <section className="home__main__hero">
          <div className="home__main__hero__stars">
            <div className="star1 star"></div>
            <div className="star2 star"></div>
            <div className="star3 star"></div>
            <div className="star4 star"></div>
          </div>

          <h2 className="home__main__hero__subtitle">Web developer</h2>
          <h1 className="home__main__hero__title">Sandra Martín</h1>
          <div className="home__main__hero__image__container">
            {/* <div className="home__main__hero__socialmedia">
              <i class="fa-brands fa-github-alt"></i>
            </div> */}
          </div>
        </section>

        <section className="home__main__about">
          <div className="home__main__about__bubble">
            <p className="home__main__about__bubble__text">
              Oh, oh, oh...
              <span className="bolder uppercase">wait</span>.
            </p>
            <p className="home__main__about__bubble__text">Who?</p>
          </div>

          <p className="home__main__about__text">Well, OK.</p>
          <p className="home__main__about__text text--bold">
            Let me introduce myself
          </p>

          <div className="arrow"></div>

          <div className="star5 star"></div>

          <div className="home__main__about__illustrationContainer">
            <img
              className="home__main__about__illustration"
              src={myPhoto}
              alt="Selfportrait"
              title="Selfportrait"
            />
          </div>

          <p className="home__main__about__description">
            Yep! that squiggle over there is me.
          </p>
          <p className="home__main__about__description">
            I'm Sandra Martín, a newcomer{" "}
            <span className="bolder uppercase highlight">web developer</span>.
          </p>
          <p className="home__main__about__description">
            I'm a curious Sevillian passionate about graphic arts.
          </p>
          <p className="home__main__about__description"></p>
          <p className="home__main__about__description">
            I came to the world of programming attracted by its versatility and
            I fell in love with it after discovering its incessant change and
            its open and collaborative community.
          </p>
        </section>
      </main>
    </div>
  );
};
export default Home;
