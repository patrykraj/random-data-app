import React, { useState } from "react";
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";
import Slide from "../components/Slide";
import "../styles/About.css";

import { useSpring, animated } from "react-spring";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";

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
      src: image1,
    },
    {
      id: 1,
      src: image2,
    },
    {
      id: 2,
      src: image3,
    },
    {
      id: 3,
      src: image4,
    },
    {
      id: 4,
      src: image5,
    },
    {
      id: 5,
      src: image6,
    },
  ];

  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const props = useSpring({
    from: { opacity: 0, transform: "translate3d(40px,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  return (
    <div className="about--container page--container">
      <animated.div style={props}>
        <div className="swiper--wrapper">
          <button
            onClick={goPrev}
            className="swiper__btn"
            aria-label="Previous"
          >
            <FaAngleLeft />
          </button>
          <Swiper {...swiperParams} getSwiper={setSwiper}>
            {slides.map((slide) => (
              <div className={"slide"} key={slide.id}>
                <Slide item={slide} />
              </div>
            ))}
          </Swiper>
          <button onClick={goNext} className="swiper__btn" aria-label="Next">
            <FaAngleRight />
          </button>
        </div>
        <article
          className="about--info"
          style={{
            overflow: "hidden",
          }}
        >
          <h1>Lorem ipsum</h1>
          <p>
            Dolor sit amet, consectetur adipiscing elit. Morbi finibus lorem
            ligula, non scelerisque velit convallis vitae. Fusce in vulputate
            odio, non tristique odio. Donec blandit viverra quam vel lacinia.
            Donec ullamcorper non tortor ac dapibus. Praesent ultricies interdum
            lectus vitae fringilla. Praesent lectus lacus, maximus eu ante quis,
            dictum volutpat turpis. Vestibulum scelerisque venenatis dignissim.
            Vivamus quis malesuada dolor. Mauris bibendum enim nunc. Phasellus
            vulputate tristique diam, ut volutpat nulla lobortis ac. Sed
            elementum sodales lobortis.
          </p>

          <h2>Curabitur nisl</h2>
          <p>
            Magna, hendrerit et ornare vel, venenatis eget nibh. Integer posuere
            vel ante at lacinia. Etiam lobortis orci ut urna facilisis lobortis.
            Nam facilisis ipsum porta sollicitudin volutpat. Fusce tempor
            consectetur fermentum. Duis ut massa nec enim mattis ornare.
            Praesent luctus, dolor sed elementum dignissim, sapien enim eleifend
            est, at semper ex magna vitae metus. Sed turpis est, condimentum a
            ipsum ac, bibendum egestas nulla. Nam suscipit neque in arcu
            hendrerit, vel sagittis ipsum sodales. Ut ut varius ligula. Aliquam
            eget elit nec diam ornare varius eget ut purus. Maecenas congue enim
            nec tempus hendrerit. Curabitur venenatis gravida sem, sed lobortis
            metus lacinia id. Pellentesque non laoreet sapien. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </article>
      </animated.div>
    </div>
  );
};

export default About;
