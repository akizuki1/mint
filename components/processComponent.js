export default function ProcessComponent() {
  return (
    <div id="roadmap" className="  lg:overflow-hidden bg-[#100d0a] lg:pb-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="pt-24 flex">
          <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block">ROAD MAP</span>
          </h1>
        </div>

        <nav aria-label="Progress">
          <div className="relative mx-auto max-w-7xl ">
            <div className="mx-auto mt-12 grid max-w-xl gap-5 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-1 flex-col justify-between bg-orange-900/20 p-6">
                  <div className="flex-1">
                    <div className="mt-2 block">
                      <p className="text-2xl font-semibold text-white">
                        Establish the Foundation
                      </p>
                      <p className="mt-3 sm:text-lg text-gray-200">
                        <ul className="list-none">
                          <li>
                            <span>Knights</span>
                          </li>
                          <li>
                            <span>The Altar</span>
                          </li>
                          <li>
                            <span>Knights’ Essences</span>
                          </li>
                          <li>
                            <span>Knights’ Blessings</span>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-1 flex-col justify-between bg-orange-900/20 p-6">
                  <div className="flex-1">
                    <div className="mt-2 block">
                      <p className="text-2xl font-semibold text-white">
                        Develop, Educate, and Empower
                      </p>
                      <p className="mt-3 sm:text-lg text-gray-200">
                        <ul className="list-none">
                          <li>
                            <span>Trait based utility</span>
                          </li>
                          <li>
                            <span>Wallet security tools</span>
                          </li>
                          <li>
                            <span>Dynamic royalties</span>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-1 flex-col justify-between bg-orange-900/20 p-6">
                  <div className="flex-1">
                    <div className="mt-2 block">
                      <p className="text-2xl font-semibold text-white">
                        Charge Into the Unknown
                      </p>
                      <p className="mt-3 sm:text-lg text-gray-200">
                        <ul className="list-none">
                          <li>
                            <span>
                              Explore the intersection of blockchain technology
                              and video games
                            </span>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
