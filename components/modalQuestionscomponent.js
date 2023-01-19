import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ModalQuestionsComponent(props) {
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
              <Dialog.Panel className="relative transform   bg-[#100d0a] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                <div>
                  <div className="mt-3 fel sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-semibold text-white"
                    >
                      Questions
                    </Dialog.Title>
                    <div className="mt-8  ">
                      <form className="space-y-6" action="#" method="POST">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white"
                          >
                            Question 1
                          </label>

                          <div className="mt-2">
                            <textarea
                              rows={4}
                              name="comment"
                              id="comment"
                              className="block w-full border-gray-300  bg-black sm:text-sm"
                              defaultValue={""}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white"
                          >
                            Question 2
                          </label>

                          <div className="mt-2">
                            <textarea
                              rows={4}
                              name="comment"
                              id="comment"
                              className="block w-full border-gray-300  bg-black sm:text-sm"
                              defaultValue={""}
                            />
                          </div>
                        </div>

                        <div className="flex max-w-sm mx-auto mt-56">
                          <button
                            type="button"
                            className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700  px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                            onClick={() => changeStatusModal(false)}
                          >
                            BACK
                          </button>
                          <button
                            type="button"
                            className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                            onClick={() => changeStatusModal(false)}
                          >
                            SEND
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
