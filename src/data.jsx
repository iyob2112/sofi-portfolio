import { FaPaintBrush } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
  telegramicon,
  // sofi icons
  analytics,
  email,
  marketing_market_social,
  social_media,
  user_seo,
  web,
  influencer,
  SEO,
  Social,
  video,
  content,
  Affiliate,
  pay_per_click,
  photoshop,
  illustrator,
  canva,
  // sofi project
  abisnya,
  Axumit,
  friends,
  friends2,
  kushna,
  fremina,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "content Marketing",
    icon: <FaPaintBrush />,
    description: `We create valuable, relevant, and engaging content tailored to your audience. From blog posts and articles to videos and infographics, our content strategies are designed to boost brand awareness, drive traffic, and generate leads that convert.`,
  },
  {
    title: "Social Media Marketing",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `We help you build a strong presence on platforms like Facebook, Instagram, Twitter, and LinkedIn. Our team manages your accounts, creates engaging posts, runs targeted ad campaigns, and grows your community to increase brand visibility and engagement.`,
  },
  {
    title: "Web Development",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Your website is your digital storefront. We design and develop fast, responsive, and user-friendly websites that not only look great but also function smoothly across all devices. Whether it’s a simple landing page or a full-scale e-commerce site, we bring your vision to life.`,
  },
];

export const projects = [
  {
    title: "Abyssinia Bank",
    image: abisnya,
    category: "Graphics",
    description: `We had the privilege of working with Abyssinia Bank on several impactful creative projects. Our team designed their TV promotion, delivering a compelling visual narrative that aligned with the bank’s core message and brand identity. In addition, we crafted custom graphics and branded video content that further enhanced their marketing efforts and connected with their audience across various platforms.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "photoshop",
        logo: photoshop,
      },
      {
        name: "canva",
        logo: canva,
      },
    ],
  },
  {
    title: "Axumit Ride Service",
    image: Axumit,
    category: "Axumit Graphics",
    description: `We collaborated with Axumite Ride, a modern transportation service, to elevate their brand presence. Our creative team produced engaging video content and custom graphic designs that effectively showcased their services and helped communicate their mission of simplifying urban transportation. The visuals were tailored to reflect the brand’s innovative and reliable identity.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "photoshop",
        logo: photoshop,
      },
      {
        name: "illustrator",
        logo: illustrator,
      },
      {
        name: "canva",
        logo: canva,
      },
      // {
      //   name: "CSS",
      //   logo: css,
      // },
      // {
      //   name: "JavaScript",
      //   logo: javascript,
      // },
    ],
  },
  {
    title: "Mereba Friends",
    image: friends,
    category: "Graphics",
    description: `We partnered with Friends Café to enhance their brand visibility through strategic digital marketing. Our team handled the design of high-quality promotional photos and managed their TikTok, Instagram, and other social media platforms. By delivering visually appealing content and maintaining a consistent online presence, we helped boost customer engagement and attract a wider audience.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "photoshop",
        logo: photoshop,
      },
      {
        name: "illustrator",
        logo: illustrator,
      },
      {
        name: "canva",
        logo: canva,
      },
    ],
  },
  {
    title: "Kushna ",
    image: kushna,
    category: "App Design",
    description: `We worked with the Kushna App team to develop a sleek and intuitive graphic design tailored for their mobile platform. Our focus was on creating a user-friendly interface that visually aligns with their brand while enhancing the overall user experience. The result was a clean, modern look that supports the app’s functionality and appeal.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "illustrator",
        logo: illustrator,
      },
      {
        name: "canva",
        logo: canva,
      },
    ],
  },
  {
    title: "Freminatos (ፍሬሚናጦስ)",
    image: fremina,
    category: "Thumbnail Design",
    description: `As a dedicated agency partner for Fremnatos Old People Helping Center, we manage their digital presence across multiple platforms. This includes full oversight of their YouTube channel and social media accounts, ensuring consistent, compassionate messaging that reflects their mission to support and uplift the elderly community. Our goal is to amplify their impact through effective digital communication and outreach.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "photoshop",
        logo: photoshop,
      },
      {
        name: "canva",
        logo: canva,
      },
    ],
  },
  {
    title: "Mereba Friends",
    image: friends2,
    category: "Graphics",
    description: `We provide full digital management services for Friends Café, overseeing their online presence across social media platforms. From content creation and photo design to platform strategy and engagement, we ensure their brand stays active, consistent, and connected with their audience`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "photoshop",
        logo: photoshop,
      },
      {
        name: "canva",
        logo: canva,
      },
    ],
  },
];

export const skills = [
  {
    title: "Digital Marketing",
    data: [
      {
        skill: "SEO & Analytics",
        level: "Experienced",
        logo: SEO,
      },
      {
        skill: "Web Development",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "Email Marketing",
        level: "Experienced",
        logo: email,
      },
      {
        skill: "Brand Strategy",
        level: "Intermediate",
        logo: analytics,
      },
      {
        skill: "E-commerce Solutions",
        level: "Experienced",
        logo: web,
      },
      {
        skill: "Marketing Automation",
        level: "Experienced",
        logo: emailicon,
      },
      {
        skill: "Social Media Marketing",
        level: "Experienced",
        logo: marketing_market_social,
      },
      {
        skill: "Affiliate Marketing",
        level: "Experienced",
        logo: Affiliate,
      },
    ],
  },
  {
    title: "",
    data: [
      {
        skill: "Content Creation",
        level: "Experienced",
        logo: content,
      },
      {
        skill: "Social Media Management",
        level: "Intermediate",
        logo: Social,
      },
      {
        skill: "influencer marketing",
        level: "Intermediate",
        logo: influencer,
      },
      {
        skill: "Pay Per Click Vectors",
        level: "Intermediate",
        logo: pay_per_click,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "sofanyastesfu@gmail.com",
    link: "mailto:sofanyastesfu@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "WhatsApp",
    value: "+251914749191",
    link: "https://api.whatsapp.com/send?phone=+251914749191",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
  {
    name: "Telegram",
    value: "Sofi Tesfu",
    link: "http://t.me/Sofitesfu",
    icon: telegramicon,
    btnIcon: <FaTelegramPlane />,
    color: "rgb(0, 136, 204)",
  },
];
export const socialHandles = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];
