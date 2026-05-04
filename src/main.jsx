import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Button({ children, className = "", variant = "default", ...props }) {
  const variantClass = variant === "outline"
    ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
    : variant === "secondary"
      ? "bg-white text-slate-950 hover:bg-slate-100"
      : "bg-slate-950 text-white hover:bg-slate-800";

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Icon({ name = "spark" }) {
  const icons = {
    spark: "✦",
    shield: "✓",
    brain: "AI",
    wallet: "£",
    lock: "🔒",
    chart: "↗",
    book: "▣",
    file: "📄",
    users: "👥",
    school: "🏫"
  };
  return <span aria-hidden="true">{icons[name] || icons.spark}</span>;
}

const modules = [
  {
    slug: "ai-literacy-for-schools",
    title: "AI Literacy for Schools",
    shortTitle: "AI Literacy",
    keyword: "AI literacy curriculum for schools",
    metaTitle: "AI Literacy Curriculum for Schools | Safe AI Lessons for Students",
    metaDescription: "A school-ready AI literacy curriculum teaching pupils what AI is, how prompts work, how AI agents operate, and how to use AI safely and responsibly.",
    age: "Ages 5–16",
    icon: "brain",
    desc: "A practical, safety-first programme that helps pupils understand artificial intelligence, prompts, AI agents, data, bias, misinformation, and responsible classroom use.",
    longIntro: "Artificial intelligence is becoming part of how pupils search, write, create, study, communicate, and eventually work. This module gives schools a structured way to introduce AI without hype, fear, or unsafe experimentation. Pupils learn that AI is a tool, not a replacement for human judgement. They practise asking better questions, checking answers, spotting risks, and using technology to support learning and creativity.",
    teacherValue: "Teachers receive ready-to-run lesson plans, classroom activities, discussion prompts, safety guidance, assessment questions, and adaptable worksheets. The module can be delivered as a six-week pilot, a term project, or part of computing, PSHE, citizenship, enterprise, or digital literacy learning.",
    outcomes: [
      "Explain what AI is using age-appropriate examples",
      "Write clearer prompts using role, task, audience, format, and safety instructions",
      "Understand that AI can be inaccurate, biased, incomplete, or unsafe",
      "Describe what AI agents are and why supervision matters",
      "Use AI to support creativity, planning, revision, and problem-solving",
      "Apply a simple fact-checking and safety checklist before trusting AI outputs"
    ],
    curriculumFit: ["Computing", "Digital literacy", "PSHE", "Citizenship", "Careers education", "Enterprise projects"],
    lessons: [
      { title: "What is AI?", duration: "45–60 minutes", objective: "Introduce AI as a computer system that uses patterns in data to help people answer questions, create content, classify information, make predictions, and solve problems.", teachingInput: "The teacher explains that AI does not think like a human. It works by using patterns, examples, instructions, and data.", activity: "AI in everyday life scavenger hunt: pupils identify where they may already meet AI in school, phones, games, maps, search, accessibility tools, and smart devices.", worksheet: "Students complete a table with three columns: where AI appears, what it helps with, and what a human should still check.", prompt: "Explain artificial intelligence to a 10-year-old using examples from school, games, maps, and phones.", assessment: "Exit question: Name one helpful use of AI and one reason we should not blindly trust it." },
      { title: "How Good Prompts Work", duration: "45–60 minutes", objective: "Teach pupils that the quality of an AI answer depends heavily on the clarity, context, and safety of the prompt.", teachingInput: "Pupils learn a five-part prompt structure: role, task, audience, format, and safety or accuracy instruction.", activity: "Prompt upgrade challenge: pupils rewrite vague prompts into strong classroom prompts and compare the results.", worksheet: "Prompt builder grid with sections for role, task, audience, format, and checking instruction.", prompt: "Turn this vague question into a clear classroom prompt: Tell me about money.", assessment: "Students label the five parts of a strong prompt and explain why each one helps." },
      { title: "AI Agents and Automation", duration: "45–60 minutes", objective: "Explain AI agents as systems that can follow steps towards a goal while remaining under human rules, limits, and supervision.", teachingInput: "The teacher compares an AI agent with a helpful assistant following a checklist.", activity: "Design a safe classroom helper agent for homework reminders, reading goals, revision planning, or class project organisation.", worksheet: "Agent design sheet: goal, allowed actions, banned actions, safety rules, human approval points.", prompt: "Design a safe AI assistant for a classroom. List what it can do, what it must never do, and when it must ask a teacher for help.", assessment: "Students explain the difference between an AI chatbot and an AI agent." },
      { title: "Bias, Misinformation and AI Safety", duration: "45–60 minutes", objective: "Help students understand that AI outputs can be wrong, unfair, outdated, overconfident, or unsafe.", teachingInput: "The class reviews fictional AI answers and identifies missing evidence, unfair assumptions, unsafe advice, and overconfident claims.", activity: "Spot the problem: pupils mark a sample AI answer using a safety checklist.", worksheet: "AI safety checklist covering accuracy, fairness, evidence, privacy, age suitability, and trusted adult support.", prompt: "Give me a checklist for checking whether an AI answer is safe, fair, accurate, age-appropriate, and suitable for school use.", assessment: "Students write one rule they would add to a school AI policy." }
    ],
    faq: [
      ["Is this suitable for primary schools?", "Yes. The examples and activities can be simplified for younger pupils and expanded for secondary pupils."],
      ["Does this let children use AI unsupervised?", "No. The programme is designed around guided, supervised, safety-first classroom use."],
      ["Can teachers use this without technical experience?", "Yes. The lesson plans explain key terms in plain English and provide structured activities."],
      ["What makes this different from a normal computing lesson?", "It connects AI understanding with real-world decision-making, safety, creativity, business thinking, and digital citizenship."]
    ]
  },
  {
    slug: "financial-literacy-for-kids",
    title: "Financial Literacy for Kids",
    shortTitle: "Financial Literacy",
    keyword: "financial literacy for kids",
    metaTitle: "Financial Literacy for Kids | School Money Lessons and Digital Payments",
    metaDescription: "A practical financial literacy programme for schools teaching money, value, saving, spending, budgeting, digital payments, and responsible decision-making.",
    age: "Ages 3–18",
    icon: "wallet",
    desc: "A school-ready financial literacy pathway that teaches value, exchange, saving, budgeting, needs vs wants, digital payments, and responsible money choices.",
    longIntro: "Children increasingly encounter money through cards, apps, online games, subscriptions, digital purchases, and family banking tools. This module gives pupils the foundation to understand money before they encounter more complex digital finance. It starts with value and exchange, then builds towards saving, budgeting, digital payments, financial choices, and risk awareness.",
    teacherValue: "Teachers receive age-banded classroom activities, printable worksheets, scenario cards, budgeting games, discussion questions, and assessment tasks. The module can support maths, PSHE, citizenship, enterprise days, enrichment weeks, and parent engagement programmes.",
    outcomes: ["Understand money as a tool for exchange and planning", "Explain the difference between needs, wants, income, spending, and saving", "Create a simple budget for a goal or event", "Understand how digital payments move through a system", "Recognise that financial choices have trade-offs", "Discuss money safely without pressure, shame, or risky advice"],
    curriculumFit: ["Maths", "PSHE", "Citizenship", "Enterprise", "Careers", "Life skills"],
    lessons: [
      { title: "What is Money and Value?", duration: "30–60 minutes", objective: "Teach money as a tool people use to exchange value, make choices, compare costs, and plan for future needs.", teachingInput: "The teacher introduces value using familiar classroom examples: snacks, toys, books, time, effort, and services.", activity: "Classroom shop: pupils use tokens to buy limited items and then discuss why they made each choice.", worksheet: "Value and choice worksheet: pupils rank items by usefulness, cost, and importance.", prompt: "Explain money to a child using a shop, a toy, and a snack. Include the idea of choice and value.", assessment: "Students explain why two people might value the same item differently." },
      { title: "Saving, Spending, Needs and Wants", duration: "45–60 minutes", objective: "Show how saving supports goals and how spending decisions require prioritisation.", teachingInput: "The class discusses everyday examples of needs and wants. Pupils learn that saving is planned waiting, not doing nothing.", activity: "Savings jar challenge: pupils choose a goal, decide how much they need, and plan how they could save towards it.", worksheet: "Needs, wants and savings planner with goal, cost, timeline, and weekly saving amount.", prompt: "Create a simple saving plan for a child who wants to buy a football in 6 weeks.", assessment: "Students sort example purchases into needs, wants, and depends." },
      { title: "Budgeting for a Project", duration: "45–75 minutes", objective: "Teach pupils how to plan with limited money and make trade-offs between options.", teachingInput: "The teacher introduces budgeting as a plan for where money goes before it is spent. Pupils learn income, cost, surplus, shortage, and priority.", activity: "Plan a school event with a fixed budget. Groups choose food, posters, equipment, and entertainment while staying within the limit.", worksheet: "Event budget planner with columns for item, cost, priority, and final decision.", prompt: "Create a fun classroom budgeting game for pupils aged 9–11 using a school event budget.", assessment: "Students explain one thing they had to remove from their budget and why." },
      { title: "Digital Payments and Online Money", duration: "45–60 minutes", objective: "Explain cards, apps, online payments, confirmations, receipts, subscriptions, and transaction safety.", teachingInput: "The teacher walks pupils through a simple card payment journey: buyer, shop, payment provider, bank, approval, receipt.", activity: "Simulated payment journey: pupils role-play buyer, seller, bank, security check, and receipt issuer.", worksheet: "Digital payment flow diagram with missing steps for pupils to complete.", prompt: "Explain how a card payment works in five simple steps for a Year 6 class. Include one safety tip.", assessment: "Students name two things that help keep digital payments safe." }
    ],
    faq: [["Is this about teaching children to invest?", "No. This is foundational financial literacy: value, saving, spending, budgeting, digital payments, and responsible choices."], ["Can this be taught to very young children?", "Yes. Early years content uses play shop activities, tokens, stories, and simple exchange games."], ["How does this connect with AI?", "AI is introduced as a planning and explanation tool, but financial decisions remain human-led."], ["Can schools use this for parent engagement?", "Yes. The module includes parent-friendly discussion tasks and home learning prompts."]]
  },
  {
    slug: "blockchain-digital-assets-education",
    title: "Digital Assets and Blockchain Education",
    shortTitle: "Digital Assets & Blockchain",
    keyword: "blockchain education for schools",
    metaTitle: "Blockchain Education for Schools | Digital Assets and Safety Lessons",
    metaDescription: "A safe, age-appropriate school module teaching blockchain, digital assets, wallets, scams, digital identity, and online financial safety without investment advice.",
    age: "Ages 10–18",
    icon: "lock",
    desc: "A careful, financial-literacy-first module that explains blockchain, digital assets, wallets, scams, and digital identity without promoting trading or investment.",
    longIntro: "Digital assets, blockchain systems, wallets, online identity, and tokenised services are increasingly part of public conversation. Schools need a safe way to teach the technology and risks without encouraging speculation. This module frames digital assets as part of digital financial literacy, online safety, systems thinking, and responsible citizenship.",
    teacherValue: "Teachers receive neutral explanations, safety boundaries, scam-awareness activities, classroom ledger games, wallet-safety discussion sheets, and parent-facing guidance. The module avoids investment advice and focuses on understanding, privacy, risk, verification, and responsible behaviour.",
    outcomes: ["Explain blockchain as a shared digital record", "Understand the difference between technology education and investment advice", "Recognise wallets, private keys, passwords, and recovery phrases as sensitive information", "Identify common scam patterns and pressure tactics", "Understand digital identity, verification, privacy, and data responsibility", "Discuss digital assets using neutral, safety-first language"],
    curriculumFit: ["Financial literacy", "Computing", "PSHE", "Online safety", "Citizenship", "Digital literacy"],
    lessons: [
      { title: "What is Blockchain?", duration: "45–60 minutes", objective: "Explain blockchain as a shared record that many computers can check, rather than a magic money machine.", teachingInput: "The teacher compares blockchain to a shared classroom notebook where entries are visible, checked, and hard to secretly change.", activity: "Class ledger game: pupils record fictional token transfers and verify whether the shared record stays consistent.", worksheet: "Shared ledger worksheet with transaction rows, verification checks, and error spotting.", prompt: "Explain blockchain like a shared classroom notebook that everyone can check. Avoid investment advice.", assessment: "Students explain why a shared record may create trust between people who do not know each other." },
      { title: "Digital Wallets and Safety", duration: "45–60 minutes", objective: "Teach digital ownership, passwords, private information, recovery phrases, and safe adult support without encouraging wallet creation.", teachingInput: "The class discusses why some information must never be shared. The teacher explains that wallet safety is about protecting access, not chasing profit.", activity: "Security ranking: pupils sort actions into safe, risky, and dangerous.", worksheet: "Digital safety checklist covering passwords, recovery phrases, links, screenshots, public Wi-Fi, and trusted adults.", prompt: "Create a wallet safety checklist for teenagers. Make it educational and do not include investment advice.", assessment: "Students identify three pieces of information that should remain private." },
      { title: "Spotting Digital Money Scams", duration: "45–60 minutes", objective: "Help pupils recognise fake giveaways, urgency, impersonation, phishing, unrealistic promises, and pressure tactics.", teachingInput: "The teacher explains that scams often use speed, fear, greed, fake authority, or social pressure. Pupils learn to pause, check, and ask a trusted adult.", activity: "Scam detective: pupils mark red flags in fictional messages and rewrite them as warning posters.", worksheet: "Red flag checklist: too good to be true, urgent action, secret request, unknown link, money pressure.", prompt: "Create five fictional digital money scam examples for a classroom safety lesson and explain the warning signs.", assessment: "Students write a three-step response to a suspicious message." },
      { title: "Digital Identity and Verification", duration: "45–60 minutes", objective: "Introduce digital identity, privacy, age verification, online reputation, and responsible data sharing.", teachingInput: "The class discusses what makes up identity online: name, photos, accounts, passwords, biometrics, school information, location, and behaviour.", activity: "What should be private? Pupils sort personal data into public, limited, private, and never share.", worksheet: "Digital identity sorting cards and privacy reflection questions.", prompt: "Explain digital identity, privacy, and verification to a 13-year-old using simple examples.", assessment: "Students explain the difference between proving who you are and sharing too much personal information." }
    ],
    faq: [["Does this teach children to buy cryptocurrency?", "No. It explicitly avoids trading, price prediction, and investment advice."], ["Why teach blockchain at all?", "Because pupils benefit from understanding digital systems, online trust, verification, scams, and privacy."], ["Is this acceptable for schools?", "The safest positioning is digital financial literacy, online safety, and systems education."], ["Can parents review the material?", "Yes. The parent pack explains the boundaries and safety-first purpose of the module."]]
  },
  {
    slug: "business-systems-thinking-for-students",
    title: "Business and Systems Thinking for Students",
    shortTitle: "Business & Systems Thinking",
    keyword: "business skills for students",
    metaTitle: "Business Skills for Students | Systems Thinking and AI Project Lessons",
    metaDescription: "A practical school programme teaching pupils systems thinking, entrepreneurship, customer problems, AI-assisted planning, and ethical project building.",
    age: "Ages 7–18",
    icon: "chart",
    desc: "A practical learning pathway that helps pupils understand systems, solve customer problems, design ethical mini-businesses, and use AI to support planning.",
    longIntro: "Future-ready pupils need more than technical knowledge. They need to understand how systems work, how problems are solved, how value is created, and how tools like AI can support planning and communication. This module gives schools a practical project-based pathway for enterprise, careers, enrichment, and real-world problem-solving.",
    teacherValue: "Teachers receive project briefs, business canvas templates, interview questions, planning sheets, assessment rubrics, AI prompt scaffolds, and presentation activities. The module works well for enterprise days, STEM weeks, careers learning, after-school clubs, and whole-school innovation projects.",
    outcomes: ["Map systems using input, process, output, and feedback", "Identify real problems faced by pupils, families, schools, or communities", "Design a simple ethical business or project idea", "Use AI to plan, draft, organise, and improve ideas safely", "Create a basic pitch explaining problem, solution, audience, value, and next steps", "Reflect on social impact, fairness, accessibility, and responsibility"],
    curriculumFit: ["Enterprise", "Careers", "STEM", "Computing", "Citizenship", "Project-based learning"],
    lessons: [
      { title: "Systems Thinking: Input, Process, Output", duration: "45–60 minutes", objective: "Teach pupils to understand systems by mapping inputs, processes, outputs, feedback, and failure points.", teachingInput: "The teacher explains that schools, shops, banks, apps, AI tools, and families all use systems. Pupils learn that improving a system requires understanding its parts.", activity: "Map a school lunch system from choosing food to payment, preparation, serving, feedback, and waste.", worksheet: "System map template with inputs, processes, outputs, people, tools, risks, and improvements.", prompt: "Break down a school lunch system into inputs, processes, outputs, risks, and possible improvements.", assessment: "Students identify one weakness in a system and suggest one improvement." },
      { title: "Finding Customer Problems", duration: "45–60 minutes", objective: "Teach pupils that good projects and businesses start with real problems, not just random ideas.", teachingInput: "The class discusses customer, user, problem, pain point, evidence, and solution. Pupils learn to ask questions before designing.", activity: "Interview role-play: pupils ask classmates about a school problem and record what they hear.", worksheet: "Customer discovery sheet with interview questions, repeated problems, and evidence notes.", prompt: "Give me 10 questions a young founder can ask to understand a customer problem at school.", assessment: "Students explain the difference between an idea and a problem worth solving." },
      { title: "Mini Business Builder", duration: "60–90 minutes", objective: "Help pupils design a simple ethical business or community project with a clear audience and value proposition.", teachingInput: "The teacher introduces problem, solution, audience, price, cost, value, fairness, and safety. Pupils avoid unrealistic claims and focus on usefulness.", activity: "One-page business canvas: name, audience, problem, solution, resources, price, risks, and next steps.", worksheet: "Mini business canvas with space for logo sketch, customer, value, and launch idea.", prompt: "Help a pupil create a small ethical business idea for their local community. Include problem, customer, solution, price, and safety considerations.", assessment: "Students pitch their idea in 60 seconds and receive peer feedback." },
      { title: "AI-Assisted Planning and Pitching", duration: "60 minutes", objective: "Show how AI can support planning, drafting, and improvement while pupils remain responsible for decisions and accuracy.", teachingInput: "The class learns how AI can create outlines, check clarity, suggest questions, and improve structure. Pupils also learn to challenge and edit AI outputs.", activity: "Use AI to draft a launch plan or pitch, then pupils critique, fact-check, simplify, and improve it.", worksheet: "AI review sheet: keep, change, remove, verify, make safer, make clearer.", prompt: "Create a simple launch plan for a child-friendly school fundraising project. Include safety, budget, roles, and promotion.", assessment: "Students explain one AI suggestion they used and one they rejected." }
    ],
    faq: [["Is this only for older students?", "No. Younger pupils can use simple projects, drawings, role-play, and classroom problem-solving."], ["Does this replace business studies?", "No. It introduces practical enterprise thinking and can feed into business studies later."], ["How does AI fit in?", "AI is used as a planning assistant, not as the decision-maker."], ["Can this produce real school projects?", "Yes. Pupils can create fundraising ideas, community projects, posters, campaigns, and pitch presentations."]]
  }
];

const resources = [
  { slug: "starter-pack", title: "6-Week School Starter Pack", icon: "book", summary: "A complete pilot pack that lets a school trial the programme before buying.", contents: ["6 lesson plans", "Teacher notes", "Worksheets", "Safeguarding statement", "Pilot feedback form"], pageCopy: "This pack gives schools a simple way to test the programme with one class, one year group, or one enrichment group. It includes enough content to run a structured six-week pilot and collect evidence for a paid rollout.", seoCopy: "The 6-Week School Starter Pack is designed for headteachers, computing leads, PSHE leads, enterprise coordinators, and innovation teams who want a low-risk way to introduce AI literacy, financial literacy, digital assets awareness, and systems thinking." },
  { slug: "prompt-library", title: "100+ AI & Money Prompt Library", icon: "file", summary: "A structured prompt bank for teachers and pupils, grouped by age, topic, and classroom purpose.", contents: ["Beginner prompts", "Teacher planning prompts", "Financial literacy prompts", "Digital safety prompts", "Business idea prompts"], pageCopy: "The prompt library helps teachers create lesson starters, discussion questions, worksheets, quizzes, project briefs, and differentiated activities.", seoCopy: "This AI prompt library for education supports classroom planning, digital literacy, financial education, enterprise learning, safeguarding conversations, and responsible AI use." },
  { slug: "teacher-guide", title: "Teacher Guide & Safeguarding Notes", icon: "shield", summary: "Professional guidance for safe classroom delivery, age-appropriate use, and risk management.", contents: ["AI safety rules", "Crypto education boundaries", "Privacy guidance", "Classroom discussion rules", "Parent communication notes"], pageCopy: "This guide positions the programme as education, not financial advice or investment promotion. It supports teachers with clear boundaries and safety-first delivery.", seoCopy: "The Teacher Guide is built for schools that need practical AI safety, digital assets education boundaries, data privacy reminders, safeguarding notes, parent communication, and classroom rules." },
  { slug: "student-worksheets", title: "Student Worksheets", icon: "file", summary: "Printable and digital worksheets that turn each lesson into practical classroom work.", contents: ["Money choices worksheet", "Prompt improvement worksheet", "Blockchain ledger game", "Spot the scam sheet", "Mini business canvas"], pageCopy: "Worksheets help pupils practise concepts in a practical way and give teachers evidence of learning, participation, and understanding.", seoCopy: "The student worksheets support AI literacy lessons, financial literacy activities, blockchain education, scam awareness, and young entrepreneur projects." },
  { slug: "parent-pack", title: "Parent Information Pack", icon: "users", summary: "A plain-English guide explaining what children learn, what they do not learn, and why the programme matters.", contents: ["Programme overview", "Safety statement", "What children will learn", "What children will not be taught", "Home discussion questions"], pageCopy: "The parent pack reduces concern by explaining that the programme is about literacy, safety, responsibility, and future skills, not unsupervised AI use or crypto investing.", seoCopy: "The Parent Information Pack gives schools a clear communication resource for families. It explains AI literacy, money education, digital assets safety, digital identity, online risk, and age-appropriate learning." },
  { slug: "pilot-proposal", title: "School Pilot Proposal", icon: "school", summary: "A decision-maker document for headteachers, trusts, councils, private schools, and government education partners.", contents: ["Pilot objectives", "Timeline", "Pricing path", "Impact measures", "Next steps"], pageCopy: "This proposal gives decision-makers a simple route from free pilot to paid adoption. It explains the educational need, delivery model, school benefits, and evidence plan.", seoCopy: "The School Pilot Proposal is designed for education leaders looking for a practical AI and financial literacy pilot. It supports school improvement, digital strategy, enterprise education, and future skills." }
];

const pricing = [
  { name: "Starter", price: "£500/year", text: "For one school trial", features: ["6 lessons", "30 prompts", "PDF resources", "1 demo session"], details: "Best for a small school, department, tutor group, or enrichment club that wants to test the content before a wider rollout." },
  { name: "Pro", price: "£2,000/year", text: "For full school adoption", features: ["Full curriculum", "100+ prompts", "Teacher dashboard", "Email support"], details: "Best for schools that want a full year of structured AI, finance, and digital economy learning resources." },
  { name: "Enterprise", price: "£5,000+", text: "For trusts, councils, and partners", features: ["Training workshops", "Policy pack", "Custom rollout", "Impact reporting"], details: "Best for multi-academy trusts, local authorities, private school groups, government pilots, and international partners." }
];

function getInitialRoute() {
  try {
    if (typeof window === "undefined") return { type: "home" };
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");
    return page ? JSON.parse(decodeURIComponent(page)) : { type: "home" };
  } catch {
    return { type: "home" };
  }
}

function openNewTab(route) {
  if (typeof window === "undefined") return;
  const encoded = encodeURIComponent(JSON.stringify(route));
  window.open(`${window.location.pathname}?page=${encoded}`, "_blank", "noopener,noreferrer");
}

function isKnownRoute(route) {
  if (!route || typeof route !== "object") return false;
  if (route.type === "home") return true;
  if (route.type === "module") return modules.some((m) => m.slug === route.slug);
  if (route.type === "resource") return resources.some((r) => r.slug === route.slug);
  if (route.type === "pricing") return pricing.some((p) => p.name === route.name);
  return false;
}

function runSmokeTests() {
  const results = [];
  results.push({ name: "All teaching modules have SEO metadata", pass: modules.every((m) => m.metaTitle && m.metaDescription && m.keyword) });
  results.push({ name: "All teaching modules have long-form content", pass: modules.every((m) => m.longIntro.length > 250 && m.teacherValue.length > 150) });
  results.push({ name: "Each module has at least four complete lessons", pass: modules.every((m) => m.lessons.length >= 4 && m.lessons.every((l) => l.objective && l.teachingInput && l.activity && l.worksheet && l.prompt && l.assessment)) });
  results.push({ name: "Each module has curriculum fit and FAQs", pass: modules.every((m) => m.curriculumFit.length >= 5 && m.faq.length >= 4) });
  results.push({ name: "All resources have SEO content and downloadable contents", pass: resources.every((r) => r.seoCopy && r.contents.length >= 5) });
  results.push({ name: "Digital assets module avoids investment advice", pass: modules.some((m) => m.slug === "blockchain-digital-assets-education" && m.desc.toLowerCase().includes("not investing")) });
  results.push({ name: "All FAQ items are two clean strings", pass: modules.every((m) => m.faq.every((item) => Array.isArray(item) && item.length === 2 && item.every((v) => typeof v === "string" && v.length > 0))) });
  results.push({ name: "All open-in-new-tab routes point to valid content", pass: modules.every((m) => isKnownRoute({ type: "module", slug: m.slug })) && resources.every((r) => isKnownRoute({ type: "resource", slug: r.slug })) && pricing.every((p) => isKnownRoute({ type: "pricing", name: p.name })) });
  results.push({ name: "Every lesson includes a teacher input and assessment", pass: modules.every((m) => m.lessons.every((l) => l.teachingInput && l.assessment)) });
  return results;
}

function PageShell({ children }) { return <div className="min-h-screen bg-slate-50 text-slate-950">{children}</div>; }

function Header({ onHome }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button className="flex items-center gap-3 text-left" onClick={onHome}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm"><Icon name="spark" /></div>
          <div><p className="text-lg font-bold leading-tight">Future Skills Schools</p><p className="text-xs text-slate-500">AI • Money • Digital Economy</p></div>
        </button>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#programme" className="hover:text-slate-950">Programme</a>
          <a href="#resources" className="hover:text-slate-950">Resources</a>
          <a href="#pricing" className="hover:text-slate-950">Pricing</a>
        </nav>
        <Button onClick={() => openNewTab({ type: "resource", slug: "pilot-proposal" })}>Book Demo</Button>
      </div>
    </header>
  );
}

