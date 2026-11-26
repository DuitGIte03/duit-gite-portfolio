/**
 * Every fact on this site comes from Duit_Gite_Resume.pdf.
 * Edit here and the whole site follows. Don't add anything the resume doesn't support.
 */

export const profile = {
  fullName: 'Duit Sanjay Gite',
  name: 'Duit Gite',
first: 'Duit',
  email: 'duitgite29@gmail.com',
  location: 'Wadala, Mumbai, India',
  timezone: 'Asia/Kolkata',
  links: {
    linkedin: 'https://www.linkedin.com/in/duit-gite-a01597343/',
    github: '',
  },
  resume: '/assets/Duit_Gite_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    width: 1100,
    height: 1034,
    alt: 'Portrait of Duit Gite',
  },
  /** Rotating hero designations — each one is backed by the resume. */
  roles: ['Junior Accountant', 'Accounting & Finance Professional', 'Aspiring Financial Analyst'],
availability: 'Growing in Accounting & Finance',
interests: ['Financial Accounting', 'GST & TDS', 'Bank Reconciliation', 'Financial Reporting'],
};

export const stats = [
  { value: '9.30', label: 'M.Com (Accounting) · CGPA' },
  { value: '1 year', label: 'Industry Experience' },
  { value: 'SMARTe', label: 'Junior Accounts Executive' },
  { value: 'Tools', label: 'Tally Prime · n8n · Excel · Word · PowerPoint · Outlook' },
];

export const education = [
  {
    school: 'University of Mumbai',
    place: 'Mumbai',
    degree: 'Bachelor of Commerce (B.Com)',
    period: 'Aug 2021 - Jun 2024',
    score: 'CGPA 6.76 / 10',
  },
  {
    school: 'Guru Nanak College of Arts, Science and Commerce (Autonomous)',
    place: 'G.T. B. Nagar, Mumbai',
    degree: 'Master of Commerce (M.Com)',
    period: 'July 2024 — Jun 2026',
    score: 'CGPA 9.30 / 10',
  },
];

export type SkillCategory = { id: string; index: string; title: string; blurb: string; skills: string[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'accounting',
    index: '01',
    title: 'Accounting',
    blurb: 'Managing financial records, reconciliations, and day-to-day accounting operations.',
    skills: ['Journal Entries', 'Ledger Management', 'Bank Reconciliation', 'Accounts Payable', 'Accounts Receivable'],
  },
  {
    id: 'taxation',
    index: '02',
    title: 'Taxation',
    blurb: 'Handling tax-related accounting work and compliance with applicable regulations.',
    skills: ['GST', 'TDS', 'GST Returns', 'TDS Returns', 'Tax Compliance'],
  },
  {
    id: 'finance',
    index: '03',
    title: 'Financial Reporting',
    blurb: 'Preparing financial reports and maintaining accurate financial data for business decisions.',
    skills: ['Financial Statements', 'MIS Reporting', 'Expense Analysis', 'Financial Data'],
  },
  {
    id: 'tools',
    index: '04',
    title: 'Tools & Software',
    blurb: 'Using accounting software and spreadsheets for efficient financial management.',
    skills: ['Tally ERP 9', 'Tally Prime', 'Microsoft Excel', 'MS Office'],
  },
  {
    id: 'ai',
    index: '05',
    title: 'AI & Automation',
    blurb: 'Exploring generative AI, prompt engineering, and workflow automation to improve productivity and streamline business processes.',
    skills: [
      'Generative AI',
      'AI Prompt Engineering',
      'AI Tools',
      'Workflow Automation',
      'Business Process Automation',
      'n8n',
    ],
  },
];

export const fundamentals = ['Accounting Principles', 'GST & TDS', 'Bank Reconciliation', 'Accounts Payable & Receivable', 'Financial Reporting', 'MIS Reporting', 'Excel & Spreadsheet Management', 'Tally ERP 9 & Tally Prime', 'AI & Automation Tools', 'Workflow Optimization'];

export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  kind: string;
  summary: string;
  stack: string[];
  contribution: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  motif: 'scan' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'cms-automation',
    index: '01',
    title: 'CMS Automation',
    year: 'Coming soon',
    kind: 'In progress',
    summary: 'Coming soon',
    stack: [],
    contribution: [],
    features: [],
    metrics: [{ label: 'Status', value: 'Coming soon' }],
    motif: 'flow',
  },
  {
    id: 'excel-dashboard',
    index: '02',
    title: 'Excel Dashboard',
    year: 'Coming soon',
    kind: 'In progress',
    summary: 'Coming soon',
    stack: [],
    contribution: [],
    features: [],
    metrics: [{ label: 'Status', value: 'Coming soon' }],
    motif: 'scan',
  },
  {
    id: 'gstr-2b-reconciliation',
    index: '03',
    title: 'GSTR-2B Reconciliation',
    year: 'Coming soon',
    kind: 'In progress',
    summary: 'Coming soon',
    stack: [],
    contribution: [],
    features: [],
    metrics: [{ label: 'Status', value: 'Coming soon' }],
    motif: 'tenants',
  },
];
  
