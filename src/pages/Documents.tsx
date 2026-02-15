import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Lock, ArrowLeft } from "lucide-react";
import { useState } from "react";
import {
  documentsMeta,
  productionSections,
  talentSections,
  ndaSections,
  briefSections,
  locationSections,
  crewSections,
  type DocSection,
} from "@/data/documents";

const PASSWORD = "London-89";

/* ─── helpers ─── */

const renderMarkdown = (text: string) =>
  text
    .replace(
      /\*\*"([^"]+)"\*\*/g,
      '<strong class="text-foreground font-medium">"$1"</strong>'
    )
    .replace(
      /\*\*([^*]+)\*\*/g,
      '<strong class="text-foreground font-medium">$1</strong>'
    )
    .replace(/\n—/g, "<br/>—");

const sectionMap: Record<string, DocSection[]> = {
  production: productionSections,
  talent: talentSections,
  nda: ndaSections,
  brief: briefSections,
  location: locationSections,
  crew: crewSections,
};

/* preambles shown before section list */
const preambles: Record<string, string> = {
  production:
    'This Video Production Services Agreement ("Agreement") is entered into between the Producer and the Client as identified in the accompanying Project Brief. By signing the Project Brief or making the initial deposit payment, the Client agrees to be bound by the terms and conditions set out below.',
  talent:
    'This Talent Release Agreement ("Release") sets out the terms under which the Talent agrees to participate in a video production by Pozi Visual Art. By signing this Release, the Talent consents to the recording and use of their likeness, image, voice, and performance as described herein.',
  nda: "This Non-Disclosure Agreement protects confidential and proprietary information exchanged between the parties in connection with video production projects by Pozi Visual Art. Both parties are bound by the obligations herein.",
  brief:
    "This Project Brief accompanies the Video Production Services Agreement and defines the scope, deliverables, timeline, and fees for the production. Both parties should complete all relevant sections before signing.",
  location:
    "This Location Release Agreement sets out the terms under which the Location Owner grants the Production Company permission to access and film at the specified property.",
  crew: "This Freelancer / Crew Agreement sets out the terms of engagement for independent contractors providing production services to Pozi Visual Art on a per-project basis.",
};

/* header info per document */
const headerInfo: Record<
  string,
  {
    docLabel: string;
    docTitle: string;
    partyALabel: string;
    partyAName: string;
    partyADetail: string;
    partyBLabel: string;
    partyBPlaceholder: string;
  }
> = {
  production: {
    docLabel: "Legal Document",
    docTitle: "Video Production Services Agreement",
    partyALabel: "Producer",
    partyAName: "Pozi Poyraz Saroglu",
    partyADetail: "t/a Pozi Visual Art — London, UK",
    partyBLabel: "Client",
    partyBPlaceholder: "As per Project Brief",
  },
  talent: {
    docLabel: "Legal Document",
    docTitle: "Talent Release & Consent Agreement",
    partyALabel: "Production Company",
    partyAName: "Pozi Poyraz Saroglu",
    partyADetail: "t/a Pozi Visual Art — London, UK — info@pozi.media",
    partyBLabel: "Talent",
    partyBPlaceholder: "As per Section 2",
  },
  nda: {
    docLabel: "Legal Document",
    docTitle: "Mutual Non-Disclosure Agreement",
    partyALabel: "Disclosing Party",
    partyAName: "Pozi Poyraz Saroglu",
    partyADetail: "t/a Pozi Visual Art — London, UK — info@pozi.media",
    partyBLabel: "Receiving Party",
    partyBPlaceholder: "As per Section 1",
  },
  brief: {
    docLabel: "Project Document",
    docTitle: "Project Brief — Production Scope & Terms",
    partyALabel: "Producer",
    partyAName: "Pozi Poyraz Saroglu",
    partyADetail: "t/a Pozi Visual Art — London, UK",
    partyBLabel: "Client",
    partyBPlaceholder: "As per Section 1",
  },
  location: {
    docLabel: "Legal Document",
    docTitle: "Location Release & Filming Permission",
    partyALabel: "Production Company",
    partyAName: "Pozi Poyraz Saroglu",
    partyADetail: "t/a Pozi Visual Art — London, UK — info@pozi.media",
    partyBLabel: "Location Owner",
    partyBPlaceholder: "As per Section 1",
  },
  crew: {
    docLabel: "Legal Document",
    docTitle: "Freelancer / Crew Services Agreement",
    partyALabel: "Production Company",
    partyAName: "Pozi Poyraz Saroglu",
    partyADetail: "t/a Pozi Visual Art — London, UK — info@pozi.media",
    partyBLabel: "Freelancer",
    partyBPlaceholder: "As per Section 1",
  },
};

