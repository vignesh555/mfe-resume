const TITLE_MAP = {
  LANGUAGE: "LANGUAGE",
  FRONTEND_SKILLS: "FRONTEND",
  UNIT_TESTING_LIBRARY: "UNIT TESTING LIBRARY",
  BACKEND_SKILLS: "BACKEND",
  DEPLOYMENT_TOOLS: "DEPLOYMENT TOOLS",
  DATABASE_SKILLS: "DATABASE",
  KEY_SKILLS: "Key Skills",
};

const KEY_SKILLS = [
  { title: "JavaScript", version: "ES6", totalYears: "11", totalMonths: "0", icon: "http://localhost:8084/static/images/js.png" },
  { title: "React", version: "15 to 18", totalYears: "5", totalMonths: "0" , icon: "http://localhost:8084/static/images/react.png"},
  { title: "Redux", version: "4", totalYears: "5", totalMonths: "0", icon: "http://localhost:8084/static/images/redux.png" },
  { title: "NodeJS", version: "14", totalYears: "4", totalMonths: "0", icon: "http://localhost:8084/static/images/nodejs.png" },
  { title: "Material UI", version: "4", totalYears: "5", totalMonths: "0", icon: "http://localhost:8084/static/images/material-ui.png" },
  { title: "HTML", version: "5", totalYears: "11", totalMonths: "0", icon: "http://localhost:8084/static/images/html5.png" },
  { title: "CSS", version: "3", totalYears: "11", totalMonths: "0", icon: "http://localhost:8084/static/images/css.png" },
  { title: "Jest", version: "27", totalYears: "5", totalMonths: "0", icon: "http://localhost:8084/static/images/jest.png" },
];

const LANGUAGE = [
  { title: "JavaScript", version: "ES6", totalYears: "11", totalMonths: "0", icon: "http://localhost:8084/static/images/js.png" },
  { title: "Java", version: "core basics", totalYears: "1", totalMonths: "0", icon: "http://localhost:8084/static/images/java.png" },
  { title: "C#", version: "-", totalYears: "2", totalMonths: "0", icon: "http://localhost:8084/static/images/csharp.png" },
];
const FRONTEND_SKILLS = [
  { title: "JavaScript", version: "ES6", totalYears: "11", totalMonths: "0", icon: "http://localhost:8084/static/images/js.png" },
  { title: "React", version: "15 to 18", totalYears: "5", totalMonths: "0", icon: "http://localhost:8084/static/images/react.png"},
  { title: "HTML", version: "5", totalYears: "11", totalMonths: "0", icon: "http://localhost:8084/static/images/html5.png" },
  { title: "CSS", version: "3", totalYears: "11", totalMonths: "0", icon: "http://localhost:8084/static/images/css.png" },
  { title: "AngularJS", version: "1.5", totalYears: "2", totalMonths: "0", icon: "http://localhost:8084/static/images/js.png" },
  { title: "Redux", version: "4", totalYears: "5", totalMonths: "0", icon: "http://localhost:8084/static/images/redux.png" },
  { title: "Redux-thunk", version: "4", totalYears: "5", totalMonths: "0", icon: "http://localhost:8084/static/images/redux.png" },
  { title: "Typescript", version: "3", totalYears: "2", totalMonths: "0", icon: "http://localhost:8084/static/images/typescript.png" },
];
const UNIT_TESTING_LIBRARY = [
  { title: "Jest", version: "27", totalYears: "5", totalMonths: "0", icon: "http://localhost:8084/static/images/jest.png" },
  { title: "Enzyme", version: "-", totalYears: "4", totalMonths: "0", icon: "http://localhost:8084/static/images/enzyme.png" },
  {
    title: "React-testing-library",
    version: "-",
    totalYears: "4",
    totalMonths: "0",
    icon: "http://localhost:8084/static/images/reactt.png"
  },
];
const BACKEND_SKILLS = [
  { title: "NodeJS", version: "14", totalYears: "4", totalMonths: "0", icon: "http://localhost:8084/static/images/nodejs.png" },
  { title: "NestJS", version: "-", totalYears: "1", totalMonths: "0", icon: "http://localhost:8084/static/images/js.png" },
  { title: "SpringBoot", version: "-", totalYears: "1", totalMonths: "0", remarks: "Learner", icon: "http://localhost:8084/static/images/springboot.png" },
];
const DATABASE_SKILLS = [
  { title: "MSSQL", version: "2011", totalYears: "2", totalMonths: "0", icon: "http://localhost:8084/static/images/microsoftsqlserver.png" },
  { title: "Mongo DB", version: "", totalYears: "2", totalMonths: "0", icon: "http://localhost:8084/static/images/database.png" },
];
const DEPLOYMENT_TOOLS = [
  {
    title: "Github Actions",
    version: "-",
    totalYears: "",
    totalMonths: "",
    remarks: "Learner",
    icon: "http://localhost:8084/static/images/github.png"
  },
  {
    title: "Docker",
    version: "-",
    totalYears: "",
    totalMonths: "0",
    remarks: "Learner",
    icon: "http://localhost:8084/static/images/docker.png"
  },
  {
    title: "AWS",
    version: "-",
    totalYears: "",
    totalMonths: "0",
    remarks: "Learner",
    icon: "http://localhost:8084/static/images/amazonwebservices.png"
  },
];

export {
  TITLE_MAP,
  LANGUAGE,
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  DEPLOYMENT_TOOLS,
  UNIT_TESTING_LIBRARY,
  DATABASE_SKILLS,
  KEY_SKILLS
};
