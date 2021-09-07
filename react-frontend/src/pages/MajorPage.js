import React from "react"
import { useParams, Redirect } from "react-router"
import CareerList from "../components/CareerList/CareerList"
import Footer from "../components/Footer"
import MajorGrid from "../components/Major/MajorGrid"
import Navbar from "../components/Navbar"
import { majorData } from "../data/MajorData"

const MajorPage = () => {
	const { name } = useParams()

	const getRandom = (arr, n) => {
		var result = new Array(n),
			len = arr.length,
			taken = new Array(len)
		if (n > len)
			throw new RangeError("getRandom: more elements taken than available")
		while (n--) {
			var x = Math.floor(Math.random() * len)
			result[n] = arr[x in taken ? taken[x] : x]
			taken[x] = --len in taken ? taken[len] : len
		}
		return result
	}

	let selectedMajor = majorData.find((x) => x.id === name)

	let recommendedMajor = getRandom(majorData, 4)

	while (recommendedMajor.includes(selectedMajor)) {
		recommendedMajor = getRandom(majorData, 4)
	}

	if (selectedMajor == null) {
		return <Redirect to='/' />
	}

	return (
		<div>
			<main>
				<Navbar />
				<div className='flex flex-col'>
					<div className='lg:flex relative h-screen pb-28'>
						<div className='w-full lg:w-1/2 flex flex-col items-center justify-center py-8 md:py-12 md:pb-0 lg:py-60'>
							<div>
								<selectedMajor.icon className='h-16 w-auto text-secondary-200'></selectedMajor.icon>
							</div>
							<div className='text-2xl md:text-5xl font-bold text-gray-700'>
								{selectedMajor.name}
							</div>
							<div className='text-md md:text-xl text-gray-500 mt-2 md:mt-4'>
								{selectedMajor.quotes}
							</div>
						</div>
						<div className='w-full pl-10 lg:pl-0 lg:w-1/2 flex flex-col items-start justify-center pr-10 lg:pr-20 py-6 md:py-8 lg:py-56'>
							<div className='bg-white ring-1 ring-opacity-50 p-8 rounded-md ring-gray-300 shadow-md'>
								<div className='text-md md:text-xl lg:text-2xl font-bold text-gray-500'>
									Major Introduction
								</div>
								<div className='text-sm md:text-md lg:text-lg mt-4'>
									{selectedMajor.introduction}
								</div>
								<div className='flex mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3 mt-8'>
									{selectedMajor.skills.map((skill, skillIdx) => (
										<div
											key={skillIdx}
											className={`${skill.textColor} ${skill.bgColor} text-xs lg:text-base py-2 px-4 rounded-full text-center mr-3`}
										>
											{skill.name}
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='absolute inset-0 flex -z-10'>
							<svg
								viewBox='0 0 1440 320'
								className='mt-auto bg-gradient-to-r from-secondary-400 via-secondary-200 to-secondary-100'
							>
								<path
									fill='#FFF'
									d='M0,256L60,250.7C120,245,240,235,360,208C480,181,600,139,720,149.3C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
								></path>
							</svg>
						</div>
					</div>
					<div className='h-30 bg-gradient-to-r from-secondary-400 via-secondary-200 to-secondary-100'></div>
					<div className='flex relative'>
						<div className='w-full px-12 md:px-20 lg:px-40 flex flex-col items-start pt-16 md:pt-28 lg:pt-56 2xl:pt-72'>
							<div className='text-lg md:text-xl lg:text-2xl font-bold text-gray-500 mt-28'>
								Career Path
							</div>
							<div className='mt-5 w-full'>
								<CareerList
									className='capitalize'
									careerPaths={selectedMajor.careerPaths}
								></CareerList>
							</div>
						</div>
						<div className='absolute inset-0 flex -z-10'>
							<svg
								viewBox='0 0 1440 320'
								className='mb-auto bg-gradient-to-r from-secondary-400 via-secondary-200 to-secondary-100'
							>
								<path
									fill='#FFF'
									d='M0,256L60,250.7C120,245,240,235,360,208C480,181,600,139,720,149.3C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
								></path>
							</svg>
						</div>
					</div>
					<div className='flex relative'>
						<div className='w-full px-12 md:px-20 lg:px-40 flex flex-col items-start'>
							<div className='text-lg md:text-xl lg:text-2xl font-bold text-gray-500 mt-28'>
								Explore More
							</div>
							<div className='mt-5 w-full'>
								<ul className='w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-24'>
									{recommendedMajor.map((data) => (
										<MajorGrid key={data.id} data={data} />
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer></Footer>
		</div>
	)
}

export default MajorPage
