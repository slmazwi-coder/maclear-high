// Storage utility — localStorage wrapper for Maclear High School

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  grade: string;
  subject: string;
  fileData: string;
  fileName: string;
  uploadDate: string;
}

export interface Application {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  grade: string;
  gender: string;
  address: string;
  previousSchool: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  guardianId: string;
  relationship: string;
  medicalConditions: string;
  admissionFeeReceipt: string;
  guardianIdDoc: string;
  reportCard: string;
  birthCertificate: string;
  transferLetter: string;
  status: 'Pending' | 'Reviewed' | 'Accepted' | 'Rejected';
  submittedDate: string;
}

export interface ContactInfo {
  address: string;
  postalAddress: string;
  phone: string;
  email: string;
  monThu: string;
  friday: string;
  weekend: string;
}

export interface AboutInfo {
  historyParagraphs: string[];
  principalName: string;
  principalTitle: string;
  principalMessage: string[];
  deputyName: string;
  deputyTitle: string;
  establishedYear: string;
  schoolType: string;
}

export interface PolicyInfo {
  introduction: string;
  sections: {
    title: string;
    content: string[];
  }[];
  lastUpdated: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}

export interface AchieverEntry {
  id: string;
  name: string;
  achievement: string;
  image: string;
}

export interface HallOfFameEntry {
  id: string;
  name: string;
  title: string;
  year: string;
  desc: string;
  image: string;
}

export interface YearResults {
  overall: number;
  bachelor: number;
  bachelorRate: number;
  distinctions: number;
  wrote: number;
  subjects: { subject: string; rate: number }[];
}

// Sports interfaces (Retaining but focusing on Music per user request)
export interface SportCode {
  id: string;
  name: string;
  description: string;
  image: string;
  featured: boolean;
}

export interface SportHallOfFameEntry {
  id: string;
  sport: string;
  name: string;
  achievement: string;
  year: string;
  image: string;
}

export interface WeekendResult {
  id: string;
  sport: string;
  team: string;
  opponent: string;
  scoreHome: string;
  scoreAway: string;
  result: 'Win' | 'Loss' | 'Draw';
  date: string;
  venue: string;
}

// Payment interfaces
export interface Invoice {
  id: string;
  studentName: string;
  studentGrade: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  amount: number;
  description: string;
  dueDate: string;
  createdDate: string;
  status: 'Pending' | 'Paid' | 'Overdue';
  popFile: string;
  popDate: string;
}

