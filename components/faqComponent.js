import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import parse from "html-react-parser";
import Image from "next/image";
import mirror from "../assets/landing/mirror.png";

export default function FaqComponent() {
  const faqs = [
    {
      question: "What is Invictus Order?",
      answer:
        "Invictus Order, created by Iron Hills, is the culmination of over a year's worth of trying to push the boundaries of NFT art and technology. The art of Invictus Order is inspired by the online game Spiral Knights. As a part of the Invictus Order, you have enlisted as part of the Sector Task Force, an elite squad established to solve the mystery of The Altar.",
    },
    {
      question: "How do I get allowlisted for Invictus Order?",
      answer:
        "We will be using an application system to give out allowlist spots for Invictus Order- however, there is a novel twist. In order to submit your application, you must mint a free soulbound token (SBT). This SBT cannot be sold or traded and acts as on-chain proof of your submitted application. As Iron Hills approves applications, your SBT will dynamically update to show whether or not you have been accepted. At the time of mint, only those with approved SBTs may mint their Alterian and join the Invictus Order. The gas fees paid to mint the SBT will be refunded to you during the minting of Invictus Order.",
    },
    {
      question: "How do I know if my application has been accepted?",
      answer:
        "If your application has been approved, your Invictus Order Application SBT will automatically change to reflect your new status. Each of the three variations of the Invictus Order Application has different art and metadata to make it apparent whether or not you’ve been accepted. No having to ask around in Discord, fill out forms, or worry that your address isn’t on the contract; if you have an “Allowlist”  trait on your Invictus Order Application SBT, then you are good to go!</br><div className='sm:text-center md:mx-auto md:max-w-2xl flex p-8   lg:col-span-6 lg:text-left'> <div className='my-auto'> <img className='h-full w-full object-fit'src='/mirror.png' alt='Picture of the author'/>  </div></div>",
    },
    {
      question: "What is the supply of Invictus Order?",
      answer:
        "Invictus Order is a 5,000 piece collection. 4,000 will be sold through a combination of an allowlist, a waitlist, and a public sale. 730 will be sold over the course of two years through a daily auction. 270 will be kept for giveaways, charitable initiatives, the Iron Hills team, Invictus Order moderators, and other contributors.",
    },
    {
      question:
        "What distinguishes Invictus Order’s art from that of other projects?",
      answer:
        "In the case of most PFP projects, they will use a single, static base model and then layer different attributes and traits on top of that model. There are some projects, like ours, who have gone a step further by adding multiple base models into the equation; this makes the collection as a whole significantly more complex. Because some traits might not “fit” on a certain base model, each base model needs specific traits that only work with that particular base model. Invictus Order is what we believe to be the one of the most dynamic and complex collections ever created with 79 distinct base models. Each base model is completely unique and has a specific set of traits that go with it. Though the process of creating the art of Invictus Order went far beyond that of a typical NFT project, we believe that the extra time and effort has been well worth it to make every single piece in the collection feel unique and special.",
    },
    {
      question: "What is the ideation behind the Knights art?",
      answer:
        "Knights is inspired by Spiral Knights but all of the art behind it was created with care by Iron Hills. All of the art used within the Knights collection is hand drawn by our team's artist and doesn’t use any in-game models. The complexity in layering, bespoke art generation systems, and extremely thorough auditing processes that we have undergone have all taken an immense amount of time and effort from our team. The steps that we have taken to make Knights our own while honoring Spiral Knights sets Knights clearly apart from taking a screenshot of the game and slapping it onto an NFT. Artists within the Spiral Knights community have long sold commissions inspired by the art of the game for real money and we see this as no different.",
    },
    {
      question: "How will Invictus Order’s royalties be structured?",
      answer:
        "Royalties on Invictus Order will be set at 5%. 15% of all of the revenue generated from royalties will go directly to our artist. In the future, we plan to implement dynamic royalties which we believe will promote further accountability from projects in regard to secondary royalties.",
    },
    {
      question: "Where can I buy and sell Invictus Order?",
      answer:
        "Iron Hills is happy to make Invictus Order tradeable on any marketplace that respects creator royalties. As the landscape of marketplaces and royalties changes, our stance on this will inevitably adapt based on what is best for our holders and for Iron Hills’ sustainability.",
    },
    {
      question: "I still have more questions!",
      answer:
        "No worries- we’re happy to answer any questions you have over in our Discord server. You can join our Discord server <a className='text-blue-400' href='https://discord.gg/invictusorder' target='_blank' rel='noreferrer' >here</a>.",
    },
    // More questions...
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div id="faq" className="mx-auto max-w-7xl py-12 px-4 lg:py-24 ">
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block text-titles">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </h1>
        </div>
        <div className="mx-auto max-w-7xl ">
          <dl className="mt-6 space-y-6 divide-y divide-gray-800">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left">
                        <span className="font-medium text-white">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform text-white"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-md text-gray-200">
                        {parse(faq.answer)}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
