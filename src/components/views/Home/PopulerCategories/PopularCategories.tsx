import Container from '@/components/ui/Container'
import { Button, Card, CardHeader, Image } from '@heroui/react'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const PopularCategories = () => {
  const popularCategories = [
    {
      id: 1,
      title: "Access Control",
      image: "https://heroui.com/images/card-example-4.jpeg",
      buttonText: "More",
    },
    {
      id: 2,
      title: "Smart Lock",
      image: "https://heroui.com/images/card-example-2.jpeg",
      buttonText: "More",
    },
    {
      id: 3,
      title: "Surveillance",
      image: "https://heroui.com/images/card-example-3.jpeg",
      buttonText: "More",
    },
    {
      id: 4,
      title: "CCTV",
      image: "https://heroui.com/images/card-example-1.jpeg",
      buttonText: "More",
    },
    {
      id: 5,
      title: "Automation",
      image: "https://heroui.com/images/card-example-5.jpeg",
      buttonText: "More",
    },
  ]

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
                <CardHeader className="absolute z-10 flex-col items-start gap-[20px] 
                         bg-white/30 backdrop-blur-xs">
                  <h4 className="text-white text-[30px] font-semibold">
                    {item.title}
                  </h4>
                  <Button className="bg-white text-[20px] font-bold" radius="full">
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
  )
}

export default PopularCategories
