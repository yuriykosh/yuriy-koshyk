import MdiLanguageCss3 from "@/components/assets/icons/MdiCSS3";
import MdiLanguageHtml5 from "@/components/assets/icons/MdiHtml5";
import MdiLanguageJavascript from "@/components/assets/icons/MdiLanguageJavascript";
import MdiLanguagePhp from "@/components/assets/icons/MdiPHP";
import MdiSass from "@/components/assets/icons/MdiSass";
import MdiWebpack from "@/components/assets/icons/MdiWebpack";
import MdiWordpress from "@/components/assets/icons/MdiWordpress";

const DevTech = () => {
  return (
    <ul className="flex justify-around text-[#9A2B1C]">
      <li className="w-10 h-10 sm:w-16 sm:h-16">
        <MdiLanguageHtml5 />
      </li>
      <li className="w-10 h-10 sm:w-16 sm:h-16">
        <MdiLanguageCss3 />
      </li>
      <li className="w-10 h-10 sm:w-16 sm:h-16">
        <MdiSass />
      </li>
      <li className="w-10 h-10 sm:w-16 sm:h-16">
        <MdiLanguageJavascript />
      </li>
      <li className="w-10 h-10 sm:w-16 sm:h-16">
        <MdiLanguagePhp />
      </li>
      <li className="w-10 h-10 sm:w-16 sm:h-16">
        <MdiWebpack />
      </li>
      <li className="w-10 h-10 sm:w-16 sm:h-16">
        <MdiWordpress />
      </li>
    </ul>
  );
};
export default DevTech;
