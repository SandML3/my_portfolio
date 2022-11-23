import "../../styles/components/Home.scss";

const Home = () => {
  return (
    <>
      <header className="home__header">
        <div className="home__header__icon">
          <div className="home__header__icon__bar--top icon__bar"></div>
          <div className="home__header__icon__bar--middle icon__bar"></div>
          <div className="home__header__icon__bar--bottom icon__bar"></div>
        </div>
      </header>
      <main className="home__main">
        <div className="home__main__stars">
          <div className="star1 star"></div>
          <div className="star2 star"></div>
          <div className="star3 star"></div>
          <div className="star4 star"></div>
        </div>
        <section className="home__main__hero">
          <h2 className="home__main__hero__subtitle">Web developer</h2>
          <h1 className="home__main__hero__title">Sandra Martín</h1>
          <div className="home__main__hero__image__container">
            <div className="home__main__hero__socialMedia"></div>
          </div>
        </section>

        <section className="home__main__about">
          <div className="home__main__about__bubble">
            <p>Hola</p>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
