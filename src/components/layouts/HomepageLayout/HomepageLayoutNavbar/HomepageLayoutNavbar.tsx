import {
  Badge,
  Button,
  ButtonProps,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import React from "react";
import {
  AUTH_BUTTONS,
  NAV_LINKS,
  USER_ACTION_BUTTONS,
} from "../HomepageLayout.constants";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import useHomepageLayoutNavbar from "./useHomepageLayoutNavbar";
import ModalAuth from "@/components/ui/ModalAuth";
import ShoppingCart from "@/components/ui/ShoppingCart";
import HomepageLayoutNavbarPopupHover from "./HomepageLayoutNavbarPopupHover";

const HomepageLayoutNavbar = () => {
  const {
    openModalAuth,
    handleOpenModalAuth,

    handleOpenModalShoppingCart,
    openModalShoppingCart,
  } = useHomepageLayoutNavbar();

  return (
    <header>
      <Navbar
        maxWidth="full"
        position="static"
        isBordered
        className="bg-primary px-5"
      >
        <div className="max-w-standard w-full mx-auto flex items-center">
          <NavbarContent justify="start">
            <p className="text-white text-[14px] md:text-[18px]">
              Need help? Call us on 1300 843 883
            </p>
          </NavbarContent>

          <NavbarContent justify="end" className="gap-[30px] hidden lg:flex">
            {NAV_LINKS.map((item) => (
              <NavbarItem
                as={Link}
                href={item.href}
                key={`nav-${item.label}`}
                className="text-white hover:text-gray-300 lg:relative text-[14px] md:text-[18px]"
              >
                {item.label}
              </NavbarItem>
            ))}

            {AUTH_BUTTONS.map((item) => (
              <NavbarItem key={`button-${item.label}`}>
                <Button
                  as={Link}
                  className="bg-white text-[14px] md:text-[18px]"
                  href={item.href}
                  radius="full"
                  variant={item.variant as ButtonProps["variant"]}
                >
                  {item.icon} {item.label}
                </Button>
              </NavbarItem>
            ))}
          </NavbarContent>
        </div>
      </Navbar>

      <Navbar
        maxWidth="full"
        isBordered
        position="static"
        className="p-0 md:px-5 md:py-8"
      >
        <div className="max-w-standard w-full mx-auto flex items-center">
          <NavbarBrand as={Link} href="/">
            <Image
              src="/images/general/logo.png"
              alt="logo"
              width={316}
              height={75}
              className="cursor-pointer w-[160px] h-[40px] md:w-[220px] md:h-[55px] lg:w-[280px] lg:h-[65px] xl:w-[316px] xl:h-[75px] max-w-full object-contain"
            />
          </NavbarBrand>

          <NavbarContent
            justify="center"
            className="hidden lg:flex flex-1 min-w-0"
          >
            <NavbarItem className="lg:flex-1 lg:max-w-[700px] min-w-0 lg:relative">
              <Input
                isClearable
                placeholder="What are you looking for?"
                className="w-full min-w-0"
                startContent={
                  <CiSearch className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                }
                classNames={{
                  input: `text-base h-[40px] md:h-[44px] md:text-lg lg:h-[48px] lg:text-xl`,
                  inputWrapper: `h-[40px] md:h-[44px] lg:h-[48px]`,
                }}
              />
            </NavbarItem>
          </NavbarContent>

          <NavbarContent
            justify="end"
            className="gap-[20px] md:gap-[28px] lg:gap-[34px]"
          >
            {USER_ACTION_BUTTONS.map((item) => (
              <NavbarItem key={`button-${item.label}`}>
                {item.isAuthBtn ? (
                  <ModalAuth
                    isOpen={openModalAuth}
                    onOpenChange={handleOpenModalAuth}
                    triggerButton={
                      <Button
                        color="default"
                        variant={item.variant as ButtonProps["variant"]}
                        isIconOnly
                        className="font-medium w-[36px] h-[36px] text-[24px] md:w-[44px] md:h-[44px] md:text-xl lg:w-[48px] lg:h-[48px] lg:text-2xl"
                      >
                        {item.icon}
                      </Button>
                    }
                  />
                ) : (
                  <Badge
                    color="warning"
                    content={50}
                    shape="circle"
                    className="text-white text-sm md:text-sm px-[4px] py-[2px] md:px-[6px] md:py-[3px]"
                  >
                    {item.label === "Cart" ? (
                      <ShoppingCart
                        isOpen={openModalShoppingCart}
                        onOpenChange={handleOpenModalShoppingCart}
                        triggerButton={
                          <Button
                            color="default"
                            variant={item.variant as ButtonProps["variant"]}
                            isIconOnly
                            onPress={() => handleOpenModalShoppingCart(true)} 
                            className="font-medium w-[36px] h-[36px] text-[24px] md:w-[44px] md:h-[44px] md:text-xl lg:w-[48px] lg:h-[48px] lg:text-2xl"
                          >
                            {item.icon}
                          </Button>
                        }
                      />
                    ) : (
                      <Button
                        as={Link}
                        color="default"
                        href={item.href}
                        variant={item.variant as ButtonProps["variant"]}
                        isIconOnly
                        className="font-medium w-[36px] h-[36px] text-[24px] md:w-[44px] md:h-[44px] md:text-xl lg:w-[48px] lg:h-[48px] lg:text-2xl"
                      >
                        {item.icon}
                      </Button>
                    )}
                  </Badge>
                )}
              </NavbarItem>
            ))}
          </NavbarContent>
        </div>
      </Navbar>

      <HomepageLayoutNavbarPopupHover />
    </header>
  );
};

export default HomepageLayoutNavbar;
