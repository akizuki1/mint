import { useState } from "react";
import ModalPolicyTermsComponent from "./modalPolicyTermsComponent";
import Link from "next/link";
export default function FooterComponent() {
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState(1);

  function changeStatusModal(status, type) {
    setOpenModal(status);
    setType(type);
  }
  return (
    <main>
      {openModal === true ? (
        <ModalPolicyTermsComponent
          handleModal={changeStatusModal}
          status={openModal}
          type={type}
        />
      ) : null}

      <footer className="">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <p className="mt-8 text-center text-base text-gray-400">
            <Link className="cursor-pointer" href={"/policy"}>
              Privacy Policy
            </Link>{" "}
            -{" "}
            <Link className="cursor-pointer" href={"/terms"}>
              Terms of Service
            </Link>{" "}
            -{" "}
            <Link
              className="cursor-pointer"
              href="https://mirror.xyz/ironhills.eth/tI53g0xxPiaYu_3Vp8oZIqPCZCfpsUnq4lpvo_YId3U"
              target="_blank"
              rel="noreferrer"
            >
              Invictus Order Application Ownership Agreement
            </Link>
          </p>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Iron Hills LLC, All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
