import { ChevronRightIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import '../styles/Major.css'

export default function Major() {
  const inputListener = (e) => {
    setWordCount(e.target.value.length)
  }

  const [isExample, setExample] = useState(false)
  const [wordCount, setWordCount] = useState(0)

	return (
		<div
			className='bg-cover bg-left-bottom relative'
			style={{ backgroundImage: 'url(/assets/pattern-blue.jpg)' }}
		>
			<div className='mx-auto h-screen max-w-screen-md flex items-center'>
				<div className='py-8 w-full text-center pb-20'>
					<div className='flex justify-between w-full items-center mb-4'>
						<p className='text-2xl font-bold text-white'>Make an essay about yourself!</p>
						<button
							type='button'
							className='inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none w-20'
              onClick={() => setExample(!isExample)}
						>
							{isExample ? 'Write' : 'View'}
						</button>
					</div>

					<div className='flip h-80'>
						<div className={`flip-content w-full ${isExample ? 'flip-content-clicked' : ''}`}>
							<div className='flip-input w-full'>
								<textarea
									className='w-full rounded-lg shadow-md outline-none resize-none border border-gray-200 h-80 text-lg py-4 px-6'
									placeholder='I love business and making money'
                  maxLength={650}
                  onChange={inputListener}
								></textarea>
							</div>
							<div className='flip-example bg-gray-300 p-4 rounded-lg w-full h-80'>Testtttt</div>
						</div>
					</div>
          <div className="text-white mt-2 text-right">
            {wordCount}/650
          </div>
				</div>
			</div>
			<div className='absolute right-0 top-0 h-full flex items-center '>
        <div className='p-5 hover:animate-bounce-right flex'>
        <button className='rounded-full shadow-md bg-blue-500 p-3 mr-20 hover:bg-blue-600'>
					<ChevronRightIcon className='h-10 w-10 text-gray-800'/>
				</button>
        </div>
				
			</div>
		</div>
	)
}
