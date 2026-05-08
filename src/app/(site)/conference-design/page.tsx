import Link from "next/link";
import { LayoutDashboard, ShieldCheck } from "lucide-react";
import { CommitteeLunchOverlap } from "@/components/site/CommitteeLunchOverlap";
import { PageIntro } from "@/components/site/Prose";

export const dynamic = "force-dynamic";

const REFORM_PHASES = [
  {
    phase: "Phase 1 · Institutional & legal governance",
    focus: "Legitimacy, data security, and fiscal accessibility",
    rows: [
      {
        gap: "PDPA compliance",
        description:
          "Delegate applications and committee communications often collect personal data without a clearly documented legal basis, retention policy, or accountability owner.",
        reform: "Integrate formal data-protection standards and appoint a DPO.",
        examples: [
          "Allocation matrices are shared with all conference members and include full names, emails, schools, and dietary restrictions.",
          "Chairs sometimes email delegates without BCC, exposing delegate email addresses to the full recipient list.",
        ],
        exampleNote:
          "Neither use of personal data is clearly disclosed in conference forms/consent workflows, which is what makes the practice unlawful.",
      },
      {
        gap: "Operational opacity",
        description:
          "Delegates and advisors are expected to perform against hidden standards when scoring logic, procedural expectations, and handbook priorities are not released early.",
        reform: "Publish rubrics and Rules of Procedure early and explain why they exist.",
        examples: [
          "Delegates are called out for behavior they were not aware was prohibited (for example, hugging or kissing).",
          "A delegate is not awarded due to low participation in one specific conference component (for example, directives) despite consistently strong overall participation.",
        ],
      },
      {
        gap: "Economic gatekeeping",
        description:
          "Flat registration pricing and late financial support decisions exclude delegates who could perform strongly but cannot absorb upfront costs.",
        reform: "Use early-bird tiers and needs-based scholarship funds.",
        examples: [
          "Low- to middle-income families may not be able to afford spending 1,000+ THB on a single conference event.",
        ],
      },
      {
        gap: "Flawed chair selection",
        description:
          "Chair appointments can become network-driven when criteria are vague, reducing trust in neutrality, consistency, and academic standards.",
        reform: "Codify transparent, merit-based public selection processes.",
        examples: [
          "Selection processes are unclear, and experience is often credited by quantity (number of conferences) rather than demonstrated quality and responsibility.",
          "Some chair spots appear to be influenced by whether applicants personally know members of the SMT.",
        ],
        exampleNote:
          "Prior experiences with applicants can be relevant, but any preference should be justified with a clear summary of observed traits and performance evidence.",
      },
      {
        gap: "Allocation inequity",
        description:
          "Committee and country allocations can appear arbitrary when there is no visible prioritization method balancing delegate level, school requests, and competitive fairness.",
        reform: "Adopt standardized prioritization with transparent allocation logic.",
        examples: [
          "Allocations are sometimes influenced by payment timing, which can unfairly advantage delegates whose families can pay earlier.",
          "Delegates are sometimes assigned countries they are not comfortable representing due to limited or absent preference matching.",
        ],
      },
    ],
  },
  {
    phase: "Phase 2 · Academic & simulation design",
    focus: "Eliminating 'Wikipedia diplomacy'",
    rows: [
      {
        gap: "Topic stagnation",
        description:
          "Recurring agendas and recycled background framing reduce intellectual challenge and encourage memorized talking points instead of policy analysis.",
        reform: "Prioritize current global developments over recycled prompts.",
        examples: [
          "Several conferences reuse the same agenda, such as 'The Question of the Treatment of Women in Conflict Zones.'",
        ],
      },
      {
        gap: "Agreement loops",
        description:
          "Some committee-country setups produce low-friction consensus too quickly, limiting meaningful negotiation, coalition trade-offs, and amendment rigor.",
        reform: "Select countries and blocs with meaningful policy clashes.",
        examples: [
          "On topics like the treatment of women in the Middle East, nearly all countries in committee already condemn the issue, so resolution differences stay minimal and very few amendments are proposed.",
        ],
      },
      {
        gap: "Substandard guides",
        description:
          "When study guides vary heavily in quality, delegates enter rooms with uneven context, weakening debate depth and procedural confidence.",
        reform: "Enforce mandatory guide templates with Secretariat feedback cycles.",
        examples: [
          "Some chairs do minimal topic research, resulting in guides with weak key stances, overly basic introductions, and almost no usable resources.",
        ],
      },
      {
        gap: "Fiscal realism gaps",
        description:
          "Resolutions often include ambitious actions without implementation budgets, financing pathways, or burden-sharing assumptions.",
        reform: "Require budgeting sections and fiscal impact statements in outputs.",
        examples: [
          "A resolution proposes using 20 billion in ECOSOC funding to launch a new study on declining birth rates, without proportionality or budget justification.",
        ],
      },
    ],
  },
  {
    phase: "Phase 3 · Delegate experience & equity",
    focus: "Neurodiversity, accessibility, and wellbeing",
    rows: [
      {
        gap: "Cognitive exhaustion",
        description:
          "Long debate blocks without structured breaks reduce focus quality, increase emotional friction, and disproportionately harm delegates with higher cognitive load.",
        reform: "Cap debate blocks and enforce mandatory break windows.",
        examples: [
          "A full 2-hour session is run entirely as moderated caucus, leaving delegates seated, silent, and physically still for extended periods.",
        ],
      },
      {
        gap: "Accessibility gaps",
        description:
          "A one-size-fits-all environment can block participation for neurodivergent delegates and others needing sensory, visual, or pacing accommodations.",
        reform: "Provide universal font access, sensory rooms, and fidget tools.",
        examples: [
          "All conference materials are distributed in cursive or dense serif fonts that are difficult to read for dyslexic delegates.",
          "Across conferences I attended, only one made any visible neurodiversity accommodation, and even then it was limited to a brief mention of a sensory room without clear directions or access guidance.",
        ],
      },
      {
        gap: "Subjective bias",
        description:
          "Award and feedback outcomes can drift toward personality-based impressions when evaluators lack shared calibration tools and objective evidence logs.",
        reform: "Run bias-limitation training and objective tally workflows.",
        examples: [
          "Award decisions can be influenced by personal relationships, such as close friendships or dating relationships with chairs.",
        ],
      },
      {
        gap: "Logistical waste",
        description:
          "Paper-heavy workflows and informal note-passing create avoidable delays, data loss, and unequal communication access across committees.",
        reform: "Move to secure digital note-passing workflows (InterMUN model).",
        examples: [
          "Notepads are distributed to all delegates/chairs for note-passing, but most pages go unused and discarded notes generate recurring paper waste.",
        ],
      },
    ],
  },
  {
    phase: "Phase 4 · Execution & simulation rigor",
    focus: "Professional decorum and geopolitical realism",
    rows: [
      {
        gap: "AI plagiarism",
        description:
          "Unregulated AI-generated submissions can misrepresent delegate competence and undermine authenticity in position papers and opening statements.",
        reform: "Enforce strict no-AI delegate submission policies.",
      },
      {
        gap: "Unprofessional behavior",
        description:
          "Without pre-trained conduct norms, committee culture can slip into personal attacks, performative disruption, and weak respect for procedure.",
        reform: "Use a formal Code of Conduct with mandated pre-conference workshops.",
      },
      {
        gap: "Power-delegate bullying",
        description:
          "High-confidence delegates can dominate speaking queues and caucus space, suppressing quieter participants and narrowing coalition diversity.",
        reform: "Train chairs in low-profile intervention protocols.",
      },
      {
        gap: "Stance abandonment",
        description:
          "Delegates may chase popularity by dropping national positions without transparent justification, weakening simulation realism and policy integrity.",
        reform: "Tie major national-policy deviation to award eligibility criteria.",
      },
      {
        gap: "Crisis saturation",
        description:
          "Excessive crisis injects can overwhelm procedural flow and force committees into reaction mode rather than sustained policy drafting.",
        reform: "Cap traditional committees at one vetted crisis update.",
      },
    ],
  },
  {
    phase: "Phase 5 · Evaluation & feedback loops",
    focus: "Closing accountability gaps",
    rows: [
      {
        gap: "Arbitrary awards",
        description:
          "Delegates often cannot trace why results were decided when judging standards are unpublished or interpreted inconsistently across rooms.",
        reform: "Publish comprehensive award rubrics before conference day one.",
      },
      {
        gap: "Silent feedback",
        description:
          "Conferences lose improvement data when delegate reflections are optional, generic, or collected too late to inform concrete changes.",
        reform: "Require delegate exit-ticket forms with actionable prompts.",
      },
      {
        gap: "Advisor marginalization",
        description:
          "Advisor capacity is underused when too few advisors are assigned to too many committees, limiting safeguarding and pedagogical support.",
        reform: "Target a 1 advisor : 2 committees support ratio.",
      },
    ],
  },
] as const;

