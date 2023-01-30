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
          <div className="fixed inset-0 bg-[#100d0a] bg-opacity-90 transition-opacity" />
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
                <Dialog.Panel className="relative transform overflow-hidden  bg-[#100d0a] px-4 pt-5 pb-4 text-left  transition-all sm:my-8 max-w-7xl  sm:p-6">
                  <div>
                    <div className="mt-3 fel sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold text-white"
                      >
                        Privacy Policy
                      </Dialog.Title>
                      <div className="mt-2 ">
                        <div className="text-sm text-white max-h-96 overflow-auto">
                          <p>
                            <span>WEBSITE PRIVACY NOTICE</span>
                          </p>
                          <p>
                            <span>Last updated January 01, 2023</span>
                          </p>
                          <p>
                            <span>
                              This privacy notice for Iron Hills LLC
                              (&apos;Company,&apos; &apos;we,&apos;
                              &apos;us,&apos; or &apos;our&apos;), describes how
                              and why we might collect, store, use, and/or share
                              (&apos;process&apos;) your information when you
                              use our services (&apos;Services&apos;), such as
                              when you:&nbsp;
                            </span>
                          </p>
                          <ul>
                            <li aria-level="1">
                              <span>
                                Visit our website at
                                http://www.knightsbyironhills.com, or any
                                website of ours that links to this privacy
                                notice&nbsp;
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                Engage with us in other related ways, including
                                any sales, marketing, or events
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                We do not control the blockchain protocol on
                                which fungible tokens and various non-fungible
                                tokens (&ldquo;NFTs&rdquo;) are tradable or
                                useable and cannot control activity and data on
                                the Protocol, the validation of transactions on
                                the Protocol, or use of the Protocol.
                              </span>
                            </li>
                          </ul>
                          <p>
                            <span>
                              Questions or concerns? Reading this privacy notice
                              will help you understand your privacy rights and
                              choices. If you do not agree with our policies and
                              practices, please do not use our Services. If you
                              still have any questions or concerns, please
                              contact us at contact@ironhills.io.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <p>
                            <span>SUMMARY OF KEY POINTS</span>
                          </p>
                          <p>
                            <span>
                              This summary provides key points from our privacy
                              notice.
                            </span>
                          </p>
                          <p>
                            <span>
                              What personal information do we process? When you
                              visit, use, or navigate our Services, we may
                              process personal information depending on how you
                              interact with Iron Hills LLC and the Services, the
                              choices you make, and the products and features
                              you use.
                            </span>
                          </p>
                          <p>
                            <span>
                              Do we process any sensitive personal information?
                              We do not process sensitive personal information.
                            </span>
                          </p>
                          <p>
                            <span>
                              Do we receive any information from third parties?
                              We do not receive any information from third
                              parties.
                            </span>
                          </p>
                          <p>
                            <span>
                              How do we process your information? We process
                              your information to provide, improve, and
                              administer our Services, communicate with you, for
                              security and fraud prevention, and to comply with
                              law. We may also process your information for
                              other purposes with your consent. We process your
                              information only when we have a valid legal reason
                              to do so.
                            </span>
                          </p>
                          <p>
                            <span>
                              In what situations and with which parties do we
                              share personal information?
                            </span>
                          </p>
                          <p>
                            <span>
                              We may share information in specific situations
                              and with specific third parties.
                            </span>
                          </p>
                          <p>
                            <span>
                              How do we keep your information safe? We have
                              organizational and technical processes and
                              procedures in place to protect your personal
                              information. However, no electronic transmission
                              over the internet or information storage
                              technology can be guaranteed to be 100% secure, so
                              we cannot promise or guarantee that hackers,
                              cybercriminals, or other unauthorized third
                              parties will not be able to defeat our security
                              and improperly collect, access, steal, or modify
                              your information.
                            </span>
                          </p>
                          <p>
                            <span>
                              What are your rights? Depending on where you are
                              located geographically, the applicable privacy law
                              may mean you have certain rights regarding your
                              personal information.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <p>
                            <span>
                              How do you exercise your rights? The easiest way
                              to exercise your rights is by filling out our data
                              subject request form available here, or by
                              contacting us. We will consider and act upon any
                              request in accordance with applicable data
                              protection laws.
                            </span>
                          </p>
                          <p>
                            <span>
                              Want to learn more about what Iron Hills LLC does
                              with any information we collect? Click here to
                              review the notice in full.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <ol>
                            <li>
                              <span> </span>
                              <span>WHAT INFORMATION DO WE COLLECT?</span>
                            </li>
                          </ol>
                          <p>&nbsp;</p>
                          <p>
                            <span>Personal information you disclose to us</span>
                          </p>
                          <p>
                            <span>
                              In Short: We collect personal information that you
                              provide to us.
                            </span>
                          </p>
                          <p>
                            <span>
                              We collect personal information that you
                              voluntarily provide to us when you express an
                              interest in obtaining information about us or our
                              products and Services, when you participate in
                              activities on the Services, or otherwise when you
                              contact us.
                            </span>
                          </p>
                          <p>
                            <span>
                              Personal Information Provided by You. The personal
                              information that we collect depends on the context
                              of your interactions with us and the Services, the
                              choices you make, and the products and features
                              you use. The personal information we collect may
                              include the following:
                            </span>
                          </p>
                          <ul>
                            <li aria-level="1">
                              <span>Twitter Username</span>
                            </li>
                            <li aria-level="1">
                              <span>Discord Username</span>
                            </li>
                            <li aria-level="1">
                              <span>Ethereum Wallet Address</span>
                            </li>
                          </ul>
                          <p>
                            <span>
                              Your Communications with Us. We may collect
                              personal information, such as email address, phone
                              number or mailing address when you request
                              information about our Services, register for our
                              newsletter, or otherwise communicate with us.
                            </span>
                          </p>
                          <p>
                            <span>
                              Sweepstakes, Giveaways or Contests. We may collect
                              personal information you provide for any
                              sweepstakes, giveaways or contests that we offer.
                              In some jurisdictions, we are required to publicly
                              share information of sweepstakes and contest
                              winners.
                            </span>
                          </p>
                          <p>
                            <span>
                              Sensitive Information. We do not process sensitive
                              information.
                            </span>
                          </p>
                          <p>
                            <span>
                              Payment Data. Purchases, Wallet and Transaction
                              Information. In order to engage in certain
                              transactions or purchases on the Services, you may
                              need to provide us or our third-party payment
                              processors with your payment information and allow
                              us to connect to your digital wallet by providing
                              us with your public wallet address. We will never
                              ask you or collect your private keys. We do not
                              directly collect or store any payment card
                              information entered through our Services or access
                              your digital wallet, but we may receive from our
                              third-party payment processing providers
                              information associated with your payment card
                              information (e.g., your billing details). We may
                              collect data necessary to process your payment if
                              you make purchases, such as your payment
                              instrument number, and the security code
                              associated with your payment instrument. All
                              payment data is stored by MetaMask/Consensys or
                              Crossmint. You may find their privacy notice
                              link(s) here:
                              https://consensys.net/privacy-policy/,
                              https://www.crossmint.io/privacy-policy.
                            </span>
                          </p>
                          <p>
                            <span>
                              All personal information that you provide to us
                              must be true, complete, and accurate, and you must
                              notify us of any changes to such personal
                              information.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <ol start="2">
                            <li>
                              <span> </span>
                              <span>HOW DO WE PROCESS YOUR INFORMATION?</span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              In Short: We process your information to provide,
                              improve, and administer our Services, communicate
                              with you, for security and fraud prevention, and
                              to comply with law. We may also process your
                              information for other purposes with your consent.
                            </span>
                          </p>
                          <p>
                            <span>
                              We process your personal information for a variety
                              of reasons, depending on how you interact with our
                              Services, including:
                            </span>
                          </p>
                          <ul>
                            <li aria-level="1">
                              <span>
                                To save or protect an individual&lsquo;s vital
                                interest. We may process your information when
                                necessary to save or protect an
                                individual&rsquo;s vital interest, such as to
                                prevent harm.
                              </span>
                            </li>
                          </ul>
                          <p>
                            <br />
                            <br />
                          </p>
                          <ol start="3">
                            <li>
                              <span> </span>
                              <span>
                                WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
                                INFORMATION?
                              </span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              In Short: We only process your personal
                              information when we believe it is necessary and we
                              have a valid legal reason (i.e., legal basis) to
                              do so under applicable law, like with your
                              consent, to comply with laws, to provide you with
                              services to enter into or fulfill our contractual
                              obligations, to protect your rights, or to fulfill
                              our legitimate business interests.
                            </span>
                          </p>
                          <p>
                            <span>
                              If you are located in the EU or UK, this section
                              applies to you.
                            </span>
                          </p>
                          <p>
                            <span>
                              The General Data Protection Regulation (GDPR) and
                              UK GDPR require us to explain the valid legal
                              bases we rely on in order to process your personal
                              information. As such, we may rely on the following
                              legal bases to process your personal information:
                            </span>
                          </p>
                          <ul>
                            <li aria-level="1">
                              <span>
                                Consent. We may process your information if you
                                have given us permission (i.e., consent) to use
                                your personal information for a specific
                                purpose. You can withdraw your consent at any
                                time. Click here to learn more.
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                Legal Obligations. We may process your
                                information where we believe it is necessary for
                                compliance with our legal obligations, such as
                                to cooperate with a law enforcement body or
                                regulatory agency, exercise or defend our legal
                                rights, or disclose your information as evidence
                                in litigation in which we are involved.
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                Vital Interests. We may process your information
                                where we believe it is necessary to protect your
                                vital interests or the vital interests of a
                                third party, such as situations involving
                                potential threats to the safety of any person.
                              </span>
                            </li>
                          </ul>
                          <p>
                            <span>
                              If you are located in Canada, this section applies
                              to you.
                            </span>
                          </p>
                          <p>
                            <span>
                              We may process your information if you have given
                              us specific permission (i.e., express consent) to
                              use your personal information for a specific
                              purpose, or in situations where your permission
                              can be inferred (i.e., implied consent). You can
                              withdraw your consent at any time. Click here to
                              learn more.
                            </span>
                          </p>
                          <p>
                            <span>
                              In some exceptional cases, we may be legally
                              permitted under applicable law to process your
                              information without your consent, including, for
                              example:
                            </span>
                          </p>
                          <ul>
                            <li aria-level="1">
                              <span>
                                If collection is clearly in the interests of an
                                individual and consent cannot be obtained in a
                                timely way
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                For investigations and fraud detection and
                                prevention
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                For business transactions provided certain
                                conditions are met
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                If it is contained in a witness statement and
                                the collection is necessary to assess, process,
                                or settle an insurance claim
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                For identifying injured, ill, or deceased
                                persons and communicating with next of kin
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                If we have reasonable grounds to believe an
                                individual has been, is, or may be victim of
                                financial abuse
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                If it is reasonable to expect collection and use
                                with consent would compromise the availability
                                or the accuracy of the information and the
                                collection is reasonable for purposes related to
                                investigating a breach of an agreement or a
                                contravention of the laws of Canada or a
                                province
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                If disclosure is required to comply with a
                                subpoena, warrant, court order, or rules of the
                                court relating to the production of records
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                If it was produced by an individual in the
                                course of their employment, business, or
                                profession and the collection is consistent with
                                the purposes for which the information was
                                produced
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                If the collection is solely for journalistic,
                                artistic, or literary purposes
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                If the information is publicly available and is
                                specified by the regulations
                              </span>
                            </li>
                          </ul>
                          <p>&nbsp;</p>
                          <ol start="4">
                            <li>
                              <span> </span>
                              <span>
                                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                                INFORMATION?
                              </span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              In Short: We may share information in specific
                              situations described in this section and/or with
                              the following third parties.
                            </span>
                          </p>
                          <p>
                            <span>
                              We may need to share your personal information in
                              the following situations:
                            </span>
                          </p>
                          <ul>
                            <li aria-level="1">
                              <span>
                                Business Transfers. We may share or transfer
                                your information in connection with, or during
                                negotiations of, any merger, sale of company
                                assets, financing, or acquisition of all or a
                                portion of our business to another company.
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                Business Partners. We may share your information
                                with our business partners to offer you certain
                                products, services, or promotions.
                              </span>
                            </li>
                          </ul>
                          <p>&nbsp;</p>
                          <ol start="5">
                            <li>
                              <span> </span>
                              <span>HOW LONG DO WE KEEP YOUR INFORMATION?</span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              In Short: We keep your information for as long as
                              necessary to fulfill the purposes outlined in this
                              privacy notice unless otherwise required by law.
                            </span>
                          </p>
                          <p>
                            <span>
                              We will only keep your personal information for as
                              long as it is necessary for the purposes set out
                              in this privacy notice, unless a longer retention
                              period is required or permitted by law (such as
                              tax, accounting, or other legal requirements).
                            </span>
                          </p>
                          <p>
                            <span>
                              When we have no ongoing legitimate business need
                              to process your personal information, we will
                              either delete or anonymize such information, or,
                              if this is not possible (for example, because your
                              personal information has been stored in backup
                              archives), then we will securely store your
                              personal information and isolate it from any
                              further processing until deletion is possible.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <ol start="6">
                            <li>
                              <span> </span>
                              <span>HOW DO WE KEEP YOUR INFORMATION SAFE?</span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              In Short: We aim to protect your personal
                              information through a system of organizational and
                              technical security measures.
                            </span>
                          </p>
                          <p>
                            <span>
                              We have implemented appropriate and reasonable
                              technical and organizational security measures
                              designed to protect the security of any personal
                              information we process. However, despite our
                              safeguards and efforts to secure your information,
                              no electronic transmission over the Internet or
                              information storage technology can be guaranteed
                              to be 100% secure, so we cannot promise or
                              guarantee that hackers, cybercriminals, or other
                              unauthorized third parties will not be able to
                              defeat our security and improperly collect,
                              access, steal, or modify your information.
                              Although we will do our best to protect your
                              personal information, transmission of personal
                              information to and from our Services is at your
                              own risk. You should only access the Services
                              within a secure environment.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <ol start="7">
                            <li>
                              <span> </span>
                              <span>
                                DO WE COLLECT INFORMATION FROM MINORS?
                              </span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              In Short: We do not knowingly collect data from or
                              market to children under 18 years of age.
                            </span>
                          </p>
                          <p>
                            <span>
                              We do not knowingly solicit data from or market to
                              children under 18 years of age. By using the
                              Services, you represent that you are at least 18
                              or that you are the parent or guardian of such a
                              minor and consent to such minor dependent&rsquo;s
                              use of the Services. If we learn that personal
                              information from users less than 18 years of age
                              has been collected, we will deactivate the account
                              and take reasonable measures to promptly delete
                              such data from our records. If you become aware of
                              any data we may have collected from children under
                              age 18, please contact us at contact@ironhills.io.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <ol start="8">
                            <li>
                              <span> </span>
                              <span>WHAT ARE YOUR PRIVACY RIGHTS?</span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              In Short: In some regions, such as the European
                              Economic Area (EEA), United Kingdom (UK), and
                              Canada, you have rights that allow you greater
                              access to and control over your personal
                              information. You may review, change, or terminate
                              your account at any time.
                            </span>
                          </p>
                          <p>
                            <span>
                              In some regions (like the EEA, UK, and Canada),
                              you have certain rights under applicable data
                              protection laws. These may include the right (i)
                              to request access and obtain a copy of your
                              personal information, (ii) to request
                              rectification or erasure; (iii) to restrict the
                              processing of your personal information; and (iv)
                              if applicable, to data portability. In certain
                              circumstances, you may also have the right to
                              object to the processing of your personal
                              information. You can make such a request by
                              contacting us by using the contact details
                              provided in the section &apos;HOW CAN YOU CONTACT
                              US ABOUT THIS NOTICE?&apos; below.
                            </span>
                          </p>
                          <p>
                            <span>
                              We will consider and act upon any request in
                              accordance with applicable data protection laws.
                            </span>
                          </p>
                          <p>
                            <span>
                              If you are located in the EEA or UK and you
                              believe we are unlawfully processing your personal
                              information, you also have the right to complain
                              to your local data protection supervisory
                              authority. You can find their contact details
                              here:
                              https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
                            </span>
                          </p>
                          <p>
                            <span>
                              If you are located in Switzerland, the contact
                              details for the data protection authorities are
                              available here:
                              https://www.edoeb.admin.ch/edoeb/en/home.html.
                            </span>
                          </p>
                          <p>
                            <span>
                              Withdrawing your consent: If we are relying on
                              your consent to process your personal information,
                              which may be express and/or implied consent
                              depending on the applicable law, you have the
                              right to withdraw your consent at any time. You
                              can withdraw your consent at any time by
                              contacting us by using the contact details
                              provided in the section &apos;HOW CAN YOU CONTACT
                              US ABOUT THIS NOTICE?&apos; below.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <p>
                            <span>
                              However, please note that this will not affect the
                              lawfulness of the processing before its withdrawal
                              nor, when applicable law allows, will it affect
                              the processing of your personal information
                              conducted in reliance on lawful processing grounds
                              other than consent.
                            </span>
                          </p>
                          <p>
                            <span>
                              If you have questions or comments about your
                              privacy rights, you may email us at
                              contact@ironhills.io.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <ol start="9">
                            <li>
                              <span> </span>
                              <span>CONTROLS FOR DO-NOT-TRACK FEATURES</span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              Most web browsers and some mobile operating
                              systems and mobile applications include a
                              Do-Not-Track (&apos;DNT&apos;) feature or setting
                              you can activate to signal your privacy preference
                              not to have data about your online browsing
                              activities monitored and collected. At this stage
                              no uniform technology standard for recognizing and
                              implementing DNT signals has been finalized. As
                              such, we do not currently respond to DNT browser
                              signals or any other mechanism that automatically
                              communicates your choice not to be tracked online.
                              If a standard for online tracking is adopted that
                              we must follow in the future, we will inform you
                              about that practice in a revised version of this
                              privacy notice.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <ol start="10">
                            <li>
                              <span> </span>
                              <span>
                                DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY
                                RIGHTS?
                              </span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              In Short: Yes, if you are a resident of
                              California, you are granted specific rights
                              regarding access to your personal information.
                            </span>
                          </p>
                          <p>
                            <span>
                              California Civil Code Section 1798.83, also known
                              as the &apos;Shine The Light&apos; law, permits
                              our users who are California residents to request
                              and obtain from us, once a year and free of
                              charge, information about categories of personal
                              information (if any) we disclosed to third parties
                              for direct marketing purposes and the names and
                              addresses of all third parties with which we
                              shared personal information in the immediately
                              preceding calendar year. If you are a California
                              resident and would like to make such a request,
                              please submit your request in writing to us using
                              the contact information provided below.
                            </span>
                          </p>
                          <p>
                            <span>
                              If you are under 18 years of age, reside in
                              California, and have a registered account with
                              Services, you have the right to request removal of
                              unwanted data that you publicly post on the
                              Services. To request removal of such data, please
                              contact us
                            </span>
                          </p>
                          <p>
                            <span>
                              using the contact information provided below and
                              include the email address associated with your
                              account and a statement that you reside in
                              California. We will make sure the data is not
                              publicly displayed on the Services, but please be
                              aware that the data may not be completely or
                              comprehensively removed from all our systems
                              (e.g., backups, etc.).
                            </span>
                          </p>
                          <p>
                            <span>CCPA Privacy Notice</span>
                          </p>
                          <p>
                            <span>
                              The California Code of Regulations defines a
                              &apos;resident&apos; as:
                            </span>
                          </p>
                          <p>
                            <span>(1)</span>
                            <span> </span>
                            <span>
                              every individual who is in the State of California
                              for other than a temporary or transitory purpose
                              and
                            </span>
                          </p>
                          <p>
                            <span>(2)</span>
                            <span> </span>
                            <span>
                              every individual who is domiciled in the State of
                              California who is outside the State of California
                              for a temporary or transitory purpose
                            </span>
                          </p>
                          <p>
                            <span>
                              All other individuals are defined as
                              &apos;non-residents.&apos;
                            </span>
                          </p>
                          <p>
                            <span>
                              If this definition of&apos;resident&apos; applies
                              to you, we must adhere to certain rights and
                              obligations regarding your personal information.
                            </span>
                          </p>
                          <p>
                            <span>
                              What categories of personal information do we
                              collect?
                            </span>
                          </p>
                          <p>
                            <span>
                              We have collected the following categories of
                              personal information in the past twelve
                            </span>
                          </p>
                          <p>
                            <span>(12) months:</span>
                          </p>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <p>
                                    <strong>Category</strong>
                                  </p>
                                </td>
                                <td>
                                  <p>
                                    <strong>Examples</strong>
                                  </p>
                                </td>
                                <td>
                                  <p>
                                    <strong>Collected</strong>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <br />
                                  <br />
                                  <br />
                                  <p>
                                    <span>A. Identifiers</span>
                                  </p>
                                </td>
                                <td>
                                  <p>
                                    <span>
                                      Contact details, such as real name, alias,
                                      postal address, telephone or mobile
                                      contact number, unique personal
                                      identifier, online identifier, Internet
                                      Protocol address,
                                    </span>
                                  </p>
                                  <p>
                                    <span>email address, and account name</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <br />
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    <span>
                                      B. Personal information categories listed
                                      in the California Customer
                                    </span>
                                  </p>
                                  <p>
                                    <span>Records statute</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>
                                      Name, contact information, education,
                                      employment, employment history, and
                                      financial information
                                    </span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    <span>
                                      C. Protected classification
                                      characteristics under
                                    </span>
                                  </p>
                                  <p>
                                    <span>California or federal law</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>Gender and date of birth</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <br />
                                  <p>
                                    <span>D. Commercial information</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>
                                      Transaction information, purchase history,
                                      financial details, and payment information
                                    </span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <br />
                                  <p>
                                    <span>E. Biometric information</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>Fingerprints and voiceprints</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <br />
                                  <p>
                                    <span>
                                      F. Internet or other similar network
                                      activity
                                    </span>
                                  </p>
                                </td>
                                <td>
                                  <p>
                                    <span>
                                      Browsing history, search history, online
                                      behavior, interest data, and interactions
                                      with our and other websites, applications,
                                    </span>
                                  </p>
                                  <p>
                                    <span>systems, and advertisements</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <br />
                                  <p>
                                    <span>G. Geolocation data</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>Device location</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    <span>
                                      H. Audio, electronic, visual, thermal,
                                      olfactory, or similar
                                    </span>
                                  </p>
                                  <p>
                                    <span>information</span>
                                  </p>
                                </td>
                                <td>
                                  <p>
                                    <span>
                                      Images and audio, video or call recordings
                                      created in connection with our business
                                    </span>
                                  </p>
                                  <p>
                                    <span>activities</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <br />
                                  <p>
                                    <span>
                                      I. Professional or employment-related
                                      information
                                    </span>
                                  </p>
                                </td>
                                <td>
                                  <p>
                                    <span>
                                      Business contact details in order to
                                      provide you our Services at a business
                                      level or job title, work history, and
                                      professional qualifications if you apply
                                      for
                                    </span>
                                  </p>
                                  <p>
                                    <span>a job with us</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <br />
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <br />
                                  <p>
                                    <span>J. Education Information</span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>
                                      Student records and directory information
                                    </span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    <span>
                                      K. Inferences drawn from other personal
                                      information
                                    </span>
                                  </p>
                                </td>
                                <td>
                                  <p>
                                    <span>
                                      Inferences drawn from any of the collected
                                      personal information listed above to
                                      create a profile or summary about, for
                                      example,
                                    </span>
                                  </p>
                                </td>
                                <td>
                                  <br />
                                  <p>
                                    <span>NO</span>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p>
                            <br />
                            <br />
                          </p>
                          <p>
                            <span>
                              We may also collect other personal information
                              outside of these categories through instances
                              where you interact with us in person, online, or
                              by phone or mail in the context of:
                            </span>
                          </p>
                          <ul>
                            <li aria-level="1">
                              <span>
                                Receiving help through our customer support
                                channels;
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                Participation in customer surveys or contests;
                                and
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                Facilitation in the delivery of our Services and
                                to respond to your inquiries.
                              </span>
                            </li>
                          </ul>
                          <p>
                            <span>
                              How do we use and share your personal information?
                            </span>
                          </p>
                          <p>
                            <span>
                              More information about our data collection and
                              sharing practices can be found in this privacy
                              notice.
                            </span>
                          </p>
                          <p>
                            <span>
                              You may contact us by email at
                              contact@ironhills.io, or by referring to the
                              contact details at the bottom of this document.
                            </span>
                          </p>
                          <p>
                            <span>
                              If you are using an authorized agent to exercise
                              your right to opt out we may deny a request if the
                              authorized agent does not submit proof that they
                              have been validly authorized to act on your
                              behalf.
                            </span>
                          </p>
                          <p>
                            <span>
                              Will your information be shared with anyone else?
                            </span>
                          </p>
                          <p>
                            <span>
                              We may disclose your personal information with our
                              service providers pursuant to a written contract
                              between us and each service provider. Each service
                              provider is a for- profit entity that processes
                              the information on our behalf, following the same
                              strict privacy protection obligations mandated by
                              the CCPA.
                            </span>
                          </p>
                          <p>
                            <span>
                              We may use your personal information for our own
                              business purposes, such as for undertaking
                              internal research for technological development
                              and demonstration. This is not considered to be
                              &apos;selling&apos; of your personal information.
                            </span>
                          </p>
                          <p>
                            <span>
                              Iron Hills LLC has not disclosed, sold, or shared
                              any personal information to third parties for a
                              business or commercial purpose in the preceding
                              twelve (12) months. Iron Hills LLC will not sell
                              or share personal information in the future
                              belonging to website visitors, users, and other
                              consumers.
                            </span>
                          </p>
                          <p>
                            <span>
                              Your rights with respect to your personal data
                            </span>
                          </p>
                          <p>
                            <span>
                              Right to request deletion of the data &mdash;
                              Request to delete
                            </span>
                          </p>
                          <p>
                            <span>
                              You can ask for the deletion of your personal
                              information. If you ask us to delete your personal
                              information, we will respect your request and
                              delete your personal information, subject to
                              certain exceptions provided by law, such as (but
                              not limited to) the exercise by another consumer
                              of his or her right to free speech, our compliance
                              requirements resulting from a legal obligation, or
                              any processing that may be required to protect
                              against illegal activities.
                            </span>
                          </p>
                          <p>
                            <span>
                              Right to be informed &mdash; Request to know
                            </span>
                          </p>
                          <p>
                            <span>
                              Depending on the circumstances, you have a right
                              to know:
                            </span>
                          </p>
                          <ul>
                            <li aria-level="1">
                              <span>
                                whether we collect and use your personal
                                information;
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                the categories of personal information that we
                                collect;
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                the purposes for which the collected personal
                                information is used;
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                whether we sell or share personal information to
                                third parties;
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                the categories of personal information that we
                                sold, shared, or disclosed for a business
                                purpose;
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                the categories of third parties to whom the
                                personal information was sold, shared, or
                                disclosed for a business purpose;
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                the business or commercial purpose for
                                collecting, selling, or sharing personal
                                information; and
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                the specific pieces of personal information we
                                collected about you.
                              </span>
                            </li>
                          </ul>
                          <p>&nbsp;</p>
                          <p>
                            <span>
                              In accordance with applicable law, we are not
                              obligated to provide or delete consumer
                              information that is de-identified in response to a
                              consumer request or to re- identify individual
                              data to verify a consumer request.
                            </span>
                          </p>
                          <p>
                            <span>
                              Right to Non-Discrimination for the Exercise of a
                              Consumer&rsquo;s Privacy Rights We will not
                              discriminate against you if you exercise your
                              privacy rights.
                            </span>
                          </p>
                          <p>
                            <span>
                              Right to Limit Use and Disclosure of Sensitive
                              Personal Information We do not process
                              consumer&ldquo;s sensitive personal information.
                            </span>
                          </p>
                          <p>
                            <span>Verification process</span>
                          </p>
                          <p>
                            <span>
                              Upon receiving your request, we will need to
                              verify your identity to determine you are the same
                              person about whom we have the information in our
                              system. These verification efforts require us to
                              ask you to provide information so that we can
                              match it with information you have previously
                              provided us. For instance, depending on the type
                              of request you submit, we may ask you to provide
                              certain information so that we can match the
                              information you provide with the information we
                              already have on file, or we may contact you
                              through a communication method (e.g., phone or
                              email) that you have previously provided to us. We
                              may also use other verification methods as the
                              circumstances dictate.
                            </span>
                          </p>
                          <p>
                            <span>
                              We will only use personal information provided in
                              your request to verify your identity or authority
                              to make the request. To the extent possible, we
                              will avoid requesting additional information from
                              you for the purposes of verification. However, if
                              we cannot verify your identity from the
                              information already maintained by us, we may
                              request that you provide additional information
                              for the purposes of verifying your identity and
                              for security or fraud-prevention purposes. We will
                              delete such additionally provided information as
                              soon as we finish verifying you.
                            </span>
                          </p>
                          <p>
                            <span>Other privacy rights</span>
                          </p>
                          <ul>
                            <li aria-level="1">
                              <span>
                                You may object to the processing of your
                                personal information.
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                You may request correction of your personal data
                                if it is incorrect or no longer relevant, or ask
                                to restrict the processing of the information.
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                You can designate an authorized agent to make a
                                request under the CCPA on your behalf. We may
                                deny a request from an authorized agent that
                                does not submit proof that they have been
                                validly authorized to act on your behalf in
                                accordance with the CCPA.
                              </span>
                            </li>
                            <li aria-level="1">
                              <span>
                                You may request to opt out from future selling
                                or sharing of your personal information to third
                                parties. Upon receiving an opt-out request, we
                                will act upon the request as soon as feasibly
                                possible, but no later than fifteen (15) days
                                from the date of the request submission.
                              </span>
                            </li>
                          </ul>
                          <p>
                            <span>
                              To exercise these rights, you can contact us by
                              email at contact@ironhills.io, or by referring to
                              the contact details at the bottom of this
                              document. If you have a complaint about how we
                              handle your data, we would like to hear from you.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <ol start="11">
                            <li>
                              <span> </span>
                              <span>DO WE MAKE UPDATES TO THIS NOTICE?</span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              In Short: Yes, we will update this notice as
                              necessary to stay compliant with relevant laws.
                            </span>
                          </p>
                          <p>
                            <span>
                              We may update this privacy notice from time to
                              time. The updated version will be indicated by an
                              updated &ldquo;Revised&ldquo; date and the updated
                              version will be effective as soon as it is
                              accessible. If we make material changes to this
                              privacy notice, we may notify you either by
                              prominently posting a notice of such changes or by
                              directly sending you a notification. We encourage
                              you to review this privacy notice frequently to be
                              informed of how we are protecting your
                              information.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <ol start="12">
                            <li>
                              <span> </span>
                              <span>
                                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                              </span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              If you have questions or comments about this
                              notice, you may email us at contact@ironhills.io.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <ol start="13">
                            <li>
                              <span>
                                {" "}
                                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA
                                WE COLLECT FROM YOU?
                              </span>
                            </li>
                          </ol>
                          <p>
                            <span>
                              Based on the applicable laws of your country, you
                              may have the right to request access to the
                              personal information we collect from you, change
                              that information, or delete it. To request to
                              review, update, or delete your personal
                              information, please email us.
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <p>
                            <span>
                              This privacy policy was based on Termly&rsquo;s
                              Privacy Policy Generator.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                      onClick={() => changeStatusModal(false)}
                    >
                      BACK
                    </button>
                  </div>
                </Dialog.Panel>
              ) : (
                <Dialog.Panel className="relative transform overflow-hidden  bg-[#100d0a] px-4 pt-5 pb-4 text-left  transition-all sm:my-8 max-w-7xl  sm:p-6">
                  <div>
                    <div className="mt-3 fel sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold text-white"
                      >
                        Terms of service
                      </Dialog.Title>
                      <div className="mt-2 ">
                        <div className="text-md text-white max-h-96 overflow-auto">
                          <div>
                            <div>WEBSITE TERMS OF USE</div>
                          </div>
                          <div>
                            <div>Last updated January 01, 2023</div>
                          </div>
                          <div>&nbsp;</div>
                          <ol>
                            <li>
                              <div> </div>
                              <div>AGREEMENT TO TERMS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              These Terms of Use constitute a legally binding
                              agreement made between you, whether personally or
                              on behalf of an entity (&ldquo;you&rdquo;) and
                              Iron Hills LLC ( &ldquo;Company, &ldquo;
                              &ldquo;we, &ldquo; &ldquo;us, &ldquo; or
                              &ldquo;our&rdquo;), concerning your access to and
                              use of the http://www.knightsbyironhills.com
                              website as well as any other media form, media
                              channel, mobile website or mobile application
                              related, linked, or otherwise connected thereto
                              (collectively, the &ldquo;Site&rdquo;). We are
                              registered in Maryland, United States and have our
                              registered office at 10045 Baltimore National
                              Pike, Unit A7 #569, Ellicott City, MD 21042. You
                              agree that by accessing the Site, you have read,
                              understood, and agreed to be bound by all of these
                              Terms of Use. IF YOU DO NOT AGREE WITH ALL OF
                              THESE TERMS OF USE, THEN YOU ARE EXPRESSLY
                              PROHIBITED FROM USING THE SITE AND YOU MUST
                              DISCONTINUE USE IMMEDIATELY.
                            </div>
                          </div>
                          <div>
                            <div>
                              Supplemental terms and conditions or documents
                              that may be posted on the Site from time to time
                              are hereby expressly incorporated herein by
                              reference. We reserve the right, in our sole
                              discretion, to make changes or modifications to
                              these Terms of Use from time to time. We will
                              alert you about any changes by updating the
                              &ldquo;Last updated&rdquo; date of these Terms of
                              Use, and you waive any right to receive specific
                              notice of each such change. Please ensure that you
                              check the applicable Terms every time you use our
                              Site so that you understand which Terms apply. You
                              will be subject to, and will be deemed to have
                              been made aware of and to have accepted, the
                              changes in any revised Terms of Use by your
                              continued use of the Site after the date such
                              revised Terms of Use are posted.
                            </div>
                          </div>
                          <div>
                            <div>
                              The information provided on the Site is not
                              intended for distribution to or use by any person
                              or entity in any jurisdiction or country where
                              such distribution or use would be contrary to law
                              or regulation or which would subject us to any
                              registration requirement within such jurisdiction
                              or country. Accordingly, those persons who choose
                              to access the Site from other locations do so on
                              their own initiative and are solely responsible
                              for compliance with local laws, if and to the
                              extent local laws are applicable.
                            </div>
                          </div>
                          <div>
                            <div>
                              The Site is not tailored to comply with
                              industry-specific regulations (Health Insurance
                              Portability and Accountability Act (HIPAA),
                              Federal Information Security Management Act
                              (FISMA), etc.), so if your interactions would be
                              subjected to such laws, you may not use this Site.
                              You may not use the Site in a way that would
                              violate the Gramm- Leach-Bliley Act (GLBA).
                            </div>
                          </div>
                          <div>
                            <div>
                              The Site is intended for users who are at least 18
                              years old. Persons under the age of 18 are not
                              permitted to use or register for the Site.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="2">
                            <li>
                              <div> </div>
                              <div>INTELLECTUAL PROPERTY RIGHTS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              Unless otherwise indicated, the Site is our
                              proprietary property and all source code,
                              databases, functionality, software, website
                              designs, audio, video, text, photographs, and
                              graphics on the Site (collectively, the
                              &ldquo;Content&rdquo;) and the trademarks, service
                              marks, and logos contained therein (the
                              &ldquo;Marks&rdquo;) are owned or controlled by us
                              or licensed to us, and are protected by copyright
                              and trademark laws and various other intellectual
                              property rights and unfair competition laws of the
                              United States, international copyright laws, and
                              international conventions. The Content and the
                              Marks are provided on the Site &ldquo;AS IS&rdquo;
                              for your information and personal use only. Except
                              as expressly provided in these Terms of Use, no
                              part of the Site and no Content or Marks may be
                              copied, reproduced, aggregated, republished,
                              uploaded, posted, publicly displayed, encoded,
                              translated, transmitted, distributed, sold,
                              licensed, or otherwise exploited for any
                              commercial purpose whatsoever, without our express
                              prior written permission.
                            </div>
                          </div>
                          <div>
                            <div>
                              Provided that you are eligible to use the Site,
                              you are granted a limited license to access and
                              use the Site and to download or print a copy of
                              any portion of the Content to which you have
                              properly gained access solely for your personal,
                              non-commercial use. We reserve all rights not
                              expressly granted to you in and to the Site, the
                              Content and the Marks.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="3">
                            <li>
                              <div> </div>
                              <div>USER REPRESENTATIONS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              By using the Site, you represent and warrant that:
                              (1) you have the legal capacity and you agree to
                              comply with these Terms of Use; (2) you are not a
                              minor in the jurisdiction in which you reside; (3)
                              you will not access the Site through automated or
                              non-human means, whether through a bot, script, or
                              otherwise; (4) you will not use the Site for any
                              illegal or unauthorized purpose; and (5) your use
                              of the Site will not violate any applicable law or
                              regulation.
                            </div>
                          </div>
                          <div>
                            <div>
                              If you provide any information that is untrue,
                              inaccurate, not current, or incomplete, we have
                              the right to suspend or terminate your account and
                              refuse any and all current or future use of the
                              Site (or any portion thereof).
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="4">
                            <li>
                              <div> </div>
                              <div>PROHIBITED ACTIVITIES</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              You may not access or use the Site for any purpose
                              other than that for which we make the Site
                              available. The Site may not be used in connection
                              with any commercial endeavors except those that
                              are specifically endorsed or approved by us.
                            </div>
                          </div>
                          <div>
                            <div>As a user of the Site, you agree not to:</div>
                          </div>
                          <ul>
                            <li aria-level="1">
                              <div>
                                Systematically retrieve data or other content
                                from the Site to create or compile, directly or
                                indirectly, a collection, compilation, database,
                                or directory without written permission from us.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Trick, defraud, or mislead us and other users,
                                especially in any attempt to learn sensitive
                                account information such as user passwords.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Circumvent, disable, or otherwise interfere with
                                security-related features of the Site, including
                                features that prevent or restrict the use or
                                copying of any Content or enforce limitations on
                                the use of the Site and/or the Content contained
                                therein.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Disparage, tarnish, or otherwise harm, in our
                                opinion, us and/or the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Use any information obtained from the Site in
                                order to harass, abuse, or harm another person.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Make improper use of our support services or
                                submit false reports of abuse or misconduct.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Use the Site in a manner inconsistent with any
                                applicable laws or regulations. Engage in
                                unauthorized framing of or linking to the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Upload or transmit (or attempt to upload or to
                                transmit) viruses, Trojan horses, or other
                                material, including excessive use of capital
                                letters and spamming (continuous posting of
                                repetitive text), that interferes with any
                                party&rsquo;s uninterrupted use and enjoyment of
                                the Site or modifies, impairs, disrupts, alters,
                                or interferes with the use, features, functions,
                                operation, or maintenance of the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Engage in any automated use of the system, such
                                as using scripts to send comments or messages,
                                or using any data mining, robots, or similar
                                data gathering and extraction tools.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Delete the copyright or other proprietary rights
                                notice from any Content. Attempt to impersonate
                                another user or person or use the username of
                                another user.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Upload or transmit (or attempt to upload or to
                                transmit) any material that acts as a passive or
                                active information collection or transmission
                                mechanism, including without limitation, clear
                                graphics interchange formats
                                (&ldquo;gifs&rdquo;), 1&times;1 pixels, web
                                bugs, cookies, or other similar devices
                                (sometimes referred to as &ldquo;spyware&rdquo;
                                or &ldquo;passive collection mechanisms&rdquo;
                                or &ldquo;pcms&rdquo;).
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Interfere with, disrupt, or create an undue
                                burden on the Site or the networks or services
                                connected to the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Harass, annoy, intimidate, or threaten any of
                                our employees or agents engaged in providing any
                                portion of the Site to you.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Attempt to bypass any measures of the Site
                                designed to prevent or restrict access to the
                                Site, or any portion of the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Copy or adapt the Site&rsquo;s software,
                                including but not limited to Flash, PHP, HTML,
                                JavaScript, or other code.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Except as permitted by applicable law, decipher,
                                decompile, disassemble, or reverse engineer any
                                of the software comprising or in any way making
                                up a part of the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Except as may be the result of standard search
                                engine or Internet browser usage, use, launch,
                                develop, or distribute any automated system,
                                including without limitation, any spider, robot,
                                cheat utility, scraper, or offline reader that
                                accesses the Site, or using or launching any
                                unauthorized script or other software.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Use a buying agent or purchasing agent to make
                                purchases on the Site. Make any unauthorized use
                                of the Site, including collecting usernames
                                and/or email addresses of users by electronic or
                                other means for the purpose of sending
                                unsolicited email, or creating user accounts by
                                automated means or under false pretenses.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Use the Site as part of any effort to compete
                                with us or otherwise use the Site and/or the
                                Content for any revenue-generating endeavor or
                                commercial enterprise.
                              </div>
                            </li>
                          </ul>
                          <div>&nbsp;</div>
                          <ol start="5">
                            <li>
                              <div> </div>
                              <div>USER GENERATED CONTRIBUTIONS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              The Site does not offer users to submit or post
                              content. We may provide you with the opportunity
                              to create, submit, post, display, transmit,
                              perform, publish, distribute, or broadcast content
                              and materials to us or on the Site, including but
                              not limited to text, writings, video, audio,
                              photographs, graphics, comments, suggestions, or
                              personal information or other material
                              (collectively, &ldquo;Contributions &ldquo;).
                              Contributions may be viewable by other users of
                              the Site and through third-party websites. As
                              such, any Contributions you transmit may be
                              treated in accordance with the Site Privacy
                              Policy. When you create or make available any
                              Contributions, you thereby represent and warrant
                              that:
                            </div>
                          </div>
                          <ul>
                            <li aria-level="1">
                              <div>
                                The creation, distribution, transmission, public
                                display, or performance, and the accessing,
                                downloading, or copying of your Contributions do
                                not and will not infringe the proprietary
                                rights, including but not limited to the
                                copyright, patent, trademark, trade secret, or
                                moral rights of any third party.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                You are the creator and owner of or have the
                                necessary licenses, rights, consents, releases,
                                and permissions to use and to authorize us, the
                                Site, and other users of the Site to use your
                                Contributions in any manner contemplated by the
                                Site and these Terms of Use.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                You have the written consent, release, and/or
                                permission of each and every identifiable
                                individual person in your Contributions to use
                                the name or likeness of each and every such
                                identifiable individual person to enable
                                inclusion and use of your Contributions in any
                                manner contemplated by the Site and these Terms
                                of Use.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions are not false, inaccurate, or
                                misleading.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions are not unsolicited or
                                unauthorized advertising, promotional materials,
                                pyramid schemes, chain letters, spam, mass
                                mailings, or other forms of solicitation.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions are not obscene, lewd,
                                lascivious, filthy, violent, harassing,
                                libelous, slanderous, or otherwise objectionable
                                (as determined by us).
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions do not ridicule, mock,
                                disparage, intimidate, or abuse anyone.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions are not used to harass or
                                threaten (in the legal sense of those terms) any
                                other person and to promote violence against a
                                specific person or class of people.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions do not violate any applicable
                                law, regulation, or rule. Your Contributions do
                                not violate the privacy or publicity rights of
                                any third party.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions do not violate any applicable
                                law concerning child pornography, or otherwise
                                intended to protect the health or well-being of
                                minors.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions do not include any offensive
                                comments that are connected to race, national
                                origin, gender, sexual preference, or physical
                                handicap.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions do not otherwise violate, or
                                link to material that violates, any provision of
                                these Terms of Use, or any applicable law or
                                regulation.
                              </div>
                            </li>
                          </ul>
                          <div>
                            <div>
                              Any use of the Site in violation of the foregoing
                              violates these Terms of Use and may result in,
                              among other things, termination or suspension of
                              your rights to use the Site.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="6">
                            <li>
                              <div> </div>
                              <div>CONTRIBUTION LICENSE</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              You agree that we may access, store, process, and
                              use any information and personal data that you
                              provide following the terms of the Privacy Policy
                              and your choices (including settings).
                            </div>
                          </div>
                          <div>
                            <div>
                              By submitting suggestions or other feedback
                              regarding the Site, you agree that we can use and
                              share such feedback for any purpose without
                              compensation to you.
                            </div>
                          </div>
                          <div>
                            <div>
                              We do not assert any ownership over your
                              Contributions. You retain full ownership of all of
                              your Contributions and any intellectual property
                              rights or other proprietary rights associated with
                              your Contributions. We are not liable for any
                              statements or representations in your
                              Contributions provided by you in any area on the
                              Site. You are solely responsible for your
                              Contributions to the Site and you expressly agree
                              to exonerate us from any and all responsibility
                              and to refrain from any legal action against us
                              regarding your Contributions.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="7">
                            <li>
                              <div> </div>
                              <div>SUBMISSIONS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              You acknowledge and agree that any questions,
                              comments, suggestions, ideas, feedback, or other
                              information regarding the Site (
                              &ldquo;Submissions &ldquo;) provided by you to us
                              are non-confidential and shall become our sole
                              property. We shall own exclusive rights, including
                              all intellectual property rights, and shall be
                              entitled to the unrestricted use and dissemination
                              of these Submissions for any lawful purpose,
                              commercial or otherwise, without acknowledgment or
                              compensation to you. You hereby waive all moral
                              rights to any such Submissions, and you hereby
                              warrant that any such Submissions are original
                              with you or that you have the right to submit such
                              Submissions. You agree there shall be no recourse
                              against us for any alleged or actual infringement
                              or misappropriation of any proprietary right in
                              your Submissions.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="8">
                            <li>
                              <div> </div>
                              <div>THIRD-PARTY WEBSITE AND CONTENT</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              The Site may contain (or you may be sent via the
                              Site) links to other websites ( &ldquo;Third-
                              Party Websites &ldquo;) as well as articles,
                              photographs, text, graphics, pictures, designs,
                              music, sound, video, information, applications,
                              software, and other content or items belonging to
                              or originating from third parties (
                              &ldquo;Third-Party Content &ldquo;). Such
                              Third-Party Websites and Third-Party Content are
                              not investigated, monitored, or checked for
                              accuracy, appropriateness, or completeness by us,
                              and we are not responsible for any Third-Party
                              Websites accessed through the Site or any
                              Third-Party Content posted on, available through,
                              or installed from the Site, including the content,
                              accuracy, offensiveness, opinions, reliability,
                              privacy practices, or other policies of or
                              contained in the Third-Party Websites or the
                              Third-Party Content. Inclusion of, linking to, or
                              permitting the use or installation of any
                              Third-Party Websites or any Third-Party Content
                              does not imply approval or endorsement thereof by
                              us. If you decide to leave the Site and access the
                              Third-Party Websites or to use or install any
                              Third-Party Content, you do so at your own risk,
                              and you should be aware these Terms of Use no
                              longer govern. You should review the applicable
                              terms and policies, including privacy and data
                              gathering practices, of any website to which you
                              navigate from the Site or relating to any
                              applications you use or install from the Site. Any
                              purchases you make through Third-Party Websites
                              will be through other websites and from other
                              companies, and we take no responsibility
                              whatsoever in relation to such purchases which are
                              exclusively between you and the applicable third
                              party. You agree and acknowledge that we do not
                              endorse the products or services offered on
                              Third-Party Websites and you shall hold us
                              harmless from any harm caused by your purchase of
                              such products or services. Additionally, you shall
                              hold us harmless from any losses sustained by you
                              or harm caused to you relating to or resulting in
                              any way from any Third-Party Content or any
                              contact with Third-Party Websites.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="9">
                            <li>
                              <div> </div>
                              <div>SITE MANAGEMENT</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              We reserve the right, but not the obligation, to:
                              (1) monitor the Site for violations of these Terms
                              of Use; (2) take appropriate legal action against
                              anyone who, in our sole discretion, violates the
                              law or these Terms of Use, including without
                              limitation, reporting such user to law enforcement
                              authorities; (3) in our sole discretion and
                              without limitation, refuse, restrict access to,
                              limit the availability of, or disable (to the
                              extent technologically feasible) any of your
                              Contributions or any portion thereof; (4) in our
                              sole discretion and without limitation, notice, or
                              liability, to remove from the Site or otherwise
                              disable all files and content that are excessive
                              in size or are in any way burdensome to our
                              systems; and (5) otherwise manage the Site in a
                              manner designed to protect our rights and property
                              and to facilitate the proper functioning of the
                              Site.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="10">
                            <li>
                              <div> </div>
                              <div>PRIVACY POLICY</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              We care about data privacy and security. Please
                              review our Privacy Policy. By using the Site, you
                              agree to be bound by our Privacy Policy, which is
                              incorporated into these Terms of Use. Please be
                              advised the Site is hosted in the United States.
                              If you access the Site from any other region of
                              the world with laws or other requirements
                              governing personal data collection, use, or
                              disclosure that differ from applicable laws in the
                              United States, then through your continued use of
                              the Site, you are transferring your data to the
                              United States, and you agree to have your data
                              transferred to and processed in the United States.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="11">
                            <li>
                              <div> </div>
                              <div>TERM AND TERMINATION</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              These Terms of Use shall remain in full force and
                              effect while you use the Site. WITHOUT LIMITING
                              ANY OTHER PROVISION OF THESE TERMS OF USE, WE
                              RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
                              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                              USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP
                              ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
                              REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF
                              ANY REPRESENTATION, WARRANTY, OR COVENANT
                              CONTAINED IN THESE TERMS OF USE OR OF ANY
                              APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
                              YOUR USE OR PARTICIPATION IN THE SITE OR DELETE
                              ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY
                              TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <div>
                            <div>
                              If we terminate or suspend your account for any
                              reason, you are prohibited from registering and
                              creating a new account under your name, a fake or
                              borrowed name, or the name of any third party,
                              even if you may be acting on behalf of the third
                              party. In addition to terminating or suspending
                              your account, we reserve the right to take
                              appropriate legal action, including without
                              limitation pursuing civil, criminal, and
                              injunctive redress.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="12">
                            <li>
                              <div> </div>
                              <div>MODIFICATIONS AND INTERRUPTIONS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              We reserve the right to change, modify, or remove
                              the contents of the Site at any time or for any
                              reason at our sole discretion without notice.
                              However, we have no obligation to update any
                              information on our Site. We also reserve the right
                              to modify or discontinue all or part of the Site
                              without notice at any time. We will not be liable
                              to you or any third party for any modification,
                              price change, suspension, or discontinuance of the
                              Site.
                            </div>
                          </div>
                          <div>
                            <div>
                              We cannot guarantee the Site will be available at
                              all times. We may experience hardware, software,
                              or other problems or need to perform maintenance
                              related to the Site, resulting in interruptions,
                              delays, or errors. We reserve the right to change,
                              revise, update, suspend, discontinue, or otherwise
                              modify the Site at any time or for any reason
                              without notice to you. You agree that we have no
                              liability whatsoever for any loss, damage, or
                              inconvenience caused by your inability to access
                              or use the Site during any downtime or
                              discontinuance of the Site. Nothing in these Terms
                              of Use will be construed to obligate us to
                              maintain and support the Site or to supply any
                              corrections, updates, or releases in connection
                              therewith.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="13">
                            <li>
                              <div> </div>
                              <div>GOVERNING LAW</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              These Terms of Use and your use of the Site are
                              governed by and construed in accordance with the
                              laws of the State of Maryland applicable to
                              agreements made and to be entirely performed
                              within the State of Maryland, without regard to
                              its conflict of law principles.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="14">
                            <li>
                              <div> </div>
                              <div>DISPUTE RESOLUTION</div>
                            </li>
                          </ol>
                          <div>
                            <div>Informal Negotiations</div>
                          </div>
                          <div>
                            <div>
                              To expedite resolution and control the cost of any
                              dispute, controversy, or claim related to these
                              Terms of Use (each &ldquo;Dispute &ldquo; and
                              collectively, the &ldquo;Disputes&rdquo;) brought
                              by either you or us (individually, a
                              &ldquo;Party&rdquo; and collectively, the
                              &ldquo;Parties&rdquo;), the Parties agree to first
                              attempt to negotiate any Dispute (except those
                              Disputes expressly provided below) informally for
                              at least sixty (60) days before initiating
                              arbitration. Such informal negotiations commence
                              upon written notice from one Party to the other
                              Party.
                            </div>
                          </div>
                          <div>
                            <div>Binding Arbitration</div>
                          </div>
                          <div>
                            <div>
                              If the Parties are unable to resolve a Dispute
                              through informal negotiations, the Dispute (except
                              those Disputes expressly excluded below) will be
                              finally and exclusively resolved through binding
                              arbitration. YOU UNDERSTAND THAT WITHOUT THIS
                              PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN
                              COURT AND HAVE A JURY TRIAL. The arbitration shall
                              be commenced and conducted under the Commercial
                              Arbitration Rules of the American Arbitration
                              Association ( &ldquo;AAA &ldquo;) and, where
                              appropriate, the AAA&rsquo;s Supplementary
                              Procedures for Consumer Related Disputes (
                              &ldquo;AAA Consumer Rules &ldquo;), both of which
                              are available at the AAA website: www.adr.org.
                              Your arbitration fees and your share of arbitrator
                              compensation shall be governed by the AAA Consumer
                              Rules and, where appropriate, limited by the AAA
                              Consumer Rules. The arbitration may be conducted
                              in person, through the submission of documents, by
                              phone, or online. The arbitrator will make a
                              decision in writing, but need not provide a
                              statement of reasons unless requested by either
                              Party. The arbitrator must follow applicable law,
                              and any award may be challenged if the arbitrator
                              fails to do so. Except where otherwise required by
                              the applicable AAA rules or applicable law, the
                              arbitration will take place in Howard, Maryland.
                              Except as otherwise provided herein, the Parties
                              may litigate in court to compel arbitration, stay
                              proceedings pending arbitration, or to confirm,
                              modify, vacate, or enter judgment on the award
                              entered by the arbitrator.
                            </div>
                          </div>
                          <div>
                            <div>
                              If for any reason, a Dispute proceeds in court
                              rather than arbitration, the Dispute shall be
                              commenced or prosecuted in the state and federal
                              courts located in Howard, Maryland, and the
                              Parties hereby consent to, and waive all defenses
                              of lack of personal jurisdiction, and forum non
                              conveniens with respect to venue and jurisdiction
                              in such state and federal courts. Application of
                              the United Nations Convention on Contracts for the
                              International Sale of Goods and the Uniform
                              Computer Information Transaction Act (UCITA) is
                              excluded from these Terms of Use.
                            </div>
                          </div>
                          <div>
                            <div>
                              In no event shall any Dispute brought by either
                              Party related in any way to the Site be commenced
                              more than one (1) years after the cause of action
                              arose. If this provision is found to be illegal or
                              unenforceable, then neither Party will elect to
                              arbitrate any Dispute falling within that portion
                              of this provision found to be illegal or
                              unenforceable, and such Dispute shall be decided
                              by a court of competent jurisdiction within the
                              courts listed for jurisdiction above, and the
                              Parties agree to submit to the personal
                              jurisdiction of that court.
                            </div>
                          </div>
                          <div>
                            <div>Restrictions</div>
                          </div>
                          <div>
                            <div>
                              The Parties agree that any arbitration shall be
                              limited to the Dispute between the Parties
                              individually. To the full extent permitted by law,
                              (a) no arbitration shall be joined with any other
                              proceeding; (b) there is no right or authority for
                              any Dispute to be arbitrated on a class-action
                              basis or to utilize class action procedures; and
                              (c) there is no right or authority for any Dispute
                              to be brought in a purported representative
                              capacity on behalf of the general public or any
                              other persons.
                            </div>
                          </div>
                          <div>
                            <div>
                              Exceptions to Informal Negotiations and
                              Arbitration
                            </div>
                          </div>
                          <div>
                            <div>
                              The Parties agree that the following Disputes are
                              not subject to the above provisions concerning
                              informal negotiations and binding arbitration: (a)
                              any Disputes seeking to enforce or protect, or
                              concerning the validity of, any of the
                              intellectual property rights of a Party; (b) any
                              Dispute related to, or arising from, allegations
                              of theft, piracy, invasion of privacy, or
                              unauthorized use; and (c) any claim for injunctive
                              relief. If this provision is found to be illegal
                              or unenforceable, then neither Party will elect to
                              arbitrate any Dispute falling within that portion
                              of this provision found to be illegal or
                              unenforceable and such Dispute shall be decided by
                              a court of competent jurisdiction within the
                              courts listed for jurisdiction above, and the
                              Parties agree to submit to the personal
                              jurisdiction of that court.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="15">
                            <li>
                              <div> </div>
                              <div>CORRECTIONS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              There may be information on the Site that contains
                              typographical errors, inaccuracies, or omissions,
                              including descriptions, pricing, availability, and
                              various other information. We reserve the right to
                              correct any errors, inaccuracies, or omissions and
                              to change or update the information on the Site at
                              any time, without prior notice.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="16">
                            <li>
                              <div> </div>
                              <div>DISCLAIMER</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE
                              BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR
                              SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST
                              EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                              WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH
                              THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT
                              LIMITATION, THE IMPLIED WARRANTIES OF
                              MERCHANTABILITY, FITNE
                            </div>
                            <div>WEBSITE TERMS OF USE</div>
                          </div>
                          <div>
                            <div>Last updated January 01, 2023</div>
                          </div>
                          <div>&nbsp;</div>
                          <ol>
                            <li>
                              <div> </div>
                              <div>AGREEMENT TO TERMS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              These Terms of Use constitute a legally binding
                              agreement made between you, whether personally or
                              on behalf of an entity (&ldquo;you&rdquo;) and
                              Iron Hills LLC ( &ldquo;Company, &ldquo;
                              &ldquo;we, &ldquo; &ldquo;us, &ldquo; or
                              &ldquo;our&rdquo;), concerning your access to and
                              use of the http://www.knightsbyironhills.com
                              website as well as any other media form, media
                              channel, mobile website or mobile application
                              related, linked, or otherwise connected thereto
                              (collectively, the &ldquo;Site&rdquo;). We are
                              registered in Maryland, United States and have our
                              registered office at 10045 Baltimore National
                              Pike, Unit A7 #569, Ellicott City, MD 21042. You
                              agree that by accessing the Site, you have read,
                              understood, and agreed to be bound by all of these
                              Terms of Use. IF YOU DO NOT AGREE WITH ALL OF
                              THESE TERMS OF USE, THEN YOU ARE EXPRESSLY
                              PROHIBITED FROM USING THE SITE AND YOU MUST
                              DISCONTINUE USE IMMEDIATELY.
                            </div>
                          </div>
                          <div>
                            <div>
                              Supplemental terms and conditions or documents
                              that may be posted on the Site from time to time
                              are hereby expressly incorporated herein by
                              reference. We reserve the right, in our sole
                              discretion, to make changes or modifications to
                              these Terms of Use from time to time. We will
                              alert you about any changes by updating the
                              &ldquo;Last updated&rdquo; date of these Terms of
                              Use, and you waive any right to receive specific
                              notice of each such change. Please ensure that you
                              check the applicable Terms every time you use our
                              Site so that you understand which Terms apply. You
                              will be subject to, and will be deemed to have
                              been made aware of and to have accepted, the
                              changes in any revised Terms of Use by your
                              continued use of the Site after the date such
                              revised Terms of Use are posted.
                            </div>
                          </div>
                          <div>
                            <div>
                              The information provided on the Site is not
                              intended for distribution to or use by any person
                              or entity in any jurisdiction or country where
                              such distribution or use would be contrary to law
                              or regulation or which would subject us to any
                              registration requirement within such jurisdiction
                              or country. Accordingly, those persons who choose
                              to access the Site from other locations do so on
                              their own initiative and are solely responsible
                              for compliance with local laws, if and to the
                              extent local laws are applicable.
                            </div>
                          </div>
                          <div>
                            <div>
                              The Site is not tailored to comply with
                              industry-specific regulations (Health Insurance
                              Portability and Accountability Act (HIPAA),
                              Federal Information Security Management Act
                              (FISMA), etc.), so if your interactions would be
                              subjected to such laws, you may not use this Site.
                              You may not use the Site in a way that would
                              violate the Gramm- Leach-Bliley Act (GLBA).
                            </div>
                          </div>
                          <div>
                            <div>
                              The Site is intended for users who are at least 18
                              years old. Persons under the age of 18 are not
                              permitted to use or register for the Site.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="2">
                            <li>
                              <div> </div>
                              <div>INTELLECTUAL PROPERTY RIGHTS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              Unless otherwise indicated, the Site is our
                              proprietary property and all source code,
                              databases, functionality, software, website
                              designs, audio, video, text, photographs, and
                              graphics on the Site (collectively, the
                              &ldquo;Content&rdquo;) and the trademarks, service
                              marks, and logos contained therein (the
                              &ldquo;Marks&rdquo;) are owned or controlled by us
                              or licensed to us, and are protected by copyright
                              and trademark laws and various other intellectual
                              property rights and unfair competition laws of the
                              United States, international copyright laws, and
                              international conventions. The Content and the
                              Marks are provided on the Site &ldquo;AS IS&rdquo;
                              for your information and personal use only. Except
                              as expressly provided in these Terms of Use, no
                              part of the Site and no Content or Marks may be
                              copied, reproduced, aggregated, republished,
                              uploaded, posted, publicly displayed, encoded,
                              translated, transmitted, distributed, sold,
                              licensed, or otherwise exploited for any
                              commercial purpose whatsoever, without our express
                              prior written permission.
                            </div>
                          </div>
                          <div>
                            <div>
                              Provided that you are eligible to use the Site,
                              you are granted a limited license to access and
                              use the Site and to download or print a copy of
                              any portion of the Content to which you have
                              properly gained access solely for your personal,
                              non-commercial use. We reserve all rights not
                              expressly granted to you in and to the Site, the
                              Content and the Marks.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="3">
                            <li>
                              <div> </div>
                              <div>USER REPRESENTATIONS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              By using the Site, you represent and warrant that:
                              (1) you have the legal capacity and you agree to
                              comply with these Terms of Use; (2) you are not a
                              minor in the jurisdiction in which you reside; (3)
                              you will not access the Site through automated or
                              non-human means, whether through a bot, script, or
                              otherwise; (4) you will not use the Site for any
                              illegal or unauthorized purpose; and (5) your use
                              of the Site will not violate any applicable law or
                              regulation.
                            </div>
                          </div>
                          <div>
                            <div>
                              If you provide any information that is untrue,
                              inaccurate, not current, or incomplete, we have
                              the right to suspend or terminate your account and
                              refuse any and all current or future use of the
                              Site (or any portion thereof).
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="4">
                            <li>
                              <div> </div>
                              <div>PROHIBITED ACTIVITIES</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              You may not access or use the Site for any purpose
                              other than that for which we make the Site
                              available. The Site may not be used in connection
                              with any commercial endeavors except those that
                              are specifically endorsed or approved by us.
                            </div>
                          </div>
                          <div>
                            <div>As a user of the Site, you agree not to:</div>
                          </div>
                          <ul>
                            <li aria-level="1">
                              <div>
                                Systematically retrieve data or other content
                                from the Site to create or compile, directly or
                                indirectly, a collection, compilation, database,
                                or directory without written permission from us.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Trick, defraud, or mislead us and other users,
                                especially in any attempt to learn sensitive
                                account information such as user passwords.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Circumvent, disable, or otherwise interfere with
                                security-related features of the Site, including
                                features that prevent or restrict the use or
                                copying of any Content or enforce limitations on
                                the use of the Site and/or the Content contained
                                therein.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Disparage, tarnish, or otherwise harm, in our
                                opinion, us and/or the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Use any information obtained from the Site in
                                order to harass, abuse, or harm another person.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Make improper use of our support services or
                                submit false reports of abuse or misconduct.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Use the Site in a manner inconsistent with any
                                applicable laws or regulations. Engage in
                                unauthorized framing of or linking to the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Upload or transmit (or attempt to upload or to
                                transmit) viruses, Trojan horses, or other
                                material, including excessive use of capital
                                letters and spamming (continuous posting of
                                repetitive text), that interferes with any
                                party&rsquo;s uninterrupted use and enjoyment of
                                the Site or modifies, impairs, disrupts, alters,
                                or interferes with the use, features, functions,
                                operation, or maintenance of the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Engage in any automated use of the system, such
                                as using scripts to send comments or messages,
                                or using any data mining, robots, or similar
                                data gathering and extraction tools.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Delete the copyright or other proprietary rights
                                notice from any Content. Attempt to impersonate
                                another user or person or use the username of
                                another user.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Upload or transmit (or attempt to upload or to
                                transmit) any material that acts as a passive or
                                active information collection or transmission
                                mechanism, including without limitation, clear
                                graphics interchange formats
                                (&ldquo;gifs&rdquo;), 1&times;1 pixels, web
                                bugs, cookies, or other similar devices
                                (sometimes referred to as &ldquo;spyware&rdquo;
                                or &ldquo;passive collection mechanisms&rdquo;
                                or &ldquo;pcms&rdquo;).
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Interfere with, disrupt, or create an undue
                                burden on the Site or the networks or services
                                connected to the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Harass, annoy, intimidate, or threaten any of
                                our employees or agents engaged in providing any
                                portion of the Site to you.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Attempt to bypass any measures of the Site
                                designed to prevent or restrict access to the
                                Site, or any portion of the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Copy or adapt the Site&rsquo;s software,
                                including but not limited to Flash, PHP, HTML,
                                JavaScript, or other code.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Except as permitted by applicable law, decipher,
                                decompile, disassemble, or reverse engineer any
                                of the software comprising or in any way making
                                up a part of the Site.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Except as may be the result of standard search
                                engine or Internet browser usage, use, launch,
                                develop, or distribute any automated system,
                                including without limitation, any spider, robot,
                                cheat utility, scraper, or offline reader that
                                accesses the Site, or using or launching any
                                unauthorized script or other software.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Use a buying agent or purchasing agent to make
                                purchases on the Site. Make any unauthorized use
                                of the Site, including collecting usernames
                                and/or email addresses of users by electronic or
                                other means for the purpose of sending
                                unsolicited email, or creating user accounts by
                                automated means or under false pretenses.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Use the Site as part of any effort to compete
                                with us or otherwise use the Site and/or the
                                Content for any revenue-generating endeavor or
                                commercial enterprise.
                              </div>
                            </li>
                          </ul>
                          <div>&nbsp;</div>
                          <ol start="5">
                            <li>
                              <div> </div>
                              <div>USER GENERATED CONTRIBUTIONS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              The Site does not offer users to submit or post
                              content. We may provide you with the opportunity
                              to create, submit, post, display, transmit,
                              perform, publish, distribute, or broadcast content
                              and materials to us or on the Site, including but
                              not limited to text, writings, video, audio,
                              photographs, graphics, comments, suggestions, or
                              personal information or other material
                              (collectively, &ldquo;Contributions &ldquo;).
                              Contributions may be viewable by other users of
                              the Site and through third-party websites. As
                              such, any Contributions you transmit may be
                              treated in accordance with the Site Privacy
                              Policy. When you create or make available any
                              Contributions, you thereby represent and warrant
                              that:
                            </div>
                          </div>
                          <ul>
                            <li aria-level="1">
                              <div>
                                The creation, distribution, transmission, public
                                display, or performance, and the accessing,
                                downloading, or copying of your Contributions do
                                not and will not infringe the proprietary
                                rights, including but not limited to the
                                copyright, patent, trademark, trade secret, or
                                moral rights of any third party.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                You are the creator and owner of or have the
                                necessary licenses, rights, consents, releases,
                                and permissions to use and to authorize us, the
                                Site, and other users of the Site to use your
                                Contributions in any manner contemplated by the
                                Site and these Terms of Use.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                You have the written consent, release, and/or
                                permission of each and every identifiable
                                individual person in your Contributions to use
                                the name or likeness of each and every such
                                identifiable individual person to enable
                                inclusion and use of your Contributions in any
                                manner contemplated by the Site and these Terms
                                of Use.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions are not false, inaccurate, or
                                misleading.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions are not unsolicited or
                                unauthorized advertising, promotional materials,
                                pyramid schemes, chain letters, spam, mass
                                mailings, or other forms of solicitation.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions are not obscene, lewd,
                                lascivious, filthy, violent, harassing,
                                libelous, slanderous, or otherwise objectionable
                                (as determined by us).
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions do not ridicule, mock,
                                disparage, intimidate, or abuse anyone.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions are not used to harass or
                                threaten (in the legal sense of those terms) any
                                other person and to promote violence against a
                                specific person or class of people.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions do not violate any applicable
                                law, regulation, or rule. Your Contributions do
                                not violate the privacy or publicity rights of
                                any third party.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions do not violate any applicable
                                law concerning child pornography, or otherwise
                                intended to protect the health or well-being of
                                minors.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions do not include any offensive
                                comments that are connected to race, national
                                origin, gender, sexual preference, or physical
                                handicap.
                              </div>
                            </li>
                            <li aria-level="1">
                              <div>
                                Your Contributions do not otherwise violate, or
                                link to material that violates, any provision of
                                these Terms of Use, or any applicable law or
                                regulation.
                              </div>
                            </li>
                          </ul>
                          <div>
                            <div>
                              Any use of the Site in violation of the foregoing
                              violates these Terms of Use and may result in,
                              among other things, termination or suspension of
                              your rights to use the Site.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="6">
                            <li>
                              <div> </div>
                              <div>CONTRIBUTION LICENSE</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              You agree that we may access, store, process, and
                              use any information and personal data that you
                              provide following the terms of the Privacy Policy
                              and your choices (including settings).
                            </div>
                          </div>
                          <div>
                            <div>
                              By submitting suggestions or other feedback
                              regarding the Site, you agree that we can use and
                              share such feedback for any purpose without
                              compensation to you.
                            </div>
                          </div>
                          <div>
                            <div>
                              We do not assert any ownership over your
                              Contributions. You retain full ownership of all of
                              your Contributions and any intellectual property
                              rights or other proprietary rights associated with
                              your Contributions. We are not liable for any
                              statements or representations in your
                              Contributions provided by you in any area on the
                              Site. You are solely responsible for your
                              Contributions to the Site and you expressly agree
                              to exonerate us from any and all responsibility
                              and to refrain from any legal action against us
                              regarding your Contributions.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="7">
                            <li>
                              <div> </div>
                              <div>SUBMISSIONS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              You acknowledge and agree that any questions,
                              comments, suggestions, ideas, feedback, or other
                              information regarding the Site (
                              &ldquo;Submissions &ldquo;) provided by you to us
                              are non-confidential and shall become our sole
                              property. We shall own exclusive rights, including
                              all intellectual property rights, and shall be
                              entitled to the unrestricted use and dissemination
                              of these Submissions for any lawful purpose,
                              commercial or otherwise, without acknowledgment or
                              compensation to you. You hereby waive all moral
                              rights to any such Submissions, and you hereby
                              warrant that any such Submissions are original
                              with you or that you have the right to submit such
                              Submissions. You agree there shall be no recourse
                              against us for any alleged or actual infringement
                              or misappropriation of any proprietary right in
                              your Submissions.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="8">
                            <li>
                              <div> </div>
                              <div>THIRD-PARTY WEBSITE AND CONTENT</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              The Site may contain (or you may be sent via the
                              Site) links to other websites ( &ldquo;Third-
                              Party Websites &ldquo;) as well as articles,
                              photographs, text, graphics, pictures, designs,
                              music, sound, video, information, applications,
                              software, and other content or items belonging to
                              or originating from third parties (
                              &ldquo;Third-Party Content &ldquo;). Such
                              Third-Party Websites and Third-Party Content are
                              not investigated, monitored, or checked for
                              accuracy, appropriateness, or completeness by us,
                              and we are not responsible for any Third-Party
                              Websites accessed through the Site or any
                              Third-Party Content posted on, available through,
                              or installed from the Site, including the content,
                              accuracy, offensiveness, opinions, reliability,
                              privacy practices, or other policies of or
                              contained in the Third-Party Websites or the
                              Third-Party Content. Inclusion of, linking to, or
                              permitting the use or installation of any
                              Third-Party Websites or any Third-Party Content
                              does not imply approval or endorsement thereof by
                              us. If you decide to leave the Site and access the
                              Third-Party Websites or to use or install any
                              Third-Party Content, you do so at your own risk,
                              and you should be aware these Terms of Use no
                              longer govern. You should review the applicable
                              terms and policies, including privacy and data
                              gathering practices, of any website to which you
                              navigate from the Site or relating to any
                              applications you use or install from the Site. Any
                              purchases you make through Third-Party Websites
                              will be through other websites and from other
                              companies, and we take no responsibility
                              whatsoever in relation to such purchases which are
                              exclusively between you and the applicable third
                              party. You agree and acknowledge that we do not
                              endorse the products or services offered on
                              Third-Party Websites and you shall hold us
                              harmless from any harm caused by your purchase of
                              such products or services. Additionally, you shall
                              hold us harmless from any losses sustained by you
                              or harm caused to you relating to or resulting in
                              any way from any Third-Party Content or any
                              contact with Third-Party Websites.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="9">
                            <li>
                              <div> </div>
                              <div>SITE MANAGEMENT</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              We reserve the right, but not the obligation, to:
                              (1) monitor the Site for violations of these Terms
                              of Use; (2) take appropriate legal action against
                              anyone who, in our sole discretion, violates the
                              law or these Terms of Use, including without
                              limitation, reporting such user to law enforcement
                              authorities; (3) in our sole discretion and
                              without limitation, refuse, restrict access to,
                              limit the availability of, or disable (to the
                              extent technologically feasible) any of your
                              Contributions or any portion thereof; (4) in our
                              sole discretion and without limitation, notice, or
                              liability, to remove from the Site or otherwise
                              disable all files and content that are excessive
                              in size or are in any way burdensome to our
                              systems; and (5) otherwise manage the Site in a
                              manner designed to protect our rights and property
                              and to facilitate the proper functioning of the
                              Site.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="10">
                            <li>
                              <div> </div>
                              <div>PRIVACY POLICY</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              We care about data privacy and security. Please
                              review our Privacy Policy. By using the Site, you
                              agree to be bound by our Privacy Policy, which is
                              incorporated into these Terms of Use. Please be
                              advised the Site is hosted in the United States.
                              If you access the Site from any other region of
                              the world with laws or other requirements
                              governing personal data collection, use, or
                              disclosure that differ from applicable laws in the
                              United States, then through your continued use of
                              the Site, you are transferring your data to the
                              United States, and you agree to have your data
                              transferred to and processed in the United States.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="11">
                            <li>
                              <div> </div>
                              <div>TERM AND TERMINATION</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              These Terms of Use shall remain in full force and
                              effect while you use the Site. WITHOUT LIMITING
                              ANY OTHER PROVISION OF THESE TERMS OF USE, WE
                              RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
                              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                              USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP
                              ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
                              REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF
                              ANY REPRESENTATION, WARRANTY, OR COVENANT
                              CONTAINED IN THESE TERMS OF USE OR OF ANY
                              APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
                              YOUR USE OR PARTICIPATION IN THE SITE OR DELETE
                              ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY
                              TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <div>
                            <div>
                              If we terminate or suspend your account for any
                              reason, you are prohibited from registering and
                              creating a new account under your name, a fake or
                              borrowed name, or the name of any third party,
                              even if you may be acting on behalf of the third
                              party. In addition to terminating or suspending
                              your account, we reserve the right to take
                              appropriate legal action, including without
                              limitation pursuing civil, criminal, and
                              injunctive redress.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="12">
                            <li>
                              <div> </div>
                              <div>MODIFICATIONS AND INTERRUPTIONS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              We reserve the right to change, modify, or remove
                              the contents of the Site at any time or for any
                              reason at our sole discretion without notice.
                              However, we have no obligation to update any
                              information on our Site. We also reserve the right
                              to modify or discontinue all or part of the Site
                              without notice at any time. We will not be liable
                              to you or any third party for any modification,
                              price change, suspension, or discontinuance of the
                              Site.
                            </div>
                          </div>
                          <div>
                            <div>
                              We cannot guarantee the Site will be available at
                              all times. We may experience hardware, software,
                              or other problems or need to perform maintenance
                              related to the Site, resulting in interruptions,
                              delays, or errors. We reserve the right to change,
                              revise, update, suspend, discontinue, or otherwise
                              modify the Site at any time or for any reason
                              without notice to you. You agree that we have no
                              liability whatsoever for any loss, damage, or
                              inconvenience caused by your inability to access
                              or use the Site during any downtime or
                              discontinuance of the Site. Nothing in these Terms
                              of Use will be construed to obligate us to
                              maintain and support the Site or to supply any
                              corrections, updates, or releases in connection
                              therewith.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="13">
                            <li>
                              <div> </div>
                              <div>GOVERNING LAW</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              These Terms of Use and your use of the Site are
                              governed by and construed in accordance with the
                              laws of the State of Maryland applicable to
                              agreements made and to be entirely performed
                              within the State of Maryland, without regard to
                              its conflict of law principles.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="14">
                            <li>
                              <div> </div>
                              <div>DISPUTE RESOLUTION</div>
                            </li>
                          </ol>
                          <div>
                            <div>Informal Negotiations</div>
                          </div>
                          <div>
                            <div>
                              SS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                              WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
                              ACCURACY OR COMPLETENESS OF THE SITE&rsquo;S
                              CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO
                              THE SITE AND WE WILL ASSUME NO LIABILITY OR
                              RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
                              INACCURACIES OF CONTENT AND MATERIALS, (2)
                              PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                              WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE
                              OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE
                              OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
                              INFORMATION AND/OR FINANCIAL INFORMATION STORED
                              THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
                              TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS,
                              VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
                              TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD
                              PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY
                              CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
                              ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
                              CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE
                              AVAILABLE VIA THE SITE. WE DO NOT WARRANT,
                              ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
                              ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A
                              THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED
                              WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION
                              FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND
                              WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
                              RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN
                              YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
                              SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR
                              SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT,
                              YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
                              CAUTION WHERE APPROPRIATE.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="17">
                            <li>
                              <div> </div>
                              <div>LIMITATIONS OF LIABILITY</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES,
                              OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR
                              ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY,
                              INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES,
                              INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA,
                              OR OTHER DAMAGES ARISING FROM YOUR USE OF THE
                              SITE, EVEN IF WE HAVE BEEN ADVISED OF THE
                              POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING
                              ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
                              LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND
                              REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL
                              TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID,
                              IF ANY, BY YOU TO US OR $100.00 USD.
                            </div>
                          </div>
                          <div>
                            <div>
                              CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO
                              NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE
                              EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF
                              THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
                              DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU,
                              AND YOU MAY HAVE ADDITIONAL RIGHTS.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="18">
                            <li>
                              <div> </div>
                              <div>INDEMNIFICATION</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              You agree to defend, indemnify, and hold us
                              harmless, including our subsidiaries, affiliates,
                              and all of our respective officers, agents,
                              partners, and employees, from and against any
                              loss, damage, liability, claim, or demand,
                              including reasonable attorneys&rsquo; fees and
                              expenses, made by any third party due to or
                              arising out of: (1) use of the Site; (2) breach of
                              these Terms of Use; (3) any breach of your
                              representations and warranties set forth in these
                              Terms of Use; (4) your violation of the rights of
                              a third party, including but not limited to
                              intellectual property rights; or (5) any overt
                              harmful act toward any other user of the Site with
                              whom you connected via the Site. Notwithstanding
                              the foregoing, we reserve the right, at your
                              expense, to assume the exclusive defense and
                              control of any matter for which you are required
                              to indemnify us, and you agree to cooperate, at
                              your expense, with our defense of such claims. We
                              will use reasonable efforts to notify you of any
                              such claim, action, or proceeding which is subject
                              to this indemnification upon becoming aware of it.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="19">
                            <li>
                              <div> </div>
                              <div>USER DATA</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              We will maintain certain data that you transmit to
                              the Site for the purpose of managing the
                              performance of the Site, as well as data relating
                              to your use of the Site. Although we perform
                              regular routine backups of data, you are solely
                              responsible for all data that you transmit or that
                              relates to any activity you have undertaken using
                              the Site. You agree that we shall have no
                              liability to you for any loss or corruption of any
                              such data, and you hereby waive any right of
                              action against us arising from any such loss or
                              corruption of such data.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="20">
                            <li>
                              <div> </div>
                              <div>
                                ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND
                                SIGNATURES
                              </div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              Visiting the Site, sending us emails, and
                              completing online forms constitute electronic
                              communications. You consent to receive electronic
                              communications, and you agree that all agreements,
                              notices, disclosures, and other communications we
                              provide to you electronically, via email and on
                              the Site, satisfy any legal requirement that such
                              communication be in writing. YOU HEREBY AGREE TO
                              THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
                              ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC
                              DELIVERY OF NOTICES, POLICIES, AND RECORDS OF
                              TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA
                              THE SITE. You
                            </div>
                          </div>
                          <div>
                            <div>
                              hereby waive any rights or requirements under any
                              statutes, regulations, rules, ordinances, or other
                              laws in any jurisdiction which require an original
                              signature or delivery or retention of
                              non-electronic records, or to payments or the
                              granting of credits by any means other than
                              electronic means.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="21">
                            <li>
                              <div> </div>
                              <div>CALIFORNIA USERS AND RESIDENTS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              If any complaint with us is not satisfactorily
                              resolved, you can contact the Complaint Assistance
                              Unit of the Division of Consumer Services of the
                              California Department of Consumer Affairs in
                              writing at 1625 North Market Blvd., Suite N 112,
                              Sacramento, California 95834 or by telephone at
                              (800) 952-5210 or (916) 445-1254.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="22">
                            <li>
                              <div> </div>
                              <div>MISCELLANEOUS</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              These Terms of Use and any policies or operating
                              rules posted by us on the Site or in respect to
                              the Site constitute the entire agreement and
                              understanding between you and us. Our failure to
                              exercise or enforce any right or provision of
                              these Terms of Use shall not operate as a waiver
                              of such right or provision. These Terms of Use
                              operate to the fullest extent permissible by law.
                              We may assign any or all of our rights and
                              obligations to others at any time. We shall not be
                              responsible or liable for any loss, damage, delay,
                              or failure to act caused by any cause beyond our
                              reasonable control. If any provision or part of a
                              provision of these Terms of Use is determined to
                              be unlawful, void, or unenforceable, that
                              provision or part of the provision is deemed
                              severable from these Terms of Use and does not
                              affect the validity and enforceability of any
                              remaining provisions. There is no joint venture,
                              partnership, employment or agency relationship
                              created between you and us as a result of these
                              Terms of Use or use of the Site. You agree that
                              these Terms of Use will not be construed against
                              us by virtue of having drafted them. You hereby
                              waive any and all defenses you may have based on
                              the electronic form of these Terms of Use and the
                              lack of signing by the parties hereto to execute
                              these Terms of Use.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <ol start="23">
                            <li>
                              <div> CONTACT US</div>
                            </li>
                          </ol>
                          <div>
                            <div>
                              In order to resolve a complaint regarding the Site
                              or to receive further information regarding use of
                              the Site, please contact us at
                              contact@ironhills.io.
                            </div>
                          </div>
                          <div>&nbsp;</div>
                          <div>
                            <div>
                              These terms of use were based on Termly &ldquo;s
                              Terms and Conditions Generator.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="flex w-md mx-auto items-center justify-center  border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
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
