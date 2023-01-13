import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChevronRightIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import heroImg from '../assets/img/hero_img.svg'
import heroBack from '../assets/img/clockworks.png'

export default function HeroComponent() {


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <main className="lg:relative bg-black min-h-[600px]">


      <div className="absolute inset-0">

        <Image
          className="h-full w-full object-fill"
          src={heroBack}
          alt="back iron hills"
        />
        <div className="absolute inset-0 bg-neutral-900/30 mix-blend-multiply" />
      </div>
      <div className="relative pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">

        <div className="mx-auto max-w-7xl px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md  sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">

                <h1 className="mt-4 uppercase text-2xl font-bold tracking-tight text-white sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl">
                  <span className="block text-gray-500">Hail Fellow Knights</span>
                  <span className="block text-white">We want YOU to enlist in the Knights Task Force!</span>
                </h1>

                <div className="mt-10 sm:mt-12">
                  <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div className="">
                      <a
                        href="#"
                        className="flex w-full items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                      >
                        ENLIST NOW
                      </a>
                    </div>


                  </div>
                
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md  sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <Image
                  className="absolute inset-0 h-full w-full object-fit"
                  src={heroImg}
                  alt="Picture of the author"

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