const DOCUMENT_EVIDENCE = [
  {
    source: "Chair Expectations (SEAMUN I 2027)",
    notes: [
      "Defines neutrality, professionalism, impartiality, and evidence-based award justification for chairs.",
      "Requires personalized post-conference feedback and in-committee support for neurodivergent delegates.",
      "Uses a structured conduct management model (verbal warning → warnings → strikes) for consistency.",
    ],
  },
  {
    source: "Rules of Procedure (RoP)",
    notes: [
      "Codifies motion hierarchy, voting methods, and amendment workflows to reduce procedural ambiguity.",
      "Sets explicit AI-use boundaries, stance-consistency requirements, and award-disqualification triggers.",
      "Operationalizes digital note-passing with monitoring/reporting expectations to improve accountability.",
    ],
  },
  {
    source: "Chair Report Template",
    notes: [
      "Standardizes guide architecture: topic intro, key terms, timeline, key stances, solutions, and bibliography.",
      "Includes required delegate resource sections to reduce uneven prep quality across committees.",
      "Supports the reform goal of replacing vague committee prep with minimum quality baselines.",
    ],
  },
  {
    source: "SEAMUN Conference Planning Brief",
    notes: [
      "Documents a paper-light operational model with secure digital notes, live voting support, and committee tooling.",
      "Plans advisor/chair training, handbook standards, and pre-conference delegate prep to improve fairness.",
      "Builds schedule buffers, breaks, and logistics checkpoints to reduce fatigue and execution risk.",
    ],
  },
] as const;

export const metadata = {
  title: "My conference design",
};

const DESIGN_TABS = [
  { id: "overview", label: "SEAMUN I Overview" },
  { id: "planning-overview", label: "Planning Overview" },
  { id: "committees-structure", label: "Committees & Structure" },
  { id: "committees-topics", label: "Committees & Topics" },
  { id: "schedule", label: "2-Day Schedule" },
  { id: "digital-systems", label: "Digital Systems" },
  { id: "why-decisions", label: "Why These Decisions" },
  { id: "reforms", label: "MUN Reform Strategy" },
  { id: "doc-evidence", label: "Document Evidence" },
  { id: "planning-docs", label: "Planning Documents" },
] as const;

