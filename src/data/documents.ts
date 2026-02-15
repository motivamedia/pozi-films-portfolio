export interface DocSection {
  number: string;
  title: string;
  content: string;
}

export interface DocMeta {
  id: string;
  title: string;
  description: string;
  version: string;
}

export const documentsMeta: DocMeta[] = [
  {
    id: "production",
    title: "Video Production Services Agreement",
    description:
      "Standard terms and conditions for all video production services. Covers scope of work, payment terms, IP rights, cancellation policy, and more.",
    version: "v1.0 — February 2026",
  },
  {
    id: "talent",
    title: "Talent Release Agreement",
    description:
      "Agreement for performers, models, and on-screen talent. Covers rights granted, compensation, obligations, confidentiality, and data protection.",
    version: "v1.0 — February 2026",
  },
  {
    id: "nda",
    title: "Non-Disclosure Agreement (NDA)",
    description:
      "Mutual confidentiality agreement protecting sensitive information shared between parties during production projects.",
    version: "v1.0 — February 2026",
  },
  {
    id: "brief",
    title: "Project Brief",
    description:
      "Fillable project brief template that accompanies the Production Agreement. Defines scope, deliverables, timeline, and fees for each project.",
    version: "v1.0 — February 2026",
  },
  {
    id: "location",
    title: "Location Release Agreement",
    description:
      "Permission agreement for filming at a privately owned or managed location. Covers access, conditions, liability, and restoration.",
    version: "v1.0 — February 2026",
  },
  {
    id: "crew",
    title: "Freelancer / Crew Agreement",
    description:
      "Agreement for freelance crew members and subcontractors engaged on a per-project basis. Covers scope, fees, IP assignment, and conduct.",
    version: "v1.0 — February 2026",
  },
];

/* ═══════════════════════════════════════════════════════════
   1. PRODUCTION AGREEMENT
   ═══════════════════════════════════════════════════════════ */

