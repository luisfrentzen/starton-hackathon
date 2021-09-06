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
} from "@heroicons/react/solid";

import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/outline";

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
        name: "Request time off",
        icon: ClockIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Benefits",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Schedule a one-on-one",
        icon: UsersIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Payroll",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Submit an expense",
        icon: ReceiptRefundIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Training",
        icon: AcademicCapIcon,
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
        name: "Request time off",
        icon: ClockIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Benefits",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Schedule a one-on-one",
        icon: UsersIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Payroll",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Submit an expense",
        icon: ReceiptRefundIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Training",
        icon: AcademicCapIcon,
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
        name: "Request time off",
        icon: ClockIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Benefits",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Schedule a one-on-one",
        icon: UsersIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Payroll",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Submit an expense",
        icon: ReceiptRefundIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Training",
        icon: AcademicCapIcon,
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
        name: "Request time off",
        icon: ClockIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Benefits",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Schedule a one-on-one",
        icon: UsersIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Payroll",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Submit an expense",
        icon: ReceiptRefundIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Training",
        icon: AcademicCapIcon,
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
        name: "Request time off",
        icon: ClockIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Benefits",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Schedule a one-on-one",
        icon: UsersIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Payroll",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Submit an expense",
        icon: ReceiptRefundIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Training",
        icon: AcademicCapIcon,
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
        name: "Request time off",
        icon: ClockIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Benefits",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Schedule a one-on-one",
        icon: UsersIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Payroll",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Submit an expense",
        icon: ReceiptRefundIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Training",
        icon: AcademicCapIcon,
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
        name: "Request time off",
        icon: ClockIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Benefits",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Schedule a one-on-one",
        icon: UsersIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Payroll",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Submit an expense",
        icon: ReceiptRefundIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Training",
        icon: AcademicCapIcon,
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
        name: "Request time off",
        icon: ClockIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Benefits",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Schedule a one-on-one",
        icon: UsersIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Payroll",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Submit an expense",
        icon: ReceiptRefundIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Training",
        icon: AcademicCapIcon,
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
        name: "Request time off",
        icon: ClockIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Benefits",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Schedule a one-on-one",
        icon: UsersIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Payroll",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Submit an expense",
        icon: ReceiptRefundIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Training",
        icon: AcademicCapIcon,
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
        name: "Request time off",
        icon: ClockIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Benefits",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
      },
      {
        title: "Schedule a one-on-one",
        icon: UsersIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Payroll",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
      },
      {
        title: "Submit an expense",
        icon: ReceiptRefundIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
      {
        title: "Training",
        icon: AcademicCapIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
      },
    ],
  },
];
