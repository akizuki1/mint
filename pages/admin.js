import { CSVLink, CSVDownload } from "react-csv";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import heroImg from "../assets/landing/badge.png";
import heroBack from "../assets/landing/bgHero.png";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  UserIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  IdentificationIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
import { GetApplicationBystatusService } from "../services/getApplicationByStatusService";
import { GetAllApplicationService } from "../services/getAllApplicationService";
import { GetApplicationByWalletService } from "../services/getApplicationByWalletservice";

export default function Admin() {
  const [statusLogin, setStatusLogin] = useState(false);
  const [applications, setApplications] = useState();

  function login(data) {
    console.log(data);
    setStatusLogin(true);
  }

  async function getApplicationsByWallet(wallet) {
    const { status, message, data } = await GetApplicationByWalletService(
      wallet
    );
    if (status === "success") {
      setApplications(data);
    } else {
      alert(status + "  " + message);
    }
  }
  async function getApplicationsBystatus(estado) {
    const { status, message, data } = await GetApplicationBystatusService(
      estado
    );

    if (status === "success") {
      setApplications(data);
    } else {
      alert(status + "  " + message);
    }
  }

  async function getAllApplication() {
    const { status, message, data } = await GetAllApplicationService();

    if (status === "success") {
      setApplications(data);
    } else {
      alert(status + "  " + message);
    }
  }

  function filterByStatus(data) {
    if (data.status === "all") {
      getAllApplication();
    } else {
      getApplicationsBystatus(data.status);
    }
  }

  function filterByWallet(data) {
    getApplicationsByWallet(data.wallet);
  }

  useEffect(() => {
    getApplicationsBystatus("pending");
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  return statusLogin === false ? (
    <div className="relative isolate overflow-hidden h-screen bg-gray-900">
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={heroBack}
        alt="back iron hills"
      />
      <div className="absolute inset-0 bg-neutral-900/30 mix-blend-multiply" />
      <div className="grid  z-0 h-screen ">
        <main className=" relative mx-auto grid place-items-center h-sc my-auto max-w-7xl z-0 ">
          <form
            onSubmit={handleSubmit(login)}
            className="space-y-6 w-96 bg-background/90 rounded-sm p-4"
          >
            <div>
              <label className="block text-sm font-medium text-white">
                User
              </label>

              <div>
                <input
                  name="user"
                  {...register("user", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="block w-full h-10 text-white bg-application-text-bg sm:text-sm pl-2"
                />
              </div>
              {errors.user?.type === "pattern" && (
                <small className="text text-blue-400">
                  Email format incorrect
                </small>
              )}
              {errors.user?.type === "required" && (
                <small className="text text-blue-400">
                  The field cannot be empty
                </small>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Pass
              </label>

              <div>
                <input
                  type="password"
                  name="pass"
                  {...register("pass", {
                    required: true,
                  })}
                  className="block w-full h-10  text-white bg-application-text-bg sm:text-sm pl-2"
                />
              </div>
              {errors.pass?.type === "required" && (
                <small className="text text-blue-400">
                  The field cannot be empty
                </small>
              )}
            </div>

            <div className=" max-w-sm mx-auto gap-3 mt-56">
              <button
                type="submit"
                className="flex w-full mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons bg-buttons px-8 py-3 text-xl font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
              >
                SUBMIT
              </button>
              <Link
                href={"/"}
                className="flex mt-4  w-full mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons  px-8 py-3 text-xl font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
              >
                BACK
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  ) : (
    <div className="relative isolate overflow-hidden h-screen bg-gray-900">
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={heroBack}
        alt="back iron hills"
      />
      <div className="absolute inset-0 bg-neutral-900/30 mix-blend-multiply" />
      <div className="grid  z-0  max-w-7xl mx-auto">
        <div className="pt-24 flex">
          <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block">DASHBOARD</span>
          </h1>
        </div>
        {applications === undefined ? (
          <div className="pt-24 flex">
            <h4 className="text-2xl font-semibold tracking-tight text-white  sm:text-3xl lg:mt-6 xl:text-3xl">
              <span className="block">Loading</span>
            </h4>
          </div>
        ) : (
          <div className="z-50">
            <div className="flex gap-8 w-2xl bg-background p-4 mt-12 ">
              <form
                onSubmit={handleSubmit(filterByWallet)}
                className=" sm:flex sm:items-center"
              >
                <div className="w-full h-8 sm:max-w-xs">
                  <input
                    type="text"
                    name="wallet"
                    {...register("wallet", { required: true })}
                    className="block w-full h-8 text-white bg-application-text-bg sm:text-sm pl-2"
                    placeholder="Find wallet"
                  />
                  {errors.wallet?.type === "required" && (
                    <small className="text text-blue-400">
                      The field cannot be empty
                    </small>
                  )}
                  {errors.wallet?.type === "pattern" && (
                    <small className="text text-blue-400">
                      Wallet format error
                    </small>
                  )}
                </div>

                <button type="submit">
                  <MagnifyingGlassIcon
                    className="ml-1.5 h-8 w-8 flex-shrink-0 hover:text-white text-buttons"
                    aria-hidden="true"
                  />
                </button>
              </form>
              <form
                onSubmit={handleSubmit2(filterByStatus)}
                className=" sm:flex sm:items-center"
              >
                <div className="w-full h-8 sm:max-w-xs">
                  <select
                    name="status"
                    {...register2("status")}
                    className="block w-full   text-white bg-application-text-bg sm:text-sm pl-2 rounded-sm border-gray-300 py-2 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                    defaultValue="pending"
                  >
                    <option>pending</option>
                    <option>accepted</option>
                    <option>refused</option>
                    <option>all</option>
                  </select>
                </div>

                <button type="submit">
                  <FunnelIcon
                    className="ml-1.5 h-8 w-8 flex-shrink-0 hover:text-white text-buttons"
                    aria-hidden="true"
                  />
                </button>
              </form>{" "}
              <CSVLink
                data={applications}
                filename={"Invictus Order Applications.csv"}
                className=" text-white"
              >
                <div className="flex">
                  <p className="my-auto align-middle"> Download csv</p>

                  <DocumentArrowDownIcon
                    className="ml-1.5 h-8 w-8 flex-shrink-0 hover:text-white text-buttons"
                    aria-hidden="true"
                  />
                </div>
              </CSVLink>
              ;
            </div>

            <div className="divide-y divide-gray-800 mt-24   bg-background">
              <div className="mx-auto  divide-y divide-white/10">
                <dl className="mt-10 space-y-6 divide-y divide-white/10">
                  {applications.map((aplication) => (
                    <Disclosure as="div" key={aplication.id} className="pt-6">
                      {({ open }) => (
                        <>
                          <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                              <div className="px-4 py-4 w-full sm:px-6 ">
                                <div className="flex items-center mb-4 justify-between ">
                                  <p className="truncate text-xl font-medium text-white">
                                    {aplication.wallet}
                                  </p>
                                  <div className="ml-2 flex flex-shrink-0">
                                    <p
                                      className={classNames(
                                        "inline-flex py-1 rounded-md  px-2 text-md font-semibold leading-5",
                                        aplication.status === "pending"
                                          ? "bg-yellow-400 text-gray-900"
                                          : "",
                                        aplication.status === "accepted"
                                          ? "bg-green-400 text-gray-900"
                                          : "",
                                        aplication.status === "refused"
                                          ? "bg-red-400 text-gray-900"
                                          : ""
                                      )}
                                    >
                                      {aplication.status}
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-2 sm:flex  sm:justify-between">
                                  <div className="sm:flex">
                                    <a
                                      href={
                                        "https://discord.com/users/" +
                                        aplication.discorId
                                      }
                                      target="_blank"
                                      rel="noreferrer"
                                      className="flex items-center cursor-pointer text-xl text-gray-400 hover:text-white "
                                    >
                                      <UserIcon
                                        className="mr-1.5 h-8 w-8 flex-shrink-0 "
                                        aria-hidden="true"
                                      />
                                      {aplication.discorId}
                                    </a>
                                    <a
                                      href={aplication.twitterId}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="mt-2 flex items-center  cursor-pointer text-xl text-gray-400 hover:text-white sm:mt-0 sm:ml-6"
                                    >
                                      <IdentificationIcon
                                        className="mr-1.5 h-8 w-8 flex-shrink-0"
                                        aria-hidden="true"
                                      />
                                      {aplication.twitterId}
                                    </a>
                                  </div>
                                  {aplication.status === "pending" ? (
                                    <div className="mt-2 flex items-center text-xl text-white sm:mt-0">
                                      <div className="flex gap-3">
                                        Application:
                                        <HandThumbDownIcon
                                          onClick={() => alert("gg")}
                                          className="mr-1.5 h-8 w-8 flex-shrink-0 hover:text-white text-buttons"
                                          aria-hidden="true"
                                        />
                                        <HandThumbUpIcon
                                          className="mr-1.5 h-8 w-8 flex-shrink-0 hover:text-white text-buttons"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="my-auto align-middle  mr-2  flex-shrink-0">
                                {!open ? (
                                  <ChevronDownIcon
                                    className="h-8 w-8 animate-bounce"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <ChevronUpIcon
                                    className="h-8 w-8"
                                    aria-hidden="true"
                                  />
                                )}
                              </div>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel
                            as="dd"
                            className="mt-2 pr-12 px-4 py-4 w-full sm:px-6 "
                          >
                            <dt className="text-base  leading-7 text-white">
                              As an Invictus Order holder, what is the one thing
                              that you would like to see Iron Hills do that
                              would add the most value to your life?
                            </dt>
                            <dd className="mt-2 ml-4 text-base leading-7 text-gray-400">
                              {aplication.valueLife}
                            </dd>
                            <dt className="text-base mt-8  leading-7 text-white">
                              How would you define &quot;success&quot; for
                              Invictus Order 3 months from now? What about a
                              year from now?
                            </dt>
                            <dd className="mt-2 ml-4 text-base leading-7 text-gray-400">
                              {aplication.successInvictus}
                            </dd>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
