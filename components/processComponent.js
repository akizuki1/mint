import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  CheckIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import parse from 'html-react-parser';

export default function ProcessComponent() {
  const steps = [
    {
      id: "01",
      name: "Within the next year",
      description: "<ul className='list-none'><li><span >Knights NFT</span></li><li><span >The Altar</span></li><li><span >Knights Essence NFT</span></li><li><span >Knights Blessing NFT</span></li></ul>",
      href: "#",
      status: "upcoming",
    },
    {
      id: "02",
      name: "Down the road",
      description: "<ul className='list-none'><li><span >Trait swapping</span></li><li><span >Wallet security tools</span></li><li><span ><li><span >Wallet security tools</span></li></span></li></ul>",
      href: "#",
      status: "upcoming",
    },
    {
      id: "03",
      name: "Pie in the sky",
      description: "<ul className='list-none'><li><span >Development of Spiral Knights</span></li><li><span >Explore the intersection of blockchain technology and video games</span></li></ul>",
      href: "#",
      status: "upcoming",
    },
  ];


  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div id="roadmap" className="bg-[#100d0a]  lg:overflow-hidden  lg:pb-14">



      <div className="mx-auto max-w-7xl px-4">
    
            <div className="lg:py-12">
              
              <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">ROADMAP</span>
              </h1>
            </div>
          
        <nav aria-label="Progress">
          <ol role="list" className="     md:flex  bg-orange-900/20">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="relative md:flex md:flex-1">
                {step.status === "complete" ? (
                  <a
                    href={step.href}
                    className="group flex w-full items-center"
                  >
                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                        <CheckIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-900">
                        {step.name}
                      </span>
                    </span>
                  </a>
                ) : step.status === "current" ? (
                  <a
                    href={step.href}
                    className="flex items-center px-6 py-4 text-sm font-medium"
                    aria-current="step"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                      <span className="text-indigo-600">{step.id}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-indigo-600">
                      {step.name}
                    </span>
                  </a>
                ) : (
                  <a href={step.href} className="group flex items-center">
                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                        <span className="text-white group-hover:text-gray-900">
                          {step.id}
                        </span>
                      </span>
                  
                  
                        <div className="flex-1 ml-4">
          <div className="mt-2 block">
            <p className="text-sm font-medium text-white text-white">{step.name}</p>
            <p className="mt-3 sm:text-md text-gray-500">{parse(step.description)}</p>
          </div>
        </div>

                    
                    </span>
                  </a>
                )}

                {stepIdx !== steps.length - 1 ? (
                  <>
                    {/* Arrow separator for lg screens and up */}
                    <div
                      className="absolute top-0 right-0 hidden h-full w-5 md:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 22 80"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 -2L20 40L0 82"
                          vectorEffect="non-scaling-stroke"
                          stroke="currentcolor"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
