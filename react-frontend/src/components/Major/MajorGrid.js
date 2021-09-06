import { AcademicCapIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

export default function MajorGrid({ data }) {
	return (
		<Link to={`/major/${data.id}`}>
			<li className='transition duration-500 ease-in-out transform hover:-translate-y-2 col-span-1 flex flex-col bg-white hover:bg-blue-50 rounded-lg shadow-md divide-y divide-gray-200 cursor-pointer h-full'>
				<div className='flex-1 flex items-center p-6 h-full'>
					<div className='p-3 bg-blue-200 bg-opacity-70 rounded-lg text-secondary-400'>
						<AcademicCapIcon className='w-5 h-5' aria-hidden='true' />
					</div>
					<h1 className='ml-4 text-gray-900 text-lg font-medium'>{data.name}</h1>
				</div>
			</li>
		</Link>
	)
}
