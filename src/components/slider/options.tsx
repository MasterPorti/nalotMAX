import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { type Backdrops, type TypeSlider } from '../../types/types'
import { crearUrl } from '@/helpers'
interface PropsOpcions {
	images: Backdrops
	setSlider: (slider: TypeSlider) => void
}

export const Options = ({ images, setSlider }: PropsOpcions): JSX.Element => {
	function handleSlider(index: number): void {
		if (
			index === 0 ||
			index === 1 ||
			index === 2 ||
			index === 3 ||
			index === 4
		) {
			setSlider(index)
		}
	}
	return (
		<section className='absolute bottom-0 z-20 w-full'>
			<div className='grid grid-cols-5 gap-x-4 w-[95vw] mx-auto'>
				{images.map((item, index) => (
					<Link
						href={`/movies/${crearUrl(item.title)}?id=${item.id}`}
						key={`${item.id}opcions`}
					>
						<Image
							className='transition-all duration-500 border-2 border-transparent rounded-lg shadow-md cursor-pointer hover:border-white hover:scale-105'
							onMouseEnter={() => {
								handleSlider(index)
							}}
							src={item.url}
							alt=''
							width={1920}
							height={1880}
						/>
					</Link>
				))}
			</div>
		</section>
	)
}
