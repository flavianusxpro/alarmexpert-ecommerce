import { CiMap } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { LuMail, LuPhone } from "react-icons/lu";

const FOOTER_INFO = {
  logo: {
    src: "/images/general/logo.png",
    alt: "logo",
    width: 316,
    height: 75,
  },
  contacts: [
    {
      icon: <LuPhone />,
      text: "1300 843 883",
    },
    {
      icon: <LuMail />,
      text: "admin@alarmexpert.com.au",
    },
    {
      icon: <CiMap />,
      text: "Church Avenue, Mascot, NSW, 2020",
    },
  ],
  socials: [
    {
      icon: <FaFacebookF />,
      href: "#",
    },
    {
      icon: <FaTwitter />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
  ],
};

const FOOTER_MENUS = [
  {
    title: "Pages",
    items: ["FAQ", "Blog", "Contact", "Product", "My Account"],
  },
  {
    title: "Our Products",
    items: [
      "Access Control",
      "Alarm",
      "Automation",
      "CCTV",
      "Intercom",
      "Locks",
      "Networking",
      "Accessories",
      "Installation Service",
      "Brands",
      "On Sale",
    ],
  },
  {
    title: "Customer Service",
    items: [
      "Terms & Conditions",
      "Returns Policy",
      "Shipping Policy",
      "Privacy Policy",
      "Price Match Guarantee",
      "Warranty Policy",
    ],
  },
  {
    title: "Tags",
    tags: [
      "Suitable for Commercial",
      "Suitable for House of Apartment",
    ],
  },
];


export { FOOTER_INFO, FOOTER_MENUS }