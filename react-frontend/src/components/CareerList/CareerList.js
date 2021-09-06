import {
	AcademicCapIcon,
	BadgeCheckIcon,
	CashIcon,
	ClockIcon,
	ReceiptRefundIcon,
	UsersIcon,
} from "@heroicons/react/outline"

const careers = [
	{
		title: "Request time off",
		icon: ClockIcon,
		iconForeground: "text-yellow-700",
		iconBackground: "bg-yellow-50",
		description: "lorem lorem lorem",
	},
	{
		title: "Benefits",
		icon: BadgeCheckIcon,
		iconForeground: "text-purple-700",
		iconBackground: "bg-purple-50",
		description: "lorem lorem lorem",
	},
	{
		title: "Schedule a one-on-one",
		icon: UsersIcon,
		iconForeground: "text-indigo-700",
		iconBackground: "bg-indigo-50",
		description: "lorem lorem lorem",
	},
	{
		title: "Payroll",
		icon: CashIcon,
		iconForeground: "text-yellow-700",
		iconBackground: "bg-yellow-50",
		description: "lorem lorem lorem",
	},
	{
		title: "Submit an expense",
		icon: ReceiptRefundIcon,
		iconForeground: "text-purple-700",
		iconBackground: "bg-purple-50",
		description: "lorem lorem lorem",
	},
	{
		title: "Training",
		icon: AcademicCapIcon,
		iconForeground: "text-indigo-700",
		iconBackground: "bg-indigo-50",
		description: "lorem lorem lorem",
	},
]

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

export default function CareerList() {
	return (
		<div className='w-full rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
			{careers.map((career, careerIdx) => (
				<div
					key={career.title}
					className={classNames(
						careerIdx === 0
							? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
							: "",
						careerIdx === 1 ? "sm:rounded-tr-lg" : "",
						careerIdx === careers.length - 2 ? "sm:rounded-bl-lg" : "",
						careerIdx === careers.length - 1
							? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
							: "",
						"relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
					)}
				>
					<div className='flex items-center'>
						<span
							className={classNames(
								career.iconBackground,
								career.iconForeground,
								"rounded-lg inline-flex p-3 ring-4 ring-white"
							)}
						>
							<career.icon className='h-6 w-6' aria-hidden='true' />
						</span>
						<div className='text-md font-medium ml-4'>{career.title}</div>
					</div>
					<div className='mt-6 text-sm text-gray-500'>{career.description}</div>
				</div>
			))}
		</div>
	)
}
