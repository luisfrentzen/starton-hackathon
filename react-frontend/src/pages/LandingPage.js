
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function LandingPage() {
	return (
		<div className='bg-white'>
			<Navbar />

			<main className='bg-gray-100'>
				{/* Hero section */}
				<div className='relative h-screen'>
					<div className='w-full h-full bg-gradient-to-tr from-secondary-400 via-secondary-200 to-secondary-100 sm:px-6 lg:px-8  h-5/6'>
						<div className='relative h-full'>
							<div className='px-8 h-5/6 flex flex-col items-center justify-center'>
								<h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl'>
									<span className='block max-w-screen-md bg-gradient-to-br from-white to-blue-300 bg-clip-text text-transparent'>
										Take control of your customer support
									</span>
								</h1>
								<p className='mt-8 max-w-lg mx-auto text-center text-xl lg:text-2xl text-blue-50 sm:max-w-4xl'>
									Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
									Elit sunt amet fugiat veniam occaecat fugiat aliqua.
								</p>
								<div className='relative z-20 w-full mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
									<Link
										to='/take-test'
										className='flex items-center justify-center px-4 py-3 border border-transparent font-bold text-lg sm:text-xl font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-accent-100 to-accent-200 hover:from-accent-200 hover:to-accent-300 sm:py-3.5 sm:px-12'
									>
										Try Now
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='absolute w-full bottom-0 h-40 md:h-auto'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
							<path
								fill='#F3F4F6'
								fill-opacity='1'
								d='M0,160L60,165.3C120,171,240,181,360,176C480,171,600,149,720,138.7C840,128,960,128,1080,138.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
							></path>
						</svg>
						<div className='bg-gray-100 h-full'></div>
					</div>
				</div>

        {/* Other Features */}
        <div className="text-center relative z-10">
          <div className="sm:leading-snug text-3xl sm:text-4xl font-bold text-secondary-200 max-w-xs mx-auto pb-8">
            <h1>See for yourself</h1>
          </div>
          <div className="h-1 bg-accent-200 w-24 mx-auto rounded-full"></div>
        </div>

				{/* Alternating Feature Sections */}
				<div className='relative pt-16 pb-12 overflow-hidden'>
					<div aria-hidden='true' className='absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100' />
					<div className='relative'>
						<div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
							<div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
								<div className='mt-6'>
									<h2 className='text-3xl sm:text-5xl font-bold tracking-tight text-gray-700'>
										Explore majors
									</h2>
									<p className='mt-4 sm:mt-8 text-lg sm:text-xl text-gray-500'>
										Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus
										lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium
										pharetra at. Lectus viverra dui tellus ornare pharetra.
									</p>
									<div className='mt-6 sm:mt-10'>
										<Link
											to='/majors'
											className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-accent-100 to-accent-200 hover:from-accent-200 hover:to-accent-300'
										>
											Read about Majors
										</Link>
									</div>
								</div>
							</div>
							<div className='mt-12 sm:mt-16 lg:mt-0'>
								<div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
									<img
										className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
										src='/assets/ch.jpeg'
										alt='CH luv RR'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center'>
					<div className='h-20 w-1 bg-secondary-400 rounded-full'></div>
					<div className='max-w-sm mt-8 px-8 pb-20 mx-auto sm:max-w-none sm:flex sm:justify-center'>
						<Link
							to='/take-test'
							className='flex items-center justify-center px-4 py-3 border border-transparent font-bold text-lg sm:text-xl font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-accent-100 to-accent-200 hover:from-accent-200 hover:to-accent-300 sm:py-4 sm:px-12 shadow-md'
						>
							Take the Test
						</Link>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
  }