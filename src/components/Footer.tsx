import ScrollUp from "./assets/ScrollUp";
import Divider from "./assets/Divider";

const Footer = () => {
  return (
    <div
      className="relative h-[80vh] sm:h-[65vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+80vh)] sm:h-[calc(100vh+65vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-80vh)] h-[80vh] sm:top-[calc(100vh-65vh)] sm:h-[65vh]">
          <footer className="bg-bg-tertiary py-8 px-6 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <ScrollUp className=" flex justify-center text-sm font-semibold text-bg-primary" />
              <Divider className="bg-sep-tertiary" />
            </div>

            <div className="max-w-lg flex flex-col items-center gap-6 text-3xl text-bg-primary text-center mx-auto">
              <svg
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[1ch] w-auto"
              >
                <path
                  d="M4.2344 8.64358C6.36858 8.64358 8.09868 6.89272 8.09868 4.73292C8.09868 2.57313 6.36858 0.822266 4.2344 0.822266C2.10021 0.822266 0.370117 2.57313 0.370117 4.73292C0.370117 6.89272 2.10021 8.64358 4.2344 8.64358Z"
                  fill="#fff8ef"
                />
                <path
                  d="M8.09868 16.4639V8.64258L0.370117 16.4639H8.09868Z"
                  fill="#fff8ef"
                />
              </svg>
              <p>
                I believe that to aim for excellence in the face of great
                opportunities and challenges, is the mark of a designer.
              </p>
            </div>

            <ul className="text-center sm:text-left sm:grid grid-cols-3 items-baseline text-sm font-semibold text-fg-secondary">
              <li>Made with love by</li>
              <li className="justify-self-center">Yuriy Koshyk</li>
              <li className="justify-self-end">Copyright ©2024</li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Footer;