import { Card, CardBody, CardFooter, CardHeader, Image } from "@heroui/react";
import { FaGlobe, FaStar, FaStore, FaTruck } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

interface PropTypes {
    title: string;
    img: string;
    price: string;
    rating: number;
    onSale?: boolean
}

const CardProduct = ({ title, img, price, rating, onSale }: PropTypes) => {
    return (
        <Card shadow="sm" className="flex flex-col justify-between" isHoverable>
            {onSale && (
                <CardHeader className="absolute p-1 flex z-10 bg-[#E62727]/60 backdrop-blur-xl justify-center">
                    <p className="text-white font-bold text-[18px]">
                        ON SALE
                    </p>
                </CardHeader>
            )}

            <CardBody className="overflow-visible p-0">
                <Image
                    alt={title}
                    className="z-0 w-full object-cover h-[200px]"
                    radius="lg"
                    shadow="none"
                    src={img}
                    width="100%"
                />
            </CardBody>

            <CardFooter className="flex flex-col items-start gap-2">
                <p className="text-black text-[22px] font-semibold">{title}</p>
                <p className="text-[#0A3353] font-semibold text-[35px]">{price}</p>

                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                                key={i}
                                size={16}
                                fill={i < Math.floor(rating) ? "currentColor" : "none"}
                                stroke="currentColor"
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                        <FaGlobe size={16} />
                        <FaStore size={16} />
                        <FaBagShopping size={16} />
                        <FaTruck size={16} />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default CardProduct;
