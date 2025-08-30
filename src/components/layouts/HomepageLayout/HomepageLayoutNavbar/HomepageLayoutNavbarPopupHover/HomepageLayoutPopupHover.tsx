import Link from "next/link";
import { NAV_CATEGORIES } from "../../HomepageLayout.constants";

const HomepageLayoutNavbarPopupHover = () => {
  return (
    <>
      <div className="bg-[#D9D9D9]/15 px-10 flex flex-wrap justify-center md:justify-around md:px-10">
        <div className="max-w-standard w-full mx-auto justify-center sm:justify-center md:justify-between flex flex-wrap items-center">
          {NAV_CATEGORIES.map((item) => (
            <div
              key={item.label}
              className="flex items-center hover:bg-[#0A3353] hover:text-white py-3 px-4 md:py-4 md:px-5"
            >
              <Link
                href={item.href}
                className="font-medium text-center text-sm md:text-base"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomepageLayoutNavbarPopupHover;
