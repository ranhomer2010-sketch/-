"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: "master-01",
    name: "здесь будет улыбка вашего мастера",
    role: "Мастер Alpro",
    focus: "Расслабление",
    description:
      "Помогаем телу отпустить накопившееся напряжение и вернуть ощущение спокойствия, лёгкости и отдыха.",
    image: `${import.meta.env.BASE_URL}images/alpro-master-01.webp`,
  },
  {
    id: "master-02",
    name: "здесь будет улыбка вашего мастера",
    role: "Мастер Alpro",
    focus: "Восстановление",
    description:
      "Бережно работаем с уставшими мышцами после спорта, долгой работы и привычной городской нагрузки.",
    image: `${import.meta.env.BASE_URL}images/alpro-master-02.webp`,
  },
  {
    id: "master-03",
    name: "здесь будет улыбка вашего мастера",
    role: "Мастер Alpro",
    focus: "Лёгкость",
    description:
      "Подбираем комфортный ритм массажа, чтобы после процедуры движения ощущались свободнее и приятнее.",
    image: `${import.meta.env.BASE_URL}images/alpro-master-03.webp`,
  },
  {
    id: "master-04",
    name: "здесь будет улыбка вашего мастера",
    role: "Мастер Alpro",
    focus: "Забота о себе",
    description:
      "Уделяем внимание лицу, шее, плечам и телу, сохраняя спокойную атмосферу и индивидуальный подход.",
    image: `${import.meta.env.BASE_URL}images/alpro-master-04.webp`,
  },
];

const scenarioSections = [
  {
    number: "02",
    label: "Услуги",
    title: "Тут будет про услуги",
    description:
      "Здесь покажем основные направления массажа, длительность процедур и стоимость.",
    points: ["Направления", "Форматы", "Стоимость"],
    tone: "cream",
  },
  {
    number: "03",
    label: "Сервис",
    title: "Тут будет про наш сервис",
    description:
      "Здесь объясним, как проходит визит и из чего складывается забота Alpro.",
    points: ["Первый визит", "Подбор техники", "Забота после"],
    tone: "cocoa",
  },
  {
    number: "04",
    label: "Команда",
    title: "Тут будет про мастеров",
    description:
      "Здесь будут реальные фотографии, специализации и короткое знакомство с командой.",
    points: ["Лица команды", "Специализации", "Подход"],
    tone: "sand",
  },
  {
    number: "05",
    label: "Пространство",
    title: "Тут будет про атмосферу салона",
    description:
      "Здесь появятся фотографии кабинета и детали пространства на Лобачевского.",
    points: ["Интерьер", "Детали", "Атмосфера"],
    tone: "graphite",
  },
  {
    number: "06",
    label: "Доверие",
    title: "Тут будут отзывы клиентов",
    description:
      "Здесь разместим настоящие впечатления гостей и подтверждение качества сервиса.",
    points: ["Цитаты", "Оценки", "Впечатления"],
    tone: "cream",
  },
];

function numberWithZero(value: number) {
  return String(value).padStart(2, "0");
}

