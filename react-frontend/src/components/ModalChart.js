import React from "react"
import { majorData } from "../data/MajorData"
import { Link } from "react-router-dom"

const ModalChart = ({ majors, probabilities }) => {
	const getMajorId = (name) => {
		var major = majorData.find((x) => x.name === name)
		return major.id
	}

	return (
		<div className='flex h-60 w-full items-end rounded-lg bg-gray-100 px-5'>
			<div className='flex flex-col-reverse w-1/3 h-full mx-3 items-end'>
				<Link
					to={"/major/" + getMajorId(majors[1])}
					className='flex animate-chart-grow-50 origin-bottom transform hover:scale-105 duration-200 cursor-pointer w-full h-1/2 from-blue-500 to-blue-300 bg-gradient-to-br rounded-t-lg text-white justify-center p-3 text-lg'
				>
					{Math.round(probabilities[1] * 100)}%
				</Link>
				<div className='text-xs text-center w-full mb-2 font-bold capitalize'>
					{majors[1]}
				</div>
			</div>
			<div className='flex flex-col-reverse w-1/3 h-full mx-3 items-end'>
				<Link
					to={"/major/" + getMajorId(majors[0])}
					className='flex animate-chart-grow-75 transform hover:scale-105 duration-200 cursor-pointer w-full h-3/4 from-red-500 to-red-300 bg-gradient-to-br rounded-t-lg text-white justify-center p-3 text-lg'
				>
					{Math.round(probabilities[0] * 100)}%
				</Link>
				<div className='text-xs text-center w-full mb-2 font-bold capitalize'>
					{majors[0]}
				</div>
			</div>
			<div className='flex flex-col-reverse w-1/3 h-full mx-3 items-end'>
				<Link
					to={"/major/" + getMajorId(majors[2])}
					className='flex animate-chart-grow-33 transform hover:scale-105 duration-200 cursor-pointer w-full h-1/3 from-green-500 to-green-300 bg-gradient-to-br rounded-t-lg text-white justify-center p-3 text-lg'
				>
					{Math.round(probabilities[2] * 100)}%
				</Link>
				<div className='text-xs text-center w-full mb-2 font-bold capitalize'>
					{majors[2]}
				</div>
			</div>
		</div>
	)
}

export default ModalChart
