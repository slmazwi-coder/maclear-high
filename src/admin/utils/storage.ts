// Storage utility — localStorage wrapper for Kwa Komani Technical High School

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
    content: "Kwa Komani Technical High School is now accepting applications for the 2026 academic year. We invite all prospective technical and skilled learners to apply.",
    image: ""
  },
  {
    id: '2',
    title: "National Music Competition Success",
    date: "March 20, 2026",
    content: "Our music department has once again proven to be a force to be reckoned with, securing top honours in the regional championships.",
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
  address: '1874 Pelem Road, Mlungisi Township, Queenstown, 5320',
  postalAddress: 'P O Box 1159, Queenstown, 5320',
  phone: '0458382074',
  email: 'info@kwakomani.edu.za',
  monThu: '07:30 - 15:30',
  friday: '07:30 - 13:30',
  weekend: 'Closed',
};
export const getContact = () => getObject<ContactInfo>('admin_contact', defaultContact);
export const setContact = (info: ContactInfo) => setObject('admin_contact', info);

// About
const defaultAbout: AboutInfo = {
  historyParagraphs: [
    'Established in 1988, Kwa Komani Technical High School has been a cornerstone of technical education in Queenstown for over three decades. Our institution was founded with a clear vision: to provide high-quality skilled and technical training to the learners of Mlungisi and the greater Queenstown area.',
    'As a premier Technical High School, we offer a wide range of technical subjects designed to equip our learners with practical skills that meet the demands of a modern economy. From engineering and technology to skilled trades, we prepare our students for both higher education and direct entry into specialized industries.',
    'Kwa Komani is not just about technical skills; we are also a hub of cultural excellence. Our school is renowned for its national success in music competitions, fostering a holistic environment where technical prowess meets creative genius.',
  ],
  principalName: '[Principal Name]',
  principalTitle: 'School Principal',
  principalMessage: [
    'Welcome to Kwa Komani Technical High School (KHK). Since our founding in 1988, we have remained true to our mission of producing skilled, technically proficient, and well-rounded citizens.',
    'At Kwa Komani, we believe in the power of "Education for Empowerment." Our technical subjects provide the foundation for successful careers in engineering, construction, and technology. I invite you to explore our portal and learn more about our commitment to excellence.',
  ],
  deputyName: '[Deputy Name]',
  deputyTitle: 'Deputy Principal',
  establishedYear: '1988',
  schoolType: 'Technical High School',
};
export const getAbout = () => getObject<AboutInfo>('admin_about', defaultAbout);
export const setAbout = (info: AboutInfo) => setObject('admin_about', info);

// Policy
const defaultPolicy: PolicyInfo = {
  introduction: 'Kwa Komani Technical High School maintains a strictly disciplined environment to ensure safe and effective technical training.',
  sections: [
    {
      title: 'Workshop Safety',
      content: [
        'Learners must wear full safety gear (PPE) in all technical workshops.',
        'Strict adherence to instructor guidance is mandatory when operating machinery.',
        'No learner may enter a workshop without supervision.'
      ]
    },
    {
      title: 'Code of Conduct',
      content: [
        'Punctuality is essential for all academic and technical sessions.',
        'Respect for school property and technical equipment is paramount.',
        'Bullying and harassment are strictly prohibited.'
      ]
    }
  ],
  lastUpdated: 'March 2026'
};
export const getPolicy = () => getObject<PolicyInfo>('admin_policy', defaultPolicy);
export const setPolicy = (info: PolicyInfo) => setObject('admin_policy', info);

// Activities (Added Music focus as requested)
const defaultActivities: Activity[] = [
  { id: '1', name: 'Choral Music', category: 'Culture', description: 'Our award-winning choir is a national champion, known for complex harmonies and excellence in vocal performance.', image: '' },
  { id: '2', name: 'School Band', category: 'Culture', description: 'Developing instrumental talents and performing at key school and community events.', image: '' },
  { id: '3', name: 'Technical Skills Expo', category: 'Technical', description: 'An annual showcase of our learners technical projects and engineering designs.', image: '' },
];
export const getActivities = () => getItems<Activity>('admin_activities').length ? getItems<Activity>('admin_activities') : defaultActivities;
export const setActivities = (items: Activity[]) => setItems('admin_activities', items);

// Results by year
const defaultResults: Record<string, YearResults> = {
  "2025": {
    overall: 88.9,
    bachelor: 0,
    bachelorRate: 0,
    distinctions: 0,
    wrote: 0,
    subjects: [
      { subject: "Engineering Graphics & Design", rate: 100 },
      { subject: "Mechanical Technology", rate: 100 },
      { subject: "Electrical Technology", rate: 100 },
      { subject: "Civil Technology", rate: 100 },
      { subject: "Technical Mathematics", rate: 100 },
      { subject: "Technical Sciences", rate: 100 },
    ]
  }
};
export const getResultsByYear = (year: string) => getObject<YearResults | null>(`admin_results_${year}`, defaultResults[year] || null);
export const setResultsByYear = (year: string, data: YearResults) => setObject(`admin_results_${year}`, data);

// Auth
export const login = (password: string): boolean => {
  if (password === 'komani 2026') {
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
