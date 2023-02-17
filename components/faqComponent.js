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
        "Invictus Order is the culmination of over a year's worth of trying to push the boundaries of NFT art and technology. The art of Invictus Order is inspired by the online game Spiral Knights. As a part of the Invictus Order, you have enlisted to join the Sector Task Force, an elite squad established to solve the mystery of The Altar.",
    },
    {
      question:
        "What distinguishes Invictus Order’s art from that of other projects?",
      answer:
        "In the case of most projects, they will use a single, static base model and then layer different attributes and traits on top of that model. There are some projects, like ours, who have gone a step further by adding multiple base models into the equation; this makes the collection as a whole significantly more complex. Because some traits might not “fit” on a certain base model, each base model needs specific traits that only work with that particular base model. Invictus Order is what we believe to be the one of the most dynamic and complex collections ever created with 79 distinct base models. Each base model is completely unique and has a specific set of traits that go with it. Though the process of creating the art of Invictus Order went far beyond that of a typical NFT project, we believe that the extra time and effort has been well worth it to make every single piece in the collection feel unique and special.",
    },
    {
      question: "What is the supply of Invictus Order?",
      answer:
        "Invictus Order is a 5,000 piece collection. 4,000 will be sold through a combination of an allowlist, a waitlist, and a public sale. 730 will be sold over the course of two years through a daily auction. 270 will be kept for giveaways, charitable initiatives, the Iron Hills team, Invictus Order moderators, and other contributors.",
    },
    {
      question: "How do I get allowlisted for Invictus Order?",
      answer:
        "We will be using an application system to give out allowlist spots for Invictus Order- however, there is a novel twist. In order to submit your application, you must mint a free soulbound token (SBT): Invictus Order Application. Your Invictus Order Application acts as on-chain proof of your submitted application. As Iron Hills approves applications, your SBT will dynamically update to show whether or not you have been accepted. At the time of mint, only those with approved SBTs may mint their Invictus Order. To submit an application for allowlist, click “Apply Now” above. For more information on how the SBT and allowlist process works, click <a className='text-blue-400' href='https://mirror.xyz/ironhills.eth/tI53g0xxPiaYu_3Vp8oZIqPCZCfpsUnq4lpvo_YId3U' target='_blank' rel='noreferrer' >here</a>.",
    },
    {
      question:
        "What is the difference between the Invictus Order Application and the Invictus Order?",
      answer:
        "The Invictus Order Application is the SBT that is minted when submitting your application. The Invictus Order Application determines during which period you can mint the main collection, Invictus Order.",
    },
    {
      question:
        "If I mint the Invictus Order Application SBT with one wallet, can I mint my Invictus Order with a different wallet?",
      answer:
        "No, your allowlist status is tied to your Invictus Order Application. You must use the same wallet that owns the Invictus Order Application to mint your Invictus Order. We recommend minting the Invictus Order Application SBT with the wallet you intend to mint your Invictus Order with.",
    },
    {
      question: "How do I know the status of my application?",
      answer:
        "If your application has been approved, your Invictus Order Application SBT will automatically change to reflect your new status. Each of the three variations of the Invictus Order Application has different art and metadata to make it apparent whether or not you’ve been accepted. No having to ask around in Discord, fill out forms, or worry that your address isn’t on the contract; if you have an “Allowlist”  trait on your Invictus Order Application SBT, then you are good to go!",
    },
    {
      question:
        "What will the Invictus Order Application SBT do after the Invictus Order mint?",
      answer:
        "Maybe nothing. Maybe something. We’re not sure yet. <br/><br/>  Having the Invictus Order Application creates an interesting mechanism for us to engage holders of those particular tokens in specific ways if we want to. We might never do anything with them but it would certainly be interesting to use them in some way…",
    },
    {
      question: "Is there a supply limit on the Invictus Order Applications?",
      answer:
        "No, the Invictus Order Applications are completely open edition during the application submission window. The application submission window will last no more than a few weeks. You can only mint one Invictus Order Application per wallet.",
    },
    {
      question:
        "What will you do about the gas fees for the Invictus Order Application?",
      answer:
        "Minting the Invictus Order Application SBT is completely free, however, you will still have to pay gas to mint it. Gas fees from minting the Invictus Order Application will be refunded during the mint of Invictus Order up to 0.01 ETH per wallet. The minting of your Invictus Order and the refund of the gas fees for your Invictus Order Application will all be done in the same transaction to minimize gas usage.",
    },
    {
      question: "Will the information I share in my application be on-chain?",
      answer:
        "No, all of the information in your application will be stored in a secure database and will only be available to Iron Hills. Still, don’t send us any private information through the application; we don’t want to deal with that.",
    },
    {
      question: "What is your relation to the online game Spiral Knights?",
      answer:
        "Our team met each other long ago through the Spiral Knights community and we all share a deep passion for it. While the art of Invictus Order is inspired by Spiral Knights, Iron Hills has no official relationship to the owners of Spiral Knights and Invictus Order has no planned interoperability with the game at this time. That being said, the ultimate goal of Iron Hills is to continue the development of Spiral Knights and explore how NFT technology can be thoughtfully applied to video games. We will continue to put ourselves in a position where we can acquire Spiral Knights or be involved with it in an official capacity but we never want to promise something that we can’t guarantee.",
    },
    {
      question: "How will Invictus Order’s royalties be structured?",
      answer:
        "Royalties on Invictus Order will be set at 5%. 15% of all of the revenue generated from royalties will go directly to our artist. In the future, we plan to implement dynamic royalties which we believe will promote further accountability from projects in regard to secondary royalties.",
    },
    {
      question: "Where can I buy and sell Invictus Order when it releases?",
      answer:
        "Iron Hills is happy to make Invictus Order tradeable on any marketplace that respects creator royalties. As the landscape of marketplaces and royalties changes, our stance on this will inevitably adapt based on what is best for our holders and for Iron Hills’ sustainability.",
    },
    {
      question: "I still have more questions!",
      answer:
        "No worries- we’re happy to answer any questions you have over in our Discord server. You can join our Discord server <a className='text-blue-400' href='https://discord.gg/invictusorder' target='_blank' rel='noreferrer' >here</a>.",
    },
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
