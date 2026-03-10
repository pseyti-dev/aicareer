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
