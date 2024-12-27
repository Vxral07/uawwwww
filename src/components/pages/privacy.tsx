import { useState } from "react";

const Privacy = () => {
  const [selectedPage, setSelectedPage] = useState("privacy"); // Default to Privacy Policy

  const renderContent = () => {
    switch (selectedPage) {
      case "terms":
        return <p>Use of this website is for eligible persons only, which includes Retail Clients, Professional Clients and Market Counterparties as defined in 2. Client classification of the Dubai International Financial Center (“DIFC”) Conduct of Business Rulebook (“Eligible Persons”). <br />

          Capitalised terms not defined in these Terms of Use shall have the same meaning attributed to them in the relevant Rules of the DIFC. <br />

          Nuqi Digital Wealth Ltd, including but not limited to its shareholders, directors, officers, employees, group members, affiliates, and assignees (collectively referred to as “Nuqi” or “We”), accepts no liability and offers no warranties concerning the documentation or information presented on this website, to the fullest extent permitted by law. The information contained on this website is subject to change without notice. <br /> <br />

          Nuqi has exercised all reasonable care in compiling the information provided on this website. Nevertheless, Nuqi does not guarantee or assert that the information will be promptly updated or that it will reveal all relevant details regarding the services mentioned herein. Additionally, Nuqi does not verify the authenticity of information obtained from third parties.<br /><br />

          No documentation or information provided on this website is intended to constitute a recommendation of any investment, financial advice, or any other advice by any party in any jurisdiction. Full details on the products and services are not available herein and may be provided by Nuqi upon additional request.<br /> <br />

          This website contains general information collected, maintained, and provided for the informative purposes and convenience of the eligible user only and shall not be relied upon to make any final business or investment decisions.

          No information contained on this website should be construed as an investment advertisement. Accordingly, nothing in this website is to be construed as providing financial advice, an offer or invitation made to any person to enter into any legal agreement of any kind or exercise any rights whatsoever, in relation to the offering of any security or a solicitation.<br /><br />

          Unauthorized use of the contents of this website is strictly prohibited. Under no circumstances should the information provided on this website be copied, disseminated, reproduced, or redistributed other than printing or downloading for personal non-commercial use by ‘eligible persons’ as defined in the DIFC Conduct of Business Rulebook. No rights of any kind are licensed or assigned or shall otherwise pass to persons accessing this website.<br /><br />

          Nuqi does not assume any liability and shall not be liable to you for any damages, including but not limited to, direct or indirect, special, incidental, or consequential damages, losses, or expenses arising in connection with this website and the information contained within, the use of, or the inability to use, the website by any party.<br />

          Any link within this website, except for any link to other Nuqi corporate sites, is included for information purposes only and for your convenience. Nuqi’s inclusion of such links does not imply any endorsement of the materials on such links. Nuqi does not accept any liability and shall not be liable to you for any loss or damage arising from or as a result of your acting upon the content of another website to which you may link from this website.<br />

          By proceeding into this website, you are representing and warranting that you are an Eligible Person as defined in the DIFC Conduct of Business Rulebook and agree to the use of the website subject to the terms and conditions stated herein..<br /> <br />

          <p className="font-bold text-lg text-white"> 1. Introduction</p> <br />

          Nuqi is a DIFC-based company licensed and regulated by the Dubai Financial Services Authority, is a category 3C firm authorized to carry on regulated activities of managing assets, arranging custody, arranging Credit & Advising on Credit, advising on Financial Products and arranging Deals in Investments, with endorsement of retail and operating an Islamic Window, which is available online and through mobile applications. Nuqi’s Dubai Financial Services Authority’s reference number is F007613, and the full DFSA Register is available on the DFSA’s website which can be accessed here https://www.dfsa.ae/public-register/firms/nuqi-digital-wealth-ltd<br /> <br />
          <p className="font-bold text-lg text-white">1.1 Purpose </p><br />

          We offer traditional External Assets manager and an automated digital investment management service (the Services). Should you choose to become our client (“Client”), we will manage a diversified, continually rebalanced portfolio of securities on your behalf in a very low cost and diversified manner. When you use our website and mobile application you enter into a series of legally binding agreements. You also agree to our Privacy Policy which covers how we collect, use, share and store your personal information.<br /> <br />
          <p className="font-bold text-lg text-white"> 1.2 Binding Agreement </p><br />

          When you access our website at https://uae.nuqiwealth.com/ and/or our mobile application ("our website", "our App" or "Nuqi") as a user (“User”), you're agreeing to be bound by the following Terms of Use, and, if you've elected to become a Client, our Client Agreement. Please therefore take the time to read the following binding Terms of Use below. For the purpose of this Terms of Use, a User is an individual who uses our website or App to evaluate our Service, or for educational purposes and a Client is an individual who signs our Client Agreement that entitles the Client to have her or his investment portfolio managed by Nuqi on a discretionary basis and in accordance with an agreed investment mandate. This Terms of Use, as well as the Privacy Policy applies to both Users and Clients. If you elect to become a Client, you will be subject to these Terms of Use, our Client Agreement, our Privacy Policy and any additional terms to which you agree when you create and fund an investment account.<br /> <br />

          <p className="font-bold text-lg text-white"> 2. Clients  </p><br />
          <p className="font-bold text-lgtext-white text-white">2.1 Eligibility</p> <br />

          Nuqi is intended solely for individuals who are 18 years or older. Any access to or use of Nuqi by anyone under 18 is unauthorized, unlicensed, and in violation of these Terms of Use. By accessing or using Nuqi, you represent and warrant that you are 18 or older, that you can form a binding contract with Nuqi, that you are not a person barred from using the Service under the laws of the United Arab Emirates, DIFC laws, or any other applicable jurisdiction, and that you will comply with these Terms of Use Agreement and all applicable local, state, national, and international laws, rules, and regulations..<br /> <br />
          You will keep your username and password safe. <br />
          You will not share your account with anyone else. <br /> <br />


          <p className="font-bold text-lg text-white">2.2 Your Access</p><br />
          To access certain features of Nuqi, you must register and create a User Account. During registration, you will choose a password, which you will need to access your User Account. Nuqi employs physical, electronic, and procedural safeguards that comply with DIFC standards to protect Users' and Clients' non-public personal information. You are responsible for safeguarding your password and User Account information. You agree not to disclose your password to any third party and to notify Nuqi immediately if your password is lost or stolen or if you suspect any unauthorized use of your User Account. As a User, you agree to be solely responsible for any activities or actions under your User Account,  whether or not you have authorized such activities or actions.  <br /><br />You agree that the information you provide during account registration through our website, app, or any other communication channel will be true, accurate, current, and complete. You are prohibited from scraping or copying information through any means (including crawlers, browser plugins, add-ons, and any other technology or manual work) as detailed in Section 6.2. The content of the site is protected by applicable copyright and trademark laws. Unauthorized use or exploitation of such content is strictly prohibited, including, but not limited to, unauthorized downloading, retransmission, storage in any medium, copying, redistribution, reproduction, or republication of the site, or any part thereof, for any purpose. Nuqi cannot guarantee complete confidentiality or security for information that is transmitted electronically. By accessing the site, you acknowledge that Nuqi is not responsible for any damages or losses you may suffer due to your electronic transmission of confidential or sensitive details. Please refer to Nuqi’s privacy policy for more information. We may send you communications that you are required to read. You may customize them according to your preferences.<br /><br />

          <p className="font-bold text-lg text-white">2.3 Alerts, Notifications and Service Communications</p><br />

          By creating a User Account, you automatically sign up for various types of alerts via e-mail and mobile notifications. When logged in, you may customize, modify, and in some cases, deactivate alerts by adjusting the settings accordingly. We never include your password in these communications; however, we may include your name, email address, and information about your portfolio(s) if you are a Client. Anyone with access to your email or mobile device will be able to view these alerts.<br /><br />

          <p className="font-bold text-lg text-white"> 3. TermsOfUse and Limit of Liability    </p><br />

          Nuqi cannot be held responsible for any financial insights or recommendations provided to Users. This website is only intended to provide you with general information and is neither considered to be a financial advice, an offer to sell nor a solicitation of an offer to purchase any security and may not rely on investment purposes.<br /><br />

          <p className="font-bold text-lg text-white"> 3.1 For a User who is not a Client   </p><br />

          You understand and acknowledge that the investment results you could obtain from investment information and financial insights provided by Nuqi cannot be guaranteed and that Nuqi cannot be held responsible. All investments entail a risk of loss and that you may lose all your money. Investment management services may be offered to individuals who become clients, at the sole discretion of Nuqi. Your election to engage our investment management services are subject to your explicit enrolment and acceptance of the separate Client Agreement and related fee schedule.<br /><br />
          You agree and understand that your use of Nuqi is for its intended purposes only and it is not intended to provide legal, tax or financial planning advice. You agree as a User that you are responsible for your own investment research and investment decisions, that Nuqi is only one of many tools you may use as part of a comprehensive investment education process, that you should not and will not rely on Nuqi as the primary basis of your investment decisions and, except as otherwise provided for herein, Nuqi will not be liable for decisions/ actions you take or authorize third parties to take on your behalf based on information you receive as a User of Nuqi or information you otherwise see on our website.<br /><br />

          Other sites accessed by hyperlinks appearing in the site may be independently developed by parties other than Nuqi. Nuqi does not guarantee the accuracy of the information contained in such sites.<br />
          Links to other sites should not be taken as Nuqi’s endorsement or approval of such sites, the third parties named therein, or their products and services, nor is any liability assumed for incompatibility, non-suitability, viral infection or other destructive components on or from such sites.<br /><br />
          This is our TermsOfUse of legal liability. <br /><br />
          <p className="font-bold text-lg text-white">
            3.2 TermsOfUse of Warranties </p><br />

          Your use of Nuqi's website, and the personal information you provide is at your sole discretion and risk. Nuqi's website and all materials, information, products and services included therein, are provided on an AS IS and AS AVAILABLE basis without any representations, warranties or conditions of any kind from Nuqi. Whether expressed or implied, and including without limitation implied representations, warranties or conditions of title, non-infringement, merchantability, fitness for a particular purpose, performance, durability, availability, timeliness, accuracy, or completeness, all of which are now disclaimed by Nuqi to the fullest extent permitted by law.<br /><br />

          NUQI EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, RELATING TO NUQI'S WEBSITE, CONTENT, AND USER INFORMATION, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OF PROPRIETARY RIGHTS, COURSE OF DEALING, OR COURSE OF PERFORMANCE. NUQI DISCLAIMS ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO: <br /><br />
          - THE AVAILABILITY, SECURITY, ACCURACY, RELIABILITY, TIMELINESS, AND PERFORMANCE OF NUQI'S WEBSITE, CONTENT, AND/OR USER INFORMATION.<br />
          - THAT NUQI'S WEBSITE WILL BE ERROR-FREE OR THAT ANY ERRORS WILL BE CORRECTED.<br />
          - THAT NUQI'S WEBSITE WILL BE FREE FROM ELECTRONIC VIRUSES.<br />
          - THE PERFORMANCE OF OR ACCURACY, QUALITY, CURRENCY, COMPLETENESS, OR USEFULNESS OF ANY INFORMATION PROVIDED BY NUQI ON ITS WEBSITE, INCLUDING BUT NOT LIMITED TO INFORMATION OBTAINED THROUGH SOCIAL MEDIA.<br /><br />

          No advice or information, whether oral or written, obtained by you from Nuqi's website, shall create any warranty not expressly stated in this Terms of Use. If you choose to rely on such information, you do so solely at your own risk.<br /><br />

          Some countries or jurisdictions do not allow the exclusion of certain warranties. Accordingly, some of the above exclusions may not apply to you. <br /><br />

          These are the limits of legal liability we may have to you. <br /> <br />

          <p className="font-bold text-lg text-white">  3.3 Limitation of Liability </p><br />

          IN NO EVENT SHALL NUQI OR ANY OF ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU FOR ANY DAMAGES WHATSOEVER, INCLUDING WITHOUT LIMITATION INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF NUQI, CONTENT AND/OR USER INFORMATION, INCLUDING BUT NOT LIMITED TO THE QUALITY, ACCURACY, OR UTILITY OF THE INFORMATION PROVIDED AS PART OF OR THROUGH NUQI OR FOR ANY INVESTMENT DECISIONS MADE ON THE BASIS OF SUCH INFORMATION, WHETHER THE DAMAGES ARE FORESEEABLE AND WHETHER OR NOT NUQI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION AND IN NO EVENT SHALL NUQI'S CUMULATIVE LIABILITY TO YOU EXCEED U.S. AED250.<br /><br />

          Every effort has been made to ensure that the website's material is accurate at the time of publication. However, Nuqi will not under any circumstances be liable to you or any other person in any way for any loss or damages (direct, indirect, special, economic, incidental, consequential, punitive or exemplary, including without limitation loss of revenue, data, anticipated profits or lost business) in respect of the use of, or inability to use, or any reliance on, the website, any of its content or links (including without limitation any inaccuracies or viruses), or any web browser or other equipment.<br /><br />

          By accessing the website, you agree to indemnify and hold harmless Nuqi and its agents, suppliers and their respective directors, officers, and employees from and against all actions, proceedings, costs, claims, liabilities, damages, and expenses (including reasonable legal fees) arising from or in connection with a breach of these terms and conditions or the use of this website.<br /><br />

          <p className="font-bold text-lg text-white">4. Termination</p><br />

          Each of us can end this Terms of Use at any time.
          You may request termination of your User Account at any time and for any reason by sending an email to service@nuqiwealth.me or through the process specified in the App.
          We may terminate or suspend your access to Nuqi, in our sole discretion, at any time for any reason without notice to you. Further, if we believe, in our sole discretion, that a violation of these Terms of Use has occurred, we may take any other corrective action we deem appropriate. We reserve the right to investigate suspected violations of these Terms of Use. We may seek to gather information from a user who is suspected of violating these Terms of Use (or from any other user) and you agree to provide us with such information. We will fully cooperate with any law enforcement authorities or court order requesting or directing us to disclose the identity of anyone posting, publishing, or otherwise making available any User information, emails, or other materials that are believed to violate these Terms of Use. <br />

          Any suspension, termination, or cancellation shall not affect your obligations to Nuqi under these Terms of Use (including but not limited to ownership, indemnification, and limitation of liability), which by their sense and context are intended to survive such suspension, termination, or cancellation. <br /><br />

          <p className="font-bold text-lg text-white">5. Dispute Resolution   </p><br />

          You agree that these Terms of Use shall be governed by and interpreted in accordance with the laws of the DIFC excluding that body of law pertaining to conflict of laws.
          Any legal action or proceeding arising under these Terms of Use will be brought exclusively in courts of the DIFC, and the parties hereby irrevocably consent to the personal jurisdiction and venue therein.<br /><br />

          <p className="font-bold text-lg text-white"> 6. Nuqi "Dos" and "Don'ts"   </p><br />

          Nuqi grants you a license to use our website and App so long as you comply with all our rules.<br /> <br />

          <p className="font-bold text-lg text-white">  6.1 Dos.   </p><br />

          <p className="font-bold text-lg text-white">You agree you will: </p><br />

          Comply with all applicable laws, including, without limitation, privacy laws, intellectual property laws, export control laws, tax laws, and regulatory requirements;
          Provide accurate information to us, whether reported directly or through a third party who you authorize, and keep it updated;
          Use the services solely for your personal, non-commercial use;
          Use your real name on your profile and keep your password confidential; and
          Use the Services in a professional manner.<br /><br />


          <p className="font-bold text-lg text-white"> 6.2 Don'ts.  </p><br />

          <p className="font-bold text-lg text-white">    You agree you won't: </p><br />

          Circumvent, disable, or otherwise interfere with security-related features of Nuqi or features that prevent or restrict use or copying of any content or User information.
          Upload, email, transmit, provide, or otherwise make available:
          any User information which you do not have the lawful right to use, copy, transmit, display, or make available (including any User information that would violate any confidentiality or fiduciary obligations that you might have with respect to the User information); or any User information that infringes the intellectual property rights of, or violates the privacy rights of, any third-party (including without limitation copyright, trademark, patent, trade secret, or other intellectual property right, moral right, or right of publicity); or unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of solicitation; or any personal information that is unlawful, obscene, harmful, threatening, harassing, defamatory, or hateful, or that contain objects or symbols of hate, invade the privacy of any third-party, contain nudity, are deceptive, threatening, abusive, inciting of unlawful action, or are otherwise objectionable in the sole discretion of Nuqi; or any personal information that contains software viruses or any other computer code, files, or programs designed to (i) interrupt, destroy, or limit the functionality of any computer software; or (ii) interfere with the access of any user, host or network, including without limitation overloading, flooding, spamming, mail-bombing, or sending a virus to Nuqi; or any personal information that includes code that is hidden or otherwise surreptitiously contained within the User information. <br />
          Use any meta tags or other hidden text or metadata utilising a Nuqi name, trademark, URL or product name. <br />

          Forge any TCP/IP packet header or any part of the header information in any posting, or in any way use Nuqi to send altered, deceptive, or false source- identifying information. <br />
          Interfere with or disrupt (or attempt to interfere with or disrupt) any Nuqi web page, server, or network, or the technical delivery systems of Nuqi's providers, or disobey any requirements, procedures, policies, or regulations of networks connected to Nuqi.

          Attempt to probe, scan, or test the vulnerability of any Nuqi system or network or breach or impair or circumvent any security or authentication measures protecting Nuqi. <br /><br />
          Attempt to decipher, decompile, disassemble, or reverse-engineer any of the software used to provide Nuqi.

          Attempt to access, search, or meta-search Nuqi or content thereon with any engine, software, tool, agent, device, or mechanism other than software and/or search agents provided by Nuqi or other generally available third- party web browsers, including without limitation any software that sends queries to Nuqi to determine how a website or web page ranks.<br /><br />

          Violate the terms of service or any other rule or agreement applicable to you or Nuqi's inclusion in, reference to, or relationship with any third party or third-party site or service, or your use of any such third-party site or service. <br /><br />

          Collect or store personal information about other users without their express permission.
          Impersonate or misrepresent your affiliation with any person or entity, through pretexting or some other form of social engineering, or commit fraud. <br /> <br />

          Solicit any User for any investment or other commercial or promotional transaction. <br />

          Violate any applicable law and regulation.

          Scrape or copy information through any means (including crawlers, browser plugins and add-ons, <br /><br />
          and any other technology or manual work).

          Use, launch, or permit to be used any automated system, including without limitation "robots," "crawlers," or "spiders"; or <br />

          Copy or use the information, content or data on Nuqi in connection with a competitive service (as determined by Nuqi).<br /><br />

          Monitor Nuqi's availability, performance or functionality for any competitive purposes.<br />

          Use Nuqi or content thereon in any manner not permitted by these Terms of Use
          Copyrighted Materials.<br />

          If you become aware of any misuse of Nuqi or its content by any person, please contact Nuqi to report the abuse. Nuqi has adopted and implemented a policy that provides for the termination of Accounts of users who infringe the rights of copyright holders.<br /> <br />

          <p className="font-bold text-lg text-white"> 7. Account Information from Third Party Sites  </p><br />

          Users may link their accounts with third-party financial institutions with which they have customer relationships, maintain accounts or engage in financial transactions and direct Nuqi to retrieve and display information from these accounts (“Account Information”). Nuqi works with one or more third-party service providers to access this Account Information. By linking these accounts or directing Nuqi to retrieve your third-party Account Information, you are consenting to the processing of your Account Information, and other personal information you provide that is needed to retrieve your Account Information, such as credentials, by Nuqi and such service provider(s) in connection with providing this service in accordance with our Privacy Policy and as permitted by law, and, if you’ve elected to become a Client, you are consenting to the use of your Account Information by Nuqi and its affiliates in connection with the management of your Nuqi account. Nuqi does not review the Account Information for accuracy, legality or non-infringement. Nuqi is not responsible for the Account Information or products and services offered by or on third-party sites.<br /> <br />

          Nuqi cannot always foresee or anticipate technical or other difficulties which may result in failure to obtain data or loss of data, personalization settings or other service interruptions. Nuqi cannot assume responsibility for the timeliness, accuracy, deletion, non-delivery or failure to store any user data, communications or personalization settings. Displayed Account Information is only as fresh as the time shown, which reflects when the information was obtained from third-party sources. <br /> <br />

          <p className="font-bold text-lg text-white">   8. General Terms   </p><br />


          Some other important details about the Terms of Use:<br />


          In the event that any provision in these Terms of Use is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect. The failure of a party to enforce any right or provision of these Terms of Use will not be deemed a waiver of such right or provision. You may not assign this Terms of Use (by operation of law or otherwise) without the prior written consent of Nuqi, and any prohibited assignment will be null and void. <br />

          Nuqi may assign this Terms of Use or any rights hereunder without your consent. The relationship of the parties under these Terms of Use is that of independent contractors, and these Terms of Use will not be construed to imply that either party is the agent, employee, or joint venture of the other. Note that if you elect to become a Client, the relationship of the parties will be governed by these Terms of Use, Client Agreement, our Privacy Policy and any additional terms to which you agree when you create and fund an investment account. <br /><br />

          We may make changes to this Terms of Use and the Service from time to time. We may do this for various reasons, including to reflect changes in or requirements of the applicable law, new features, or changes in business practices.<br />

          The latest version of this Terms of Use will be posted on the website under Terms of Use, and you should regularly check for the latest version. The newest version is the version that applies. If you continue to use the Service after the changes become effective, you agree to the revised Terms of Use. You agree that this Terms of Use shall supersede any prior agreements (except as specifically stated herein) and shall govern your entire relationship with Nuqi, including but not limited to events, agreements, and conduct preceding your acceptance of this Terms of Use. We reserve the right to change this Terms of Use by posting a revised Terms of Use and we agree that changes cannot be retroactive. If you don't agree with these changes, you must stop using Nuqi.<br /><br />

          You agree the only way to provide us legal notice is at the address provided in Section 10.3. <br /><br />

          <p className="font-bold text-lg text-white"> 9. International Use </p><br />

          Nuqi does not make any representation that its services are appropriate or available for use outside the DIFC. Similarly, we make no representations that accessing Nuqi from locations outside the DIFC is legal or permissible under local laws. If you access Nuqi from areas outside of the DIFC, you do so at your own risk and are solely responsible for compliance with local laws.<br /><br />

          <p className="font-bold text-lg text-white ">     10. Miscellaneous      </p><br />


          <p className="font-bold text-lg text-white">10.1 Integration & Severability  </p><br />

          This Terms of Use is the entire agreement between you and us with respect to Nuqi, and your use of our website and App, and supersedes all prior or contemporaneous communications and proposals (whether oral, written or electronic) between you and us. If any provision of this Terms of Use is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this Terms of Use will otherwise remain in full force and effect. The failure of either party to exercise in any respect any right provided for herein shall not be deemed a waiver of any further rights hereunder. Investment recommendations are made to Clients on an individual basis and may differ based on specific circumstances. <br /> <br />

          <p className="font-bold text-lg text-white"> 10.2 Advice may differ </p><br />

          We and our personnel may make recommendations and take action for Clients that may differ from the recommendations we give to you or the action we take on your behalf.
          In addition, our personnel may take actions for their own accounts based on their own investment situations that differ from the recommendations we give you or actions we take on your behalf.
          Any notice or communication will be in writing by email. <br /> <br />

          <p className="font-bold text-lg text-white">10.3 Communication </p><br />

          You agree that these Terms of Use and the rules, restrictions, and policies contained herein, and Nuqi's enforcement thereof, are not intended to confer and do not confer any rights or remedies on any person other than you and Nuqi. These Terms of Use together with Nuqi's Privacy Policy and Client Agreement (if applicable) constitute the entire agreement between Nuqi and you with respect to the subject matter hereof. Any notice or other communication to be given hereunder will be in writing and given by (a) Nuqi via email (in each case to the address that you provide), or (b) you via email to service@nuqiwealth.me or to such other addresses as Nuqi may specify in writing. The date of receipt shall be deemed the date on which such notice is transmitted. <br />
          We welcome your feedback! <br /><br />

          <p className="font-bold text-lg text-white"> 10.4 Feedback </p><br />

          Your feedback is welcome and encouraged. You may submit feedback by emailing us at service@nuqiwealth.me . You agree, however, that (i) by submitting unsolicited ideas to Nuqi or any of its employees or representatives, by any medium, including but not limited to email, written, or oral communication, you automatically forfeit your right to any intellectual property rights in such ideas; and (ii) such unsolicited ideas automatically become the property of Nuqi. You hereby assign and agree to assign all rights, title, and interest you have in such feedback and ideas to Nuqi together with all intellectual property rights therein. In addition, you warrant that all moral rights in any feedback have been waived, and you do hereby waive any such moral rights. <br /> <br />

          <p className="font-bold text-lg text-white">10.5 Questions  </p><br />

          This document constitutes Nuqi's complete Terms of Use for Nuqi and related services.
          If you have questions about these Terms of Use or about Nuqi or content thereon, please contact Nuqi at service@nuqiwealth.me.<br /> <br />

          <p className="font-bold text-lg text-white">11. Severance</p><br />
          No consent or waiver by either party, or of any breach or default by, the other party in its performance of its obligations under this Terms of Use will be deemed or construed to be a consent to, or a waiver of, a continuing breach or default or any other breach or default of those or any other obligations of that party. No consent or waiver will be effective unless in writing. <br />
          If any provision of these terms and conditions is unlawful, void, or for any reason is unenforceable. That provision shall be deemed to be severed from the rest of these terms and conditions and shall not affect the validity and enforceability of any remaining provisions. <br />


        </p>;
      case "privacy":
        return (
          <>
            {/* <h1 className="font-semibold text-lg py-4 text-cyan-400">
              Privacy Policy
            </h1> */}
            <p className=" font-poppins">
              This Privacy Policy (“Policy”) forms part of the terms and conditions (“Terms”) relating to the use of the website www.nuqiwealth.me or the app provided by Nuqi Digital Wealth Limited and (together with its parent, subsidiaries, affiliate companies and their respective directors, partners, officers, employees or agents (Hereafter referred as “NUQI”,“we”, “us”, “our”). NUQI is the data controller of any personal information provided to us, via this website or otherwise. <br /><br />
              NUQI is committed to safeguarding the privacy of the personal information that is provided to us or collected by us during the course of our business as well as the personal information we receive from you (“User”, “you” or “your”). This Policy, describes how and why we collect, store and use personal information, and provides information about your rights. Please read the following information carefully to understand our views and practices regarding how we handle personal information. <br /><br />
              For the purposes of applicable data protection law, NUQI is the “data controller” of your personal information.<br /> <br /> <br />
              <p className="font-bold text-lg text-white "> What information we collect </p> <br />

              We may collect personal information from you through your use of the website, when you request information from us, when you engage us for our services, or as a result of your relationship with any of our clients. <br />
              We may request, and collect from you, personal information and other information. Depending on the information or services you request, we may ask you to provide your name, phone numbers, address, email address, passport details, and other such personal information.<br /><br />
              By providing us with any personal information, you are consenting to the use of your personal information as contemplated in this privacy notice. If you do not want us to use your personal information for any of these purposes, please do not provide us with your personal information.<br /><br />
              <p className="font-bold text-lg text-white">Why we collect the information</p> <br />
              We will only use your personal information for our legitimate business purposes, including: <br /><br />
              •	To process and respond to inquiries, and provide our services;<br /><br />
              •	To manage our relationship with you and our clients;<br /><br />
              •	To market our services;<br /><br />
              •	To compile anonymous statistics, such as website usage statistics and statistics on the effectiveness of invitations and other emails; and<br /><br />
              •	To allow our custodian and brokerage providers (through whom we are able to provide our services) to comply with the regulations of all jurisdictions in which they must comply in order to provide their services; and<br /><br />
              •	Where otherwise required by law. <br /> <br />
              <p className="font-bold text-lg text-white"> Relationship management</p> <br />
              We operate a Relationship Management email mailing list program, which we use to inform clients and other contacts about our services, including our publications and events. Such marketing messages may contain tracking technologies in order to track subscriber activity relating to engagement, demographics and other data, and to build subscriber profiles.<br /><br />
              If you would like to cease receiving marketing materials from us at any time, please let our CRM management team know directly. You can also change your preferences for receiving our marketing emails and legal updates from us at any time, and you can unsubscribe by following the instructions specified in our marketing emails or via the websites. Please update your details by contacting our admin team by email at admin@nuqiwealth.me<br /><br />
              <p className="font-bold text-lg text-white">Distribution of your information</p> <br />
              We may disclose your personal information to a recipient (i) for the purposes of outsourcing one or more of the purposes-related functions described above; (ii) to confirm or update information provided by you; (iii) to inform you of events, information about our services, and other important information, or (iv) for other purposes disclosed at or before the time the information is collected. <br /><br />
              If you tell us you wish to attend an event, your name and organization may appear on a list which we provide to other delegates at the event. We also take photographs and video of our events, and this may result in your image being captured and used while reporting on the event (e.g. via social media or other means). <br /> <br />
              In relation to any other third parties we will only disclose your information where you have given your consent or where we are required to do so by law, or where it is necessary for the purpose of, or in connection with legal proceedings or in order to exercise or defend legal rights. <br /><br />
              <p className="font-bold text-lg text-white">Cross-border transfer of your information</p> <br />
              It may sometimes be necessary for us to share your personal information with other Entities around the world or for such Nuqi Digital Wealth Limited offices to share your information with Partner Offices in the DIFC. It may also be necessary for us to share your personal information with associated professional services firms around the world, who provide services to us or on our behalf (including data storage facilities or online storage located within or outside the United Arab Emirates, which may be operated by independent service contractors). This will entail a transfer of personal information from within the Dubai International Financial Centre to recipients outside the DIFC, and vice versa.<br /><br />
              The level of personal information protection in locations outside DIFC may be less than that offered within the DIFC or the country in which you reside and may not be recognized as providing an adequate level of protection, but we have procedures in place to ensure the protection of personal information. These procedures include putting steps in place to ensure that all such entities keep your personal information confidential and secure and only use it for the purposes that we have specified and communicated to you. When we transfer your information to other countries, we will use, share and safeguard that information as described in this privacy notice. We only transfer personal information to these countries, with your consent, when it is necessary for the services we provide you, or subject to appropriate safeguards that assure the protection of your personal information, such as standard contractual clauses. <br /><br />
              <p className=" text-lg font-bold text-white">Your rights</p> <br />
              The DIFC Data Protection aims to give you more control of your data. It provides new and strengthened rights.<br /><br />
              <p className="font-bold text-lg text-white"> •Right to access:</p> you can ask us whether we’re processing your personal data, including where and for what purpose. You can also request an electronic copy of your personal data free of charge<br /><br />
              <p className="font-bold text-lg text-white"> • Right to restrict processing:</p> in certain circumstances, you can ask us to restrict our use of your personal data <br /><br />
              <p className="font-bold text-lg text-white"> • Right to rectification:</p> you can ask us to correct inaccurate personal data we hold about you<br /><br />
              <p className="font-bold text-lg text-white"> • Right be forgotten:</p> in certain circumstances, you can ask us to erase your personal data<br /><br />
              <p className="font-bold text-lg text-white">• Right to data portability:</p> you can ask us to provide you with a copy of your personal data in a commonly used electronic format, so that you can transfer it to other businesses<br /><br />
              <p className="font-bold text-lg text-white">• Right to object to automated decision-making:</p> in certain circumstances, you can ask us not to make automated decisions about you based on your personal data that produce significant legal effects<br /><br />
              <p className="font-bold text- text-white"> • Right to lodge a complaint:</p>you can lodge a complaint with your local data protection authority<br /><br />
              If you would like to exercise any of the above rights, please contact us at compliance@nuqiwealth.me<br /><br />

              <p className=" text-lg font-bold text-white" >Keeping your data safe</p><br />
              The information you provide may be confidential, and we will maintain such confidentiality and protect your information in accordance with this privacy notice, our professional obligations and applicable law. We do not sell, rent, distribute, or otherwise make, personal information commercially available to any third party. We may share information with our service providers for the purposes set out in this privacy notice.  We have implemented reasonable administrative, technical and physical measures to protect your personal information against loss, misuse and alteration.<br /><br />
              <p className=" text-lg font-bold text-white">Changes to this privacy policy</p><br />
              This Privacy Policy is effective as of October 20th Dec 2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically.

            </p>
          </>
        );
      case "disclaimer":
        return <p>
          This disclaimer is intended for general informational purposes only. It is provided by Nuqi Digital Wealth Limited ("NUQI DIFC"), a company regulated by the Dubai Financial Services Authority ("DFSA") with offices located at, 501, Innovation One Building, DIFC, Dubai, UAE. <br/> <br/>
          Please note that the information provided is not intended to be research material, investment advice, or a solicitation to buy or sell any securities or financial instruments. It is for general informational purposes only and does not take into account your specific investment objectives, financial situation, or individual needs. You should not rely solely on this information when making investment decisions.<br/><br/>
          Before making any investment, you should carefully review the relevant offering documents and seek independent legal, tax, and regulatory advice. This includes consulting with a qualified advisor to determine if a particular investment is suitable for you, considering your unique circumstances.<br/><br/>
          Opinions, forecasts, and estimates are those of Nuqi Digital Wealth Limited as of the date of this information and are subject to change without notice. Past performance is not indicative of future results, and no guarantee or warranty is made regarding future investment performance.<br/><br/>
          Any forecasts included here regarding potential future movements in rates, prices, events, or occurrences are solely opinions and should not be taken as guarantees of actual future results. Neither the analysts who prepared this information nor their close associates have any material financial interest in the investments mentioned. Additionally, Nuqi Digital Wealth Limited do not hold shares in any of the recommended securities.<br/><br/>
          Furthermore, Nuqi Digital Wealth Limited and its affiliates do not act as corporate brokers, market makers, or have any commercial relationships with the issuers of the securities mentioned in this material. Likewise, none of the issuers of these securities have any ownership stake in Nuqi Digital Wealth Limited or its affiliates.

        </p>;
      case "cookie":
        return <p>
          With each of your visits to our website or app, we may automatically collect the following information: <br /> <br />• Technical information, including the Internet protocol (IP) address used to connect your computer to the Internet, browser type and version, time zone setting, location; browser plug-in types and versions, operating system, as well as the admin system and aggregated data reports. That data is statistical in nature and tells us about the navigational behaviour and actions of our users and does not divulge any information about the identity of any individual; and <br /><br />• Information about your visit; services you viewed or searched for; page response times, download errors, length of visits, page interaction information (such as scrolling, clicks, and mouse-overs); and • In addition, we may use third party services such as Google Analytics that collect, monitor and analyze information about Demographics and Navigational Behaviour. Demographics may include information such as gender, country of provenance and age. Navigational Behaviour may include information such as pages viewed during a session, time spent on a given page and engagement with the Site's content such as clicks and form submissions (e.g. an email subscription to our newsletter). <br /><br />

          For that same reason, we can obtain information about your general use of the internet using cookie files, which are small files that are sent to us and which are stored in your computer or other device's hard drive. The cookies help us improve our Site as well as provide a better and more personalized service. They allow us to:<br /><br /> • Estimate the size and nature of our audience as well as its behavioural tendencies on our Site <br /><br /> • Store information about our users' preferences, which allows us to personalize our Site in conjunction with individual interests<br /><br /> • Accelerate your search<br /> <br />• Recognize you when you come back on our Site<br /><br />

          If you wish to remove cookies, you can deactivate cookies within your browser's parameters. However, if you deactivate your cookies, you might not be able to access some parts of our Site. We offer a free app for a variety of mobile devices. The app processes the personal details you give us in much the same way as our website does. With your consent, we may send you push notifications with information. You may grant us access to your location data or contact details in order to provide services requested by you. Please read the instructions of your mobile device to understand how to change the settings and enable the sharing of such data or the receipt of push notifications.
        </p>; <br />
      default:
        return <p>Privacy Policy content goes here...</p>;
    }
  };

  return (
    <section className="py-10 sm:py-16 text-white min-h-screen">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side Navigation */}
          <div className="lg:w-1/4 w-full p-4 rounded-lg shadow-lg">
            <ul className="space-y-4">
              <li>
                <button
                  className={`block py-3 px-4 w-full text-left rounded-3xl transition-colors duration-200 ${selectedPage === "privacy"
                    ? "bg-cyan-400 text-white font-semibold"
                    : "hover:bg-cyan-400 text-white text-xl"
                    }`}
                  onClick={() => setSelectedPage("privacy")}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-4 w-full text-left  rounded-3xl transition-colors duration-200 ${selectedPage === "terms"
                    ? "bg-cyan-400 text-white font-semibold"
                    : "hover:bg-cyan-400 text-gray-300"
                    }`}
                  onClick={() => setSelectedPage("terms")}
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-4 w-full text-left rounded-3xl transition-colors duration-200 ${selectedPage === "disclaimer"
                    ? "bg-cyan-400 text-white font-semibold"
                    : "hover:bg-cyan-400 text-gray-300"
                    }`}
                  onClick={() => setSelectedPage("disclaimer")}
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-4 w-full text-left rounded-3xl transition-colors duration-200 ${selectedPage === "cookie"
                    ? "bg-cyan-400 text-white font-semibold"
                    : "hover:bg-cyan-400 text-gray-300"
                    }`}
                  onClick={() => setSelectedPage("cookie")}
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 w-full p-8 font-poppins rounded-lg shadow-lg ">
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-cyan-400 pb-6 border-b border-[#32363e]">
                {selectedPage === "privacy"
                  ? "Privacy Policy"
                  : selectedPage === "terms"
                    ? "Terms of Use"
                    : selectedPage === "disclaimer"
                      ? "Disclaimer"
                      : "Cookie Policy"}
              </h2>
            </div>
            <div className="mt-6 text-gray-400 text-base leading-relaxed">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
