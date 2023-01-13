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
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import p1 from '../assets/img/product1.svg'
import p2 from '../assets/img/product2.svg'
import p3 from '../assets/img/product3.svg'
import p4 from '../assets/img/product4.svg'
import p5 from '../assets/img/product5.svg'
import p6 from '../assets/img/product6.svg'
import p7 from '../assets/img/product7.png'
import p8 from '../assets/img/product8.png'
export default function AboutComponent() {


  const posts = [


    {
      title: 'Dynamic Art',
      href: '#',
      category: { name: '01.', href: '#' },
      description:
        'With 79 unique base models and well over 100 personalizing traits, the art behind Knights is some of the most dynamic and complex of any NFT project ever created.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Evolving Blockchain Technology',
      href: '#',
      category: { name: '02.', href: '#' },
      description:
        'Iron Hills is committed to pushing the boundaries of what is possible with web3 technology and setting new standards for safety, education, and accountability within this emerging industry.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Every Knight Has A Voice',
      href: '#',
      category: { name: '03.', href: '#' },
      description:
        'Communication, transparency, and accessibility are among the most important values at Iron Hills. From the greenest Guard to the highest ranking Grand Marshall, all Knights have a say in the development of the Knights Task Force.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <main className="mx-auto max-w-7xl px-4 bg-[#100d0a]  ">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">

                <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">ABOUT US</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                Iron Hills was founded in January 2022 by a team of friends with the goal of acquiring and continuing the development of Spiral Knights. With that goal not being within reach at this time, we have positioned ourselves to focus on our strength: innovation within web3. Each member of our team has different backgrounds, come from different places, and carry a wide variety of skills. We believe that these different perspectives are crucial to long-term innovation. 
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center  border-solid border-2 border-orange-900 bg-orange-900 px-8 py-3 text-base font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 md:text-lg"
                    >
                     ENLIST NOW
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="mt-12 mb-16 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md   sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        
        
      <div className="relative mx-auto max-w-7xl ">

<div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
  {posts.map((post) => (
    <div key={post.title} className="flex flex-col overflow-hidden">
      <div className="flex flex-1 flex-col justify-between bg-orange-900/20 p-6">
        <div className="flex-1">
          <a href={post.href} className="mt-2 block">
            <p className="text-2xl font-semibold text-white">{post.title}</p>
            <p className="mt-3 sm:text-lg text-gray-500">{post.description}</p>
          </a>
        </div>

      </div>
    </div>
  ))}
</div>
</div>
<div className="mx-auto max-w-7xl  mt-24">
<div className="slider">
	<div className="slide-track gap-2">
  <div className="h-80 flex items-center bg-orange-900/20 justify-center">
  <Image src={p1} className="object-fill h-full"/>
</div>
		    <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p2} className="object-fill h-full"/>
</div>
  <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p3} className="object-fill h-full"/>
</div>
  <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p4} className="object-fill h-full"/>
</div>
		    <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p5} className="object-fill h-full"/>
</div>
		    <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p1} className="object-fill h-full"/>
</div>
		    <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p2} className="object-fill h-full"/>
</div>
		    <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p3} className="object-fill h-full"/>
</div>
		    <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p4} className="object-fill h-full"/>
</div>
  <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p5} className="object-fill h-full"/>
</div>
  <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p1} className="object-fill h-full"/>
</div>
		    <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p2} className="object-fill h-full"/>
</div>
		    <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p3} className="object-fill h-full"/>
</div>
		    <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p4} className="object-fill h-full"/>
</div>
		    <div className="h-80 w-56 flex items-center bg-orange-900/20 justify-center">
  <Image src={p5} className="object-fill h-full"/>
</div>
	</div>
</div>
</div>

      
    

      


    </main>
  )
}
