import Navbar from '../components/Navbar'

export default function ListMajorPage() {
	return (
		<div className='bg-white'>
			<Navbar />

			<main className='relative'>
				<section>
					<div className='text-7xl font-semibold text-gray-500 text-center pt-28 bg-gray-100'>
						<h1>List of Majors</h1>
					</div>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
						<path
							fill='#F3F4F6'
							fill-opacity='1'
							d='M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
						></path>
					</svg>
				</section>
			</main>
		</div>
	)
}
