import searchEngine from "../assets/images/searchEngine.svg";
import advertising from "../assets/images/advertising.svg";
import mediaMarketing from "../assets/images/mediaMarketing.svg";
import emailMarketing from "../assets/images/emailMarketing.svg";
import content from "../assets/images/content.svg";
import analytics from "../assets/images/analytics.svg";

export const ServiceCardData = [
  {
    id: 0,
    title: ["Search engine", "optimization"],
    image: searchEngine,
    bgColour: "#F3F3F3",
    isGreen: true,
  },
  {
    id: 1,
    title: ["Pay-per-click", "advertising"],
    image: advertising,
    bgColour: "#b9ff66",
    isGreen: true,
    isTitleWhite: true,
  },
  {
    id: 2,
    title: ["Social Media", "Marketing"],
    image: mediaMarketing,
    bgColour: "#191A23",
    isGreen: false,
    isTitleWhite: true,
    className: "m-0",
  },
  {
    id: 3,
    title: ["Email", "Marketing"],
    image: emailMarketing,
    bgColour: "#F3F3F3",
    isGreen: true,
    className: "m-0",
  },
  {
    id: 4,
    title: ["Content", "Creation"],
    image: content,
    bgColour: "#b9ff66",
    isGreen: true,
    isTitleWhite: true,
    className: "m-0",
  },
  {
    id: 5,
    title: ["Analytics and", "Tracking"],
    image: analytics,
    bgColour: "#191A23",
    isGreen: false,
  },
];

export const CaseStudiesData = [
  {
    id: 0,
    content:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 1,
    content:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: 2,
    content:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];