// Generic CRUD helpers
function getItems<T>(key: string): T[] {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function setItems<T>(key: string, items: T[]): void {
  localStorage.setItem(key, JSON.stringify(items));
}

function getObject<T>(key: string, fallback: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function setObject<T>(key: string, obj: T): void {
  localStorage.setItem(key, JSON.stringify(obj));
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// News
const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: "2026 Admissions Open",
    date: "March 23, 2026",
    content: "Maclear High School is now accepting applications for the 2026 academic year. We invite all prospective learners to apply and join our community of excellence.",
    image: ""
  },
  {
    id: '2',
    title: "Regional Choral Success",
    date: "March 20, 2026",
    content: "Our school choir has once again secured top honors in the regional championships, continuing our tradition of vocal excellence.",
    image: ""
  }
];
export const getNews = () => getItems<NewsItem>('admin_news').length ? getItems<NewsItem>('admin_news') : defaultNews;
export const setNews = (items: NewsItem[]) => setItems('admin_news', items);

// Documents
export const getDocuments = () => getItems<DocumentItem>('admin_documents');
export const setDocuments = (items: DocumentItem[]) => setItems('admin_documents', items);

// Applications
export const getApplications = () => getItems<Application>('admin_applications');
export const setApplications = (items: Application[]) => setItems('admin_applications', items);

// Contact
const defaultContact: ContactInfo = {
  address: 'Murray Street, Maclear, 5480, Eastern Cape',
  postalAddress: 'P.O. Box 29, Maclear, 5480',
  phone: '045 932 1032',
  email: 'maclearhigh@telkomsa.net',
  monThu: '07:30 - 15:30',
  friday: '07:30 - 13:30',
  weekend: 'Closed',
};
export const getContact = () => getObject<ContactInfo>('admin_contact', defaultContact);
export const setContact = (info: ContactInfo) => setObject('admin_contact', info);

// About
const defaultAbout: AboutInfo = {
  historyParagraphs: [
    'Maclear High School has been a cornerstone of education in the Joe Gqabi District for decades. Our institution is dedicated to providing high-quality academic and holistic training to the learners of Maclear and surrounding areas.',
    'We offer a wide range of academic subjects designed to equip our learners with the knowledge and skills needed for higher education and successful careers. Our commitment to excellence is reflected in our consistent results and the achievements of our alumni.',
    'Maclear High is also a hub of cultural and sporting excellence. Our school is renowned for its success in choral music competitions and its passionate sport participation, fostering an environment where every talent is nurtured.',
  ],
  principalName: '[Principal Name]',
  principalTitle: 'School Principal',
  principalMessage: [
    'Welcome to Maclear High School (MHS). Our mission is to produce well-rounded, responsible, and excellently educated citizens who are ready to contribute to society.',
    'At Maclear High, we believe in "Aiming High" (Mik Hoog). Our dedicated staff and rich extracurricular program provide the foundation for our students to achieve their full potential. I invite you to explore our portal and share in our journey of excellence.',
  ],
  deputyName: '[Deputy Name]',
  deputyTitle: 'Deputy Principal',
  establishedYear: '1980',
  schoolType: 'High School',
};
export const getAbout = () => getObject<AboutInfo>('admin_about', defaultAbout);
export const setAbout = (info: AboutInfo) => setObject('admin_about', info);

// Policy
const defaultPolicy: PolicyInfo = {
  introduction: 'Maclear High School maintain a disciplined environment to ensure safe and effective learning for all students.',
  sections: [
    {
      title: 'Code of Conduct',
      content: [
        'Punctuality is essential for all academic and extracurricular sessions.',
        'Respect for school property and the environment is paramount.',
        'Full school uniform must be worn with pride at all times.',
        'Bullying and harassment are strictly prohibited.'
      ]
    },
    {
      title: 'Academic Integrity',
      content: [
        'Students are expected to maintain high standards of honesty in all assessments.',
        'Regular attendance and active participation in class are key to success.',
        'Homework and projects must be completed on time.'
      ]
    }
  ],
  lastUpdated: 'March 2026'
};
export const getPolicy = () => getObject<PolicyInfo>('admin_policy', defaultPolicy);
export const setPolicy = (info: PolicyInfo) => setObject('admin_policy', info);

// Activities
const defaultActivities: Activity[] = [
  { id: '1', name: 'Choral Music', category: 'Culture', description: 'Our award-winning choir is a regional champion, known for excellence in vocal performance and complex harmonies.', image: '' },
  { id: '2', name: 'Rugby', category: 'Sports', description: 'A dominant sport at Maclear High, with teams competing at provincial levels with passion and pride.', image: '' },
  { id: '3', name: 'Netball', category: 'Sports', description: 'Our netball teams show exceptional skill and dedication, achieving great results in local leagues.', image: '' },
];
export const getActivities = () => getItems<Activity>('admin_activities').length ? getItems<Activity>('admin_activities') : defaultActivities;
export const setActivities = (items: Activity[]) => setItems('admin_activities', items);

// Results by year
const defaultResults: Record<string, YearResults> = {
  "2025": {
    overall: 85.5,
    bachelor: 0,
    bachelorRate: 0,
    distinctions: 0,
    wrote: 0,
    subjects: [
      { subject: "Mathematics", rate: 90 },
      { subject: "Physical Sciences", rate: 85 },
      { subject: "English HL", rate: 95 },
      { subject: "Life Sciences", rate: 88 },
      { subject: "Geography", rate: 92 },
      { subject: "Accounting", rate: 84 },
    ]
  }
};
export const getResultsByYear = (year: string) => getObject<YearResults | null>(`admin_results_${year}`, defaultResults[year] || null);
export const setResultsByYear = (year: string, data: YearResults) => setObject(`admin_results_${year}`, data);

// Auth
export const login = (password: string): boolean => {
  if (password === 'maclear 2026') {
    localStorage.setItem('admin_auth', 'true');
    return true;
  }
  return false;
};
export const logout = () => localStorage.removeItem('admin_auth');
export const isAuthenticated = () => localStorage.getItem('admin_auth') === 'true';

// Retaining existing getters for components that rely on them
export const getInvoices = () => getItems<Invoice>('admin_invoices');
export const setInvoices = (items: Invoice[]) => setItems('admin_invoices', items);
export const getSportCodes = () => getItems<SportCode>('admin_sport_codes');
export const setSportCodes = (items: SportCode[]) => setItems('admin_sport_codes', items);
export const getWeekendResults = () => getItems<WeekendResult>('admin_weekend_results');
export const setWeekendResults = (items: WeekendResult[]) => setItems('admin_weekend_results', items);
export const getSportHallOfFame = () => getItems<SportHallOfFameEntry>('admin_sport_hall_of_fame');
export const setSportHallOfFame = (items: SportHallOfFameEntry[]) => setItems('admin_sport_hall_of_fame', items);
export const getHallOfFame = () => getItems<HallOfFameEntry>('admin_hall_of_fame');
export const setHallOfFame = (items: HallOfFameEntry[]) => setItems('admin_hall_of_fame', items);
