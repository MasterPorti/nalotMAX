import React, { useState, useRef } from 'react'
import ItemLive from './ItemLive'
import { IconArrowBadgeLeft, IconArrowBadgeRight } from '@tabler/icons-react'
type Data = Array<{
	id: string
	live: boolean
	name: string
	imagen: string
	company: string
	time: number
}>

interface Props {
	data: Data
}
function CarouselLives({ data }: Props): JSX.Element {
	const refCarousel = useRef<HTMLDivElement>(null)
	const [isPrevius, setIsPrevius] = useState<boolean>(false)

	const next = (): void => {
		if (refCarousel.current == null) return
		const postion: number = refCarousel.current.scrollLeft
		refCarousel.current.scrollLeft = postion - 950
		if (postion <= 950) setIsPrevius(false)
	}

	const previous = (): void => {
		if (refCarousel.current == null) return
		const postion: number = refCarousel.current.scrollLeft
		refCarousel.current.scrollLeft = postion + 950
		setIsPrevius(true)
	}
	return (
		<>
			<p className='text-2xl mt-3 font-bold w-[95vw] mx-auto'>
				Live Entertainment
			</p>
			<main className='w-full h-[350px] relative '>
				<button
					onClick={next}
					className={`z-10 w-16 absolute  h-[100%] mx-auto bg-gradient-to-r from-primary group to-transparent ${
						isPrevius ? '' : 'hidden'
					} `}
				>
					<IconArrowBadgeLeft
						size={44}
						className='opacity-50 group-hover:opacity-100 '
					/>
				</button>
				<button
					onClick={previous}
					className={
						'z-10 absolute group h-[100%] right-0 mx-auto w-16 bg-gradient-to-l from-primary to-transparent '
					}
				>
					<IconArrowBadgeRight
						size={44}
						className='opacity-50 group-hover:opacity-100 '
					/>
				</button>
				<section
					ref={refCarousel}
					className={` max-[550px]:gap-[1rem] gap-4 overflow-x-scroll  flex items-center h-[350px] scroll-smooth w-[100vw]`}
				>
					{data.map((item, index) => (
						<ItemLive key={item.id} data={item} position={index} />
					))}
				</section>
			</main>
		</>
	)
}

export default CarouselLives
