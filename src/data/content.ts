import {
  UserCheck,
  Building2,
  Search,
  Briefcase,
  FileSearch,
  Fingerprint,
  CreditCard,
  Video,
  MapPin,
  ShieldAlert,
  Home,
  Banknote,
  Umbrella,
  Smartphone,
  Landmark,
  Users,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

export interface SolutionItem {
  slug: string;
  name: string;
  headline: string;
  shortDescription: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  useCases?: string[];
}

export const SOLUTIONS: SolutionItem[] = [
  {
    slug: 'customer-verification',
    name: 'Customer Verification',
    headline: 'Confidence in Every Customer Profile',
    shortDescription: 'Comprehensive verification of identity, address, documents, employment, and financial information.',
    icon: UserCheck,
    description:
      'Businesses need confidence that the information provided by customers is accurate and genuine. BeEnsure provides comprehensive customer verification covering identity, address, documents, employment, financial information, and other relevant parameters based on client requirements.',
    features: [
      'Identity verification',
      'Address verification',
      'Document validation',
      'Employment verification',
      'Financial information verification',
      'Other relevant parameters based on client requirements',
    ],
    useCases: [
      'Digital checks',
      'Document validation',
      'Field verification',
      'Structured investigation',
    ],
  },
  {
    slug: 'business-verification',
    name: 'Business Verification',
    headline: 'Know the Business Before the Relationship',
    shortDescription: 'Verify business existence, ownership, operational presence, activity, and documentation.',
    icon: Building2,
    description:
      'Understanding a business before entering into a commercial or financial relationship is essential for effective risk management. BeEnsure verifies business existence, ownership-related information, operational presence, business activity, documentation, and other relevant information.',
    features: [
      'Business existence verification',
      'Ownership-related information',
      'Operational presence',
      'Business activity verification',
      'Documentation checks',
      'Other relevant information',
    ],
    useCases: [
      'Onboarding',
      'Lending',
      'Vendor assessment',
      'Partnership evaluation',
      'Business decisions',
    ],
  },
  {
    slug: 'due-diligence',
    name: 'Due Diligence',
    headline: 'Know Before You Decide',
    shortDescription: 'Structured due diligence covering business, financial, legal, operational, and KYC aspects.',
    icon: Search,
    description:
      'Due diligence requires more than collecting information. It requires connecting different information points to understand the overall risk profile. BeEnsure provides structured due diligence covering business, financial, legal, operational, KYC validation, document verification, business checks, financial assessment, management-related information, market intelligence, and other risk indicators.',
    features: [
      'Business due diligence',
      'Financial assessment',
      'Legal due diligence',
      'Operational due diligence',
      'KYC validation',
      'Document verification',
      'Management-related information',
      'Market intelligence',
    ],
  },
  {
    slug: 'employment-verification',
    name: 'Employment Verification',
    headline: 'Verify the Professional Journey',
    shortDescription: 'Validate employment history, professional credentials, and related employment parameters.',
    icon: Briefcase,
    description:
      'BeEnsure helps organizations validate employment history and professional credentials. Verification may include previous employer details, designation, employment period, salary-related information, business email validation, documents, and other relevant employment parameters.',
    features: [
      'Previous employer details',
      'Designation verification',
      'Employment period verification',
      'Salary-related information',
      'Business email validation',
      'Document verification',
      'Centralized verification requests',
      'Evidence collection and reporting',
    ],
  },
  {
    slug: 'document-verification',
    name: 'Document Verification',
    headline: 'Documents You Can Trust',
    shortDescription: 'Validate documents and identify inconsistencies, missing information, and alterations.',
    icon: FileSearch,
    description:
      'BeEnsure helps organizations validate documents and identify inconsistencies, missing information, alterations, and other indicators requiring investigation. Verification can integrate digital verification sources, APIs, structured checks, and expert review to provide greater confidence in authenticity and consistency of critical documents.',
    features: [
      'Inconsistency detection',
      'Missing information identification',
      'Alteration detection',
      'Digital verification sources',
      'API-based checks',
      'Structured checks and expert review',
    ],
  },
  {
    slug: 'identity-kyc-verification',
    name: 'Identity & KYC Verification',
    headline: 'Establishing the Right Identity',
    shortDescription: 'Reliable identity verification for onboarding, lending, employment, and compliance.',
    icon: Fingerprint,
    description:
      'Reliable identity verification is fundamental to customer onboarding, lending, employment, and compliance. BeEnsure combines government-issued identity information, document validation, database checks, and other appropriate verification mechanisms with structured workflows and audit-ready records.',
    features: [
      'Government-issued identity information',
      'Document validation',
      'Database checks',
      'Other appropriate verification mechanisms',
      'Structured workflows',
      'Audit-ready records',
    ],
  },
  {
    slug: 'pan-financial-verification',
    name: 'PAN & Financial Verification',
    headline: 'Connecting Data Points for Better Decisions',
    shortDescription: 'Integrate verification APIs and data sources to validate PAN, tax, and financial indicators.',
    icon: CreditCard,
    description:
      'BeEnsure can integrate relevant verification APIs and data sources to validate PAN-related information, tax information, and other financial indicators. The system can combine multiple data points to identify inconsistencies and generate consolidated verification outcomes.',
    features: [
      'PAN-related information verification',
      'Tax information verification',
      'Other financial indicators',
      'Multiple data point combination',
      'Inconsistency identification',
      'Consolidated verification outcomes',
    ],
  },
  {
    slug: 'video-kyc-vcip-verification',
    name: 'Video KYC / VCIP Verification',
    headline: 'Digital Verification with Human Interaction',
    shortDescription: 'Remote verification through video-based identity and interaction workflows.',
    icon: Video,
    description:
      'BeEnsure supports remote verification through video-based identity and interaction workflows. Possible evidence includes customer information, verification evidence, supporting images, location information where required, and time-related information where required — creating a structured digital verification trail.',
    features: [
      'Video-based identity verification',
      'Customer information capture',
      'Verification evidence collection',
      'Supporting images',
      'Location information where required',
      'Time-related information where required',
      'Structured digital verification trail',
    ],
  },
  {
    slug: 'geo-tagged-verification',
    name: 'Geo-Tagged Verification',
    headline: 'Evidence with Location Context',
    shortDescription: 'Associate verification images and evidence with location and time for field-based processes.',
    icon: MapPin,
    description:
      'BeEnsure can associate verification images and evidence with location and time. This can support address verification, property verification, business verification, customer visits, and field-based processes.',
    features: [
      'Location-tagged evidence',
      'Time-stamped verification',
      'Address verification',
      'Property verification',
      'Business verification',
      'Customer visits and field-based processes',
    ],
  },
  {
    slug: 'fraud-risk-verification',
    name: 'Fraud & Risk Verification',
    headline: 'Identify Risk Before It Becomes Loss',
    shortDescription: 'Identify potential risk indicators through structured verification and technology-assisted analysis.',
    icon: ShieldAlert,
    description:
      'Risk indicators may originate from inaccurate information, manipulated documents, misrepresentation, and inconsistencies across multiple data points. BeEnsure helps identify potential risk indicators through structured verification, document checks, data comparison, field investigation, rule-based analysis, and technology-assisted analysis.',
    features: [
      'Structured verification',
      'Document checks',
      'Data comparison',
      'Field investigation',
      'Rule-based analysis',
      'Technology-assisted analysis',
    ],
  },
  {
    slug: 'property-title-verification',
    name: 'Property & Title Verification',
    headline: 'Know the Asset Before the Transaction',
    shortDescription: 'Property and title verification for lenders, investors, and businesses.',
    icon: Home,
    description:
      'BeEnsure provides property and title verification for lenders, investors, and businesses. Verification may include document review, ownership-related checks, property information verification, field investigation, and identification of potential discrepancies.',
    features: [
      'Document review',
      'Ownership-related checks',
      'Property information verification',
      'Field investigation',
      'Identification of potential discrepancies',
    ],
  },
];

export interface IndustryItem {
  name: string;
  icon: LucideIcon;
  description: string;
  support: string[];
}

export const INDUSTRIES: IndustryItem[] = [
  {
    name: 'Banking & Financial Services',
    icon: Banknote,
    description: 'BeEnsure supports banking and financial services with comprehensive verification and risk-management capabilities.',
    support: [
      'Customer verification',
      'Credit verification',
      'KYC',
      'Due diligence',
      'Fraud control',
      'Field investigation',
      'Risk management',
    ],
  },
  {
    name: 'Insurance',
    icon: Umbrella,
    description: 'BeEnsure supports the insurance sector with verification services tailored to claims and policy requirements.',
    support: [
      'Customer verification',
      'Claim verification',
      'Document verification',
      'Field verification',
    ],
  },
  {
    name: 'FinTech',
    icon: Smartphone,
    description: 'BeEnsure supports FinTech companies with digital-first verification and risk-management workflows.',
    support: [
      'Digital onboarding',
      'Verification APIs',
      'Risk-management workflows',
    ],
  },
  {
    name: 'Corporate & Enterprises',
    icon: Building2,
    description: 'BeEnsure supports corporate and enterprise organisations with comprehensive verification and risk solutions.',
    support: [
      'Employee verification',
      'Vendor verification',
      'Business due diligence',
      'Corporate risk requirements',
    ],
  },
  {
    name: 'Lending & Credit',
    icon: Landmark,
    description: 'BeEnsure supports lending and credit institutions with borrower and asset verification capabilities.',
    support: [
      'Borrower verification',
      'Business verification',
      'Document verification',
      'Financial information verification',
      'Asset verification',
    ],
  },
  {
    name: 'Human Resources',
    icon: Users,
    description: 'BeEnsure supports HR functions with employment verification and background verification workflows.',
    support: [
      'Employment verification',
      'Background verification',
      'Digital verification workflows',
    ],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const HOW_IT_WORKS: ProcessStep[] = [
  {
    number: '01',
    title: 'Requirement',
    description: "Understand the client's product, verification requirement, risk parameters and expected output.",
    icon: Search,
  },
  {
    number: '02',
    title: 'Case Initiation',
    description: 'Verification requests are created through the BeEnsure platform, API or defined client workflow.',
    icon: FileSearch,
  },
  {
    number: '03',
    title: 'Data Collection',
    description: 'Relevant information and supporting documents are collected from appropriate sources.',
    icon: Briefcase,
  },
  {
    number: '04',
    title: 'Verification',
    description: 'Information is verified through digital checks, APIs, document analysis, field investigation or applicable methods.',
    icon: UserCheck,
  },
  {
    number: '05',
    title: 'Validation',
    description: 'Collected information is compared and reviewed to identify discrepancies, exceptions or potential risk indicators.',
    icon: Fingerprint,
  },
  {
    number: '06',
    title: 'Intelligence',
    description: 'Relevant findings are consolidated into structured observations and verification outcomes.',
    icon: ShieldAlert,
  },
  {
    number: '07',
    title: 'Reporting',
    description: 'Final information is presented through client-specific reports, dashboards or APIs.',
    icon: CreditCard,
  },
  {
    number: '08',
    title: 'Decision',
    description: "Verified information becomes part of the client's decision-making process.",
    icon: CheckCircle2,
  },
];

export interface WhyBeEnsureItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const WHY_BEENSURE: WhyBeEnsureItem[] = [
  {
    number: '01',
    title: 'Technology-Enabled',
    description: 'We combine digital platforms, APIs, automation and structured workflows with verification expertise.',
    icon: Smartphone,
  },
  {
    number: '02',
    title: 'Designed Around Your Process',
    description: "Solutions can be configured according to the client's products, policies, verification requirements and reporting formats.",
    icon: Briefcase,
  },
  {
    number: '03',
    title: 'Data-Driven',
    description: 'We bring together relevant information points to provide a more comprehensive view of the subject being verified.',
    icon: Search,
  },
  {
    number: '04',
    title: 'Scalable',
    description: 'Technology and operational workflows are designed to support both individual cases and high-volume verification requirements.',
    icon: Building2,
  },
  {
    number: '05',
    title: 'Transparent',
    description: 'Structured workflows, evidence management, status tracking and reporting provide greater visibility throughout the verification lifecycle.',
    icon: FileSearch,
  },
  {
    number: '06',
    title: 'Human Expertise + Technology',
    description: 'Automation can improve speed and consistency, while experienced professionals handle investigations and situations requiring contextual assessment.',
    icon: Users,
  },
];

export interface TechnologyFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const TECH_FEATURES: TechnologyFeature[] = [
  { icon: CreditCard, title: 'API Integrations', desc: 'Connect verification services through API-based integrations.' },
  { icon: Smartphone, title: 'Automated Data Collection', desc: 'Automated collection of relevant information from appropriate sources.' },
  { icon: FileSearch, title: 'Document Processing', desc: 'Technology-enabled document processing and validation.' },
  { icon: Briefcase, title: 'Case Allocation', desc: 'Structured case allocation and workflow management.' },
  { icon: MapPin, title: 'Geo-Tagged Evidence', desc: 'Evidence associated with location and time context.' },
  { icon: CreditCard, title: 'Centralized Reporting', desc: 'Centralized reporting and dashboards for complete visibility.' },
];

export const VERIFICATION_LIFECYCLE = [
  'Request',
  'Verification',
  'Validation',
  'Analysis',
  'Report',
  'Decision',
];

export const APPROACH_STEPS = [
  { label: 'Information', desc: "Understand the client's requirement, risk framework and decision-making process." },
  { label: 'Verification', desc: 'Collect relevant information from appropriate sources and perform structured verification.' },
  { label: 'Intelligence', desc: 'Use technology-enabled workflows to organize, validate and process information with human expertise where required.' },
  { label: 'Decision', desc: 'Consolidate verified information into structured reports enabling clients to identify discrepancies and make better-informed decisions.' },
];

export interface CaseMgmtStep {
  label: string;
  desc: string;
}

export const CASE_MANAGEMENT_STEPS: CaseMgmtStep[] = [
  { label: 'Created', desc: 'Cases are initiated through the platform, API, or client workflow.' },
  { label: 'Assigned', desc: 'Cases are allocated to appropriate verification teams.' },
  { label: 'Tracked', desc: 'Status tracking provides visibility throughout the lifecycle.' },
  { label: 'Investigated', desc: 'Evidence is collected and verified through applicable methods.' },
  { label: 'Closed', desc: 'Cases are completed with structured outcomes and reports.' },
];

export interface InsightCategory {
  name: string;
}

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  { name: 'Risk Management' },
  { name: 'Verification' },
  { name: 'Financial Services' },
  { name: 'Fraud Prevention' },
  { name: 'Compliance' },
  { name: 'Industry Insights' },
];

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  isPlaceholder: boolean;
}

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'placeholder-1',
    title: 'The Role of Verification in Modern Risk Management',
    category: 'Risk Management',
    excerpt: 'How structured verification helps organizations identify risks before they become losses.',
    date: '2024',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    title: 'Why Identity Verification Matters for Digital Onboarding',
    category: 'Verification',
    excerpt: 'Understanding the importance of reliable identity verification in digital-first business processes.',
    date: '2024',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    title: 'Connecting Data Points for Better Due Diligence',
    category: 'Fraud Prevention',
    excerpt: 'How connecting multiple data points provides a more comprehensive view of risk.',
    date: '2024',
    isPlaceholder: true,
  },
];

export const CONTACT_OPTIONS = [
  'Business Enquiries',
  'Technology & API Integration',
  'Verification Services',
  'Partnership Enquiries',
  'Enterprise Solutions',
];

export const COMPANY = {
  name: 'BeEnsure',
  tagline: 'Verify with Confidence. Decide with Clarity.',
  positioning: 'From Verification to Decision Intelligence.',
  email: 'contact@beensure.com',
  phone: '',
  address: '',
  hours: '',
  sundayHours: '',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Technology', path: '/technology' },
  { label: 'Industries', path: '/industries' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

// Re-export for backward compatibility in forms
export const SERVICES = SOLUTIONS;

export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
}

export const JOB_OPENINGS: JobOpening[] = [];
