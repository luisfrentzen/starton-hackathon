import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const footerNavigation = {
	main: [
		{ name: 'About', href: '#' },
		{ name: 'Blog', href: '#' },
		{ name: 'Jobs', href: '#' },
		{ name: 'Press', href: '#' },
		{ name: 'Accessibility', href: '#' },
		{ name: 'Partners', href: '#' },
	],
	social: [
		{
			name: 'Facebook',
			href: '#',
			icon: (props) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'Instagram',
			href: '#',
			icon: (props) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'Twitter',
			href: '#',
			icon: (props) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
				</svg>
			),
		},
		{
			name: 'GitHub',
			href: '#',
			icon: (props) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
	],
}

export default function LandingPage() {
  const history = useHistory()

	return (
		<div className='bg-white'>
			<header>
				<Navbar />
			</header>

			<main className='bg-gray-100'>
				{/* Hero section */}
				<div className='relative h-screen'>
					<div className='w-full h-full bg-gradient-to-tr from-secondary-400 via-secondary-200 to-secondary-100 sm:px-6 lg:px-8  h-5/6'>
						<div className='relative h-full'>
              {/* pt-16 pb-24 sm:px-10 sm:pt-24 sm:pb-32 xl:pt-20 xl:pb-64 2xl:pt-60 2xl:pb-80 lg:px-12 */}
							<div className='px-8 h-5/6 flex flex-col items-center justify-center'>
								<h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl'>
									<span className='block text-white'>Take control of your</span>
									<span className='block text-blue-200'>customer support</span>
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
				<div className='text-center relative z-10'>
					<div className='sm:leading-snug text-3xl sm:text-4xl font-bold text-secondary-400 max-w-xs mx-auto pb-8'>
						<h1>What else you can do here?</h1>
					</div>
					<div className='h-1 bg-accent-200 w-24 mx-auto rounded-full'></div>
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
										<a
											href='#'
											className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-accent-100 to-accent-200 hover:from-accent-200 hover:to-accent-300'
										>
											Read about Majors
										</a>
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

			<footer className='bg-gray-900'>
				<div className='mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
					<nav className='-mx-5 -my-2 flex flex-wrap justify-center' aria-label='Footer'>
						{footerNavigation.main.map((item) => (
							<div key={item.name} className='px-5 py-2'>
								<a href={item.href} className='text-base text-gray-400 hover:text-gray-300'>
									{item.name}
								</a>
							</div>
						))}
					</nav>
					<div className='mt-8 flex justify-center space-x-6'>
						{footerNavigation.social.map((item) => (
							<a key={item.name} href={item.href} className='text-gray-400 hover:text-gray-300'>
								<span className='sr-only'>{item.name}</span>
								<item.icon className='h-6 w-6' aria-hidden='true' />
							</a>
						))}
					</div>
					<p className='mt-8 text-center text-base text-gray-400'>
						&copy; 2021 CHOLARR, Inc. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	)
}
