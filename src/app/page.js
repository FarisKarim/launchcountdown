import Image from "next/image";
import pattern from "../../public/pattern-hills.svg";

export default function Home() {
  return (
    <div className="min-h-screen relative flex justify-center bg-veryDarkMostlyBlackBlue starry-background">
      <div className="w-1/2 flex flex-col justify-center gap-28 h-[75vh]">
        <p className="text-center tracking-widest text-3xl text-white font-bold">
          WE'RE LAUNCHING SOON
        </p>
        <div className="flex justify-center gap-8">
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
        </div>
      </div>
      <div className="absolute bottom-0 z-0 left-0 w-full h-40 flex justify-center items-center">
        <Image src={pattern} layout="fill" objectFit="cover" alt="Pattern" />
        <div className="flex justify-center items-center space-x-4 z-10 text-white">
          <p>Github</p>
          <p>Pinterest</p>
          <p>Facebook</p>
        </div>
      </div>
    </div>
  );
}
