import Container from "@/components/ui/Container";
import { Button } from "@heroui/react";

const articles = [
  {
    id: 1,
    description:
      "Artificial Intelligence is transforming industries and shaping the way we live, work, and interact.",
    buttonText: "Read More",
  },
  {
    id: 2,
    description:
      "AI is transforming industries worldwide. Explore how it's shaping innovation, jobs, and everyday life.",
    buttonText: "Read More",
  },
];

const ArticleSection = () => {
  return (
    <Container>
      <div className="md:gap-10 gap-4 grid grid-cols-1 sm:grid-cols-2 w-full">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col md:p-20 p-5 gap-[100px] bg-[#D9D9D9] rounded-lg"
          >
            <h1 className="text-[26px] font-semibold mb-3 text-[#0A3353]">
              {article.description}
            </h1>
            <Button
              className="bg-white py-[15px] px-[10px] w-[150px] font-bold text-[#0A3353] text-[20px]"
              radius="full"
            >
              {article.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ArticleSection;
