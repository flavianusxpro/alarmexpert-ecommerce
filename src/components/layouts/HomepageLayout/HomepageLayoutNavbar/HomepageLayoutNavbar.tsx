import { Badge, Button, ButtonProps, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import React from "react";
import { AUTH_BUTTONS, NAV_CATEGORIES, NAV_LINKS, USER_ACTION_BUTTONS } from "../HomepageLayout.constants";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const HomepageLayoutNavbar = () => {

  return (
    <header>
      <Navbar maxWidth="full" position="static" isBordered className="bg-[#0A3353] px-5">
        <NavbarContent justify="start">
          <p className="text-white text-[14px] md:text-[18px]">Need help? Call us on 1300 843 883</p>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-[30px]">
          {NAV_LINKS.map((item) => (
            <NavbarItem
              as={Link}
              href={item.href}
              key={`nav-${item.label}`}
              className="text-white hover:text-gray-300 hidden lg:flex lg:relative text-[14px] md:text-[18px]"
            >
              {item.label}
            </NavbarItem>
          ))}

          {AUTH_BUTTONS.map((item) => (
            <NavbarItem
              key={`button-${item.label}`}
            >
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
      </Navbar>

      <Navbar maxWidth="full" isBordered position="static" className="px-5 py-8">
        <NavbarBrand as={Link} href="/">
          <Image
            src="/images/general/logo.png"
            alt="logo"
            width={316}
            height={75}
            className="cursor-pointer"
          />
        </NavbarBrand>

        <NavbarContent justify="center">
          <NavbarItem className="hidden lg:flex lg:relative">
            <Input
              isClearable
              className="w-[600px]"
              placeholder="What are you looking for?"
              startContent={<CiSearch />}
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-[37px]">
          {USER_ACTION_BUTTONS.map((item) => (
            <NavbarItem key={`button-${item.label}`}>
              <Badge color="warning" content={50} shape="circle" className="text-white">
                <Button
                  as={Link}
                  color="default"
                  href={item.href}
                  variant={item.variant as ButtonProps["variant"]}
                  isIconOnly
                  className="font-medium text-2xl"
                >
                  {item.icon}
                </Button>
              </Badge>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>

      <div className="bg-[#D9D9D9]/15 justify-center md:justify-around flex flex-wrap px-10">
        {NAV_CATEGORIES.map((item) => (
          <div
            key={item.label}
            className="flex items-center hover:bg-[#0A3353] hover:text-white p-5"
          >
            <Link
              href={item.href}
              className="font-medium text-center"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>

    </header>
  );
};

export default HomepageLayoutNavbar;
