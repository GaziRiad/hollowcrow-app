import danger from "../assets/sliders/Dangeruos 1.png";
import certeficate from "../assets/sliders/Certificate 1.png";
import construction from "../assets/sliders/Under Contruction 1.png";

import enginner from "../assets/sliders/Enginerr 1.png";
import jackhammer from "../assets/sliders/Jackhammer  1.png";
import workingMan from "../assets/sliders/man 6.png";

import structure from "../assets/sliders/Structur 1.png";
import management from "../assets/sliders/Tablet-Management 1.png";
import education from "../assets/sliders/Education Icon9 1.png";

import todolist from "../assets/sliders/To-do-list 1.png";
import briefcase from "../assets/sliders/Brifecase 1.png";
import achievement from "../assets/sliders/Education Icon2 1.png";

import platformOverview from "../assets/HomePage/platform-overview.png";

import footerIcon1 from "../assets/HomePage/footer-icon1.png";
import footerIcon2 from "../assets/HomePage/footer-icon2.png";
import footerIcon3 from "../assets/HomePage/footer-icon3.png";

export const navigations = [
  { text: "How it works", path: "" },
  { text: "Industries", path: "" },
  { text: "Solutions", path: "" },
  { text: "Success Stories", path: "" },
  { text: "About Us", path: "" },
  { text: "News", path: "" },
];

export const sliders = [
  {
    heading: "security",
    slides: [
      {
        icon: danger,
        title: "Restricted Area Control",
        text: "Watch your assets with only true alarms according to your security rule.",
      },
      {
        icon: certeficate,
        title: "Vehicle Identification",
        text: "Access control of vehicles with their plate and other features to prevent violation and fraud.",
      },
      {
        icon: construction,
        title: "Suspicious Item Detection",
        text: "Detect doubtful attitudes and potential harmful objects, bags, box etc. to secure your area.",
      },
      {
        icon: danger,
        title: "Restricted Area Control 2",
        text: "Watch your assets with only true alarms according to your security rule.",
      },
    ],
  },
  {
    heading: "Safety",
    slides: [
      {
        icon: enginner,
        title: "PPE",
        text: "Control proper PPE usage of staff to minimize effects on them from work accidents.",
      },
      {
        icon: jackhammer,
        title: "Machine Interactions",
        text: "Poor machine usage can cause serious injuries. Watch out and block accidents with real-time warnings to protect your staff and business.",
      },
      {
        icon: workingMan,
        title: "Housekeeping",
        text: "Injuries due to inadequate housekeeping are entirely avoidable. Prompt identification leads to swift rectification and the prevention of harm.",
      },
      {
        icon: danger,
        title: "Restricted Area Control 2",
        text: "Watch your assets with only true alarms according to your security rule.",
      },
    ],
  },
  {
    heading: "Marketing",
    slides: [
      {
        icon: structure,
        title: "Visitor Counting",
        text: "Count unique visitors using anonymous IDs, excluding staff, to gauge the potential of your stores.",
      },
      {
        icon: management,
        title: "Demographic Targeting",
        text: "Get the demographic diversity of your visitors to implement the correct segmentation.",
      },
      {
        icon: education,
        title: "A/B Testing",
        text: "Understand customers' choices on your new products in a quick way.",
      },
      {
        icon: danger,
        title: "Restricted Area Control 2",
        text: "Watch your assets with only true alarms according to your security rule.",
      },
    ],
  },
  {
    heading: "Quality Control",
    slides: [
      {
        icon: todolist,
        title: "Stock Controls",
        text: "Count or measure your stocks by CCTV.",
      },
      {
        icon: briefcase,
        title: "Patterns & Colours Check",
        text: "Analyze visibility of product has been produced over streams and images to approve quality assurance.",
      },
      {
        icon: achievement,
        title: "Operational Excellence",
        text: "Detect and track every single step of your operations to analyze processes open to improvement.",
      },
      {
        icon: danger,
        title: "Restricted Area Control 2",
        text: "Watch your assets with only true alarms according to your security rule.",
      },
    ],
  },
];

// PLATFORM-OVERVIEW
export const platformDetails = {
  sectionImg: platformOverview,
  textContent: [
    {
      title: "Plug & Use",
      text: "The moment you register and introduce your cameras to Holocrow, you start using the platform. All models of cameras & CCTVs can be connected. From the dedicated page for devices, you can easily view and control the connection status of the devices.",
    },
    {
      title: "Alerts & Notifications",
      text: "Instant alerts and notifications are of vital importance in the solutions you'll use, especially in the fields of workplace safety and security. Holocrow sends instant notifications to relevant departments in risky situations.",
    },
    {
      title: "Visual Reports & Analytics",
      text: "The collected data is automatically visualized and made as understandable and interpretable as possible. You can view all the reports and data on a weekly, monthly, yearly basis, or for a date range you determine.",
    },
    {
      title: "Detailed Guides",
      text: "While we take pride in creating the most user-friendly platform, you can find our guides, which will allow you to get instant answers to any questions that might arise, in the Help Center section whenever you want.",
    },
    {
      title: "Helpdesk",
      text: "If you have different questions that might come to your mind, you can immediately reach out to HelpDesk and get assistance from our expert team.",
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const homeFooter = [
  {
    icon: footerIcon1,
    text: "No Installation",
  },
  {
    icon: footerIcon2,
    text: "Cancel Anytime",
  },
  {
    icon: footerIcon3,
    text: "7-Day Free Trial",
  },
];
