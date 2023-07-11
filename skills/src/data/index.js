const TITLE_MAP = {
  LANGUAGE: "LANGUAGE",
  FRONTEND_SKILLS: "FRONTEND",
  UNIT_TESTING_LIBRARY: "UNIT TESTING LIBRARY",
  BACKEND_SKILLS: "BACKEND",
  DEPLOYMENT_TOOLS: "DEPLOYMENT TOOLS",
  DATABASE_SKILLS: "DATABASE",
};

const LANGUAGE = [
  { title: "JavaScript", version: "ES6", totalYears: "11", totalMonths: "0" },
  { title: "Java", version: "core basics", totalYears: "1", totalMonths: "0" },
  { title: "C#", version: "-", totalYears: "2", totalMonths: "0" },
];
const FRONTEND_SKILLS = [
  { title: "JavaScript", version: "ES6", totalYears: "11", totalMonths: "0" },
  { title: "React", version: "15 to 18", totalYears: "5", totalMonths: "0" },
  { title: "HTML", version: "5", totalYears: "11", totalMonths: "0" },
  { title: "CSS", version: "3", totalYears: "11", totalMonths: "0" },
  { title: "AngularJS", version: "1.5", totalYears: "2", totalMonths: "0" },
  { title: "Redux", version: "4", totalYears: "5", totalMonths: "0" },
  { title: "Redux-thunk", version: "4", totalYears: "5", totalMonths: "0" },
  { title: "Typescript", version: "3", totalYears: "2", totalMonths: "0" },
];
const UNIT_TESTING_LIBRARY = [
  { title: "Jest", version: "27", totalYears: "5", totalMonths: "0" },
  { title: "Enzyme", version: "-", totalYears: "4", totalMonths: "0" },
  {
    title: "React-testing-library ",
    version: "-",
    totalYears: "4",
    totalMonths: "0",
  },
];
const BACKEND_SKILLS = [
  { title: "NodeJS", version: "14", totalYears: "4", totalMonths: "0" },
  { title: "NestJS", version: "-", totalYears: "1", totalMonths: "0" },
  { title: "SpringBoot", version: "-", totalYears: "1", totalMonths: "0", remarks: "Learner", },
];
const DATABASE_SKILLS = [
  { title: "MSSQL", version: "2011", totalYears: "2", totalMonths: "0" },
  { title: "Mongo DB", version: "", totalYears: "2", totalMonths: "0" },
];
const DEPLOYMENT_TOOLS = [
  {
    title: "Github Actions",
    version: "-",
    totalYears: "",
    totalMonths: "",
    remarks: "Learner",
  },
  {
    title: "Docker",
    version: "-",
    totalYears: "",
    totalMonths: "0",
    remarks: "Learner",
  },
  {
    title: "AWS",
    version: "-",
    totalYears: "",
    totalMonths: "0",
    remarks: "Learner",
  },
];

export {
  TITLE_MAP,
  LANGUAGE,
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  DEPLOYMENT_TOOLS,
  UNIT_TESTING_LIBRARY,
  DATABASE_SKILLS
};
