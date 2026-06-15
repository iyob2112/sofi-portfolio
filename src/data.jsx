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
  // NEW ADD
  dabonua,
  dabonua2,
  dabonua3,
  dabonua5,
  dabonua4,
  seti,
  seti2,
  seti3,
  seti4,
  seti5,
  seti6,
  seti7,
  seti8,
  seti9,
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

// export const projects = [
//   // NEW ADD 

//   {
//     title: "DABONUA FRUIT BASED PAPAYA JUICE",
//     images: [
//       dabonua,
//     ],
//     category: "Graphics",
//     description: `We had the privilege of working with Abyssinia Bank on several impactful creative projects. Our team designed their TV promotion, delivering a compelling visual narrative that aligned with the bank’s core message and brand identity. In addition, we crafted custom graphics and branded video content that further enhanced their marketing efforts and connected with their audience across various platforms.`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   // NEW ADD 
//   {
//     title: "DABONUA FRUIT BASED AVOCADO JUICE",

//     images: [
//      dabonua2
//     ],
//     category: "Graphics",
//     description: `We had the privilege of working with Abyssinia Bank on several impactful creative projects. Our team designed their TV promotion, delivering a compelling visual narrative that aligned with the bank’s core message and brand identity. In addition, we crafted custom graphics and branded video content that further enhanced their marketing efforts and connected with their audience across various platforms.`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "DABONUA FRUIT BASED CLASSIC MILK SHAKE",

//     images: [
//       dabonua3
//     ],
//     category: "Axumit Graphics",
//     description: `We collaborated with Axumite Ride, a modern transportation service, to elevate their brand presence. Our creative team produced engaging video content and custom graphic designs that effectively showcased their services and helped communicate their mission of simplifying urban transportation. The visuals were tailored to reflect the brand’s innovative and reliable identity.`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "illustrator",
//         logo: illustrator,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//       // {
//       //   name: "CSS",
//       //   logo: css,
//       // },
//       // {
//       //   name: "JavaScript",
//       //   logo: javascript,
//       // },
//     ],
//   },
//   {
//     title: "SETI SUPERMARKET GLOW",
//     images: [
//        seti,
      
//     ],
//     category: "Graphics",
//     description: `We partnered with Friends Café to enhance their brand visibility through strategic digital marketing. Our team handled the design of high-quality promotional photos and managed their TikTok, Instagram, and other social media platforms. By delivering visually appealing content and maintaining a consistent online presence, we helped boost customer engagement and attract a wider audience.`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "illustrator",
//         logo: illustrator,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "SETI SUPERMARKET NOURISH ",
//     images: [
//      seti2,
//     ],
//     category: "App Design",
//     description: `We worked with the Kushna App team to develop a sleek and intuitive graphic design tailored for their mobile platform. Our focus was on creating a user-friendly interface that visually aligns with their brand while enhancing the overall user experience. The result was a clean, modern look that supports the app’s functionality and appeal.`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "XD",
//         logo: xd,
//       },
//       {
//         name: "illustrator",
//         logo: illustrator,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "SETI SUPERMARKET BRIGHTEN NOURISH GLOW",
//     images: [
//      seti3,
//     ],
//     category: "Thumbnail Design",
//     description: `As a dedicated agency partner for Fremnatos Old People Helping Center, we manage their digital presence across multiple platforms. This includes full oversight of their YouTube channel and social media accounts, ensuring consistent, compassionate messaging that reflects their mission to support and uplift the elderly community. Our goal is to amplify their impact through effective digital communication and outreach.`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "SETI SUPERMARKET ABYSSINIA",
//     images: [
//       seti4,
//     ],
//     category: "Graphics",
//     description: `We provide full digital management services for Friends Café, overseeing their online presence across social media platforms. From content creation and photo design to platform strategy and engagement, we ensure their brand stays active, consistent, and connected with their audience`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "DABONUA FRUIT BASED MILK SHAKE",
//     images: [
//       dabonua5,
//     ],
//     category: "Graphics",
//     description: `We provide full digital management services for Friends Café, overseeing their online presence across social media platforms. From content creation and photo design to platform strategy and engagement, we ensure their brand stays active, consistent, and connected with their audience`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "DABONUA FRUIT BASED MANGO JUICE",
//     images: [
//      dabonua4,
//     ],
//     category: "Graphics",
//     description: `We provide full digital management services for Friends Café, overseeing their online presence across social media platforms. From content creation and photo design to platform strategy and engagement, we ensure their brand stays active, consistent, and connected with their audience`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "DABONUA FRUIT BASED CASHEWS",
//     images: [
//       seti5,
//     ],
//     category: "Graphics",
//     description: `We provide full digital management services for Friends Café, overseeing their online presence across social media platforms. From content creation and photo design to platform strategy and engagement, we ensure their brand stays active, consistent, and connected with their audience`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "SETI SUPERMARKET CRAFTED",
//     images: [
//       seti6,
//     ],
//     category: "Graphics",
//     description: `We provide full digital management services for Friends Café, overseeing their online presence across social media platforms. From content creation and photo design to platform strategy and engagement, we ensure their brand stays active, consistent, and connected with their audience`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "SETI SUPERMARKET RICH JULCY",
//     images: [
//      seti7,
//     ],
//     category: "Graphics",
//     description: `We provide full digital management services for Friends Café, overseeing their online presence across social media platforms. From content creation and photo design to platform strategy and engagement, we ensure their brand stays active, consistent, and connected with their audience`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "SETI SUPERMARKET FRESH TENDER",
//     images: [
//      seti8,
//     ],
//     category: "Graphics",
//     description: `We provide full digital management services for Friends Café, overseeing their online presence across social media platforms. From content creation and photo design to platform strategy and engagement, we ensure their brand stays active, consistent, and connected with their audience`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
//   {
//     title: "SETI SUPERMARKET PASTA RICCO",
//     images: [
//      seti9,
//     ],
//     category: "Graphics",
//     description: `We provide full digital management services for Friends Café, overseeing their online presence across social media platforms. From content creation and photo design to platform strategy and engagement, we ensure their brand stays active, consistent, and connected with their audience`,
//     demoLink: "https://google.com/",
//     stacks: [
//       {
//         name: "photoshop",
//         logo: photoshop,
//       },
//       {
//         name: "canva",
//         logo: canva,
//       },
//     ],
//   },
// ];
// Add this inside your data.js file

