import { LockClosedIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import {
  Button,
  Input,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";

interface PropTypes {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  triggerButton: React.ReactNode;
}

const ModalAuth = ({ isOpen, onOpenChange, triggerButton }: PropTypes) => {
  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="bottom-end"
      backdrop="blur"
      size="lg"
      radius="none"
      className="w-[393px]"
    >
      <PopoverTrigger>{triggerButton}</PopoverTrigger>
      <PopoverContent className="w-full h-full">
        <div className="flex w-full p-5 flex-col gap-10">
          <p className="text-[24px]">Login</p>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <Input
                endContent={
                  <MagnifyingGlassIcon className="w-5 h-5 text-[18px] pointer-events-none" />
                }
                label="Email"
                placeholder="Enter your email"
                labelPlacement="outside"
                variant="bordered"
              />

              <Input
                endContent={
                  <LockClosedIcon className="w-5 h-5 text-gray-400 pointer-events-none" />
                }
                labelPlacement="outside"
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
              />

              <div className="flex justify-between items-center">
                <p className="text-[14px] font medium">
                  <Link href="#" className="text-[#0A3353]">
                    Forgot password?
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                className="bg-[#0A3353] text-white text-[20px] font-bold rounded-full px-[65px] py-[15px]"
                onPress={() => onOpenChange(false)}
              >
                Sign in
              </Button>
            </div>

            <p className="text-center text-[16px] font-medium text-black">
              {"Don't have an account?"}&nbsp;
              <Link href="#" className="text-[#0A3353] font-bold text-[16px]">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ModalAuth;
