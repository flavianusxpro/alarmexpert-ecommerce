import "swiper/css"
import "swiper/css/pagination"

import { IBanner } from '@/types/Banner'
import { Skeleton } from '@heroui/react'
import Image from 'next/image'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"

interface PropTypes {
    banners: IBanner[],
    isLoadingBanners: boolean
}

const HomeSlider = (props: PropTypes) => {
    const { banners, isLoadingBanners } = props
    return (
        <div
            className='h-[319px] md:h-[638px] bg-amber-400'
        >
            {!isLoadingBanners ? (
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    spaceBetween={30}
                    loop
                    modules={[Autoplay, Pagination]}
                    className='h-full w-full'
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {banners?.map((banner: IBanner) => (
                        <SwiperSlide
                            key={banner._id}
                        >
                            <Image
                                src={`${banner.image}`}
                                alt={`${banner.title}`}
                                className='h-full w-full object-cover'
                                width={1920}
                                height={800}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Skeleton
                    className='h-[90%] w-full'
                />
            )}
        </div>
    )
}

export default HomeSlider