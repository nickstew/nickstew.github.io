import { arrayOf, shape, string, } from "prop-types";

export const Location = {
  // To add multiple address lines, use \n. For example, 1234 Glücklichkeit Straße\nHinterhaus 5. Etage li.
  address: string.isRequired,

  // Current address' postal code, format accoridng to your country
  postalCode: string.isRequired,

  // The address' city
  city: string.isRequired,

  // code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN
  countryCode: string.isRequired,

  // The general region where you live. Can be a US state, or a province, for instance.
  region: string.isRequired,
};

export const Profile = {
  // e.g. Facebook or Twitter
  network: string.isRequired,

  // e.g. neutralthoughts
  username: string.isRequired,

  // e.g. http://twitter.example.com/neutralthoughts
  url: string.isRequired,
};

export const Basic = {
  // Your name
  name: string.isRequired,

  // Current description, e.g. Web Developer
  label: string,

  // URL (as per RFC 3986) to a image in JPEG or PNG format
  image: string,

  // e.g. thomas@gmail.com
  email: string,

  // Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923
  phone: string,

  // URL (as per RFC 3986) to your website, e.g. personal homepage
  url: string,

  // Write a short 2-3 sentence biography about yourself
  summary: string,

  // Your current location information, sensitive
  location: Location,

  // Specify any number of social networks that you participate in
  profiles: arrayOf(Profile),
};

export const Work = {
  // e.g. Facebook
  name: string.isRequired,

  // e.g. Menlo Park, CA
  location: string,

  // e.g. Social Media Company
  description: string,

  // e.g. Software Engineer
  position: string,

  // e.g. http://facebook.example.com
  url: string,

  // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
  startDate: string,

  // e.g. 2012-06-29
  endDate: string,

  // Give an overview of your responsibilities at the company
  summary: string,

  // Specify multiple accomplishments, e.g. Increased profits by 20% from 2011-2012 through viral advertising
  highlights: arrayOf(string),
};

export const Volunteer = {
  // e.g. Facebook
  organization: string.isRequired,

  // e.g. Software Engineer
  position: string,

  // e.g. http://facebook.example.com
  url: string,

  // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
  startDate: string,

  // e.g. 2012-06-29
  endDate: string,

  // Give an overview of your responsibilities at the company
  summary: string,

  // Specify multiple accomplishments, e.g. Increased profits by 20% from 2011-2012 through viral advertising
  highlights: arrayOf(string),
};

export const Education = {
  // e.g. Massachusetts Institute of Technology
  institution: string.isRequired,

  // e.g. Arts
  area: string,

  // e.g. Bachelor
  studyType: string,

  // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
  startDate: string,

  // e.g. 2012-06-29
  endDate: string,

  // grade point average, e.g. 3.67/4.0
  gpa: string,

  // List notable courses/subjects, e.g. H1302 - Introduction to American history
  courses: arrayOf(string),
};

export const Award = {
  // e.g. One of the 100 greatest minds of the century
  title: string.isRequired,

  // e.g. 1989-06-12
  date: string,

  // e.g. Time Magazine
  awarder: string,

  // e.g. Received for my work with Quantum Physics
  summary: string,
};

export const Publication = {
  // e.g. The World Wide Web
  name: string.isRequired,

  // e.g. IEEE, Computer Magazine
  publisher: string,

  // e.g. 1990-08-01
  releaseDate: string,

  // e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html
  url: string,

  // Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.
  summary: string,
};

export const Skill = {
  // e.g. Web Development
  name: string.isRequired,

  // "e.g. Master
  level: string,

  // List some keywords pertaining to this skill, e.g. HTML
  keywords: arrayOf(string),
};

export const Language = {
  // e.g. English, Spanish
  language: string.isRequired,

  // e.g. Fluent, Beginner
  fluency: string,
};

export const Interest = {
  // e.g. Philosophy
  name: string.isRequired,

  // List some keywords pertaining to this interest, e.g. Friedrich Nietzsche
  keywords: arrayOf(string),
};

export const Reference = {
  // e.g. Timothy Cook
  name: string.isRequired,

  // e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations
  // when it came to doing nothing.
  reference: string,
};

export const Project = {
  // e.g. The World Wide Web
  name: string.isRequired,

  // Short summary of project. e.g. Collated works of 2017.
  description: string,

  // Specify multiple features, e.g. Directs you close but not quite there
  highlights: arrayOf(string),

  // Specify special elements involved, e.g. AngularJS
  keywords: arrayOf(string),

  // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
  startDate: string,

  // e.g. 2012-06-29
  endDate: string,

  // e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html
  url: string,

  // Specify your role on this project or in company, e.g. Team Lead, Speaker, Writer
  roles: arrayOf(string),

  // Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'
  entity: string,

  // e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'
  type: string,
};

export const Resume = {
  // List your basic profile information so employers can reach you.
  basic: Basic,

  // List your relevant work experiences.
  work: arrayOf(Work),

  // List your relevant Volunteer experiences.
  volunteer: arrayOf(Volunteer),

  // List your completed or in-progress education
  education: arrayOf(Education),

  // Specify any awards you have received throughout your professional career
  awards: arrayOf(Award),

  // Specify your publications through your career
  publications: arrayOf(Publication),

  // List out your professional skill-set
  skills: arrayOf(Skill),

  // List any other languages you speak
  languages: arrayOf(Language),

  // List any interest and hobbies
  interests: arrayOf(Interest),

  // List references you have received
  references: arrayOf(Reference),

  // Specify career projects
  projects: arrayOf(Project),
};

export default Resume;