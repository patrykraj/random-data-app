import React from "react";
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";
import Slide from "../components/Slide";
import "../styles/About.css";

const About = () => {
  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".carousel-pagination",
      clickable: true,
    },
    breakpoints: {
      960: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
    },
  };

  const slides = [
    {
      id: 0,
      url:
        "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    },
    {
      id: 1,
      url:
        "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    },
    {
      id: 2,
      url:
        "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    },
    {
      id: 3,
      url:
        "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    },
    {
      id: 4,
      url:
        "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    },
    {
      id: 5,
      url:
        "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    },
  ];

  return (
    <div className="about--container page--container">
      <div className="swiper--wrapper">
        <button className="swiper__btn" aria-label="Previous">
          {"<"}
        </button>
        <Swiper {...swiperParams}>
          {slides.map((slide) => (
            <div className={"slide"} key={slide.id}>
              <Slide item={slide} />
            </div>
          ))}
        </Swiper>
        <button className="swiper__btn" aria-label="Next">
          {">"}
        </button>
      </div>
      <article className="about--info">
        <h1>Lorem ipsum</h1>
        <p>
          Dolor sit amet, consectetur adipiscing elit. Morbi finibus lorem
          ligula, non scelerisque velit convallis vitae. Fusce in vulputate
          odio, non tristique odio. Donec blandit viverra quam vel lacinia.
          Donec ullamcorper non tortor ac dapibus. Praesent ultricies interdum
          lectus vitae fringilla. Praesent lectus lacus, maximus eu ante quis,
          dictum volutpat turpis. Vestibulum scelerisque venenatis dignissim.
          Vivamus quis malesuada dolor. Mauris bibendum enim nunc. Phasellus
          vulputate tristique diam, ut volutpat nulla lobortis ac. Sed elementum
          sodales lobortis.
        </p>

        <h2>Curabitur nisl</h2>
        <p>
          Magna, hendrerit et ornare vel, venenatis eget nibh. Integer posuere
          vel ante at lacinia. Etiam lobortis orci ut urna facilisis lobortis.
          Nam facilisis ipsum porta sollicitudin volutpat. Fusce tempor
          consectetur fermentum. Duis ut massa nec enim mattis ornare. Praesent
          luctus, dolor sed elementum dignissim, sapien enim eleifend est, at
          semper ex magna vitae metus. Sed turpis est, condimentum a ipsum ac,
          bibendum egestas nulla. Nam suscipit neque in arcu hendrerit, vel
          sagittis ipsum sodales. Ut ut varius ligula. Aliquam eget elit nec
          diam ornare varius eget ut purus. Maecenas congue enim nec tempus
          hendrerit. Curabitur venenatis gravida sem, sed lobortis metus lacinia
          id. Pellentesque non laoreet sapien. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </article>
    </div>
  );
};

export default About;
