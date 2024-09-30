import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
// [I pursued a double degree in computer science and business](/#education)
export const DATA = {
  name: "Django",
  initials: "DJ",
  url: "http://me.djangofreeman.com",
  location: "Hangzhou, China",
  locationLink: "https://www.google.com/maps/place/Hangzhou,+Zhejiang,+China",
  description:
    "I am a frontend engineer, I enjoy exploring new technologies and making friends.",
  summary:
    "In 2016, I embarked on the journey of game development, participating in the creation of numerous games over the years. Currently, I am continuously learning web front-end development techniques and deeply immersing myself in the front-end field, exploring more possibilities.\n2016年，我踏入游戏开发领域，几年间参与开发了多款游戏。如今，我也在不断学习Web前端开发技术，并持续深耕前端领域，探索更多可能性。",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Vue",
    "Nuxt.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Docker",
    "Java",
    "Cocos Creator",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "six.django@gmail.com",
    tel: "+xx",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sixdjango",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/django-deng-8b535a262/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Normal Works Ltd",
      href: "https://normal.works/",
      badges: [],
      location: "Hangzhou, China",
      title: "Software Engineer",
      logoUrl: "/nw.svg",
      start: "December 2021",
      end: "Now",
      description:
        "在这里，我们开展了一系列引人入胜的项目。我们推出了面向消费者的“创作者”社交平台——“小磁场”，同时还打造了面向金融市场的创新产品——Pinvo。",
    }, {
      company: "杭州快驰科技有限公司",
      href: "",
      badges: [],
      location: "San Jose, CA",
      title: "Senior Front-End Engineer",
      logoUrl: "/khy.jpeg",
      start: "October 2020",
      end: "December 2021",
      description:
      "我在快货运项目中，负责了多个关键模块的开发与架构设计。首先，在网络货运平台方面，我使用Vue3搭建了底层架构，并结合Vue2作为子应用框架，通过qiankun搭建了微前端基础架构，尽管由于实现隔离采用了with导致性能有所下降，但这是接入成本的一部分。我还编写了Webpack4插件，实现了子应用的配置化路由，并手动加载子应用；同时，开发了粘性事件系统，用于服务间的通信。此外，我编写了子应用接入能力库“spa”，使得子项目可以一键接入并获得主应用的能力，并开发了主应用的MicroApp组件，实现了子应用的组件化，支持同屏多个子应用的展示。在快货运官网项目中，我使用Nuxt.js进行服务端渲染，开发了高性能的官网，并采用Tailwindcss作为样式开发标准，实现了响应式布局，适配手机和PC双端，同时使用了Animation.css作为动画库。最后，在快货运图传系统中，我使用Vue3作为前端开发框架，NestJS作为后端开发框架，采用Redis作为数据缓存，MySQL作为数据持久化方案，并通过Docker镜像容器进行部署，对接OSS API完成了对文件图片的管理。",
    },{
      company: "边锋老友(杭州)科技有限公司",
      href: "",
      badges: [],
      location: "Hangzhou, China",
      title: "Senior Front-End Engineer",
      logoUrl: "/bf.jpeg",
      start: "June 2018",
      end: "September 2020",
      description:
        "我使用Cocos引擎构建了前端游戏框架，并创新性地实现了热更新功能，通过Vue的MVVM思想优化了游戏架构，提升了组件的灵活性和双向绑定能力。同时，我运用FairyGUI的编程思想，开发了TS注释模式的动态创建组件系统，进一步增强了系统的灵活性。在Flutter混编App（夺多多、小狮子浏览器）项目中，我从零搭建了前端App框架，通过Stream优化了State的管理和局部刷新，并设计了防抖、节流机制以提升App性能。在Vue小程序（彼岸排行）项目中，我选择了uniApp跨平台开发框架，并使用Golang和Gin框架开发了后台服务，利用Redis作为缓存提高了服务端运行效率，并通过Mysql进行持久化操作。",
    }, {
      company: "杭州手中游科技有限公司",
      badges: [],
      href: "Hangzhou, China",
      location: "Remote",
      title: "Lead Software Engineer",
      logoUrl: "/szy.jpeg",
      start: "November 2017",
      end: "June 2018",
      description:
        "作为H5游戏前端负责人，我成功从零搭建了包括大厅、背包、会员、匹配、游戏场景和游戏逻辑在内的所有模块。在技术方面，我基于pureMVC构建了H5游戏前端框架，并通过命令行一键构建项目，显著提升了开发效率。针对复杂列表进行了优化，提升了游戏性能，并采用状态同步策略降低了出错概率，增强了容错性。此外，我通过图形角度方法实现了伪3D效果。在个人成长方面，我提升了团队协作和抗压能力，扩展了前端优化和基础构建发布的视野，并在组件化和模块化方面积累了丰富的实践经验。",
    },
    {
      company: "育谷科技有限公司",
      href: "",
      badges: [],
      location: "Hangzhou, China",
      title: "Game Developer",
      logoUrl: "/yg.jpeg",
      start: "June 2016",
      end: "November 2017",
      description:"作为游戏前端主程，我开发了核心模块，包括原生能力、动态配置、背包、聊天和匹配系统。我通过对象池、9宫格压缩和优化加载流程提升性能，并为美术和策划开发工具，提高团队效率。我的工作提升了组件复用、资源优化和加载速度。"
    },
   
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Kie Ocr",
      href: "http://kieocr.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "AI-based OCR technology can train more accurate OCR models, thereby improving OCR recognition accuracy and precision. This is because AI can process more data and can use machine learning algorithms and deep learning models to automatically optimize OCR models.",
      technologies: [
        "Nuxt.js",
        "Naive Ui",
        "Typescript",
        "MySQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "http://kieocr.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kieocr.png",
      video:
        "",
    },
    {
      title: "Pinvo",
      href: "https://pinvo.ai",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Pinvo is your all-in-one bookkeeping solution that combines AI+Experts to provide you with a real end-to-end bookkeeping solution. Pinvo's AI automates reconciliation, document collection and client communication, whist the expert bookkeepers ensure accuracy and handle the rest.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://pinvo.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pinvo.png",
      video: "",
    },
    {
      title: "小磁场",
      href: "https://xiaocichang.com",
      dates: "December 2021 - September 2022",
      active: true,
      description:
        "为你的作品和粉丝打造, 属于自己的创收俱乐部",
      technologies: [
        "Nuxt.js",
        "Typescript",
        "TailwindCSS",
        "Naive Ui",
      ],
      links: [
        {
          type: "Website",
          href: "https://xiaocichang.com",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/xcc.png",
      video: "",
    },
    {
      title: "快货运",
      href: "https://kuaihuoyun.com",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "快货运提供包括运输管理系统、网络货运管理与监管系统、以及车载定位设备小黑卡等在内的多种软硬件产品。我们的目标是帮助传统物流企业实现数字化转型升级，全面助力物流行业中的货主、货运代理人、物流平台以及司机等各个角色实现全链条的数字化",
      technologies: [
        "Nuxt.js",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Naive Ui",
      ],
      links: [
        {
          type: "Website",
          href: "https://kuaihuoyun.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/khy_website.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
