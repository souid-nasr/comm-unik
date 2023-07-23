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
          className="hero bg-[url('../assets/img/impression-grands-formats/c2horiz.jpg')]"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Impression grands formats{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <Link href="/portfolio/impression-grands-formats">
                <button className="uppercase cta-btn">
                  voir toutes les impressions grands formats{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/carterie/dhoriz.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
              Carterie
              </h1>
              <div className="flex justify-center items-center"></div>
              <Link href="/portfolio/carterie">
                <button className="uppercase  cta-btn">
                voir toutes les Carterie{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/support-publicitaire/bibliotheque_1.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
              Support Publicitaire {" "}
              </h1>
              <div className="flex justify-center items-center"></div>

              <Link href="/portfolio/bibliotheques">
                <button className="uppercase  cta-btn">
                  voir tous les supports publicitaires {" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/tenues-de-travail/chambre.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Tenue de travail {" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <Link href="/portfolio/tenues-de-travail">
                <button className="uppercase  cta-btn">
                  voir toutes les tenues de travail{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/objets/habillage.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Objets {" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <Link href="/portfolio/objets">
                <button className="uppercase  cta-btn">
                  voir tous les objets{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/papiers-peints/porte.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
              Papiers peints & tableaux{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <Link href="/portfolio/papiers-peints">
                <button className="uppercase  cta-btn">
                  voir tous les tableaux & papiers peints{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/enseignes/separation_1.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                enseignes en lettres boîtiers{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <Link href="/portfolio/enseignes-lettres-boitiers">
                <button className="uppercase  cta-btn">
                  voir toutes les  enseignes en lettres boîtiers{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/enseignes/separation_1.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                enseignes LUMINEUSES{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <Link href="/portfolio/enseignes-lumineuses">
                <button className="uppercase  cta-btn">
                  voir toutes les  enseignes LUMINEUSES{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/habillage/sousescalier.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Habillages facades {" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <Link href="/portfolio/habillage-facade">
                <button className="uppercase  cta-btn">
                  voir toutes les Habillages facades{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </SwiperSlide>



      <SwiperSlide>
        <section
          id="hero"
          className="hero bg-[url('../assets/img/habillage/sousescalier.jpg')] bg-cover	"
        >
          <div className="text-white uppercase bg-black/50 ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Amenagements professionnels{" "}
              </h1>
              <div className="flex justify-center items-center"></div>
              <p className="md:text-2xl text-xl font-bold text-white">
                Sublimez votre intérieur afin qu&#39;il vous ressemble ! !
              </p>
              <Link href="/portfolio/amenagement-pro">
                <button className="uppercase  cta-btn">
                  voir tous les Amenagements professionnels{" "}
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
