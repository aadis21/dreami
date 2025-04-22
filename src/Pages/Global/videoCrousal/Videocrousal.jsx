import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const VideoCarousel = () => {
  const playersRef = useRef([]);

  // Setup Plyr once
  useEffect(() => {
    const players = Array.from(document.querySelectorAll('.js-player')).map(
      (player) =>
        new Plyr(player, {
          // controls: [
          // controls: [
          //   'play-large',
          //   'play',
          //   'progress',
          //   'current-time',
          //   'mute',
          //   'volume',
          //   'captions',
          //   'fullscreen',
          // ],
          fullscreen: { enabled: true },
          resetOnEnd: true,
          hideControls: false,
          clickToPlay: true,
          keyboard: true,
        })
    );

    playersRef.current = players;

    return () => {
      players.forEach((player) => player.destroy());
    };
  }, []);


  const videos = [
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
      poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
    },
    // {
    //   src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    //   poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg',
    // },
    {
      src: 'https://media.w3.org/2010/05/bunny/movie.mp4',
      poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big_Buck_Bunny_Poster_2008.png/800px-Big_Buck_Bunny_Poster_2008.png',
    },
  ];



  // Ensure only the active video plays, others pause/reset
  const handlePlayActiveVideo = () => {
    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach((slide) => {
      const videoEl = slide.querySelector('video');
      if (!videoEl) return;

      if (slide.classList.contains('swiper-slide-active')) {
        videoEl.play().catch(() => { });
      } else {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Swiper
        className="swiper w-full"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        centeredSlides={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        loop={true}
        onSlideChangeTransitionEnd={handlePlayActiveVideo}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          600: { slidesPerView: 1.3 },
          900: { slidesPerView: 1.5 },
          1200: { slidesPerView: 2 },
          1600: { slidesPerView: 2.5 },
        }}
        onInit={handlePlayActiveVideo}
      >
        {/* {[1, 2, 3].map((i) => (
          <SwiperSlide key={i}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <video
                className="js-player w-full h-auto"
                playsInline
                controls
                muted
                autoPlay
                poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
              >
                <source
                  src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </SwiperSlide>
        ))} */}

        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <video
                className="js-player w-full h-auto"
                playsInline
                controls
                muted
                autoPlay
                poster={video.poster}
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>
        ))}


        {/* Navigation */}
        {/* Previous Button */}
        <div className="swiper-button-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 p-3 sm:p-5 md:p-6 rounded-full shadow-md cursor-pointer hover:bg-opacity-100 transition-all duration-200 active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.707 14.707a1 1 0 01-1.414 0L7.586 11l3.707-3.707a1 1 0 111.414 1.414L10.414 11l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Next Button */}
        <div className="swiper-button-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 p-3 sm:p-5 md:p-6 rounded-full shadow-md cursor-pointer hover:bg-opacity-100 transition-all duration-200 active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 001.414 0L12.414 11l-3.707-3.707a1 1 0 00-1.414 1.414L9.586 11l-2.293 2.293a1 1 0 000 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>



        {/* <div className="swiper-pagination mt-4"></div> */}
      </Swiper>

      {/* <p className="text-center text-gray-500 text-sm mt-6">
        Double-click the video to enter fullscreen mode
      </p> */}
    </div>
  );
};

export default VideoCarousel;
