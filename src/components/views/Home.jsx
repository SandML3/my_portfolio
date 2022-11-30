import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import "../../styles/components/Home.scss";
import myPhoto from "../../images/myself.png";

const Home = () => {
  const defaultTransition = {
    repeat: 1,
    repeatType: "reverse",
    duration: 1,
  };

  return (
    <div className="home">
      <main className="home__main">
        <section className="home__main__hero">
          <div className="home__main__hero__stars">
            <motion.div
              animate={{ y: [-300, 10, -10, 0], x: 10, scale: [0.8, 0.5, 1] }}
              transition={{ type: "spring", duration: 1.5 }}
              className="star1 star"
            ></motion.div>
            <motion.div
              className="star2 star"
              animate={{ y: 30, x: -10, opacity: 0.5 }}
              transition={defaultTransition}
            ></motion.div>
            <motion.div
              className="star3 star"
              animate={{ y: 20, x: -10, scale: [0.8, 0.5, 1] }}
              transition={defaultTransition}
            ></motion.div>
            <motion.div
              className="star4 star"
              animate={{ y: -20, x: -40, scale: [0.9, 1.5, 1] }}
              transition={defaultTransition}
            ></motion.div>
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
          <motion.div
            className="home__main__about__smallBubble"
            whileInView={{
              opacity: [0, 0.5, 1],
              x: [-20, 20, 10],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 2.3 }}
          ></motion.div>

          <motion.div
            className="home__main__about__bubble"
            whileInView={{
              opacity: [0, 0.5, 1],
              x: [-100, 30, 0],
              y: [0, -20, 10],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 2 }}
          >
            <p className="home__main__about__bubble__text">
              Oh, oh, oh...
              <span className="bolder uppercase">wait</span>.
            </p>
            <p className="home__main__about__bubble__text">Who?</p>
          </motion.div>

          <div className="home__main__about__text">
            <Typewriter
              options={{
                loop: true,
                delay: 120,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Well, OK.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Let me introduce myself")
                  .pauseFor(10000)
                  .start();
              }}
            ></Typewriter>
          </div>

          <div className="arrow"></div>

          <motion.div
            className="star5 star"
            animate={{ y: 30, x: -10, scale: 1.2 }}
            transition={defaultTransition}
          ></motion.div>

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
