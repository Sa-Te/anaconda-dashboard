import React from "react";
import Download from "./Download";

const DownloadSection: React.FC = () => {
  return (
    <div className="bg-[#DEF3ED] border-2 p-2 border-[#8EBCAF]">
      <div className=" p-2 ">
        <table className="w-full table-fixed border-collapse">
          <tbody>
            <tr className="border-2 border-[#8EBCAF]">
              <td className="sm:w-1/7 md:w-1/4 lg:w-1/4 px-5 font-bold text-black ">
                Cookies
              </td>
              <td className="border-x-2 border-[#8EBCAF] p-2 flex flex-wrap">
                <Download text="Google Chrome (100.00kb)" />
                <Download text="Firefox (100.00kb)" />
                <Download text="Microsoft Edge (100.00kb)" />
              </td>
            </tr>
            <tr className="border-2 border-[#8EBCAF]">
              <td className=" sm:w-1/7 md:w-1/4 lg:w-1/4 px-5 font-bold text-black ">
                Credentials
              </td>
              <td className="border-x-2 border-[#8EBCAF] p-2 flex-wrap flex">
                <Download text="Google Chrome" />
                <Download text="Firefox" />
                <Download text="Microsoft Edge" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DownloadSection;
