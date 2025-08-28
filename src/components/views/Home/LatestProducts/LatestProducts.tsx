import Container from "@/components/ui/Container";
import CardProduct from "@/components/ui/CardProduct"; 

const LatestProducts = () => {
  const list = [
    {
      title: "Hikvision Wireless Outdoor Sounder DS-PS1-E-WB",
      img: "/images/banners/product.jpg",
      price: "$79.0",
      rating: 4.5,
    },
    {
      title: "CCTV Camera Outdoor",
      img: "/images/banners/product.jpg",
      price: "$120.0",
      rating: 5,
    },
    {
      title: "Smart Lock Pro",
      img: "/images/banners/product.jpg",
      price: "$199.0",
      rating: 4,
    },
    {
      title: "Smart Lock Pro",
      img: "/images/banners/product.jpg",
      price: "$199.0",
      rating: 4,
    },
    {
      title: "Smart Lock Pro",
      img: "/images/banners/product.jpg",
      price: "$199.0",
      rating: 4,
    },
  ];

  return (
    <Container>
      <div className="w-full">
        <h1 className="text-center font-bold pb-8 text-[40px] text-[#0A3353]">
          Latest Products
        </h1>

        <div className="gap-4 grid grid-cols-2 sm:grid-cols-5">
          {list.map((item, index) => (
            <CardProduct
              key={index}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LatestProducts;
