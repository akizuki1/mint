import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function ModalPolicyTermsComponent(props) {
  const [open, setOpen] = useState(props.status);

  function changeStatusModal(status) {
    props.handleModal(status, 1);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => changeStatusModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#100d0a] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full  items-end justify-center p-4  sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {props.type === 1 ? (
                <Dialog.Panel className="relative transform overflow-hidden  bg-[#100d0a] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                  <div>
                    <div className="mt-3 fel sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold text-white"
                      >
                        Privacy Policy
                      </Dialog.Title>
                      <div className="mt-2 ">
                        <p className="text-sm text-white max-h-96 overflow-auto">
                          What is Lorem Ipsum? Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry. Lorem Ipsum
                          has been the industrys standard dummy text ever since
                          the 1500s, when an unknown printer took a galley of
                          type and scrambled it to make a type specimen book. It
                          has survived not only five centuries, but also the
                          leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum. Why do we use it? It is a
                          long established fact that a reader will be distracted
                          by the readable content of a page when looking at its
                          layout. The point of using Lorem Ipsum is that it has
                          a more-or-less normal distribution of letters, as
                          opposed to using Content here, content here, making it
                          look like readable English. Many desktop publishing
                          packages and web page editors now use Lorem Ipsum as
                          their default model text, and a search for lorem ipsum
                          will uncover many web sites still in their infancy.
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose (injected
                          humour and the like). Where does it come from?
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source. Lorem Ipsum comes from sections
                          1.10.32 and 1.10.33 of &apos;de Finibus Bonorum et
                          Malorum&apos; (The Extremes of Good and Evil) by
                          Cicero, written in 45 BC. This book is a treatise on
                          the theory of ethics, very popular during the
                          Renaissance. The first line of Lorem Ipsum,
                          &apos;Lorem ipsum dolor sit amet..&apos;, comes from a
                          line in section 1.10.32. The standard chunk of Lorem
                          Ipsum used since the 1500s is reproduced below for
                          those interested. Sections 1.10.32 and 1.10.33 from
                          &apos;de Finibus Bonorum et Malorum&apos; by Cicero
                          are also reproduced in their exact original form,
                          accompanied by English versions from the 1914
                          translation by H. Rackham. What is Lorem Ipsum? Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industrys standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum. Why do we use it? It is a long
                          established fact that a reader will be distracted by
                          the readable content of a page when looking at its
                          layout. The point of using Lorem Ipsum is that it has
                          a more-or-less normal distribution of letters, as
                          opposed to using Content here, content here, making it
                          look like readable English. Many desktop publishing
                          packages and web page editors now use Lorem Ipsum as
                          their default model text, and a search for lorem ipsum
                          will uncover many web sites still in their infancy.
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose (injected
                          humour and the like). Where does it come from?
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source. Lorem Ipsum comes from sections
                          1.10.32 and 1.10.33 of &apos;de Finibus Bonorum et
                          Malorum&apos; (The Extremes of Good and Evil) by
                          Cicero, written in 45 BC. This book is a treatise on
                          the theory of ethics, very popular during the
                          Renaissance. The first line of Lorem Ipsum,
                          &apos;Lorem ipsum dolor sit amet..&apos;, comes from a
                          line in section 1.10.32. The standard chunk of Lorem
                          Ipsum used since the 1500s is reproduced below for
                          those interested. Sections 1.10.32 and 1.10.33 from
                          &apos;de Finibus Bonorum et Malorum&apos; by Cicero
                          are also reproduced in their exact original form,
                          accompanied by English versions from the 1914
                          translation by H. Rackham.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                      onClick={() => changeStatusModal(false)}
                    >
                      BACK
                    </button>
                  </div>
                </Dialog.Panel>
              ) : (
                <Dialog.Panel className="relative transform overflow-hidden  bg-[#100d0a] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                  <div>
                    <div className="mt-3 fel sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold text-white"
                      >
                        Terms of service
                      </Dialog.Title>
                      <div className="mt-2 ">
                        <p className="text-md text-white max-h-96 overflow-auto">
                          What is Lorem Ipsum? Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry. Lorem Ipsum
                          has been the industrys standard dummy text ever since
                          the 1500s, when an unknown printer took a galley of
                          type and scrambled it to make a type specimen book. It
                          has survived not only five centuries, but also the
                          leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum. Why do we use it? It is a
                          long established fact that a reader will be distracted
                          by the readable content of a page when looking at its
                          layout. The point of using Lorem Ipsum is that it has
                          a more-or-less normal distribution of letters, as
                          opposed to using Content here, content here, making it
                          look like readable English. Many desktop publishing
                          packages and web page editors now use Lorem Ipsum as
                          their default model text, and a search for lorem ipsum
                          will uncover many web sites still in their infancy.
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose (injected
                          humour and the like). Where does it come from?
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source. Lorem Ipsum comes from sections
                          1.10.32 and 1.10.33 of &apos;de Finibus Bonorum et
                          Malorum&apos; (The Extremes of Good and Evil) by
                          Cicero, written in 45 BC. This book is a treatise on
                          the theory of ethics, very popular during the
                          Renaissance. The first line of Lorem Ipsum,
                          &apos;Lorem ipsum dolor sit amet..&apos;, comes from a
                          line in section 1.10.32. The standard chunk of Lorem
                          Ipsum used since the 1500s is reproduced below for
                          those interested. Sections 1.10.32 and 1.10.33 from
                          &apos;de Finibus Bonorum et Malorum&apos; by Cicero
                          are also reproduced in their exact original form,
                          accompanied by English versions from the 1914
                          translation by H. Rackham. What is Lorem Ipsum? Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industrys standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum. Why do we use it? It is a long
                          established fact that a reader will be distracted by
                          the readable content of a page when looking at its
                          layout. The point of using Lorem Ipsum is that it has
                          a more-or-less normal distribution of letters, as
                          opposed to using Content here, content here, making it
                          look like readable English. Many desktop publishing
                          packages and web page editors now use Lorem Ipsum as
                          their default model text, and a search for lorem ipsum
                          will uncover many web sites still in their infancy.
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose (injected
                          humour and the like). Where does it come from?
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source. Lorem Ipsum comes from sections
                          1.10.32 and 1.10.33 of &apos;de Finibus Bonorum et
                          Malorum&apos; (The Extremes of Good and Evil) by
                          Cicero, written in 45 BC. This book is a treatise on
                          the theory of ethics, very popular during the
                          Renaissance. The first line of Lorem Ipsum,
                          &apos;Lorem ipsum dolor sit amet..&apos;, comes from a
                          line in section 1.10.32. The standard chunk of Lorem
                          Ipsum used since the 1500s is reproduced below for
                          those interested. Sections 1.10.32 and 1.10.33 from
                          &apos;de Finibus Bonorum et Malorum&apos; by Cicero
                          are also reproduced in their exact original form,
                          accompanied by English versions from the 1914
                          translation by H. Rackham.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                      onClick={() => changeStatusModal(false)}
                    >
                      BACK
                    </button>
                  </div>
                </Dialog.Panel>
              )}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
