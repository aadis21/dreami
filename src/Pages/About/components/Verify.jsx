import React, { useEffect } from 'react'
import aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Verify() {
  useEffect(() => {
    aos.init({ duration: 1000, easing: 'ease-in-out' });
  })
  return (
    <>
      <div className="max-w-6xl mt-12 mx-auto rounded-3xl px-6 py-16 text-center">
        <div className="relative m-auto max-w-xl">
          <div data-aos='fade-up' className="flex flex-row items-center justify-center text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-auto w-10 fill-current"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-auto w-10 fill-current"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-auto w-10 fill-current"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-auto w-10 fill-current"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-auto w-10 fill-current"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <Link to="/courses" target="_blank">
            <h2 className="mt-4 font-dm-sans text-mobile-h3 font-semibold leading-snug sm:text-mobile-h2 md:text-desktop-h2">
              An
              <span className="font-bold underline underline-offset-2 mx-1">
                absolute 5/5
              </span>{" "}
              {/* */}rating
            </h2>
          </Link>
          <p className="mt-4 font-dm-sans text-desktop-paragraph text-slate-body">
            Reviews are from our Students and our clients
          </p>
          <svg
            className="absolute top-24 -left-10 hidden h-36 fill-current text-slate-body sm:block md:-left-14 md:h-44"
            viewBox="0 0 644 947"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_32_70)">
              <path d="M292 4.3c-59.5 27-88.1 53.2-99.1 90.8-1.7 6-2.2 10.9-2.6 26.1-.5 17.7-.4 18.9 1.6 22.1 1.1 1.8 3.2 3.9 4.6 4.5 9.4 4.3 33.5-2.6 50-14.3 7.6-5.4 19.8-18.1 25.3-26.5 5.2-7.9 13-23.8 16.7-34 4.9-13.9 9.7-34 10-42.4.2-4.5 1.3-12.8 2.4-18.6 2.4-11.9 2.4-12 1.4-12-.5 0-5.1 2-10.3 4.3zM137.2 39.2c-16 29.9-25.1 54.2-28.8 76.8-2.2 13.2-1.3 44 1.6 55.7 3.7 15.6 12 31.3 20.5 39.2 3.7 3.4 5.1 4.1 8.6 4.1 8.4 0 18.2-9.6 26-25.5 5.4-11 10.3-28.2 9.5-33-.5-2.3-.4-2.7.5-1.5.8 1.2 1 1 .5-1-.2-1.4-.1-6.8.3-12 1.5-17.2-1.1-35.6-8-56-4.1-12.4-13.1-32.8-20.1-45.8l-5.5-10.4-5.1 9.4zM264.5 133.4c-21.4 7.2-30 10.7-42.3 17.1-34.4 18.2-55.4 41.3-63.2 69.5-2.4 9-4.7 29.8-3.5 32.6 1 2.4 1.2 3 1.4 4.9.2 3.2 5.5 7.5 10.1 8.3 5.1.9 21.4-.3 24.8-1.8 1.2-.5 2.2-.8 2.2-.6 0 .2-5.1 4.2-11.2 8.9-35 26.5-53.8 50.8-61.4 79.2-1.4 5.4-1.9 10.6-1.9 22.5 0 8.5.4 16.8.8 18.5.5 2.2.5 2.6-.3 1.5-.7-1.1-.8.2-.4 4.5 2.2 20.5 13.1 22.7 39.4 7.8 9.8-5.5 18.3-12.4 24.3-19.8 5.4-6.7 14.2-23.3 18-34 3.5-9.8 8-30.3 7.2-33.3-.4-1.7-.2-2.2.6-1.6.9.5 1 0 .6-1.8-.4-1.3 0-7.4.8-13.4s1.7-18.1 2-26.9c.7-17.8 1.2-22.6 2.4-22.2 1.7.4 14.1-9.6 21.4-17.3 12.2-12.9 21.3-28 30.7-51 7.1-17.4 11.1-32.4 8.1-30.5-1 .5 2.6-13.6 5.4-21.5 1.7-4.9 1.7-5 .8-5-.5 0-8 2.4-16.8 5.4zM69.7 167.5c-6.1 20.4-7.9 26.9-10.1 37-4.5 21-5.9 35.2-5.1 52 .4 8.2.7 16.1.7 17.5.1 10.9 4.6 28.6 10 39.5C71 325 81.5 338 89.9 344.1c6.1 4.4 10.9 5.1 16.2 2.4 3.6-1.9 8.6-9.6 12.2-18.6 5.9-14.8 7.2-24.1 7.1-49.9 0-12.6-.4-17-2.2-23.7-6-22.3-18.2-44.6-39.5-71.8-14.2-18.1-13.3-17.2-14-15zM17.6 327.7c.5 7.6.9 16.8.9 20.5 0 3.6.2 6.3.5 5.8.3-.4.6 2.2.7 5.8.2 9 4.6 31.1 8.9 44.1 10.6 32.6 29 55 55.6 67.6 18.5 8.8 27.1 4.1 28.6-15.8.4-4.5.7-15.9.6-25.2 0-16.5-.1-17.3-3.3-26.5-9.1-26.6-28.1-48.6-61.3-70.8-8.6-5.8-30.6-19.2-31.4-19.2-.4 0-.2 6.2.2 13.7zM195.9 379.7c-39.8 41.9-57.6 78.4-55.4 113.8.3 6 .8 14.6 1 19 .7 13.7 5.8 28.5 11.2 32 6.9 4.6 14.8 2.2 27.6-8.2 12.1-10 20.8-21.3 26.4-34.6 4.1-9.8 7.4-22.3 7.8-30.2.2-3.3.9-11.4 1.5-18 1.2-12.1.8-29-1.1-43.5-1.5-11.9-7.2-41-8-41-.4 0-5.3 4.8-11 10.7z"></path>
              <path d="M0 455.7c0 .2 1.8 4 4.1 8.4 4.7 9.5 6.2 13.2 5 12.5-1.5-1-1.8 3.9-.6 8.7 3.1 12.1 26.5 46.8 41.2 60.8C62.1 558 77.8 568.3 88 571.2c3.6 1 4.9 1.6 3 1.3-1.9-.3-7.8-1.2-13-2-11.7-1.7-35.3-3.5-47.7-3.5H21l5.3 8.2c7.2 11.2 7.2 11.2 5.9 10.4-1.8-1.1-2.6 4.1-1.3 8.4 2.5 8.4 26.1 37.6 40.4 50.2 9.5 8.3 22.2 16.8 30.4 20.5 9.8 4.3 19.4 7.3 24.2 7.4l4.6.1-4.5.8c-2.5.5-12.4 2.1-22 3.6s-17.7 2.9-18 3.1c-.2.2 0 .7.5 1.1 2.7 1.9 13.8 14.4 12.3 13.9-1.8-.6-2.8 1-2.8 4.7 0 3.8 5.3 10.8 14.1 18.7 34.9 31.3 63.1 45 93.9 45.3 6.3 0 13.1-.2 15-.7 1.9-.4-3.5 1.7-12 4.6-23.6 8.2-31 11-31 11.7 0 .3 2.9 2.8 6.5 5.4 5.5 4 10.2 8.4 6.7 6.2-1.3-.8-3.2 2.4-3.2 5.4 0 9.9 48.6 36.1 79 42.6 12.5 2.7 32.7 2.5 44.4-.4 11.3-2.8 26.1-9.8 30.9-14.5 3.9-4 5.6-9.2 3.8-12.4-.8-1.7-.4-2.4 2.9-4.9 2.2-1.6 4-3.2 4-3.6 0-.4-2.6-4-5.8-8-16.2-20.3-36.8-32.8-60.8-36.9-8.9-1.5-36.8-.6-47.4 1.5-13.1 2.6-14.7 2.6-5.9.3 5.1-1.3 10.2-3.4 12.2-5 3.8-2.9 6.1-8.4 5.1-12.3-.5-1.8.1-2.6 2.5-3.9 1.7-.8 3.1-1.9 3.1-2.3 0-.4-1.6-3.8-3.5-7.5-16.3-31.7-42.4-50.1-78.1-54.8-11.3-1.5-12.7-1.9-9.1-3 5.1-1.4 8.4-5.8 8.9-11.8.1-2 .9-3.3 2-3.7 2.3-.7 2.3-.6-1.2-11.4-10.8-32.9-30.5-53.4-64-66.2-4.1-1.5-5.9-2.5-4-2.1 1.9.5 8.2.8 14 .8 8.1 0 11.3-.4 14.2-1.8 3.9-2 7.3-7.6 6.5-10.7-.3-1.2.2-2 1.4-2.3 2.3-.6 2.3-2.1.4-12.4-6.1-32-24.9-56.8-54.4-71.8-15.7-7.9-39.4-14.7-66.6-19-8.8-1.3-17-2.6-18.2-2.9-1.3-.2-2.3-.2-2.3.1z"></path>
              <path d="M220.7 504.8c-30.5 40.8-44.3 75.7-42.2 106.7.3 5.5.8 14 1 19 .5 11.3 3 20.4 8.3 29.3 4.4 7.4 8.8 11.8 12.8 12.8 10.2 2.6 33.9-21.8 42.2-43.3 3.4-8.7 6.7-23.5 5.8-25.8-.3-.9-.1-3.9.5-6.8.5-2.8 1-11.7 1-19.7.1-15.5-1.5-28.4-5.7-45.5-3.3-13.7-11.7-40.5-12.6-40.5-.5 0-5.5 6.2-11.1 13.8zM277 582.1c-18.9 38.5-25.4 63.2-24.8 94.1.2 8.6.6 15.1 1 14.5.5-.7.5.2.2 1.9-1.9 9.8 7.7 35.4 18.1 48.7 7.6 9.6 14.1 12 21 7.7 7-4.3 19.5-24 23.9-37.5 2-6.3 4.6-19.7 4-20.7-.3-.4 0-5.4.6-11.1 2.6-25.7-5.1-55.3-24-92.2-4.2-8.3-8.7-16.5-9.8-18.4l-2.1-3.5-8.1 16.5zM344.5 638.2c-.2.7-1.4 7.8-2.7 15.8-1.9 12.3-2.2 18.8-2.3 43-.2 30.9.7 40.1 5 55.5 6.6 23.2 20.4 43 38.8 55.2 12 8 18.9 7 24.5-3.4 3.6-6.9 7.4-20.5 7.8-28.3.1-3 .5-10.9.9-17.5.9-13.5-.1-21.3-4.1-33.9-6.6-20.8-19.8-40.6-42.9-64.5-14.7-15.2-24.4-23.7-25-21.9zM430.1 730.2c5.2 12.9 6.9 17.9 5.9 17.3-.6-.4-1 1.2-1 4.2 0 7.8 11.5 31.3 25.2 51.4 21.5 31.7 52.9 50.9 83.2 50.9 12.4 0 16.6-2.7 18-11.2.1-1.1.8-2.3 1.5-2.7 1-.7 1.1-2.7.2-9.8-6.6-54.5-40.1-83.6-116.4-101.2-9.7-2.3-17.9-4.1-18.2-4.1-.3 0 .5 2.4 1.6 5.2zM383.2 818.1c-19.3 2.5-43.5 12.4-66.7 27.4-10.8 6.9-31.4 21.8-31.5 22.6 0 .4 2.8 1.6 6.3 2.9 6.6 2.4 9.2 4 6.5 4-1 0-1.9 1.2-2.3 3-1.4 6.5 4.5 10.5 22.6 15.4 57.2 15.5 98.2 9.3 127-19.4 7.5-7.4 10.1-13.1 8.1-17.4-.9-2.1-.6-3.1 2.9-7.7 2.1-2.9 3.9-5.5 3.9-5.8 0-.3-2.5-2.4-5.5-4.6-22.9-16.7-46.9-23.6-71.3-20.4zM612.333 854.83c-4.833 1.066-12.082 6.316-13.995 10.197-1.309 2.587-1.611 4.566-1.108 8.522.403 2.816.604 6.392.604 7.838-.201 7.229 6.243 14.686 14.6 16.741 13.895 3.5 28.696-3.957 29.401-14.839.101-2.13.806-5.402 1.41-7.381 1.007-2.815 1.007-4.565 0-7.685-3.122-10.577-16.815-16.513-30.912-13.393zM505.5 860.6c-27.6 4.6-58.7 22.7-93.5 54.1l-5.4 5 7.4 2.3c4.1 1.3 6.7 2.5 5.8 2.7-2.3.6-3.4 4.8-2 7.8 1.6 3.5 7.5 6.1 18.8 8.4 56.8 11.5 96.8 3.7 125-24.3 6.9-6.9 11-13 11.4-17.1.5-4.2 0-6.6-1.2-5.9-1.2.8-1.2.7 3.9-7.3 1.8-2.9 3.3-5.6 3.3-6.2 0-1.5-4.9-4.6-14.7-9.5-20.7-10.4-38.6-13.5-58.8-10z"></path>
            </g>
            <defs>
              <clipPath id="clip0_32_70">
                <path
                  transform="matrix(1 0 0 -1 0 946.016)"
                  d="M0 0H644V946.016H0z"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="absolute top-24 -right-10 hidden h-36 fill-current text-slate-body sm:block md:-right-14 md:h-44"
            viewBox="0 0 644 947"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_32_70)">
              <path d="M352 4.3c59.5 27 88.1 53.2 99.1 90.8 1.7 6 2.2 10.9 2.6 26.1.5 17.7.4 18.9-1.6 22.1-1.1 1.8-3.2 3.9-4.6 4.5-9.4 4.3-33.5-2.6-50-14.3-7.6-5.4-19.8-18.1-25.3-26.5-5.2-7.9-13-23.8-16.7-34-4.9-13.9-9.7-34-10-42.4-.2-4.5-1.3-12.8-2.4-18.6-2.4-11.9-2.4-12-1.4-12 .5 0 5.1 2 10.3 4.3zM506.8 39.2c16 29.9 25.1 54.2 28.8 76.8 2.2 13.2 1.3 44-1.6 55.7-3.7 15.6-12 31.3-20.5 39.2-3.7 3.4-5.1 4.1-8.6 4.1-8.4 0-18.2-9.6-26-25.5-5.4-11-10.3-28.2-9.5-33 .5-2.3.4-2.7-.5-1.5-.8 1.2-1 1-.5-1 .2-1.4.1-6.8-.3-12-1.5-17.2 1.1-35.6 8-56 4.1-12.4 13.1-32.8 20.1-45.8l5.5-10.4 5.1 9.4zM379.5 133.4c21.4 7.2 30 10.7 42.3 17.1 34.4 18.2 55.4 41.3 63.2 69.5 2.4 9 4.7 29.8 3.5 32.6-1 2.4-1.2 3-1.4 4.9-.2 3.2-5.5 7.5-10.1 8.3-5.1.9-21.4-.3-24.8-1.8-1.2-.5-2.2-.8-2.2-.6 0 .2 5.1 4.2 11.2 8.9 35 26.5 53.8 50.8 61.4 79.2 1.4 5.4 1.9 10.6 1.9 22.5 0 8.5-.4 16.8-.8 18.5-.5 2.2-.5 2.6.3 1.5.7-1.1.8.2.4 4.5-2.2 20.5-13.1 22.7-39.4 7.8-9.8-5.5-18.3-12.4-24.3-19.8-5.4-6.7-14.2-23.3-18-34-3.5-9.8-8-30.3-7.2-33.3.4-1.7.2-2.2-.6-1.6-.9.5-1 0-.6-1.8.4-1.3 0-7.4-.8-13.4s-1.7-18.1-2-26.9c-.7-17.8-1.2-22.6-2.4-22.2-1.7.4-14.1-9.6-21.4-17.3-12.2-12.9-21.3-28-30.7-51-7.1-17.4-11.1-32.4-8.1-30.5 1 .5-2.6-13.6-5.4-21.5-1.7-4.9-1.7-5-.8-5 .5 0 8 2.4 16.8 5.4zM574.3 167.5c6.1 20.4 7.9 26.9 10.1 37 4.5 21 5.9 35.2 5.1 52-.4 8.2-.7 16.1-.7 17.5-.1 10.9-4.6 28.6-10 39.5-5.8 11.5-16.3 24.5-24.7 30.6-6.1 4.4-10.9 5.1-16.2 2.4-3.6-1.9-8.6-9.6-12.2-18.6-5.9-14.8-7.2-24.1-7.1-49.9 0-12.6.4-17 2.2-23.7 6-22.3 18.2-44.6 39.5-71.8 14.2-18.1 13.3-17.2 14-15zM626.4 327.7c-.5 7.6-.9 16.8-.9 20.5 0 3.6-.2 6.3-.5 5.8-.3-.4-.6 2.2-.7 5.8-.2 9-4.6 31.1-8.9 44.1-10.6 32.6-29 55-55.6 67.6-18.5 8.8-27.1 4.1-28.6-15.8-.4-4.5-.7-15.9-.6-25.2 0-16.5.1-17.3 3.3-26.5 9.1-26.6 28.1-48.6 61.3-70.8 8.6-5.8 30.6-19.2 31.4-19.2.4 0 .2 6.2-.2 13.7zM448.1 379.7c39.8 41.9 57.6 78.4 55.4 113.8-.3 6-.8 14.6-1 19-.7 13.7-5.8 28.5-11.2 32-6.9 4.6-14.8 2.2-27.6-8.2-12.1-10-20.8-21.3-26.4-34.6-4.1-9.8-7.4-22.3-7.8-30.2-.2-3.3-.9-11.4-1.5-18-1.2-12.1-.8-29 1.1-43.5 1.5-11.9 7.2-41 8-41 .4 0 5.3 4.8 11 10.7z"></path>
              <path d="M644 455.7c0 .2-1.8 4-4.1 8.4-4.7 9.5-6.2 13.2-5 12.5 1.5-1 1.8 3.9.6 8.7-3.1 12.1-26.5 46.8-41.2 60.8-12.4 11.9-28.1 22.2-38.3 25.1-3.6 1-4.9 1.6-3 1.3 1.9-.3 7.8-1.2 13-2 11.7-1.7 35.3-3.5 47.7-3.5h9.3l-5.3 8.2c-7.2 11.2-7.2 11.2-5.9 10.4 1.8-1.1 2.6 4.1 1.3 8.4-2.5 8.4-26.1 37.6-40.4 50.2-9.5 8.3-22.2 16.8-30.4 20.5-9.8 4.3-19.4 7.3-24.2 7.4l-4.6.1 4.5.8c2.5.5 12.4 2.1 22 3.6s17.7 2.9 18 3.1c.2.2 0 .7-.5 1.1-2.7 1.9-13.8 14.4-12.3 13.9 1.8-.6 2.8 1 2.8 4.7 0 3.8-5.3 10.8-14.1 18.7-34.9 31.3-63.1 45-93.9 45.3-6.3 0-13.1-.2-15-.7-1.9-.4 3.5 1.7 12 4.6 23.6 8.2 31 11 31 11.7 0 .3-2.9 2.8-6.5 5.4-5.5 4-10.2 8.4-6.7 6.2 1.3-.8 3.2 2.4 3.2 5.4 0 9.9-48.6 36.1-79 42.6-12.5 2.7-32.7 2.5-44.4-.4-11.3-2.8-26.1-9.8-30.9-14.5-3.9-4-5.6-9.2-3.8-12.4.8-1.7.4-2.4-2.9-4.9-2.2-1.6-4-3.2-4-3.6 0-.4 2.6-4 5.8-8 16.2-20.3 36.8-32.8 60.8-36.9 8.9-1.5 36.8-.6 47.4 1.5 13.1 2.6 14.7 2.6 5.9.3-5.1-1.3-10.2-3.4-12.2-5-3.8-2.9-6.1-8.4-5.1-12.3.5-1.8-.1-2.6-2.5-3.9-1.7-.8-3.1-1.9-3.1-2.3 0-.4 1.6-3.8 3.5-7.5 16.3-31.7 42.4-50.1 78.1-54.8 11.3-1.5 12.7-1.9 9.1-3-5.1-1.4-8.4-5.8-8.9-11.8-.1-2-.9-3.3-2-3.7-2.3-.7-2.3-.6 1.2-11.4 10.8-32.9 30.5-53.4 64-66.2 4.1-1.5 5.9-2.5 4-2.1-1.9.5-8.2.8-14 .8-8.1 0-11.3-.4-14.2-1.8-3.9-2-7.3-7.6-6.5-10.7.3-1.2-.2-2-1.4-2.3-2.3-.6-2.3-2.1-.4-12.4 6.1-32 24.9-56.8 54.4-71.8 15.7-7.9 39.4-14.7 66.6-19 8.8-1.3 17-2.6 18.2-2.9 1.3-.2 2.3-.2 2.3.1z"></path>
              <path d="M423.3 504.8c30.5 40.8 44.3 75.7 42.2 106.7-.3 5.5-.8 14-1 19-.5 11.3-3 20.4-8.3 29.3-4.4 7.4-8.8 11.8-12.8 12.8-10.2 2.6-33.9-21.8-42.2-43.3-3.4-8.7-6.7-23.5-5.8-25.8.3-.9.1-3.9-.5-6.8-.5-2.8-1-11.7-1-19.7-.1-15.5 1.5-28.4 5.7-45.5 3.3-13.7 11.7-40.5 12.6-40.5.5 0 5.5 6.2 11.1 13.8zM367 582.1c18.9 38.5 25.4 63.2 24.8 94.1-.2 8.6-.6 15.1-1 14.5-.5-.7-.5.2-.2 1.9 1.9 9.8-7.7 35.4-18.1 48.7-7.6 9.6-14.1 12-21 7.7-7-4.3-19.5-24-23.9-37.5-2-6.3-4.6-19.7-4-20.7.3-.4 0-5.4-.6-11.1-2.6-25.7 5.1-55.3 24-92.2 4.2-8.3 8.7-16.5 9.8-18.4l2.1-3.5 8.1 16.5zM299.5 638.2c.2.7 1.4 7.8 2.7 15.8 1.9 12.3 2.2 18.8 2.3 43 .2 30.9-.7 40.1-5 55.5-6.6 23.2-20.4 43-38.8 55.2-12 8-18.9 7-24.5-3.4-3.6-6.9-7.4-20.5-7.8-28.3-.1-3-.5-10.9-.9-17.5-.9-13.5.1-21.3 4.1-33.9 6.6-20.8 19.8-40.6 42.9-64.5 14.7-15.2 24.4-23.7 25-21.9zM213.9 730.2c-5.2 12.9-6.9 17.9-5.9 17.3.6-.4 1 1.2 1 4.2 0 7.8-11.5 31.3-25.2 51.4-21.5 31.7-52.9 50.9-83.2 50.9-12.4 0-16.6-2.7-18-11.2-.1-1.1-.8-2.3-1.5-2.7-1-.7-1.1-2.7-.2-9.8 6.6-54.5 40.1-83.6 116.4-101.2 9.7-2.3 17.9-4.1 18.2-4.1.3 0-.5 2.4-1.6 5.2zM260.8 818.1c19.3 2.5 43.5 12.4 66.7 27.4 10.8 6.9 31.4 21.8 31.5 22.6 0 .4-2.8 1.6-6.3 2.9-6.6 2.4-9.2 4-6.5 4 1 0 1.9 1.2 2.3 3 1.4 6.5-4.5 10.5-22.6 15.4-57.2 15.5-98.2 9.3-127-19.4-7.5-7.4-10.1-13.1-8.1-17.4.9-2.1.6-3.1-2.9-7.7-2.1-2.9-3.9-5.5-3.9-5.8 0-.3 2.5-2.4 5.5-4.6 22.9-16.7 46.9-23.6 71.3-20.4zM31.666 854.83c4.834 1.066 12.083 6.316 13.996 10.197 1.31 2.587 1.611 4.566 1.108 8.522-.403 2.816-.604 6.392-.604 7.838.201 7.229-6.243 14.686-14.6 16.741-13.895 3.5-28.696-3.957-29.401-14.839-.1-2.13-.806-5.402-1.41-7.381-1.007-2.815-1.007-4.565 0-7.685 3.122-10.577 16.815-16.513 30.912-13.393zM138.5 860.6c27.6 4.6 58.7 22.7 93.5 54.1l5.4 5-7.4 2.3c-4.1 1.3-6.7 2.5-5.8 2.7 2.3.6 3.4 4.8 2 7.8-1.6 3.5-7.5 6.1-18.8 8.4-56.8 11.5-96.8 3.7-125-24.3-6.9-6.9-11-13-11.4-17.1-.5-4.2 0-6.6 1.2-5.9 1.2.8 1.2.7-3.9-7.3-1.8-2.9-3.3-5.6-3.3-6.2 0-1.5 4.9-4.6 14.7-9.5 20.7-10.4 38.6-13.5 58.8-10z"></path>
            </g>
            <defs>
              <clipPath id="clip0_32_70">
                <path transform="rotate(180 322 473.008)" d="M0 0H644V946.016H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div data-aos="fade-up" className="mt-6 flex flex-col items-center justify-center space-y-3">
          <Link to="/courses" target="_blank">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=347156&theme=light&period=daily"
              width={250}
              height={54}
            />
          </Link>
          <Link to="/courses" target="_blank">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=347156&theme=light"
              width={250}
              height={54}
            />
          </Link>
        </div>
      </div>


    </>
  )
}
