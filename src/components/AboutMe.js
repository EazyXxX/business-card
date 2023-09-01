import "../index.css";

function AboutMe({ language }) {
  return (
    <section>
      <article className="about-me">
        <h2 className="about-me__title">{`${
          language ? "My Skills:" : "Мои навыки:"
        }`}</h2>
        <ul className="about-me__list">
          <li className="about-me__text_type_small">HTML, CSS + SASS, LESS</li>
          <li className="about-me__text_type_small">JavaScript - ES6</li>
          <li className="about-me__text_type_small">React + Redux</li>
          <li className="about-me__text_type_small">
            {`${
              language
                ? "My Skills:NodeJS + Express framework, MongoDB"
                : "My Skills:NodeJS + Express фреймворк, MongoDB"
            }`}
          </li>
          <li className="about-me__text_type_small">Webpack + Babel</li>
          <li className="about-me__text_type_small">Git, Figma</li>
          <li className="about-me__text_type_small">
            {`${
              language
                ? "Bash, a little bit of Linux, Nginx"
                : "Bash, немного разбираюсь в Linux, Nginx"
            }`}
          </li>
          <li className="about-me__text_type_small">
            Visual Studio Code, Webstorm
          </li>
          <li className="about-me__text_type_small">
            {`${
              language
                ? "HTTP protocol, REST API, Adaptive layout, Cross-browser layout, Semantic layout, BEM, ESLint:"
                : "HTTP протокол, REST API, Адаптивная вёрстка, Кросс-браузерная вёрстка, Семантическая вёрстка, БЭМ, ESLint"
            }`}
          </li>
        </ul>
      </article>
      <article className="about-me">
        <h2 className="about-me__title">{`${
          language ? "Education:" : "Образование:"
        }`}</h2>
        <ul className="about-me__list">
          <li className="about-me__text">
            {`${
              language
                ? "2016 - 2022: Southern Federal University - Master's degree in Law:"
                : "2016 - 2022: Южный Федеральный Университет - диплом магистра юриспруденции:"
            }`}
          </li>
          <li className="about-me__text">
            {`${
              language
                ? "2022 - 2023: Self-education as a web-developer"
                : "2022 - 2023: Самообучение в качестве веб-разработчика"
            }`}{" "}
          </li>
          <li className="about-me__text">
            {`${
              language
                ? "also 2022 - 2023: graduated from Yandex Practicum"
                : "также 2022 - 2023: окончил курс Яндекс Практикума"
            }`}{" "}
            <a
              className="about-me__link"
              href="https://practicum.yandex.ru/frontend-developer/?from=catalog"
              target="_blank"
              rel="noreferrer"
            >
              {`${language ? "web-developer course" : "Веб-разработчик"}`}
            </a>
          </li>
        </ul>
        <p className="about-me__text_type_small">
          {`${
            language
              ? "I've studied a lot of different books, documentation and internet resources, such as:"
              : "Я изучил множество различных книг, документаций и интернет-ресурсов, таких как:"
          }`}{" "}
        </p>
        <ul className="about-me__list">
          <li className="about-me__text_type_small">MDN Web Docs</li>
          <li className="about-me__text_type_small">
            {`${
              language
                ? "Modern JavaScript textbook - I. Kantor"
                : "Современный учебник JavaScript - И. Кантор"
            }`}{" "}
          </li>
          <li className="about-me__text_type_small">
            {`${
              language
                ? "A series of books “You don’t know JS” - K. Simpson"
                : "Серия книг “Ты не знаешь JS” - К. Симпсон"
            }`}{" "}
          </li>
          <li className="about-me__text_type_small">
            {`${
              language
                ? "“Computer networks” - E. Tannenbaum (6th edition)"
                : "“Компьютерне сети” - Э. Танненбаум (6е издание)"
            }`}
          </li>
          <li className="about-me__text_type_small">
            {`${
              language
                ? "React. Modern Patterns for Application Development” - A.Banks, E.Porcello"
                : "React. Современные паттерны для разработки приложений” - А.Бэнкс, Е.Порселло"
            }`}
          </li>
          <li className="about-me__text_type_small">
            {`${
              language
                ? "Documentation of all the above technologies"
                : "Документации всех вышеперечисленных технологий"
            }`}
          </li>
          <li className="about-me__text_type_small">
            {`${
              language
                ? "StackOverFlow, YouTube, Reddit and many other additional resources"
                : "StackOverFlow, YouTube, Reddit и множество других дополнительных ресурсов"
            }`}
          </li>
        </ul>
      </article>
      <article className="about-me">
        <h2 className="about-me__title">{`${
          language ? "English level: C1" : "Уровень владения английским: C1"
        }`}</h2>
        <p className="about-me__text">
          {`${
            language
              ? `I'm pretty fond of learning new vocabulary through reading technical documentation. Talking is no problem as well. Here's an`
              : `Мне очень нравится изучать новую лексику через чтение технической документации. Могу спокойно поддержать диалог на любую тему, владею достаточным объёмом профессиональной лексики. Вот`
          }`}{" "}
          <a
            className="about-me__link"
            rel="noreferrer"
            href="https://www.efset.org/cert/MWqVSP"
            target="_blank"
          >
            {`${language ? `EFSET Certificate` : `EFSET Сертификат`}`}
          </a>
          {`${
            language
              ? `, which proves my language level. (It claims I'm C2, but, to be
                honest, I'm more close to C1)`
              : `, который подтверждает мой уровень владения английским. (В нём утверждается, что я - С2, но, честно говоря, я ближе к С1)`
          }`}
          .{" "}
        </p>
      </article>
      <article className="about-me">
        <h2 className="about-me__title">{`${
          language ? `Personal info:` : `Личная информация`
        }`}</h2>
        <p className="about-me__text_type_small">
          {`${
            language
              ? `I really love the Internet, so I want to enrich it with better content
                which I am going to develop`
              : `Я очень люблю Интернет, поэтому хочу обогатить его более качественным контентом, который я буду разрабатывать.`
          }`}
          .
        </p>
        <p className="about-me__text_type_small">
          {`${
            language
              ? `A few of years
          ago I used to be a lawyer, but I always knew that my future is tightly
          connected with the Internet, so I firmly decided to become a
          web-developer`
              : `Ещё несколько лет назад я работал юристом, но я всегда знал, что мое будущее плотно
          связано с Интернетом, поэтому я твердо решил стать
          веб-разработчиком`
          }`}
          .
        </p>
        <p className="about-me__text_type_small">
          {`${
            language
              ? `I've been
          studying this profession since 2022 and until now. There is a lot to
          learn yet, but I'm already willing to be hired as a frontend developer
          - I believe that practice is the best way to acquire knowledge in this
          profession`
              : `Я учусь на профессию веб-разработчика с 2022 года и по настоящее время. Пока ещё для меня есть много чего непознанного, но
          я уже готов стать полноценным веб-разработчиком
           - Я считаю, что практика – лучший способ получить знания в этой профессиональной отрасли.`
          }`}
          .
        </p>
        <p className="about-me__text_type_small">
          {`${
            language
              ? `I currently
          live in Russia, Rostov-on-Don, but I really want to find a developer
          job abroad and to relocate there (even if by my own means)`
              : `В данный момент я
          живу в России - в г. Ростов-на-Дону, часто бываю в Таганроге, поэтому рассматриваю для работы, в первую очередь, эти два города`
          }`}
          .
        </p>
        <p className="about-me__text_type_small">
          {`${
            language
              ? `Speaking of my hobby, I'm really fond of hiking. Every summer I choose
                a mountain pass (or even two) and climb them up and down. It helps me
                to cleanse my mind and improves my physical form greatly. I would be happy to find more enthusiasts with similar activities!`
              : `Если говорить о моем хобби - я очень люблю ходить в пешие походы. Каждое лето я выбираю
                горный перевал (а то и два) и карабкаюсь по ним вверх и вниз. Это отлично помогает
                очистить разум и укрепить физическую форму. Буду
                рад найти больше энтузиастов с похожими увлечениями!`
          }`}
        </p>
      </article>
    </section>
  );
}

export default AboutMe;
