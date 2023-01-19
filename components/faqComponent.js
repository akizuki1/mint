import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function FaqComponent() {
  const faqs = [
    {
      question: "What is Knights?",
      answer:
        "Knights, created by Iron Hills, is the culmination of nearly a year’s worth of trying to push the boundaries of NFT art and technology. Knights art is inspired by the online game Spiral Knights. By owning a Knight, you have enlisted as part of the Knights Task Force, an elite squad established to solve the mystery of The Altar.",
    },
    {
      question: "How do I get allowlisted for Knights?",
      answer:
        "We will be using an application system to give out allowlist spots for Knights- however, there is a novel twist. In order to submit your application, you must mint a free soulbound token (SBT). This soulbound token cannot be sold or traded and acts as proof of your submitted application. As Iron Hills accepts applications, your SBT will dynamically update to show whether or not you have been accepted. At the time of mint, those with accepted SBTs may burn their SBT in order to mint. The gas fees paid to mint the original SBT will be refunded to you during the burning and minting of Knights.",
    },
    {
      question: "What is the supply of Knights?",
      answer:
        "Knights is a 5,000 piece collection. 4,000 will be sold through a combination of an allowlist, a waitlist, and a public sale. 730 will be sold over a course of two years through a daily auction of 1 Knight per day. 260 will be kept for the Iron Hills team, Knights moderators, and other contributors",
    },
    {
      question: "What distinguishes Knights’ art from that of other projects?",
      answer:
        "In the case of most PFP projects, they will use a single, static base model and then layer different attributes and traits on top of that model. There are some projects who have gone a step further by adding multiple base models into the equation. The base shape of a model being different than another model adds a huge level of complexity to the collection. Because some traits might not “fit” on a certain base model, each base model needs specific traits that only work with that base model. Knights is what we believe to be the most dynamic and complex PFP art collection ever created with 79 distinct base models. Each base model is completely unique and has a specific set of attributes that go with it. We believe this solves the all too common problem of rare pieces looking incredible and floor pieces looking boring.",
    },
    {
      question: "What is your relation to the online game Spiral Knights?",
      answer:
        "Our team met each other long ago through the Spiral Knights community and we all share a deep passion for it. While the art of Knights is inspired by Spiral Knights, Iron Hills has no official relationship to the owners of Spiral Knights and Knights has no planned interoperability with the game at this time. We will continue to put ourselves in a position where we can be involved with Spiral Knights in an official capacity but it is not something that we can guarantee",
    },
    {
      question: "What is the ideation behind the Knights art?",
      answer:
        "Knights is inspired by Spiral Knights but all of the art behind it was created with care by Iron Hills. All of the art used within the Knights collection is hand drawn by our team's artist and doesn’t use any in-game models. The complexity in layering, bespoke art generation systems, and extremely thorough auditing processes that we have undergone have all taken an immense amount of time and effort from our team. The steps that we have taken to make Knights our own while honoring Spiral Knights sets Knights clearly apart from taking a screenshot of the game and slapping it onto an NFT. Artists within the Spiral Knights community have long sold commissions inspired by the art of the game for real money and we see this as no different.",
    },
    {
      question: "How will Knights’ royalties be structured?",
      answer:
        "Royalties on Knights will be set at 5%. 15% of all of the revenue generated from royalties will go directly to our artist. In the future, we plan to implement dynamic royalties which we believe will promote further accountability from projects in regard to secondary royalties.",
    },
    {
      question: "Where can I buy and sell Knights?",
      answer:
        "Iron Hills is happy to make Knights tradeable on any marketplace that respects creator royalties.",
    },
    {
      question: "I want to know more!",
      answer:
        "We plan to release a White paper which will contain much more detail and background about the project.",
    },
    {
      question: "My questions isn’t answered here!",
      answer:
        "No worries - we are happy to answer any further questions in our Discord.",
    },
    // More questions...
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      id="faq"
      className="mx-auto max-w-7xl py-12 px-4 lg:py-24 bg-[#100d0a]"
    >
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className=" block"> FREQUENTLY ASKED QUESTIONS</span>
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
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-md text-gray-200">{faq.answer}</p>
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
