import Container from "@/components/ui/Container";
import { Button, Input } from "@heroui/react";

const EmailSubscription = () => {
  return (
    <Container className="justify-center align-middle p-0 py-8 px-8 md:py-20">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[22px] justify-center align-middle">
          <h1 className="text-center font-bold text-[50px] text-primary">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-primary text-[30px] text-center font-medium">
            Subscribe to our newsletter & get <br /> notification about
            discounts.
          </p>
        </div>

        <div className="flex gap-[16px]">
          <Input
            placeholder="Enter your email address"
            type="email"
            className="rounded-[500px]"
          />
          <Button className="bg-primary text-[18px] font-semibold text-white px-[43px] py-[17px]">
            Subscribe
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default EmailSubscription;
