export default function CallToActionComponent() {
  return (
    <div id="community">
      <div className="mx-auto max-w-7xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <div className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block">JOIN THE INVICTUS ORDER</span>
          </div>
        </div>
        <p className="mt-4 text-lg leading-6 text-gray-200">
          Learn more about the Sector Task Force, connect with your fellow
          Alterians, and stay up to date with all things Invictus Order by
          joining our Discord server and following us on Twitter.
        </p>
        <div className="flex">
          <a
            href="https://discord.gg/invictusorder"
            target="_blank"
            rel="noreferrer"
            className="flex w-56 mt-12 mb-24 mx-auto items-center rounded-sm justify-center  border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
          >
            DISCORD
          </a>
          <a
            href="https://twitter.com/invictusorder"
            target="_blank"
            rel="noreferrer"
            className="flex w-56 mt-12 mb-24 mx-auto items-center rounded-sm justify-center  border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
          >
            TWITTER
          </a>
          <a
            href="https://www.twitch.tv/invictusorder"
            target="_blank"
            rel="noreferrer"
            className="flex w-56 mt-12 mb-24 mx-auto items-center rounded-sm justify-center  border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
          >
            TWITCH
          </a>
          <a
            href="https://www.youtube.com/@invictusorder"
            target="_blank"
            rel="noreferrer"
            className="flex w-56 mt-12 mb-24 mx-auto items-center rounded-sm justify-center  border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
          >
            YOUTUBE
          </a>
        </div>
      </div>
    </div>
  );
}
