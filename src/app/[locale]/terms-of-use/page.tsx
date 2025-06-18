import Nav from "@/components/Nav"
import Heading from "@/components/text/Heading"
import { useTranslations, useLocale } from "next-intl"

const TermsOfUse = () => {
  const tNav = useTranslations("Nav")
  const t = useTranslations("Terms")
  const locale = useLocale()
  let txt = {
    txt1: "AGREEMENT TO TERMS",
    txt2: "These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Litvin Marzorati Legales, concerning your access and use of the website https://www.lmlegales.com.ar/, as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. If you do not agree with all of these Terms of Use, then you are expressly prohibited from using the Site and you must discontinue use immediately.",
    txt3: "Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.",
    txt4: "The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Those who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws.",
    txt5: "INTELLECTUAL PROPERTY RIGHTS",
    txt6: "Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the 'Content') and the trademarks, service marks, and logos contained therein (the 'Marks') are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and international conventions. The Content and the Marks are provided on the Site 'AS IS' for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.",
    txt7: "Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.",
    txt8: "USER REPRESENTATIONS",
    txt9: "By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.",
    txt10: "PROHIBITED ACTIVITIES",
    txt11:
      "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",
    txt12: "As a user of the Site, you agree not to:",
    txt13:
      "Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
    txt14:
      "Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.",
    txt15: "Engage in unauthorized framing of or linking to the Site.",
    txt16:
      "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
    txt17:
      "Make improper use of our support services or submit false reports of abuse or misconduct.",
    txt18:
      "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
    txt19:
      "Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.",
    txt20:
      "Attempt to impersonate another user or person or use the username of another user.",
    txt21: "Sell or otherwise transfer your profile.",
    txt22:
      "Use any information obtained from the Site in order to harass, abuse, or harm another person.",
    txt23:
      "Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.",
    txt24:
      "Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.",
    txt25:
      "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.",
    txt26:
      "Delete the copyright or other proprietary rights notice from any Content.",
    txt27:
      "Copy or adapt the Site's software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
    txt28:
      "Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.",
    txt29:
      "Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ('gifs'), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as 'spyware' or 'passive collection mechanisms' or 'pcms').",
    txt30: "SITE MANAGEMENT",
    txt31:
      "We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.",
    txt32: "PRIVACY POLICY",
    txt33:
      "We care about data privacy and security. Please review our Privacy Policy: www.lmlegales.com.ar/privacy-policy. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site is hosted in Argentina. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Argentina, then through your continued use of the Site, you are transferring your data to Argentina, and you agree to have your data transferred to and processed in Argentina.",
    txt34: "TERM AND TERMINATION",
    txt35:
      "These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.",
    txt36:
      "If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.",
    txt37: "MODIFICATIONS AND INTERRUPTIONS",
    txt38:
      "We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.",
    txt39:
      "We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.",
    txt40: "GOVERNING LAW",
    txt41:
      "These Terms shall be governed by and defined following the laws of Argentina. Litvin Marzorati Legal and yourself irrevocably consent that the courts of Argentina shall have exclusive jurisdiction to resolve any dispute which may arise in relation to these terms.",
    txt42: "DISPUTE RESOLUTION",
    txt43:
      "You agree to present any disputes arising from these Terms of Use or use of the Site, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination, to arbitration, conducted in Argentina.",
    txt44: "CORRECTIONS",
    txt45:
      "There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.",
    txt47:
      "USER DATA. We will maintain certain data that you transmit to the site for the purpose of managing the performance of the site, as well as data relating to your use of the site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.",
    txt48: "TRANSACTIONS AND SIGNATURES",
    txt49:
      "Visiting the site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and agree that all communications we provide to you electronically, via email or the site, satisfy any legal requirement that such communication be in writing. You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies and records of transactions initiated or completed by us or via the site. You hereby waive any rights or requirements in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or granting of credits by any means other than electronic.",
    txt50: "MISCELLANEOUS",
    txt51:
      "These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign ant or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay or failure to act caused by anything beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no relationship of any kind created between you and us as a result of these Terms of Use or use of the Site, or with any contact you aim to make with us. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defences you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.",
    txt52: "CONTACT INFORMATION",
    txt53:
      "If you have any questions or comments about these Terms of Use, the Privacy Policy, or the Site, please contact us:",
    txt54: "By email: info@lmlegales.com.ar",
    txt55: "By WhatsApp: +54 9 11 6360-6526",
    txt56:
      "In person: at our main office located at Libertador 5990, Floor 3, Office 308, Buenos Aires City.",
    txt46: "",
  }

  return (
    <div>
      <Nav
        locale={locale}
        tInicio={tNav("inicio")}
        tAbout={tNav("sobreNos")}
        tContacto={tNav("contacto")}
        tServicios={tNav("servicios")}
      ></Nav>
      <div className="w-full flex flex-col items-center justify-center pt-44 pb-24 main-padding gap-6">
        <Heading title={t("title")} notCentered={true}></Heading>
        <div className="text-justify grid gap-4 text-sm">
          <h3>{txt.txt1}</h3>
          <p>{txt.txt2}</p>
          <p>{txt.txt3}</p>
          <p>{txt.txt4}</p>
          <h3>{txt.txt5}</h3>
          <p>{txt.txt6}</p>
          <h3>{txt.txt7}</h3>
          <p>{txt.txt8}</p>
          <h3>{txt.txt9}</h3>
          <p>{txt.txt10}</p>
          <p>{txt.txt11}</p>
          <p>{txt.txt12}</p>
          <ul className="list-disc ml-6">
            <li>{txt.txt13}</li>
            <li>{txt.txt14}</li>
            <li>{txt.txt15}</li>
            <li>{txt.txt16}</li>
            <li>{txt.txt17}</li>
            <li>{txt.txt18}</li>
            <li>{txt.txt19}</li>
            <li>{txt.txt20}</li>
            <li>{txt.txt21}</li>
            <li>{txt.txt22}</li>
            <li>{txt.txt23}</li>
            <li>{txt.txt24}</li>
            <li>{txt.txt25}</li>
            <li>{txt.txt26}</li>
            <li>{txt.txt27}</li>
            <li>{txt.txt28}</li>
            <li>{txt.txt29}</li>
          </ul>
          <p>{txt.txt30}</p>
          <p>{txt.txt31}</p>
          <p>{txt.txt32}</p>
          <p>{txt.txt33}</p>
          <p>{txt.txt34}</p>
          <p>{txt.txt35}</p>
          <p>{txt.txt36}</p>
          <p>{txt.txt37}</p>
          <p>{txt.txt38}</p>
          <p>{txt.txt39}</p>
          <p>{txt.txt40}</p>
          <p>{txt.txt41}</p>
          <p>{txt.txt42}</p>
          <p>{txt.txt43}</p>
          <p>{txt.txt44}</p>
          <p>{txt.txt45}</p>
          <p>{txt.txt46}</p>
          <p>{txt.txt47}</p>
          <p>{txt.txt48}</p>
          <p>{txt.txt49}</p>
          <p>{txt.txt50}</p>
          <p>{txt.txt51}</p>
          <p>{txt.txt52}</p>
          <p>{txt.txt53}</p>
          <p>{txt.txt54}</p>
          <p>{txt.txt55}</p>
          <p>{txt.txt56}</p>
        </div>
      </div>
    </div>
  )
}

export default TermsOfUse