/* signature parties */
const signatureParties: Record<
  string,
  { a: string; b: string }
> = {
  production: { a: "Producer", b: "Client" },
  talent: { a: "Production Company", b: "Talent" },
  nda: { a: "Disclosing Party", b: "Receiving Party" },
  brief: { a: "Producer", b: "Client" },
  location: { a: "Production Company", b: "Location Owner" },
  crew: { a: "Production Company", b: "Freelancer" },
};

/* ─── shared components ─── */

const SectionRenderer = ({
  sections,
  delayBase,
}: {
  sections: DocSection[];
  delayBase: number;
}) => (
  <div className="space-y-8">
    {sections.map((section, i) => (
      <motion.div
        key={section.number}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: delayBase + i * 0.04 }}
        className="border-t border-border/40 pt-6"
      >
        <div className="flex items-baseline gap-3 mb-3">
          <span className="text-xs text-muted-foreground/30 font-light tabular-nums">
            {section.number.padStart(2, "0")}
          </span>
          <h2 className="text-base font-light text-foreground tracking-tight">
            {section.title}
          </h2>
        </div>
        <div className="ml-7">
          {section.content.split("\n\n").map((paragraph, pi) => (
            <p
              key={pi}
              className="text-sm font-light text-muted-foreground leading-relaxed mb-3 last:mb-0"
              dangerouslySetInnerHTML={{
                __html: renderMarkdown(paragraph),
              }}
            />
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

const SignatureBlock = ({
  partyA,
  partyB,
  delay,
}: {
  partyA: string;
  partyB: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="border-t border-border mt-12 pt-10"
  >
    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50 font-light mb-8">
      Acknowledgement & Signature
    </p>
    <p className="text-sm font-light text-muted-foreground leading-relaxed mb-8">
      By signing below, both parties acknowledge that they have read, understood,
      and agree to be bound by the terms and conditions of this document.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      <div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40 mb-6">
          {partyA}
        </p>
        <div className="border-b border-border/60 pb-1 mb-2">
          <p className="text-sm font-light text-foreground">
            Pozi Poyraz Saroglu
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[10px] text-muted-foreground/40">Signature</p>
          <p className="text-[10px] text-muted-foreground/40">
            Date: _______________
          </p>
        </div>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40 mb-6">
          {partyB}
        </p>
        <div className="border-b border-border/60 pb-1 mb-2">
          <p className="text-sm font-light text-muted-foreground/30 italic">
            {partyB} name
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[10px] text-muted-foreground/40">Signature</p>
          <p className="text-[10px] text-muted-foreground/40">
            Date: _______________
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── password gate ─── */

const PasswordGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm text-center"
      >
        <div className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center mx-auto mb-6">
          <Lock className="w-5 h-5 text-muted-foreground/50" />
        </div>
        <h1 className="text-xl font-light text-foreground tracking-tight mb-2">
          Protected Documents
        </h1>
        <p className="text-sm font-light text-muted-foreground mb-8">
          Enter the access code to view documents.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Access code"
            autoFocus
            className={`w-full bg-transparent border rounded-sm px-4 py-3 text-sm font-light text-foreground text-center tracking-[0.15em] placeholder:text-muted-foreground/30 focus:outline-none transition-colors duration-300 ${
              error
                ? "border-red-500/60"
                : "border-border focus:border-foreground"
            }`}
          />
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs text-red-400 font-light"
              >
                Incorrect code. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
          <button
            type="submit"
            className="w-full px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-light rounded-full border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-all duration-300"
          >
            Access Documents
          </button>
        </form>
      </motion.div>
    </div>
  );
};

/* ─── main component ─── */

const Documents = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  const doc = activeDoc ? documentsMeta.find((d) => d.id === activeDoc) : null;
  const sections = activeDoc ? sectionMap[activeDoc] : null;
  const info = activeDoc ? headerInfo[activeDoc] : null;
  const sig = activeDoc ? signatureParties[activeDoc] : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <div className="print:hidden">
          <Header />
        </div>

        <AnimatePresence mode="wait">
          {/* ── INDEX ── */}
          {!activeDoc && (
            <motion.section
              key="index"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-2">
                Documents
              </p>
              <h1 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-3">
                Legal Documents
              </h1>
              <p className="text-sm font-light text-muted-foreground max-w-lg mb-12">
                Standard agreements and contracts for Pozi Visual Art
                productions. Click on a document to view its full contents.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {documentsMeta.map((d, i) => (
                  <motion.button
                    key={d.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    onClick={() => setActiveDoc(d.id)}
                    className="text-left border border-border/60 hover:border-border rounded-sm p-6 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <FileText className="w-5 h-5 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-light text-foreground group-hover:text-foreground/80 transition-colors">
                          {d.title}
                        </h3>
                        <p className="text-[10px] text-muted-foreground/40 mt-1">
                          {d.version}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                      {d.description}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── DOCUMENT VIEW ── */}
          {activeDoc && doc && sections && info && sig && (
            <motion.section
              key={activeDoc}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Top bar */}
              <div className="flex items-start justify-between mb-12">
                <div>
                  <button
                    onClick={() => setActiveDoc(null)}
                    className="print:hidden inline-flex items-center gap-1.5 text-xs text-muted-foreground/50 hover:text-foreground font-light mb-4 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    All Documents
                  </button>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-2">
                    {info.docLabel}
                  </p>
                  <h1 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-3">
                    {doc.title}
                  </h1>
                  <p className="text-sm font-light text-muted-foreground max-w-lg">
                    {doc.description}
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="print:hidden flex-shrink-0 ml-6 inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.15em] font-light rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300"
                >
                  <Download className="w-3 h-3" />
                  Print
                </button>
              </div>

              {/* Header info box */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="border border-border/60 rounded-sm p-6 md:p-8 mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-5 h-5 text-muted-foreground/50" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50 font-light">
                      {info.docLabel}
                    </p>
                    <p className="text-sm font-light text-foreground">
                      {info.docTitle}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-light">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40 mb-1">
                      {info.partyALabel}
                    </p>
                    <p className="text-foreground">{info.partyAName}</p>
                    <p className="text-muted-foreground/60">
                      {info.partyADetail}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40 mb-1">
                      {info.partyBLabel}
                    </p>
                    <p className="text-muted-foreground/40 italic">
                      {info.partyBPlaceholder}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40 mb-1">
                      Version
                    </p>
                    <p className="text-foreground">{doc.version}</p>
                  </div>
                </div>
              </motion.div>

              {/* Preamble */}
              {preambles[activeDoc] && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="mb-10"
                >
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {preambles[activeDoc]}
                  </p>
                </motion.div>
              )}

              {/* Sections */}
              <SectionRenderer sections={sections} delayBase={0.4} />

              {/* Talent minor block */}
              {activeDoc === "talent" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.85 }}
                  className="border-t border-border/40 mt-8 pt-6"
                >
                  <div className="ml-7 border border-border/40 rounded-sm p-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/40 font-light mb-3">
                      For Minors (under 18) — Parent / Guardian Consent
                    </p>
                    <p className="text-sm font-light text-muted-foreground leading-relaxed mb-4">
                      I confirm that I am the parent or legal guardian of the
                      Talent named above. I have read and understood this Release
                      and I consent to my child's participation in the Production
                      on the terms described herein.
                    </p>
                    <div className="space-y-3">
                      <p className="text-sm font-light text-muted-foreground">
                        Parent / Guardian Name:
                        ________________________________
                      </p>
                      <p className="text-sm font-light text-muted-foreground">
                        Relationship to Talent:
                        ________________________________
                      </p>
                      <div className="flex justify-between pt-2">
                        <p className="text-[10px] text-muted-foreground/40">
                          Signature: ________________________
                        </p>
                        <p className="text-[10px] text-muted-foreground/40">
                          Date: _______________
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Signature */}
              <SignatureBlock partyA={sig.a} partyB={sig.b} delay={0.9} />

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="mt-12 rounded-sm border border-border/40 p-6 text-center"
              >
                <p className="text-sm font-light text-muted-foreground">
                  Questions about this document?{" "}
                  <a
                    href="mailto:info@pozi.media"
                    className="text-foreground hover:text-muted-foreground transition-colors duration-300 underline underline-offset-4 decoration-border"
                  >
                    info@pozi.media
                  </a>
                </p>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>

        <div className="print:hidden">
          <section id="contact">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documents;
