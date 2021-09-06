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
} from "@heroicons/react/outline"

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
		quotes: "Never trust an atom, they make up everything",
		icon: BeakerIcon,
		introduction:
			"Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences (such as chemistry and physics), along with life sciences (such as biology, microbiology and biochemistry) plus mathematics and economics to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products.",
		skills: [
			{
				name: "Communication",
				textColor: "text-yellow-700",
				bgColor: "bg-yellow-50",
			},
			{
				name: "Dedication",
				textColor: "text-indigo-700",
				bgColor: "bg-indigo-50",
			},
			{
				name: "Teamwork",
				textColor: "text-red-700",
				bgColor: "bg-red-50",
			},
			{
				name: "Effort",
				textColor: "text-blue-700",
				bgColor: "bg-blue-50",
			},
		],
		careerPaths: [
			{
				title: "Mining Engineer",
				icon: ClockIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Food Engineer",
				icon: BadgeCheckIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Petroleum Engineer",
				icon: UsersIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Pharmaceutical Engineer",
				icon: CashIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Consulting Engineer",
				icon: ReceiptRefundIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
			{
				title: "Water Treatment Engineer",
				icon: AcademicCapIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
		],
	},
	{
		id: "biotechnology",
		name: "Biotechnoloyy",
		quotes: "Never trust an atom, they make up everything",
		icon: HeartIcon,
		introduction:
			"Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences (such as chemistry and physics), along with life sciences (such as biology, microbiology and biochemistry) plus mathematics and economics to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products.",
		skills: [
			{
				name: "Ngentod",
				textColor: "text-yellow-700",
				bgColor: "bg-yellow-50",
			},
			{
				name: "Memek",
				textColor: "text-indigo-700",
				bgColor: "bg-indigo-50",
			},
			{
				name: "Anjing",
				textColor: "text-red-700",
				bgColor: "bg-red-50",
			},
			{
				name: "Lonte",
				textColor: "text-blue-700",
				bgColor: "bg-blue-50",
			},
		],
		careerPaths: [
			{
				title: "Biomedical Engineer",
				icon: ClockIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Biochemist",
				icon: BadgeCheckIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Medical Scientist",
				icon: UsersIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Microbiologist",
				icon: CashIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Process Development Scientist",
				icon: ReceiptRefundIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
			{
				title: "Biological",
				icon: AcademicCapIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
		],
	},
	{
		id: "business-economics",
		name: "Business and Economics",
		quotes: "Never trust an atom, they make up everything",
		icon: CurrencyDollarIcon,
		introduction:
			"Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences (such as chemistry and physics), along with life sciences (such as biology, microbiology and biochemistry) plus mathematics and economics to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products.",
		skills: [
			{
				name: "Ngentod",
				textColor: "text-yellow-700",
				bgColor: "bg-yellow-50",
			},
			{
				name: "Memek",
				textColor: "text-indigo-700",
				bgColor: "bg-indigo-50",
			},
			{
				name: "Anjing",
				textColor: "text-red-700",
				bgColor: "bg-red-50",
			},
			{
				name: "Lonte",
				textColor: "text-blue-700",
				bgColor: "bg-blue-50",
			},
		],
		careerPaths: [
			{
				title: "Financial advisor",
				icon: ClockIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Consultant business",
				icon: BadgeCheckIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Accountant",
				icon: UsersIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Brand strategist",
				icon: CashIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Commodity trader",
				icon: ReceiptRefundIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
			{
				title: "Stock analyst",
				icon: AcademicCapIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
		],
	},
	{
		id: "computer-science",
		name: "Computer Science",
		quotes: "Never trust an atom, they make up everything",
		icon: CodeIcon,
		introduction:
			"Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences (such as chemistry and physics), along with life sciences (such as biology, microbiology and biochemistry) plus mathematics and economics to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products.",
		skills: [
			{
				name: "Ngentod",
				textColor: "text-yellow-700",
				bgColor: "bg-yellow-50",
			},
			{
				name: "Memek",
				textColor: "text-indigo-700",
				bgColor: "bg-indigo-50",
			},
			{
				name: "Anjing",
				textColor: "text-red-700",
				bgColor: "bg-red-50",
			},
			{
				name: "Lonte",
				textColor: "text-blue-700",
				bgColor: "bg-blue-50",
			},
		],
		careerPaths: [
			{
				title: "Data Scientist",
				icon: ClockIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Software Tester",
				icon: BadgeCheckIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Web Developer",
				icon: UsersIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Systems Analyst",
				icon: CashIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Business Analyst",
				icon: ReceiptRefundIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
			{
				title: "Product Manager",
				icon: AcademicCapIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
		],
	},
	{
		id: "electrical-engineering",
		name: "Electrical Engineering",
		quotes: "Never trust an atom, they make up everything",
		icon: LightningBoltIcon,
		introduction:
			"Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences (such as chemistry and physics), along with life sciences (such as biology, microbiology and biochemistry) plus mathematics and economics to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products.",
		skills: [
			{
				name: "Ngentod",
				textColor: "text-yellow-700",
				bgColor: "bg-yellow-50",
			},
			{
				name: "Memek",
				textColor: "text-indigo-700",
				bgColor: "bg-indigo-50",
			},
			{
				name: "Anjing",
				textColor: "text-red-700",
				bgColor: "bg-red-50",
			},
			{
				name: "Lonte",
				textColor: "text-blue-700",
				bgColor: "bg-blue-50",
			},
		],
		careerPaths: [
			{
				title: "Computer engineer",
				icon: ClockIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Biomedical engineer",
				icon: BadgeCheckIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Engineering management",
				icon: UsersIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Communications",
				icon: CashIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Energy resources",
				icon: ReceiptRefundIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
			{
				title: "Advanced automation",
				icon: AcademicCapIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
		],
	},
	{
		id: "geography",
		name: "Geography",
		quotes: "Never trust an atom, they make up everything",
		icon: GlobeIcon,
		introduction:
			"Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences (such as chemistry and physics), along with life sciences (such as biology, microbiology and biochemistry) plus mathematics and economics to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products.",
		skills: [
			{
				name: "Ngentod",
				textColor: "text-yellow-700",
				bgColor: "bg-yellow-50",
			},
			{
				name: "Memek",
				textColor: "text-indigo-700",
				bgColor: "bg-indigo-50",
			},
			{
				name: "Anjing",
				textColor: "text-red-700",
				bgColor: "bg-red-50",
			},
			{
				name: "Lonte",
				textColor: "text-blue-700",
				bgColor: "bg-blue-50",
			},
		],
		careerPaths: [
			{
				title: "Cartographer",
				icon: ClockIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Climatologist",
				icon: BadgeCheckIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Demographer",
				icon: UsersIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "GIS Specialist",
				icon: CashIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Hydrographer",
				icon: ReceiptRefundIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
			{
				title: "Urban Planner",
				icon: AcademicCapIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
		],
	},
	{
		id: "hospitality-tourism",
		name: "Hospitality and Tourism",
		quotes: "Never trust an atom, they make up everything",
		icon: TruckIcon,
		introduction:
			"Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences (such as chemistry and physics), along with life sciences (such as biology, microbiology and biochemistry) plus mathematics and economics to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products.",
		skills: [
			{
				name: "Ngentod",
				textColor: "text-yellow-700",
				bgColor: "bg-yellow-50",
			},
			{
				name: "Memek",
				textColor: "text-indigo-700",
				bgColor: "bg-indigo-50",
			},
			{
				name: "Anjing",
				textColor: "text-red-700",
				bgColor: "bg-red-50",
			},
			{
				name: "Lonte",
				textColor: "text-blue-700",
				bgColor: "bg-blue-50",
			},
		],
		careerPaths: [
			{
				title: "Chef",
				icon: ClockIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Event Manager",
				icon: BadgeCheckIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Restaurant Manager",
				icon: UsersIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Air Cabin Crew",
				icon: CashIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Tour Manager",
				icon: ReceiptRefundIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
			{
				title: "Hotel Manager",
				icon: AcademicCapIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
		],
	},
	{
		id: "law-school",
		name: "Law School",
		quotes: "Never trust an atom, they make up everything",
		icon: BriefcaseIcon,
		introduction:
			"Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences (such as chemistry and physics), along with life sciences (such as biology, microbiology and biochemistry) plus mathematics and economics to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products.",
		skills: [
			{
				name: "Ngentod",
				textColor: "text-yellow-700",
				bgColor: "bg-yellow-50",
			},
			{
				name: "Memek",
				textColor: "text-indigo-700",
				bgColor: "bg-indigo-50",
			},
			{
				name: "Anjing",
				textColor: "text-red-700",
				bgColor: "bg-red-50",
			},
			{
				name: "Lonte",
				textColor: "text-blue-700",
				bgColor: "bg-blue-50",
			},
		],
		careerPaths: [
			{
				title: "Lawyer",
				icon: ClockIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Attorney",
				icon: BadgeCheckIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Law firms",
				icon: UsersIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Judical clerkships",
				icon: CashIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Law teaching",
				icon: ReceiptRefundIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
			{
				title: "Judge",
				icon: AcademicCapIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
		],
	},
	{
		id: "medical-school",
		name: "Medical School",
		quotes: "Never trust an atom, they make up everything",
		icon: HomeIcon,
		introduction:
			"Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences (such as chemistry and physics), along with life sciences (such as biology, microbiology and biochemistry) plus mathematics and economics to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products.",
		skills: [
			{
				name: "Ngentod",
				textColor: "text-yellow-700",
				bgColor: "bg-yellow-50",
			},
			{
				name: "Memek",
				textColor: "text-indigo-700",
				bgColor: "bg-indigo-50",
			},
			{
				name: "Anjing",
				textColor: "text-red-700",
				bgColor: "bg-red-50",
			},
			{
				name: "Lonte",
				textColor: "text-blue-700",
				bgColor: "bg-blue-50",
			},
		],
		careerPaths: [
			{
				title: "Cardiologist",
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
				title: "Hospital doctor",
				icon: UsersIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Nurse",
				icon: CashIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Surgeon",
				icon: ReceiptRefundIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
			{
				title: "Neurologist",
				icon: AcademicCapIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
		],
	},
	{
		id: "visual-design",
		name: "Visual Design",
		quotes: "Never trust an atom, they make up everything",
		icon: FilmIcon,
		introduction:
			"Chemical engineering is a multi-disciplinary branch of engineering that combines natural and experimental sciences (such as chemistry and physics), along with life sciences (such as biology, microbiology and biochemistry) plus mathematics and economics to design, develop, produce, transform, transport, operate and manage the industrial processes that turn raw materials into valuable products.",
		skills: [
			{
				name: "Ngentod",
				textColor: "text-yellow-700",
				bgColor: "bg-yellow-50",
			},
			{
				name: "Memek",
				textColor: "text-indigo-700",
				bgColor: "bg-indigo-50",
			},
			{
				name: "Anjing",
				textColor: "text-red-700",
				bgColor: "bg-red-50",
			},
			{
				name: "Lonte",
				textColor: "text-blue-700",
				bgColor: "bg-blue-50",
			},
		],
		careerPaths: [
			{
				name: "Graphic designer",
				icon: ClockIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "Fashion designer",
				icon: BadgeCheckIcon,
				iconForeground: "text-purple-700",
				iconBackground: "bg-purple-50",
			},
			{
				title: "UI/UX designer",
				icon: UsersIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "3D illustrator",
				icon: CashIcon,
				iconForeground: "text-yellow-700",
				iconBackground: "bg-yellow-50",
			},
			{
				title: "Concept artist",
				icon: ReceiptRefundIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
			{
				title: "Animation assistant",
				icon: AcademicCapIcon,
				iconForeground: "text-indigo-700",
				iconBackground: "bg-indigo-50",
			},
		],
	},
]