export const projects = [
  {
    title: "DABONUA FRUIT BASED PAPAYA JUICE",
    images: [dabonua],
    category: "Graphics & Packaging",
    description: `Custom packaging and label design for Dabonua's fruit-based Papaya Juice. The creative direction highlights natural freshness, vibrant product imagery, and a clean layout tailored for commercial beverage branding and shelf standout.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "DABONUA FRUIT BASED AVOCADO JUICE",
    images: [dabonua2],
    category: "Graphics & Packaging",
    description: `Visual branding and premium bottle label layout for Dabonua's Avocado Juice lineup. Focused on rich, organic design elements that communicate health benefits, high-quality ingredients, and authentic local flavor profiles.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "DABONUA FRUIT BASED CLASSIC MILK SHAKE",
    images: [dabonua3],
    category: "Graphics & Packaging",
    description: `Branding design for the Dabonua Classic Milk Shake variant. Crafted engaging promotional assets and product presentation layouts that emphasize a creamy, rich texture while maintaining a cohesive brand aesthetic across the entire beverage line.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "SETI SUPERMARKET GLOW",
    images: [seti],
    category: "Social Media Graphics",
    description: `Promotional and digital marketing campaign creative for Seti Supermarket's 'Glow' product line. Designed clean, eye-catching social media posts and banners focused on health, wellness, and self-care item promotions.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "SETI SUPERMARKET NOURISH",
    images: [seti2],
    category: "Social Media Graphics",
    description: `Creative design work for Seti Supermarket's 'Nourish' sector campaign. Tailored visual elements for social channels to emphasize organic food options, fresh groceries, and wholesome ingredient highlights.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "SETI SUPERMARKET BRIGHTEN NOURISH GLOW",
    images: [seti3],
    category: "Campaign Design",
    description: `A comprehensive retail banner and digital catalog design combining Seti Supermarket's three key wellness themes: Brighten, Nourish, and Glow. Created cohesive imagery meant to attract health-conscious shoppers.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "SETI SUPERMARKET ABYSSINIA",
    images: [seti4],
    category: "Commercial Graphics",
    description: `Special co-branded promotional campaign layout connecting Seti Supermarket offerings with local partner initiatives. Designed for maximum seasonal engagement across print and digital flyers.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "DABONUA FRUIT BASED MILK SHAKE",
    images: [dabonua5],
    category: "Graphics & Packaging",
    description: `Core package layout and vector asset assembly for the main Dabonua Fruit Based Milk Shake profile. Balanced bold typographic choices with refreshing color palettes suited for retail shelves.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "DABONUA FRUIT BASED MANGO JUICE",
    images: [dabonua4],
    category: "Graphics & Packaging",
    description: `Product label illustration and asset assembly for Dabonua's sweet Mango Juice line. Features clean nutritional framing and highly scalable vector fruit art designed for modern retail standards.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "DABONUA FRUIT BASED CASHEWS",
    images: [seti5],
    category: "Graphics & Packaging",
    description: `Packaging conceptualization for Dabonua's premium roasted cashew snack line. Combines earthy warm background tones with minimalist modern product windows to drive high shelf-appeal.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "SETI SUPERMARKET CRAFTED",
    images: [seti6],
    category: "Brand Identity",
    description: `Bespoke promotional creative focusing on Seti Supermarket's premium in-house 'Crafted' goods and organic bakery sections. Designed to evoke a high-end, artisanal grocery feeling.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "SETI SUPERMARKET RICH JUICY",
    images: [seti7],
    category: "Product Graphics",
    description: `Visual marketing materials for Seti Supermarket's fresh produce and beverage counters, designed specifically around raw juices and seasonal fruit sections to drive high impulse-buy rates.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "SETI SUPERMARKET FRESH TENDER",
    images: [seti8],
    category: "Product Graphics",
    description: `Creative layout and display flyers for Seti Supermarket's gourmet butchery and cold-cut departments, prioritizing clean food imagery and high-quality premium service communication.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
  {
    title: "SETI SUPERMARKET PASTA RICCO",
    images: [seti9],
    category: "Product Graphics",
    description: `Specialty food campaign design highlighting Seti Supermarket’s imported Italian products and pasta selection. Focused on traditional, rich styling elements to elevate consumer interest.`,
    demoLink: "#",
    stacks: [
      { name: "photoshop", logo: photoshop },
      { name: "illustrator", logo: illustrator },
      { name: "canva", logo: canva },
    ],
  },
];

export const videos = [
  {
    id: 1,
    title: "Seti Supermarket Showcase",
    category: "Shopping",
    videoUrl: "https://www.tiktok.com/@seti.supermarket/video/7627343962176507144",
    videoId: "7627343962176507144",
    videoImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600",
    description: "ንመላእ ተከተልቲ እምነት ክርስትና እንኳዕ ንበዓል ትንሣኤ ብሰላም አብፅሐኩም አብፅሐና ሰቲ ሱፐርማርኬት",
    tags: ["shopping", "mekelle", "supermarket"]
  },
  {
    id: 2,
    title: "Yummy Bakeries - Try It Now!",
    category: "Cakes & Bakery",
    videoUrl: "https://www.tiktok.com/@yummy_bakery1/video/7630088036012936466",
    videoId: "7630088036012936466",
    videoImage: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?q=80&w=600",
    description: "Yummy Bakeries try it now! Fresh, sweet, and delicious premium cakes straight out of the shop layout.",
    tags: ["cakes", "bakeryshop", "Ethiopia", "sweet", "tigraytiktok"]
  },
  {
    id: 3,
    title: "እንኳዕ ንበዓል ትንሣኤ ብሰላም አብፅሐኩም",
    category: "Holiday Showcase",
    videoUrl: "https://www.tiktok.com/@yummy_bakery1/video/7627347484167245063",
    videoId: "7627347484167245063",
    videoImage: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600",
    description: "ንመላእ ተከተልቲ እምነት ክርስትና እንኳዕ ንበዓል ትንሣኤ ብሰላም አብፅሐኩም አብፀሐና - Yummy Bakeries.",
    tags: ["cakes", "bakeryshop", "Ethiopia", "bakery", "coffeetime"]
  },
  {
    id: 4,
    title: "Yummy Bakeries Premium Selection",
    category: "Cakes & Bakery",
    videoUrl: "https://www.tiktok.com/@yummy_bakery1/video/7601743112624524552",
    videoId: "7601743112624524552",
    videoImage: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=600",
    description: "A beautiful display of custom cakes and exceptional pastries crafted carefully at Yummy Bakery.",
    tags: ["cakes", "bakeryshop", "Ethiopia", "sweet", "coffeetime"]
  },
  {
    id: 5,
    title: "Coffee Time & Sweets Combo",
    category: "Lifestyle Showcase",
    videoUrl: "https://www.tiktok.com/@yummy_bakery1/video/7572433040106900748",
    videoId: "7572433040106900748",
    videoImage: "https://i.pinimg.com/736x/e9/b7/e5/e9b7e596d74785a154e8634f7f841937.jpg",
    description: "Elevating daily coffee schedules with premium baked goodies and sweet custom cake designs.",
    tags: ["cakes", "bakeryshop", "tigraytiktok", "coffeetime"]
  },
  {
    id: 6,
    title: "Dabona Juice & Special Salad Recommendations",
    category: "Juice & Healthy",
    videoUrl: "https://www.tiktok.com/@dabonamk/video/7630042462320364821",
    videoId: "7630042462320364821",
    videoImage: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=600",
    description: "ሎምዓንቲ ከከም ስምዒትኩም recommend ልግበሩ ሼካትን ሳላድን ከላልየኩም ተደኺሙኩም- Protein shake, ተተጨናኒቕኩም- Chocolate shake, ቪኒላን ኣቮካዶን ሼክ ምስ ስፔሻል ሳላድ!",
    tags: ["dabona", "juice", "ethiopian_tik_tok", "tigraytiktok", "ertreantiktok"]
  },
  {
    id: 7,
    title: "Kabun Coffee Grand Opening",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@kabuncoffee/video/7568473135071169848",
    videoId: "7568473135071169848",
    videoImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600",
    description: "ተኸፊቱ! The lights are on, the coffee's brewing, and Kabun Coffee is officially ready for you. Come experience our grand opening space.",
    tags: ["kabun", "kabun_coffee", "Coffee", "grandopening", "crafted_from_coffe"]
  },
  {
    id: 8,
    title: "Precision Craftsmanship at Kabun Coffee",
    category: "Cafe Vibes",
    videoUrl: "https://www.tiktok.com/@kabuncoffee/video/7638710013808102663",
    videoId: "7638710013808102663",
    videoImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600",
    description: "Precision in every beat. Crafted from coffee. Enjoy the ultimate aesthetic cafe experience and premium brewing in Mekelle.",
    tags: ["craftedfromcoffee", "kabuncoffee", "cafevibes", "kabun", "mekellecoffee"]
  },
  {
    id: 9,
    title: "Culture of Craft & Hospitality",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@kabuncoffee/video/7618580506443025671",
    videoId: "7618580506443025671",
    videoImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600",
    description: "Stepping into Kabun means stepping into a culture of craft and hospitality. See you at the counter!",
    tags: ["kabuncoffee", "craftedfromcoffee", "cafevibes", "baristalife"]
  },
  {
    id: 10,
    title: "Meet the Grape Mojito",
    category: "Juice & Healthy",
    videoUrl: "https://www.tiktok.com/@kabuncoffee/video/7606646355691441426",
    videoId: "7606646355691441426",
    videoImage: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600",
    description: "Your Valentine’s crush has arrived. 🍇🌿 Meet the Grape Mojito, only at Kabun.",
    tags: ["grape", "mojitos", "valentinesday", "date", "mekelle"]
  },
  {
    id: 11,
    title: "Timket Lemon Mojito",
    category: "Juice & Healthy",
    videoUrl: "https://www.tiktok.com/@kabuncoffee/video/7596977451125722424",
    videoId: "7596977451125722424",
    videoImage: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600",
    description: "If she says no with lomi try lemon mojito it always works 🍋✨",
    tags: ["timket", "lemonmojito", "tigraytiktok", "coffee", "raya"]
  },
  {
    id: 12,
    title: "Mena Meadi Showcase",
    category: "Traditional & Cultural",
    videoUrl: "https://www.tiktok.com/@mena.meadi/video/7645162101677329684",
    videoId: "7645162101677329684",
    videoImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    description: "Experience the vibrant flavors and hospitality at መና መኣዲ (Mena Meadi).",
    tags: ["fyp", "ethiopian_tik_tok"]
  },
  {
    id: 13,
    title: "Mena Meadi Authentic Flavors",
    category: "Traditional & Cultural",
    videoUrl: "https://www.tiktok.com/@mena.meadi/video/7639781091896855828",
    videoId: "7639781091896855828",
    videoImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    description: "Traditional presentation and exceptional cultural dining options live at መና መኣዲ.",
    tags: ["fyp", "ethiopian_tik_tok"]
  },
  {
    id: 14,
    title: "Mena Meadi Culinary Hospitality",
    category: "Traditional & Cultural",
    videoUrl: "https://www.tiktok.com/@mena.meadi/video/7643834321966615829",
    videoId: "7643834321966615829",
    videoImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    description: "Gather around the authentic circle. Delicious cultural dining packages in full look.",
    tags: ["fyp", "ethiopian_tik_tok"]
  },
  {
    id: 15,
    title: "Selame Tibeb Fashion Feature 01",
    category: "Traditional Clothing",
    videoUrl: "https://www.tiktok.com/@selame.tibeb/video/7644061276573797653",
    videoId: "7644061276573797653",
    videoImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600",
    description: "Selame Tibeb Traditional Attire. Call 📞 0956864643 or 0910250764 to order.",
    tags: ["habeshatiktok", "ethiopian_tik_tok", "trending", "tlf", "habeshagirl"]
  },
  {
    id: 16,
    title: "Selame Tibeb Custom Collection 02",
    category: "Traditional Clothing",
    videoUrl: "https://www.tiktok.com/@selame.tibeb/video/7622569786614254869", // Cross-matched correct video code
    videoId: "7642724498436836629",
    videoImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600",
    description: "Selame ጥበብ ለማዘዝ ;- +251 95 686 4643 / +251 91 025 0764",
    tags: ["ethiopian_tik_tok", "tigraytiktok", "eritreantiktok", "diyaspora_tigray", "habeshatiktok"]
  },
  {
    id: 17,
    title: "Bama Pictures Production Highlight 01",
    category: "Photography & Media",
    videoUrl: "https://www.tiktok.com/@bama.pictures/video/7642353280739216661",
    videoId: "7642353280739216661",
    videoImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600",
    description: "Behind the lens with the team. Crafting modern visual compositions at Bama Pictures.",
    tags: ["fyp", "ethiopian_tik_tok"]
  },
  {
    id: 18,
    title: "Bama Pictures Event Coverage 02",
    category: "Photography & Media",
    videoUrl: "https://www.tiktok.com/@bama.pictures/video/7634863718656003346",
    videoId: "7634863718656003346",
    videoImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600",
    description: "ይአዝዙ........ Call 0901895636 for premium production bookings and capture layouts.",
    tags: ["bama", "pictures", "ethiopian_tik_tok", "tigraytiktok", "eritreantiktok"]
  },
  {
    id: 19,
    title: "Bama Pictures Cinematic Layout 03",
    category: "Photography & Media",
    videoUrl: "https://www.tiktok.com/@bama.pictures/video/7624774005983169808",
    videoId: "7624774005983169808",
    videoImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600",
    description: "Capturing special profiles and crystal clear aesthetics live on set.",
    tags: ["bama", "pictures", "cinematic", "vlog"]
  },
  {
    id: 20,
    title: "Delicious Food Lineup at Bubble Lounge",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@bubble_lounge/video/7602636487494012216",
    videoId: "7602636487494012216",
    videoImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    description: "😋Which one is your favorite? 💥Delicious foods are here! 📍ቀበሌ 17 ጥቓ ማረት",
    tags: ["bubble", "bubblelounge", "bubble_lounge", "dominant", "mekelle"]
  },
  {
    id: 21,
    title: "Zemen Dental Multi-Specialty 01",
    category: "Medical & Health",
    videoUrl: "https://www.tiktok.com/@zemendental/video/7613610459408649493",
    videoId: "7613610459408649493",
    videoImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
    description: "ብእምነት ክንክን ይረኽቡን ፍሽኽትኦም ናብ ንቡር ይመልሱን። 📍መቐለ ሓውዜን ኣደባባይ ህንፃ ሕዋነ 2ይ ደብሪ 📞 +251935359802",
    tags: ["zemen", "dental", "clinic", "ethiopian_tik_tok", "tigraytiktok"]
  },
  {
    id: 22,
    title: "Zemen Dental Smile Care 02",
    category: "Medical & Health",
    videoUrl: "https://www.tiktok.com/@zemendental/video/7603969854021946645",
    videoId: "7603969854021946645",
    videoImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
    description: "ዘመን ምንጪ ብሩህ ፍሽኽትኦም! ብስፔሻሊስት ምትካል ኢምፕላንት፣ ብሬስ፣ መጥባሕቲ ውሽቲ ኣፍን ገፅን።",
    tags: ["zemen", "tiktok", "ethiopian_tik_tok", "tigraytiktok"]
  },
  {
    id: 23,
    title: "Zemen Dental Complete Treatment 03",
    category: "Medical & Health",
    videoUrl: "https://www.tiktok.com/@zemendental/video/7608437224564182292",
    videoId: "7608437224564182292",
    videoImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
    description: "ንዝተማልአ ሕክምና ስኒ ፊት ን ፊት ቲቻት ካፌ ህንፃ ሕዋነ ንርከብ። ፍሽኽታኹም ይመልሱ!",
    tags: ["zemen", "dental", "clinic", "ethiopian_tik_tok", "tigraytiktok"]
  },
  {
    id: 24,
    title: "Zemen Dental Expert Implant Care 04",
    category: "Medical & Health",
    videoUrl: "https://www.tiktok.com/@zemendental/video/7596364152596188472",
    videoId: "7596364152596188472",
    videoImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
    description: "ብስፔሻሊስት ምትካል ኣርቲፊሻል ስኒን ሙሉእ ክንክንን ውሽጢ ገፅ። ዘመን ምንጪ ብሩህ ፍሽኽትኦም!",
    tags: ["zemen", "dental", "clinic", "dentalcare", "tigraytiktok"]
  },
  {
    id: 25,
    title: "Zemen Dental Braces Specialist 05",
    category: "Medical & Health",
    videoUrl: "https://www.tiktok.com/@zemendental/video/7585983281875799307",
    videoId: "7585983281875799307",
    videoImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
    description: "ስፔሻሊስት ሕክምና ስኒ ብሬስ ከምኡ'ውን ምትካል ኣርቲፊሻል ስኒ። 📍መቐለ ሓውዜን ኣደባባይ።",
    tags: ["zemen", "dental", "clinic", "tigraytiktok", "ethiopian_tik_tok"]
  },
  {
    id: 26,
    title: "Chapati Plus Specialty Menu 01",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@chapati_bbq/video/7639287047533956373",
    videoId: "7639287047533956373",
    videoImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    description: "Chapati plus ✨ Freshly rolled and cooked wraps packed with exceptional taste parameters.",
    tags: ["fyp", "chapatiplus", "foodreview", "tigraytiktok", "delivery"]
  },
  {
    id: 27,
    title: "Chapati Plus Street Food Vibe 02",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@chapati_bbq/video/7635294467062304020",
    videoId: "7635294467062304020",
    videoImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    description: "Chapati plus🔥 Savor the absolute best savory profiles directly from the Mekelle line.",
    tags: ["chapatiplus", "fyp", "food", "mekelle", "delivery"]
  },
  {
    id: 28,
    title: "Chapati Plus Fasting Options 03",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@chapati_bbq/video/7621087651789016340",
    videoId: "7621087651789016340",
    videoImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    description: "Chapati plus. Providing high quality fasting alternatives and prompt city delivery.",
    tags: ["chapati", "delivery", "fastingfood", "chapatiplus", "tigraytiktok"]
  },
  {
    id: 29,
    title: "Chapati Plus Sunday Brew 04",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@chapati_bbq/video/7622569786614254869",
    videoId: "7622569786614254869",
    videoImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600",
    description: "Happy Sunday ☕️ Flawless combinations of fresh chapatis and hot coffee templates.",
    tags: ["chapati", "coffee", "tigraytiktok", "deliverymekelle", "chapatiplis"]
  },
  {
    id: 30,
    title: "Chapati Plus Launch Announcement 05",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@chapati_bbq/video/7591751822843432248",
    videoId: "7591751822843432248",
    videoImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    description: "Coming soon chapati plus 💥 Fresh, quick, and authentic flavor setups hitting your spot.",
    tags: ["chapati", "fyp", "deliverymekelle", "tigraytiktok", "foodcontent"]
  },
  {
    id: 31,
    title: "Chapati Plus Grand Opening Invitation",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@chapati_bbq/video/7595093853082864908",
    videoId: "7595093853082864908",
    videoImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    description: "You all are invited… . . . @kikiy《☆》 @sofi.t10 @axumawi _events",
    tags: ["chapati", "deliverymekelle", "chapatiplus", "grandopening", "tigraytiktok"]
  },
  {
    id: 32,
    title: "Grand Opening of Chapati Plus",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@chapati_bbq/video/7596743534699384120",
    videoId: "7596743534699384120",
    videoImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600",
    description: "Grand opening of chapati plus🚪 . . . . @sofi.t10 @kikiy《☆》",
    tags: ["chapati", "chapatiplus", "grandopening", "tigraytiktok", "deliverymekelle"]
  },
  {
    id: 33,
    title: "Food, Vibe & Drinks Combo",
    category: "Cafe & Coffee",
    videoUrl: "https://www.tiktok.com/@chapati_bbq/video/7602272359583649045",
    videoId: "7602272359583649045",
    videoImage: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600",
    description: "Food+vibe+drink all in chapati plus  . . . . @kikiy《☆》 @sofi.t10",
    tags: ["chapatiplus", "tigraytiktok", "football", "deliverymekelle", "chiken"]
  },
  {
    id: 34,
    title: "Friends Garden Aesthetic Videography",
    category: "Restaurant & Lounge",
    videoUrl: "https://www.tiktok.com/@friends_garden/video/7507250742323940664",
    videoId: "7507250742323940664",
    videoImage: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=600",
    description: "መረባ ፍሬንድስ ጋርደን - Premium food photography and custom videography draft showcase by @sofi.t10.",
    tags: ["friends", "garden", "መረባ", "tigray", "beer", "cafe", "foodphotography", "videography"]
  },
  {
    id: 35,
    title: "Friends Garden Spot Location Profile",
    category: "Restaurant & Lounge",
    videoUrl: "https://www.tiktok.com/@friends_garden/video/7603962201174560008",
    videoId: "7603962201174560008",
    videoImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600",
    description: "መረባ ፍሬንድስ 📍ኣድራሻ -መቐለ 17ቀበሌ, ፊትለፊት ብሉበርድ ናይ ቀደም \"ገዛ ተጋሩ\" ዝነበረ 📞 call us 09-70-70-04-88 09-45-98-63-49",
    tags: ["food", "foodphotography", "መረባ", "friends", "tigraytiktok"]
  },
  {
    id: 36,
    title: "New Year Celebration at Friends Garden",
    category: "Restaurant & Lounge",
    videoUrl: "https://www.tiktok.com/@friends_garden/video/7548327682165984518",
    videoId: "7548327682165984518",
    videoImage: "https://images.unsplash.com/photo-1467307983825-619715426cbe?q=80&w=600",
    description: "እንዃዕ ን2018 ዓ/ም ዘመነ ማርቆስ ብሰላም ኣብፀሐኩም። ሓድሽ ዓመት ናይ ፍቅሪ ናይ ሰላም ናይ ራህዋ ንኽኮነልኩም ናይ መረባ ፍሬንድስ ዓብይ ትምኒት እዩ። ርሑስ ሓዱሽ ዓመት.",
    tags: ["ethiopian_tik_tok", "tigraytiktok", "newyear", "ሓዱሽዓመት"]
  },
  {
    id: 37,
    title: "Ashenda Festivities at Friends Garden",
    category: "Restaurant & Lounge",
    videoUrl: "https://www.tiktok.com/@friends_garden/video/7542554338665778437",
    videoId: "7542554338665778437",
    videoImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    description: "መረባ ፍሬንድስ ጋርደን 📍ኣድራሻ -መቐለ 17ቀበሌ, ፊትለፊት ብሉበርድ ናይ ቀደም \"ገዛ ተጋሩ\" ዝነበረ @yohanis teshome @Bruck Zity @Eyob.Foods @sofi.t10",
    tags: ["ethiopian_tik_tok", "ashenda", "መረባ", "friends", "tigraytiktok"]
  },
  {
    id: 38,
    title: "Friends Garden Food Photography Showcase",
    category: "Restaurant & Lounge",
    videoUrl: "https://www.tiktok.com/@friends_garden/video/7544248393678310662",
    videoId: "7544248393678310662",
    videoImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    description: "መረባ ፍሬንድስ ጋርደን 📍ኣድራሻ -መቐለ 17ቀበሌ, ፊትለፊት ብሉበርድ ናይ ቀደም \"ገዛ ተጋሩ\" ዝነበረ @LOFTY HARON @NATTY2COLD🥶 @Eyob.Foods @sofi.t10",
    tags: ["myg", "foodphotography", "መረባ", "friends", "Mekelle"]
  },
  {
    id: 39,
    title: "Special Celebrations & Pizza Orders",
    category: "Restaurant & Lounge",
    videoUrl: "https://www.tiktok.com/@friends_garden/video/732159882137488645", // Fixed missing prefix truncation from original code
    videoId: "7532159882137488645",
    videoImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    description: "Perfect moments, proposals, and dynamic crisp friendship setups with specialized pizza orders at Friends Cafe.",
    tags: ["friends", "garden", "መረባ", "cafe", "pizza", "propose", "friendship"]
  },
  {
    id: 40,
    title: "Fasika (Easter) Event Highlight",
    category: "Restaurant & Lounge",
    videoUrl: "https://www.tiktok.com/@friends_garden/video/7494683919942470967",
    videoId: "7494683919942470967",
    videoImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=600",
    description: "መረባ ፍሬንድስ ጋርደን ፋሲካ 📍ኣድራሻ -መቐለ 17ቀበሌ, ፊትለፊት ብሉበርድ ናይ ቀደም \"ገዛ ተጋሩ\" ዝነበረ 📞 @sofi.t10",
    tags: ["videography", "ፋሲካ", "friends", "food", "foodphotography", "መረባ", "Mekelle", "መቀለ"]
  },
  {
    id: 41,
    title: "Vibe Creatives Down Payment Skit",
    category: "Photography & Media",
    videoUrl: "https://www.tiktok.com/@vibe_creatives/video/7551807487293345035",
    videoId: "7551807487293345035",
    videoImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600",
    description: "ቀብዲምኽፋል ዝድብረኩም ሰባት ግን ታይ ኢኹም ኾይንኹም???!!!! vibe creative 📌 ኣድራሻ- ሓዉዜን ኣደባባይ ጎኒ መቐለ ፖስታ ቤት",
    tags: ["graphicdesigner", "ethiopian_tik_tok", "vibe", "advertising", "tigraytiktok"]
  },
  {
    id: 42,
    title: "First Advertising Company Breakdown",
    category: "Photography & Media",
    videoUrl: "https://www.tiktok.com/@vibe_creatives/video/7547001508563291448",
    videoId: "7547001508563291448",
    videoImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    description: "ኣብ ኢትዮጵያ ናይ መጀመርያ Advertising Company መን ምኻኑ ትፈልጡ ዶ??? vibe creative 📌 ኣድራሻ- ሓዉዜን ኣደባባይ ጎኒ መቐለ ፖስታ ቤት",
    tags: ["graphicdesigner", "ethiopian_tik_tok", "vibe", "advertising", "tigraytiktok"]
  }
];
export const btsItems = [
  {
    id: 1,
    title: "Lighting Setup at Kabun Coffee",
    category: "Behind The Scenes", // Maps directly to category label
    videoId: "7638710013808102663", // Plays dynamically on click
    videoImage: "https://i.pinimg.com/1200x/47/1f/33/471f33d9a7d90ba9b777d73d5e86c944.jpg", // Custom cover
    description: "Configuring a softbox setup to capture crisp espresso pours and highlight the custom wooden counter details at Kabun.",
    tags: ["GearStack", "Mekelle", "Lighting"]
  },
  {
    id: 2,
    title: "Cake Close-ups at Yummy Bakery",
    category: "Behind The Scenes",
    videoId: "7630088036012936466",
    videoImage: "https://i.pinimg.com/736x/08/65/39/086539e23066740db283c605a836896b.jpg",
    description: "Using high-speed 120fps macro lens techniques to capture slow-motion frosting drips and golden pastry cuts.",
    tags: ["Macro", "Production", "Bakery"]
  },
  {
    id: 3,
    title: "Gimbal Rigging for Café Promos",
    category: "Camera Movement",
    videoId: "7568473135071169848",
    videoImage: "https://i.pinimg.com/736x/68/81/0d/68810d9452b4437e08ddd384a19627b6.jpg",
    description: "Balancing the Sony FX3 on a 3-axis stabilizer grid to achieve smooth, sweeping cinematic walkthrough transitions during busy morning hours.",
    tags: ["GimbalSetup", "SonyFX3", "CafeVibes"]
  },
  {
    id: 4,
    title: "Color Grading the Holiday Showcase",
    category: "Post-Production",
    videoId: "7627347484167245063",
    videoImage: "https://i.pinimg.com/736x/43/96/0c/43960c76f1186a7fc96f4dc5b00f1b54.jpg",
    description: "A look inside the editing suite matching SLOG3 color profiles to give the Easter holiday bakery campaign a warm, festive tone.",
    tags: ["DaVinciResolve", "ColorGrading", "EditingSuite"]
  },
  {
    id: 5,
    title: "Sound Design for Espresso Beats",
    category: "Audio Engineering",
    videoId: "7601743112624524552",
    videoImage: "https://i.pinimg.com/1200x/40/14/15/401415e37229b21cd738f6121f7a6613.jpg",
    description: "Layering crisp foley audio—the click of the portafilter, the steam wand hiss, and milk texturing—to match the rhythmic visual edit.",
    tags: ["FoleySound", "AudioDesign", "PrecisionEdit"]
  },
  {
    id: 6,
    title: "Dabona Juice Fluid Dynamics",
    category: "Commercial Motion",
    videoId: "7630042462320364821",
    videoImage: "https://i.pinimg.com/1200x/80/fa/eb/80faeb090abb3b73bf239bad58922048.jpg",
    description: "Behind the camera setup for tracking thick, vibrant avocado and protein shake pours against clean studio lighting arrays.",
    tags: ["FluidMotion", "JuicePromo", "StudioLighting"]
  },
  {
    id: 7,
    title: "Aesthetic Frame Composition",
    category: "Direction",
    videoId: "7572433040106900748",
    videoImage: "https://i.pinimg.com/1200x/05/92/f4/0592f4406f3d625151dc99d93ff46ad2.jpg",
    description: "Mapping out the rule of thirds and geometric symmetries to display coffee and custom sweet combos with a minimal, high-end editorial feel.",
    tags: ["Framing", "ArtDirection", "MinimalStyle"]
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
    value: "Sofitesfu4@gmail.com",
    link: "Sofitesfu4@gmail.com",
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
    link: "https://www.instagram.com/sofitesfu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
    link: "",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "",
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
