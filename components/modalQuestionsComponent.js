import { useConnectWallet } from "@web3-onboard/react";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useForm } from "react-hook-form";
import {
  launchApplication,
  modalApplication,
  mintToken,
  getUserData,
} from "../redux/actions/web3DataActions";
import Link from "next/link";
import Image from "next/image";
import mirror from "../assets/landing/mirror.png";

export default function ModalQuestionsComponent(props) {
  const preloadedValues = {
    twitterId: "https://twitter.com/",
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: preloadedValues,
  });
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
      process === 8
    ) {
      setOpen(true);
    } else setOpen(false);
  }, [applicationStatus]);

  const [isMinting, setIsMinting] = useState(false);
  const [agreeTyC, setAgreeTyC] = useState(false);
  const [process, setProcess] = useState(1);
  const [tryAgain, setTryAgain] = useState(false);
  const [discordID, setDiscordID] = useState();
  const [twitterUrl, setTwitterUrl] = useState("https://twitter.com/");
  const [valueLife, setValueLife] = useState();
  const [successInvictus, setSuccessInvictus] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (applicationStatus === "mint pending") {
      const content = JSON.parse(userData.application.content);

      setDiscordID(content.discordID);
      setTwitterUrl(content.twitterUrl);
      setValueLife(content.valueLife);
      setSuccessInvictus(content.successInvictus);
      setProcess(6);
    }
    if (applicationStatus === "application success") {
      setProcess(4);
    }
    if (applicationStatus === "application failed") {
      setProcess(5);
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
    if (process === 8) {
      setTimeout(() => {
        updateDataUser();
      }, 1500);
    }
  }, [process]);

  const sendApplication = async (data) => {
    setProcess(3);
    dispatch(
      launchApplication(
        wallet.accounts[0].address,
        accessToken,
        data.discordId,
        data.twitterId,
        data.valueLife,
        data.successInvictus
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
              <Dialog.Panel className="relative transform bg-application-background px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                <div>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold text-white"
                  >
                    Invictus Order Application
                  </Dialog.Title>

                  <div className="mt-3 fel sm:mt-5">
                    <div className="mt-8  ">
                      {(() => {
                        switch (process) {
                          case 1:
                            return (
                              <>
                                <div className="">
                                  <div className="text-xl font-semibold tracking-tight text-white">
                                    <span className="block">
                                      What is the Invictus Order Application?
                                    </span>
                                  </div>
                                  <ul className="mt-3 list-disc px-4 text-base text-gray-200 sm:mt-5 sm:text-lg">
                                    <li>
                                      <span>
                                        {" "}
                                        The Invictus Order Application is a free
                                        soulbound token (SBT) that acts as
                                        on-chain proof of your submission.
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        Your SBT art and metadata will
                                        automatically update as we process
                                        applications.
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        Application should take 5-10 minutes.
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        Gas fees will be refunded for those who
                                        mint their eventual Invictus Order.
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        For full details, click{" "}
                                        <Link
                                          className="text-blue-400"
                                          href="https://mirror.xyz/ironhills.eth/tI53g0xxPiaYu_3Vp8oZIqPCZCfpsUnq4lpvo_YId3U"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          here.
                                        </Link>
                                      </span>
                                    </li>
                                  </ul>

                                  <div className="sm:text-center md:mx-auto md:max-w-2xl flex p-8   lg:col-span-6 lg:text-left">
                                    <div className="my-auto ">
                                      <Image
                                        className="h-full w-full object-fit"
                                        src={mirror}
                                        alt="Picture of the author"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex max-w-sm mx-auto mt-12">
                                    <button
                                      type="button"
                                      className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons  px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                      onClick={() => changeStatusModal("none")}
                                    >
                                      BACK
                                    </button>
                                    <button
                                      onClick={() => setProcess(2)}
                                      className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                    >
                                      CONTINUE
                                    </button>
                                  </div>
                                </div>
                              </>
                            );
                          case 2:
                            return (
                              <>
                                <form
                                  className="space-y-6"
                                  onSubmit={handleSubmit(sendApplication)}
                                >
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-md  text-white"
                                    >
                                      What is your Discord username (User#0001)?
                                    </label>

                                    <div>
                                      <input
                                        name="discordId"
                                        {...register("discordId", {
                                          required: true,
                                          pattern: /^.{3,32}#[0-9]{4}$/i,
                                        })}
                                        className="block w-full h-10 text-white bg-application-text-bg sm:text-sm pl-2"
                                      />
                                    </div>
                                    {errors.discordId?.type === "pattern" && (
                                      <small className="text text-blue-400">
                                        Please use the correct format for
                                        discordID
                                      </small>
                                    )}
                                    {errors.discordId?.type === "required" && (
                                      <small className="text text-blue-400">
                                        The field cannot be empty
                                      </small>
                                    )}
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-md  text-white"
                                    >
                                      What is your Twitter URL
                                      (https://twitter.com/username)?
                                    </label>

                                    <div>
                                      <input
                                        name="twitterId"
                                        {...register("twitterId", {
                                          required: true,
                                          pattern:
                                            /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/i,
                                        })}
                                        className="block w-full h-10  text-white bg-application-text-bg sm:text-sm pl-2"
                                      />
                                    </div>
                                    {errors.twitterId?.type === "required" && (
                                      <small className="text text-blue-400">
                                        The field cannot be empty
                                      </small>
                                    )}
                                    {errors.twitterId?.type === "pattern" && (
                                      <small className="text text-blue-400">
                                        Please use the correct format for url
                                        and twitterId
                                      </small>
                                    )}
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-md  text-white"
                                    >
                                      As an Invictus Order holder, what is the
                                      one thing that you would like to see Iron
                                      Hills do that would add the most value to
                                      your life?
                                    </label>
                                    <div>
                                      <textarea
                                        rows={4}
                                        name="valueLife"
                                        {...register("valueLife", {
                                          required: true,
                                        })}
                                        className="block w-full  text-white bg-application-text-bg sm:text-sm pl-2 pt-2"
                                      />
                                    </div>
                                    {errors.valueLife?.type === "required" && (
                                      <small className="text text-blue-400">
                                        The field cannot be empty
                                      </small>
                                    )}
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-md  text-white"
                                    >
                                      How would you define &quot;success&quot;
                                      for Invictus Order 3 months from now? What
                                      about a year from now?
                                    </label>

                                    <div>
                                      <textarea
                                        name="successInvictus"
                                        {...register("successInvictus", {
                                          required: true,
                                        })}
                                        className="block w-full  text-white bg-application-text-bg sm:text-sm pl-2 pt-2"
                                      />
                                    </div>
                                    {errors.successInvictus?.type ===
                                      "required" && (
                                      <small className="text text-blue-400">
                                        The field cannot be empty
                                      </small>
                                    )}
                                  </div>
                                  <div className="mx-auto max-w-7xl overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
                                    <div className="mt-4 text-center text-base gap-5">
                                      <div className="relative flex justify-center">
                                        <div className="flex h-5 items-center">
                                          <input
                                            aria-describedby="comments-description"
                                            name="comments"
                                            type="checkbox"
                                            value={agreeTyC}
                                            onChange={() =>
                                              setAgreeTyC(!agreeTyC)
                                            }
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                          />
                                        </div>
                                        <div className="ml-3 text-md flex">
                                          <span
                                            id="comments-description"
                                            className="text-white mx-auto"
                                          >
                                            I agree to the{" "}
                                            <Link
                                              className="cursor-pointer text-buttons"
                                              href={"/policy"}
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              Privacy Policy
                                            </Link>
                                            ,{" "}
                                            <Link
                                              className="cursor-pointer text-buttons"
                                              href={"/terms"}
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              Terms of Use
                                            </Link>
                                            , and{" "}
                                            <Link
                                              className="cursor-pointer text-buttons"
                                              href={"/agreement"}
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              Invictus Order Application
                                              Ownership Agreement
                                            </Link>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex max-w-sm mx-auto mt-56">
                                    <button
                                      type="button"
                                      className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons  px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                      onClick={() => changeStatusModal("none")}
                                    >
                                      BACK
                                    </button>
                                    {agreeTyC ? (
                                      <button
                                        type="submit"
                                        className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                      >
                                        SUBMIT
                                      </button>
                                    ) : (
                                      <button
                                        type="submit"
                                        className="flex w-md mx-auto items-center cursor-default justify-center rounded-sm border-solid border-2 border-gray-500/40 bg-gray-500/40 px-8 py-3 text-md font-medium text-white/50 hover:bg-blues-600 md:py-4 md:px-10 "
                                      >
                                        SUBMIT
                                      </button>
                                    )}
                                  </div>
                                </form>
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
                          case 5:
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
                                    Invictus Order application failed
                                  </p>
                                </div>
                                <div className="flex max-w-sm mx-auto mt-8">
                                  <button
                                    type="button"
                                    className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                    onClick={() => setProcess(1)}
                                  >
                                    TRY AGAIN
                                  </button>
                                </div>
                              </>
                            );
                          case 6:
                            return (
                              <div className="space-y-6">
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block text-md  text-gray-300"
                                  >
                                    What is your Discord username?
                                  </label>

                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-md  bg-[#626067] text-gray-800 py-4"
                                    >
                                      {discordID}
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block text-md  text-gray-300"
                                  >
                                    What is your Twitter URL?
                                  </label>

                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-md  bg-[#626067] text-gray-800 py-4"
                                    >
                                      {twitterUrl}
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block text-md  text-gray-300"
                                  >
                                    As an Invictus Order holder, what is the one
                                    thing that you would like to see Iron Hills
                                    do that would add the most value to your
                                    life?
                                  </label>

                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-md  bg-[#626067] text-gray-800 py-4"
                                    >
                                      {valueLife}
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block text-md  text-gray-300"
                                  >
                                    How would you define &quot;success&quot; for
                                    Invictus Order 3 months from now? What about
                                    a year from now?
                                  </label>

                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-md  bg-[#626067] text-gray-800 py-4"
                                    >
                                      {successInvictus}
                                    </label>
                                  </div>
                                </div>
                                <div className="flex max-w-sm mx-auto mt-56">
                                  <button
                                    type="button"
                                    className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons  px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                    onClick={() => changeStatusModal("none")}
                                  >
                                    BACK
                                  </button>
                                  <button
                                    className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                    onClick={() => mint()}
                                  >
                                    MINT TO FINISH
                                  </button>
                                </div>
                              </div>
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
                                        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"
                                      />
                                    </svg>
                                  </p>
                                </div>
                                <div className="flex justify-center ">
                                  <p className="mx-auto justify-self-center text-white text-2xl font-semibold">
                                    You have successfully minted your Invictus
                                    Order Application!
                                  </p>
                                </div>
                                <div className="flex max-w-sm mx-auto mt-8">
                                  {userData.token ? (
                                    <div className="flex gap-2 mx-auto">
                                      <button
                                        type="button"
                                        className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons  px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                        onClick={() => [
                                          changeStatusModal("none"),
                                          setProcess(9)
                                        ]}
                                      >
                                        CLOSE
                                      </button>
                                      <Link
                                        target={"_blank"}
                                        referrerPolicy="no-referrer"
                                        className="flex w-md mx-auto items-center  justify-center  border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10"
                                        href={
                                          "https://opensea.io/assets/ethereum/0xA525eb06544E75390F71D836f6F9C9C070f8c649/" +
                                          userData.token
                                        }
                                      >
                                        VIEW ON OPENSEA
                                      </Link>
                                    </div>
                                  ) : !userData.token && tryAgain === true ? (
                                    <button
                                      type="button"
                                      className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                                      onClick={() => updateDataUser()}
                                    >
                                      RELOAD TOKEN
                                    </button>
                                  ) : (
                                    <button className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 ">
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
                          case 9:
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
                                    className="flex w-md mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
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
