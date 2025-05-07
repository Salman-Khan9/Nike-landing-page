"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import Popup from "../popup/popup";

export default function Hero() {
  const [selectedCard, setSelectedCard] = useState(0);
  const animationData = [
    {
      image: "/images/green.png",
      color2: "/images/green1.png",
      color1: "/images/green2.png",
      bg: "#B6D77D80",
    },
    {
      image: "/images/pink.png",
      color2: "/images/pink1.png",
      color1: "/images/pink2.png",
      bg: "#E7C2C680",
    },
    {
      image: "/images/blue.png",
      color2: "/images/blue1.png",
      color1: "/images/blue2.png",
      bg: "#D2F1DFB2",
    },
  ];
  const [data, setData] = useState(animationData[0]);
  const [open, setOpen] = useState(false);

  const handleData = (data) => {
    setData(data);
  };
  return (
    <div className="ms-2">
      <div className="flex items-center justify-between md:justify-evenly">
        <div>
          <p className="font-bold md:text-[34px] lg:text-[44px] xl:text-[55px] md:font-medium">
            Men nike
          </p>
          <p className="font-bold md:text-[34px] lg:text-[44px] xl:text-[55px] md:font-medium">
            Air Zoom Peagasus
          </p>
          <p className="text-xs md:text-[15px] text-[#979797]">
            Item no. BQ5643-453
          </p>
          <p className="text-xs  md:text-[18px]">Item Type: Unisex Running</p>
          <p className="font-bold md:text-[34px] lg:text-[44px] xl:text-[55px] md:font-medium">
            $125
          </p>
          <button
            onClick={() => setOpen(true)}
            className="py-2 px-4 md:py-4 md:px-12 bg-black rounded-xl text-white  md:text-[22px] font-semibold md:font-bold dark:bg-white dark:text-black"
          >
            Buy Now
          </button>
        </div>
        <div className="flex ">
          <motion.div
            className="absolute -translate-x-72   "
            key={data.image}
            initial={{ x: -100, zIndex: 20, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              zIndex: 20,
              transition: { duration: 1.5 },
            }}
          >
            <div className="translate-x-56 translate-y-20    md:translate-y-32 md:translate-x-52 lg:translate-y-30 lg:translate-x-30 z-20 relative  w-[100px] h-[100px]  md:w-[150px] md:h-[150px] lg:w-[300px] lg:h-[300px]">
              <Image
                src={data.image}
                objectFit="fill"
                layout="fill"
                alt="abc"
                className="z-20 relative"
              />
            </div>
          </motion.div>
          <motion.div
            key={data.bg}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
          >
            <div className="flex flex-col z-0 relative">
              <div className="relative w-[140px] h-[140px]  md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px]">
                <Image
                  quality={10}
                  priority={true}
                  src={data.color1}
                  objectFit="fill"
                  layout="fill"
                  alt="abc"
                />
              </div>
              <div className="relative  w-[140px] h-[140px]  md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px]">
                <Image
                  quality={10}
                  priority={true}
                  src={data.color2}
                  objectFit="fill"
                  layout="fill"
                  alt="abc"
                  className="-translate-y-[125px] md:-translate-y-[218px] lg:-translate-y-[275px] z-0 relative"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex gap-10 justify-end container mx-auto">
        {animationData.map((data, index) => {
          const isSelected = selectedCard === index;
          return (
            <motion.div
              key={index}
              onClick={() => setSelectedCard(index)}
              className=" flex items-center justify-center origin-left "
              initial={{ scaleX: 1 }}
              animate={{
                scaleX: isSelected ? 1 : 0.8,
                transition: { duration: 0.6 },
              }}
              style={{
                width: isSelected ? "max-content" : "max-content",
              }}
            >
              <button
                onClick={() => handleData(data)}
                className="flex cursor-pointer rounded-xl"
                style={{ backgroundColor: data.bg }}
              >
                {" "}
                <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[75px]">
                  <Image
                    src={data.image}
                    objectFit="fill"
                    layout="fill"
                    alt="shoe"
                    className="-translate-x-4  md:-translate-x-8"
                  />{" "}
                </div>
                {isSelected ? (
                  <div className="-translate-x-3 text-start">
                    <p className="text-xs md:text-[15px] pt-1 md:pt-2 ">
                      Air Zoom Peagasus
                    </p>
                    <p className="text-xs md:text-[15px] font-bold">$123</p>
                  </div>
                ) : (
                  ""
                )}
              </button>
            </motion.div>
          );
        })}
      </div>
      <Popup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
