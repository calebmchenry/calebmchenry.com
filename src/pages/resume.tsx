import React from "react";
import { Layout } from "../Layout";

const Resume = () => {
  return (
    <Layout>
      <title>Resume | Caleb Mchenry</title>
      <h1>Caleb McHenry</h1>
      <a href="mailto:calebmchenry@gmail.com">calebmchenry@gmail.com</a>
      {" • "}
      <a href="https://github.com/calebmchenry">
        https://github.com/calebmchenry
      </a>
      <h2>Education</h2>
      <b>West Virginia University</b> - Bachelor's of Computer Science - May 2018 GPA -
      3.94
      <h2>Skills</h2>
      <p>
        <b>Languages: </b> Typescript, JavaScript, HTML, CSS, Go, Haskell,
        Java, Rust
      </p>
      <p>
        <b>Frameworks: </b> React, Jest, Gatsby
      </p>
      <p>
        <b>Technologies: </b> HTTP, WebSocket, GraphQL, git, Jenkins,
        Jira, Docker
      </p>
      <p>
        <b>Interests: </b> Automation, Testing, Functional Programming,
        Teaching, Learning
      </p>
      <p>
        <b>Coding Style: </b> Iterative, with an emphasis on organization,
        maintainability, and readability
      </p>
      <p>
        <span>Soft Skills: </span> Public Speaking, Teaching, and Leadership
      </p>
      <h2>Experience/ Achievements</h2>
      <p><b>Leidos, Morgantown WV </b></p>
      <p>Software Engineer III • Feb 2021 - Present</p>
      <ul>
        <li>Developed React web applications and Java backend services</li>
        <li>Team lead for internal JavaScript Framework</li>
        <ul>
          <li>
            Created/published reusable React components and HTTP/WS clients
          </li>
          <li>
            Introduced TypeScript, React, and automated integration testing
          </li>
          <li>
            Organized tasking, pair programmed, and aligned teammates to
            business objectives
          </li>
          <li>
            Interact with other projects to get feedback and discover ways to
            support them
          </li>
        </ul>
        <li>Highlights</li>
        <ul>
          <li>Helped make React the default framework for the entire office</li>
          <li>
            Led group and individual trainings on React, TypeScript, and our
            internal framework
          </li>
        </ul>
      </ul>
      <p>Software Engineer II • July 2020</p>
      <p>Jr. Software Engineer • July 2018</p>
      <p>Software Engineering Tech • Aug 2017</p>
      <p>Software Engineering Intern • May 2016</p>
    </Layout>
  );
};

export default Resume;