export const productionSections: DocSection[] = [
  {
    number: "1",
    title: "Definitions",
    content: `In this Agreement, the following terms shall have the meanings set out below:

**"Producer"** refers to Pozi Poyraz Saroglu, trading as Pozi Visual Art, a sole trader based in London, United Kingdom.

**"Client"** refers to the individual, company, or organisation commissioning the Producer's services, as identified in the accompanying Project Brief.

**"Project"** refers to the video production work described in the Project Brief, including all pre-production, production, and post-production stages.

**"Deliverables"** refers to the final edited video file(s) and any additional materials agreed upon in the Project Brief.

**"Project Brief"** refers to the separate document or written correspondence outlining the scope, timeline, deliverables, and fees for the Project, which forms part of this Agreement.`,
  },
  {
    number: "2",
    title: "Scope of Work",
    content: `2.1. The Producer agrees to provide video production services as outlined in the accompanying Project Brief. The scope includes, but is not limited to: concept development, pre-production planning, filming, editing, colour grading, sound design, and final delivery.

2.2. Any work requested by the Client that falls outside the original Project Brief shall be considered additional work and will be quoted separately. Additional work will not commence until approved in writing by both parties.

2.3. The Producer shall provide all necessary equipment for the production unless otherwise stated in the Project Brief. Specialist equipment hire, studio rental, or location fees shall be charged as additional costs where applicable.`,
  },
  {
    number: "3",
    title: "Production Schedule & Delivery",
    content: `3.1. The estimated production timeline will be outlined in the Project Brief. The Producer will use reasonable endeavours to meet agreed deadlines, however delivery dates are estimates and not guaranteed unless explicitly confirmed in writing.

3.2. The Client acknowledges that delays caused by late provision of materials, feedback, approvals, or access to locations/talent may result in extended delivery timelines. The Producer shall not be held liable for delays arising from the Client's actions or inactions.

3.3. Standard delivery timelines are as follows unless otherwise agreed:
— Social Media Content: 5 business days from final shoot date
— Corporate & Brand Films: 10 business days
— Music Videos: 10–15 business days
— Commercials & Advertising: 15–20 business days
— Event Coverage: 10 business days
— Documentary & Short Film: to be agreed per project

3.4. Expedited delivery may be available upon request and will incur an additional fee.`,
  },
  {
    number: "4",
    title: "Fees & Payment Terms",
    content: `4.1. The total fee for the Project shall be as set out in the Project Brief. All fees are quoted in British Pounds Sterling (GBP) and are exclusive of VAT unless otherwise stated.

4.2. Payment schedule:
— **Booking Deposit:** 50% of the total project fee is due upon signing this Agreement to secure the production date(s). No work shall commence until the deposit has been received.
— **Final Payment:** The remaining 50% is due upon delivery of the first edit (rough cut) and before delivery of the final Deliverables.

4.3. For projects exceeding £10,000, a three-stage payment schedule may be agreed:
— 40% upon signing (deposit)
— 30% upon completion of principal photography
— 30% upon delivery of first edit

4.4. Invoices are payable within 14 days of the invoice date. Late payments shall incur interest at 4% above the Bank of England base rate per annum, calculated daily.

4.5. All expenses reasonably incurred in relation to the Project (including but not limited to travel, accommodation, equipment hire, location fees, talent fees, and licensed music) shall be charged to the Client at cost, unless included in the quoted fee.`,
  },
  {
    number: "5",
    title: "Revisions & Amendments",
    content: `5.1. The number of revision rounds included in the Project fee is specified in the Project Brief. Unless otherwise stated, the following revision allowances apply:
— Social Media Content: 1 round of revisions
— Corporate & Brand: 2 rounds of revisions
— Music Video: 2 rounds of revisions
— Commercial & Advertising: 3 rounds of revisions
— Event Coverage: 1 round of revisions
— Documentary & Short Film: 3 rounds of revisions

5.2. A "round of revisions" is defined as a single, consolidated set of feedback provided by the Client in writing (email or project management tool). Contradictory, piecemeal, or drip-fed feedback across multiple communications shall be treated as separate revision rounds.

5.3. Additional revisions beyond the included rounds shall be charged at £75 per hour of editing time, with a minimum charge of 1 hour per additional round.

5.4. Revision requests must be submitted within 14 days of receiving each edit. If no feedback is provided within this period, the edit shall be deemed approved.

5.5. Fundamental changes to the creative direction, structure, or concept of the Project after production has commenced shall be treated as new work and quoted accordingly.`,
  },
  {
    number: "6",
    title: "Intellectual Property & Usage Rights",
    content: `6.1. The Producer retains full copyright and intellectual property rights over all raw footage, project files, and working materials at all times.

6.2. Upon receipt of full and final payment, the Client is granted a **non-exclusive, perpetual licence** to use the final Deliverables for the purposes specified in the Project Brief.

6.3. Unless otherwise agreed in writing, the standard licence grants the Client the right to use the Deliverables for:
— Digital and social media platforms
— The Client's own website(s)
— Internal presentations and communications

6.4. The following uses require a separate, extended licence agreement and additional fee:
— Broadcast television or cinema
— Paid advertising (digital or traditional)
— Sublicensing to third parties
— Resale or redistribution

6.5. The Producer reserves the right to use the Deliverables and any behind-the-scenes material for self-promotional purposes, including but not limited to: portfolio, showreel, website, social media, award submissions, and case studies, unless a Non-Disclosure Agreement (NDA) has been signed.

6.6. The Client shall not edit, re-edit, alter, or manipulate the Deliverables without the Producer's prior written consent, except for minor cropping or reformatting required for platform specifications.`,
  },
  {
    number: "7",
    title: "Cancellation & Postponement",
    content: `7.1. Cancellation by the Client:
— More than 14 days before the scheduled shoot date: the deposit is **non-refundable** but may be applied to a rescheduled date within 6 months.
— 7–14 days before the scheduled shoot date: 50% of the total project fee is payable.
— Less than 7 days before the scheduled shoot date: 100% of the total project fee is payable.

7.2. Postponement by the Client: One postponement is permitted free of charge, provided at least 7 days' written notice is given. The rescheduled date must fall within 3 months of the original date. Further postponements may incur an administrative fee of £150.

7.3. Cancellation by the Producer: In the unlikely event that the Producer must cancel the Project, the Client shall receive a full refund of all payments made. The Producer shall not be liable for any consequential losses arising from cancellation.

7.4. If the Producer is unable to attend the shoot due to illness or emergency, reasonable efforts will be made to arrange a qualified replacement or reschedule at no additional cost.`,
  },
  {
    number: "8",
    title: "Client Responsibilities",
    content: `8.1. The Client shall ensure that all necessary permissions, licences, and access arrangements for filming locations are obtained prior to the shoot date, unless the Producer has explicitly agreed to handle this.

8.2. The Client is responsible for ensuring that any talent, models, or contributors appearing in the production have provided appropriate consent and releases for their likeness to be used in the Deliverables.

8.3. The Client shall provide all required materials, assets, logos, branding guidelines, scripts, and briefing documents in a timely manner and in formats suitable for production use.

8.4. The Client warrants that any materials provided to the Producer for inclusion in the Deliverables (including but not limited to music, images, text, and trademarks) do not infringe upon any third-party intellectual property rights, and the Client shall indemnify the Producer against any claims arising from such materials.

8.5. The Client shall designate a single point of contact for all communications and approvals related to the Project. Conflicting instructions from multiple Client representatives may result in additional charges.`,
  },
  {
    number: "9",
    title: "Liability & Insurance",
    content: `9.1. The Producer maintains professional indemnity insurance and public liability insurance appropriate to the services provided.

9.2. The Producer's total liability under this Agreement shall be limited to the total fees paid by the Client for the Project.

9.3. The Producer shall not be liable for any indirect, incidental, consequential, or special damages, including but not limited to: loss of profit, loss of data, loss of business opportunity, or reputational damage.

9.4. The Producer takes all reasonable precautions to safeguard footage and project files, including maintaining backups during the production period. However, the Producer cannot guarantee against data loss due to circumstances beyond reasonable control. Raw footage and project files will be retained for a minimum of 90 days following final delivery, after which they may be deleted without notice.

9.5. The Client is responsible for maintaining their own copies of the final Deliverables. The Producer is not obligated to store or re-deliver Deliverables after the 90-day retention period.`,
  },
  {
    number: "10",
    title: "Confidentiality",
    content: `10.1. Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of the Project, including but not limited to: business plans, marketing strategies, unreleased products, financial information, and trade secrets.

10.2. This obligation of confidentiality shall survive the termination of this Agreement for a period of 2 years.

10.3. Where the Client requires enhanced confidentiality provisions, a separate Non-Disclosure Agreement (NDA) may be executed. The NDA shall take precedence over this clause where applicable.`,
  },
  {
    number: "11",
    title: "Force Majeure",
    content: `11.1. Neither party shall be liable for failure to perform obligations under this Agreement where such failure is caused by circumstances beyond reasonable control, including but not limited to: natural disasters, pandemics, government restrictions, acts of terrorism, severe weather, industrial action, or infrastructure failures.

11.2. The affected party shall notify the other party as soon as reasonably practicable and use all reasonable endeavours to mitigate the effects of the force majeure event.

11.3. If a force majeure event continues for more than 30 days, either party may terminate this Agreement by written notice, and the Client shall pay for all work completed to date.`,
  },
  {
    number: "12",
    title: "Governing Law & Disputes",
    content: `12.1. This Agreement shall be governed by and construed in accordance with the laws of England and Wales.

12.2. In the event of any dispute arising from this Agreement, both parties agree to first attempt resolution through good-faith negotiation. If the dispute cannot be resolved within 30 days, either party may refer the matter to mediation before pursuing litigation.

12.3. The courts of England and Wales shall have exclusive jurisdiction over any legal proceedings arising from this Agreement.`,
  },
  {
    number: "13",
    title: "General Provisions",
    content: `13.1. This Agreement, together with the Project Brief, constitutes the entire agreement between the parties and supersedes all prior discussions, negotiations, and agreements.

13.2. No amendment to this Agreement shall be effective unless agreed in writing by both parties.

13.3. If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

13.4. The Producer may subcontract elements of the production (such as drone operation, sound recording, or specialist editing) without the Client's prior consent, provided the Producer remains responsible for the quality of the Deliverables.

13.5. Neither party may assign or transfer their rights or obligations under this Agreement without the prior written consent of the other party.`,
  },
];

