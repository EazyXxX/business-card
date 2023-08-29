import "../index.css";

function AboutMe() {
  return (
    <section>
      <article className="about-me">
        <h2 className="about-me__title">My Skills:</h2>
        <ul className="about-me__list">
          <li className="about-me__text_type_small">HTML, CSS + SASS, LESS</li>
          <li className="about-me__text_type_small">JavaScript - ES6</li>
          <li className="about-me__text_type_small">React + Redux</li>
          <li className="about-me__text_type_small">
            NodeJS + Express framework, MongoDB
          </li>
          <li className="about-me__text_type_small">Webpack + Babel</li>
          <li className="about-me__text_type_small">Git, Figma</li>
          <li className="about-me__text_type_small">
            Bash, a little bit of Linux, Nginx
          </li>
          <li className="about-me__text_type_small">
            Visual Studio Code, Webstorm
          </li>
          <li className="about-me__text_type_small">
            HTTP protocol, REST API, Adaptive layout, Cross-browser layout,
            Semantic layout, BEM, ESLint
          </li>
        </ul>
      </article>
      <article className="about-me">
        <h2 className="about-me__title">Education:</h2>
        <ul className="about-me__list">
          <li className="about-me__text">
            2016 - 2022: Southern Federal University - Master's degree in Law
          </li>
          <li className="about-me__text">
            2022 - 2023: Self-education as a web-developer.{" "}
          </li>
          <li className="about-me__text">
            also 2022 - 2023: graduated from Yandex Practicum{" "}
            <a
              className="about-me__link"
              href="https://practicum.yandex.ru/frontend-developer/?from=catalog"
              target="_blank"
              rel="noreferrer"
            >
              web-developer course
            </a>
            .
          </li>
        </ul>
        <p className="about-me__text_type_small">
          I've studied a lot of different books, documentation and internet
          resources, such as:{" "}
        </p>
        <ul className="about-me__list">
          <li className="about-me__text_type_small">MDN Web Docs</li>
          <li className="about-me__text_type_small">
            Modern JavaScript textbook - I. Kantor{" "}
          </li>
          <li className="about-me__text_type_small">
            A series of books “You don’t know JS” - K. Simpson{" "}
          </li>
          <li className="about-me__text_type_small">
            “Computer networks” - E. Tannenbaum (6th edition);
          </li>
          <li className="about-me__text_type_small">
            React. Modern Patterns for Application Development” - A.Banks,
            E.Porcello
          </li>
          <li className="about-me__text_type_small">
            Documentation of all the above technologies
          </li>
          <li className="about-me__text_type_small">
            StackOverFlow, YouTube, Reddit and many other additional resources
          </li>
        </ul>
      </article>
      <article className="about-me">
        <h2 className="about-me__title">English level: C1</h2>
        <p className="about-me__text">
          I'm pretty fond of learning new vocabulary through reading technical
          documentation. <br /> Talking is no problem as well. Here's an{" "}
          <a
            className="about-me__link"
            rel="noreferrer"
            href="https://www.efset.org/cert/MWqVSP"
            target="_blank"
          >
            EFSET Certificate
          </a>
          , which proves my language level. (It claims I'm C2, but, to be
          honest, I'm more close to C1).{" "}
        </p>
      </article>
      <article className="about-me">
        <h2 className="about-me__title">Personal info:</h2>
        <p className="about-me__text_type_small">
          I really love the Internet, so I want to enrich it with better content
          which I am going to develop.
        </p>
        <p className="about-me__text_type_small">
          A few of years ago I used to be a lawyer, but I always knew that my
          future is tightly connected with the Internet, so I firmly decided to
          become a web-developer.
        </p>
        <p className="about-me__text_type_small">
          I've been studying this profession since 2022 and until now. There is
          a lot to learn yet, but I'm already willing to be hired as a frontend
          developer - I believe that practice is the best way to acquire
          knowledge in this profession.
        </p>
        <p className="about-me__text_type_small">
          I currently live in Russia, Rostov-on-Don, but I really want to find a
          developer job abroad and to relocate there (even if by my own means).
        </p>
        <p className="about-me__text_type_small">
          Speaking of my hobby, I'm really fond of hiking. Every summer I choose
          a mountain pass (or even two) and climb them up and down. It helps me
          to cleanse my mind and improves my physical form greatly. I would be
          glad to find more like-minded people!
        </p>
      </article>
    </section>
  );
}

export default AboutMe;
