import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
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
import heroImg from '../../assets/img/hero_img.svg'

export default function HeroComponent() {

    
const features = [
    {
      name: 'Analytics',
      href: '#',
      description: 'Get a better understanding of where your traffic is coming from.',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      href: '#',
      description: 'Speak directly to your customers in a more meaningful way.',
      icon: CursorArrowRaysIcon,
    },
    { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
    {
      name: 'Integrations',
      href: '#',
      description: "Connect with third-party tools that you're already using.",
      icon: Squares2X2Icon,
    },
    {
      name: 'Automations',
      href: '#',
      description: 'Build strategic funnels that will drive your customers to convert',
      icon: ArrowPathIcon,
    },
  ]
  const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ]
  const resources = [
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
      icon: LifebuoyIcon,
    },
    {
      name: 'Guides',
      description: 'Learn how to maximize our platform to get the most out of it.',
      href: '#',
      icon: BookmarkSquareIcon,
    },
    {
      name: 'Events',
      description: 'See what meet-ups and other events we might be planning near you.',
      href: '#',
      icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
  ]
  const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <main className="lg:relative bg-black">
    <div className="mx-auto w-full max-w-7xl pt-16 pb-20  lg:py-48 lg:text-left">
      <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl mb- ">
          <span className="block xl:inline">DISCOVER & COLLECT NFT ARTWORK</span>
        </h1>
        <p className="mx-auto mt-12 max-w-md text-lg font-semibold text-white sm:text-xl md:mt-5 md:max-w-3xl">
         176/180 MINTED
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="">
            <a
              href="#"
              className="flex w-full items-center justify-center  border-solid border-2 border-blue-700 bg-blue-700 px-8 py-3 text-base font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 md:text-lg"
            >
              MINT NOW
            </a>
          </div>
          <div className="  sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="flex w-full items-center justify-center  border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-700 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
            >
              JOIN THE WAITLIST
            </a>
          </div>
        </div>
        <p className="mt-8 text-base font-bold tracking-tight ">
              <span className="text-white">Max 3 NFTs Per Wallet. PRICE</span>{' '}
              <span className="text-blue-700"> 0.02</span>
              <span className="text-white"> ETH</span>
            </p>
            <p className="text-base font-bold tracking-tight ">
              <span className="text-white">Mint is Live Until</span>{' '}
              <span className="text-blue-700"> 22 July</span>
            </p>

      </div>
    </div>
    <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
    <Image
    className="absolute inset-0 h-full w-full object-fit"
      src={heroImg}
      alt="Picture of the author"
     
    />
    </div>
  </main>
  )
}
