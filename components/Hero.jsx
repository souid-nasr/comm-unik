import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.min.css";

const Slider = () => {
  SwiperCore.use([Navigation, Autoplay, Pagination,Scrollbar,]);
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination,Scrollbar,]}
      autoplay={{ delay: 5000 }}
      loop={true}
      navigation
      scrollbar
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/cuisine/c2horiz.jpg')]"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Cuisines{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <p className="md:text-2xl text-xl font-bold text-white">
                Sublimez votre intérieur afin qu&#39;il vous ressemble ! !
              </p>
              <Link href="/portfolio/cuisines">
                <button className="uppercase cta-btn">
                  voir toutes les cuisines{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/dressing/dhoriz.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Dressings{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <p className="md:text-2xl text-xl font-bold text-white">
                Sublimez votre intérieur afin qu&#39;il vous ressemble ! !
              </p>
              <Link href="/portfolio/dressings">
                <button className="uppercase  cta-btn">
                  voir toutes les dressings{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/bibliotheque/bibliotheque_1.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Bibliothèques{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <p className="md:text-2xl text-xl font-bold text-white">
                Sublimez votre intérieur afin qu&#39;il vous ressemble ! !
              </p>
              <Link href="/portfolio/bibliotheques">
                <button className="uppercase  cta-btn">
                  voir toutes les bibliothèques{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/chambre/chambre.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Chambres d&#39;enfants{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <p className="md:text-2xl text-xl font-bold text-white">
                Sublimez votre intérieur afin qu&#39;il vous ressemble ! !
              </p>
              <Link href="/portfolio/chambres">
                <button className="uppercase  cta-btn">
                  voir toutes les Chambres d&#39;enfants{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/habillage/habillage.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Habillages{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <p className="md:text-2xl text-xl font-bold text-white">
                Sublimez votre intérieur afin qu&#39;il vous ressemble ! !
              </p>
              <Link href="/portfolio/habillages">
                <button className="uppercase  cta-btn">
                  voir toutes les Habillages{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/porte/porte.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Portes{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <p className="md:text-2xl text-xl font-bold text-white">
                Sublimez votre intérieur afin qu&#39;il vous ressemble ! !
              </p>
              <Link href="/portfolio/portes">
                <button className="uppercase  cta-btn">
                  voir toutes les Portes{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/separation/separation.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Separations{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <p className="md:text-2xl text-xl font-bold text-white">
                Sublimez votre intérieur afin qu&#39;il vous ressemble ! !
              </p>
              <Link href="/portfolio/separations">
                <button className="uppercase  cta-btn">
                  voir toutes les Separations{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/sousescalier/sousescalier.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Sous escaliers{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <p className="md:text-2xl text-xl font-bold text-white">
                Sublimez votre intérieur afin qu&#39;il vous ressemble ! !
              </p>
              <Link href="/portfolio/sousescaliers">
                <button className="uppercase  cta-btn">
                  voir toutes les Sous escaliers{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
