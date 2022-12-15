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
import p1 from '../../assets/img/product1.svg'
import p2 from '../../assets/img/product2.svg'
import p3 from '../../assets/img/product3.svg'
import p4 from '../../assets/img/product4.svg'
import p5 from '../../assets/img/product5.svg'
import p6 from '../../assets/img/product6.svg'
import p7 from '../../assets/img/product7.png'
import p8 from '../../assets/img/product8.png'
export default function AboutComponent() {


  const posts = [


    {
      title: 'Gaming NFTS',
      href: '#',
      category: { name: '01.', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
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
      title: 'Play To Earn',
      href: '#',
      category: { name: '02.', href: '#' },
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
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
      title: 'Metaverse ready',
      href: '#',
      category: { name: '03.', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
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
    <main>
      <div className="bg-[#06182c] pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 ">
        <div className="mx-auto max-w-7xl ">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <a
                  href="#"
                  className="inline-flex items-center rounded-full  p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                >
                  <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-800 to-indigo-600">
                    SIMPLE STEPS
                  </p>

                </a>
                <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">About Us</span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  As of January 2012, there were more than 21,000 ERC20 token contracts. We Built this Template because Ethereum ECO system is the most popular Platform. Among the most successful ERC20 token sales are EOS, Bancor, Qash and Bankex raising over $70 Million each.
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center  border-solid border-2 border-[#052356] bg-[#052356] px-8 py-3 text-base font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 md:text-lg"
                    >
                      CONNECT
                    </a>
                  </div>

                  <div className="  sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center  border-solid border-2 border-[#052356] bg-[#052356] px-8 py-3 text-base font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 md:text-lg"
                    >
                      WAITLIST NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        
      <div className="relative mx-auto max-w-7xl ">

<div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
  {posts.map((post) => (
    <div key={post.title} className="flex flex-col overflow-hidden">
      <div className="flex flex-1 flex-col justify-between bg-[#052356] p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href={post.category.href} className="hover:underline">
              {post.category.name}
            </a>
          </p>
          <a href={post.href} className="mt-2 block">
            <p className="text-xl font-semibold text-white">{post.title}</p>
            <p className="mt-3 text-base text-gray-400">{post.description}</p>
          </a>
        </div>

      </div>
    </div>
  ))}
</div>
</div>
<div className="mx-auto max-w-7xl  mt-24">
<div class="slider">
	<div class="slide-track gap-2">
  <div class="h-80 flex items-center bg-[#052356] justify-center">
  <Image src={p1} className="object-fill h-full"/>
</div>
		    <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p2} className="object-fill h-full"/>
</div>
  <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p3} className="object-fill h-full"/>
</div>
  <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p4} className="object-fill h-full"/>
</div>
		    <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p5} className="object-fill h-full"/>
</div>
		    <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p1} className="object-fill h-full"/>
</div>
		    <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p2} className="object-fill h-full"/>
</div>
		    <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p3} className="object-fill h-full"/>
</div>
		    <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p4} className="object-fill h-full"/>
</div>
  <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p5} className="object-fill h-full"/>
</div>
  <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p1} className="object-fill h-full"/>
</div>
		    <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p2} className="object-fill h-full"/>
</div>
		    <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p3} className="object-fill h-full"/>
</div>
		    <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p4} className="object-fill h-full"/>
</div>
		    <div class="h-80 w-56 flex items-center bg-[#052356] justify-center">
  <Image src={p5} className="object-fill h-full"/>
</div>
	</div>
</div>
</div>

      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">

        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-4 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Total Items</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">387</dd>
          </div>
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Total Owners</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">1.356</dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Floor Price</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">1.72</dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Volume Traded</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">42.5k</dd>
          </div>
        </dl>
      </div>
    

      </div>


    </main>
  )
}
