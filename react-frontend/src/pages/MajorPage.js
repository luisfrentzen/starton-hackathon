import React from 'react'
import { useParams, Redirect } from 'react-router'
import CareerList from '../components/CareerList/CareerList'
import Navbar from '../components/Navbar'
import { majorData } from '../data/MajorData'

const MajorPage = () => {
	const { name } = useParams()

	let selectedMajor = majorData.find(x => x.id == name)

	if (selectedMajor == null) {
		return <Redirect to='/' />
	}

	return (
		<main>
			<Navbar/>
			<div className='flex flex-col'>
				<div className='flex relative h-screen'>
					<div className='w-1/2 flex flex-col items-center justify-center py-32'>
						<div className='text-5xl font-bold text-gray-700'>{selectedMajor.name}</div>
						<div className='text-xl text-gray-500 mt-4'>"{selectedMajor.quotes}"</div>
						<img
							src={`/assets/${selectedMajor.image}`}
							className='h-80 w-auto mt-10 drop-shadow-lg filter'
						></img>
					</div>
					<div className='w-1/2 flex flex-col items-start justify-start pr-20 py-56'>
						<div className='text-2xl font-bold text-gray-500'>Major Introduction</div>
						<div className='text-lg mt-4'>{selectedMajor.introduction}</div>
						<div className='flex mt-3'>
							{selectedMajor.skills.map((skill, skillIdx) => (
								<div
									className={`${skill.textColor} ${skill.bgColor} py-2 px-4 rounded-full text-center mr-3`}
								>
									{skill.name}
								</div>
							))}
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
					<div className='w-full px-40 flex flex-col items-start pt-56 pb-28'>
						<div className='text-2xl font-bold text-gray-500 mt-28'>Career Path</div>
						<div className='mt-5 w-full'>
							<CareerList></CareerList>
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
			</div>
		</main>
	)
}

export default MajorPage
