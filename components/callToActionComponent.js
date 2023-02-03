export default function CallToActionComponent() {
  return (
    <div id="community">
      <div className="mx-auto max-w-7xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <div className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block">JOIN OUR COMMUNITY </span>
          </div>
        </div>
        <p className="mt-4 text-lg leading-6 text-gray-200">
          Learn more about the Knights Task Force, Engage the community, and get
          the most up to date information by joining our discord today!
        </p>
        <a
          href="https://discord.gg/knightsbyironhills"
          target="_blank"
          rel="noreferrer"
          className="flex w-56 mt-12 mb-24 mx-auto items-center rounded-sm justify-center  border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
        >
          DISCORD
        </a>
      </div>
    </div>
  );
}
