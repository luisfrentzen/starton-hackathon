import { Fragment, useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login'
import { Menu, Transition } from '@headlessui/react'
import { ReactSession } from 'react-client-session'
import { SearchIcon } from '@heroicons/react/solid'
import { ClockIcon } from '@heroicons/react/outline'

const responseGoogle = (response) => {
	console.log(response)
	console.log(response.profileObj)
}

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Home() {
	ReactSession.setStoreType('localStorage')
	const [user, setUser] = useState(ReactSession.get('user'))
	const [isFocus, setFocus] = useState(false)
	const [history, setHistory] = useState([])
	console.log(ReactSession.get('user'))

	useEffect(() => {
		if (localStorage.getItem('histories') != null) {
			const res = localStorage.getItem('histories')
			setHistory(JSON.parse(res))
      console.log(res)
		}
	}, [])

	const signout = () => {
		ReactSession.set('user', null)
		setUser(null)
	}

	const handleSubmit = (keyword) => {
		const temp = [...history]
    const findIdx = temp.findIndex(x => {
      console.log(x + ' ' + keyword)
      return x === keyword
    })
    console.log(findIdx);
    if(findIdx >= 0){
      temp.splice(findIdx, 1)
    }
    if(temp.length > 15){
      temp.splice(14, 1)
    }
    temp.unshift(keyword)
    localStorage.setItem('histories', JSON.stringify(temp))
    setHistory(temp)

		//cari dah
	}

	return (
		<div className='flex items-center justify-center relative w-screen h-screen'>
			<nav className='absolute top-0 w-full flex justify-end items-center py-2.5 px-4 sm:py-3.5 sm:px-8 space-x-5 font-medium'>
				{!(user && user.name) ? (
					<GoogleLogin
						className='bg-transparent'
						clientId='219487161031-g8f5ark8mt57nd16ar6bnlkm478v5ebo.apps.googleusercontent.com'
						render={(props) => {
							return (
								<button
									type='button'
									className='inline-flex items-center px-4 py-2 border border-gray-400 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-50 bg-opacity-0 hover:bg-opacity-30 focus:outline-none focus:bg-opacity-50'
									onClick={props.onClick}
									disabled={props.disabled}
								>
									<img
										className='-ml-0.5 mr-2 inline-block h-4 w-4 rounded-full'
										src='/assets/google.png'
										alt='CH'
									/>
									Login
								</button>
							)
						}}
						buttonText='Login'
						onSuccess={(response) => {
							ReactSession.set('user', response.profileObj)
							setUser(response.profileObj)
						}}
						onFailure={responseGoogle}
						cookiePolicy={'single_host_origin'}
					/>
				) : (
					<Menu as='div' className='ml-4 relative flex-shrink-0'>
						{({ open }) => (
							<>
								<div>
									<Menu.Button className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600'>
										<span className='sr-only'>Open user menu</span>
										<img className='h-8 w-8 rounded-full' src={user.imageUrl} alt='' />
									</Menu.Button>
								</div>
								<Transition
									show={open}
									as={Fragment}
									enter='transition ease-out duration-100'
									enterFrom='transform opacity-0 scale-95'
									enterTo='transform opacity-100 scale-100'
									leave='transition ease-in duration-75'
									leaveFrom='transform opacity-100 scale-100'
									leaveTo='transform opacity-0 scale-95'
								>
									<Menu.Items
										static
										className='origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
									>
										<Menu.Item>
											<p className='text-base text-gray-700 py-2 px-4 font-bold flex items-start border-b border-gray-300 mb-2'>
												<img className='mr-3 h-8 w-8 rounded-full' src={user.imageUrl} alt='' />
												<span className='mt-0.5'>{user.name}</span>
											</p>
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active ? 'bg-gray-100' : '',
														'block px-4 py-2 text-sm text-gray-700'
													)}
												>
													Settings
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											<button
												className='w-full flex font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
												onClick={signout}
											>
												Sign out
											</button>
										</Menu.Item>
									</Menu.Items>
								</Transition>
							</>
						)}
					</Menu>
				)}
			</nav>
			<div className='w-full max-w-xl pb-10'>
				<div className='flex items-center justify-center'>
					<a href='https://instagram.com/chellseych?utm_medium=copy_link' target='#'>
						<img className='block h-40 w-40 rounded-full' src='/assets/ch.jpeg' alt='CH' />
					</a>
				</div>
				<div className='flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0'>
					<div className='w-full mt-2'>
						<label htmlFor='search' className='sr-only'>
							Search
						</label>
						<div className='relative'>
							<div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
								<SearchIcon className='h-5 w-5 text-gray-500' aria-hidden='true' />
							</div>
							<form
								onSubmit={(e) => {
									e.preventDefault()
									handleSubmit(e.target.search.value)
								}}
							>
								<input
									id='search'
									name='search'
									className='block w-full bg-white border border-gray-200 rounded-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 shadow hover:shadow-md focus:shadow-md focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									placeholder='Search'
									type='search'
									onFocus={() => setFocus(true)}
									onBlur={() => setFocus(false)}
								/>
							</form>
							<div
								className={`absolute mt-2 top-10 w-full border border-gray-200 rounded-xl shadow py-1 text-sm ${
									isFocus && history.length > 0 ? 'block' : 'hidden'
								} max-h-48 overflow-y-auto`}
							>
								{history.map((h) => (
									<div className='relative cursor-pointer hover:bg-gray-100' onClick={() => handleSubmit(h)}>
										<div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
											<ClockIcon className='h-5 w-5 text-gray-500' aria-hidden='true' />
										</div>
										<div className='py-2 pl-10 pr-3 text-sm text-indigo-700 font-medium'>{h}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
