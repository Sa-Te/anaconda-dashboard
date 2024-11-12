import React from "react";
import {
  cardsNcookiesContent,
  browsersContent,
  websitesContent,
} from "../constants";

const Logs: React.FC = () => {
  return (
    <div id="logs__main__container" className="flex sm: p-1 md:p-5 gap-10 ">
      {/* Left section */}
      <div id="logs__left" className="flex flex-col gap-[2rem]">
        <div id="cardsNcookies__section" className="flex gap-10">
          {cardsNcookiesContent.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <img
                src={item.icon}
                alt={`${item.id} Icon`}
                className="sm:w-20 md:w-full"
              />
              <span className="text-textLight font-bold font-MontserratBold">
                {item.quantity}
              </span>
            </div>
          ))}
        </div>
        <h2 className="text-black text-xl font-bold font-MontserratBold">
          devicename.txt
        </h2>

        {/* Websites Section */}
        <div id="websites__section" className="flex gap-5 flex-wrap">
          {websitesContent.map((website, i) => (
            <div key={i} className="flex items-center gap-2">
              <img
                src={website.icon}
                alt={`${website.id} Icon`}
                className="w-8 h-8"
              />
              <a
                href={`https://${website.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textLight  font-ProximaNovaRegular"
              >
                {website.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Right section */}
      <div id="logs__right" className="flex flex-col gap-[2rem]">
        {browsersContent.map((browser, i) => (
          <div key={i} className="flex items-center gap-3">
            <img
              src={browser.icon}
              alt={`${browser.id} Icon`}
              className="sm:w-20 md:w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logs;
