import {
	BeakerIcon,
	BriefcaseIcon,
	CodeIcon,
	CurrencyDollarIcon,
	FilmIcon,
	GlobeIcon,
	HeartIcon,
	HomeIcon,
	LightningBoltIcon,
	TruckIcon,
} from "@heroicons/react/solid"

import {
	AcademicCapIcon,
	BadgeCheckIcon,
	CashIcon,
	ClockIcon,
	ReceiptRefundIcon,
	UsersIcon,
} from "@heroicons/react/outline"

/*
		id = url nya
		name = nama major
		quotes= quotes
		iamge = nama imagenya
		introduction = introduction majornya
	*/
export const majorData = [
  {
    id: "chemical-engineering",
    name: "Chemical Engineering",
    quotes: "Master the infinite possibility of matters",
    icon: BeakerIcon,
    introduction:
      "Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences. With the intent to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products. ",
    skills: [
      {
        name: "Problem Solving",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
      },
      {
        name: "Theoritical Thinking",
        textColor: "text-indigo-700",
        bgColor: "bg-indigo-50",
      },
      {
        name: "Natural Science",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
      },
    ],
    careerPaths: [
      {
        title: "Mining Engineer",
        icon: ClockIcon,
        description: "Engineer mineral mining processes.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Food Engineer",
        icon: BadgeCheckIcon,
        description: "Engineer and test new flavour or foods.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Petroleum Engineer",
        icon: UsersIcon,
        description: "Engineer newer and better solution for gas.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Pharmaceutical Engineer",
        icon: CashIcon,
        description: "Makes medicine to cure or treat diseases.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Consulting Engineer",
        icon: ReceiptRefundIcon,
        description: "Tell people how to do their job right at the field.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Water Treatment Engineer",
        icon: AcademicCapIcon,
        description:
          "Bring newer and better solution for clean water treatment and management.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
  {
    id: "biotechnology",
    name: "Biotechnology",
    quotes: "Create a whole new species on your own? Why not",
    icon: HeartIcon,
    introduction:
      "Biotechnology is a field that utilizes of modify biological systems, living organism or its parts to develop different products.",
    skills: [
      {
        name: "Theoritical Thinking",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
      },
      {
        name: "Critical Thinking",
        textColor: "text-indigo-700",
        bgColor: "bg-indigo-50",
      },
      {
        name: "Natural Science",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
      },
      {
        name: "Problem Solving",
        textColor: "text-blue-700",
        bgColor: "bg-blue-50",
      },
    ],
    careerPaths: [
      {
        title: "Biomedical Engineer",
        icon: ClockIcon,
		description: "Develop new devices and equipment for improving human health.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Biochemist",
        icon: BadgeCheckIcon,
		description: "Study the chemical and physical principles of living things and of biological processes.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Medical Scientist",
        icon: UsersIcon,
		description: "Conduct studies to investigate human diseases, and methods to prevent and treat them.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Microbiologist",
        icon: CashIcon,
		description: "A scientist who studies microscopic life forms and processes.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Process Development Scientist",
        icon: ReceiptRefundIcon,
		description: "Developing ways to manufacture products and monitor existing processes and products.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Biological",
        icon: AcademicCapIcon,
		description: "Study organisms and plant life to learn how they interact with other organisms and their environment.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
  {
    id: "business-economics",
    name: "Business and Economics",
    quotes: "They would tell you to invest in bitcoin",
    icon: CurrencyDollarIcon,
    introduction:
      "Business and Economics studies and analyze how business and economical system works. Such field seek those understanding in order to maintain a stable system and process in order to make continuous profit effectively and efficiently.",
    skills: [
      {
        name: "Public Speaking",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
      },
      {
        name: "Critical Thinking",
        textColor: "text-indigo-700",
        bgColor: "bg-indigo-50",
      },
      {
        name: "Persuasive Approach",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
      },
      {
        name: "Data Analyzing",
        textColor: "text-blue-700",
        bgColor: "bg-blue-50",
      },
    ],
    careerPaths: [
      {
        title: "Financial advisor",
        icon: ClockIcon,
		description: "Provide clients with specialist advice on how to manage their money. ",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Consultant business",
        icon: BadgeCheckIcon,
		description: "Provides expert advice, analysis and solutions.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Accountant",
        icon: UsersIcon,
		description: "Analyzing, collecting, compiling, and evaluating financial data.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Brand strategist",
        icon: CashIcon,
		description: "Develop marketing strategies that raise brand and customer growth, and generate revenue.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Commodity trader",
        icon: ReceiptRefundIcon,
		description: "Focuses on investing in physical substances like gold, or agricultural products.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Stock analyst",
        icon: AcademicCapIcon,
		description: "Financial analyst who makes predictions about the performance of the stock market.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
  {
    id: "computer-science",
    name: "Computer Science",
    quotes: "You use their products everyday, everytime",
    icon: CodeIcon,
    introduction:
      "Computer Science studies the art of solving moderate to highly complex problems by composing an application or software to help simplify human activities.",
    skills: [
      {
        name: "Problem Solving",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
      },
      {
        name: "Mathematics",
        textColor: "text-indigo-700",
        bgColor: "bg-indigo-50",
      },
      {
        name: "Logical Thinking",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
      },
      {
        name: "Critical Thinking",
        textColor: "text-blue-700",
        bgColor: "bg-blue-50",
      },
    ],
    careerPaths: [
      {
        title: "Data Scientist",
        icon: ClockIcon,
		description: "Analyze, process, and model data then interpret the results to create actionable plans.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Software Tester",
        icon: BadgeCheckIcon,
		description: "Involved in the quality assurance stage of software development and deployment.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Web Developer",
        icon: UsersIcon,
		description: "Design a site layout, producing a visually appealing home page and user-friendly interface.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Systems Analyst",
        icon: CashIcon,
		description: "Professional who specializes in analyzing, designing and implementing information systems.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Business Analyst",
        icon: ReceiptRefundIcon,
		description: "Analyzes and documents the market environment, processes, or systems of businesses.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Product Manager",
        icon: AcademicCapIcon,
		description: "Identifies the customer need and the larger business objectives.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
  {
    id: "electrical-engineering",
    name: "Electrical Engineering",
    quotes: "Piss them to get back to stone age",
    icon: LightningBoltIcon,
    introduction:
      "Electrical Engineering seeks to design, maintain and create complex electrical system and structure to support human daily activities.",
    skills: [
      {
        name: "Problem Solving",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
      },
      {
        name: "Schematics",
        textColor: "text-indigo-700",
        bgColor: "bg-indigo-50",
      },
      {
        name: "Theoritical Thinking",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
      },
    ],
    careerPaths: [
      {
        title: "Computer engineer",
        icon: ClockIcon,
		description: "Evaluate, design, and maintain computer hardware and software systems.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Biomedical engineer",
        icon: BadgeCheckIcon,
		description: "Design concepts to medicine and biology for healthcare purposes.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Engineering management",
        icon: UsersIcon,
		description: "To coach, mentor and motivate technical professionals.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Communications",
        icon: CashIcon,
		description: "Design and construct the transmitters, receivers, and infrastructure.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Energy resources",
        icon: ReceiptRefundIcon,
		description: "Concerned with the production, transformation, and impacts of energy resources.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Advanced automation",
        icon: AcademicCapIcon,
		description: "Identify opportunities for automation within software processes.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
  {
    id: "geography",
    name: "Geography",
    quotes: "They're studying rocks",
    icon: GlobeIcon,
    introduction:
      "Geography studies the way the earth moves and transform in order to learn more about the giant rock that we live on, its history, future and present situation in order to preserve human-life on earth.",
    skills: [
      {
        name: "Natural Science",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
      },
      {
        name: "Theoritical Thinking",
        textColor: "text-indigo-700",
        bgColor: "bg-indigo-50",
      },
      {
        name: "Research",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
      },
    ],
    careerPaths: [
      {
        title: "Cartographer",
        icon: ClockIcon,
		description: "Researching, collecting, storing, evaluating, manipulating data, and designing maps.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Climatologist",
        icon: BadgeCheckIcon,
		description: "Studies weather patterns over a period of time.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Demographer",
        icon: UsersIcon,
		description: "Study the makeup, distribution, and trends of populations.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "GIS Specialist",
        icon: CashIcon,
		description: "Design, develop, and implement systems and databases to access and store geospatial data.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Hydrographer",
        icon: ReceiptRefundIcon,
		description: "Studies data collected by multibeam sonar to generate a 3-D image.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Urban Planner",
        icon: AcademicCapIcon,
		description: "Review site plans submitted by developers.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
  {
    id: "hospitality-tourism",
    name: "Hospitality and Tourism",
    quotes: "They know how to earn money from your smile",
    icon: TruckIcon,
    introduction:
      "Hospitality and Tourism studies on how to manage and run business so that your service or product could delight people. They learn about essential skill to provide excellent services like hotels, resorts or restaurants.",
    skills: [
      {
        name: "Attitude",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
      },
      {
        name: "Dedication",
        textColor: "text-indigo-700",
        bgColor: "bg-indigo-50",
      },
      {
        name: "Communication",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
      },
    ],
    careerPaths: [
      {
        title: "Chef",
        icon: ClockIcon,
		description: "Oversee the daily food preparation at restaurants and other places where food is served.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Event Manager",
        icon: BadgeCheckIcon,
		description: "Plan and organise promotional, business and social events.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Restaurant Manager",
        icon: UsersIcon,
		description: "Responsible for overseeing the daily operations of a restaurant.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Air Cabin Crew",
        icon: CashIcon,
		description: "Welcome passengers and inform passengers of the aircraft about safety procedures.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Tour Manager",
        icon: ReceiptRefundIcon,
		description: "Arranging travel plans, coordinating with venues, managing money, and facilitating media interactions.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Hotel Manager",
        icon: AcademicCapIcon,
		description: "Oversees all of a hotel's daily operation.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
  {
    id: "law-school",
    name: "Law School",
    quotes: "They bring justice over you",
    icon: BriefcaseIcon,
    introduction:
      "This field learns about law philosophies, theories and rules in order to bring justice to people equally. Learn how to deals with complex issues in almost any part of human life, learn how to find the best solution for complex issues.",
    skills: [
      {
        name: "Theoritical Thinking",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
      },
      {
        name: "Critical Thinking",
        textColor: "text-indigo-700",
        bgColor: "bg-indigo-50",
      },
      {
        name: "Determination",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
      },
      {
        name: "Communication Skill",
        textColor: "text-blue-700",
        bgColor: "bg-blue-50",
      },
    ],
    careerPaths: [
      {
        title: "Advertising Lawyer",
        icon: ClockIcon,
		description: "Ensure that product and service ads comply with legal prohibitions against defrauding.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Politician",
        icon: BadgeCheckIcon,
		description: "Represent people, to govern, to address issues that affect people.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Clerk",
        icon: UsersIcon,
		description: "Assist judges by conducting legal research and submitting legal writing.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Cyber Lawyer",
        icon: CashIcon,
		description: "A judge is an appointed or elected magistrate who presides over court proceedings.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Law Teaching",
        icon: ReceiptRefundIcon,
		description: "Provide tutoring and academic counseling to student, and assesses student coursework.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Judge",
        icon: AcademicCapIcon,
		description: "Elected magistrate who presides over court proceedings",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
  {
    id: "medical-school",
    name: "Medical School",
    quotes: "You owe them your live",
    icon: HomeIcon,
    introduction:
      "Medical fields learn about anatomies, techniques and other useful information and knowledge in order to provide better support for any life that happens. They design and learn complex life support techniques used in operation, medicine and healthcare systems.",
    skills: [
      {
        name: "Natural Science",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
      },
      {
        name: "Cognitive Skill",
        textColor: "text-indigo-700",
        bgColor: "bg-indigo-50",
      },
      {
        name: "Precision",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
      },
      {
        name: "Ethics",
        textColor: "text-blue-700",
        bgColor: "bg-blue-50",
      },
    ],
    careerPaths: [
      {
        title: "Cardiologist",
        icon: ClockIcon,
		description: "Diagnose and treat disorders and diseases of the cardiovascular system.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Researcher",
        icon: BadgeCheckIcon,
		description: "Conduct experiments to increase the body of scientific knowledge on topics related to medicine.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Hospital Doctor",
        icon: UsersIcon,
		description: "Diagnose and treat medical conditions, disorders, and diseases.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Nurse",
        icon: CashIcon,
		description: "Provide medical and nursing care to patients in hospital, or in other settings.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Surgeon",
        icon: ReceiptRefundIcon,
		description: "Specialist who performs surgery for a wide range of illnesses.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Neurologist",
        icon: AcademicCapIcon,
		description: "Specialists who diagnose and treat disorders related to nerves of patients.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
  {
    id: "visual-design",
    name: "Visual Design",
    quotes: "Those ads made me bought so many",
    icon: FilmIcon,
    introduction:
      "Visual Design field study about techniques, skills and methods to direct information with creative and unique media in order to earn more recognition beyond their product competitors. They learn about advertising, designs and product branding.",
    skills: [
      {
        name: "Design",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
      },
      {
        name: "Editing",
        textColor: "text-indigo-700",
        bgColor: "bg-indigo-50",
      },
      {
        name: "Psychology",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
      },
      {
        name: "Critical Thinking",
        textColor: "text-blue-700",
        bgColor: "bg-blue-50",
      },
    ],
    careerPaths: [
      {
        name: "Graphic Designer",
        icon: ClockIcon,
		description: "Graphic designers use text and images to communicate information and ideas.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Fashion Designer",
        icon: BadgeCheckIcon,
		description: "Designs and assists with the production of clothing, and identifies trends for a collection.",
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "UI/UX Designer",
        icon: UsersIcon,
		description: "Delivering the best user experience and ensuring customer satisfaction and loyalty.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "3D Illustrator",
        icon: CashIcon,
		description: "Creating 3D animations and graphics.",
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Concept Artist",
        icon: ReceiptRefundIcon,
		description: "Responsible for the style and look of an interface.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Animation Assistant",
        icon: AcademicCapIcon,
		description: "Prepping puppets, setting up puppets for camera tests, to animating entity.",
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
];