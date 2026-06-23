export type ServiceDetails = {
  slug: string
  title: string
  summary: string
  whereItHelps: string[]
  benefits: string[]
  industries: string[]
  cta: string
  proof: string
}

export const ragService: ServiceDetails = {
  slug: "knowledge-ai-chatbot-rag",
  title: "Agentic Knowledge Assistant (RAG)",
  summary:
    "A decision-intelligence agent we deploy when speed, precision, and trust in information directly affect business outcomes.",
  whereItHelps: [
    "Customer support (L1 deflection with source-cited answers)",
    "Internal knowledge access (policies, SOPs, institutional memory)",
    "Compliance & legal verification",
    "Sales & pre-sales enablement",
    "Healthcare & insurance policy resolution",
  ],
  benefits: [
    "Instant, cited answers grounded in your own data",
    "Eliminates dependency on tribal knowledge",
    "Builds trust through fully traceable responses",
    "Accelerates onboarding and high-stakes decisions",
  ],
  industries: [
    "SaaS",
    "Healthcare",
    "Insurance",
    "Enterprise Operations",
  ],
  cta: "We don't build assistants. We build decision infrastructure.",
  proof:
    "A SaaS client reduced L1 support volume by 30%, while internal teams adopted the same agent for onboarding and enablement.",
}

export const documentAISuite: ServiceDetails = {
  slug: "document-ai-suite",
  title: "Intelligent Document Processing (IDP)",
  summary:
    "The automation backbone we deploy when operations are bottlenecked by documents, forms, and unstructured data at scale.",
  whereItHelps: [
    "Claims processing & KYC automation",
    "Patient intake & medical record digitization",
    "Invoices, contracts, and compliance workflows",
    "Regulatory filings and audit-ready reporting",
  ],
  benefits: [
    "70–90% reduction in manual processing effort",
    "Compressed turnaround cycles across every document type",
    "Audit-ready accuracy with structured data outputs",
    "Significant reduction in operational overhead",
  ],
  industries: [
    "Insurance",
    "Healthcare",
    "Finance",
    "Enterprise Operations",
  ],
  cta: "IDP is rarely the product—it's the infrastructure layer that makes everything else scale.",
  proof:
    "An insurance client achieved 80%+ straight-through processing, accelerating payouts and eliminating manual review queues.",
}

export const aiMarketingAssist: ServiceDetails = {
  slug: "ai-marketing-assist",
  title: "AI Growth Engine",
  summary:
    "A revenue-acceleration system we deploy when growth depends on hyper-personalization, content velocity, and consistent brand output.",
  whereItHelps: [
    "Hyper-personalized outbound campaigns",
    "High-volume content generation with brand guardrails",
    "Creative variation, multivariate testing, and iteration",
    "Lifecycle and retention messaging",
  ],
  benefits: [
    "Dramatically faster campaign launches",
    "Higher engagement through contextual personalization",
    "Lower CAC via end-to-end workflow automation",
    "Brand-consistent output at any volume",
  ],
  industries: [
    "SaaS",
    "E-commerce",
    "B2B Services",
  ],
  cta: "We deploy marketing AI only when it directly moves revenue or adoption metrics.",
  proof:
    "Retail and SaaS teams cut time-to-launch while sustaining personalization at scale across every channel.",
}

export const computerVisionAutomation: ServiceDetails = {
  slug: "computer-vision-automation",
  title: "Visual AI Automation",
  summary:
    "A multimodal intelligence layer we deploy when image and video data carries untapped operational or commercial value.",
  whereItHelps: [
    "Automated product catalog enrichment and tagging",
    "Real-time quality inspection and defect detection",
    "Image-driven workflow automation",
    "Visual data extraction and structured output",
  ],
  benefits: [
    "Dramatically faster visual processing at scale",
    "Consistent, human-level accuracy without fatigue",
    "Eliminates high-volume manual inspection overhead",
    "Plugs directly into existing operational pipelines",
  ],
  industries: [
    "Retail",
    "Manufacturing",
    "Logistics",
    "Healthcare",
  ],
  cta: "Visual AI is deployed as part of end-to-end systems—never as an isolated model.",
  proof:
    "An e-commerce client cut catalog launch cycles by 60%, hitting 95% tagging accuracy with zero manual review.",
}