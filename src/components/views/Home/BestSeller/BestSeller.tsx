import CardProduct from "@/components/ui/CardProduct";
import Container from "@/components/ui/Container";

const BestSeller = () => {
  const bestSeller = [
    {
      title: "Hikvision Wireless Outdoor Sounder DS-PS1-E-WB",
      img: "/images/banners/product-1.jpg",
      price: "$79.0",
      rating: 4.5,
      onSale: true,
    },
    {
      title: "CCTV Camera Outdoor",
      img: "/images/banners/product-5.jpg",
      price: "$120.0",
      rating: 5,
      onSale: false,
    },
    {
      title: "Smart Lock Pro",
      img: "/images/banners/product-2.jpg",
      price: "$199.0",
      rating: 4,
      onSale: true,
    },
    {
      title: "Smart Lock Pro",
      img: "/images/banners/product-4.jpg",
      price: "$199.0",
      rating: 4,
      onSale: false,
    },
    {
      title: "Smart Lock Pro",
      img: "/images/banners/product-3.jpg",
      price: "$199.0",
      rating: 4,
      onSale: false,
    },
  ];
  return (
    <Container>
      <div className="w-full">
        <h1 className="text-center font-bold pb-8 text-[40px] text-[#0A3353]">
          Best Seller Products
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {bestSeller.map((item, index) => (
            <CardProduct
              key={index}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
              onSale={item.onSale}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BestSeller;
