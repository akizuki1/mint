import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../assets/img/Iron_Hills_Title.png";
import logoIco from "../assets/img/iron_ico.png";
import Link from "next/link";
import ConnectWalletComponent from "./connectWalletComponent";

export default function NavBarComponent(props) {
  return (
    <Disclosure as="nav" className=" z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6  lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="logo iron hills"
                  />
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src={logoIco}
                    alt="logo iron hills"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="#about"
                      className=" px-3 py-2 text-sm font-medium rounded-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                    >
                      ABOUT
                    </a>
                    <a
                      href="#roadmap"
                      className=" px-3 py-2 text-sm font-medium rounded-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                    >
                      ROADMAP
                    </a>
                    <a
                      href="#team"
                      className=" px-3 py-2 text-sm font-medium rounded-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                    >
                      TEAM
                    </a>
                    <a
                      href="#faq"
                      className=" px-3 py-2 text-sm font-medium rounded-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                    >
                      FAQ
                    </a>
                    <a
                      href="#community"
                      className=" px-3 py-2 text-sm font-medium rounded-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                    >
                      COMMUNITY
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center gap-3">
                  <Link
                    href="https://discord.gg/invictusorder"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#626067] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#e2e4e6"
                        d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                      />
                    </svg>{" "}
                  </Link>
                  <Link
                    href="https://twitter.com/invictusorder"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#626067] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#e2e4e6"
                        d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101a4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732a11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9c0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://opensea.io/collection/invictusorder"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#626067] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#e2e4e6"
                        d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12s12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081l3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528c-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199a.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962c-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132c-.026.226.017.459.125.67c.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992c.156-.274.308-.566.43-.86c.024-.052.043-.107.065-.16c.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787c0-.108-.004-.221-.014-.327c-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312a6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972a5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197a4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05l.192.054l.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202a.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017c.034.024.084.062.147.11c.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691c.065.074.127.146.192.226c.062.079.132.156.19.232c.079.104.16.212.235.324c.033.053.074.108.105.161c.096.142.178.288.257.435c.034.067.067.141.096.213c.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254c-.075.17-.161.343-.264.502c-.034.06-.075.122-.113.182c-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209c-.081.098-.16.19-.245.278c-.048.058-.1.118-.156.17c-.052.06-.108.113-.156.161c-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298c.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center  p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="#about"
                className="block  px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
              >
                ABOUT
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block  px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
              >
                ROADMAP
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block  px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
              >
                TEAM
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block  px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
              >
                FAQ
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block  px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
              >
                Community
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="mt-3 space-y-1 px-2">
                <Link
                  href="https://discord.gg/invictusorder"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#626067] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#e2e4e6"
                      d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                    />
                  </svg>{" "}
                </Link>
                <Link
                  href="https://twitter.com/invictusorder"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#626067] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#e2e4e6"
                      d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101a4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732a11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9c0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                    />
                  </svg>
                </Link>
              </div>
              <ConnectWalletComponent
                nav={true}
                authenticating={props.authenticating}
                authenticated={props.authenticated}
                getUserData={props.getUserData}
                connecting={props.connecting}
                ethersProvider={props.ethersProvider}
                applicationStatus={props.applicationStatus}
                authAccount={props.authAccount}
                connect={props.connect}
                disconnect={props.disconnect}
                wallet={props.wallet}
                userData={props.userData}
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
