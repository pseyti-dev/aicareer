// ─── Methodology ────────────────────────────────────────────────────────────
export const methodology = {
  title: "How We Calculate Your AI Risk Score",
  description: `Our AI risk score is a composite index built on three dimensions derived from peer-reviewed labor economics research, including studies by Frey & Osborne (Oxford), McKinsey Global Institute, and the World Economic Forum's Future of Jobs reports.`,
  dimensions: [
    {
      name: "Task Routinization",
      weight: "40%",
      description: "The percentage of daily tasks that follow predictable, rule-based patterns. Repetitive, structured tasks (data entry, form processing, standard calculations) score high on this dimension because modern AI — especially LLMs and computer vision — can execute them with 99%+ accuracy."
    },
    {
      name: "AI Tool Penetration",
      weight: "35%",
      description: "Whether enterprise-grade AI tools already exist and are being adopted for this role. Professions with mature AI tooling (e.g., QuickBooks AI for bookkeepers, LawGeex for paralegals) face higher near-term displacement pressure than those where AI is still experimental."
    },
    {
      name: "Human Judgment Dependency",
      weight: "25%",
      description: "How much the role relies on contextual reasoning, emotional intelligence, physical dexterity, or novel problem-solving — capabilities where AI still falls significantly short. Roles requiring empathy, trust, and high-stakes judgment score lower on risk."
    }
  ],
  note: "Scores represent baseline risk for professionals without AI augmentation skills. Every skill you acquire directly reduces your personal score by shifting your work toward the human-judgment-dependent end of the spectrum."
};

// ─── Market Statistics ───────────────────────────────────────────────────────
export const marketStats = [
  { figure: "85M", label: "Jobs displaced by AI by 2025", source: "World Economic Forum" },
  { figure: "97M", label: "New roles created requiring AI collaboration", source: "WEF Future of Jobs" },
  { figure: "40%", label: "of current job tasks automatable with existing AI", source: "McKinsey, 2024" },
  { figure: "4x", label: "productivity gain for AI-augmented workers vs. peers", source: "Stanford HAI, 2024" },
  { figure: "$4.4T", label: "annual value AI could add to the global economy", source: "McKinsey Global Institute" },
  { figure: "70%", label: "of executives plan to increase AI investment in 2026", source: "PwC AI Survey 2025" }
];

// ─── Top Risk Rankings (for static AIO-crawlable content) ───────────────────
export const riskRankings = [
  { rank: 1, title: "Data Entry Clerk", risk: 95, reason: "repetitive data processing fully automatable by OCR and NLP" },
  { rank: 2, title: "Bookkeeper", risk: 90, reason: "transaction categorization and reconciliation automated by QuickBooks AI and Xero" },
  { rank: 3, title: "Customer Service Representative", risk: 82, reason: "FAQ handling and tier-1 support replaced by LLM-powered chatbots" },
  { rank: 4, title: "Paralegal", risk: 78, reason: "legal document review and research automated by LawGeex and ROSS Intelligence" },
  { rank: 5, title: "Medical Coder", risk: 72, reason: "ICD-10 code assignment automated by NLP trained on clinical notes" },
  { rank: 6, title: "Loan Officer", risk: 65, reason: "creditworthiness assessment and underwriting automated by ML scoring models" },
  { rank: 7, title: "Sales Representative", risk: 58, reason: "lead qualification and outreach personalization handled by AI sales platforms" }
];