export type TimelineItem = { period: string; title: string; org: string; place?: string; kind: string; points: string[] };
function getSMARTeMonthsCompleted() {
  const startYear = 2026;
  const startMonth = 1; // February; JavaScript counts January as 0
  const now = new Date();

  const months =
    (now.getFullYear() - startYear) * 12 +
    (now.getMonth() - startMonth) +
    1;

  return `${months} ${months === 1 ? 'month' : 'months'} completed`;
}
export const timeline: TimelineItem[] = [
  {
    period: `Feb 2026 — Present · ${getSMARTeMonthsCompleted()}`,
    title: 'Junior Accounts Executive',
    org: 'SMARTe',
    kind: 'Work',
    points: ['Working in accounting and financial operations.'],
  },
  {
    period: 'Jul 2024 — Jun 2026',
    title: 'Master of Commerce (M.Com), Accounting',
    org: 'Guru Nanak College of Arts, Science and Commerce (Autonomous)',
    place: 'Mumbai',
    kind: 'Education',
    points: ['CGPA 9.30 / 10'],
  },
  {
    period: 'Aug 2021 — Jun 2024',
    title: 'Bachelor of Commerce (B.Com)',
    org: 'University of Mumbai',
    place: 'Mumbai',
    kind: 'Education',
    points: [],
  },
];

export type Recognition = { title: string; org: string; detail: string; kind: string; link?: string };

export const recognitions: Recognition[] = [
  {
    title: 'Tech Fellow',
    org: 'AlgoUniversity',
    kind: 'Fellowship',
    detail: 'Selected through competitive national selection — advanced DSA, algorithm optimization, and competitive coding.',
  },
  {
    title: 'Semi-Finalist',
    org: 'Flipkart GRiD 7.0',
    kind: 'Hackathon',
    detail: 'Competed among top national engineering talent.',
    link: 'https://drive.google.com/file/d/16pXA2hssyJqlYMr27wfi6U4bjKDLvh9f/view?usp=drive_link',
  },
  {
    title: 'AIML Branch Topper',
    org: 'Aditya Engineering College',
    kind: 'Academic',
    detail: '9.24 SGPA for the semester.',
  },
  {
    title: '850+ problems solved',
    org: 'LeetCode · GFG · CodeChef',
    kind: 'Competitive coding',
    detail: 'LeetCode 350+ (peak rating 1442) · GFG 300+ (rating 1436) · CodeChef 200+.',
  },
  {
    title: '5-star badges',
    org: 'HackerRank',
    kind: 'Competitive coding',
    detail: 'Five stars in C, Python, Java, and SQL.',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'G-TEC Jain Keerti Education',
    name: 'Advanced Office Automation & Financial Accounting (Tally Prime)',
    link: 'https://drive.google.com/file/d/1ugZ3obgvAH-4OVNNFdLM0cDOFKz-X2Lx/view?usp=sharing',
  },
  {
    issuer: 'House Of Edtech',
    name: 'Certified No-Code Finance Automation Specialist',
    link: 'https://drive.google.com/file/d/1sKlbWjsxMUWCON9UStQr9HExcye-Snb9/view?usp=sharing',
  },
  {
    issuer: 'House Of Edtech',
    name: 'Foundations in AI Productivity and Agentic Systems',
    link: 'https://drive.google.com/file/d/1FNnUajse38MqtboF3SZtgOWVsTSo0JA4/view?usp=sharing',
  },
  {
    issuer: 'Be10x',
    name: 'AI Tools & Claude Workshop',
    link: 'https://drive.google.com/file/d/1y1P7hr8VZhRbNY-lppL1SvLaoqPo92yg/view?usp=sharing',
  },
];
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

/** Which projects use a given skill — used by the Expertise section. */
export function projectsUsing(skill: string): string[] {
  const s = skill.toLowerCase().replace(/\.js$/, '');
  return projects
    .filter((p) => p.stack.some((t) => t.toLowerCase().replace(/\.js$/, '') === s || (s === 'llms' && t === 'LLM') || (s === 'rest apis' && t === 'REST API') || (s === 'docker' && t.startsWith('Docker'))))
    .map((p) => p.title);
}
