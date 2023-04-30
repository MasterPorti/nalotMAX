import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import espnonStar from '../../../public/img/espnStar.png'
import { getTime } from './getTime'
interface Data {
	id: string
	live: boolean
	name: string
	imagen: string
	company: string
	time: number
}

interface Props {
	data: Data
	position: number
}
function ItemLive({ data, position }: Props): JSX.Element {
	const [time, setTime] = useState('')
	useEffect(() => {
		const Newtime = getTime(data.time)
		data.live ? setTime('') : setTime(Newtime)
	})
	return (
		<>
			<div
				className={`w-[320px] aspect-square bg-secondary shrink-0 transition-all duration-500 border-2 border-transparent rounded-lg shadow-md cursor-pointer hover:border-white hover:scale-105 ${
					position === 0 ? 'ml-[3vw]' : ''
				}`}
			>
				<section
					className={`w-[100%] relative aspect-video object-cover rounded-lg`}
				>
					{data.live ? (
						<div className='absolute px-2 py-[2px] bg-live rounded-md text-sm font-bold  bottom-0 ml-[2%] mb-[2%]  '>
							LIVE
						</div>
					) : (
						<div className='absolute px-2 py-[2px] bg-black rounded-md text-sm font-medium  bottom-0 ml-[2%] mb-[2%]  '>
							{time}
						</div>
					)}
					<Image
						className='w-[100%] aspect-video object-cover rounded-lg'
						src={`https://raw.githubusercontent.com/MasterPorti/images/main/${data.imagen}`}
						alt=''
						width={400}
						height={400}
					/>
				</section>
				<div className='mt-2 ml-4'>
					<p className='text-sm font-light'>{data.company}</p>
					<p className='h-10 overflow-hidden text-sm font-semibold'>
						{data.name}
					</p>
					<Image
						className='w-24'
						src={espnonStar}
						alt=''
						width={100}
						height={100}
					/>
				</div>
			</div>
		</>
	)
}

export default ItemLive