// ─── Careers Data ────────────────────────────────────────────────────────────
export const careers = [
  {
    slug: 'data-entry-clerk',
    title: 'Data Entry Clerk',
    baseRiskScore: 95,
    riskLabel: 'Critical',
    // AIO natural language sentence (crawlable, citable)
    aioSummary: "The AI replacement risk for a Data Entry Clerk is currently estimated at 95% — one of the highest of any profession — due to the near-complete automation of repetitive data processing tasks by optical character recognition (OCR), robotic process automation (RPA), and large language models.",
    // Tasks AI already does
    automatedTasks: [
      "Extracting and inputting data from invoices, forms, and documents using OCR",
      "Validating data fields against existing database records",
      "Batch-processing thousands of records per hour via RPA tools like UiPath",
      "Flagging anomalies and duplicates using ML pattern recognition",
      "Auto-populating CRM and ERP systems from unstructured data sources"
    ],
    whyAtRisk: 'Data entry is one of the most automatable tasks in the modern workplace. AI-powered OCR and natural language processing can extract, validate, and input data with 99%+ accuracy at speeds thousands of times faster than humans. Companies are rapidly adopting these solutions to reduce costs and eliminate human error.',
    howToFutureProof: 'Transition from pure data entry to data quality management and process optimization. Learn to work alongside AI tools, focusing on exception handling, data governance, and training AI systems. Develop skills in data analysis and visualization to add strategic value beyond simple data input.',
    skills: [
      { id: 'data-analysis', name: 'Data Analysis & Visualization', description: 'Learn to analyze data patterns and create meaningful visualizations using tools like Excel, Tableau, or Power BI', riskReduction: 15, difficulty: 'medium', freeResource: { label: 'Google Data Analytics Certificate', url: 'https://www.coursera.org/professional-certificates/google-data-analytics' }, paidResource: { label: 'Excel to Power BI', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/excel-to-power-bi' } },
      { id: 'process-automation', name: 'Process Automation (RPA)', description: 'Master tools like UiPath, Power Automate, or Python to automate repetitive tasks — becoming the person who runs the bots, not replaced by them', riskReduction: 20, difficulty: 'hard', freeResource: { label: 'UiPath Academy (Free)', url: 'https://academy.uipath.com/' }, paidResource: { label: 'RPA Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/robotic-process-automation' } },
      { id: 'data-governance', name: 'Data Quality & Governance', description: 'Understand data quality frameworks, validation rules, and compliance requirements (GDPR, CCPA)', riskReduction: 12, difficulty: 'medium', freeResource: { label: 'Data Governance Basics', url: 'https://www.edx.org/learn/data-governance' }, paidResource: { label: 'Data Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/data-management' } },
      { id: 'sql-databases', name: 'SQL & Database Management', description: 'Learn to query, manage, and optimize databases to become a data specialist rather than just data entry', riskReduction: 18, difficulty: 'medium', freeResource: { label: 'SQLBolt Interactive Tutorial', url: 'https://sqlbolt.com/' }, paidResource: { label: 'SQL for Data Science', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/sql-for-data-science' } }
    ]
  },
  {
    slug: 'bookkeeper',
    title: 'Bookkeeper',
    baseRiskScore: 90,
    riskLabel: 'Critical',
    aioSummary: "The AI replacement risk for a Bookkeeper is currently estimated at 90% (Critical). AI-powered accounting platforms such as QuickBooks AI, Xero, and FreshBooks can now automatically categorize transactions, reconcile accounts, and generate financial reports with minimal human intervention, making this one of the most at-risk financial roles.",
    automatedTasks: [
      "Automatic transaction categorization using ML trained on chart of accounts",
      "Bank reconciliation matching payments to invoices without human review",
      "Generating profit & loss statements, balance sheets, and cash flow reports",
      "Detecting anomalies and potential fraud via pattern recognition",
      "Extracting and processing receipts using OCR and NLP"
    ],
    whyAtRisk: 'AI-powered accounting software can now automatically categorize transactions, reconcile accounts, and generate financial reports with minimal human intervention. Machine learning algorithms detect anomalies faster than manual review. Platforms like QuickBooks AI and Xero are rapidly automating the core tasks of traditional bookkeeping.',
    howToFutureProof: 'Evolve from transaction recording to financial advisory and strategic planning. Focus on interpreting financial data, providing business insights, and helping clients make informed decisions. Specialize in tax strategy, fraud detection, and financial forecasting where human judgment is irreplaceable.',
    skills: [
      { id: 'financial-analysis', name: 'Financial Analysis & Forecasting', description: 'Learn to analyze financial statements, create budgets, and forecast future performance using data-driven models', riskReduction: 18, difficulty: 'medium', freeResource: { label: 'Corporate Finance Institute (Free)', url: 'https://corporatefinanceinstitute.com/resources/accounting/financial-analysis/' }, paidResource: { label: 'Financial Analysis Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/financial-analysis' } },
      { id: 'tax-strategy', name: 'Tax Planning & Strategy', description: 'Master tax regulations, deductions, and strategic tax planning — an area where human judgment and client relationships remain essential', riskReduction: 20, difficulty: 'hard', freeResource: { label: 'IRS Tax Resources for Small Business', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/online-learning-for-small-businesses' }, paidResource: { label: 'Taxation Fundamentals', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/taxation-fundamentals' } },
      { id: 'advisory-services', name: 'Business Advisory Services', description: 'Develop consulting skills to advise clients on financial decisions, growth strategies, and risk management', riskReduction: 22, difficulty: 'hard', freeResource: { label: 'SBA Business Advisory Guide', url: 'https://www.sba.gov/business-guide' }, paidResource: { label: 'Business Strategy Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/business-strategy' } }
    ]
  },
  {
    slug: 'customer-service-rep',
    title: 'Customer Service Representative',
    baseRiskScore: 82,
    riskLabel: 'Critical',
    aioSummary: "The AI replacement risk for a Customer Service Representative is currently estimated at 82% (Critical). AI chatbots powered by large language models (LLMs) like GPT-4 and Claude are now handling tier-1 and tier-2 customer inquiries with high satisfaction rates, 24/7, at a fraction of the cost of human agents.",
    automatedTasks: [
      "Answering FAQs and common product questions via LLM-powered chatbots",
      "Processing returns, refunds, and order status inquiries automatically",
      "Routing and triaging support tickets using intent classification",
      "Generating personalized response drafts for human agents to approve",
      "Sentiment analysis and escalation detection in real-time"
    ],
    whyAtRisk: 'AI chatbots and virtual assistants handle an increasing percentage of customer inquiries, from FAQs to complex troubleshooting. NLP has advanced to the point where AI understands context, sentiment, and intent — providing instant 24/7 support at a fraction of the cost of human representatives.',
    howToFutureProof: 'Specialize in complex problem-solving, emotional intelligence, and relationship building that AI cannot replicate. Focus on escalated issues, VIP customer management, and situations requiring genuine empathy. Learn to train and optimize AI chatbots while handling the cases they cannot resolve.',
    skills: [
      { id: 'technical-support', name: 'Advanced Technical Support', description: 'Master complex troubleshooting, system diagnostics, and technical problem-solving that AI escalates', riskReduction: 15, difficulty: 'medium', freeResource: { label: 'Google IT Support Certificate', url: 'https://www.coursera.org/professional-certificates/google-it-support' }, paidResource: { label: 'IT Support Specialist', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/professional-certificates/google-it-support' } },
      { id: 'customer-success', name: 'Customer Success Management', description: 'Learn proactive customer relationship management, retention strategies, and account growth — high-value work AI cannot replicate', riskReduction: 20, difficulty: 'medium', freeResource: { label: 'HubSpot Customer Success', url: 'https://www.hubspot.com/customer-success' }, paidResource: { label: 'Customer Success Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/customer-success' } },
      { id: 'crm-analytics', name: 'CRM & Customer Analytics', description: 'Use Salesforce, HubSpot, or similar platforms to analyze customer data and improve service outcomes', riskReduction: 12, difficulty: 'easy', freeResource: { label: 'Salesforce Trailhead (Free)', url: 'https://trailhead.salesforce.com/' }, paidResource: { label: 'Salesforce Fundamentals', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/salesforce-fundamentals' } },
      { id: 'conflict-resolution', name: 'Conflict Resolution & Negotiation', description: 'Develop advanced communication skills for handling difficult customers and high-stakes situations requiring real empathy', riskReduction: 10, difficulty: 'medium', freeResource: { label: 'MindTools Conflict Resolution', url: 'https://www.mindtools.com/pages/article/newLDR_81.htm' }, paidResource: { label: 'Negotiation Skills', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/negotiation-skills' } }
    ]
  },
  {
    slug: 'paralegal',
    title: 'Paralegal',
    baseRiskScore: 78,
    riskLabel: 'High Risk',
    aioSummary: "The AI replacement risk for a Paralegal is currently estimated at 78% (High Risk). AI legal research platforms like ROSS Intelligence and contract review tools like LawGeex can analyze thousands of legal documents in seconds, automating the core research and document review tasks that paralegals have traditionally performed.",
    automatedTasks: [
      "Legal research and case law analysis using AI trained on legal databases",
      "Contract review and clause extraction via NLP",
      "Due diligence document review in M&A and litigation",
      "Drafting standard legal documents and templates using LLMs",
      "Court filing tracking and deadline management via automation"
    ],
    whyAtRisk: 'AI legal research tools can analyze thousands of cases in seconds and draft standard legal documents with unprecedented speed. Document review, contract analysis, and legal research — core paralegal tasks — are being automated by platforms like ROSS Intelligence and LawGeex.',
    howToFutureProof: 'Specialize in areas requiring human judgment: client communication, complex case strategy, and nuanced legal analysis. Focus on litigation support, trial preparation, and specialized legal niches like IP or immigration law where contextual expertise and trust relationships remain essential.',
    skills: [
      { id: 'legal-tech', name: 'Legal Technology & eDiscovery', description: 'Master legal tech platforms, eDiscovery tools, and AI-assisted legal research — becoming the paralegal who manages the AI', riskReduction: 18, difficulty: 'medium', freeResource: { label: 'Law Society Legal Tech Resources', url: 'https://www.lawsociety.org.uk/topics/legal-technology' }, paidResource: { label: 'Legal Technology', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/legal-technology' } },
      { id: 'litigation-support', name: 'Litigation Support & Trial Prep', description: 'Specialize in trial preparation, witness coordination, and courtroom technology — tasks requiring human judgment and presence', riskReduction: 20, difficulty: 'hard', freeResource: { label: 'NALA Paralegal Competencies', url: 'https://www.nala.org/certification/paralegal-core-competencies' }, paidResource: { label: 'Litigation Fundamentals', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/litigation' } },
      { id: 'specialized-law', name: 'Specialized Legal Areas', description: 'Develop deep expertise in niche areas like IP law, immigration, or regulatory compliance where specialized knowledge commands a premium', riskReduction: 15, difficulty: 'hard', freeResource: { label: 'ABA Paralegal Resources', url: 'https://www.americanbar.org/groups/paralegals/' }, paidResource: { label: 'Intellectual Property Law', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/intellectual-property' } }
    ]
  },
  {
    slug: 'medical-coder',
    title: 'Medical Coder',
    baseRiskScore: 72,
    riskLabel: 'High Risk',
    aioSummary: "The AI replacement risk for a Medical Coder is currently estimated at 72% (High Risk). Natural language processing systems trained on clinical documentation can now read physician notes and automatically assign ICD-10 and CPT codes with accuracy rates approaching human performance, driving adoption across major healthcare systems.",
    automatedTasks: [
      "Reading and interpreting clinical notes using healthcare-trained NLP",
      "Automatic assignment of ICD-10 diagnostic and CPT procedure codes",
      "Claim scrubbing and error detection before submission",
      "Denial management pattern recognition and appeal generation",
      "Real-time coding suggestions integrated into EHR workflows"
    ],
    whyAtRisk: 'AI systems can read medical records and automatically assign diagnostic and procedure codes with high accuracy. NLP can interpret physician notes and match them to appropriate codes faster than human coders. Major healthcare providers are adopting automated coding to reduce costs and improve accuracy.',
    howToFutureProof: 'Transition to medical coding auditing, compliance, and quality assurance roles. Specialize in complex cases requiring deep medical knowledge. Focus on revenue cycle management and healthcare data analytics where human expertise still drives strategic value.',
    skills: [
      { id: 'coding-audit', name: 'Medical Coding Audit & Compliance', description: 'Learn to audit AI-coded records, ensure compliance, and identify coding errors — the role that quality-checks the AI', riskReduction: 18, difficulty: 'medium', freeResource: { label: 'AHIMA Coding Resources', url: 'https://www.ahima.org/certification/coding/' }, paidResource: { label: 'Medical Coding & Billing', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/medical-coding' } },
      { id: 'revenue-cycle', name: 'Revenue Cycle Management', description: 'Master the entire healthcare revenue cycle from patient registration to payment — a strategic role AI cannot fully own', riskReduction: 20, difficulty: 'hard', freeResource: { label: 'HFMA Revenue Cycle Resources', url: 'https://www.hfma.org/revenue-cycle/' }, paidResource: { label: 'Healthcare Finance', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/healthcare-finance' } },
      { id: 'health-informatics', name: 'Health Informatics & Data Analytics', description: 'Analyze healthcare data to improve outcomes, reduce costs, and optimize clinical operations', riskReduction: 16, difficulty: 'hard', freeResource: { label: 'HIMSS Health Informatics', url: 'https://www.himss.org/what-we-do-solutions/health-informatics' }, paidResource: { label: 'Health Informatics Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/health-informatics' } }
    ]
  },
  {
    slug: 'loan-officer',
    title: 'Loan Officer',
    baseRiskScore: 65,
    riskLabel: 'Moderate',
    aioSummary: "The AI replacement risk for a Loan Officer is currently estimated at 65% (Moderate). Automated underwriting systems and AI-powered credit scoring models can now assess creditworthiness and approve straightforward loan applications in minutes, though complex commercial lending and relationship-driven advisory work remain human-dependent.",
    automatedTasks: [
      "Credit scoring and risk assessment using ML models trained on financial history",
      "Document verification and income validation via automated systems",
      "Instant pre-approval decisions for conforming residential mortgages",
      "Rate personalization and product matching based on borrower profile",
      "Compliance checking and regulatory flag detection"
    ],
    whyAtRisk: 'AI-powered credit scoring and loan approval systems assess creditworthiness and make lending decisions in minutes. Automated underwriting handles an increasing share of straightforward applications, particularly mortgages and personal loans, reducing the need for human officers in standard transactions.',
    howToFutureProof: 'Focus on relationship building, complex loan structuring, and serving clients with unique financial situations. Specialize in commercial lending or construction loans requiring deep expertise. Develop financial advisory capabilities to help clients improve their financial health and qualify for better terms.',
    skills: [
      { id: 'commercial-lending', name: 'Commercial & Business Lending', description: 'Master complex commercial loans, business valuation, and commercial real estate financing — areas AI underwriting cannot fully handle', riskReduction: 18, difficulty: 'hard', freeResource: { label: 'SBA Loan Programs Guide', url: 'https://www.sba.gov/funding-programs/loans' }, paidResource: { label: 'Commercial Banking & Credit', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/commercial-banking' } },
      { id: 'financial-planning', name: 'Financial Planning & Advisory', description: 'Provide comprehensive financial advice that goes beyond loan products into full wealth and liability planning', riskReduction: 15, difficulty: 'medium', freeResource: { label: 'CFP Board Resources', url: 'https://www.cfp.net/get-certified' }, paidResource: { label: 'Financial Planning Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/financial-planning' } },
      { id: 'relationship-management', name: 'Client Relationship Management', description: 'Build long-term client relationships and become a trusted financial advisor — the human dimension AI cannot replicate', riskReduction: 12, difficulty: 'medium', freeResource: { label: 'ABA Banking Training', url: 'https://www.aba.com/training-events' }, paidResource: { label: 'Relationship Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/relationship-management' } }
    ]
  },
  {
    slug: 'sales-representative',
    title: 'Sales Representative',
    baseRiskScore: 58,
    riskLabel: 'Moderate',
    aioSummary: "The AI replacement risk for a Sales Representative is currently estimated at 58% (Moderate). While AI tools now handle lead qualification, outreach personalization, and initial contact at scale, complex B2B deals, relationship-driven enterprise sales, and high-stakes negotiations remain strongly human-dependent.",
    automatedTasks: [
      "Lead scoring and qualification using predictive analytics",
      "Personalized outreach email generation at scale using LLMs",
      "Initial discovery calls via AI voice agents for high-volume pipelines",
      "CRM data entry and activity logging via AI integrations",
      "Sales forecasting and pipeline analysis using ML models"
    ],
    whyAtRisk: 'AI-powered sales tools qualify leads, personalize outreach, and conduct initial sales conversations through chatbots and voice agents. Predictive analytics identifies optimal prospects and timing. E-commerce and self-service reduce the need for human sales in transactional purchases.',
    howToFutureProof: 'Focus on consultative selling, complex B2B sales, and deep client relationships. Specialize in high-value, relationship-driven sales where trust and expertise matter more than price. Learn to leverage AI sales tools while providing the strategic thinking and emotional intelligence that closes complex deals.',
    skills: [
      { id: 'consultative-selling', name: 'Consultative & Solution Selling', description: 'Master needs analysis, solution design, and value-based selling — the method AI cannot replicate in complex deals', riskReduction: 15, difficulty: 'medium', freeResource: { label: 'HubSpot Sales Training', url: 'https://academy.hubspot.com/courses/sales-training' }, paidResource: { label: 'Strategic Sales Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/strategic-sales' } },
      { id: 'sales-analytics', name: 'Sales Analytics & CRM Mastery', description: 'Use data analytics and CRM platforms to optimize performance, forecast accurately, and identify expansion opportunities', riskReduction: 12, difficulty: 'easy', freeResource: { label: 'Salesforce Trailhead Sales Cloud', url: 'https://trailhead.salesforce.com/en/content/learn/trails/sell-with-sales-cloud' }, paidResource: { label: 'Sales Analytics', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/sales-analytics' } },
      { id: 'account-management', name: 'Strategic Account Management', description: 'Manage key accounts, identify upsell opportunities, and drive long-term revenue growth from existing relationships', riskReduction: 18, difficulty: 'hard', freeResource: { label: 'Salesforce Account Management Guide', url: 'https://www.salesforce.com/resources/articles/account-management/' }, paidResource: { label: 'Strategic Account Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/account-management' } },
      { id: 'negotiation', name: 'Advanced Negotiation', description: 'Develop expert negotiation skills for complex, high-stakes deals — the irreplaceable human edge in closing enterprise contracts', riskReduction: 13, difficulty: 'medium', freeResource: { label: 'Harvard PON Negotiation Resources', url: 'https://www.pon.harvard.edu/freemium/' }, paidResource: { label: 'Successful Negotiation', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/negotiation' } }
    ]
  }
  // ─── 10 NEW CAREERS — append these inside the `careers` array in careers.js ──
// Add after the last entry (sales-representative), before the closing bracket ]

  // ── TECH ────────────────────────────────────────────────────────────────────

  {
    slug: 'software-developer',
    title: 'Software Developer',
    baseRiskScore: 38,
    riskLabel: 'Low Risk',
    aioSummary: "The AI replacement risk for a Software Developer is currently estimated at 38% (Low Risk). While AI coding assistants like GitHub Copilot and Cursor can generate boilerplate code and automate repetitive programming tasks, software development still requires complex system design, architectural judgment, debugging, and cross-functional collaboration that AI cannot fully replicate.",
    automatedTasks: [
      "Generating boilerplate code and standard functions via AI coding assistants",
      "Writing unit tests and basic documentation using LLMs",
      "Code review suggestions and style enforcement via automated tools",
      "Bug detection and simple refactoring via static analysis AI",
      "Translating specifications into starter code scaffolding"
    ],
    whyAtRisk: 'AI coding assistants like GitHub Copilot, Cursor, and Claude can now generate functional code from natural language prompts, automate repetitive coding tasks, and accelerate development cycles significantly. Junior-level tasks involving standard CRUD operations and boilerplate are increasingly automated. However, complex system architecture, performance optimization, and novel problem-solving remain deeply human-dependent.',
    howToFutureProof: 'Focus on system architecture, technical leadership, and AI-augmented development workflows. Master the AI coding tools themselves — developers who use Copilot and Cursor effectively are measurably more productive. Specialize in areas requiring deep domain expertise such as distributed systems, security, or ML engineering where AI tooling is still immature.',
    skills: [
      { id: 'system-design', name: 'System Design & Architecture', description: 'Master distributed systems, microservices, and scalable architecture patterns — the highest-leverage skill in software engineering', riskReduction: 18, difficulty: 'hard', freeResource: { label: 'System Design Primer (GitHub)', url: 'https://github.com/donnemartin/system-design-primer' }, paidResource: { label: 'Software Design & Architecture', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/software-design-architecture' } },
      { id: 'ai-augmented-dev', name: 'AI-Augmented Development', description: 'Master GitHub Copilot, Cursor, and Claude for coding to become dramatically more productive than peers who avoid AI tools', riskReduction: 20, difficulty: 'medium', freeResource: { label: 'GitHub Copilot Docs', url: 'https://docs.github.com/en/copilot' }, paidResource: { label: 'Generative AI for Software Development', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/generative-ai-for-software-development' } },
      { id: 'cloud-devops', name: 'Cloud & DevOps Engineering', description: 'Learn AWS, GCP, or Azure combined with CI/CD, Kubernetes, and infrastructure-as-code to move into high-demand platform roles', riskReduction: 15, difficulty: 'hard', freeResource: { label: 'AWS Free Tier + Training', url: 'https://aws.amazon.com/training/' }, paidResource: { label: 'Cloud Engineering Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/cloud-engineering-gcp' } },
      { id: 'security-engineering', name: 'Security Engineering', description: 'Cybersecurity skills are in critical shortage and highly resistant to AI automation — especially penetration testing, threat modeling, and incident response', riskReduction: 14, difficulty: 'hard', freeResource: { label: 'OWASP Learning Resources', url: 'https://owasp.org/www-project-web-security-testing-guide/' }, paidResource: { label: 'IBM Cybersecurity Analyst', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst' } }
    ]
  },

  {
    slug: 'it-support-specialist',
    title: 'IT Support Specialist',
    baseRiskScore: 65,
    riskLabel: 'Moderate',
    aioSummary: "The AI replacement risk for an IT Support Specialist is currently estimated at 65% (Moderate). AI-powered helpdesk tools and chatbots now handle tier-1 support tickets, password resets, and common troubleshooting automatically, though complex infrastructure issues, on-site support, and security incidents remain human-dependent.",
    automatedTasks: [
      "Tier-1 helpdesk ticket resolution via AI chatbots and knowledge bases",
      "Password resets and account provisioning via automated workflows",
      "Network monitoring and alert triage using AI anomaly detection",
      "Software installation and patch management via automated deployment tools",
      "FAQ responses and guided troubleshooting via virtual agents"
    ],
    whyAtRisk: 'AI-powered IT service management tools now auto-resolve a significant percentage of helpdesk tickets without human intervention. Virtual agents handle common issues like password resets and software access requests instantly. RPA automates repetitive tasks like onboarding and offboarding workflows, reducing demand for tier-1 support headcount.',
    howToFutureProof: 'Transition from reactive support to proactive infrastructure management and cybersecurity. Develop expertise in cloud platforms, endpoint security, and IT automation. Become the person who builds and manages the AI support tools, rather than the one they replace.',
    skills: [
      { id: 'cybersecurity-ops', name: 'Cybersecurity & Endpoint Security', description: 'Master endpoint protection, threat detection, and incident response — the fastest-growing area in IT with severe talent shortages', riskReduction: 22, difficulty: 'hard', freeResource: { label: 'CompTIA Security+ Study Resources', url: 'https://www.comptia.org/certifications/security' }, paidResource: { label: 'Google Cybersecurity Certificate', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/professional-certificates/google-cybersecurity' } },
      { id: 'cloud-administration', name: 'Cloud Administration', description: 'Learn to manage Azure, AWS, or GCP environments — cloud admin roles are growing faster than traditional on-prem IT is declining', riskReduction: 20, difficulty: 'medium', freeResource: { label: 'Microsoft Learn (Azure Free)', url: 'https://learn.microsoft.com/en-us/training/azure/' }, paidResource: { label: 'Microsoft Azure Fundamentals', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/microsoft-azure-fundamentals-az-900' } },
      { id: 'it-automation', name: 'IT Automation & Scripting', description: 'Use Python, PowerShell, and Ansible to automate infrastructure tasks — become the engineer who builds automation, not the one replaced by it', riskReduction: 18, difficulty: 'medium', freeResource: { label: 'Google IT Automation with Python', url: 'https://www.coursera.org/professional-certificates/google-it-automation' }, paidResource: { label: 'IT Automation with Python', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/professional-certificates/google-it-automation' } }
    ]
  },

  {
    slug: 'data-analyst',
    title: 'Data Analyst',
    baseRiskScore: 45,
    riskLabel: 'Moderate',
    aioSummary: "The AI replacement risk for a Data Analyst is currently estimated at 45% (Moderate). AI tools can now automate data cleaning, generate SQL queries from natural language, and produce standard reports automatically. However, defining business questions, interpreting results in context, and communicating insights to stakeholders remain deeply human skills.",
    automatedTasks: [
      "Automated data cleaning and normalization using AI-powered ETL tools",
      "Natural language to SQL query generation via tools like Databricks AI and BigQuery",
      "Standard report generation and dashboard updates on schedule",
      "Anomaly detection and trend identification in structured datasets",
      "Data visualization suggestions and auto-chart generation"
    ],
    whyAtRisk: 'AI tools like Databricks Assistant, GitHub Copilot for SQL, and business intelligence platforms with AI features can now generate queries, clean data, and produce reports automatically. The portion of a data analyst\'s job that involves mechanical data manipulation is increasingly automated, compressing demand for junior analyst roles.',
    howToFutureProof: 'Evolve from data manipulation to strategic insight generation. Develop expertise in machine learning, predictive modeling, and business strategy. The most resilient data analysts are those who translate complex analysis into actionable business decisions — combining technical depth with communication skills.',
    skills: [
      { id: 'machine-learning', name: 'Machine Learning & Predictive Analytics', description: 'Move beyond descriptive analytics into predictive and prescriptive modeling using Python, scikit-learn, and cloud ML platforms', riskReduction: 20, difficulty: 'hard', freeResource: { label: 'Fast.ai Practical Deep Learning', url: 'https://course.fast.ai/' }, paidResource: { label: 'Machine Learning Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/machine-learning-introduction' } },
      { id: 'data-storytelling', name: 'Data Storytelling & Executive Communication', description: 'Translate complex analysis into compelling narratives for non-technical stakeholders — the skill AI cannot replicate in business contexts', riskReduction: 16, difficulty: 'medium', freeResource: { label: 'Storytelling with Data Blog', url: 'https://www.storytellingwithdata.com/blog' }, paidResource: { label: 'Data Visualization with Tableau', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/data-visualization' } },
      { id: 'advanced-sql', name: 'Advanced SQL & Data Engineering', description: 'Master window functions, query optimization, dbt, and data pipeline design to move into higher-value data engineering roles', riskReduction: 14, difficulty: 'medium', freeResource: { label: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/' }, paidResource: { label: 'Data Engineering Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/data-engineering' } },
      { id: 'ai-analytics-tools', name: 'AI-Powered Analytics Tools', description: 'Master Databricks, Snowflake Cortex, and LLM-integrated BI tools to stay ahead as the analytics stack becomes AI-native', riskReduction: 12, difficulty: 'medium', freeResource: { label: 'Databricks Academy (Free)', url: 'https://www.databricks.com/learn/training/home' }, paidResource: { label: 'Data Analytics on Google Cloud', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/data-analytics-google-cloud' } }
    ]
  },

  {
    slug: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    baseRiskScore: 28,
    riskLabel: 'Low Risk',
    aioSummary: "The AI replacement risk for a Cybersecurity Analyst is currently estimated at 28% (Low Risk). While AI automates threat detection, log analysis, and vulnerability scanning, cybersecurity is a fundamentally adversarial field where human judgment, creative threat modeling, and incident response leadership remain irreplaceable — and demand continues to significantly outpace supply.",
    automatedTasks: [
      "Log analysis and SIEM alert triage using AI-powered security platforms",
      "Vulnerability scanning and patch prioritization via automated tools",
      "Phishing email detection and quarantine via ML classifiers",
      "Threat intelligence aggregation and IOC matching",
      "Compliance reporting and audit trail generation"
    ],
    whyAtRisk: 'AI-powered security operations platforms like CrowdStrike Falcon and Microsoft Sentinel automate significant portions of threat detection and alert triage, reducing the volume of manual work for tier-1 SOC analysts. However, sophisticated attacks, zero-day exploits, and nation-state threats require creative human adversarial thinking that AI tools cannot match.',
    howToFutureProof: 'Specialize in offensive security, threat hunting, and incident response leadership — the most adversarial and creative aspects of cybersecurity where AI remains weakest. Develop expertise in cloud security and AI security (LLM red teaming, model security), two of the fastest-growing and least-automated sub-disciplines.',
    skills: [
      { id: 'penetration-testing', name: 'Penetration Testing & Red Teaming', description: 'Master ethical hacking, exploit development, and adversarial simulation — the most creative and AI-resistant area of cybersecurity', riskReduction: 18, difficulty: 'hard', freeResource: { label: 'TryHackMe (Free Tier)', url: 'https://tryhackme.com/' }, paidResource: { label: 'Penetration Testing & Ethical Hacking', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/ibm-cybersecurity-analyst' } },
      { id: 'cloud-security', name: 'Cloud Security Architecture', description: 'Secure AWS, Azure, and GCP environments — cloud security is one of the most understaffed and highest-paying cybersecurity specializations', riskReduction: 16, difficulty: 'hard', freeResource: { label: 'AWS Security Learning Path', url: 'https://aws.amazon.com/training/learning-paths/security/' }, paidResource: { label: 'Cloud Security Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/palo-alto-networks-cybersecurity' } },
      { id: 'incident-response', name: 'Incident Response & Forensics', description: 'Lead containment, investigation, and recovery during active breaches — a high-stakes, judgment-intensive role AI cannot lead', riskReduction: 14, difficulty: 'hard', freeResource: { label: 'SANS Incident Response Resources', url: 'https://www.sans.org/blog/incident-response/' }, paidResource: { label: 'IBM Cybersecurity Analyst', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst' } }
    ]
  },

  {
    slug: 'product-manager',
    title: 'Product Manager',
    baseRiskScore: 32,
    riskLabel: 'Low Risk',
    aioSummary: "The AI replacement risk for a Product Manager is currently estimated at 32% (Low Risk). AI tools automate user research synthesis, backlog grooming assistance, and metrics dashboards, but product management is fundamentally a role of strategic judgment, stakeholder alignment, and customer empathy — capabilities where AI remains a tool, not a replacement.",
    automatedTasks: [
      "User research synthesis and theme extraction from interview transcripts",
      "Backlog prioritization suggestions based on effort/impact scoring",
      "Automated product metrics dashboards and anomaly alerts",
      "Competitive analysis aggregation from public sources",
      "Draft PRD generation from feature briefs using LLMs"
    ],
    whyAtRisk: 'AI tools now assist with significant portions of the PM workflow — from synthesizing user research with tools like Dovetail AI to generating PRD drafts with Claude or GPT-4. Automated analytics platforms surface insights that previously required manual analysis. However, the core of product management — making hard tradeoff decisions, aligning cross-functional teams, and developing product vision — is deeply human.',
    howToFutureProof: 'Develop deep product strategy and business model expertise. Build strong engineering relationships and technical credibility. Focus on the qualitative, judgment-intensive work: customer discovery, vision setting, and stakeholder influence. PMs who use AI tools to move faster will outcompete those who do not.',
    skills: [
      { id: 'product-strategy', name: 'Product Strategy & Business Models', description: 'Master competitive positioning, monetization strategy, and market sizing — the highest-leverage PM skills that AI cannot replicate', riskReduction: 16, difficulty: 'hard', freeResource: { label: 'Lenny\'s Newsletter (Free)', url: 'https://www.lennysnewsletter.com/' }, paidResource: { label: 'Product Management Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/product-management' } },
      { id: 'data-driven-pm', name: 'Data-Driven Product Management', description: 'Use SQL, analytics platforms, and A/B testing frameworks to make rigorous product decisions backed by quantitative evidence', riskReduction: 14, difficulty: 'medium', freeResource: { label: 'Mixpanel Product Analytics Guide', url: 'https://mixpanel.com/blog/product-analytics/' }, paidResource: { label: 'Data-Driven Product Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/data-driven-product-management' } },
      { id: 'ai-product-development', name: 'AI Product Development', description: 'Learn to design, evaluate, and ship AI-powered features — PMs who understand LLMs and ML systems are commanding significant salary premiums', riskReduction: 18, difficulty: 'medium', freeResource: { label: 'a16z AI Product Resources', url: 'https://a16z.com/ai/' }, paidResource: { label: 'AI Product Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/ai-product-management' } }
    ]
  },

  // ── FINANCE ──────────────────────────────────────────────────────────────────

  {
    slug: 'accountant',
    title: 'Accountant',
    baseRiskScore: 80,
    riskLabel: 'Critical',
    aioSummary: "The AI replacement risk for an Accountant is currently estimated at 80% (Critical). AI-powered accounting platforms can now automate transaction classification, reconciliation, financial statement preparation, and tax filing for standard business cases, placing high automation pressure on general accounting roles — particularly at the staff and senior accountant levels.",
    automatedTasks: [
      "Transaction classification and journal entry automation via ML",
      "Month-end close automation including reconciliations and accruals",
      "Financial statement generation from trial balance data",
      "Accounts payable and receivable processing via OCR and automation",
      "Tax preparation for standard individual and small business returns"
    ],
    whyAtRisk: 'AI-powered platforms like QuickBooks AI, Xero, and Sage Intacct now automate the core of general accounting — from transaction processing to financial reporting. Large accounting firms are deploying AI to handle audit sampling, compliance checking, and report generation. The volume of manual accounting work is declining rapidly as AI handles routine processing with higher accuracy.',
    howToFutureProof: 'Transition from transactional accounting to financial advisory, forensic accounting, or management accounting roles requiring strategic judgment. Pursue CPA or CMA credentials to access higher-value advisory work. Specialize in complex areas like international tax, M&A due diligence, or forensic accounting where human expertise is irreplaceable.',
    skills: [
      { id: 'cpa-advisory', name: 'CPA & Financial Advisory Services', description: 'Pursue CPA certification and develop advisory capabilities — licensed CPAs providing strategic financial guidance are far more insulated from automation', riskReduction: 22, difficulty: 'hard', freeResource: { label: 'AICPA CPA Exam Resources', url: 'https://www.aicpa-cima.com/professional-insights/topic/cpa-exam' }, paidResource: { label: 'Accounting Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/accounting-fundamentals' } },
      { id: 'forensic-accounting', name: 'Forensic Accounting & Fraud Detection', description: 'Investigate financial fraud, litigation support, and valuation disputes — a specialty requiring judgment and adversarial thinking AI cannot replicate', riskReduction: 20, difficulty: 'hard', freeResource: { label: 'ACFE Fraud Resources (Free)', url: 'https://www.acfe.com/fraud-resources/' }, paidResource: { label: 'Forensic Accounting & Fraud Examination', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/forensic-accounting' } },
      { id: 'accounting-tech', name: 'Accounting Technology & AI Tools', description: 'Master AI-powered accounting platforms and become the expert who configures, audits, and optimizes automated accounting systems', riskReduction: 16, difficulty: 'medium', freeResource: { label: 'QuickBooks Training (Free)', url: 'https://quickbooks.intuit.com/learn-support/en-us/training/' }, paidResource: { label: 'Intuit Academy Bookkeeping', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/professional-certificates/intuit-bookkeeping' } },
      { id: 'management-accounting', name: 'Management Accounting & FP&A', description: 'Move into financial planning and analysis, budgeting, and business performance management — strategic roles with significantly lower automation risk', riskReduction: 18, difficulty: 'medium', freeResource: { label: 'CIMA Management Accounting Resources', url: 'https://www.cimaglobal.com/Starting-CIMA/' }, paidResource: { label: 'Financial Planning & Analysis', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/financial-planning-analysis' } }
    ]
  },

  {
    slug: 'financial-analyst',
    title: 'Financial Analyst',
    baseRiskScore: 55,
    riskLabel: 'Moderate',
    aioSummary: "The AI replacement risk for a Financial Analyst is currently estimated at 55% (Moderate). AI tools now automate financial modeling templates, earnings analysis, and market data aggregation, compressing junior analyst workloads significantly. However, investment thesis development, client advisory work, and complex valuation judgment remain strongly human-dependent.",
    automatedTasks: [
      "Financial model building from templates using AI-assisted tools",
      "Earnings call transcript summarization and sentiment analysis",
      "Market data aggregation and competitor benchmarking reports",
      "Variance analysis and budget vs. actual reporting automation",
      "Automated DCF and comparable company analysis from public filings"
    ],
    whyAtRisk: 'Bloomberg Terminal AI, FactSet, and emerging AI research tools now automate significant portions of junior financial analyst work — from pulling and formatting data to generating initial draft research reports. The time required to build financial models and compile market analysis has dropped dramatically, compressing headcount at the junior level.',
    howToFutureProof: 'Develop deep sector expertise and investment judgment that AI cannot replicate. Move toward buy-side roles, portfolio management, or specialized M&A advisory where relationship capital and proprietary insight matter more than spreadsheet mechanics. Pursue CFA certification to signal commitment to the analytical depth the market still values.',
    skills: [
      { id: 'cfa-investment', name: 'CFA & Investment Analysis', description: 'Pursue CFA certification to develop rigorous investment analysis skills and access buy-side roles with significantly lower automation risk', riskReduction: 20, difficulty: 'hard', freeResource: { label: 'CFA Institute Study Materials', url: 'https://www.cfainstitute.org/en/programs/cfa' }, paidResource: { label: 'Investment Management Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/investment-management' } },
      { id: 'financial-modeling', name: 'Advanced Financial Modeling & Valuation', description: 'Master LBO, M&A, and DCF modeling at an expert level — complex deal structuring and bespoke valuation remain high-value human work', riskReduction: 16, difficulty: 'hard', freeResource: { label: 'Wall Street Prep Free Resources', url: 'https://www.wallstreetprep.com/knowledge/' }, paidResource: { label: 'Financial Modeling & Valuation', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/financial-modeling' } },
      { id: 'fp-and-a', name: 'FP&A & Strategic Finance', description: 'Move into financial planning and analysis to work directly with business leaders on strategy — high-judgment work with strong growth trajectory', riskReduction: 14, difficulty: 'medium', freeResource: { label: 'FP&A Trends Resources', url: 'https://www.fpandtrends.com/' }, paidResource: { label: 'Business Analytics Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/business-analytics' } },
      { id: 'ai-finance-tools', name: 'AI-Powered Finance Tools', description: 'Master Bloomberg AI, FactSet, and Python for finance to remain the analyst who extracts insight from AI output rather than being replaced by it', riskReduction: 12, difficulty: 'medium', freeResource: { label: 'Python for Finance (Free)', url: 'https://www.youtube.com/watch?v=_eQ_8U5MRHY' }, paidResource: { label: 'Python & Statistics for Financial Analysis', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/python-statistics-financial-analysis' } }
    ]
  },

  {
    slug: 'insurance-underwriter',
    title: 'Insurance Underwriter',
    baseRiskScore: 74,
    riskLabel: 'High Risk',
    aioSummary: "The AI replacement risk for an Insurance Underwriter is currently estimated at 74% (High Risk). AI-powered underwriting platforms can now assess risk profiles, price standard policies, and approve straightforward applications automatically, significantly reducing the need for human underwriters in personal lines and small commercial insurance.",
    automatedTasks: [
      "Risk scoring and premium calculation for standard personal lines policies",
      "Automated policy approval for low-complexity applications within defined parameters",
      "Document verification and application data extraction via OCR and NLP",
      "Claims history analysis and fraud flag detection using ML models",
      "Renewal pricing adjustments based on loss experience data"
    ],
    whyAtRisk: 'Insurtech platforms and traditional carriers alike are deploying AI underwriting engines that assess risk and price standard policies in seconds without human review. Personal auto, home, and small business insurance — which represent the majority of underwriting volume — are increasingly automated end-to-end, compressing demand for traditional underwriters significantly.',
    howToFutureProof: 'Specialize in complex commercial lines, specialty insurance, and high-value accounts where bespoke risk assessment and relationship management remain essential. Develop expertise in emerging risk categories — cyber insurance, climate risk, and parametric products — where AI models lack sufficient historical data to operate reliably.',
    skills: [
      { id: 'commercial-underwriting', name: 'Complex Commercial Underwriting', description: 'Specialize in large commercial accounts, specialty lines, and excess & surplus — areas where AI models lack sufficient data and human judgment is premium', riskReduction: 22, difficulty: 'hard', freeResource: { label: 'The Institutes Learning Resources', url: 'https://www.theinstitutes.org/' }, paidResource: { label: 'Insurance & Risk Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/insurance-risk-management' } },
      { id: 'cyber-risk', name: 'Cyber Risk Assessment', description: 'Develop expertise in cyber insurance underwriting — one of the fastest-growing and most underserved specialty lines with acute talent shortages', riskReduction: 20, difficulty: 'hard', freeResource: { label: 'CISA Cyber Risk Resources', url: 'https://www.cisa.gov/resources-tools/resources/cyber-risk-institute' }, paidResource: { label: 'Cybersecurity Risk Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/cyber-risk-management' } },
      { id: 'actuarial-skills', name: 'Actuarial & Predictive Modeling', description: 'Develop quantitative risk modeling skills to work alongside AI underwriting systems as a model validator and complex case specialist', riskReduction: 16, difficulty: 'hard', freeResource: { label: 'Casualty Actuarial Society Resources', url: 'https://www.casact.org/learn' }, paidResource: { label: 'Actuarial Science Fundamentals', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/actuarial-science' } }
    ]
  },

  {
    slug: 'tax-preparer',
    title: 'Tax Preparer',
    baseRiskScore: 88,
    riskLabel: 'Critical',
    aioSummary: "The AI replacement risk for a Tax Preparer is currently estimated at 88% (Critical). AI-powered tax software can now handle the full preparation workflow for standard individual and small business returns with minimal human intervention, making non-credentialed tax preparation one of the most acutely at-risk occupations in financial services.",
    automatedTasks: [
      "Automated data import from W-2s, 1099s, and financial accounts",
      "Standard deduction optimization and form selection via rule-based AI",
      "Individual and small business tax return preparation end-to-end",
      "Error checking and IRS compliance validation before filing",
      "Prior year comparison and refund maximization analysis"
    ],
    whyAtRisk: 'TurboTax AI, H&R Block AI Tax Assist, and similar platforms now guide taxpayers through complex returns with AI assistance, significantly reducing the need for human tax preparers for standard cases. The IRS Direct File program further compresses demand by offering free automated filing directly. Non-credentialed preparers handling straightforward returns face the highest displacement pressure.',
    howToFutureProof: 'Pursue Enrolled Agent (EA) or CPA credentials to access complex tax strategy work that software cannot handle. Specialize in business tax planning, international taxation, or tax controversy representation before the IRS — advisory and advocacy roles where professional credentials provide both legal standing and client trust that AI cannot replicate.',
    skills: [
      { id: 'enrolled-agent', name: 'Enrolled Agent (EA) Certification', description: 'Become an IRS Enrolled Agent to represent taxpayers in audits and appeals — a federally licensed role that AI cannot fill and that commands significant fee premiums', riskReduction: 25, difficulty: 'hard', freeResource: { label: 'IRS Enrolled Agent Information', url: 'https://www.irs.gov/tax-professionals/enrolled-agents' }, paidResource: { label: 'Tax Preparation & Law 2024-2026', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/tax-preparation-law' } },
      { id: 'business-tax-strategy', name: 'Business Tax Strategy & Planning', description: 'Develop expertise in business entity structuring, pass-through taxation, and proactive tax minimization strategy — high-value advisory work that requires human judgment', riskReduction: 22, difficulty: 'hard', freeResource: { label: 'SBA Tax Guide for Small Business', url: 'https://www.sba.gov/business-guide/manage-your-business/pay-taxes' }, paidResource: { label: 'US Federal Taxation Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/us-federal-taxation' } },
      { id: 'international-tax', name: 'International Tax & Expat Returns', description: 'Specialize in foreign income, FBAR reporting, and expatriate taxation — a high-complexity niche where software still struggles and human expertise commands premium fees', riskReduction: 18, difficulty: 'hard', freeResource: { label: 'IRS International Tax Resources', url: 'https://www.irs.gov/individuals/international-taxpayers' }, paidResource: { label: 'International Business Taxation', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/international-business-taxation' } }
    ]
  },

  {
    slug: 'investment-banker',
    title: 'Investment Banker',
    baseRiskScore: 42,
    riskLabel: 'Moderate',
    aioSummary: "The AI replacement risk for an Investment Banker is currently estimated at 42% (Moderate). AI is compressing junior banker workloads by automating pitch book creation, financial model templates, and comparable analysis, but the core of investment banking — deal origination, client relationships, negotiation, and regulatory navigation — remains deeply human and relationship-driven.",
    automatedTasks: [
      "Pitch book template generation and formatting via AI design tools",
      "Comparable company and precedent transaction analysis from public databases",
      "Initial financial model scaffolding and sensitivity table generation",
      "Due diligence document review and data room organization",
      "Market update and industry overview section drafting using LLMs"
    ],
    whyAtRisk: 'AI tools are significantly compressing the analyst and associate workload in investment banking. Tasks that once took junior bankers all night — building comps, formatting pitch books, drafting market overviews — now take hours with AI assistance. Banks are beginning to hire fewer junior staff as AI multiplies individual productivity, though deal volume growth partially offsets this compression.',
    howToFutureProof: 'Build deep sector coverage expertise and a proprietary deal network — the two things that generate mandates and cannot be replicated by AI. Develop skills in complex structured products, cross-border transactions, and distressed situations where judgment and relationship capital matter most. Senior bankers with strong client relationships face minimal automation risk.',
    skills: [
      { id: 'deal-origination', name: 'Deal Origination & Client Coverage', description: 'Build a proprietary network and sector expertise that generates deal mandates — the most valuable and AI-resistant skill in investment banking', riskReduction: 20, difficulty: 'hard', freeResource: { label: 'Wall Street Oasis IB Resources', url: 'https://www.wallstreetoasis.com/finance-dictionary/investment-banking' }, paidResource: { label: 'Investment Banking Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/investment-banking' } },
      { id: 'structured-finance', name: 'Structured Finance & Complex Products', description: 'Develop expertise in CLOs, project finance, or structured credit — high-complexity products where bespoke structuring judgment remains essential', riskReduction: 18, difficulty: 'hard', freeResource: { label: 'SIFMA Structured Finance Resources', url: 'https://www.sifma.org/resources/research/structured-finance/' }, paidResource: { label: 'Financial Engineering & Risk Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/specializations/financialengineering' } },
      { id: 'ai-banking-tools', name: 'AI-Augmented Banking Workflows', description: 'Master AI tools for pitch books, financial modeling, and research to be dramatically more productive than peers — the new baseline expectation at top firms', riskReduction: 14, difficulty: 'medium', freeResource: { label: 'Breaking Into Wall Street Free Resources', url: 'https://breakingintowallstreet.com/biws/free-tutorials/' }, paidResource: { label: 'Advanced Financial Modeling', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/advanced-financial-modeling' } }
    ]
  },
];

// ─── Special Content ─────────────────────────────────────────────────────────
export const specialOptions = [
  { value: 'ai-ready', label: '🌍 I want to be AI-ready in any job' },
  { value: 'ai-entrepreneur', label: '💰 I want to earn money with AI' }
];

export const specialContent = {
  'ai-ready': {
    title: 'Become AI-Ready in Any Career',
    description: 'Essential AI skills that will future-proof your career regardless of your industry. These are the universal capabilities that make professionals indispensable in an AI-augmented workplace.',
    cards: [
      { id: 'ai-literacy', title: 'AI Literacy Fundamentals', description: 'Understand how AI works, its capabilities and limitations, and how it impacts your industry. Learn to identify AI opportunities and risks in your daily work.', freeResource: { label: 'Elements of AI (Free)', url: 'https://www.elementsofai.com/' }, paidResource: { label: 'AI For Everyone', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/ai-for-everyone' } },
      { id: 'prompt-engineering', title: 'Prompt Engineering', description: 'Master the art of communicating with AI tools like ChatGPT, Claude, and Gemini to get consistently better results. Learn advanced prompting techniques for your specific use cases.', freeResource: { label: 'Learn Prompting (Free)', url: 'https://learnprompting.org/' }, paidResource: { label: 'Prompt Engineering for ChatGPT', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/prompt-engineering' } },
      { id: 'data-literacy', title: 'Data Literacy', description: 'Learn to read, analyze, and communicate with data. Understand basic statistics, data visualization, and how to make data-driven decisions in your role.', freeResource: { label: 'The Data Literacy Project', url: 'https://thedataliteracyproject.org/' }, paidResource: { label: 'Data Literacy Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/data-literacy' } },
      { id: 'workflow-automation', title: 'Workflow Automation', description: 'Automate repetitive tasks using no-code tools like Zapier, Make, or Microsoft Power Automate. Save hours every week and focus on high-value strategic work.', freeResource: { label: 'Zapier University (Free)', url: 'https://zapier.com/university' }, paidResource: { label: 'Business Process Automation', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/automation' } },
      { id: 'critical-ai-thinking', title: 'Critical AI Evaluation', description: 'Develop the ability to critically evaluate AI outputs, identify biases, and ensure ethical AI use. Learn when to trust AI and when to apply human judgment.', freeResource: { label: 'Fast.ai Ethics Course', url: 'https://ethics.fast.ai/' }, paidResource: { label: 'AI Ethics', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/ai-ethics' } }
    ]
  },
  'ai-entrepreneur': {
    title: 'Make Money with AI',
    description: 'Turn AI skills into real income streams through freelancing, digital products, and services. These are the most proven paths to monetizing AI capabilities in 2026.',
    cards: [
      { id: 'ai-content-services', title: 'AI-Powered Content Services', description: 'Offer content creation services using AI tools. Write blog posts, create social media content, or produce marketing copy faster and at scale.', freeResource: { label: 'Copy.ai Content Guide', url: 'https://www.copy.ai/blog/ai-content-creation' }, paidResource: { label: 'Content Marketing Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/content-marketing' } },
      { id: 'ai-affiliate', title: 'AI Tools Affiliate Marketing', description: 'Promote AI tools and software through affiliate programs. Create reviews, tutorials, and comparisons to earn commissions from AI product sales.', freeResource: { label: 'Shopify Affiliate Marketing Guide', url: 'https://www.shopify.com/blog/affiliate-marketing' }, paidResource: { label: 'Digital Marketing Specialization', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/affiliate-marketing' } },
      { id: 'ai-digital-products', title: 'AI-Generated Digital Products', description: 'Create and sell digital products like prompt libraries, AI templates, or online courses. Low cost to produce, infinitely scalable.', freeResource: { label: 'Shopify Digital Products Guide', url: 'https://www.shopify.com/blog/digital-products' }, paidResource: { label: 'Digital Business Models', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/digital-business' } },
      { id: 'ai-automation-services', title: 'AI Automation Consulting', description: 'Help businesses automate their workflows using AI tools. Offer services in process optimization, chatbot development, or custom AI integrations.', freeResource: { label: 'Zapier Automation Consulting Guide', url: 'https://zapier.com/blog/automation-consulting/' }, paidResource: { label: 'Business Process Management', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/business-automation' } },
      { id: 'prompt-consulting', title: 'Prompt Engineering Consulting', description: 'Help companies optimize their AI interactions, create prompt libraries, and train teams on effective AI communication for their specific industry.', freeResource: { label: 'Prompting Guide', url: 'https://www.promptingguide.ai/' }, paidResource: { label: 'Generative AI for Business', platform: 'Coursera', affiliateUrl: 'https://www.coursera.org/learn/ai-consulting' } }
    ]
  }
  
};

// ─── Author / E-E-A-T ────────────────────────────────────────────────────────
export const author = {
  name: "Paulo Seyti",
  role: "Data & AI Professional",
  bio: "Paulo is a data professional with experience in business intelligence and AI product development. He built aicareer.me to help working professionals understand and navigate the impact of artificial intelligence on their careers — combining data expertise with firsthand experience in the AI tools reshaping the job market.",
  expertise: ["Business Intelligence", "Data Analysis", "AI Tools & Automation", "Career Strategy"]
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
export function getCareer(slug) { return careers.find(c => c.slug === slug); }
export function getSpecialContent(type) { return specialContent[type]; }