const REFORM_PHASE_COLORS = [
  {
    chip: "bg-indigo-100 text-indigo-800",
    card: "border-indigo-200/80 bg-indigo-50/70",
    item: "border-indigo-200/80 bg-indigo-100/60",
    example: "border-indigo-300/55 bg-white/80",
  },
  {
    chip: "bg-violet-100 text-violet-800",
    card: "border-violet-200/80 bg-violet-50/70",
    item: "border-violet-200/80 bg-violet-100/60",
    example: "border-violet-300/55 bg-white/80",
  },
  {
    chip: "bg-sky-100 text-sky-800",
    card: "border-sky-200/80 bg-sky-50/70",
    item: "border-sky-200/80 bg-sky-100/60",
    example: "border-sky-300/55 bg-white/80",
  },
  {
    chip: "bg-teal-100 text-teal-800",
    card: "border-teal-200/80 bg-teal-50/70",
    item: "border-teal-200/80 bg-teal-100/60",
    example: "border-teal-300/55 bg-white/80",
  },
  {
    chip: "bg-amber-100 text-amber-800",
    card: "border-amber-200/80 bg-amber-50/70",
    item: "border-amber-200/80 bg-amber-100/60",
    example: "border-amber-300/55 bg-white/80",
  },
] as const;

type TabId = (typeof DESIGN_TABS)[number]["id"];
const SCHEDULE_GROUPS = [
  { id: "g1", label: "Group 1", committees: "ECOSOC, UNICEF, F1, Press Corps" },
  { id: "g2", label: "Group 2", committees: "WHO, INTERPOL, HSC, UNSC" },
  { id: "g3", label: "Group 3", committees: "UNODC, UN Women, DISEC, FWC" },
  { id: "g4", label: "Group 4", committees: "EU Parliament, UNESCO, UNHRC" },
] as const;

type ScheduleGroupId = (typeof SCHEDULE_GROUPS)[number]["id"];
type ScheduleViewId = ScheduleGroupId | "overlap";
type ScheduleItem = { time: string; task: string };

function scheduleFocus(task: string): string {
  const lower = task.toLowerCase();
  if (lower.includes("arrival") || lower.includes("registration")) return "Onboarding";
  if (lower.includes("opening ceremony")) return "Launch";
  if (lower.includes("icebreakers")) return "Community-building";
  if (lower.includes("motion-focused") || lower.includes("motions")) return "Procedural debate";
  if (lower.includes("resolution writing")) return "Drafting & negotiation";
  if (lower.includes("voting procedures")) return "Decision-making";
  if (lower.includes("lunch")) return "Cross-group networking";
  if (lower.includes("break")) return "Wellbeing & transition";
  if (lower.includes("feedback")) return "Reflection";
  if (lower.includes("closing ceremony")) return "Recognition & close";
  if (lower.includes("departure")) return "Operations wrap-up";
  return "Conference flow";
}

function scheduleTaskTitle(task: string): string {
  // Keep the task label clean; duration and intent are shown in dedicated columns.
  const withoutFocus = task.split("·")[0].trim();
  return withoutFocus.replace(/\s*\([^()]*\)\s*$/, "").trim();
}

function scheduleDuration(task: string): string {
  const m = task.match(/\(([^()]*)\)\s*$/);
  return m?.[1] ?? "—";
}

const GROUP_SCHEDULES: Record<
  ScheduleGroupId,
  { day1: ScheduleItem[]; day2: ScheduleItem[] }
