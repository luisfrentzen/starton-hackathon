import React from "react"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import "./ResultModal.css"
import ModalChart from "./ModalChart"

const ResultModal = ({ open, setOpen, majors, probabilities }) => {
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				static
				className='fixed z-10 inset-0 overflow-y-auto'
				open={open}
				onClose={setOpen}
			>
				<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-30 transition-opacity' />
					</Transition.Child>

					<span
						className='hidden sm:inline-block sm:align-middle sm:h-screen'
						aria-hidden='true'
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						enterTo='opacity-100 translate-y-0 sm:scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 translate-y-0 sm:scale-100'
						leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
					>
						<div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6'>
							<div>
								<div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100'>
									<img
										src='/assets/trophy.png'
										alt='Trophy'
										className='w-12 h-auto drop-shadow-md trophy-img animate-pulse'
									></img>
								</div>
								<div className='mt-5 text-center sm:mt-7'>
									<Dialog.Title
										as='h3'
										className='text-lg leading-6 font-medium text-gray-900'
									>
										Here are your result:
									</Dialog.Title>
									<div className='text-sm text-gray-500'>
										Click on the bar to read more about the major
									</div>
									<div className='mt-12'>
										<ModalChart
											majors={majors}
											probabilities={probabilities}
										></ModalChart>
									</div>
								</div>
							</div>
							<div className='mt-5 sm:mt-6'>
								<button
									type='button'
									className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
									onClick={() => setOpen(false)}
								>
									Write more
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default ResultModal
