import React from "react";
import styled, { css } from "styled-components";
import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBlog
} from "react-icons/fa";
import { spacingUnit, medium, large } from "../styles/variables";

export default function SocialMediaGroup() {
  const groupStyles = css`
    font-size: 3.2rem;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (${medium}) {
      display: flex;
      flex-wrap: wrap;
      padding: 0 calc(2 * ${spacingUnit});

      & > * {
        width: 50%;
      }
    }

    @media (${large}) {
      font-size: 2.4rem;
    }

    & a {
      display: flex;
      align-items: center;
      padding: calc(${spacingUnit});
    }

    & svg {
      margin-right: 0.5em;
      font-size: 1.5em;
    }
  `;

  const BlogLink = styled.a`
    svg {
      color: #ee802f;
    }
  `;

  const YouTubeLink = styled.a`
    svg {
      color: #ff0000;
    }
  `;

  const GitHubLink = styled.a`
    svg {
      color: #333333;
    }
  `;

  const LinkedInLink = styled.a`
    svg {
      color: #0077b5;
    }
  `;

  const TwitterLink = styled.a`
    svg {
      color: #1da1f2;
    }
  `;

  return (
    <ul css={groupStyles}>
      <li>
        <YouTubeLink href="https://www.youtube.com/channel/UCVFXWl0jiVV8KlBa_eRVPyQ">
          <FaYoutube /> YouTube
        </YouTubeLink>
      </li>
      <li>
        <BlogLink href="/blog">
          <FaBlog /> Blog
        </BlogLink>
      </li>
      <li>
        <GitHubLink href="https://github.com/calebmchenry">
          <FaGithub /> GitHub
        </GitHubLink>
      </li>
      <li>
        <LinkedInLink href="https://www.linkedin.com/in/caleb-mchenry-75301a152/">
          <FaLinkedin /> LinkedIn
        </LinkedInLink>
      </li>
      <li>
        <TwitterLink href="https://twitter.com/caleb_mchenry">
          <FaTwitter /> Twitter
        </TwitterLink>
      </li>
    </ul>
  );
}
