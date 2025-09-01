import { useRef, useState } from "react";
import { BrandItem, POPUP_CONTENT } from "./HomepageLayoutPopupHover.constants";
import Link from "next/link";

const useHomepageLayoutPopupHover = () => {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleDelayedMouseEnter = (label: string) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }

        hoverTimeoutRef.current = setTimeout(() => {
            handleMouseEnter(label);
        }, 150);
    };

    const handleDelayedMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        handleMouseLeave();
    };

    const handleMouseEnter = (category: string): void => {
        setHoveredCategory(category);
    };

    const handleMouseLeave = (): void => {
        setHoveredCategory(null);
    };

    const renderPopupContent = (category: string) => {
        const content = POPUP_CONTENT[category];
        if (!content) return null;
        return (
            <div className="p-6 flex flex-wrap justify-center gap-[50px]">
                {content.brands?.map((brand: BrandItem, index: number) => (
                    <div
                        key={index}
                    >
                        <h1 className="font-semibold text-[20px] uppercase pb-2">
                            {brand.name}
                        </h1>

                        <ul className="space-y-1">
                            {brand.items.map((item: string, itemIndex: number) => (
                                <li
                                    
                                    key={itemIndex}
                                >
                                    <Link
                                        href='#'
                                        className="text-[14px] font-medium"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    return {
        hoveredCategory,
        setHoveredCategory,

        handleDelayedMouseEnter,
        handleDelayedMouseLeave,
        renderPopupContent,
    };
};

export default useHomepageLayoutPopupHover;