> = {
  g1: {
    day1: [
      { time: "07:30", task: "Arrival & registration (1 hr)" },
      { time: "08:30", task: "Opening ceremony (45 mins)" },
      { time: "09:15", task: "Break & photo ops (30 mins)" },
      { time: "09:45", task: "Icebreakers (15 mins)" },
      { time: "10:00", task: "Committee session 1 · motion-focused (1 hr)" },
      { time: "11:00", task: "Lunch (Group 1) (1 hr)" },
      { time: "12:00", task: "Committee session 2 · resolution writing (2 hr 30 mins)" },
      { time: "14:30", task: "Break & photo ops · resolutions due (30 mins)" },
      { time: "15:00", task: "Committee session 3 · voting procedures (1 hr 30 mins)" },
      { time: "16:30", task: "Feedback sessions & delegate departure (30 mins)" },
      { time: "17:00", task: "Chair + SMT departure (30 mins)" },
    ],
    day2: [
      { time: "07:30", task: "Arrival (1 hr)" },
      { time: "08:30", task: "Registration & photo ops (30 mins)" },
      { time: "09:00", task: "Committee session 1 · motion-focused (1 hr)" },
      { time: "10:00", task: "Break (30 mins)" },
      { time: "10:30", task: "Committee session 2 · motions & resolution writing (1 hr 15 mins)" },
      { time: "12:30", task: "Lunch (Group 1) (1 hr)" },
      { time: "13:30", task: "Committee session 3 · resolution writing (1 hr)" },
      { time: "14:30", task: "Break · resolutions due (30 mins)" },
      { time: "15:00", task: "Committee session 4 · voting procedures (1 hr)" },
      { time: "16:00", task: "Feedback & break (30 mins)" },
      { time: "16:30", task: "Closing ceremony (1 hr)" },
      { time: "17:30", task: "Photo ops & chair/delegate departure (30 mins)" },
      { time: "18:00", task: "SMT departure (30 mins)" },
    ],
  },
  g2: {
    day1: [
      { time: "07:30", task: "Arrival & registration (1 hr)" },
      { time: "08:30", task: "Opening ceremony (45 mins)" },
      { time: "09:15", task: "Break & photo ops (30 mins)" },
      { time: "09:45", task: "Icebreakers (15 mins)" },
      { time: "10:00", task: "Committee session 1 · motion-focused (1 hr 30 mins)" },
      { time: "11:30", task: "Lunch (Group 2) (1 hr)" },
      { time: "12:30", task: "Committee session 2 · resolution writing (2 hr)" },
      { time: "14:30", task: "Break & photo ops · resolutions due (30 mins)" },
      { time: "15:00", task: "Committee session 3 · voting procedures (1 hr 30 mins)" },
      { time: "16:30", task: "Feedback sessions & delegate departure (30 mins)" },
      { time: "17:00", task: "Chair + SMT departure (30 mins)" },
    ],
    day2: [
      { time: "07:30", task: "Arrival (1 hr)" },
      { time: "08:30", task: "Registration & photo ops (30 mins)" },
      { time: "09:00", task: "Committee session 1 · motion-focused (1 hr)" },
      { time: "10:00", task: "Break (30 mins)" },
      { time: "10:30", task: "Committee session 2 · motions & resolution writing (1 hr 15 mins)" },
      { time: "12:15", task: "Lunch (Group 2) (1 hr)" },
      { time: "13:15", task: "Committee session 3 · resolution writing (1 hr 15 mins)" },
      { time: "14:30", task: "Break · resolutions due (30 mins)" },
      { time: "15:00", task: "Committee session 4 · voting procedures (1 hr)" },
      { time: "16:00", task: "Feedback & break (30 mins)" },
      { time: "16:30", task: "Closing ceremony (1 hr)" },
      { time: "17:30", task: "Photo ops & chair/delegate departure (30 mins)" },
      { time: "18:00", task: "SMT departure (30 mins)" },
    ],
  },
  g3: {
    day1: [
      { time: "07:30", task: "Arrival & registration (1 hr)" },
      { time: "08:30", task: "Opening ceremony (45 mins)" },
      { time: "09:15", task: "Break & photo ops (30 mins)" },
      { time: "09:45", task: "Icebreakers (15 mins)" },
      { time: "10:00", task: "Committee session 1 · motion-focused (2 hrs)" },
      { time: "12:00", task: "Lunch (Group 3) (1 hr)" },
      { time: "13:00", task: "Committee session 2 · resolution writing (1 hr 30 mins)" },
      { time: "14:30", task: "Break & photo ops · resolutions due (30 mins)" },
      { time: "15:00", task: "Committee session 3 · voting procedures (1 hr 30 mins)" },
      { time: "16:30", task: "Feedback sessions & delegate departure (30 mins)" },
      { time: "17:00", task: "Chair + SMT departure (30 mins)" },
    ],
    day2: [
      { time: "07:30", task: "Arrival (1 hr)" },
      { time: "08:30", task: "Registration & photo ops (30 mins)" },
      { time: "09:00", task: "Committee session 1 · motion-focused (1 hr)" },
      { time: "10:00", task: "Break (30 mins)" },
      { time: "10:30", task: "Committee session 2 · motions & resolution writing (2 hr 15 mins)" },
      { time: "12:00", task: "Lunch (Group 3) (1 hr)" },
      { time: "13:00", task: "Committee session 3 · resolution writing (1 hr 30 mins)" },
      { time: "14:30", task: "Break · resolutions due (30 mins)" },
      { time: "15:00", task: "Committee session 4 · voting procedures (1 hr)" },
      { time: "16:00", task: "Feedback & break (30 mins)" },
      { time: "16:30", task: "Closing ceremony (1 hr)" },
      { time: "17:30", task: "Photo ops & chair/delegate departure (30 mins)" },
      { time: "18:00", task: "SMT departure (30 mins)" },
    ],
  },
  g4: {
    day1: [
      { time: "07:30", task: "Arrival & registration (1 hr)" },
      { time: "08:30", task: "Opening ceremony (45 mins)" },
      { time: "09:15", task: "Break & photo ops (30 mins)" },
      { time: "09:45", task: "Icebreakers (15 mins)" },
      { time: "10:00", task: "Committee session 1 · motion-focused (2 hrs)" },
      { time: "12:30", task: "Lunch (Group 4) (1 hr)" },
      { time: "13:30", task: "Committee session 2 · resolution writing (1 hr)" },
      { time: "14:30", task: "Break & photo ops · resolutions due (30 mins)" },
      { time: "15:00", task: "Committee session 3 · voting procedures (1 hr 30 mins)" },
      { time: "16:30", task: "Feedback sessions & delegate departure (30 mins)" },
      { time: "17:00", task: "Chair + SMT departure (30 mins)" },
    ],
    day2: [
      { time: "07:30", task: "Arrival (1 hr)" },
      { time: "08:30", task: "Registration & photo ops (30 mins)" },
      { time: "09:00", task: "Committee session 1 · motion-focused (1 hr)" },
      { time: "10:00", task: "Break (30 mins)" },
      { time: "10:30", task: "Committee session 2 · motions & resolution writing (2 hr 15 mins)" },
      { time: "11:45", task: "Lunch (Group 4) (1 hr)" },
      { time: "12:45", task: "Committee session 3 · resolution writing (1 hr 45 mins)" },
      { time: "14:30", task: "Break · resolutions due (30 mins)" },
      { time: "15:00", task: "Committee session 4 · voting procedures (1 hr)" },
      { time: "16:00", task: "Feedback & break (30 mins)" },
      { time: "16:30", task: "Closing ceremony (1 hr)" },
      { time: "17:30", task: "Photo ops & chair/delegate departure (30 mins)" },
      { time: "18:00", task: "SMT departure (30 mins)" },
    ],
  },
};

function resolveTab(tab?: string): TabId {
  const valid = DESIGN_TABS.find((item) => item.id === tab);
  return valid?.id ?? "overview";
}

function resolveScheduleGroup(group?: string): ScheduleGroupId {
  const valid = SCHEDULE_GROUPS.find((item) => item.id === group);
  return valid?.id ?? "g1";
}

