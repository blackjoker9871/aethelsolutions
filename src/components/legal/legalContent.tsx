import React from "react";
import { LegalSectionItem } from "./LegalPageLayout";

/* =========================================================================
   01. PRIVACY POLICY
========================================================================= */
export const PRIVACY_POLICY_SECTIONS: LegalSectionItem[] = [
  {
    id: "info-we-collect",
    num: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          AETHELSOLUTIONS PRIVATE LIMITED ("Aethel", "we", "us", or "our") respects your personal privacy. We collect information necessary to provide, manage, and engineer bespoke software, artificial intelligence systems, and automation workflows.
        </p>
        <p>
          We collect information directly from you when you submit project inquiries, communicate with our engineering directors, or enter into professional services agreements.
        </p>
      </>
    ),
  },
  {
    id: "info-you-provide",
    num: "02",
    title: "Information You Provide",
    content: (
      <>
        <p>When interacting with our website or project intake forms, you may provide:</p>
        <ul className="list-disc pl-5 space-y-1.5 font-mono text-xs">
          <li><strong>Identity Data:</strong> Full name, company/organization name, and professional designation.</li>
          <li><strong>Contact Data:</strong> Work email address, telephone/WhatsApp number, and website URLs.</li>
          <li><strong>Project & Operational Data:</strong> Descriptions of business workflows, operational bottlenecks, technology stack preferences, budget ranges, and project milestones.</li>
        </ul>
      </>
    ),
  },
  {
    id: "info-automatic",
    num: "03",
    title: "Information Collected Automatically",
    content: (
      <>
        <p>
          When you browse aethelsolution.in, standard non-identifying technical information may be collected automatically by hosting servers, including your IP address, browser type, operating system version, referring URLs, and session timestamps.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-info",
    num: "04",
    title: "How We Use Information",
    content: (
      <>
        <p>We use the information collected for legitimate commercial and engineering purposes:</p>
        <ul className="list-disc pl-5 space-y-1.5 font-mono text-xs">
          <li>Evaluating, scoping, and estimating bespoke software and AI projects.</li>
          <li>Communicating regarding inquiries, scheduling discovery calls, and providing technical proposals.</li>
          <li>Delivering, maintaining, and supporting commissioned client systems.</li>
          <li>Fulfilling statutory accounting, taxation, and regulatory compliance obligations in India.</li>
        </ul>
      </>
    ),
  },
  {
    id: "project-confidentiality",
    num: "05",
    title: "Project and Enquiry Information",
    content: (
      <>
        <p>
          We treat all proprietary operational details, system architecture sketches, and business logic shared during project scoping with strict professional confidentiality. We do not sell, rent, or trade your inquiry information to third-party marketing brokers.
        </p>
      </>
    ),
  },
  {
    id: "communication",
    num: "06",
    title: "Communication Channels",
    content: (
      <>
        <p>
          By providing your email address or phone/WhatsApp number in our intake forms, you consent to receive direct communications from Aethel regarding your project inquiry. We do not send automated mass marketing spam.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    num: "07",
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>
          We use strictly necessary and functional cookies to ensure page navigation, security, and draft state persistence. Please refer to our Cookie Policy for details on managing preferences.
        </p>
      </>
    ),
  },
  {
    id: "service-providers",
    num: "08",
    title: "Service Providers & Subprocessors",
    content: (
      <>
        <p>
          We engage trusted third-party cloud infrastructure and API providers (such as hosting networks, communication APIs, and secure database providers) who process data under contractual confidentiality obligations strictly for operational delivery.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    num: "09",
    title: "Data Security Guardrails",
    content: (
      <>
        <p>
          We implement technical access controls, SSL/TLS encryption for data in transit, and role-based access to safeguard personal information. However, no electronic transmission over the Internet or digital storage architecture can be guaranteed as completely impenetrable.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    num: "10",
    title: "Data Retention",
    content: (
      <>
        <p>
          Personal and project data is retained for as long as necessary to fulfill the operational engagement, service client accounts, resolve disputes, and comply with legal, tax, and regulatory retention requirements under Indian law.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    num: "11",
    title: "Your Rights and Choices (DPDP Act Alignment)",
    content: (
      <>
        <p>
          In accordance with applicable personal data protection laws, including India's Digital Personal Data Protection Act framework, you have the right to request access to, correction of, or erasure of your personal data held by Aethel.
        </p>
        <p>
          To exercise these rights, please contact our team at <strong>aethel.officialdesk@gmail.com</strong>.
        </p>
      </>
    ),
  },
  {
    id: "children-privacy",
    num: "12",
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Our services and website are exclusively directed to commercial enterprises, business owners, and adult professionals. We do not knowingly collect personal data from individuals under 18 years of age.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    num: "13",
    title: "Third-Party Links",
    content: (
      <>
        <p>
          Our website may contain references or links to third-party tools, APIs, and partner platforms. We are not responsible for the privacy practices or contents of external websites.
        </p>
      </>
    ),
  },
  {
    id: "policy-changes",
    num: "14",
    title: "Changes to This Policy",
    content: (
      <>
        <p>
          We may periodically update this Privacy Policy to reflect modifications in our engineering services or statutory requirements. Changes will be effective upon posting with a revised "Last Updated" timestamp.
        </p>
      </>
    ),
  },
  {
    id: "contact-privacy",
    num: "15",
    title: "Contact Us",
    content: (
      <>
        <p>For questions or requests concerning this Privacy Policy, contact:</p>
        <div className="p-4 rounded-xl neu-inset font-mono text-xs space-y-1">
          <div><strong>AETHELSOLUTIONS PRIVATE LIMITED</strong></div>
          <div>Website: aethelsolution.in</div>
          <div>Email: aethel.officialdesk@gmail.com</div>
        </div>
      </>
    ),
  },
];

/* =========================================================================
   02. TERMS & CONDITIONS
========================================================================= */
export const TERMS_SECTIONS: LegalSectionItem[] = [
  {
    id: "acceptance",
    num: "01",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms and Conditions ("Terms") govern your access to and use of aethelsolution.in and the engineering services provided by AETHELSOLUTIONS PRIVATE LIMITED. By accessing this website, you agree to be bound by these Terms.
        </p>
      </>
    ),
  },
  {
    id: "about-aethel",
    num: "02",
    title: "About Aethel",
    content: (
      <>
        <p>
          AETHELSOLUTIONS PRIVATE LIMITED is a technology engineering firm that conceives, designs, architects, and develops bespoke artificial intelligence systems, custom internal business software, and workflow automation solutions.
        </p>
      </>
    ),
  },
  {
    id: "enquiries-vs-contracts",
    num: "03",
    title: "Enquiries vs. Binding Contracts",
    content: (
      <>
        <p className="font-bold text-[#6D4AFF]">
          ✦ Important Clarification on Website Submissions:
        </p>
        <p>
          Submitting a project brief through our website (/contact) or discussing an idea with Aethel constitutes an exploratory enquiry and does NOT create a binding software development or service contract.
        </p>
        <p>
          A formal contractual relationship is established only upon the mutual execution of a written Master Services Agreement (MSA), Statement of Work (SOW), or formal project proposal.
        </p>
      </>
    ),
  },
  {
    id: "scope-proposals",
    num: "04",
    title: "Project Scope & Proposals",
    content: (
      <>
        <p>
          All project scopes, architectural deliverables, delivery phases, and fees are defined in individual project Statements of Work. Estimates provided prior to formal SOW execution are indicative and subject to deep process discovery.
        </p>
      </>
    ),
  },
  {
    id: "payments-milestones",
    num: "05",
    title: "Payments, Milestones & Taxes",
    content: (
      <>
        <p>
          Client engagements are invoiced in accordance with agreed milestone schedules or periodic retainers outlined in the applicable SOW. All invoices are subject to applicable Goods and Services Tax (GST) and statutory levies in India.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    num: "06",
    title: "Client Responsibilities",
    content: (
      <>
        <p>
          Successful system engineering requires active collaboration. Clients agree to provide timely technical access, necessary business logic clarifications, API credentials, and milestone sign-offs within agreed evaluation windows.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    num: "07",
    title: "Intellectual Property Rights",
    content: (
      <>
        <p>
          Unless otherwise agreed in a written SOW, upon receipt of full milestone payments, rights to custom-developed bespoke application code for the client transfer to the client. Aethel retains ownership of pre-existing core frameworks, libraries, and proprietary engineering methodologies.
        </p>
      </>
    ),
  },
  {
    id: "third-party-dependencies",
    num: "08",
    title: "Third-Party Services & APIs",
    content: (
      <>
        <p>
          Custom systems often integrate third-party APIs (e.g. WhatsApp Cloud API, cloud inference providers, database hosting). Aethel is not liable for service interruptions, policy alterations, or pricing shifts introduced by independent third-party platforms.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    num: "09",
    title: "Confidentiality",
    content: (
      <>
        <p>
          Both parties agree to treat non-public operational data, business metrics, source code, and architectural designs exchanged during engagement as confidential information.
        </p>
      </>
    ),
  },
  {
    id: "liability-warranties",
    num: "10",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable Indian law, Aethel shall not be liable for indirect, incidental, consequential, or punitive damages resulting from system downtime, third-party API failures, or loss of profits.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    num: "11",
    title: "Governing Law & Dispute Resolution",
    content: (
      <>
        <p>
          These Terms and any project contracts shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the competent courts in India.
        </p>
      </>
    ),
  },
  {
    id: "contact-terms",
    num: "12",
    title: "Contact Information",
    content: (
      <>
        <p>For questions regarding these Terms & Conditions:</p>
        <div className="p-4 rounded-xl neu-inset font-mono text-xs space-y-1">
          <div><strong>AETHELSOLUTIONS PRIVATE LIMITED</strong></div>
          <div>Email: aethel.officialdesk@gmail.com</div>
        </div>
      </>
    ),
  },
];

/* =========================================================================
   03. REFUND & CANCELLATION POLICY
========================================================================= */
export const REFUND_POLICY_SECTIONS: LegalSectionItem[] = [
  {
    id: "scope-service",
    num: "01",
    title: "Scope & Nature of Services",
    content: (
      <>
        <p>
          AETHELSOLUTIONS PRIVATE LIMITED provides specialized B2B professional engineering services, including custom software development, artificial intelligence systems, workflow automation, and operational consulting.
        </p>
        <p>
          Because our work involves dedicated engineering hours, bespoke architecture, and tailored source code, refund and cancellation terms operate in conjunction with the signed Statement of Work (SOW) or proposal for each engagement.
        </p>
      </>
    ),
  },
  {
    id: "project-deposits",
    num: "02",
    title: "Project Deposits & Mobilization Fees",
    content: (
      <>
        <p>
          Initial project deposits or mobilization fees cover deep process discovery, technical requirement auditing, and architectural design. Deposits are non-refundable once architectural discovery work and resource allocation have commenced.
        </p>
      </>
    ),
  },
  {
    id: "milestone-payments",
    num: "03",
    title: "Milestone Payments & Deliverable Sign-Off",
    content: (
      <>
        <p>
          Engineering projects are typically structured in defined milestone stages (e.g., Architecture Blueprint → Core Engineering → Integration → Deployment).
        </p>
        <p>
          Once a milestone deliverable is reviewed, approved, or deployed into production by the client, the corresponding milestone payment is non-refundable.
        </p>
      </>
    ),
  },
  {
    id: "cancellation-before-after",
    num: "04",
    title: "Cancellation Before and After Work Begins",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-1.5 font-mono text-xs">
          <li><strong>Cancellation Prior to Work Commencement:</strong> If an engagement is cancelled in writing before discovery or development has begun, any unallocated advance payments will be refunded minus statutory/banking charges.</li>
          <li><strong>Cancellation After Work Has Begun:</strong> If cancelled mid-project, the client is billed for verified milestone hours and deliverables completed up to the date of written cancellation notice.</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-costs",
    num: "05",
    title: "Third-Party Direct Costs",
    content: (
      <>
        <p>
          Payments made to third-party providers (e.g., domain registrars, cloud server infrastructure, specialized third-party API licenses, or WhatsApp conversation fees) are governed by those respective third parties and are non-refundable through Aethel.
        </p>
      </>
    ),
  },
  {
    id: "subscription-retainers",
    num: "06",
    title: "Retainer & Ongoing Maintenance Services",
    content: (
      <>
        <p>
          For periodic system maintenance or support retainers, clients may terminate ongoing services by providing 30 days' written notice prior to the next billing cycle. Pre-paid current cycle service periods are non-refundable.
        </p>
      </>
    ),
  },
  {
    id: "duplicate-payments",
    num: "07",
    title: "Duplicate or Erroneous Transactions",
    content: (
      <>
        <p>
          In the event of an accidental duplicate bank transfer or verified clerical overpayment, Aethel will promptly investigate and process a refund of the excess amount back to the originating bank account within 7 to 10 business days.
        </p>
      </>
    ),
  },
  {
    id: "deficient-services",
    num: "08",
    title: "Service Deficiency Resolution Protocol",
    content: (
      <>
        <p>
          If a delivered software module fails to perform in accordance with the documented specifications agreed in the SOW, Aethel will provide corrective engineering during the agreed warranty support window to remedy verified bugs or deviations without extra charge.
        </p>
      </>
    ),
  },
  {
    id: "how-to-request",
    num: "09",
    title: "How to Request Review",
    content: (
      <>
        <p>
          To request billing review, cancellation, or refund processing, send a written notice detailing your Project ID and SOW reference to:
        </p>
        <div className="p-4 rounded-xl neu-inset font-mono text-xs space-y-1">
          <div><strong>AETHELSOLUTIONS PRIVATE LIMITED</strong></div>
          <div>Billing & Accounts: aethel.officialdesk@gmail.com</div>
        </div>
      </>
    ),
  },
];

/* =========================================================================
   04. DISCLAIMER
========================================================================= */
export const DISCLAIMER_SECTIONS: LegalSectionItem[] = [
  {
    id: "informational-purpose",
    num: "01",
    title: "Website Information & Purpose",
    content: (
      <>
        <p>
          The information provided on aethelsolution.in is for general informational, educational, and commercial discovery purposes. While we strive for accuracy, content is provided on an "as is" and "as available" basis without statutory warranties.
        </p>
      </>
    ),
  },
  {
    id: "current-vs-future",
    num: "02",
    title: "Current Capabilities vs. Future Concepts",
    content: (
      <>
        <p className="font-bold text-[#6D4AFF]">
          ✦ Clear Distinction of Future-Facing Concepts:
        </p>
        <p>
          Certain sections of this website (such as conceptual future workspace models, ambient AI computing visions, and exploratory research) illustrate Aethel's long-term research direction. These concepts are explicitly labeled as "FUTURE DIRECTION" and do not represent commercially available off-the-shelf products unless confirmed in a signed SOW.
        </p>
      </>
    ),
  },
  {
    id: "ai-output-nature",
    num: "03",
    title: "AI & Probabilistic System Nuance",
    content: (
      <>
        <p>
          Artificial intelligence, large language models, and computer vision algorithms are inherently probabilistic. While Aethel engineers strict verification layers, guardrails, and deterministic state validation, AI outputs should be monitored with appropriate human-in-the-loop oversight where mission-critical decisions are involved.
        </p>
      </>
    ),
  },
  {
    id: "no-guaranteed-stats",
    num: "04",
    title: "Case Studies & Outcome Representations",
    content: (
      <>
        <p>
          Project descriptions and workflow examples shown on our website reflect specific architectural implementations for particular clients. Operational gains depend on company adoption, data quality, and management execution; prior outcomes do not constitute a universal guarantee for every business.
        </p>
      </>
    ),
  },
  {
    id: "third-party-disclaimer",
    num: "05",
    title: "Third-Party Software & External Links",
    content: (
      <>
        <p>
          Our site and software architectures may connect to third-party tools, APIs, and frameworks. Aethel does not endorse or assume liability for independent third-party services, changes in third-party API pricing, or third-party server downtimes.
        </p>
      </>
    ),
  },
  {
    id: "professional-advice",
    num: "06",
    title: "No Legal or Financial Advice",
    content: (
      <>
        <p>
          Content on this website does not constitute legal, financial, accounting, or tax advice. Clients are encouraged to consult certified professionals regarding regulatory compliance in their specific sectors.
        </p>
      </>
    ),
  },
];

/* =========================================================================
   05. COOKIE POLICY
========================================================================= */
export const COOKIE_POLICY_SECTIONS: LegalSectionItem[] = [
  {
    id: "what-are-cookies",
    num: "01",
    title: "What Are Cookies",
    content: (
      <>
        <p>
          Cookies are small text files placed on your device by websites you visit. They are widely used to make websites function efficiently, improve user experience, and provide basic navigational telemetry.
        </p>
      </>
    ),
  },
  {
    id: "necessary-cookies",
    num: "02",
    title: "Strictly Necessary Cookies",
    content: (
      <>
        <p>
          These cookies are essential for you to navigate our website and use its core features (such as secure form token validation and responsive routing). The website cannot function properly without these cookies.
        </p>
      </>
    ),
  },
  {
    id: "preference-cookies",
    num: "03",
    title: "Preference & Functional Cookies",
    content: (
      <>
        <p>
          These cookies allow our website to remember choices you make (such as draft information in multi-step project briefs) to provide a more personalized, friction-free interaction.
        </p>
      </>
    ),
  },
  {
    id: "analytics-cookies",
    num: "04",
    title: "Analytics & Telemetry Cookies",
    content: (
      <>
        <p>
          We may deploy minimal, privacy-respecting aggregated analytics tools to understand page load speeds and interface interactions. We do not track personal identifying information across unrelated third-party websites.
        </p>
      </>
    ),
  },
  {
    id: "managing-cookies",
    num: "05",
    title: "How to Control and Disable Cookies",
    content: (
      <>
        <p>
          Most web browsers allow you to control cookies through their browser settings. You can configure your browser to reject all cookies or notify you when a cookie is sent. Note that disabling essential cookies may impact certain interface features.
        </p>
      </>
    ),
  },
  {
    id: "cookie-updates",
    num: "06",
    title: "Updates to this Policy",
    content: (
      <>
        <p>
          We may update our Cookie Policy periodically. Any modifications will be reflected with a revised update date.
        </p>
        <div className="p-4 rounded-xl neu-inset font-mono text-xs space-y-1 mt-2">
          <div><strong>AETHELSOLUTIONS PRIVATE LIMITED</strong></div>
          <div>Email: aethel.officialdesk@gmail.com</div>
        </div>
      </>
    ),
  },
];

/* =========================================================================
   06. GRIEVANCE & CUSTOMER SUPPORT
========================================================================= */
export const GRIEVANCE_SECTIONS: LegalSectionItem[] = [
  {
    id: "how-to-raise",
    num: "01",
    title: "How to Raise a Concern or Grievance",
    content: (
      <>
        <p>
          AETHELSOLUTIONS PRIVATE LIMITED is dedicated to responsive customer support and fair dispute resolution. If you experience an issue regarding our engineering services, billing, or privacy rights, you may submit a formal notice directly to our support desk.
        </p>
        <p>
          Send an email with the subject line <strong>"GRIEVANCE // [YOUR COMPANY NAME]"</strong> to:
        </p>
        <div className="p-4 rounded-xl neu-inset font-mono text-xs space-y-1">
          <div><strong>Primary Grievance Channel:</strong></div>
          <div className="text-[#6D4AFF] font-bold">aethel.officialdesk@gmail.com</div>
          <div>Entity: AETHELSOLUTIONS PRIVATE LIMITED</div>
          <div>Jurisdiction: India</div>
        </div>
      </>
    ),
  },
  {
    id: "info-to-include",
    num: "02",
    title: "Information to Include in Your Notice",
    content: (
      <>
        <p>To enable prompt investigation and resolution, please provide:</p>
        <ul className="list-disc pl-5 space-y-1.5 font-mono text-xs">
          <li>Your full name, company name, and official designation.</li>
          <li>Registered contact email and phone number.</li>
          <li>Project ID, Statement of Work (SOW) reference, or invoice number (if applicable).</li>
          <li>A clear, detailed chronological description of the issue or grievance.</li>
          <li>Relevant supporting documentation, screenshots, or logs.</li>
        </ul>
      </>
    ),
  },
  {
    id: "acknowledgement-window",
    num: "03",
    title: "Complaint Acknowledgement Window",
    content: (
      <>
        <p>
          In accordance with statutory standards under applicable Indian Information Technology and E-Commerce rules, our grievance desk will acknowledge receipt of your complaint within <strong>48 hours</strong> of receipt with a formal reference number.
        </p>
      </>
    ),
  },
  {
    id: "review-process",
    num: "04",
    title: "Investigation & Review Process",
    content: (
      <>
        <p>
          Upon acknowledgement, the complaint is routed to our senior engineering and business directors. We conduct an internal audit of code repositories, communication logs, and milestone deliverables to evaluate the situation objectively.
        </p>
      </>
    ),
  },
  {
    id: "resolution-timeframe",
    num: "05",
    title: "Resolution Framework & Timeframe",
    content: (
      <>
        <p>
          We aim to provide a comprehensive resolution or corrective engineering plan within <strong>15 to 30 business days</strong> from the date of initial receipt, keeping the complainant informed of milestones throughout the review.
        </p>
      </>
    ),
  },
  {
    id: "escalation",
    num: "06",
    title: "Executive Escalation",
    content: (
      <>
        <p>
          If you are unsatisfied with the proposed resolution, you may request an executive escalation meeting with the directors of AETHELSOLUTIONS PRIVATE LIMITED to resolve the matter through mutual good-faith commercial consultation.
        </p>
      </>
    ),
  },
];