/* ═══════════════════════════════════════════════════════════
   2. TALENT RELEASE AGREEMENT
   ═══════════════════════════════════════════════════════════ */

export const talentSections: DocSection[] = [
  {
    number: "1",
    title: "Parties",
    content: `This Talent Release Agreement ("Release") is entered into between:

**"Production Company":** Pozi Visual Art, operated by Pozi Poyraz Saroglu, with registered address in London, United Kingdom. Contact: info@pozi.media | +44 078 100 201 63

**"Talent":** The individual identified in the Talent Details section below, who will appear in, contribute to, or perform in the Production.

**"Client":** The brand, agency, or organisation commissioning the Production, as identified in the accompanying Project Brief (where applicable).`,
  },
  {
    number: "2",
    title: "Talent Details",
    content: `The following details shall be completed for each Talent engaged:
— Full Legal Name: _______________________________________________
— Stage / Professional Name (if applicable): _________________________
— Date of Birth: __________________________________________________
— Address: ______________________________________________________
— Phone: ________________________________________________________
— Email: ________________________________________________________
— Agent / Manager (if applicable): __________________________________
— Agent Contact: _________________________________________________`,
  },
  {
    number: "3",
    title: "Production Details",
    content: `— Project Title: __________________________________________________
— Production Type: (Music Video / Commercial / Corporate / Documentary / Social Media / Other)
— Shoot Date(s): _________________________________________________
— Shoot Location(s): _____________________________________________
— Director: Pozi Poyraz Saroglu (Pozi Visual Art)
— Brief Description of Talent's Role: ________________________________
______________________________________________________________`,
  },
  {
    number: "4",
    title: "Grant of Rights",
    content: `4.1. The Talent hereby grants to the Production Company and its Client(s) an **irrevocable, perpetual, worldwide, royalty-free licence** to use, reproduce, distribute, display, and publicly perform the Talent's likeness, image, voice, name, and performance as captured during the Production ("Footage"), in all media now known or hereafter devised, unless a limited licence is specified in Section 5.

4.2. This grant of rights includes but is not limited to use in:
— The final edited production and all derivative versions
— Behind-the-scenes and making-of content
— Promotional and marketing materials
— Social media platforms and digital advertising
— Broadcast television, cinema, and streaming platforms
— Print materials, press releases, and editorial use
— Portfolio, showreel, and award submissions

4.3. The Production Company may edit, crop, alter, composite, or otherwise modify the Footage at its sole discretion, provided such modifications do not portray the Talent in a defamatory manner.

4.4. The Talent waives any right to inspect or approve the finished production or any derivative works, advertising, or promotional materials that may be created in connection with the Production.`,
  },
  {
    number: "5",
    title: "Licence Limitations (if applicable)",
    content: `5.1. Where the parties agree to limit the scope of the licence granted in Section 4, the following restrictions shall apply (tick all that apply):

— [ ] **Territory:** Usage limited to: _________________________________
— [ ] **Duration:** Licence valid for: _________ months / years from the first publication date
— [ ] **Media:** Usage limited to: ____________________________________
— [ ] **Exclusivity:** The Talent agrees not to appear in competing productions for: _________ months

5.2. If no limitations are marked, the full licence as described in Section 4 shall apply.

5.3. Any extension of a limited licence beyond the agreed scope shall require written consent from the Talent and may be subject to additional fees.`,
  },
  {
    number: "6",
    title: "Compensation",
    content: `6.1. The Talent shall be compensated as follows (tick one):

— [ ] **Paid Engagement:** The Talent will receive a fee of £_____________, payable within 14 days of the shoot date. This fee covers all rights granted under this Release unless otherwise specified.
— [ ] **Deferred Payment:** The Talent will receive £_____________ upon [condition]: _______________________________________
— [ ] **Expenses Only:** The Talent will receive reimbursement for pre-approved travel and subsistence expenses up to £_____________.
— [ ] **No Compensation (TFP / Collaborative):** The Talent participates on a collaborative (Time for Print/Portfolio) basis. The Production Company will provide the Talent with edited stills and/or video content within 30 days of the shoot, suitable for the Talent's own portfolio use.

6.2. The Talent acknowledges that the compensation described above constitutes full and complete payment for the rights granted under this Release.

6.3. The Talent is responsible for their own tax obligations arising from any fees received under this Release. The Production Company will not deduct income tax or National Insurance contributions unless required by law.`,
  },
  {
    number: "7",
    title: "Talent Obligations",
    content: `7.1. The Talent agrees to:
— Arrive at the agreed location at the scheduled call time
— Follow reasonable direction from the Director and production crew
— Maintain a professional and cooperative demeanour on set
— Provide their own wardrobe unless otherwise agreed (wardrobe requirements will be communicated in advance)
— Inform the Production Company of any relevant medical conditions, allergies, or physical limitations that may affect their participation

7.2. The Talent warrants that they are legally entitled to enter into this Release and that their participation in the Production does not breach any existing contractual obligations, including but not limited to exclusivity agreements with other brands, agencies, or production companies.

7.3. If the Talent is represented by an agent or manager, the Talent warrants that they have obtained the necessary consent from their representative to enter into this Release.`,
  },
  {
    number: "8",
    title: "Cancellation & No-Show",
    content: `8.1. **Cancellation by Talent:** If the Talent cancels their participation:
— More than 48 hours before the scheduled call time: no penalty applies.
— Less than 48 hours before the scheduled call time: the Talent may be liable for reasonable costs incurred by the Production Company in securing a replacement.

8.2. **No-Show:** If the Talent fails to attend without prior notice, the Production Company reserves the right to recover demonstrable losses, including but not limited to crew costs, location fees, and equipment hire.

8.3. **Cancellation by Production Company:** If the Production Company cancels the shoot, the Talent shall be notified as soon as reasonably practicable. Any agreed fees for a cancelled shoot shall be handled as follows:
— Cancellation more than 48 hours before: no fee payable (shoot will be rescheduled)
— Cancellation less than 48 hours before: 50% of the agreed fee is payable as a cancellation fee (unless rescheduled within 14 days)`,
  },
  {
    number: "9",
    title: "Health, Safety & Welfare",
    content: `9.1. The Production Company will take all reasonable steps to ensure the health and safety of the Talent during the Production, in accordance with applicable UK health and safety legislation.

9.2. The Talent shall not be required to perform any action that poses an unreasonable risk to their health or safety. The Talent has the right to refuse any direction they reasonably believe to be dangerous.

9.3. The Production Company maintains public liability insurance. Details of the policy are available upon request.

9.4. The Talent is responsible for disclosing any medical conditions, allergies, or physical limitations that may be relevant to their participation before the shoot date.`,
  },
  {
    number: "10",
    title: "Minors",
    content: `10.1. If the Talent is under 18 years of age, this Release must be signed by a parent or legal guardian.

10.2. A parent or legal guardian must be present on set at all times during the minor's participation in the Production.

10.3. Working hours for minors shall comply with the Children (Performances and Activities) (England) Regulations 2014 and any applicable local authority requirements.

10.4. The Production Company will obtain a child performance licence from the relevant local authority where required by law.`,
  },
  {
    number: "11",
    title: "Confidentiality",
    content: `11.1. The Talent agrees to keep confidential any information relating to the Production, the Client, or the Production Company's business that is disclosed during the course of the engagement, including but not limited to: creative concepts, scripts, brand strategies, unreleased products, and production schedules.

11.2. The Talent shall not post, share, or disclose any behind-the-scenes content, images, or information on social media or any other platform without the prior written consent of the Production Company.

11.3. This obligation of confidentiality shall survive the completion of the Production and shall remain in force until the Production Company authorises public disclosure.`,
  },
  {
    number: "12",
    title: "Data Protection",
    content: `12.1. The Production Company will process the Talent's personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.

12.2. Personal data collected under this Release will be used solely for the purposes of administering the Production, fulfilling the rights granted herein, and complying with legal and regulatory obligations.

12.3. The Talent's personal data will not be shared with third parties other than the Client and essential production crew, unless required by law.

12.4. The Talent has the right to request access to, correction of, or deletion of their personal data by contacting the Production Company at info@pozi.media.`,
  },
  {
    number: "13",
    title: "Governing Law",
    content: `13.1. This Release shall be governed by and construed in accordance with the laws of England and Wales.

13.2. Any disputes arising from this Release shall be subject to the exclusive jurisdiction of the courts of England and Wales.

13.3. If any provision of this Release is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
];

/* ═══════════════════════════════════════════════════════════
   3. NON-DISCLOSURE AGREEMENT
   ═══════════════════════════════════════════════════════════ */

export const ndaSections: DocSection[] = [
  {
    number: "1",
    title: "Parties",
    content: `This Non-Disclosure Agreement ("Agreement") is entered into between:

**"Disclosing Party":** Pozi Visual Art, operated by Pozi Poyraz Saroglu, with principal place of business in London, United Kingdom. Contact: info@pozi.media

**"Receiving Party":** The individual or entity identified below:
— Full Name / Company Name: ______________________________________
— Address: ______________________________________________________
— Contact Person (if company): _____________________________________
— Email: ________________________________________________________

This Agreement is **mutual** — both parties may disclose and receive Confidential Information, and both are bound by the obligations herein.`,
  },
  {
    number: "2",
    title: "Purpose",
    content: `2.1. The parties wish to explore or engage in a business relationship relating to video production services ("Purpose"), and in connection with the Purpose, each party may disclose to the other certain confidential and proprietary information.

2.2. This Agreement is intended to protect such information from unauthorised use or disclosure.

2.3. Related Project (if applicable): _________________________________`,
  },
  {
    number: "3",
    title: "Definition of Confidential Information",
    content: `3.1. **"Confidential Information"** means any and all information, whether disclosed orally, in writing, electronically, or by any other means, that is designated as confidential or that a reasonable person would understand to be confidential given the nature of the information and the circumstances of disclosure. This includes but is not limited to:
— Creative concepts, scripts, treatments, and storyboards
— Production schedules, budgets, and financial information
— Client identities, brand strategies, and marketing plans
— Unreleased products, campaigns, or announcements
— Technical processes, equipment configurations, and workflows
— Business plans, pricing structures, and commercial terms
— Raw footage, drafts, and work-in-progress edits
— Personal data relating to talent, crew, or clients

3.2. Confidential Information does **not** include information that:
— Is or becomes publicly available through no fault of the Receiving Party
— Was already known to the Receiving Party prior to disclosure, as evidenced by written records
— Is independently developed by the Receiving Party without reference to the Confidential Information
— Is lawfully received from a third party without restriction on disclosure
— Is required to be disclosed by law, regulation, or court order (provided the Receiving Party gives prompt notice to the Disclosing Party)`,
  },
  {
    number: "4",
    title: "Obligations of the Receiving Party",
    content: `4.1. The Receiving Party agrees to:
— Hold all Confidential Information in strict confidence
— Not disclose Confidential Information to any third party without the prior written consent of the Disclosing Party
— Use Confidential Information solely for the Purpose described in Section 2
— Take all reasonable measures to protect the confidentiality of the information, using at least the same degree of care it uses to protect its own confidential information
— Limit access to Confidential Information to those employees, agents, or advisors who need to know it for the Purpose, and ensure such individuals are bound by confidentiality obligations no less protective than those in this Agreement

4.2. The Receiving Party shall promptly notify the Disclosing Party of any suspected or actual unauthorised use or disclosure of Confidential Information.`,
  },
  {
    number: "5",
    title: "Restrictions on Use",
    content: `5.1. The Receiving Party shall not:
— Copy, reproduce, or duplicate Confidential Information except as reasonably necessary for the Purpose
— Reverse-engineer, decompile, or disassemble any materials containing Confidential Information
— Use Confidential Information to gain a competitive advantage or for any purpose other than the Purpose
— Remove or alter any proprietary notices or markings on Confidential Information

5.2. No licence, intellectual property right, or other right is granted to the Receiving Party by this Agreement, except the limited right to use Confidential Information for the Purpose.`,
  },
  {
    number: "6",
    title: "Social Media & Public Disclosure",
    content: `6.1. Neither party shall post, share, or reference the Confidential Information, the existence of the Purpose, or the relationship between the parties on any social media platform, website, blog, podcast, or other public forum without the prior written consent of the other party.

6.2. This restriction includes but is not limited to:
— Behind-the-scenes photographs or videos
— Production schedules, locations, or talent details
— Draft or unreleased creative materials
— Tagging, mentioning, or referring to the other party's involvement

6.3. Where the parties agree to permit social media activity (for example, approved behind-the-scenes posts), the scope, timing, and content of such posts shall be agreed in writing in advance.`,
  },
  {
    number: "7",
    title: "Duration",
    content: `7.1. This Agreement shall come into effect on the date of the last signature below ("Effective Date").

7.2. The obligations of confidentiality shall remain in force for a period of **3 years** from the Effective Date, unless a different duration is specified below:
— Alternative duration (if applicable): _________ years

7.3. Upon expiration or termination of this Agreement, or upon request by the Disclosing Party, the Receiving Party shall promptly return or destroy all Confidential Information in its possession, including any copies, notes, or derivative materials, and shall confirm destruction in writing if requested.`,
  },
  {
    number: "8",
    title: "Remedies",
    content: `8.1. The parties acknowledge that a breach of this Agreement may cause irreparable harm to the Disclosing Party for which monetary damages may be inadequate.

8.2. In the event of a breach or threatened breach, the Disclosing Party shall be entitled to seek injunctive relief and any other remedies available at law or in equity, without the requirement to post a bond or prove actual damages.

8.3. The rights and remedies provided in this Agreement are cumulative and are not exclusive of any other rights or remedies available at law.`,
  },
  {
    number: "9",
    title: "General Provisions",
    content: `9.1. This Agreement constitutes the entire understanding between the parties regarding confidentiality and supersedes all prior discussions and agreements on this subject.

9.2. No amendment to this Agreement shall be effective unless agreed in writing by both parties.

9.3. If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

9.4. This Agreement shall not create any partnership, joint venture, or agency relationship between the parties.

9.5. Neither party may assign this Agreement without the prior written consent of the other party.

9.6. This Agreement shall be governed by and construed in accordance with the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction.`,
  },
];

/* ═══════════════════════════════════════════════════════════
   4. PROJECT BRIEF
   ═══════════════════════════════════════════════════════════ */

export const briefSections: DocSection[] = [
  {
    number: "1",
    title: "Project Overview",
    content: `— Project Title: __________________________________________________
— Client Name: ___________________________________________________
— Client Company: ________________________________________________
— Client Contact Email: ___________________________________________
— Client Contact Phone: ___________________________________________
— Date of Brief: __________________________________________________
— Producer: Pozi Poyraz Saroglu (Pozi Visual Art)`,
  },
  {
    number: "2",
    title: "Production Type",
    content: `Please indicate the type of production (tick one):
— [ ] Social Media Content
— [ ] Corporate & Brand Film
— [ ] Music Video
— [ ] Commercial & Advertising
— [ ] Event Coverage
— [ ] Documentary / Short Film
— [ ] Other: _____________________________________________________`,
  },
  {
    number: "3",
    title: "Project Description",
    content: `Provide a brief description of the project, its objectives, and the intended audience:

______________________________________________________________________
______________________________________________________________________
______________________________________________________________________
______________________________________________________________________`,
  },
  {
    number: "4",
    title: "Creative Direction & References",
    content: `4.1. Desired tone / mood / style:

______________________________________________________________________
______________________________________________________________________

4.2. Reference videos, images, or mood boards (list URLs or attach separately):

______________________________________________________________________
______________________________________________________________________

4.3. Key messages or calls to action:

______________________________________________________________________
______________________________________________________________________

4.4. Brand guidelines provided: [ ] Yes [ ] No [ ] N/A`,
  },
  {
    number: "5",
    title: "Deliverables",
    content: `List all expected deliverables, formats, and aspect ratios:

— Deliverable 1: _________________________________________________
  Format / Aspect Ratio: _________________________________________
  Duration (approx.): ____________________________________________

— Deliverable 2: _________________________________________________
  Format / Aspect Ratio: _________________________________________
  Duration (approx.): ____________________________________________

— Deliverable 3: _________________________________________________
  Format / Aspect Ratio: _________________________________________
  Duration (approx.): ____________________________________________

— Additional formats required (e.g. 16:9, 9:16, 1:1): ________________

— Raw footage delivery required: [ ] Yes [ ] No`,
  },
  {
    number: "6",
    title: "Production Schedule",
    content: `— Pre-production start date: ________________________________________
— Shoot date(s): __________________________________________________
— Number of shoot days: ___________________________________________
— Call time: ______________________________________________________
— Estimated wrap time: ____________________________________________
— First edit delivery date: __________________________________________
— Final delivery deadline: __________________________________________
— Expedited delivery required: [ ] Yes [ ] No`,
  },
  {
    number: "7",
    title: "Location & Logistics",
    content: `— Shoot location(s): ______________________________________________
______________________________________________________________________
— Location secured by: [ ] Client [ ] Producer [ ] TBC
— Location fee (if applicable): £____________________________________
— Parking / access requirements: ___________________________________
— Permits required: [ ] Yes [ ] No [ ] TBC
— Travel required: [ ] Yes — details: ________________________________
— Accommodation required: [ ] Yes — nights: _________________________`,
  },
  {
    number: "8",
    title: "Talent & Contributors",
    content: `— Number of on-screen talent: _____________________________________
— Talent sourced by: [ ] Client [ ] Producer [ ] TBC
— Talent release forms required: [ ] Yes [ ] No
— Wardrobe provided by: [ ] Client [ ] Talent [ ] Producer [ ] Stylist
— Hair & makeup required: [ ] Yes [ ] No
— Voiceover required: [ ] Yes — language: ___________________________`,
  },
  {
    number: "9",
    title: "Technical Requirements",
    content: `— Resolution: [ ] 4K [ ] 1080p [ ] Other: __________________________
— Frame rate: [ ] 24fps [ ] 25fps [ ] 30fps [ ] 60fps [ ] Other: ________
— Drone / aerial footage required: [ ] Yes [ ] No
— Multicamera setup required: [ ] Yes — number of cameras: ___________
— Specialist equipment required: ____________________________________
— Live streaming required: [ ] Yes [ ] No
— Same-day edit / teaser required: [ ] Yes [ ] No`,
  },
  {
    number: "10",
    title: "Post-Production",
    content: `— Colour grading style: ___________________________________________
— Music / soundtrack: [ ] Licensed library [ ] Original score [ ] Client provides [ ] Artist track
— Sound design required: [ ] Yes [ ] No
— Subtitles / captions required: [ ] Yes — languages: __________________
— Graphics / motion graphics: [ ] Yes — details: _____________________
— Lower thirds / name straps: [ ] Yes [ ] No
— Logo animation / intro: [ ] Yes [ ] No
— Number of revision rounds included: ______________________________`,
  },
  {
    number: "11",
    title: "Fees & Payment",
    content: `— Total project fee: **£__________________________________________**
— Fee breakdown:
  — Pre-production: £______________________________________________
  — Production (shoot days): £______________________________________
  — Post-production: £_____________________________________________
  — Additional costs (travel, equipment, talent): £_____________________

— Payment schedule:
  — Deposit (50%): £________________ due on: ________________________
  — Final payment (50%): £________________ due on: ___________________

— Payment method: [ ] Bank transfer [ ] Other: _______________________
— Expenses included in fee: [ ] Yes [ ] No — estimated expenses: £_____`,
  },
  {
    number: "12",
    title: "Usage & Licensing",
    content: `— Intended usage:
  [ ] Social media (Client's channels)
  [ ] Client website
  [ ] Internal presentations
  [ ] Paid digital advertising
  [ ] Broadcast television
  [ ] Cinema
  [ ] Other: _____________________________________________________

— Territory: [ ] Worldwide [ ] UK only [ ] Other: ____________________
— Licence duration: [ ] Perpetual [ ] Limited: ________________________
— Extended licence required: [ ] Yes [ ] No`,
  },
  {
    number: "13",
    title: "Approval & Signature",
    content: `By signing below, both parties confirm that the details in this Project Brief are accurate and agreed upon. This Project Brief forms part of the Video Production Services Agreement between the parties.

— Any changes to this brief after signing may result in revised timelines and additional costs, subject to written agreement.

— This Project Brief is subject to the terms and conditions of the Video Production Services Agreement dated: _______________`,
  },
];

/* ═══════════════════════════════════════════════════════════
   5. LOCATION RELEASE AGREEMENT
   ═══════════════════════════════════════════════════════════ */

export const locationSections: DocSection[] = [
  {
    number: "1",
    title: "Parties",
    content: `This Location Release Agreement ("Agreement") is entered into between:

**"Production Company":** Pozi Visual Art, operated by Pozi Poyraz Saroglu, with principal place of business in London, United Kingdom. Contact: info@pozi.media | +44 078 100 201 63

**"Location Owner":** The individual or entity with authority to grant access to the filming location identified below:
— Full Name / Company Name: ______________________________________
— Address: ______________________________________________________
— Phone: ________________________________________________________
— Email: ________________________________________________________
— Relationship to Property: [ ] Owner [ ] Leaseholder [ ] Manager [ ] Authorised Agent`,
  },
  {
    number: "2",
    title: "Location Details",
    content: `— Property Name (if applicable): ____________________________________
— Full Address: ___________________________________________________
______________________________________________________________________
— Type of Property: [ ] Residential [ ] Commercial [ ] Public space [ ] Industrial [ ] Hospitality [ ] Other: ____________
— Areas to be used for filming: _____________________________________
______________________________________________________________________
— Areas excluded from filming: _____________________________________`,
  },
  {
    number: "3",
    title: "Production Details",
    content: `— Project Title: __________________________________________________
— Production Type: (Music Video / Commercial / Corporate / Documentary / Social Media / Other)
— Director: Pozi Poyraz Saroglu (Pozi Visual Art)
— Client (if applicable): __________________________________________
— Brief Description of Scenes: _____________________________________
______________________________________________________________________`,
  },
  {
    number: "4",
    title: "Access Schedule",
    content: `— Date(s) of filming: _____________________________________________
— Access time (arrival for setup): __________________________________
— Filming start time: _____________________________________________
— Filming end time: ______________________________________________
— Departure time (after wrap & cleanup): ____________________________
— Additional access required for: [ ] Recce / location scout [ ] Pickup shots [ ] None

4.2. The Production Company will use reasonable endeavours to adhere to the agreed schedule. Any extension beyond the agreed times shall be subject to the Location Owner's approval and may incur additional fees.`,
  },
  {
    number: "5",
    title: "Grant of Rights",
    content: `5.1. The Location Owner grants the Production Company permission to enter, use, and photograph/film at the Location on the dates and times specified above.

5.2. The Location Owner grants the Production Company an **irrevocable, perpetual, worldwide licence** to use the Location's likeness, appearance, and any signage or branding captured in the Footage, in all media now known or hereafter devised, for the purposes of the Production and its promotion.

5.3. The Production Company may depict the Location under a fictional name or alter its appearance through set dressing, lighting, or post-production, provided no permanent modifications are made.

5.4. The Location Owner waives any right to inspect or approve the finished production or any materials featuring the Location.`,
  },
  {
    number: "6",
    title: "Location Fee",
    content: `6.1. The Location Owner shall be compensated as follows (tick one):

— [ ] **Paid:** The Production Company will pay a location fee of £_____________, payable on or before the first day of filming.
— [ ] **No Fee:** The Location Owner grants access at no charge.
— [ ] **In-Kind:** The Location Owner grants access in exchange for: ______________________________________________________________________

6.2. The above fee covers access during the agreed schedule only. Additional time beyond the agreed hours will be charged at £_________ per hour / negotiated separately.`,
  },
  {
    number: "7",
    title: "Production Company Obligations",
    content: `7.1. The Production Company agrees to:
— Treat the Location and all property within it with care and respect
— Confine production activities to the agreed areas
— Not make any permanent alterations, decorations, or modifications to the Location without the prior written consent of the Location Owner
— Remove all equipment, props, set dressing, and waste upon completion of filming
— Restore the Location to its original condition (reasonable wear and tear excepted)
— Comply with all reasonable rules and restrictions set by the Location Owner

7.2. The Production Company shall ensure that all crew members and visitors are informed of and comply with any location-specific rules (e.g. no smoking, no food in certain areas, noise restrictions).`,
  },
  {
    number: "8",
    title: "Insurance & Liability",
    content: `8.1. The Production Company maintains public liability insurance with a minimum cover of £5,000,000 per incident. A copy of the certificate of insurance is available upon request.

8.2. The Production Company shall be liable for any damage to the Location or its contents caused directly by the production crew or their equipment during the agreed access period, subject to:
— Prompt notification by the Location Owner (within 48 hours of the shoot)
— Reasonable evidence of damage and its cause
— The damage not being pre-existing or caused by normal wear and tear

8.3. The Location Owner shall not be liable for any loss of or damage to the Production Company's equipment or property whilst on the Location, unless caused by the Location Owner's negligence.

8.4. The Production Company shall indemnify the Location Owner against any third-party claims arising from the Production Company's activities at the Location.`,
  },
  {
    number: "9",
    title: "Noise, Disruption & Neighbours",
    content: `9.1. The Production Company acknowledges that filming may cause temporary disruption and agrees to minimise noise, light spill, and inconvenience to neighbours and nearby occupants.

9.2. The Location Owner shall inform the Production Company of any noise restrictions, quiet hours, or local regulations that may affect production activities.

9.3. If the Location is within a residential building or shared premises, the Location Owner shall be responsible for notifying neighbours or building management of the filming activity, unless the Production Company agrees to handle this in writing.`,
  },
  {
    number: "10",
    title: "Parking & Access",
    content: `10.1. The Location Owner shall make reasonable efforts to accommodate production vehicle parking during the agreed access period.

— Number of production vehicles expected: __________________________
— Parking arrangements: __________________________________________
— Loading / unloading access: [ ] Available [ ] Restricted — details: ____

10.2. Any parking fees, congestion charges, or access permits required shall be the responsibility of the Production Company unless otherwise agreed.`,
  },
  {
    number: "11",
    title: "Cancellation",
    content: `11.1. **Cancellation by Production Company:** If the Production Company cancels:
— More than 48 hours before the scheduled access: no fee payable
— Less than 48 hours: 50% of the agreed location fee is payable

11.2. **Cancellation by Location Owner:** If the Location Owner withdraws access:
— More than 48 hours before: the Production Company shall be entitled to a full refund of any fees paid
— Less than 48 hours: the Location Owner may be liable for reasonable demonstrable costs incurred by the Production Company in securing an alternative location

11.3. **Force Majeure:** Neither party shall be liable for cancellation caused by circumstances beyond their reasonable control (severe weather, emergencies, government restrictions, etc.).`,
  },
  {
    number: "12",
    title: "Governing Law",
    content: `12.1. This Agreement shall be governed by and construed in accordance with the laws of England and Wales.

12.2. Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
];

/* ═══════════════════════════════════════════════════════════
   6. FREELANCER / CREW AGREEMENT
   ═══════════════════════════════════════════════════════════ */

export const crewSections: DocSection[] = [
  {
    number: "1",
    title: "Parties",
    content: `This Freelancer / Crew Agreement ("Agreement") is entered into between:

**"Production Company":** Pozi Visual Art, operated by Pozi Poyraz Saroglu, with principal place of business in London, United Kingdom. Contact: info@pozi.media | +44 078 100 201 63

**"Freelancer":** The individual or company engaged to provide crew services:
— Full Name / Company Name: ______________________________________
— Trading Name (if applicable): ____________________________________
— Address: ______________________________________________________
— Phone: ________________________________________________________
— Email: ________________________________________________________
— UTR Number (if sole trader): ____________________________________
— Company Number (if limited): ____________________________________`,
  },
  {
    number: "2",
    title: "Engagement & Role",
    content: `2.1. The Production Company engages the Freelancer to provide the following services:

— Role / Position: ________________________________________________
— Department: [ ] Camera [ ] Sound [ ] Lighting [ ] Art / Set [ ] Hair & Makeup [ ] Production [ ] Post-Production [ ] Other: ____________

2.2. The Freelancer shall report to: __________________________________

2.3. Related Project: ______________________________________________
— Client (if applicable): __________________________________________

2.4. The Freelancer is engaged as an **independent contractor** and not as an employee of the Production Company. Nothing in this Agreement shall create an employment relationship, partnership, or joint venture between the parties.`,
  },
  {
    number: "3",
    title: "Schedule & Location",
    content: `— Engagement date(s): ____________________________________________
— Call time: ______________________________________________________
— Estimated wrap time: ____________________________________________
— Location(s): ____________________________________________________
______________________________________________________________________
— Travel required: [ ] Yes — details: ________________________________
— Overnight stay required: [ ] Yes — nights: _________________________`,
  },
  {
    number: "4",
    title: "Fees & Payment",
    content: `4.1. The Freelancer shall be paid as follows:

— Day rate: £____________________________________________________
— Half-day rate (up to 5 hours): £__________________________________
— Overtime rate (per hour, after 10 hours): £_________________________
— Total agreed fee for this engagement: £____________________________

4.2. The fee includes / excludes the following (tick):
— [ ] Travel expenses — up to £___________
— [ ] Accommodation — up to £___________
— [ ] Equipment hire — up to £___________
— [ ] Meals / per diem — up to £___________

4.3. Payment terms: The Freelancer shall submit an invoice within 14 days of the engagement date. The Production Company shall pay the invoice within **14 days** of receipt.

4.4. Payment method: [ ] Bank transfer [ ] Other: _____________________

4.5. The Freelancer is responsible for their own income tax, National Insurance contributions, and VAT (where applicable). The Production Company will not make deductions unless required by IR35 or other legislation.`,
  },
  {
    number: "5",
    title: "Equipment",
    content: `5.1. The Freelancer shall provide the following equipment (if applicable):

______________________________________________________________________
______________________________________________________________________

5.2. The Freelancer is responsible for ensuring all personal equipment is in safe working order, appropriately maintained, and covered by their own insurance.

5.3. Where the Production Company provides equipment to the Freelancer, the Freelancer shall:
— Use the equipment with reasonable care
— Not remove the equipment from the production location without permission
— Report any damage or malfunction immediately
— Return the equipment in the same condition as received (fair wear and tear excepted)

5.4. The Freelancer shall be liable for any loss of or damage to Production Company equipment caused by the Freelancer's negligence.`,
  },
  {
    number: "6",
    title: "Intellectual Property",
    content: `6.1. All footage, recordings, photographs, and other materials created by the Freelancer during the engagement ("Work Product") shall be the exclusive property of the Production Company.

6.2. The Freelancer hereby **assigns** to the Production Company all copyright, intellectual property rights, and any other rights in the Work Product, for the full duration of such rights worldwide.

6.3. The Freelancer waives all moral rights in the Work Product to the fullest extent permitted by law, including the right to be identified as the author and the right to object to derogatory treatment of the Work Product.

6.4. The Freelancer shall not retain, copy, or distribute any Work Product (including raw footage, audio recordings, or photographs) without the prior written consent of the Production Company.

6.5. The Freelancer may use the finished, published Deliverables for personal portfolio purposes only (showreel, website, social media), provided:
— The Production Company is credited
— The use does not occur before the Client's public release
— The use does not breach any NDA in effect`,
  },
  {
    number: "7",
    title: "Conduct & Professionalism",
    content: `7.1. The Freelancer shall:
— Arrive at the call time, fully prepared and with all agreed equipment
— Conduct themselves in a professional manner at all times
— Follow reasonable direction from the Director and production leads
— Treat all talent, crew, clients, and location staff with respect
— Comply with all health and safety requirements on set
— Not consume alcohol or illegal substances during working hours
— Not bring unauthorised persons to the production location

7.2. The Production Company reserves the right to terminate the Freelancer's engagement immediately if the Freelancer's behaviour is disruptive, dangerous, or otherwise unprofessional. In such cases, the Freelancer shall be paid only for hours worked.`,
  },
  {
    number: "8",
    title: "Confidentiality",
    content: `8.1. The Freelancer agrees to keep strictly confidential all information relating to the Production, the Client, and the Production Company's business, including but not limited to: creative concepts, client identities, brand strategies, production schedules, budgets, and unreleased content.

8.2. The Freelancer shall not photograph, screenshot, or record any behind-the-scenes content for personal use or social media without the prior written consent of the Production Company.

8.3. This obligation of confidentiality shall survive the termination of this Agreement and shall remain in force until the Production Company authorises public disclosure or for 2 years, whichever is longer.`,
  },
  {
    number: "9",
    title: "Health & Safety",
    content: `9.1. The Production Company will conduct a risk assessment for each production and will brief the Freelancer on any relevant health and safety matters before filming commences.

9.2. The Freelancer shall:
— Comply with all health and safety instructions given on set
— Report any hazards, incidents, or near-misses immediately to the Production Company
— Not take any action that endangers themselves, other crew, talent, or members of the public
— Provide their own personal protective equipment (PPE) appropriate to their role, unless the Production Company agrees to supply it

9.3. The Freelancer has the right to refuse to carry out any task they reasonably believe poses an unacceptable risk to their safety.`,
  },
  {
    number: "10",
    title: "Insurance",
    content: `10.1. The Freelancer is strongly advised to maintain the following insurance (tick as applicable):
— [ ] Public liability insurance (minimum £1,000,000)
— [ ] Professional indemnity insurance
— [ ] Equipment insurance (for personal kit)
— [ ] Employer's liability insurance (if engaging assistants)

10.2. The Production Company maintains its own public liability and professional indemnity insurance covering production activities.

10.3. The Freelancer shall provide evidence of insurance upon request.`,
  },
  {
    number: "11",
    title: "Cancellation",
    content: `11.1. **Cancellation by Production Company:**
— More than 48 hours before the call time: no fee payable
— Less than 48 hours before the call time: 50% of the agreed day rate is payable as a cancellation fee
— On the day / no notice: 100% of the agreed day rate is payable

11.2. **Cancellation by Freelancer:**
— More than 48 hours before the call time: no penalty, but the Freelancer shall use reasonable efforts to assist in finding a replacement
— Less than 48 hours: the Freelancer may be liable for reasonable additional costs incurred by the Production Company in securing a replacement at short notice

11.3. Weather-related cancellations for outdoor shoots shall be treated as mutual cancellations with no penalty to either party, provided reasonable notice is given.`,
  },
  {
    number: "12",
    title: "Substitution & Assignment",
    content: `12.1. The Freelancer may, with the prior written consent of the Production Company, provide a suitably qualified substitute to perform the services under this Agreement. The Freelancer remains responsible for the substitute's performance and compliance with this Agreement.

12.2. Neither party may assign their rights or obligations under this Agreement without the prior written consent of the other party.`,
  },
  {
    number: "13",
    title: "Governing Law",
    content: `13.1. This Agreement shall be governed by and construed in accordance with the laws of England and Wales.

13.2. Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the courts of England and Wales.

13.3. If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
];
