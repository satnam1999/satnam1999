// Copy for the editorial home page. Work history, education and awards are
// read from ./data so there is still one place to update them.
import { certificationsData, educationData, experienceData } from "./data";

const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;
const yearsSince = (iso: string) => Math.floor((Date.now() - new Date(iso).getTime()) / YEAR_MS);

/** Full years since the first data role (ZS, July 2021). */
export const yearsInData = yearsSince("2021-07-01");
/** Badminton since 2015 — rounded down so the "+" is always true. */
export const yearsOnCourt = new Date().getFullYear() - 2015 - 1;

export const links = {
  email: "satnampahwa85@gmail.com",
  linkedin: "https://www.linkedin.com/in/satnam1999/",
  github: "https://github.com/satnam1999",
};

export const opening = {
  eyebrow: "POV: you're about to meet someone",
  firstName: "Satnam Singh",
  lastName: "Pahwa",
  role: "Data Engineer",
  company: "JP Morgan Chase",
  badges: [`${yearsInData}+ years in data`, "Product-minded"],
  tagline: ["Pipelines by day.", "Side quest: the perfect", "backhand smash."],
  sideLabel: "Off the clock",
  sideValue: "Badminton, mostly.",
  quote: "I turn messy data into pipelines people can trust — and insights a business can act on.",
  signature: ["Satnam", "Data Engineer"],
};

export type OrbitItem = { icon: string; label: string; value: string };

export const orbit: { left: OrbitItem[]; right: OrbitItem[] } = {
  left: [
    { icon: "feather", label: "Hobby", value: "Badminton, since 2015" },
    { icon: "workflow", label: "Craft", value: "Data pipelines & ETL" },
    { icon: "cloud", label: "Cloud", value: "AWS Glue · EMR · Redshift" },
    { icon: "cap", label: "Studied", value: "B.Tech CS at NMIMS" },
  ],
  right: [
    { icon: "briefcase", label: "Work", value: "Software Engineer II, JP Morgan Chase" },
    { icon: "terminal", label: "Code", value: "Python & SQL" },
    { icon: "database", label: "Big data", value: "Spark · Hive · Hadoop" },
    { icon: "chart", label: "Insights", value: "Power BI · Tableau" },
  ],
};

export const about = {
  greeting: "Satnam",
  paragraphs: [
    "Data and product enthusiast — self-motivated and always learning the skills it takes to harness data and solve real business problems.",
    "I work with AWS, SQL and Python, and with big data tools like Hadoop, Hive and Spark, turning complex data challenges into insights people can act on.",
  ],
  facts: [
    { label: "Role", value: experienceData[0].title },
    { label: "Company", value: experienceData[0].company },
    { label: "Experience", value: `${yearsInData}+ years` },
    { label: "Focus", value: "Data engineering" },
    { label: "Degree", value: "B.Tech, Computer Science" },
    { label: "College", value: `NMIMS, ${educationData.period.replace(" - ", "–")}` },
    { label: "Core stack", value: "AWS · Python · SQL" },
    { label: "Big data", value: "Spark · Hive · Hadoop" },
    { label: "Weekends", value: "Badminton" },
  ],
};

export type Stat =
  | { kind: "count"; value: number; suffix?: string; label: string; note: string }
  | { kind: "heart"; label: string; note: string };

export const stats: Stat[] = [
  { kind: "count", value: yearsInData, suffix: "+", label: "Years in data", note: "JP Morgan · ZS" },
  { kind: "count", value: experienceData.length, label: "Roles", note: "Across two companies" },
  { kind: "count", value: 2, label: "Awards at ZS", note: "Rising Star · Outstanding Contribution" },
  { kind: "count", value: yearsOnCourt, suffix: "+", label: "Years on court", note: "Badminton since 2015" },
  { kind: "count", value: 1, label: "Certification", note: "Python, from Microsoft" },
  { kind: "heart", label: "Favourite shot", note: "Backhand smash" },
];

/** "October 2024 - Present" → "Oct 2024 – Present" */
export const shortPeriod = (period: string) =>
  period
    .replace(" - ", " – ")
    .replace(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/g, (m) =>
      m.slice(0, 3),
    );

export const career = {
  current: experienceData[0],
  earlier: experienceData.slice(1),
};

export const education = educationData;
export const awards = certificationsData;

export const offTheClock = {
  paragraphs: [
    "When I'm not working with data, you'll find me on the badminton court. I've played since 2015, and it's still the best way I know to stay active and keep work and life in balance.",
    "I love how it mixes quick reflexes, strategy and endurance — a lot like solving a hard data engineering problem.",
  ],
  favouriteShot: "Backhand smash",
  playingSince: "2015",
  // Guinness World Records, set by Satwiksairaj Rankireddy in April 2023.
  fact: {
    speed: 565,
    text: "The fastest badminton hit on record is 565 km/h — set by India's Satwiksairaj Rankireddy in 2023, a Guinness World Record.",
  },
};

export const contact = {
  heading: ["Let's", "talk."],
  line: "Questions, ideas, or a game of badminton — my inbox is open.",
};