function DetailHero({ title, subtitle, label, icon, children }) {
  return (
    <section className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-black text-slate-950"><Icon name={icon} /></div>
      <p className="text-sm font-black uppercase tracking-widest text-slate-400">{label}</p>
      <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">{subtitle}</p>
      {children}
    </section>
  );
}

function TeachingPage({ module, onBack }) {
  return (
    <PageShell>
      <main className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-6 flex flex-wrap gap-3"><Button variant="outline" onClick={onBack}>← Back to main site</Button><Button onClick={() => openNewTab({ type: "module", slug: module.slug })}>Open this page in new tab ↗</Button></div>
        <DetailHero title={module.title} subtitle={module.metaDescription} label={module.keyword} icon={module.icon}>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4"><p className="text-sm text-slate-300">Age range</p><p className="mt-1 font-black">{module.age}</p></div>
            <div className="rounded-2xl bg-white/10 p-4"><p className="text-sm text-slate-300">Lessons</p><p className="mt-1 font-black">{module.lessons.length} complete lessons</p></div>
            <div className="rounded-2xl bg-white/10 p-4"><p className="text-sm text-slate-300">Use case</p><p className="mt-1 font-black">Schools, trusts, councils</p></div>
          </div>
        </DetailHero>
        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black tracking-tight">Why this teaching module matters</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">{module.longIntro}</p>
            <h3 className="mt-8 text-2xl font-black">Value for schools and teachers</h3>
            <p className="mt-4 leading-8 text-slate-700">{module.teacherValue}</p>
            <h3 className="mt-8 text-2xl font-black">Curriculum fit</h3>
            <div className="mt-4 flex flex-wrap gap-2">{module.curriculumFit.map((item) => <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">{item}</span>)}</div>
          </article>
          <aside className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">Learning outcomes</h2>
            <ul className="mt-4 space-y-3 text-slate-700">{module.outcomes.map((outcome) => <li key={outcome} className="rounded-2xl bg-slate-50 p-3">✓ {outcome}</li>)}</ul>
            <Button className="mt-6 w-full">Download module PDF</Button>
            <Button variant="outline" className="mt-3 w-full">Add to school pilot pack</Button>
          </aside>
        </section>
        <section className="mt-8">
          <p className="text-sm font-black uppercase tracking-widest text-slate-500">Complete lesson content</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Teacher-ready lesson breakdown</h2>
          <div className="mt-6 grid gap-5">{module.lessons.map((lesson, index) => <LessonCard key={lesson.title} lesson={lesson} index={index} />)}</div>
        </section>
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-3xl font-black tracking-tight">Frequently asked questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">{module.faq.map(([question, answer]) => <div key={question} className="rounded-2xl bg-slate-50 p-5"><h3 className="font-black">{question}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{answer}</p></div>)}</div>
        </section>
      </main>
    </PageShell>
  );
}

function LessonCard({ lesson, index }) {
  const details = [["Learning objective", lesson.objective], ["Teacher input", lesson.teachingInput], ["Class activity", lesson.activity], ["Worksheet", lesson.worksheet], ["Prompt example", `“${lesson.prompt}”`], ["Assessment", lesson.assessment]];
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-widest text-slate-500">Lesson {index + 1} • {lesson.duration}</p><h3 className="mt-2 text-2xl font-black">{lesson.title}</h3></div><span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">Classroom ready</span></div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{details.map(([label, value]) => <div key={label} className="rounded-2xl bg-slate-50 p-4"><p className="font-black">{label}</p><p className="mt-2 text-sm leading-6 text-slate-700">{value}</p></div>)}</div>
    </article>
  );
}

function ResourcePage({ resource, onBack }) {
  return (
    <PageShell>
      <main className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-6 flex flex-wrap gap-3"><Button variant="outline" onClick={onBack}>← Back to main site</Button><Button onClick={() => openNewTab({ type: "resource", slug: resource.slug })}>Open this page in new tab ↗</Button></div>
        <DetailHero title={resource.title} subtitle={resource.summary} label="Downloadable teaching resource" icon={resource.icon} />
        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h2 className="text-3xl font-black tracking-tight">Resource overview</h2><p className="mt-4 text-lg leading-8 text-slate-700">{resource.pageCopy}</p><p className="mt-4 leading-8 text-slate-700">{resource.seoCopy}</p><h3 className="mt-8 text-2xl font-black">What it includes</h3><div className="mt-4 grid gap-3 md:grid-cols-2">{resource.contents.map((item) => <div key={item} className="rounded-2xl bg-slate-50 p-4 font-semibold">✓ {item}</div>)}</div></article>
          <aside className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-2xl font-black">Unlock this resource</h3><p className="mt-3 leading-7 text-slate-600">In the live Hostinger build, this connects to your email capture, payment checkout, or school member area.</p><Button className="mt-6 w-full">Download sample</Button><Button variant="outline" className="mt-3 w-full">Add to school pack</Button></aside>
        </section>
      </main>
    </PageShell>
  );
}

function PricingPage({ tier, onBack }) {
  return <PageShell><main className="mx-auto max-w-7xl px-5 py-10"><Button variant="outline" className="mb-6" onClick={onBack}>← Back to main site</Button><DetailHero title={`${tier.name} Package`} subtitle={tier.details} label="School pricing" icon="wallet" /><section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><p className="text-5xl font-black">{tier.price}</p><p className="mt-3 text-lg text-slate-600">{tier.text}</p><div className="mt-8 grid gap-3 md:grid-cols-2">{tier.features.map((feature) => <div key={feature} className="rounded-2xl bg-slate-50 p-4 font-semibold">✓ {feature}</div>)}</div><Button className="mt-8">Book sales call</Button></section></main></PageShell>;
}

function ModulePreviewCard({ module }) {
  return <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon name={module.icon} /></div><p className="text-xs font-bold uppercase tracking-wider text-slate-500">{module.age}</p><h3 className="mt-2 text-xl font-black">{module.shortTitle}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{module.desc}</p><div className="mt-4 rounded-2xl bg-slate-50 p-4"><p className="text-sm font-black">Page includes:</p><ul className="mt-2 space-y-1 text-sm text-slate-700"><li>✓ Long-form teaching-sector content</li><li>✓ SEO title and description</li><li>✓ Full lesson plans and prompts</li><li>✓ FAQs and curriculum fit</li></ul></div><Button className="mt-5 w-full" onClick={() => openNewTab({ type: "module", slug: module.slug })}>Open detailed page in new tab ↗</Button></article>;
}

function TeacherDashboard() {
  return <div><h3 className="text-2xl font-black">Teacher Resource Hub</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{resources.map((resource) => <button key={resource.slug} onClick={() => openNewTab({ type: "resource", slug: resource.slug })} className="rounded-2xl bg-white/10 p-4 text-left hover:bg-white/20"><p className="font-semibold">{resource.title}</p><p className="mt-1 text-xs leading-5 text-slate-300">{resource.summary}</p><p className="mt-3 text-xs font-black">Open resource in new tab ↗</p></button>)}</div></div>;
}

function StudentDashboard() {
  return <div><h3 className="text-2xl font-black">Student Learning Journey</h3><div className="mt-5 space-y-4">{modules.map((module, index) => <button key={module.slug} onClick={() => openNewTab({ type: "module", slug: module.slug })} className="w-full rounded-2xl bg-white/10 p-4 text-left hover:bg-white/20"><p className="font-semibold">Level {index + 1}: {module.shortTitle}</p><p className="mt-1 text-xs leading-5 text-slate-300">{module.outcomes[0]}</p></button>)}</div></div>;
}

function PricingCard({ tier }) {
  return <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-2xl font-black">{tier.name}</h3><p className="mt-2 text-slate-500">{tier.text}</p><p className="mt-5 text-3xl font-black">{tier.price}</p><ul className="mt-6 space-y-3 text-sm text-slate-700">{tier.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul><Button className="mt-7 w-full" onClick={() => openNewTab({ type: "pricing", name: tier.name })}>View package ↗</Button></article>;
}

function HomePage({ activeTab, setActiveTab, testsPassed, testResults, onHome }) {
  return (
    <PageShell>
      <Header onHome={onHome} />
      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.12),transparent_35%),radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.14),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
            <div className="flex flex-col justify-center"><div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><Icon name="shield" /> School-ready, age-appropriate, safety-first</div><h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Prepare students for the AI, money and digital systems economy.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">A professional education platform with SEO-friendly teaching pages, full lesson content, classroom resources, school pilot materials, and a scalable conversion funnel.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button onClick={() => openNewTab({ type: "resource", slug: "starter-pack" })}>Download Free School Pack ↗</Button><Button variant="outline" onClick={() => openNewTab({ type: "module", slug: "ai-literacy-for-schools" })}>View AI Literacy Page ↗</Button></div></div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-2xl"><div className="rounded-[1.5rem] bg-slate-950 p-5 text-white"><p className="font-bold">Teaching-sector page preview</p><p className="mt-1 text-sm text-slate-300">Each module opens in a new tab with long-form content, not a thin card.</p><div className="mt-5 grid gap-3">{modules.slice(0, 3).map((item) => <button key={item.slug} onClick={() => openNewTab({ type: "module", slug: item.slug })} className="rounded-2xl bg-white/10 p-4 text-left hover:bg-white/20"><p className="font-semibold">{item.title}</p><p className="mt-1 text-xs leading-5 text-slate-300">{item.metaDescription}</p></button>)}</div></div></div>
          </div>
        </section>
        <section id="programme" className="mx-auto max-w-7xl px-5 py-16"><div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-widest text-slate-500">Teaching pages</p><h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Every card opens in a new tab with proper content</h2></div><p className="max-w-xl text-slate-600">Each card opens a detailed SEO-friendly page containing teaching content, lesson plans, FAQs, and conversion CTAs.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{modules.map((item) => <ModulePreviewCard key={item.slug} module={item} />)}</div></section>
        <section id="resources" className="mx-auto max-w-7xl px-5 py-16"><div className="mb-9"><p className="text-sm font-bold uppercase tracking-widest text-slate-500">Resource Library</p><h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Download pages with stronger copy</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{resources.map((resource) => <article key={resource.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon name={resource.icon} /></div><h3 className="text-xl font-black">{resource.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{resource.summary}</p><ul className="mt-4 space-y-2 text-sm text-slate-700">{resource.contents.slice(0, 3).map((contentItem) => <li key={contentItem}>✓ {contentItem}</li>)}</ul><Button className="mt-5 w-full" onClick={() => openNewTab({ type: "resource", slug: resource.slug })}>Open resource page ↗</Button></article>)}</div></section>
        <section className="bg-slate-950 py-16 text-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-sm font-bold uppercase tracking-widest text-slate-400">Platform UI</p><h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Logged-in dashboard content</h2><p className="mt-5 leading-7 text-slate-300">Dashboard links open detailed pages in new tabs, so teachers can browse resources without losing their place.</p><div className="mt-6 flex gap-3"><Button onClick={() => setActiveTab("teacher")} variant={activeTab === "teacher" ? "secondary" : "outline"}>Teacher</Button><Button onClick={() => setActiveTab("student")} variant={activeTab === "student" ? "secondary" : "outline"}>Student</Button></div></div><div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl">{activeTab === "teacher" ? <TeacherDashboard /> : <StudentDashboard />}</div></div></section>
        <section id="pricing" className="bg-white py-16"><div className="mx-auto max-w-7xl px-5"><div className="mb-9 text-center"><p className="text-sm font-bold uppercase tracking-widest text-slate-500">Pricing</p><h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Packages for schools and trusts</h2></div><div className="grid gap-5 md:grid-cols-3">{pricing.map((tier) => <PricingCard key={tier.name} tier={tier} />)}</div></div></section>
        <section id="demo" className="mx-auto max-w-7xl px-5 py-16"><div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="text-3xl font-black tracking-tight md:text-4xl">Ready to run a pilot in your school?</h2><p className="mt-4 max-w-2xl text-slate-300">Book a short discovery call and receive the free pilot pack, lesson outline, and implementation plan.</p></div><Button variant="secondary" onClick={() => openNewTab({ type: "resource", slug: "pilot-proposal" })}>Book Free Demo ↗</Button></div></div></section>
        <section className="mx-auto max-w-7xl px-5 pb-16"><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex flex-col justify-between gap-3 md:flex-row md:items-center"><div><p className="text-sm font-bold uppercase tracking-widest text-slate-500">Developer checks</p><h3 className="mt-1 text-xl font-black">Preview smoke tests: {testsPassed ? "Passed" : "Needs attention"}</h3></div><span className={`rounded-full px-4 py-2 text-sm font-bold ${testsPassed ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>{testResults.filter((test) => test.pass).length}/{testResults.length} passing</span></div><ul className="mt-5 grid gap-2 text-sm text-slate-700 md:grid-cols-2">{testResults.map((test) => <li key={test.name} className="flex gap-2 rounded-2xl bg-slate-50 p-3"><span>{test.pass ? "✓" : "✕"}</span>{test.name}</li>)}</ul></div></section>
      </main>
      <footer className="border-t bg-white px-5 py-8 text-center text-sm text-slate-500">Future Skills Schools — AI, Financial Literacy & Digital Economy Curriculum for Schools</footer>
    </PageShell>
  );
}

function FutureSkillsEducationPlatformUI() {
  const [activeTab, setActiveTab] = useState("teacher");
  const [route, setRoute] = useState(getInitialRoute());
  const testResults = useMemo(() => runSmokeTests(), []);
  const testsPassed = testResults.every((test) => test.pass);
  const goHome = () => {
    if (typeof window !== "undefined") window.history.replaceState({}, "", window.location.pathname);
    setRoute({ type: "home" });
  };
  if (route.type === "module") return <TeachingPage module={modules.find((item) => item.slug === route.slug) || modules[0]} onBack={goHome} />;
  if (route.type === "resource") return <ResourcePage resource={resources.find((item) => item.slug === route.slug) || resources[0]} onBack={goHome} />;
  if (route.type === "pricing") return <PricingPage tier={pricing.find((item) => item.name === route.name) || pricing[0]} onBack={goHome} />;
  return <HomePage activeTab={activeTab} setActiveTab={setActiveTab} testsPassed={testsPassed} testResults={testResults} onHome={goHome} />;
}

createRoot(document.getElementById("root")).render(<FutureSkillsEducationPlatformUI />);
