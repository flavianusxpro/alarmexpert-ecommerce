import Container from "@/components/ui/Container";
import { Button, Card, CardHeader, Image } from "@heroui/react";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const PopularCategories = () => {
  const popularCategories = [
    {
      id: 1,
      title: "CCTV",
      image: "images/banners/Banner-2.jpg",
      buttonText: "More",
    },
    {
      id: 2,
      title: "Automation",
      image: "images/banners/Banner-1.jpg",
      buttonText: "More",
    },
    {
      id: 3,
      title: "Access Control",
      image: "/images/banners/hotsale-1.jpg",
      buttonText: "More",
    },
    {
      id: 4,
      title: "Smart Lock",
      image: "/images/banners/hotsale-2.jpg",
      buttonText: "More",
    },
    {
      id: 5,
      title: "Surveillance",
      image: "images/banners/hotsale-3.jpg",
      buttonText: "More",
    },
  ];

  return (
    <Container>
      <div className="w-full">
        <h1 className="text-center text-[40px] font-bold pb-8">
          Check out the most popular categories
        </h1>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {popularCategories.map((item) => (
            <SwiperSlide key={item.id}>
              <Card className="h-[300px] relative overflow-hidden">
                <CardHeader
                  className="absolute z-10 flex-col items-start gap-[20px] 
                         bg-white/40 backdrop-blur-sm"
                >
                  <h4 className="text-[#0A3353] text-[30px] font-semibold">
                    {item.title}
                  </h4>
                  <Button
                    className="bg-white text-[20px] font-bold"
                    radius="full"
                  >
                    {item.buttonText}
                  </Button>
                </CardHeader>

                <Image
                  removeWrapper
                  alt={item.title}
                  className="z-0 w-full h-full object-cover"
                  src={item.image}
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default PopularCategories;
