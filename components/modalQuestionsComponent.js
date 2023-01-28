import { useConnectWallet } from "@web3-onboard/react";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  launchApplication,
  modalApplication,
  mintToken,
  updateUserData,
  getUserData,
} from "../redux/actions/web3DataActions";
import Link from "next/link";

export default function ModalQuestionsComponent(props) {
  const [{ wallet }] = useConnectWallet();
  const [open, setOpen] = useState(false);
  const [accessToken] = useLocalStorage("jwtToken", null);

  const applicationStatus = useSelector(
    (store) => store.web3Data.applicationStatus
  );
  const userData = useSelector((store) => store.web3Data.userData);
  const mintStatus = useSelector((store) => store.web3Data.mintStatus);
  useEffect(() => {
    if (
      applicationStatus === "application pending" ||
      applicationStatus === "mint pending" ||
      applicationStatus === "application success" ||
      applicationStatus === "application failed" ||
      applicationStatus === "minting" ||
      process === 7
    ) {
      setOpen(true);
    } else setOpen(false);
  }, [applicationStatus]);

  const [isMinting, setIsMinting] = useState(false);
  const [process, setProcess] = useState(1);
  const [tryAgain, setTryAgain] = useState(false);
  const [discordID, setDiscordID] = useState();
  const [twitterUrl, setTwitterUrl] = useState();
  const [valueLife, setValueLife] = useState();
  const [successKnights, setSuccessKnights] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (applicationStatus === "mint pending") {
      const content = JSON.parse(userData.application.content);

      setDiscordID(content.discordID);
      setTwitterUrl(content.twitterUrl);
      setValueLife(content.valueLife);
      setSuccessKnights(content.successKnights);
      setProcess(5);
    }
    if (applicationStatus === "application success") {
      setProcess(3);
    }
    if (applicationStatus === "application failed") {
      setProcess(4);
    }
  }, [applicationStatus]);

  useEffect(() => {
    if (mintStatus !== 0) {
      console.log(mintStatus);
      setProcess(mintStatus);
    }
  }, [mintStatus]);

  function updateDataUser() {
    dispatch(getUserData(wallet.accounts[0].address, accessToken));
    setTryAgain(true);
  }

  useEffect(() => {
    if (process === 7) {
      setTimeout(() => {
        updateDataUser();
      }, 1500);
    }
  }, [process]);

  const sendApplication = async () => {
    setProcess(2);
    dispatch(
      launchApplication(
        wallet.accounts[0].address,
        accessToken,
        discordID,
        twitterUrl,
        valueLife,
        successKnights
      )
    );
  };

  function mint() {
    dispatch(mintToken(wallet, userData));
  }

  function changeStatusModal(status) {
    dispatch(modalApplication(status, applicationStatus));
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => changeStatusModal("none")}
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
          <div className="fixed inset-0 bg-[#626067] bg-opacity-75 transition-opacity" />
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
              <Dialog.Panel className="relative transform   bg-[#626067] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                <div>
                  <div className="mt-3 fel sm:mt-5">
                    <div className="mt-8  ">
                      {(() => {
                        switch (process) {
                          case 1:
                            return (
                              <>
                                <Dialog.Title
                                  as="h3"
                                  className="text-2xl font-semibold text-white"
                                >
                                  Knights Application
                                </Dialog.Title>
                                <form
                                  className="space-y-6"
                                  onSubmit={() => [sendApplication()]}
                                >
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-sm ont-medium text-gray-300"
                                    >
                                      What is your Discord username (User#0001)?
                                    </label>

                                    <div>
                                      <input
                                        rows={4}
                                        name="Q1"
                                        id="Q1"
                                        value={discordID}
                                        onChange={(e) => [
                                          setDiscordID(e.target.value),
                                        ]}
                                        className="block w-full h-10 text-gray-800 bg-gray-400 sm:text-sm pl-2"
                                        required={true}
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-medium text-gray-300"
                                    >
                                      What is your Twitter URL?
                                    </label>

                                    <div>
                                      <input
                                        rows={4}
                                        name="Q2"
                                        id="Q2"
                                        value={twitterUrl}
                                        onChange={(e) => [
                                          setTwitterUrl(e.target.value),
                                        ]}
                                        className="block w-full h-10  text-gray-800 bg-gray-400 sm:text-sm pl-2"
                                        required={true}
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-medium text-gray-300"
                                    >
                                      As a Knights holder, what is the one thing
                                      that you would like to see Iron Hills do
                                      that would add the most value to your
                                      life?
                                    </label>

                                    <div>
                                      <textarea
                                        rows={4}
                                        name="Q1"
                                        id="Q1"
                                        value={valueLife}
                                        onChange={(e) => [
                                          setValueLife(e.target.value),
                                        ]}
                                        className="block w-full  text-gray-800 bg-gray-400 sm:text-sm pl-2 pt-2"
                                        required={true}
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-medium text-gray-300"
                                    >
                                      How would you define &quot;success&quot;
                                      for Knights 6 months from now?
                                    </label>

                                    <div>
                                      <textarea
                                        rows={4}
                                        name="Q1"
                                        id="Q1"
                                        value={successKnights}
                                        onChange={(e) => [
                                          setSuccessKnights(e.target.value),
                                        ]}
                                        className="block w-full  text-gray-800 bg-gray-400 sm:text-sm pl-2 pt-2"
                                        required={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="flex max-w-sm mx-auto mt-56">
                                    <button
                                      type="button"
                                      className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700  px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                      onClick={() => changeStatusModal("none")}
                                    >
                                      BACK
                                    </button>
                                    <button
                                      type="submit"
                                      className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                    >
                                      SUBMIT
                                    </button>
                                  </div>
                                </form>
                              </>
                            );
                          case 2:
                            return (
                              <>
                                <div className="flex justify-center mt-12 p-8 ">
                                  <p className="mx-auto justify-self-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="3em"
                                      height="3em"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <g
                                        fill="none"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                      >
                                        <path
                                          strokeDasharray="60"
                                          strokeDashoffset="60"
                                          strokeOpacity=".3"
                                          d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                                        >
                                          <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            dur="1.3s"
                                            values="60;0"
                                          />
                                        </path>
                                        <path
                                          strokeDasharray="15"
                                          strokeDashoffset="15"
                                          d="M12 3C16.9706 3 21 7.02944 21 12"
                                        >
                                          <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            dur="0.3s"
                                            values="15;0"
                                          />
                                          <animateTransform
                                            attributeName="transform"
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                            type="rotate"
                                            values="0 12 12;360 12 12"
                                          />
                                        </path>
                                      </g>
                                    </svg>
                                  </p>
                                </div>
                                <div className="flex justify-center ">
                                  <p className="mx-auto justify-self-center text-white text-2xl font-semibold">
                                    Submitting
                                  </p>
                                </div>
                              </>
                            );
                          case 3:
                            return (
                              <>
                                <div className="flex justify-center mt-12 p-8 ">
                                  <p className="mx-auto justify-self-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="3em"
                                      height="3em"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="white"
                                        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"
                                      />
                                    </svg>
                                  </p>
                                </div>
                                <div className="flex justify-center ">
                                  <p className="mx-auto justify-self-center text-white text-2xl font-semibold">
                                    Application submitted successfully.
                                  </p>
                                </div>
                                <div className="flex max-w-sm mx-auto mt-8">
                                  {!isMinting
                                    ? [setIsMinting(true), mint()]
                                    : null}
                                </div>
                              </>
                            );
                          case 4:
                            return (
                              <>
                                <div className="flex justify-center mt-12 p-8 ">
                                  <p className="mx-auto justify-self-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="3em"
                                      height="3em"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="white"
                                        d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
                                      />
                                    </svg>
                                  </p>
                                </div>
                                <div className="flex justify-center ">
                                  <p className="mx-auto justify-self-center text-white text-2xl font-semibold">
                                    Knights application failed
                                  </p>
                                </div>
                                <div className="flex max-w-sm mx-auto mt-8">
                                  <button
                                    type="button"
                                    className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                    onClick={() => setProcess(1)}
                                  >
                                    TRY AGAIN
                                  </button>
                                </div>
                              </>
                            );
                          case 5:
                            return (
                              <div className="space-y-6">
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                  >
                                    What is your Discord username?
                                  </label>

                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-medium bg-[#626067] text-gray-800"
                                    >
                                      {discordID}
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                  >
                                    What is your Twitter URL?
                                  </label>

                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-medium bg-[#626067] text-gray-800"
                                    >
                                      {twitterUrl}
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                  >
                                    As a Knights holder, what is one thing that
                                    Iron Hills can do that would add the most
                                    value to your life?
                                  </label>

                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-medium bg-[#626067] text-gray-800"
                                    >
                                      {valueLife}
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                  >
                                    How would you define &quot;success&quot; for
                                    Knights 6 months from now?
                                  </label>

                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-medium bg-[#626067] text-gray-800"
                                    >
                                      {successKnights}
                                    </label>
                                  </div>
                                </div>
                                <div className="flex max-w-sm mx-auto mt-56">
                                  <button
                                    type="button"
                                    className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700  px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                    onClick={() => changeStatusModal("none")}
                                  >
                                    BACK
                                  </button>
                                  <button
                                    className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                    onClick={() => mint()}
                                  >
                                    MINT TO FINISH
                                  </button>
                                </div>
                              </div>
                            );
                          case 6:
                            return (
                              <>
                                <div className="flex justify-center mt-12 p-8 ">
                                  <p className="mx-auto justify-self-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="3em"
                                      height="3em"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <g
                                        fill="none"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                      >
                                        <path
                                          strokeDasharray="60"
                                          strokeDashoffset="60"
                                          strokeOpacity=".3"
                                          d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                                        >
                                          <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            dur="1.3s"
                                            values="60;0"
                                          />
                                        </path>
                                        <path
                                          strokeDasharray="15"
                                          strokeDashoffset="15"
                                          d="M12 3C16.9706 3 21 7.02944 21 12"
                                        >
                                          <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            dur="0.3s"
                                            values="15;0"
                                          />
                                          <animateTransform
                                            attributeName="transform"
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                            type="rotate"
                                            values="0 12 12;360 12 12"
                                          />
                                        </path>
                                      </g>
                                    </svg>
                                  </p>
                                </div>
                                <div className="flex justify-center ">
                                  <p className="mx-auto justify-self-center text-white text-2xl font-semibold">
                                    Soulbound token minting...
                                  </p>
                                </div>
                              </>
                            );
                          case 7:
                            return (
                              <>
                                <div className="flex justify-center mt-12 p-8 ">
                                  <p className="mx-auto justify-self-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="3em"
                                      height="3em"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="white"
                                        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"
                                      />
                                    </svg>
                                  </p>
                                </div>
                                <div className="flex justify-center ">
                                  <p className="mx-auto justify-self-center text-white text-2xl font-semibold">
                                    Knights Application Soulbound Token minted
                                    successfully.
                                  </p>
                                </div>
                                <div className="flex max-w-sm mx-auto mt-8">
                                  {userData.token ? (
                                    <Link
                                      className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10"
                                      href={
                                        "https://testnets.opensea.io/assets/goerli/0x5e86316bb7ead571af3caff7e3396ea38e6d0973/" +
                                        userData.token
                                      }
                                    >
                                      VIEW ON OPENSEA
                                    </Link>
                                  ) : !userData.token && tryAgain === true ? (
                                    <button
                                      type="button"
                                      className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                      onClick={() => updateUserData()}
                                    >
                                      RELOAD TOKEN
                                    </button>
                                  ) : (
                                    <button className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="2em"
                                        height="2em"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                      >
                                        <g
                                          fill="none"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeDasharray="60"
                                            strokeDashoffset="60"
                                            strokeOpacity=".3"
                                            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                                          >
                                            <animate
                                              fill="freeze"
                                              attributeName="stroke-dashoffset"
                                              dur="1.3s"
                                              values="60;0"
                                            />
                                          </path>
                                          <path
                                            strokeDasharray="15"
                                            strokeDashoffset="15"
                                            d="M12 3C16.9706 3 21 7.02944 21 12"
                                          >
                                            <animate
                                              fill="freeze"
                                              attributeName="stroke-dashoffset"
                                              dur="0.3s"
                                              values="15;0"
                                            />
                                            <animateTransform
                                              attributeName="transform"
                                              dur="1.5s"
                                              repeatCount="indefinite"
                                              type="rotate"
                                              values="0 12 12;360 12 12"
                                            />
                                          </path>
                                        </g>
                                      </svg>
                                    </button>
                                  )}
                                </div>
                              </>
                            );
                          case 8:
                            return (
                              <>
                                <div className="flex justify-center mt-12 p-8 ">
                                  <p className="mx-auto justify-self-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="3em"
                                      height="3em"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="white"
                                        d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
                                      />
                                    </svg>
                                  </p>
                                </div>
                                <div className="flex justify-center ">
                                  <p className="mx-auto justify-self-center text-white text-2xl font-semibold">
                                    Soulbound token minted failed
                                  </p>
                                </div>
                                <div className="flex max-w-sm mx-auto mt-8">
                                  <button
                                    type="button"
                                    className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                    onClick={() => mint()}
                                  >
                                    TRY AGAIN
                                  </button>
                                </div>
                              </>
                            );
                        }
                      })()}
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