function resolveScheduleView(group?: string): ScheduleViewId {
  if (group === "overlap") return "overlap";
  return resolveScheduleGroup(group);
}

export default async function ConferenceDesignPage({
  searchParams,
}: {
  searchParams?:
    | { tab?: string; group?: string }
    | Promise<{ tab?: string; group?: string }>;
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const activeTab = resolveTab(resolvedSearchParams?.tab);
  const activeScheduleView = resolveScheduleView(resolvedSearchParams?.group);
  const activeGroup = activeScheduleView === "overlap" ? "g1" : activeScheduleView;
  return (
    <>
      <PageIntro
        eyebrow="Page 6 · Apply learning"
        emoji="🎪"
        icon={<LayoutDashboard className="h-7 w-7" strokeWidth={1.75} />}
        title="My conference design"
      >
        <p>
          This page uses my actual planning brief for{" "}
          <strong className="text-[rgba(15,23,42,0.92)]">SEAMUN I</strong>, including strategy,
          operations, academic structure, and delegate systems. The conference model is
          built as a non-profit, tech-forward format designed for accessibility and
          academic rigor.
        </p>
      </PageIntro>

      <div className="space-y-4">
        <nav className="neu-inset p-3">
          <p className="flex items-center gap-2 px-2 py-2 text-[11px] font-semibold uppercase tracking-wide text-[rgba(100,116,139,0.45)]">
            <span aria-hidden>📁</span>
            Folders
          </p>
          <div className="flex flex-wrap gap-2">
            {DESIGN_TABS.map((item) => (
              <Link
                key={item.id}
                href={
                  item.id === "schedule"
                    ? `/conference-design?tab=${item.id}&group=${activeGroup}`
                    : `/conference-design?tab=${item.id}`
                }
                className={`inline-flex items-center rounded-xl px-3 py-2 text-[13px] transition ${
                  item.id === activeTab
                    ? "neu-inset text-[var(--foreground)]"
                    : "text-[rgba(100,116,139,0.65)] hover:bg-[var(--neu-elevated)] hover:text-[var(--foreground)] hover:shadow-[4px_4px_10px_rgba(0,0,0,0.35)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="neu-inset p-1">
          <article
            className="rounded-[0.875rem] text-[#1f1f22]"
            style={{
              background: "#ebe4d8",
              boxShadow:
                "inset 4px 4px 10px rgba(0,0,0,0.08), inset -3px -3px 8px rgba(255,255,255,0.6)",
            }}
          >
            <header className="border-b border-black/10 px-6 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Note · Conference Planning
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-black/90">
                SEAMUN I — The Conference
              </h2>
              <p className="mt-2 text-[13px] text-black/60">
                Policies with a Purpose · 16-17 January 2027 · 2-day conference
              </p>
            </header>

            <div className="space-y-8 px-6 py-6 text-[15px] leading-relaxed text-black/75">
              {activeTab === "overview" ? (
              <section>
                <h3 className="text-lg font-semibold text-black/85">Conference idea</h3>
                <p className="mt-2">
                  SEAMUN I is designed as a non-profit, high-standards conference that
                  combines academic rigor with delegate accessibility. The model centers
                  on sustainability, professionalism, and meaningful outcomes.
                </p>
              </section>
              ) : null}

              {activeTab === "planning-overview" ? (
              <section>
                <h3 className="text-lg font-semibold text-black/85">Planning overview</h3>
                <div className="mt-3 overflow-hidden rounded-xl border border-black/10 bg-white/70">
                  <table className="w-full border-collapse text-left text-[14px]">
                    <thead className="bg-black/[0.04] text-[11px] uppercase tracking-wide text-black/50">
                      <tr>
                        <th className="px-4 py-2.5 font-medium">Track</th>
                        <th className="px-4 py-2.5 font-medium">SEAMUN plan</th>
                        <th className="px-4 py-2.5 font-medium">Why it matters</th>
                      </tr>
                    </thead>
                    <tbody className="text-black/75">
                      <tr className="border-t border-black/10">
                        <td className="px-4 py-2.5">Scale</td>
                        <td className="px-4 py-2.5">15 committees, 2 conference days, venue TBD</td>
                        <td className="px-4 py-2.5">Enables broad pathways from beginner to advanced</td>
                      </tr>
                      <tr className="border-t border-black/10">
                        <td className="px-4 py-2.5">Access</td>
                        <td className="px-4 py-2.5">Delegate fee 2500 THB, chair fee 800 THB</td>
                        <td className="px-4 py-2.5">Clear affordability model + planning certainty</td>
                      </tr>
                      <tr className="border-t border-black/10">
                        <td className="px-4 py-2.5">Academics</td>
                        <td className="px-4 py-2.5">33 chairs + 10 advisors, 10+ study guides, PP portal</td>
                        <td className="px-4 py-2.5">Protects quality and consistency across committees</td>
                      </tr>
                      <tr className="border-t border-black/10">
                        <td className="px-4 py-2.5">Operations</td>
                        <td className="px-4 py-2.5">21-room model, AV setup, registration desk, secretariat room</td>
                        <td className="px-4 py-2.5">Reduces day-of bottlenecks and procedural delays</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              ) : null}

              {activeTab === "committees-structure" ? (
              <section>
                <h3 className="text-lg font-semibold text-black/85">Committees & structure</h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  <li className="rounded-xl border border-black/10 bg-sky-100/45 p-3">
                    <strong className="text-black/85">Beginner stream</strong>
                    <p className="mt-1 text-[13px] text-black/70">
                      ECOSOC, F1, Press Corps, UNICEF (ESL)
                    </p>
                  </li>
                  <li className="rounded-xl border border-black/10 bg-amber-100/45 p-3">
                    <strong className="text-black/85">Intermediate stream</strong>
                    <p className="mt-1 text-[13px] text-black/70">
                      EU, UNESCO, UNHRC (ESL), UNODC, UNSC (Crisis), UN Women
                    </p>
                  </li>
                  <li className="rounded-xl border border-black/10 bg-rose-100/45 p-3">
                    <strong className="text-black/85">Advanced / crisis stream</strong>
                    <p className="mt-1 text-[13px] text-black/70">
                      DISEC, FWC (Crisis), HSC (Crisis), INTERPOL, WHO
                    </p>
                  </li>
                  <li className="rounded-xl border border-black/10 bg-slate-100/60 p-3">
                    <strong className="text-black/85">Awards & outcomes</strong>
                    <p className="mt-1 text-[13px] text-black/70">
                      Overall awards, committee awards, chair awards, structured closing.
                    </p>
                  </li>
                </ul>
              </section>
              ) : null}

              {activeTab === "committees-topics" ? (
              <section>
                <h3 className="text-lg font-semibold text-black/85">Committees & topics</h3>
                <div className="mt-4 space-y-6">
          <CommitteeBlock
            title="Beginner"
            rows={[
              {
                committee: "ECOSOC",
                topics: [
                  "The Question of Implementing a Globally Coordinated Universal Basic Income (UBI) Programme as a Strategy for Poverty Eradication and Economic Stability",
                  "The Question of Exploring International Mechanisms for Reallocating Military Expenditures Towards the Development and Strengthening of Global Public Health Systems",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "F1",
                topics: [
                  "The Question of Implementing Durability and Longevity Standards for Critical Car Components to Optimize Component Lifecycles and Minimize Material and Energy Waste",
                  "The Question of Analyzing the Socio-Economic and Infrastructure Impacts of Hosting a New Grand Prix, with a Focus on Mitigating Urban Congestion and Logistics in Highly Populated Cities With a Focus on the Possible F1 Grand Prix of 2028 in Bangkok",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "Press Corps",
                topics: [
                  "The Question of Determining Journalistic Ethics in Reporting on Public Health and Global Affairs",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "UNICEF (ESL)",
                topics: [
                  "The Question of Strengthening Maternal, Neo-Natal, and Post-Partum Healthcare Systems to Significantly Reduce Preventable Maternal and Infant Mortality and Morbidity",
                  "The Question of Recommending Policy Frameworks to Encourage Employer-Supported Flexible Work Arrangements and Parental Leave to Facilitate Early Childhood Development and Strengthen Parent-Child Bonding",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
            ]}
          />

          <CommitteeBlock
            title="Intermediate"
            rows={[
              {
                committee: "EU",
                topics: [
                  "The Question of Addressing the Socio-Economic Impact of Inflation and the Rising Cost of Living on Vulnerable Populations across Europe",
                  "The Question of Standardization in Policies Across Europe to Prevent Poverty Driven Cycles of Crime",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "UNESCO",
                topics: [
                  "The Question of Developing and Standardizing Inclusive Education Policies and Necessary Accommodations to Ensure Full and Equitable Access to Learning for Neurodivergent Students",
                  "The Question of Establishing Guidelines for the Mandatory and Comprehensive Integration of Historical Failures, Atrocities, and Human Rights Violations into National Education Curricula to Promote Reconciliation and Prevent Future Recurrence",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "UNHRC (ESL)",
                topics: [
                  "The Question of Promoting the Standardised Regulation of the Death Penalty and Respect for the Right to Life",
                  "The Question of the Obligation to Prevent Cruel, Inhuman, or Degrading Treatments Arising from Deficiencies in the Prison Administrations and Justice Systems",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
              {
                committee: "UNODC",
                topics: [
                  "The Question of Policy Analysis of Alternatives to Conviction and Punishment for Drug Possession for Personal Use",
                  "The Question of Addressing the Inter-generational Impact of Substance Abuse and Addiction",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
              {
                committee: "UNSC (Crisis)",
                topics: [
                  "The Question of Developing and Standardising Best Practices for Peacekeeping Operations to Ensure Scalable and Sustainable Global Implementation",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "UN Women",
                topics: [
                  "The Question of Affirming and Guaranteeing Women’s Reproductive Autonomy by Establishing International Legal Standards on Access to Safe and Legal Abortion",
                  "The Question of Examining the Recognition of Universal Childcare as a Fundamental Human Right and Its Role in Addressing Declining Birth Rates",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
            ]}
          />

          <CommitteeBlock
            title="Advanced"
            rows={[
              {
                committee: "DISEC",
                topics: [
                  "The Question of Strengthening International Protocols and Logistics for Securing the Cross-Border Transport of Lethal Weapons and Related Materials",
                  "The Question of Developing Mechanisms to Prevent the Diversion of Legally Traded Conventional Arms to Illicit Markets and Non-State Actors",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "FWC (Crisis)",
                topics: [
                  "The Question of Preventing Harm Caused by Psychic/Psychokinetic Child Experimentation and Ensuring the Protection and Rehabilitation of Gifted Minors",
                  "The Question of Addressing the Weaponization of the Human Mind and Establishing International Protocols for the Containment and Non-Proliferation of Psychic Technologies",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
              {
                committee: "HSC (Crisis)",
                topics: [
                  "SARS Outbreak (2002-2004)",
                  "The Black Death (1346-1353)",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "Interpol",
                topics: [
                  "The Question of Combating Transnational Organized Crime in Underground Medical Markets and Unregulated Surgical Practices",
                  "The Question of Strengthening Cross-Border Security Frameworks to Mitigate the Nexus of Narcotic Trafficking with a Focus on the Schengen Area and the Golden Triangle",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
              {
                committee: "WHO",
                topics: [
                  "The Question of Examining the Ethical and Regulatory Landscape for the Clinical Use of Psychedelic Drugs in the Treatment of Trauma-Based Mental Health Conditions",
                  "The Question of Examining Measures for Combating, Addressing, and Recovering from Pandemics or Severe Outbreaks",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
            ]}
          />

                </div>
              </section>
              ) : null}

              {activeTab === "schedule" ? (
              <section>
                <h3 className="text-lg font-semibold text-black/85">2-day schedule</h3>
                <p className="mt-2 text-[14px] text-black/75">
                  Lunches are intentionally staggered and groups are mixed across days to increase
                  high-quality conversation between familiar teammates and new delegates from other
                  committees. This reduces clique silos and improves cross-room collaboration.
                </p>
                <div className="mt-3 rounded-xl border border-black/10 bg-white/70 p-3">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-black/60">
                    Group key · Committees
                  </p>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2 text-[13px] text-black/75">
                    {SCHEDULE_GROUPS.map((g) => (
                      <li key={`key-${g.id}`} className="rounded-lg bg-black/[0.03] px-2.5 py-2">
                        <span className="font-semibold text-black/85">{g.label}:</span> {g.committees}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[...SCHEDULE_GROUPS, { id: "overlap", label: "Lunch overlap" as const }].map((g) => (
                    <Link
                      key={`tab-${g.id}`}
                      href={`/conference-design?tab=schedule&group=${g.id}`}
                      className={`rounded-full border px-3 py-1.5 text-[12px] font-medium transition ${
                        g.id === activeScheduleView
                          ? "border-[rgba(79,70,229,0.45)] bg-[rgba(79,70,229,0.12)] text-[rgba(55,48,163,0.95)]"
                          : "border-black/10 bg-white text-black/65 hover:bg-black/[0.03] hover:text-black/85"
                      }`}
                    >
                      {g.label}
                    </Link>
                  ))}
                </div>

                {activeScheduleView === "overlap" ? (
                  <CommitteeLunchOverlap />
                ) : (
                <div className="mt-3 space-y-4">
                  <article className="overflow-hidden rounded-xl border border-black/10 bg-white/70">
                    <div className="border-b border-black/10 bg-black/[0.04] px-4 py-2">
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-black/65">
                        Day 1 · 16 Jan 2027
                      </p>
                    </div>
                    <div className="grid grid-cols-[88px_1fr_110px_160px] gap-3 border-b border-black/10 bg-black/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-black/55">
                      <span>Time</span>
                      <span>Task</span>
                      <span>Duration</span>
                      <span>Focus</span>
                    </div>
                    <ul className="divide-y divide-black/10 text-[13px] text-black/75">
                      {GROUP_SCHEDULES[activeGroup].day1.map((slot) => (
                        <li key={`d1-${activeGroup}-${slot.time}-${slot.task}`} className="grid grid-cols-[88px_1fr_110px_160px] gap-3 px-4 py-2.5">
                          <span className="font-semibold text-black/85">{slot.time}</span>
                          <span>{scheduleTaskTitle(slot.task)}</span>
                          <span className="text-[12px] text-black/60">{scheduleDuration(slot.task)}</span>
                          <span className="text-[12px] text-black/60">{scheduleFocus(slot.task)}</span>
                        </li>
                      ))}
                    </ul>
                  </article>

                  <article className="overflow-hidden rounded-xl border border-black/10 bg-white/70">
                    <div className="border-b border-black/10 bg-black/[0.04] px-4 py-2">
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-black/65">
                        Day 2 · 17 Jan 2027
                      </p>
                    </div>
                    <div className="grid grid-cols-[88px_1fr_110px_160px] gap-3 border-b border-black/10 bg-black/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-black/55">
                      <span>Time</span>
                      <span>Task</span>
                      <span>Duration</span>
                      <span>Focus</span>
                    </div>
                    <ul className="divide-y divide-black/10 text-[13px] text-black/75">
                      {GROUP_SCHEDULES[activeGroup].day2.map((slot) => (
                        <li key={`d2-${activeGroup}-${slot.time}-${slot.task}`} className="grid grid-cols-[88px_1fr_110px_160px] gap-3 px-4 py-2.5">
                          <span className="font-semibold text-black/85">{slot.time}</span>
                          <span>{scheduleTaskTitle(slot.task)}</span>
                          <span className="text-[12px] text-black/60">{scheduleDuration(slot.task)}</span>
                          <span className="text-[12px] text-black/60">{scheduleFocus(slot.task)}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
                )}
              </section>
              ) : null}

              {activeTab === "digital-systems" ? (
              <section>
                <h3 className="text-lg font-semibold text-black/85">Digital-first systems</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[14px]">
                  <li>Digital note passing with moderation and reporting channels.</li>
                  <li>Live voting states for motions, amendments, and resolutions.</li>
                  <li>Delegate workspace tabs for guides, docs, stances, and speech notes.</li>
                  <li>Paper-light infrastructure to improve sustainability and clarity.</li>
                </ul>
              </section>
              ) : null}

              {activeTab === "why-decisions" ? (
              <section>
                <h3 className="text-lg font-semibold text-black/85">Why these decisions</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[14px]">
                  <li>Tiered committee difficulty + ESL access lowers barriers to entry.</li>
                  <li>Chair training + handbook standards improve consistency and fairness.</li>
                  <li>Prep-to-wrap operations checklist protects delivery and impact.</li>
                </ul>
              </section>
              ) : null}

              {activeTab === "reforms" ? (
              <section>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-black/85">
                  <ShieldCheck className="h-5 w-5 text-indigo-600" aria-hidden />
                  MUN reform strategy (deck synthesis)
                </h3>
                <p className="mt-2 text-[14px] text-black/75">
                  I integrated a 5-phase reform framework from my slide deck to pressure-test
                  conference governance, academic design, delegate equity, execution rigor, and
                  feedback accountability.
                </p>
                <div className="mt-4 space-y-3">
                  {REFORM_PHASES.map((phase, phaseIndex) => {
                    const phaseColor = REFORM_PHASE_COLORS[phaseIndex % REFORM_PHASE_COLORS.length];
                    return (
                    <article
                      key={phase.phase}
                      className={`rounded-xl border p-4 ${phaseColor.card}`}
                    >
                      <p
                        className={`inline-flex rounded-full px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wide ${phaseColor.chip}`}
                      >
                        {phase.phase}
                      </p>
                      <p className="mt-1 text-[13px] text-black/70">
                        <span className="font-medium text-black/85">Focus:</span> {phase.focus}
                      </p>
                      <ul className="mt-3 space-y-2 text-[13px] text-black/75">
                        {phase.rows.map((row) => (
                          <li
                            key={`${phase.phase}-${row.gap}`}
                            className={`rounded-lg border px-3 py-2.5 ${phaseColor.item}`}
                          >
                            <p className="font-medium text-black/85">{row.gap}</p>
                            <p className="mt-1 text-black/70">{row.description}</p>
                            <p className="mt-1">
                              <span className="font-medium text-black/85">Reform:</span> {row.reform}
                            </p>
                            {"examples" in row ? (
                              <div
                                className={`mt-2 rounded-md border border-dashed px-2.5 py-1.5 text-[12px] text-black/65 ${phaseColor.example}`}
                              >
                                <p className="font-medium text-black/75">Examples:</p>
                                <ul className="mt-1 list-disc space-y-1 pl-4">
                                  {row.examples.map((example) => (
                                    <li key={`${row.gap}-${example}`}>{example}</li>
                                  ))}
                                </ul>
                                {"exampleNote" in row ? (
                                  <p className="mt-1.5 text-black/60">
                                    <span className="font-medium text-black/70">Note:</span>{" "}
                                    {row.exampleNote}
                                  </p>
                                ) : null}
                              </div>
                            ) : (
                              <div
                                className={`mt-2 rounded-md border border-dashed px-2.5 py-1.5 text-[12px] text-black/55 ${phaseColor.example}`}
                              >
                                <span className="font-medium text-black/70">Example:</span>{" "}
                                add your conference-specific example here
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </article>
                  )})}
                </div>
              </section>
              ) : null}

              {activeTab === "doc-evidence" ? (
              <section>
                <h3 className="text-lg font-semibold text-black/85">
                  How internal documents validate the reforms
                </h3>
                <p className="mt-2 text-[14px] text-black/75">
                  I cross-checked the reform model against SEAMUN operational documents (chair
                  expectations, RoP, chair-report template, and planning brief). The items below
                  are the non-sensitive design principles that directly support the flaws-and-reforms
                  framework.
                </p>
                <div className="mt-4 grid gap-3">
                  {DOCUMENT_EVIDENCE.map((doc) => (
                    <article key={doc.source} className="rounded-xl border border-black/10 bg-white/70 p-4">
                      <p className="text-[13px] font-semibold text-black/85">{doc.source}</p>
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[13px] text-black/75">
                        {doc.notes.map((note) => (
                          <li key={`${doc.source}-${note}`}>{note}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
                <p className="mt-3 text-[12px] text-black/60">
                  Note: raw source files include private operational details (contact lists,
                  credentials, and internal access info), so only redacted policy/process insights
                  are published here.
                </p>
              </section>
              ) : null}

              {activeTab === "planning-docs" ? (
              <section>
                <h3 className="text-lg font-semibold text-black/85">Planning documents</h3>
                <p className="mt-2 text-[14px] text-black/75">
                  Planning files are intentionally not linked publicly because they include
                  sensitive details (including contact information). A redacted version can
                  be shared on request.
                </p>
                <p className="mt-3 text-[14px] text-black/75">
                  Public-safe policy file:{" "}
                  <Link
                    href="/mun/research/seamun-i-2027-chair-expectations.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-link font-medium"
                  >
                    SEAMUN I 2027 · Chair Expectations (PDF)
                  </Link>
                  .
                </p>
                <p className="mt-2 text-[14px] text-black/75">
                  Award criteria and rubric system:{" "}
                  <Link
                    href="/mun/research/seamun-i-2027-award-criteria.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-link font-medium"
                  >
                    SEAMUN I 2027 · Awards Criteria (PDF)
                  </Link>
                  .
                </p>
              </section>
              ) : null}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

function CommitteeBlock({
  title,
  rows,
}: {
  title: string;
  rows: { committee: string; topics: string[]; gradeRange: string }[];
}) {
  const tint =
    title === "Beginner"
      ? "from-sky-500/20 to-sky-300/5"
      : title === "Intermediate"
        ? "from-amber-400/20 to-amber-300/5"
        : "from-rose-400/20 to-rose-300/5";

  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
      <div className={`bg-gradient-to-r ${tint} px-4 py-2.5`}>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-black/70">
          {title}
        </h3>
      </div>
      <div className="divide-y divide-black/10">
        {rows.map((row) => (
          <article key={row.committee} className="grid gap-3 px-4 py-4 md:grid-cols-[200px_1fr_170px]">
            <div className="text-[14px] font-semibold text-black/85">{row.committee}</div>
            <ol className="list-decimal space-y-1 pl-5 text-[13px] leading-relaxed text-black/75">
              {row.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ol>
            <div className="text-[12px] text-black/55 md:text-right">{row.gradeRange}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
