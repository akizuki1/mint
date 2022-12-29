import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FaqComponent() {

  const faqs = [


    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
   
    <div className="mx-auto max-w-7xl py-12 px-4 lg:py-24">
    <div className="space-y-12">
<div className="space-y-5 sm:space-y-4">
          <a
                  href="#"
                  className="inline-flex items-center rounded-full  p-1 pr-2 text-white hover:text-gray-800 sm:text-base lg:text-sm xl:text-base"
                >
                  <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-900">
                    FAQ
                  </p>

                </a>
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
                        <span className="font-medium text-white">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-md text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
   
    </div>
    </div>
   
  )
}
