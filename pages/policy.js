import Image from "next/image";
import Link from "next/link";
import heroImg from "../assets/landing/badge.png";
import heroBack from "../assets/landing/bgHero.png";

import heroMessage from "../assets/landing/message.png";

export default function Policy() {
  return (
    <div className="relative isolate overflow-hidden h-screen bg-gray-900">
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={heroBack}
        alt="back iron hills"
      />
      <div className="absolute inset-0 bg-neutral-900/30 mix-blend-multiply" />
      <div className="grid  z-0 h-screen ">
        <main className=" relative mx-auto grid place-items-center h-sc my-auto max-w-7xl z-0 ">
          <div className="relative transform overflow-hidden  bg-background px-4 pt-5 pb-4 text-left  transition-all sm:my-8 max-w-7xl  sm:p-6">
            <div>
              <div className="mt-3 fel sm:mt-5">
                <h3 className="text-2xl font-semibold text-white">
                  Privacy Policy
                </h3>
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
                        (&apos;Company,&apos; &apos;we,&apos; &apos;us,&apos; or
                        &apos;our&apos;), describes how and why we might
                        collect, store, use, and/or share (&apos;process&apos;)
                        your information when you use our services
                        (&apos;Services&apos;), such as when you:&nbsp;
                      </span>
                    </p>
                    <ul>
                      <li aria-level="1">
                        <span>
                          Visit our website at
                          http://www.knightsbyironhills.com, or any website of
                          ours that links to this privacy notice&nbsp;
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          Engage with us in other related ways, including any
                          sales, marketing, or events
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          We do not control the blockchain protocol on which
                          fungible tokens and various non-fungible tokens
                          (&ldquo;NFTs&rdquo;) are tradable or useable and
                          cannot control activity and data on the Protocol, the
                          validation of transactions on the Protocol, or use of
                          the Protocol.
                        </span>
                      </li>
                    </ul>
                    <p>
                      <span>
                        Questions or concerns? Reading this privacy notice will
                        help you understand your privacy rights and choices. If
                        you do not agree with our policies and practices, please
                        do not use our Services. If you still have any questions
                        or concerns, please contact us at contact@ironhills.io.
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
                        What personal information do we process? When you visit,
                        use, or navigate our Services, we may process personal
                        information depending on how you interact with Iron
                        Hills LLC and the Services, the choices you make, and
                        the products and features you use.
                      </span>
                    </p>
                    <p>
                      <span>
                        Do we process any sensitive personal information? We do
                        not process sensitive personal information.
                      </span>
                    </p>
                    <p>
                      <span>
                        Do we receive any information from third parties? We do
                        not receive any information from third parties.
                      </span>
                    </p>
                    <p>
                      <span>
                        How do we process your information? We process your
                        information to provide, improve, and administer our
                        Services, communicate with you, for security and fraud
                        prevention, and to comply with law. We may also process
                        your information for other purposes with your consent.
                        We process your information only when we have a valid
                        legal reason to do so.
                      </span>
                    </p>
                    <p>
                      <span>
                        In what situations and with which parties do we share
                        personal information?
                      </span>
                    </p>
                    <p>
                      <span>
                        We may share information in specific situations and with
                        specific third parties.
                      </span>
                    </p>
                    <p>
                      <span>
                        How do we keep your information safe? We have
                        organizational and technical processes and procedures in
                        place to protect your personal information. However, no
                        electronic transmission over the internet or information
                        storage technology can be guaranteed to be 100% secure,
                        so we cannot promise or guarantee that hackers,
                        cybercriminals, or other unauthorized third parties will
                        not be able to defeat our security and improperly
                        collect, access, steal, or modify your information.
                      </span>
                    </p>
                    <p>
                      <span>
                        What are your rights? Depending on where you are located
                        geographically, the applicable privacy law may mean you
                        have certain rights regarding your personal information.
                      </span>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <span>
                        How do you exercise your rights? The easiest way to
                        exercise your rights is by filling out our data subject
                        request form available here, or by contacting us. We
                        will consider and act upon any request in accordance
                        with applicable data protection laws.
                      </span>
                    </p>
                    <p>
                      <span>
                        Want to learn more about what Iron Hills LLC does with
                        any information we collect? Click here to review the
                        notice in full.
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
                        We collect personal information that you voluntarily
                        provide to us when you express an interest in obtaining
                        information about us or our products and Services, when
                        you participate in activities on the Services, or
                        otherwise when you contact us.
                      </span>
                    </p>
                    <p>
                      <span>
                        Personal Information Provided by You. The personal
                        information that we collect depends on the context of
                        your interactions with us and the Services, the choices
                        you make, and the products and features you use. The
                        personal information we collect may include the
                        following:
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
                        Your Communications with Us. We may collect personal
                        information, such as email address, phone number or
                        mailing address when you request information about our
                        Services, register for our newsletter, or otherwise
                        communicate with us.
                      </span>
                    </p>
                    <p>
                      <span>
                        Sweepstakes, Giveaways or Contests. We may collect
                        personal information you provide for any sweepstakes,
                        giveaways or contests that we offer. In some
                        jurisdictions, we are required to publicly share
                        information of sweepstakes and contest winners.
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
                        Information. In order to engage in certain transactions
                        or purchases on the Services, you may need to provide us
                        or our third-party payment processors with your payment
                        information and allow us to connect to your digital
                        wallet by providing us with your public wallet address.
                        We will never ask you or collect your private keys. We
                        do not directly collect or store any payment card
                        information entered through our Services or access your
                        digital wallet, but we may receive from our third-party
                        payment processing providers information associated with
                        your payment card information (e.g., your billing
                        details). We may collect data necessary to process your
                        payment if you make purchases, such as your payment
                        instrument number, and the security code associated with
                        your payment instrument. All payment data is stored by
                        MetaMask/Consensys or Crossmint. You may find their
                        privacy notice link(s) here:
                        https://consensys.net/privacy-policy/,
                        https://www.crossmint.io/privacy-policy.
                      </span>
                    </p>
                    <p>
                      <span>
                        All personal information that you provide to us must be
                        true, complete, and accurate, and you must notify us of
                        any changes to such personal information.
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
                        improve, and administer our Services, communicate with
                        you, for security and fraud prevention, and to comply
                        with law. We may also process your information for other
                        purposes with your consent.
                      </span>
                    </p>
                    <p>
                      <span>
                        We process your personal information for a variety of
                        reasons, depending on how you interact with our
                        Services, including:
                      </span>
                    </p>
                    <ul>
                      <li aria-level="1">
                        <span>
                          To save or protect an individual&lsquo;s vital
                          interest. We may process your information when
                          necessary to save or protect an individual&rsquo;s
                          vital interest, such as to prevent harm.
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
                        In Short: We only process your personal information when
                        we believe it is necessary and we have a valid legal
                        reason (i.e., legal basis) to do so under applicable
                        law, like with your consent, to comply with laws, to
                        provide you with services to enter into or fulfill our
                        contractual obligations, to protect your rights, or to
                        fulfill our legitimate business interests.
                      </span>
                    </p>
                    <p>
                      <span>
                        If you are located in the EU or UK, this section applies
                        to you.
                      </span>
                    </p>
                    <p>
                      <span>
                        The General Data Protection Regulation (GDPR) and UK
                        GDPR require us to explain the valid legal bases we rely
                        on in order to process your personal information. As
                        such, we may rely on the following legal bases to
                        process your personal information:
                      </span>
                    </p>
                    <ul>
                      <li aria-level="1">
                        <span>
                          Consent. We may process your information if you have
                          given us permission (i.e., consent) to use your
                          personal information for a specific purpose. You can
                          withdraw your consent at any time. Click here to learn
                          more.
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          Legal Obligations. We may process your information
                          where we believe it is necessary for compliance with
                          our legal obligations, such as to cooperate with a law
                          enforcement body or regulatory agency, exercise or
                          defend our legal rights, or disclose your information
                          as evidence in litigation in which we are involved.
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          Vital Interests. We may process your information where
                          we believe it is necessary to protect your vital
                          interests or the vital interests of a third party,
                          such as situations involving potential threats to the
                          safety of any person.
                        </span>
                      </li>
                    </ul>
                    <p>
                      <span>
                        If you are located in Canada, this section applies to
                        you.
                      </span>
                    </p>
                    <p>
                      <span>
                        We may process your information if you have given us
                        specific permission (i.e., express consent) to use your
                        personal information for a specific purpose, or in
                        situations where your permission can be inferred (i.e.,
                        implied consent). You can withdraw your consent at any
                        time. Click here to learn more.
                      </span>
                    </p>
                    <p>
                      <span>
                        In some exceptional cases, we may be legally permitted
                        under applicable law to process your information without
                        your consent, including, for example:
                      </span>
                    </p>
                    <ul>
                      <li aria-level="1">
                        <span>
                          If collection is clearly in the interests of an
                          individual and consent cannot be obtained in a timely
                          way
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          For investigations and fraud detection and prevention
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          For business transactions provided certain conditions
                          are met
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          If it is contained in a witness statement and the
                          collection is necessary to assess, process, or settle
                          an insurance claim
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          For identifying injured, ill, or deceased persons and
                          communicating with next of kin
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          If we have reasonable grounds to believe an individual
                          has been, is, or may be victim of financial abuse
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          If it is reasonable to expect collection and use with
                          consent would compromise the availability or the
                          accuracy of the information and the collection is
                          reasonable for purposes related to investigating a
                          breach of an agreement or a contravention of the laws
                          of Canada or a province
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          If disclosure is required to comply with a subpoena,
                          warrant, court order, or rules of the court relating
                          to the production of records
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          If it was produced by an individual in the course of
                          their employment, business, or profession and the
                          collection is consistent with the purposes for which
                          the information was produced
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
                        situations described in this section and/or with the
                        following third parties.
                      </span>
                    </p>
                    <p>
                      <span>
                        We may need to share your personal information in the
                        following situations:
                      </span>
                    </p>
                    <ul>
                      <li aria-level="1">
                        <span>
                          Business Transfers. We may share or transfer your
                          information in connection with, or during negotiations
                          of, any merger, sale of company assets, financing, or
                          acquisition of all or a portion of our business to
                          another company.
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          Business Partners. We may share your information with
                          our business partners to offer you certain products,
                          services, or promotions.
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
                        We will only keep your personal information for as long
                        as it is necessary for the purposes set out in this
                        privacy notice, unless a longer retention period is
                        required or permitted by law (such as tax, accounting,
                        or other legal requirements).
                      </span>
                    </p>
                    <p>
                      <span>
                        When we have no ongoing legitimate business need to
                        process your personal information, we will either delete
                        or anonymize such information, or, if this is not
                        possible (for example, because your personal information
                        has been stored in backup archives), then we will
                        securely store your personal information and isolate it
                        from any further processing until deletion is possible.
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
                        In Short: We aim to protect your personal information
                        through a system of organizational and technical
                        security measures.
                      </span>
                    </p>
                    <p>
                      <span>
                        We have implemented appropriate and reasonable technical
                        and organizational security measures designed to protect
                        the security of any personal information we process.
                        However, despite our safeguards and efforts to secure
                        your information, no electronic transmission over the
                        Internet or information storage technology can be
                        guaranteed to be 100% secure, so we cannot promise or
                        guarantee that hackers, cybercriminals, or other
                        unauthorized third parties will not be able to defeat
                        our security and improperly collect, access, steal, or
                        modify your information. Although we will do our best to
                        protect your personal information, transmission of
                        personal information to and from our Services is at your
                        own risk. You should only access the Services within a
                        secure environment.
                      </span>
                    </p>
                    <p>&nbsp;</p>
                    <ol start="7">
                      <li>
                        <span> </span>
                        <span>DO WE COLLECT INFORMATION FROM MINORS?</span>
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
                        children under 18 years of age. By using the Services,
                        you represent that you are at least 18 or that you are
                        the parent or guardian of such a minor and consent to
                        such minor dependent&rsquo;s use of the Services. If we
                        learn that personal information from users less than 18
                        years of age has been collected, we will deactivate the
                        account and take reasonable measures to promptly delete
                        such data from our records. If you become aware of any
                        data we may have collected from children under age 18,
                        please contact us at contact@ironhills.io.
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
                        In Short: In some regions, such as the European Economic
                        Area (EEA), United Kingdom (UK), and Canada, you have
                        rights that allow you greater access to and control over
                        your personal information. You may review, change, or
                        terminate your account at any time.
                      </span>
                    </p>
                    <p>
                      <span>
                        In some regions (like the EEA, UK, and Canada), you have
                        certain rights under applicable data protection laws.
                        These may include the right (i) to request access and
                        obtain a copy of your personal information, (ii) to
                        request rectification or erasure; (iii) to restrict the
                        processing of your personal information; and (iv) if
                        applicable, to data portability. In certain
                        circumstances, you may also have the right to object to
                        the processing of your personal information. You can
                        make such a request by contacting us by using the
                        contact details provided in the section &apos;HOW CAN
                        YOU CONTACT US ABOUT THIS NOTICE?&apos; below.
                      </span>
                    </p>
                    <p>
                      <span>
                        We will consider and act upon any request in accordance
                        with applicable data protection laws.
                      </span>
                    </p>
                    <p>
                      <span>
                        If you are located in the EEA or UK and you believe we
                        are unlawfully processing your personal information, you
                        also have the right to complain to your local data
                        protection supervisory authority. You can find their
                        contact details here:
                        https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
                      </span>
                    </p>
                    <p>
                      <span>
                        If you are located in Switzerland, the contact details
                        for the data protection authorities are available here:
                        https://www.edoeb.admin.ch/edoeb/en/home.html.
                      </span>
                    </p>
                    <p>
                      <span>
                        Withdrawing your consent: If we are relying on your
                        consent to process your personal information, which may
                        be express and/or implied consent depending on the
                        applicable law, you have the right to withdraw your
                        consent at any time. You can withdraw your consent at
                        any time by contacting us by using the contact details
                        provided in the section &apos;HOW CAN YOU CONTACT US
                        ABOUT THIS NOTICE?&apos; below.
                      </span>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <span>
                        However, please note that this will not affect the
                        lawfulness of the processing before its withdrawal nor,
                        when applicable law allows, will it affect the
                        processing of your personal information conducted in
                        reliance on lawful processing grounds other than
                        consent.
                      </span>
                    </p>
                    <p>
                      <span>
                        If you have questions or comments about your privacy
                        rights, you may email us at contact@ironhills.io.
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
                        Most web browsers and some mobile operating systems and
                        mobile applications include a Do-Not-Track
                        (&apos;DNT&apos;) feature or setting you can activate to
                        signal your privacy preference not to have data about
                        your online browsing activities monitored and collected.
                        At this stage no uniform technology standard for
                        recognizing and implementing DNT signals has been
                        finalized. As such, we do not currently respond to DNT
                        browser signals or any other mechanism that
                        automatically communicates your choice not to be tracked
                        online. If a standard for online tracking is adopted
                        that we must follow in the future, we will inform you
                        about that practice in a revised version of this privacy
                        notice.
                      </span>
                    </p>
                    <p>&nbsp;</p>
                    <ol start="10">
                      <li>
                        <span> </span>
                        <span>
                          DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                        </span>
                      </li>
                    </ol>
                    <p>
                      <span>
                        In Short: Yes, if you are a resident of California, you
                        are granted specific rights regarding access to your
                        personal information.
                      </span>
                    </p>
                    <p>
                      <span>
                        California Civil Code Section 1798.83, also known as the
                        &apos;Shine The Light&apos; law, permits our users who
                        are California residents to request and obtain from us,
                        once a year and free of charge, information about
                        categories of personal information (if any) we disclosed
                        to third parties for direct marketing purposes and the
                        names and addresses of all third parties with which we
                        shared personal information in the immediately preceding
                        calendar year. If you are a California resident and
                        would like to make such a request, please submit your
                        request in writing to us using the contact information
                        provided below.
                      </span>
                    </p>
                    <p>
                      <span>
                        If you are under 18 years of age, reside in California,
                        and have a registered account with Services, you have
                        the right to request removal of unwanted data that you
                        publicly post on the Services. To request removal of
                        such data, please contact us
                      </span>
                    </p>
                    <p>
                      <span>
                        using the contact information provided below and include
                        the email address associated with your account and a
                        statement that you reside in California. We will make
                        sure the data is not publicly displayed on the Services,
                        but please be aware that the data may not be completely
                        or comprehensively removed from all our systems (e.g.,
                        backups, etc.).
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
                        every individual who is in the State of California for
                        other than a temporary or transitory purpose and
                      </span>
                    </p>
                    <p>
                      <span>(2)</span>
                      <span> </span>
                      <span>
                        every individual who is domiciled in the State of
                        California who is outside the State of California for a
                        temporary or transitory purpose
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
                        If this definition of&apos;resident&apos; applies to
                        you, we must adhere to certain rights and obligations
                        regarding your personal information.
                      </span>
                    </p>
                    <p>
                      <span>
                        What categories of personal information do we collect?
                      </span>
                    </p>
                    <p>
                      <span>
                        We have collected the following categories of personal
                        information in the past twelve
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
                                postal address, telephone or mobile contact
                                number, unique personal identifier, online
                                identifier, Internet Protocol address,
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
                                B. Personal information categories listed in the
                                California Customer
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
                                employment, employment history, and financial
                                information
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
                                C. Protected classification characteristics
                                under
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
                                F. Internet or other similar network activity
                              </span>
                            </p>
                          </td>
                          <td>
                            <p>
                              <span>
                                Browsing history, search history, online
                                behavior, interest data, and interactions with
                                our and other websites, applications,
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
                                Business contact details in order to provide you
                                our Services at a business level or job title,
                                work history, and professional qualifications if
                                you apply for
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
                                personal information listed above to create a
                                profile or summary about, for example,
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
                        We may also collect other personal information outside
                        of these categories through instances where you interact
                        with us in person, online, or by phone or mail in the
                        context of:
                      </span>
                    </p>
                    <ul>
                      <li aria-level="1">
                        <span>
                          Receiving help through our customer support channels;
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          Participation in customer surveys or contests; and
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          Facilitation in the delivery of our Services and to
                          respond to your inquiries.
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
                        More information about our data collection and sharing
                        practices can be found in this privacy notice.
                      </span>
                    </p>
                    <p>
                      <span>
                        You may contact us by email at contact@ironhills.io, or
                        by referring to the contact details at the bottom of
                        this document.
                      </span>
                    </p>
                    <p>
                      <span>
                        If you are using an authorized agent to exercise your
                        right to opt out we may deny a request if the authorized
                        agent does not submit proof that they have been validly
                        authorized to act on your behalf.
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
                        service providers pursuant to a written contract between
                        us and each service provider. Each service provider is a
                        for- profit entity that processes the information on our
                        behalf, following the same strict privacy protection
                        obligations mandated by the CCPA.
                      </span>
                    </p>
                    <p>
                      <span>
                        We may use your personal information for our own
                        business purposes, such as for undertaking internal
                        research for technological development and
                        demonstration. This is not considered to be
                        &apos;selling&apos; of your personal information.
                      </span>
                    </p>
                    <p>
                      <span>
                        Iron Hills LLC has not disclosed, sold, or shared any
                        personal information to third parties for a business or
                        commercial purpose in the preceding twelve (12) months.
                        Iron Hills LLC will not sell or share personal
                        information in the future belonging to website visitors,
                        users, and other consumers.
                      </span>
                    </p>
                    <p>
                      <span>
                        Your rights with respect to your personal data
                      </span>
                    </p>
                    <p>
                      <span>
                        Right to request deletion of the data &mdash; Request to
                        delete
                      </span>
                    </p>
                    <p>
                      <span>
                        You can ask for the deletion of your personal
                        information. If you ask us to delete your personal
                        information, we will respect your request and delete
                        your personal information, subject to certain exceptions
                        provided by law, such as (but not limited to) the
                        exercise by another consumer of his or her right to free
                        speech, our compliance requirements resulting from a
                        legal obligation, or any processing that may be required
                        to protect against illegal activities.
                      </span>
                    </p>
                    <p>
                      <span>Right to be informed &mdash; Request to know</span>
                    </p>
                    <p>
                      <span>
                        Depending on the circumstances, you have a right to
                        know:
                      </span>
                    </p>
                    <ul>
                      <li aria-level="1">
                        <span>
                          whether we collect and use your personal information;
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
                          whether we sell or share personal information to third
                          parties;
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          the categories of personal information that we sold,
                          shared, or disclosed for a business purpose;
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          the categories of third parties to whom the personal
                          information was sold, shared, or disclosed for a
                          business purpose;
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          the business or commercial purpose for collecting,
                          selling, or sharing personal information; and
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
                        In accordance with applicable law, we are not obligated
                        to provide or delete consumer information that is
                        de-identified in response to a consumer request or to
                        re- identify individual data to verify a consumer
                        request.
                      </span>
                    </p>
                    <p>
                      <span>
                        Right to Non-Discrimination for the Exercise of a
                        Consumer&rsquo;s Privacy Rights We will not discriminate
                        against you if you exercise your privacy rights.
                      </span>
                    </p>
                    <p>
                      <span>
                        Right to Limit Use and Disclosure of Sensitive Personal
                        Information We do not process consumer&ldquo;s sensitive
                        personal information.
                      </span>
                    </p>
                    <p>
                      <span>Verification process</span>
                    </p>
                    <p>
                      <span>
                        Upon receiving your request, we will need to verify your
                        identity to determine you are the same person about whom
                        we have the information in our system. These
                        verification efforts require us to ask you to provide
                        information so that we can match it with information you
                        have previously provided us. For instance, depending on
                        the type of request you submit, we may ask you to
                        provide certain information so that we can match the
                        information you provide with the information we already
                        have on file, or we may contact you through a
                        communication method (e.g., phone or email) that you
                        have previously provided to us. We may also use other
                        verification methods as the circumstances dictate.
                      </span>
                    </p>
                    <p>
                      <span>
                        We will only use personal information provided in your
                        request to verify your identity or authority to make the
                        request. To the extent possible, we will avoid
                        requesting additional information from you for the
                        purposes of verification. However, if we cannot verify
                        your identity from the information already maintained by
                        us, we may request that you provide additional
                        information for the purposes of verifying your identity
                        and for security or fraud-prevention purposes. We will
                        delete such additionally provided information as soon as
                        we finish verifying you.
                      </span>
                    </p>
                    <p>
                      <span>Other privacy rights</span>
                    </p>
                    <ul>
                      <li aria-level="1">
                        <span>
                          You may object to the processing of your personal
                          information.
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          You may request correction of your personal data if it
                          is incorrect or no longer relevant, or ask to restrict
                          the processing of the information.
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          You can designate an authorized agent to make a
                          request under the CCPA on your behalf. We may deny a
                          request from an authorized agent that does not submit
                          proof that they have been validly authorized to act on
                          your behalf in accordance with the CCPA.
                        </span>
                      </li>
                      <li aria-level="1">
                        <span>
                          You may request to opt out from future selling or
                          sharing of your personal information to third parties.
                          Upon receiving an opt-out request, we will act upon
                          the request as soon as feasibly possible, but no later
                          than fifteen (15) days from the date of the request
                          submission.
                        </span>
                      </li>
                    </ul>
                    <p>
                      <span>
                        To exercise these rights, you can contact us by email at
                        contact@ironhills.io, or by referring to the contact
                        details at the bottom of this document. If you have a
                        complaint about how we handle your data, we would like
                        to hear from you.
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
                        In Short: Yes, we will update this notice as necessary
                        to stay compliant with relevant laws.
                      </span>
                    </p>
                    <p>
                      <span>
                        We may update this privacy notice from time to time. The
                        updated version will be indicated by an updated
                        &ldquo;Revised&ldquo; date and the updated version will
                        be effective as soon as it is accessible. If we make
                        material changes to this privacy notice, we may notify
                        you either by prominently posting a notice of such
                        changes or by directly sending you a notification. We
                        encourage you to review this privacy notice frequently
                        to be informed of how we are protecting your
                        information.
                      </span>
                    </p>
                    <p>&nbsp;</p>
                    <ol start="12">
                      <li>
                        <span> </span>
                        <span>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span>
                      </li>
                    </ol>
                    <p>
                      <span>
                        If you have questions or comments about this notice, you
                        may email us at contact@ironhills.io.
                      </span>
                    </p>
                    <p>&nbsp;</p>
                    <ol start="13">
                      <li>
                        <span>
                          {" "}
                          HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                          COLLECT FROM YOU?
                        </span>
                      </li>
                    </ol>
                    <p>
                      <span>
                        Based on the applicable laws of your country, you may
                        have the right to request access to the personal
                        information we collect from you, change that
                        information, or delete it. To request to review, update,
                        or delete your personal information, please email us.
                      </span>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <span>
                        This privacy policy was based on Termly&rsquo;s Privacy
                        Policy Generator.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <Link
                className="flex max-w-sm mx-auto items-center justify-center rounded-sm border-solid border-2 border-Links bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
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
