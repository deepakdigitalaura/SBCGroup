export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "cta"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  author: string;
  date: string;
  category: string;
  body: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "5-business-systems-msme-scaling",
    title: "5 Business Systems Every MSME Must Build Before Scaling",
    excerpt:
      "Building strong business systems for MSME growth is the single most overlooked step before scaling. Most founders focus on demand — but when orders rise and operations collapse, the real problem reveals itself: missing systems.",
    metaDescription:
      "Most MSMEs fail to scale not because of lack of demand — but missing systems. Here are 5 foundational systems every MSME must build before growing.",
    author: "Dr. Sagar Burse",
    date: "2026-06-09",
    category: "MSME Growth",
    body: [
      {
        type: "p",
        text: "Building strong business systems for MSME growth is the single most overlooked step before scaling. Most founders focus on demand — but when orders rise and operations collapse, the real problem reveals itself: missing systems.",
      },
      {
        type: "p",
        text: "Orders are delayed. Staff make repeated mistakes. The founder is solving the same problems every week. Revenue flatlines even when enquiries rise.",
      },
      { type: "p", text: "This is not a demand problem. This is a systems problem." },
      {
        type: "p",
        text: "If you are preparing to scale your MSME — whether that means adding a new product line, hiring your next 10 employees, or entering a new geography — you need these five business systems in place first.",
      },
      { type: "h3", text: "1. A Sales & Lead Management System" },
      {
        type: "p",
        text: "Most MSMEs run their sales entirely from the founder's phone — WhatsApp messages, scattered Excel sheets, and memory. This works at ₹50 lakh. It breaks at ₹2 crore.",
      },
      {
        type: "p",
        text: "A sales system means: every lead is captured in one place, every follow-up is tracked, and no enquiry falls through the cracks. It does not require expensive CRM software. A structured Google Sheet with defined stages — New Lead, Follow-Up, Proposal Sent, Closed — is enough to start.",
      },
      {
        type: "p",
        text: "What to do this week: List every source your leads currently come from. Create one master sheet with columns: Name, Source, Date, Stage, Next Action. Move every active lead into it today.",
      },
      { type: "h3", text: "2. A Standard Operating Procedure (SOP) System" },
      {
        type: "p",
        text: "If your business depends on you explaining the same task to every new employee, your business has no system — it has you.",
      },
      {
        type: "p",
        text: "SOPs are written step-by-step instructions for every repeatable task: how to handle a customer complaint, how to raise an invoice, how to open the shop. When SOPs exist, new staff onboard faster, errors drop, and you stop being the manual.",
      },
      {
        type: "p",
        text: "What to do this week: Pick your single most repeated task — the one you explain most often. Write it out in numbered steps. That is your first SOP. Build from there.",
      },
      { type: "h3", text: "3. A Financial Visibility System" },
      {
        type: "p",
        text: "Most MSME founders know their bank balance. Very few know their actual profitability per product, per customer, or per month.",
      },
      {
        type: "p",
        text: "A financial visibility system is not accounting software. It is a simple habit: every week, you review three numbers — cash inflow, cash outflow, and outstanding receivables. Every month, you review your gross margin and operating costs. This takes 30 minutes and changes every decision you make.",
      },
      {
        type: "p",
        text: "What to do this week: Pull your last three months of bank statements. Calculate your average monthly inflow and outflow. You now have your baseline. Most founders are surprised by what they see.",
      },
      { type: "h3", text: "4. A People & Accountability System" },
      { type: "p", text: "Growth requires delegation. Delegation without accountability creates chaos." },
      {
        type: "p",
        text: "A people system means every team member knows exactly what they are responsible for, how their performance is measured, and what good looks like. This does not require an HR department. It requires a one-page role clarity document for each person and a weekly 15-minute check-in.",
      },
      {
        type: "p",
        text: "What to do this week: Write down the top three responsibilities for each person on your team. Share it with them. Ask if they agree. That conversation alone will surface problems you did not know existed.",
      },
      { type: "h3", text: "5. A Customer Retention System" },
      {
        type: "p",
        text: "Acquiring a new customer costs five times more than retaining an existing one. Yet most MSMEs spend 90% of their energy on acquisition and almost nothing on retention.",
      },
      {
        type: "p",
        text: "A retention system is simply a structured way to stay in touch with past customers — a follow-up call 30 days after purchase, a WhatsApp check-in, a quarterly update on new services. Done consistently, it generates repeat business and referrals without any marketing spend.",
      },
      {
        type: "p",
        text: "What to do this week: List your last 20 customers. Identify who you have not spoken to in over 60 days. Send them one message this week — not a sales pitch, just a genuine check-in.",
      },
      { type: "h2", text: "The Common Thread" },
      {
        type: "p",
        text: "Notice that none of these systems require large investment. They require discipline, clarity, and consistency — three things that are free but rare.",
      },
      {
        type: "p",
        text: "The MSMEs that scale successfully are not the ones with the best products or the most capital. They are the ones that built reliable systems before they needed them.",
      },
      {
        type: "p",
        text: "If you are unsure where your business has gaps — in sales, operations, finance, people, or customer management — SBC's GAP360 Business Audit is designed to surface exactly that. In 45 minutes, we map your current state and identify the three highest-impact areas to fix first.",
      },
      { type: "cta", text: "Book your complimentary audit" },
    ],
  },
  {
    slug: "why-msmes-stay-stuck-systems-gap",
    title: "Why Most MSMEs Stay Stuck — The Systems Gap Explained",
    excerpt:
      "Most MSME founders across India turn to MSME consulting expecting strategy — but the real problem runs deeper than strategy. They are stuck because their business runs on people, not systems.",
    metaDescription:
      "Most Indian MSMEs stay stuck not because of strategy but because of missing systems. SBC's MSME consulting closes the systems gap. Book a free audit today.",
    author: "Dr. Sagar Burse",
    date: "2026-05-31",
    category: "MSME Growth",
    body: [
      {
        type: "p",
        text: "Most MSME founders across India turn to MSME consulting expecting strategy — but the real problem runs deeper than strategy. They are stuck because their business runs on people, not systems. This is the systems gap — and closing it is what SBC's MSME consulting practice is built to do.",
      },
      { type: "h2", text: "What Is the Systems Gap in MSME Consulting?" },
      {
        type: "p",
        text: "The systems gap is the difference between what your business could achieve and what it actually delivers — caused entirely by the absence of documented processes, clear accountability structures and consistent reporting.",
      },
      { type: "p", text: "Here is how it typically looks in an Indian MSME:" },
      {
        type: "ul",
        items: [
          "The founder is involved in every decision — approvals, vendor calls, customer complaints, hiring",
          "There are no written SOPs — everything runs on tribal knowledge",
          "Roles exist but accountabilities do not — nobody owns outcomes",
          "Reporting is verbal or WhatsApp-based — there is no real visibility",
          "Growth has stalled — not because of market or product, but because the business cannot handle more volume",
        ],
      },
      {
        type: "p",
        text: "Sound familiar? This is the reality for the majority of India's 6.5 crore MSMEs. Good MSME consulting does not add more strategy on top of this — it fixes the foundation first.",
      },
      { type: "h2", text: "The Founder Trap — The Real MSME Consulting Challenge" },
      {
        type: "p",
        text: "When a business starts, the founder doing everything makes sense. There are no resources, no team, no budget. The founder's involvement is what keeps the business alive.",
      },
      {
        type: "p",
        text: "But as the business grows, this becomes the biggest bottleneck. The founder who once saved the business now prevents it from scaling. Every decision waits for them. Every problem escalates to them. Every process lives in their head.",
      },
      {
        type: "p",
        text: "This is what we call the Founder Trap — and it is the most common reason Indian MSMEs plateau between ₹2 crore and ₹15 crore in revenue and never break through. Effective MSME consulting starts by identifying and dismantling this trap.",
      },
      { type: "h2", text: "Why Strategy Alone Does Not Work" },
      {
        type: "p",
        text: "Most consultants respond to this problem with strategy. They build growth plans, market entry frameworks and product roadmaps. And then they leave.",
      },
      {
        type: "p",
        text: "But strategy without systems is just a document. If the business has no accountability structure, no reporting hierarchy and no process documentation — even the best strategy will fail in execution.",
      },
      {
        type: "p",
        text: "The real MSME consulting intervention is not strategic. It is operational. It is building the systems that allow the business to execute strategy consistently, without the founder being present at every step.",
      },
      { type: "h2", text: "The Four Systems Every MSME Needs" },
      {
        type: "p",
        text: "Based on SBC's MSME consulting work with founders across Gujarat and India through the GAP360™ framework, we have identified four core systems that separate growing businesses from stuck ones:",
      },
      { type: "h3", text: "1. Process Documentation" },
      {
        type: "p",
        text: "Every repeatable activity in your business — production, sales, hiring, customer service — needs a written Standard Operating Procedure. Without documentation, every person does things differently and quality becomes inconsistent. This is the first thing SBC's MSME consulting practice addresses.",
      },
      { type: "h3", text: "2. Accountability Framework" },
      {
        type: "p",
        text: "Every person in your organisation needs a clear KRA and KPI. Not a job description — an accountability framework. What does this person own? What does success look like? How is it measured and reviewed?",
      },
      { type: "h3", text: "3. Reporting Structure" },
      {
        type: "p",
        text: "A three-tier reporting hierarchy — floor/executive → manager → founder — with weekly review cadences and a management dashboard gives you real-time visibility without requiring you to be present everywhere. You manage by exception, not by involvement.",
      },
      { type: "h3", text: "4. Review Cadence" },
      {
        type: "p",
        text: "Systems only work if they are reviewed. A weekly operations review, monthly performance review and quarterly strategic review — each with a fixed agenda, fixed attendees and documented actions — ensures the systems are being followed and course corrections happen fast.",
      },
      { type: "h2", text: "Real Results From MSME Consulting in Action" },
      {
        type: "p",
        text: "The results of closing the systems gap through structured MSME consulting are not theoretical. Here is what SBC has delivered for real clients:",
      },
      {
        type: "stats",
        items: [
          { value: "61%→84%", label: "On-Time Delivery — Rubber & Plastics · 90 Days" },
          { value: "12 hrs", label: "Founder Time Freed/Week · Industrial Components · 60 Days" },
          { value: "34%→18%", label: "Attrition Reduced · Trading & Distribution · 6 Months" },
        ],
      },
      {
        type: "p",
        text: "None of these required new products, new markets or new capital. They required systems — and structured MSME consulting to implement them.",
      },
      { type: "h2", text: "How SBC's MSME Consulting Closes the Systems Gap" },
      {
        type: "p",
        text: "SBC uses the GAP360™ framework — a structured 5-phase diagnostic and implementation methodology — to identify exactly where your systems gap is and close it with hands-on implementation support.",
      },
      {
        type: "p",
        text: "Unlike traditional consulting, SBC's MSME consulting does not end with a report. We stay with you through implementation until measurable results are achieved.",
      },
      {
        type: "p",
        text: "SBC's MSME consulting starts with a complimentary 45-minute business audit — where we map your business, identify the 2-3 most critical gaps and give you a clear action plan at no cost and no obligation.",
      },
      {
        type: "p",
        text: "If you are an MSME founder who feels stuck, overwhelmed or unable to step back from daily operations — the systems gap is almost certainly the reason. And it is entirely fixable.",
      },
      { type: "cta", text: "Book your free 45-minute MSME consulting audit and find out exactly where your business is losing money and momentum." },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
