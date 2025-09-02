import Link from "next/link";
import { NAV_CATEGORIES } from "../../HomepageLayout.constants";
import { POPUP_CONTENT } from "./HomepageLayoutPopupHover.constants";
import useHomepageLayoutPopupHover from "./useHomepageLayoutPopupHover";

const HomepageLayoutNavbarPopupHover = () => {
  const {
    hoveredCategory,
    handleDelayedMouseEnter,
    handleDelayedMouseLeave,
    renderPopupContent,
  } = useHomepageLayoutPopupHover();

  return (
    <div className="relative" onMouseLeave={handleDelayedMouseLeave}>
      <div className="bg-muted/15 px-10 flex flex-wrap justify-center md:justify-around">
        <div className="max-w-standard w-full mx-auto justify-center sm:justify-center md:justify-between flex flex-wrap items-center">
          {NAV_CATEGORIES.map((item) => (
            <div
              key={item.label}
              className="flex items-center hover:text-yellow-600 py-3 px-4 md:py-4 md:px-5 transition-colors duration-200"
            >
              <Link
                href={item.href}
                className="font-medium text-center text-sm md:text-base"
                onMouseEnter={() => handleDelayedMouseEnter(item.label)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {hoveredCategory && POPUP_CONTENT[hoveredCategory] && (
        <div className="hidden lg:block absolute top-full w-full z-50 px-10">
          <div className="max-w-standard mx-auto shadow-md bg-white rounded-br-[10px] rounded-bl-[10px]">
            {renderPopupContent(hoveredCategory)}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomepageLayoutNavbarPopupHover;
