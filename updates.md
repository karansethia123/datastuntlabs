# Task: Update Datastunt Labs Landing Page + Build New "What We Do" Page

You are working in the codebase for **datastunt.com**, the marketing site for Datastunt Labs, an "AI-Native Engineering Governance" firm. Your job has two parts:

1. **Update the existing landing page** (home page) so its messaging matches the company's actual positioning (below).
2. **Create a new page, `/what-we-do`,** that explains the three service lines and the DAIRS™ framework in detail.

Read this entire prompt before writing any code. Sections 1–2 give you the company narrative. Section 3 gives you the landing page spec. Section 4 gives you the full content spec for the new page, dimension-by-dimension. Section 5 is a **mandatory writing/rewriting guideline** — read it carefully, it governs how you're allowed to phrase everything. Section 6 lists content you must NOT publish. Section 7 covers technical/implementation requirements. Section 8 is your acceptance checklist.

---

## 1. Company Narrative (for your context — do not dump this verbatim anywhere)

The software industry assumed growth required hiring more engineers. AI has broken that assumption: software can now be built dramatically faster. Most observers conclude AI is making engineering obsolete. Datastunt's actual thesis is different: **AI hasn't removed complexity, it has relocated it** — from *creation* (which is now easy) to *governance* (which is now hard). The bottleneck used to be "can we build this?" It is now **"can we trust what we've built?"**

A new class of "AI-Native Companies" builds faster, iterates faster, and ships faster — but also accumulates risk faster. That risk stays invisible until growth arrives, at which point performance, security, cost, and velocity problems surface all at once, and fixing them is far more expensive than preventing them would have been.

Traditional consulting/dev-shop/staffing models are built around a resource (developer hours) that's becoming commoditized. Datastunt is not a dev shop, not a staffing firm, not a traditional consultancy. It operates in a category it is defining: **AI-Native Engineering Governance.** It sits above implementation and focuses on whether the systems being built can survive long-term growth.

**Core belief:** every software company eventually becomes limited by one of two things — it runs out of customers, or it runs out of engineering quality. Datastunt exists to make sure it's never the latter.

**Long-term vision:** Datastunt's methodology becomes **DAIRS™ (Datastunt AI Readiness & Resilience System)** — eventually an industry-standard engineering-readiness benchmark used by founders, CTOs, investors, PE firms, and acquirers, the way audited financials are used today.

---

## 2. The Three Offerings (one-line summaries — use as the basis for landing-page preview cards)

| Offering | Role | One-line description |
|---|---|---|
| **AI Build Readiness Audit™** | The assessment layer | Understand the health of the organization. Identify risks. Create visibility. |
| **AI Engineering Copilot™** | The governance layer | Provide ongoing oversight. Support leadership. Prevent future risks. |
| **AI Development Operating System™** | The transformation layer | Redesign how engineering organizations work with AI. Create repeatable systems. Enable sustainable scale. |

Relationship between them: the **Audit** creates visibility and is the entry point ("front door") into the ecosystem. The **Copilot** turns that visibility into ongoing, recurring governance — it's the cornerstone of the business model. The **Operating System** is the deeper transformation engagement that actually rebuilds how the org works with AI. **DAIRS** is the measurement framework that powers and connects all three: the Audit scores it, the Copilot monitors it, the Operating System improves it.

---

## 3. Landing Page Spec

Update (don't necessarily throw away existing structure/components — adapt them) the home page to include, in this order:

1. **Hero section**
   - Headline should center on the trust/governance reframe — e.g. something built around the line *"Can you trust what you've built?"* paired with the AI-native premise that building has gotten easy, trusting what you built has not.
   - Subhead should name the category: Datastunt Labs operates in **AI-Native Engineering Governance** — helping organizations build, operate, and scale software safely in the age of AI.
   - Primary CTA: request/book an **AI Build Readiness Audit™** (it's the entry point — treat it as the main conversion action).
   - Secondary CTA / link: "See what we do" → links to the new `/what-we-do` page.

2. **The reframe / problem section**
   - Communicate, in your own words (see Section 5 guidelines), the idea that AI changed *where* complexity lives, not whether it exists — creation got easier, governance got harder — and that this is why technical risk accumulates invisibly until growth exposes it.
   - Keep this section short — 2–4 sentences or a small number of punchy short lines. Don't reproduce the long anaphora-style paragraph chains from the source strategy doc (see Section 5, rule 5).

3. **"What Datastunt does" positioning section**
   - One short paragraph establishing that Datastunt is not a dev shop, staffing firm, or traditional consultancy — it's an AI-Native Engineering Governance firm.
   - Tie to the core belief: every software company eventually gets limited by running out of customers *or* running out of engineering quality — Datastunt exists to prevent the latter.

4. **Three Offerings preview** (cards/grid)
   - One card per offering from the table in Section 2, each with: name (with ™), role tag (assessment/governance/transformation layer), 1–2 sentence description, and a "Learn more" link to the matching anchor/section on `/what-we-do`.

5. **DAIRS™ teaser**
   - Brief callout introducing DAIRS as the measurement framework behind everything Datastunt does, and the long-term vision of it becoming an industry benchmark (like audited financials, but for engineering health). Link to the DAIRS section of `/what-we-do`.

6. **Closing CTA**
   - Repeat the primary call to action (book an Audit / talk to Datastunt).

---

## 4. New Page Spec: `/what-we-do`

Create a new route at `/what-we-do` (match the existing site's routing convention — e.g. `pages/what-we-do.tsx`, `src/pages/WhatWeDo.jsx`, `what-we-do/index.html`, etc. — inspect the repo first, see Section 7). Add it to primary navigation and footer.

This page expands on the three offerings plus DAIRS. **Use the exact headers given below** (they are the product/dimension names — keep ™ symbols and exact wording). For every header, write fresh body copy based on the bullet points provided, following the Section 5 guidelines. The bullets are factual anchors — don't drop items, don't invent new ones, but you are free (and expected) to rewrite, group, and re-sentence them.

### Page intro
Short intro paragraph: this page explains how Datastunt's three engagement types work together, powered by DAIRS™.

---

### Section A — AI Build Readiness Audit™
*Role: the assessment layer.*

Cover, with own headers matching these source headers:

- **Why This Audit Exists** — built to answer one question leadership usually can't answer themselves: *"How prepared is our software organization for the next stage of growth?"* Use the framing that software creation has gotten dramatically easier while governance has not, creating a growing imbalance.
- **What We Are Actually Selling** — clients think they're buying an audit; what they're actually buying is **confidence/clarity/visibility** — the audit turns technical uncertainty into executive intelligence.
- **Ideal Customer Profile** — for companies that already have a product, users, revenue, and real engineering/AI activity (not pre-launch idea-stage companies). Best fits: seed/Series A startups, growth-stage SaaS, AI-native companies, VC-backed businesses, and companies prepping for fundraising or acquisition.
- **What We Evaluate** — explain that the audit evaluates the organization as a complete system (interactions between components, not isolated pieces), across nine dimensions:

  | Dimension | What's evaluated |
  |---|---|
  | Business & Product Understanding | Business model, revenue generation, customers, growth/expansion plans, strategic objectives |
  | Product Ecosystem Mapping | Features, integrations, automations, data flows, AI systems, vendor dependencies, customer journeys, single points of failure |
  | Architecture Readiness Assessment | System design, service boundaries, API/data/event architecture, scalability strategy, dependency structure, architectural governance |
  | Engineering Quality Assessment | Repo structure, code organization, documentation, testing maturity, review process, dependency management, onboarding complexity |
  | AI Systems Readiness Assessment | Prompt management, context/retrieval quality, agent reliability, failure recovery, model/vendor dependency, hallucination controls, cost controls, observability |
  | Infrastructure & Cloud Readiness | Cloud architecture, CI/CD, deployment systems, disaster recovery, scalability, cloud spend, operational resilience |
  | Security & Risk Assessment | AuthN/AuthZ, secrets management, data exposure, third-party dependencies, compliance, AI security |
  | Operational Resilience Assessment | Monitoring, alerting, incident management, runbooks, recovery, rollback safety, support readiness |
  | Knowledge Resilience Assessment | Documentation, knowledge sharing, decision tracking, team/key-person dependency, organizational memory |

  Frame this as a table, accordion, or grid of nine cards — pick whatever fits the existing design system. Each one needs only a 1–2 sentence description, not the full bullet dump.

- **The Role of DAIRS™** — every audit is powered by DAIRS; each dimension above feeds into DAIRS scores (link to Section D below).
- **Human + AI Delivery Model** — AI accelerates analysis (repo/code/architecture analysis agents); the final assessment is always human-owned. Short statement: "AI accelerates. Humans decide."
- **What You Get (Deliverables)** — tailor by audience: Executive Leadership gets an executive summary + business/growth-readiness assessment; Technical Leadership gets architecture/engineering/AI/technical-debt reports; Investors get a technology due-diligence summary + DAIRS benchmark report; Boards get a risk dashboard + strategic roadmap.
- **Why It's the Front Door** — the audit is the natural entry point into deeper Datastunt engagements (Copilot, then Operating System).

---

### Section B — AI Engineering Copilot™
*Role: the governance layer.*

- **Positioning statement** — Datastunt becomes the client's **engineering governance layer** — not a dev team, not outsourced engineering, not generic consultants.
- **The problem it solves** — most orgs don't fail from lack of intelligence, they fail from lack of *consistent* engineering governance: reasonable short-term decisions (skip docs, delay refactors, defer security) compound silently until complexity becomes a real constraint on velocity.
- **Core philosophy** — engineering quality isn't about headcount, it's about systems, standards, and decision-making; adding engineers to a weak system often accelerates problems rather than solving them.
- **Ideal customer profile** — companies with a production platform, paying customers, a growing team, AI-powered features, and real operational dependencies (Series A+, growth-stage SaaS, AI-native companies, venture-backed startups).
- **Seven Governance Areas** — present as seven sections/cards using these exact names, each with a short rewritten description based on the source bullets:

  | Governance Area | What it covers |
  |---|---|
  | Architecture Governance | Ongoing review of system design, service boundaries, data architecture, build-vs-buy and migration decisions |
  | AI Systems Governance | Prompt/agent sprawl, model dependency, cost control, reliability, AI observability and governance policy |
  | Technical Debt Governance | Visibility into debt accumulation/repayment, high-risk areas, refactoring priorities |
  | Engineering Velocity Governance | Deployment frequency, cycle/lead times, review friction, whether activity is translating into business value |
  | Infrastructure Governance | Cloud architecture, scalability, disaster recovery, cost efficiency, vendor dependency |
  | Security Governance | Identity/access management, secrets, third-party and AI-specific security risk, as an ongoing process not a one-time project |
  | Organizational Readiness Governance | Decision-making process, documentation maturity, hiring readiness, team/key-person dependency |

- **How it runs** — describe the operating cadence: **weekly** participation in engineering/architecture/AI/risk reviews; **monthly** health + DAIRS progress + risk + AI systems reports; **quarterly** strategic reviews (roadmap, scalability planning, technology hiring, due-diligence prep).
- **Delivery team** — Lead Engineering Copilot (strategic advisor/relationship owner), Principal Architect, AI Systems Specialist, Platform Engineer, optional domain experts (security, healthcare, fintech, etc.).
- **What clients are actually buying** — predictability: confidence that risk is caught early, AI systems are governed responsibly, and growth is happening on a stable foundation.

---

### Section C — AI Development Operating System™
*Role: the transformation layer.*

- **The industry problem** — most companies hand engineers AI tools (Claude Code, Cursor, Copilot, etc.) and hope productivity follows. What actually happens: fragmented prompt libraries, inconsistent workflows, scattered knowledge, and a new failure mode Datastunt calls **"AI Operational Debt."** Giving people tool access isn't the same as building an AI-native organization.
- **What it actually is** — not training, not generic consulting, not a tooling rollout. It's organizational transformation: a new operating model for how engineering work happens, producing sustainable velocity and "organizational intelligence."
- **Core mission** — get human expertise and AI working together through structured, repeatable, governed systems. The goal isn't maximum automation — it's maximum leverage.
- **The shift in how software gets made** — illustrate (as a simple before/after diagram if your design system supports it) the move from:
  `Human Engineers → Code → Software`
  to:
  `Human Engineers → Context → AI Systems → Code → Software`
  Frame the takeaway: the organizations that win won't be the ones writing the most code — they'll be the ones creating the best context, since context is what fuels AI output quality.
- **Eight Transformation Areas** — present as eight sections/cards:

  | Transformation Area | What it covers |
  |---|---|
  | AI Engineering Standards | Prompt, context, AI-review, agent-usage, and output-validation standards — replacing every-engineer-does-it-differently chaos |
  | Context Engineering Systems | Redesigning how org knowledge, docs, and decisions are stored so AI systems always have high-quality context |
  | Repository Intelligence Architecture | Restructuring repos so they're discoverable and legible to both humans and AI, not just humans |
  | AI Workflow Design | Purpose-built workflows for feature dev, bug fixes, reviews, testing, docs, incident response, onboarding, etc. |
  | Agent Architecture Design | Defined responsibilities, boundaries, monitoring, escalation paths, and human-oversight requirements for AI agents |
  | Knowledge Operating System | Unifying playbooks, prompt libraries, decision registries, and runbooks into one accessible, AI-compatible knowledge base |
  | Engineering Governance Framework | Embedding the Copilot's governance model into daily operations rather than as a bolt-on process |
  | AI Adoption & Change Management | Education, incentives, and adoption tracking — because transformation usually fails on people, not technology |

- **How the engagement runs** — four phases: **Discovery** (baseline current workflows/standards/governance) → **Operating System Design** (target-state blueprint: standards, processes, knowledge architecture, AI workflows, success metrics) → **Implementation** (deploy docs systems, restructure repos, stand up prompt libraries and governance, run training) → **Optimization** (measure adoption, refine, evolve).
- **What clients receive** — summarize the deliverables list (AI Engineering Playbook, Governance Framework, Prompt/Context Engineering Standards, Repository Standards, Knowledge Management Architecture, Agent Governance Model, Training Curriculum, Transformation Roadmap, DAIRS Benchmark Report) as a clean bullet list, grouped logically rather than as 13 flat bullets.
- **Team structure** — Transformation Lead, Principal Architect, AI Systems Specialist, Knowledge Systems Architect, Platform Engineer, Engineering Operations Specialist, Change Management Advisor.
- **Relationship to DAIRS** — the Audit identifies weaknesses, the Copilot monitors them, the Operating System fixes them — all mapped against DAIRS dimensions, creating a closed feedback loop.

---

### Section D — DAIRS™: The Datastunt AI Readiness & Resilience System

- **What it is** — a comprehensive framework that measures the health, resilience, scalability, governance maturity, and long-term sustainability of modern software organizations. Created because software creation has become automated while software *governance* has not — so risk accumulates invisibly until it's exposed by growth, incidents, due diligence, or key-person departures.
- **What it is NOT** — not a code review, not a security scan, not a cloud audit, not a compliance framework, not an "AI assessment tool." It evaluates organizations as systems — how technology, people, process, infrastructure, and AI interact — not isolated weak points.
- **Philosophy** — sustainable growth requires balancing speed vs. stability, innovation vs. governance, autonomy vs. accountability, AI automation vs. human oversight, growth vs. resilience. The goal isn't a perfect system — it's a system that can adapt and survive.
- **Ten Dimensions** — present as a clean table (these weights are factual — do not alter them):

  | Dimension | Weight |
  |---|---|
  | Architecture Resilience | 15% |
  | Engineering Quality | 15% |
  | Operational Reliability | 12% |
  | Security Readiness | 12% |
  | AI Governance | 12% |
  | Scalability Readiness | 10% |
  | Knowledge Resilience | 7% |
  | Delivery Velocity | 6% |
  | Organizational Readiness | 6% |
  | Cost Efficiency | 5% |

  For each, write one short sentence on what it measures (architecture's evolvability, engineering's maintainability, operational reliability's recovery capability, security's exposure to preventable risk, AI governance's controllability/trustworthiness of AI systems, scalability's growth readiness, knowledge resilience's dependency on individuals, delivery velocity's sustainable execution, organizational readiness's leadership/process maturity, cost efficiency's spend sustainability).

- **Five Maturity Levels** — present as a simple progression: **Level 1 Reactive** (no formal systems, success depends on individuals) → **Level 2 Emerging** (basic practices, fragmented knowledge) → **Level 3 Structured** (documented, repeatable processes) → **Level 4 Managed** (measured performance, enforced governance) → **Level 5 Adaptive** (continuous improvement, governance scales naturally, resilient under change).
- **Outputs** — DAIRS produces more than a single score: an **Overall Score (0–100)**, plus a Readiness Score, Resilience Score, Scalability Score, Governance Score, **AI Trust Score**, a Technical Debt Index, and an Operational Risk Index.
- **Evidence-driven** — scores are never based on interviews alone; evidence includes repos, docs, infra configs, monitoring/incident data, architecture diagrams, and prompt/agent configurations, alongside leadership and engineering interviews.
- **Long-term vision** — DAIRS is intended to become the common language of engineering readiness — the way audited financial statements are the common language of financial health — used by founders, CTOs, boards, and investors alike to evaluate technology risk.

---

## 5. Content Rewriting Guidelines — READ CAREFULLY

The source strategy material this content is based on was written in a deliberately repetitive, staccato, one-clause-per-line style for rhetorical effect in an internal thesis document (e.g., "AI is not removing complexity. AI is changing where complexity exists."). **Do not carry that style onto the live website.** Follow these rules everywhere in Sections 3 and 4:

1. **Keep all product/dimension/section names and ™ marks exactly as given** — "AI Build Readiness Audit™," "AI Engineering Copilot™," "AI Development Operating System™," "DAIRS™," "Datastunt AI Readiness & Resilience System," every "Dimension," "Governance Area," and "Transformation Area" header, and the weight percentages in the DAIRS table. These are fixed and must not be reworded, reordered, or renumbered.
2. **Never copy sentences verbatim from this prompt's bullet descriptions into the page.** They are factual anchors for you to write *from*, not text to paste. Every paragraph and card description should be freshly composed.
3. **Don't drop facts to make prose shorter.** If a bullet list has 8 items, you may group them into 2–3 clauses or a clean sub-list, but every item's substance should still be represented somewhere — don't quietly cut items because they're inconvenient to fit in a sentence.
4. **Don't invent new facts, dimensions, numbers, or claims** that aren't grounded in the material given above. If you want to add normal marketing connective tissue ("Here's how that works in practice…"), that's fine — just don't invent new statistics, client examples, or capabilities.
5. **Limit repetition-for-emphasis to at most once per section.** The source material repeats sentence structures heavily (anaphora) for dramatic effect; that reads as deliberate and a little excessive on a real product page. One short repeated-structure flourish per major section is enough.
6. **Default paragraph length: 2–4 sentences.** Default list length: 4–8 items — if the source has more than 8, group related items together.
7. **Tone:** confident, direct, a little contrarian/category-defining — but written like real B2B SaaS/consulting marketing copy, not like an internal manifesto. Avoid words that sound like AI-generated filler ("revolutionize," "unlock," "seamless," "game-changing").
8. **Preserve the few genuinely strong original lines as inspiration, not verbatim text** — e.g. the reframe from "can we build this?" to "can we trust what we've built?", and the "Human Engineers → Context → AI Systems → Code → Software" shift. These ideas are core to the pitch; restate them in your own words rather than dropping them, but you don't need to quote them exactly.
9. **Headlines/CTAs can be short and punchy** (this is normal web copy, not a violation of rule 5) — the "no staccato repetition" rule is about paragraph-level body copy, not single headline fragments.

---

