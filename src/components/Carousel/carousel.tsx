import { IconArrowBadgeLeft, IconArrowBadgeRight } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { type Props } from '../../types/types'
import Link from 'next/link'
import { crearUrl } from '@/helpers'
function Carousel({ backdrops }: Props): JSX.Element {
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
			<p className='text-2xl mt-3 font-bold w-[95vw] mx-auto'>Trending</p>
			<section className='relative w-full h-[200px] justify-end flex'>
				<button
					onClick={next}
					className={`z-10 w-16 absolute left-0 h-[100%] mx-auto bg-gradient-to-r from-primary group to-transparent ${
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
						'z-10 absolute group h-[100%] mx-auto w-16 bg-gradient-to-l from-primary to-transparent '
					}
				>
					<IconArrowBadgeRight
						size={44}
						className='opacity-50 group-hover:opacity-100 '
					/>
				</button>
				<div
					ref={refCarousel}
					className={`max-[550px]:gap-[1rem] gap-4 overflow-x-scroll flex items-center h-[200px] scroll-smooth 
          ${isPrevius ? 'w-[100vw]' : 'w-[97vw] '}`}
				>
					{backdrops.map((item) => (
						<Link
							className='max-[550px]:w-[60vw] max-[550px]:h-[40vw] h-[170px] w-[320px] shrink-0'
							href={`/series/${crearUrl(item.title)}?id=${item.id}`}
							key={`${item.id}caousel`}
						>
							<Image
								src={item.url}
								className='max-[550px]:w-[60vw] max-[550px]:h-[40vw]  h-[170px]  w-[320px] object-cover transition-all duration-500 border-2 border-transparent rounded-lg cursor-pointer hover:border-white hover:scale-105'
								height={500}
								width={500}
								alt=''
							/>
						</Link>
					))}
				</div>
			</section>
		</>
	)
}

export default Carousel
