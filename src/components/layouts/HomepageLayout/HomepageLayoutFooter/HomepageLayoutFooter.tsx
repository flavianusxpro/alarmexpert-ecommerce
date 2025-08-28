import Image from "next/image";
import { FOOTER_INFO, FOOTER_MENUS } from "./HomepageLayoutFooter.constants";

const HomepageLayoutFooter = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="flex flex-col md:flex-row p-8 gap-[100px]">
        <div className="flex flex-col gap-[32px] lg:col-span-1">
          <div className="flex items-center">
            <Image
              src={FOOTER_INFO.logo.src}
              alt={FOOTER_INFO.logo.alt}
              width={FOOTER_INFO.logo.width}
              height={FOOTER_INFO.logo.height}
            />
          </div>

          <div className="text-[18px] flex flex-col gap-[10px]">
            {FOOTER_INFO.contacts.map((contact, i) => (
              <div key={i} className="flex items-start gap-[12px]">
                <span className="w-[23px] h-[23px] flex items-center justify-center">
                  {contact.icon}
                </span>
                <span>{contact.text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-[8px]">
            {FOOTER_INFO.socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <span className="w-[24px] h-[24px] flex items-center justify-center">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-1 gap-[73px]">
          {FOOTER_MENUS.map((menu, idx) => (
            <div key={idx} className="flex flex-1 flex-col gap-[35px]">
              <h4 className="text-[23px] font-semibold text-black">{menu.title}</h4>

              {menu.items && (
                <div className="flex gap-[73px]">
                  <ul className="flex flex-col gap-[15px] text-black text-[18px] font-medium">
                    {menu.items.slice(0, 6).map((item, i) => (
                      <li key={i}>
                        <a href="#" className="hover:text-blue-600 transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {menu.items.length > 6 && (
                    <ul className="flex flex-col gap-[15px] text-black text-[18px] font-medium">
                      {menu.items.slice(6).map((item, i) => (
                        <li key={i}>
                          <a href="#" className="hover:text-blue-600 transition-colors">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {menu.tags && (
                <div className="flex flex-col gap-[15px]">
                  {menu.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[14px] p-[10px] font-medium text-[#0A3353] bg-[#3666AA]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 bg-[#0A3353]">
        <div className="flex justify-between items-center">
          <div className="text-[16px] font-medium text-[#FFFFFF]">
            Copyright Alarm Expert T/AS Xprogroup Pty Ltd
          </div>

          <div className="flex items-center">
            <div className="text-[16px] text-[#FFFFFF] font-medium">
              Any illegal reproduction of this content will result in immediate legal action.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomepageLayoutFooter;