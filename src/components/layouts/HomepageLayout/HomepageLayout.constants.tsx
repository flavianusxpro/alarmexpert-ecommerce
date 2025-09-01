import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbArrowRightToArc } from "react-icons/tb";

const NAV_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Compare", href: "/compare" },
];

const NAV_CATEGORIES = [
  { label: "ACCESS CONTROL", href: "/access-control" },
  { label: "ALARM", href: "/alarm" },
  { label: "AUTOMATION", href: "/automation" },
  { label: "CCTV", href: "/cctv" },
  { label: "INTERCOM", href: "/intercom" },
  { label: "LOCKS", href: "/locks" },
  { label: "NETWORKING", href: "/networking" },
  { label: "ACCESSORIES", href: "/accessories" },
  { label: "INSTALLATION SERVICE", href: "/installation-service" },
  { label: "BRANDS", href: "/brands" },
  { label: "ON SALE", href: "/on-sale" },
];

const AUTH_BUTTONS = [
  {
    label: "Login",
    href: "/auth/login",
    variant: "solid",
    icon: <TbArrowRightToArc />,
  },
];

const USER_ACTION_BUTTONS = [
  {
    label: "Wishlist",
    href: "/product/wishlist",
    variant: "light",
    isAuthBtn: false,
    icon: <FaRegHeart />,
  },
  {
    label: "Cart",
    href: "/cart",
    variant: "light",
    isAuthBtn: false,
    icon: <MdOutlineShoppingCart />,
  },
  {
    label: "Account",
    href: "/user",
    variant: "light",
    isAuthBtn: true,
    icon: <FaRegUser />,
  },
];

export { AUTH_BUTTONS, NAV_LINKS, USER_ACTION_BUTTONS, NAV_CATEGORIES };
