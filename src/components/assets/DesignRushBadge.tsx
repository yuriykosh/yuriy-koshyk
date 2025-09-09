const DesignRushBadge = () => {
  return (
    <div className="absolute -top-2 right-0">
      <a
        href="https://www.designrush.com/best-designs/apps/eventpos-app-design"
        className="relative w-fit flex flex-col items-center justify-center px-10 pt-4 pb-4 gap-2 text-white
        group"
      >
        <strong className="text-sm tracking-wide text-center">
          <span className="block">App Design</span>
          <span className="block">Award Winner</span>
          <span className="block medium text-lightGray">2025</span>
        </strong>

        <div className="h-auto w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45 62.77"
            data-crafted="perfectly"
          >
            <g fill="currentColor">
              <path d="M31.93,19.24a7.34,7.34,0,0,1-4.11,6.21,3,3,0,0,1-.62.17A1.78,1.78,0,0,1,25.27,24c0-2.3,4.72-3.52,4.72-8.26,0-3.79-2.9-7.32-3.18-7.72,0,9.45-9.83,10.14-9.83,17.12v.14A5.73,5.73,0,0,0,22.79,31C33.31,31,31.93,19.38,31.93,19.24Z" />
              <path d="M15.9,24.66C15.9,18.26,26,15.12,26,9.13A14.21,14.21,0,0,0,22.53,0s-3.67,4.33-3.67,7,1.62,4.19,1.62,5.59a2.66,2.66,0,0,1-.54,1.72,1.75,1.75,0,0,1-1,.29h-.13c-1.07-.14-2.13-.95-2.13-3.68,0,0-3.71,6.13-3.71,10.22S16.83,29,16.83,29A8.22,8.22,0,0,1,15.9,24.66Z" />
              <polygon points="22.5 34.22 16.18 32.88 22.26 41.47 22.28 41.51 22.5 41.81 22.72 41.51 22.74 41.47 28.82 32.88 22.5 34.22" />
              <path
                d="M45,31h0L38.37,32l-2.52.41a7.26,7.26,0,0,0-5,3.15l-1.6,2.37L23.71,46,22.5,47.8,21.29,46l-5.5-8.1-1.6-2.37a7.26,7.26,0,0,0-5-3.15L6.63,32,0,31H0l22.47,31.7,0,.05,0-.05L45,31Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </div>

        <div className="absolute top-4 left-auto right-auto w-full h-full pointer-events-none z-[-1] text-yellow-600 transition-colors group-hover:text-yellow-700">
          <svg
            viewBox="0 0 180 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full scale-110"
          >
            <path
              d="M93.4177 142.38C91.8596 144.942 88.1404 144.942 86.5823 142.38L4.04255e-06 -1.76625e-06L180 1.39699e-05L93.4177 142.38Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default DesignRushBadge;
