import { func } from "joi";
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
} from "@heroicons/react/20/solid";
import { GetApplicationBystatusService } from "../services/getApplicationByStatusService";

export default function Terms() {
  const [statusLogin, setStatusLogin] = useState(false);
  const [applications, setApplications] = useState();

  function login(data) {
    console.log(data);
    setStatusLogin(true);
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
              <form className=" sm:flex sm:items-center">
                <div className="w-full h-8 sm:max-w-xs">
                  <input
                    type="text"
                    name="wallet"
                    className="block w-full h-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Find wallet"
                  />
                </div>
                <MagnifyingGlassIcon
                  onClick={() => alert("gg")}
                  className="ml-1.5 h-8 w-8 flex-shrink-0 hover:text-white text-buttons"
                  aria-hidden="true"
                />
              </form>
              <form className=" sm:flex sm:items-center">
                <div className="w-full h-8 sm:max-w-xs">
                  <select
                    id="location"
                    name="location"
                    className=" block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    defaultValue="Canada"
                  >
                    <option>pending</option>
                    <option>accepted</option>
                    <option>refused</option>
                    <option>all</option>
                  </select>
                </div>
                <FunnelIcon
                  onClick={() => alert("gg")}
                  className="ml-1.5 h-8 w-8 flex-shrink-0 hover:text-white text-buttons"
                  aria-hidden="true"
                />
              </form>{" "}
            </div>

            <ul
              role="list"
              className="divide-y divide-gray-800 mt-24  px-4 bg-background"
            >
              {applications.map((aplication) => (
                <li key={aplication.id}>
                  <div className="block py-4 ">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center mb-4 justify-between">
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
                              aplication.status === "acepted"
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
                              "https://discord.com/users/" + aplication.discorId
                            }
                            target="_blank"
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
