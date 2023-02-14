import Image from "next/image";
import Link from "next/link";
import heroImg from "../assets/landing/badge.png";
import heroBack from "../assets/landing/bgHero.png";

import heroMessage from "../assets/landing/message.png";

export default function Terms() {
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
                  Terms of service
                </h3>
                <div className="mt-2 ">
                  <div className="text-md text-white h-96 overflow-auto">
                    <p>Last Updated: 11 FEB 2023</p>
                    <p>
                      Welcome to invictusorder.com (&ldquo;Site&rdquo;) operated
                      by IRON HILLS LLC (&ldquo;Company,&rdquo; &ldquo;Iron
                      Hills,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                      &ldquo;us&rdquo;). &nbsp;Please read these Terms of Use
                      and our &nbsp;&nbsp;
                      <Link className=" text-buttons " href={"/policy"}>
                        Privacy Policy
                      </Link>
                      &nbsp;&nbsp;carefully because they detail your use of the
                      Site, its content, and functionalities accessible via the
                      Site offered by Company, a Maryland limited liability
                      company. &nbsp;Important information, such as notice
                      regarding arbitration and other provisions can be found
                      within. &nbsp;If you do not agree to the Terms of Use,
                      discontinue use the Site or any of the Company&rsquo;s
                      services.
                    </p>
                    <h1>Site Access &nbsp; &nbsp; &nbsp;</h1>
                    <p>
                      The Company authorizes you to use the Site for your
                      personal use. &nbsp;You may not interfere with the
                      operation of the Site or make changes to it. &nbsp;You may
                      not use any technology to monitor the traffic on the Site
                      or copy the content contained on the Site without written
                      authorization.
                    </p>
                    <p>
                      The Site is intended for users who are at least 18 years
                      of age and capable of forming a binding contract with the
                      Company, and not otherwise barred from using the Site
                      under applicable law. Persons under the 18 years of age
                      are not permitted to use the Site or any of the
                      Company&rsquo;s services. &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    </p>
                    <p>
                      We reserve the right to deny any person the use of the
                      Site (including blocking certain IP addresses).
                    </p>
                    <p>
                      The information provided on the Site is not intended for
                      distribution to, or use by, any person or entity in any
                      jurisdiction or country where such distribution or use
                      would be contrary to law or regulation, or which would
                      subject us to any registration requirement within such
                      jurisdiction or country.
                    </p>
                    <p>
                      The regulatory regime governing blockchain technologies
                      remains uncertain, and new regulations, law, or policy may
                      materially adversely affect the development and
                      performance of this Site.
                    </p>
                    <h1>Changes To These Terms of Use or Site</h1>
                    <p>
                      The Company, in its sole discretion, reserves the right to
                      change these Terms of Use at any time. &nbsp;Any and all
                      changes will take effect immediately upon posting.
                      &nbsp;By continuing to use the Site after changes are made
                      to these Terms of Use, you are indicating your consent to
                      the new terms of use and you waive any right to receive
                      specific notice of each such change. Please ensure that
                      you check the applicable Terms of Use every time you use
                      the Site.
                    </p>
                    <h1>Prohibited Activities</h1>
                    <p>As a user of the Site, you agree not to:</p>
                    <p>
                      1)&nbsp; &nbsp;&nbsp;Circumvent, disable, tamper, or
                      otherwise interfere with security-related features,
                      technical delivery systems, software, or service of the
                      Site.
                    </p>
                    <p>
                      2)&nbsp; &nbsp;&nbsp;Make improper use of our support
                      services or submit false reports of abuse or misconduct.
                    </p>
                    <p>
                      3)&nbsp; &nbsp;&nbsp;Use the Site in a manner inconsistent
                      with any applicable laws or regulations.
                    </p>
                    <p>
                      4)&nbsp; &nbsp;&nbsp;Upload or transmit (or attempt to
                      upload or to transmit) viruses, Trojan horses, or other
                      material, including excessive use of capital letters and
                      spamming (continuous posting of repetitive text), that
                      interferes with any party&rsquo;s uninterrupted use and
                      enjoyment of the Site or that modifies, impairs, disrupts,
                      alters, or interferes with the use, features, functions,
                      operation, or maintenance of the Site.
                    </p>
                    <p>
                      5)&nbsp; &nbsp;&nbsp;Engage in any automated use of the
                      system, such as using scripts, or using any data mining,
                      robots, or similar data gathering and extraction tools.
                    </p>
                    <p>
                      6)&nbsp; &nbsp;&nbsp;Delete the copyright or other
                      proprietary rights notice from any content on the Site.
                    </p>
                    <p>
                      7)&nbsp; &nbsp;&nbsp;Impersonate, misrepresent, or attempt
                      to do the same with regard to another user or person or
                      use the wallet of another user.
                    </p>
                    <p>
                      8)&nbsp; &nbsp;&nbsp;Use, display, mirror or frame the
                      Site or any individual element within the Site,
                      Site&rsquo;s name, any Iron Hills&rsquo; trademark, logo
                      or other proprietary information, or the layout and design
                      of any page or form contained on a page, without Iron
                      Hills&rsquo; express written consent.
                    </p>
                    <p>
                      9)&nbsp; &nbsp;&nbsp;Upload or transmit (or attempt to
                      upload or to transmit) any material that acts as a passive
                      or active information collection or transmission
                      mechanism, including without limitation, clear graphics
                      interchange formats (&ldquo;gifs&rdquo;), 1&times;1
                      pixels, web bugs, cookies, or other similar devices
                      (sometimes referred to as &ldquo;spyware&rdquo; or
                      &ldquo;passive collection mechanisms&rdquo; or
                      &ldquo;pcms&rdquo;).
                    </p>
                    <p>
                      10)&nbsp;Interfere with, disrupt, or create an undue
                      burden on the Web Site or the networks or services
                      connected to the Site.
                    </p>
                    <p>
                      11)&nbsp;Harass, annoy, intimidate, or threaten any of our
                      employees or agents engaged in providing any portion of
                      the Site to you.
                    </p>
                    <p>
                      12)&nbsp;Systematically retrieve data or other content
                      from the Site to create or compile, directly or
                      indirectly, a collection, compilation, database, or
                      directory without written permission from us.
                    </p>
                    <p>
                      13)&nbsp;Attempt to bypass any measures of the Site
                      designed to prevent or restrict access to the Site, or any
                      portion thereof.
                    </p>
                    <p>
                      14)&nbsp;Copy or adapt the Site&rsquo;s software,
                      including but not limited to Flash, PHP, HTML, JavaScript,
                      or other code.
                    </p>
                    <p>
                      15)&nbsp;Except as permitted by applicable law, decipher,
                      decompile, disassemble, or reverse engineer any of the
                      software comprising or in any way making up a part of the
                      Site.
                    </p>
                    <p>
                      16)&nbsp;Use, launch, develop, or distribute any automated
                      system, including without limitation, any spider, robot,
                      cheat utility, scraper, or offline reader that accesses
                      the Site, or using or launching any unauthorized script or
                      other software except as may be the result of standard
                      search engine or Internet browser usage.
                    </p>
                    <p>
                      17)&nbsp;Encourage or enable any other individual to do
                      any of the foregoing.
                    </p>
                    <h1>Intellectual Property</h1>
                    <p>
                      Iron Hills respects the intellectual property and right of
                      publicity of others. We may make available through the
                      Site content that is subject to these rights. &nbsp;We,
                      our licensors, or third parties who otherwise own the
                      rights, retain all rights to that content. &nbsp;Examples
                      of Iron Hills trademarks include but are not limited to
                      &ldquo;IRON HILLS,&rdquo; the Iron Hills logo, INVICTUS
                      ORDER, and Invictus Order (logo).
                    </p>
                    <h1>Disclaimer of Warranties</h1>
                    <p>
                      THIS SITE IS OFFERED &ldquo;AS IS&rdquo; TO THE GREATEST
                      EXTENT PROVIDED BY LAW. &nbsp;THE COMPANY IN NO WAY MAKES
                      ANY WARRANTY REGARDING THE USE, OPERATION OR CONTENT OF
                      THE SITE OR ANY OTHER SITE LINKED TO THE SITE. &nbsp;THE
                      COMPANY DISCLAIMS ALL WARRANTIES INCLUDING WITHOUT
                      LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                      FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. &nbsp;THE
                      COMPANY MAKES NO WARRANTY THAT THE SERVER THAT MAKES THE
                      SITE AVAILABLE IS FREE OF VIRUSES OR OTHER HARMFUL
                      COMPONENTS. &nbsp;Some states or jurisdictions do not
                      allow the exclusion of implied warranties, conditions or
                      limitations on how long an implied warranty may last, so
                      the above limitations may not apply to you. &nbsp;You may
                      have other rights which vary from state to state or
                      jurisdiction to jurisdiction.
                    </p>
                    <p>
                      We cannot guarantee that the Site will be available at all
                      times. We may experience hardware, software, or other
                      problems or need to perform maintenance related to the
                      Site, resulting in interruptions, delays, or errors. We
                      reserve the right to change, revise, update, suspend,
                      discontinue, or otherwise modify the Site at any time or
                      for any reason without notice to you. You agree that we
                      have no liability whatsoever for any loss, damage, or
                      inconvenience caused by your inability to access or use
                      the Site during any downtime or discontinuance of the
                      Site. Nothing in these Terms of Use will be construed to
                      obligate us to maintain and support the Site or to supply
                      any corrections, updates, or releases in connection
                      therewith.
                    </p>
                    <h1>Limitation of Liability</h1>
                    <p>
                      To the greatest extent permitted by law, the Company shall
                      not be liable for any loss or damages (whether direct,
                      indirect, consequential, incidental, or otherwise)
                      resulting from any use of the Site or any Company
                      services. Additionally, you shall hold us harmless from
                      any losses sustained by you or harm caused to you relating
                      to, or resulting in, any way from any third-party content
                      or any contact with third-party websites. NOTWITHSTANDING
                      ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY
                      TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM
                      OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER
                      OF THE AMOUNT PAID, IF ANY, BY YOU TO US OR $100.00 USD.
                      Some states or jurisdictions do not allow the exclusion or
                      limitation of incidental, consequential or special
                      damages, so the above limitations may not apply to
                      you.&nbsp;
                    </p>
                    <h1>Links to and Services via Third Parties</h1>
                    <p>
                      The Site may contain links to websites operated by third
                      parties and offer services through third parties.
                      &nbsp;You access such websites at your own risk.
                      Nevertheless, the Company requests any feedback you may
                      have regarding links provided on the Site. As provided
                      above, you shall hold us harmless from any losses
                      sustained by you or harm caused to you relating to, or
                      resulting in, any way from any third-party content or any
                      contact with third-party web sites. &nbsp; We have no
                      control over and assume no responsibility for the content,
                      terms, privacy policies or practices of any third party
                      websites or applications. &nbsp;Providing information to
                      third-party websites or applications is at your own risk.
                    </p>
                    <h1>Indemnification</h1>
                    <p>
                      You agree to indemnify, defend, and hold harmless the
                      Company and its officers, employees, agents, shareholders,
                      directors and suppliers against all claims, liability,
                      damages, costs, and expenses, including reasonable legal
                      fees and expenses, resulting out of any violation of these
                      Terms of Use or any activity related to your use of the
                      Site or Company&rsquo;s services (including negligent or
                      wrongful conduct) by you or any other person accessing the
                      Site using your internet account.
                    </p>
                    <h1>General Provisions and Dispute Resolution</h1>
                    <p>
                      These Terms of Use and any additional terms posted on the
                      Sites constitute the entire agreement between the parties.
                      &nbsp;The Terms of Use shall be governed and construed in
                      accordance with the laws of the State of Maryland, U.S.A.,
                      without any reference to its conflicts of law rules.
                      &nbsp;The governing law and forum is applicable and will
                      apply regardless if you are a resident of a jurisdiction
                      where applicable law prohibits arbitration of
                      disputes.&nbsp;
                    </p>
                    <p>
                      To expedite resolution and control the cost of any
                      dispute, controversy, or claim related to these Terms of
                      Use (each &quot;Dispute&quot; and collectively, the
                      &ldquo;Disputes&rdquo;) brought by either you or us
                      (individually, a &ldquo;Party&rdquo; and collectively, the
                      &ldquo;Parties&rdquo;), the Parties agree to first attempt
                      to negotiate any Dispute (except those Disputes expressly
                      provided below) informally for at least sixty (60) days
                      before initiating arbitration. Such informal negotiations
                      commence upon written notice from one Party to the other
                      Party. &nbsp;As part of this informal dispute resolution
                      process, you must deliver your written notice via
                      first-class mail to us at 10045 Baltimore National Pike
                      Unit A7 #569 Ellicott City, MD 21042 and provide an email
                      copy to contact@ironhills.io.
                    </p>
                    <p>
                      If the Parties are unable to resolve a Dispute through
                      informal negotiations, the Dispute (except those Disputes
                      expressly excluded below) will be finally and exclusively
                      be resolved through binding arbitration. YOU UNDERSTAND
                      THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO
                      SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall
                      be commenced and conducted under the Commercial
                      Arbitration Rules of the American Arbitration Association
                      (&quot;AAA&quot;) and, where appropriate, the AAA&rsquo;s
                      Supplementary Procedures for Consumer Related Disputes
                      (&quot;AAA Consumer Rules&quot;), both of which are
                      available at the AAA website:
                      <a href="http://www.adr.org/">&nbsp;www.adr.org</a>. Your
                      arbitration fees and your share of arbitrator compensation
                      shall be governed by the AAA Consumer Rules and, where
                      appropriate, limited by the AAA Consumer Rules. The
                      arbitration may be conducted in person, through the
                      submission of documents, by phone, or online. The
                      arbitrator will make a decision in writing but need not
                      provide a statement of reasons unless requested by either
                      Party. The arbitrator must follow applicable law, and any
                      award may be challenged if the arbitrator fails to do so.
                      Except where otherwise required by the applicable AAA
                      rules or applicable law, the arbitration will take place
                      in Howard County, Maryland. Except as otherwise provided
                      herein, the Parties may litigate in court to compel
                      arbitration, stay proceedings pending arbitration, or to
                      confirm, modify, vacate, or enter judgment on the award
                      entered by the arbitrator.
                    </p>
                    <p>
                      If for any reason a Dispute proceeds in court rather than
                      arbitration, the Dispute shall be commenced or prosecuted
                      in the state and federal courts located in Howard County,
                      Maryland, and the Parties hereby consent to, and waive all
                      defenses of lack of personal jurisdiction, and forum non
                      conveniens with respect to venue and jurisdiction in such
                      state and federal courts. Application of the United
                      Nations Convention on Contracts for the International Sale
                      of Goods and the Uniform Computer Information Transaction
                      Act (UCITA) is excluded from these Terms of Use.
                    </p>
                    <p>
                      In no event shall any Dispute brought by either Party
                      related in any way to the Site be commenced more than one
                      (1) years after the cause of action arose. If this
                      provision is found to be illegal or unenforceable, then
                      neither Party will elect to arbitrate any Dispute falling
                      within that portion of this provision found to be illegal
                      or unenforceable, and such Dispute shall be decided by a
                      court of competent jurisdiction within the courts listed
                      for jurisdiction above, and the Parties agree to submit to
                      the personal jurisdiction of that court.
                    </p>
                    <p>
                      BOTH PARTIES AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
                      OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A
                      PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                      REPRESENTATIVE PROCEEDING.
                    </p>
                    <p>
                      As limited exceptions to the above, we may both seek to
                      resolve a Dispute in small claims court, if it qualifies
                      and we each retain the right to seek injunctive or other
                      equitable court to prevent/enjoin the infringement or
                      misappropriation of intellectual property rights.
                    </p>
                    <h1>Severability</h1>
                    <p>
                      If for any reason a court of competent jurisdiction finds
                      that any provisions, or portion thereof, of these Terms of
                      Use are unenforceable, that provision shall be enforced to
                      the maximum extent permissible by law, and the remainder
                      of these Terms of Use shall continue in full force and
                      effect. &nbsp;&nbsp;
                    </p>
                    <h1>No Waiver</h1>
                    <p>
                      Any failure by Iron Hills to enforce any right or term of
                      these Terms of Use will not be considered a waiver of such
                      right or term. The waiver of any such right or term will
                      be effective only if in writing and signed by a duly
                      authorized representative of Iron Hills. Except as
                      expressly set forth in these Terms, the exercise by either
                      party of any of its remedies under these Terms will be
                      without prejudice to its other remedies under these Terms
                      or otherwise.
                    </p>
                    <h1>Questions</h1>
                    <p>
                      Thank you for visiting the Site. &nbsp;If you have any
                      questions, please contact us
                      at:&nbsp;contact@ironhills.io.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
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
              <Link
                className=" max-w-sm mx-auto items-center justify-center rounded-sm border-solid border-2 border-Links bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                href={
                  "https://docs.google.com/document/d/1u3qq3eji6Azq3oxpZIddeiO0LmJ_kYVpzA_MQNEao3Y/edit"
                }
                target="_blank"
                rel="noreferrer"
              >
                VIEW
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
