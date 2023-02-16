import Image from "next/image";
import Link from "next/link";
import heroImg from "../assets/landing/badge.png";
import heroBack from "../assets/landing/bgHero.png";

import heroMessage from "../assets/landing/message.png";

export default function Agreement() {
  return (
    <div className="relative isolate overflow-hidden h-screen bg-gray-900">
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={heroBack}
        alt="back iron hills"
      />
      <div className="absolute inset-0 bg-neutral-900/30 mix-blend-multiply" />
      <div className="grid  z-0 h-screen ">
        <main className=" relative mx-auto grid place-items-center h-screen my-auto max-w-7xl z-0 ">
          <div className="relative transform overflow-hidden  bg-background px-4 pt-5 pb-4 text-left  transition-all sm:my-8 max-w-7xl  sm:p-6">
            <div>
              <div className="mt-3 fel sm:mt-5">
                <h3 className="text-2xl font-semibold text-white">
                  Agreement for Invictus Order Application
                </h3>
                <div className="mt-2 ">
                  <div className="text-md text-white h-96 overflow-auto">
                    <p>
                      <span>Last Updated: 11 FEB 2023</span>
                    </p>
                    <p></p>
                    <p>
                      <span>
                        Definition of Personal Use: The use of the Invictus
                        Order Application Art (hereinafter referred to as
                        &ldquo;Artwork&rdquo;) for non-commercial purposes such
                        as display on personal websites, computer desktop
                        backgrounds, and personal social media accounts.
                      </span>
                    </p>
                    <p></p>
                    <p>
                      <span>
                        Ownership: The Artwork remains the sole property of Iron
                        Hills (hereinafter referred to as &lsquo;creator&rsquo;)
                        and is protected by copyright laws. No transfer of
                        ownership or copyright is granted through the use of the
                        Artwork for personal purposes.
                      </span>
                    </p>
                    <p></p>
                    <ol>
                      <li>
                        <span>
                          {" "}
                          Permitted Use: The Artwork may be used for personal
                          purposes only. Any use of the Artwork for commercial
                          purposes, including but not limited to, selling,
                          licensing, or distributing the Artwork, is strictly
                          prohibited.
                        </span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          Prohibited Use: The Artwork may not be altered,
                          modified, or used in a way that is harmful,
                          defamatory, or obscene. The Artwork may not be used to
                          promote hate, discrimination, or illegal activities.
                        </span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          Attribution: When using the Artwork for personal
                          purposes, proper credit must be given to the creator
                          of the Artwork. The credit should include the name of
                          the creator and a link to their website or social
                          media account, if available.
                        </span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          Disclaimer: The creator of the Artwork is not
                          responsible for any loss, damage, or harm resulting
                          from the use of the Artwork for personal purposes.
                        </span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          Changes to the Terms of Use: The creator of the
                          Artwork reserves the right to change these terms of
                          use at any time and without prior notice.
                        </span>
                      </li>
                    </ol>
                    <p></p>
                    <p>
                      <span>
                        By using the Artwork for personal purposes, you agree to
                        be bound by these terms of use. If you do not agree to
                        these terms, you are not authorized to use the Artwork
                        for any purpose.
                      </span>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5  flex sm:mt-6">
              <Link
                className=" max-w-sm mx-auto items-center justify-center rounded-sm border-solid border-2 border-Links border-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                href={"/"}
              >
                BACK
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