export default function Home() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActive((current) => (current + 1) % slides.length);
      }
      if (event.key === "ArrowLeft") {
        setActive((current) => (current - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="hero-shell" id="top">
      <section className="hero" aria-label="Массажный салон Alpro">
        <div className="hero-backdrops" aria-hidden="true">
          {slides.map((item, index) => (
            <div
              key={item.id}
              className={`hero-portrait ${index === active ? "is-active" : ""}`}
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}
        </div>

        <div className="warm-treatment" aria-hidden="true" />
        <div className="readability-gradient" aria-hidden="true" />
        <div className="side-vignette" aria-hidden="true" />
        <div key={`light-${active}`} className="light-sweep" aria-hidden="true" />

        <div className="hero-content">
          <div className="top-zone">
            <header className="brand-row">
              <a className="brand" href="#top" aria-label="Alpro, на начало страницы">
                <img src={`${import.meta.env.BASE_URL}images/alpro-logo.png`} alt="ALPRO, студия массажа" />
              </a>
              <p className="location">
                <span className="location-wide">Москва, </span>Лобачевского 118к4
              </p>
            </header>

            <div className="hero-copy">
              <div className="eyebrow-clip">
                <p className="eyebrow headline-line line-one">Массажный салон</p>
              </div>
              <h1 className="headline">
                <span className="headline-clip">
                  <span className="headline-line line-two">Тело отпускает.</span>
                </span>
                <span className="headline-clip">
                  <span className="headline-line line-three">Вы возвращаетесь к себе.</span>
                </span>
              </h1>
            </div>

            <div key={slide.id} className="slide-description" aria-live="polite">
              <p className="focus">{slide.focus}</p>
              <p className="description">{slide.description}</p>
            </div>
          </div>

          <div className="bottom-zone">
            <div className="master-selector" aria-label="Выбор мастера">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`master-button ${index === active ? "is-active" : ""}`}
                  onClick={() => setActive(index)}
                  aria-label={`Показать мастера ${index + 1}`}
                  aria-pressed={index === active}
                >
                  <span className="avatar-frame">
                    <img
                      src={item.image}
                      alt="здесь будет улыбка вашего мастера"
                      title="здесь будет улыбка вашего мастера"
                    />
                  </span>
                  <span className="avatar-indicator" aria-hidden="true" />
                </button>
              ))}
            </div>

            <div className="meta-footer">
              <div key={`name-${slide.id}`} className="master-name">
                <span className="master-label">Ваш мастер</span>
                <span>{slide.name}</span>
              </div>
              <p className="master-role">{slide.role}</p>
              <p className="address">Лобачевского, 118к4</p>
              <a
                className="booking-link"
                href="https://dikidi.net/ru/profile/alpro_1719984"
                target="_blank"
                rel="noreferrer"
              >
                Записаться онлайн
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div key={`counter-${active}`} className="slide-counter" aria-hidden="true">
          <span>{numberWithZero(active + 1)}</span>
          <i />
          <span>{numberWithZero(slides.length)}</span>
        </div>
      </section>

      <div className="scenario" id="scenario">
        {scenarioSections.map((section) => (
          <section
            key={section.number}
            className={`scenario-section tone-${section.tone}`}
            aria-labelledby={`scenario-${section.number}`}
          >
            <div className="scenario-watermark" aria-hidden="true">
              ALPRO
            </div>
            <div className="scenario-index">
              <span>{section.number}</span>
              <i />
              <span>07</span>
            </div>
            <div className="scenario-main">
              <p className="scenario-label">{section.label}</p>
              <h2 id={`scenario-${section.number}`} className="scenario-title">
                <span>{section.title}</span>
              </h2>
              <p className="scenario-description">{section.description}</p>
            </div>
            <ol className="scenario-points" aria-label={`Состав раздела: ${section.label}`}>
              {section.points.map((point, index) => (
                <li key={point}>
                  <span>{numberWithZero(index + 1)}</span>
                  {point}
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="closing-topline">
            <p>07 / 07</p>
            <div className="closing-brand">
              <p>Финальное действие</p>
              <img src={`${import.meta.env.BASE_URL}images/alpro-logo.png`} alt="ALPRO, студия массажа" />
            </div>
          </div>
          <div className="closing-copy">
            <p className="scenario-label">Контакты</p>
            <h2 id="closing-title">Тут будет адрес, карта и запись</h2>
          </div>
          <div className="closing-bottom">
            <p>
              Москва<br />
              Лобачевского, 118к4
            </p>
            <a
              href="https://dikidi.net/ru/profile/alpro_1719984"
              target="_blank"
              rel="noreferrer"
            >
              <span>Записаться онлайн</span>
              <b aria-hidden="true">↗</b>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
