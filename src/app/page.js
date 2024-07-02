"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import pattern from "../../public/pattern-hills.svg";
import facebook from "../../public/icon-facebook.svg";
import instagram from "../../public/icon-instagram.svg";
import pinterest from "../../public/icon-pinterest.svg";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="flex justify-center px-4 sm:px-0 gap-4 sm:gap-8">
      {Object.keys(timeLeft).map((interval) => (
        <div
          key={interval}
          className="flex flex-col justify-between gap-4 sm:gap-8 items-center"
        >
          <div className="h-20 w-20 p-5 sm:h-40 sm:w-40 z-0 relative border-b-8 border-b-black bg-darkDesaturatedBlue rounded-xl text-softRed flex text-7xl items-center justify-center">
            <span className="text-softRed text-4xl sm:text-7xl">{timeLeft[interval]}</span>
            <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-veryDarkMostlyBlackBlue rounded-full"></div>
            <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-veryDarkMostlyBlackBlue rounded-full"></div>
            <div className="absolute top-1/2 left-1 right-1 h-0.5 transform -translate-y-1/2"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-darkerDesaturated rounded-t-xl -z-10"></div>
          </div>
          <p className="text-grayishBlue tracking-widest text-xs sm:text-sm">
            {interval.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const targetDate = new Date().setHours(new Date().getHours() + 129);

  return (
    <div className="min-h-screen relative flex justify-center bg-veryDarkMostlyBlackBlue starry-background">
      <div className="w-full sm:w-1/2 flex flex-col justify-center md:gap-24 lg:gap-36 h-[75vh] sm:h-[60vh]">
        <p className="text-center -mt-16 px-5 mb-10 sm:mb-0 sm:-mt-0 tracking-extra-wide text-xl text-white">
          WE'RE LAUNCHING SOON
        </p>
        <CountdownTimer targetDate={targetDate} />

        {/* <div className="flex justify-center gap-8">
          <div className="flex flex-col justify-between gap-8 items-center">
            <div className="h-36 w-40 z-0 relative border-b-12 border-b-black bg-darkDesaturatedBlue rounded-xl  text-softRed flex text-7xl items-center justify-center">
              08
              <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-veryDarkMostlyBlackBlue rounded-full"></div>
              <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-veryDarkMostlyBlackBlue rounded-full"></div>
              <div className="absolute top-1/2 left-1 right-1 h-0.5 transform -translate-y-1/2"></div>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-veryDarkBlue rounded-t-xl -z-10"></div>
            </div>
            <p className="text-grayishBlue tracking-widest text-md">DAYS</p>
          </div>
          <div className="flex flex-col justify-between gap-8 items-center">
            <div className="h-36 w-40 relative z-0 border-b-12 border-b-black bg-darkDesaturatedBlue rounded-xl  text-softRed flex text-7xl items-center justify-center">
              23
              <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-veryDarkMostlyBlackBlue rounded-full"></div>
              <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-veryDarkMostlyBlackBlue rounded-full"></div>
              <div className="absolute top-1/2 left-1 right-1 h-0.5 transform -translate-y-1/2"></div>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-veryDarkBlue rounded-t-xl -z-10"></div>
            </div>
            <p className="text-grayishBlue tracking-widest text-md">HOURS</p>
          </div>
          <div className="flex flex-col justify-between gap-8 items-center">
            <div className="h-36 w-40 z-0 relative border-b-12 border-b-black bg-darkDesaturatedBlue rounded-xl  text-softRed flex text-7xl items-center justify-center">
              55
              <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-veryDarkMostlyBlackBlue rounded-full"></div>
              <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-veryDarkMostlyBlackBlue rounded-full"></div>
              <div className="absolute top-1/2 left-1 right-1 h-0.5 transform -translate-y-1/2"></div>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-veryDarkBlue rounded-t-xl -z-10"></div>
            </div>
            <p className="text-grayishBlue tracking-widest text-md">MINUTES</p>
          </div>
          <div className="flex flex-col justify-between gap-8 items-center">
            <div className="h-36 w-40 z-0 relative border-b-12 border-b-black bg-darkDesaturatedBlue rounded-xl  text-softRed flex text-7xl items-center justify-center">
              41
              <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-veryDarkMostlyBlackBlue rounded-full"></div>
              <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-veryDarkMostlyBlackBlue rounded-full"></div>
              <div className="absolute top-1/2 left-1 right-1 h-0.5 transform -translate-y-1/2"></div>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-veryDarkBlue rounded-t-xl -z-10"></div>
            </div>
            <p className="text-grayishBlue tracking-widest text-md">SECONDS</p>
          </div>
        </div> */}
      </div>
      <div className="absolute bottom-0 z-0 left-0 w-full h-40 sm:h-48 flex justify-center items-center">
        <Image src={pattern} layout="fill" objectFit="cover" alt="Pattern" />
        <div className="flex justify-center items-center space-x-8 z-10 text-white">
          <Image className="hover:bg-softRed" src={facebook} alt="facebook" />
          <Image
            className="hover:bg-softRed rounded-full"
            src={pinterest}
            alt="pinterest"
          />
          <Image
            className="hover:bg-softRed rounded-md"
            src={instagram}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
}
