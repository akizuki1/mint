import { CSVLink, CSVDownload } from "react-csv";
import Image from "next/image";
import Link from "next/link";
import { ethers } from "ethers";
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
  CalendarIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
import { useConnectWallet } from "@web3-onboard/react";
import { AdminAuthService } from "../services/authService";
import useLocalStorage from "../hooks/useLocalStorage";
import { UpdateApplicationService } from "../services/updateApplicationService";

export default function Terms() {
  const [{ wallet, connecting, connected }, connect, disconnect] =
    useConnectWallet();
  const [statusLogin, setStatusLogin] = useState(false);
  const [countApplications, setCountApplications] = useState(0);
  const [filter, setFilter] = useState(undefined);
  const [aliasFilter, setAliasFilter] = useState("pending");
  const [sort, setSort] = useState("asc");
  const [applications, setApplications] = useState([]);
  const [accessToken, setAccessToken] = useLocalStorage("jwtToken", null);

  async function authAccount(provider) {
    const message = "I am an admin";

    const signature = await provider
      .getSigner(wallet.accounts[0].address)
      .signMessage(message);

    if (signature) {
      const res = await AdminAuthService(
        wallet.accounts[0].address,
        signature,
        message
      );
      if (res) {
        setAccessToken(res.accessToken);
        for (const app of res.applications) {
          app.content = JSON.parse(app.content);
        }
        setApplications(res.applications);
        setStatusLogin(true);
      }
    }
  }

  async function login() {
    await connect();
    if (wallet?.provider && !connecting) {
      const provider = new ethers.providers.Web3Provider(
        wallet.provider,
        "any"
      );

      authAccount(provider);
    }
  }

  function csvParse(applications) {
    const csv = [];
    const headers = [
      "wallet",
      "discordId",
      "twitter",
      "question1",
      "question2",
      "createdAt",
      "state",
    ];
    csv.push(headers);
    for (const application of applications) {
      const content = JSON.parse(JSON.stringify(application.content));
      const state =
        application.state === undefined
          ? "pending"
          : application.state
          ? "approved"
          : "rejected";
      const row = [
        application.wallet,
        content.discordID,
        content.twitterUrl,
        content.valueLife,
        content.successInvictus,
        application.createdAt,
        state,
      ];
      csv.push(row);
    }
    return csv;
  }

  async function updateApplication(application, state) {
    let buffer = [...applications];

    application.state = state;
    await UpdateApplicationService(application, accessToken);
    buffer.map((a) =>
      a.wallet == application.wallet ? { ...a, state: state } : ""
    );

    setApplications(buffer);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function filterByWallet(data) {
    setFilter(data.wallet.toLowerCase());
  }
  function filterByState(value) {
    if (value === "rejected") {
      setFilter(false);
    }
    if (value === "approved") {
      setFilter(true);
    }
    if (value === "all") {
      setFilter("all");
    }
    if (value === "pending") {
      setFilter(undefined);
    }
  }

  function sortDate() {
    if (sort === "asc") {
      let buffer = [...applications];

      let bufferDate = buffer.map((obj) => {
        return { ...obj, date: new Date(obj.createdAt) };
      });
      const sortedAsc = bufferDate.sort(
        (objA, objB) => Number(objA.date) - Number(objB.date)
      );
      setApplications(sortedAsc);
    } else {
      let buffer = [...applications];

      let bufferDate = buffer.map((obj) => {
        return { ...obj, date: new Date(obj.createdAt) };
      });
      const sortedAsc = bufferDate.sort(
        (objA, objB) => Number(objB.date) - Number(objA.date)
      );
      setApplications(sortedAsc);
    }
  }

  useEffect(() => {
    if (filter === "all") {
      setCountApplications(applications.length);
    } else {
      if (filter === true || filter === false || filter === undefined) {
        setCountApplications(
          applications.filter((x) => x.state === filter).length
        );
      } else {
        setCountApplications(
          applications.filter((x) => x.wallet === filter).length
        );
      }
    }
  }, [filter, applications]);

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
        <main className=" relative mx-auto grid place-items-center h-screen my-auto max-w-7xl z-0 ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
            className="space-y-6 w-96 bg-background/90 rounded-sm p-4"
          >
            <div className=" max-w-sm mx-auto gap-3 mt-56">
              <button
                type="submit"
                className="flex w-full mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons bg-buttons px-8 py-3 text-xl font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
              >
                CONNECT
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  ) : (
    <div className="relative isolate overflow-hidden   bg-gray-900">
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
                    className="ml-1.5 h-6 w-6 flex-shrink-0 hover:text-white text-buttons"
                    aria-hidden="true"
                  />
                </button>
              </form>
              <div
                // onSubmit={handleSubmit2(filterByStatus)}
                className=" sm:flex sm:items-center"
              >
                <div className="w-full h-8 sm:max-w-xs">
                  <select
                    value={aliasFilter}
                    onChange={(e) => [
                      filterByState(e.target.value),
                      setAliasFilter(e.target.value),
                    ]}
                    className="block w-full text-white bg-application-text-bg
                    sm:text-sm pl-2 rounded-sm border-gray-300 py-2 pr-10
                    text-base focus:border-indigo-500 focus:outline-none
                    focus:ring-indigo-500 "
                  >
                    <option>pending</option>
                    <option>approved</option>
                    <option>rejected</option>
                    <option>all</option>
                  </select>
                </div>

                <button type="submit">
                  <FunnelIcon
                    className="ml-1.5 h-6 w-6 flex-shrink-0 hover:text-white text-buttons"
                    aria-hidden="true"
                  />
                </button>
              </div>
              {sort === "asc" ? (
                <div className=" sm:flex sm:items-center">
                  <div className="w-full h-8 text-white sm:max-w-xs">
                    Sort date desc
                  </div>

                  <button onClick={() => [setSort("desc"), sortDate()]}>
                    <BarsArrowDownIcon
                      className="ml-1.5 h-6 w-6 flex-shrink-0 hover:text-white text-buttons"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              ) : (
                <div className=" sm:flex sm:items-center">
                  <div className="w-full h-8 text-white sm:max-w-xs">
                    Sort date asc
                  </div>

                  <button onClick={() => [setSort("asc"), sortDate()]}>
                    <BarsArrowUpIcon
                      className="ml-1.5 h-6 w-6 flex-shrink-0 hover:text-white text-buttons"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              )}

              <CSVLink
                data={csvParse(applications)}
                filename={"Invictus Order Applications.csv"}
                className=" text-white"
              >
                <div className="flex">
                  <p className="my-auto align-middle"> Download csv</p>
                  <DocumentArrowDownIcon
                    className="ml-1.5 h-6 w-6 flex-shrink-0 hover:text-white text-buttons"
                    aria-hidden="true"
                  />
                </div>
              </CSVLink>
              <div className=" sm:flex sm:items-center">
                <div className="w-full h-8 text-white sm:max-w-xs">
                  Count Applications
                </div>
                <div className="h-8 ml-2 text-buttons sm:max-w-xs">
                  {countApplications}
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-800 mt-14 overflow-scroll overflow-x-hidden  min-h-screen h-4/6  bg-background">
              <div className="mx-auto  divide-y divide-white/10">
                <dl className=" space-y-3 divide-y divide-white/10">
                  {applications.map((application) =>
                    application.state === filter ||
                    filter === "all" ||
                    application.wallet === filter ? (
                      <Disclosure as="div" key={application._id}>
                        {({ open }) => (
                          <>
                            <dt>
                              <div className="flex w-full items-start justify-between text-left text-white">
                                <div className="px-4 py-4 w-full sm:px-6 ">
                                  <div className="flex items-center mb-4 justify-between ">
                                    <p className="truncate text-xl font-medium text-white">
                                      {application.wallet}
                                    </p>

                                    <div className="ml-2 flex flex-shrink-0">
                                      <p
                                        className={classNames(
                                          "inline-flex py-1 rounded-md  px-2 text-md font-semibold leading-5",
                                          application.state === undefined
                                            ? "bg-yellow-400 text-gray-900"
                                            : "",
                                          application.state === true
                                            ? "bg-green-400 text-gray-900"
                                            : "",
                                          application.state === false
                                            ? "bg-red-400 text-gray-900"
                                            : ""
                                        )}
                                      >
                                        {application.state === undefined
                                          ? "pending"
                                          : application.state
                                          ? "approved"
                                          : "rejected"}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex ">
                                      <p className="flex items-centertext-md text-white ">
                                        <CalendarIcon
                                          className="mr-1.5 h-6 w-6 flex-shrink-0 "
                                          aria-hidden="true"
                                        />
                                        {application.createdAt}
                                      </p>

                                      <a
                                        href={
                                          "https://discord.com/users/" +
                                          application.content.discordID
                                        }
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-2 flex items-center  cursor-pointer text-md text-buttons hover:text-white sm:mt-0 sm:ml-6"
                                      >
                                        <UserIcon
                                          className="mr-1.5 h-6 w-6 flex-shrink-0"
                                          aria-hidden="true"
                                        />
                                        {application.content.discordID}
                                      </a>
                                      <a
                                        href={application.content.twitterUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-2 flex items-center  cursor-pointer text-md text-buttons hover:text-white sm:mt-0 sm:ml-6"
                                      >
                                        <IdentificationIcon
                                          className="mr-1.5 h-6 w-6 flex-shrink-0"
                                          aria-hidden="true"
                                        />
                                        {application.content.twitterUrl}
                                      </a>
                                    </div>

                                    <div className="mt-2 flex items-center text-md text-white sm:mt-0">
                                      <div className="flex gap-3">
                                        Application:
                                        <HandThumbDownIcon
                                          onClick={() =>
                                            updateApplication(
                                              application,
                                              false
                                            )
                                          }
                                          className="mr-1.5 h-6 w-6 flex-shrink-0 hover:text-white text-buttons"
                                          aria-hidden="true"
                                        />
                                        <HandThumbUpIcon
                                          onClick={() =>
                                            updateApplication(application, true)
                                          }
                                          className="mr-1.5 h-6 w-6 flex-shrink-0 hover:text-white text-buttons"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Disclosure.Button className="my-auto align-middle  mr-2  flex-shrink-0">
                                  {!open ? (
                                    <ChevronDownIcon
                                      className="h-6 w-6 animate-bounce"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ChevronUpIcon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  )}
                                </Disclosure.Button>
                              </div>
                            </dt>
                            <Disclosure.Panel
                              as="dd"
                              className="mt-2 pr-12 px-4 py-4 w-full sm:px-6 "
                            >
                              <dt className="text-base  leading-7 text-white">
                                As an Invictus Order holder, what is the one
                                thing that you would like to see Iron Hills do
                                that would add the most value to your life?
                              </dt>
                              <dd className="mt-2 ml-4 text-base leading-7 text-gray-400">
                                {application.content.valueLife}
                              </dd>
                              <dt className="text-base mt-8  leading-7 text-white">
                                How would you define &quot;success&quot; for
                                Invictus Order 3 months from now? What about a
                                year from now?
                              </dt>
                              <dd className="mt-2 ml-4 text-base leading-7 text-gray-400">
                                {application.content.successInvictus}
                              </dd>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : null
                  )}
                </dl>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
