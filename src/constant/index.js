import searchEngine from "../assets/images/searchEngine.svg";
import advertising from "../assets/images/advertising.svg";
import mediaMarketing from "../assets/images/mediaMarketing.svg";
import emailMarketing from "../assets/images/emailMarketing.svg";
import content from "../assets/images/content.svg";
import analytics from "../assets/images/analytics.svg";
import John from "../assets/images/people/John.svg";
import Jane from "../assets/images/people/Jane.svg";
import Michael from "../assets/images/people/Michael.svg";
import Emily from "../assets/images/people/Emily.svg";

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

export const WorkingProcessData = [
  {
    id: 1,
    name: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    name: "Research and Strategy Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a mi sit amet mi finibus luctus quis et risus. Quisque nec ornare ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tempor ipsum nec augue cursus, non tempus diam aliquam.",
  },
  {
    id: 3,
    name: "Implementation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a mi sit amet mi finibus luctus quis et risus. Quisque nec ornare ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tempor ipsum nec augue cursus, non tempus diam aliquam.",
  },
  {
    id: 4,
    name: "ImplementationMonitoring and Optimization",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a mi sit amet mi finibus luctus quis et risus. Quisque nec ornare ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tempor ipsum nec augue cursus, non tempus diam aliquam.",
  },
  {
    id: 5,
    name: "Reporting and Communication",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a mi sit amet mi finibus luctus quis et risus. Quisque nec ornare ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tempor ipsum nec augue cursus, non tempus diam aliquam.",
  },
  {
    id: 6,
    name: "Continual Improvement",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a mi sit amet mi finibus luctus quis et risus. Quisque nec ornare ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tempor ipsum nec augue cursus, non tempus diam aliquam.",
  },
];

export const TeamData = [
  {
    id: 0,
    name: "John Smith",
    occupation: "CEO and Founder",
    profile: John,
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    id: 1,
    name: "Jane Doe",
    occupation: "Director of Operations",
    profile: Jane,
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    id: 2,
    name: "Michael Brown",
    occupation: "Senior SEO Specialist",
    profile: Michael,
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    id: 3,
    name: "Emily Johnson",
    occupation: "PPC Manager",
    profile: Emily,
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
];
