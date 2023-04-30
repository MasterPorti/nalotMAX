import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './slider.module.css'
import { Options } from './options'
import { type Backdrops, type TypeSlider, type Props } from '../../types/types'
function Slider({ backdrops }: Props): JSX.Element {
	const [slider, setSlider] = useState<TypeSlider>(1)

	const refSlider = useRef<HTMLDivElement>(null)
	const [position, setPosition] = useState<'right' | 'left'>('right')
	const [sliderPos, setSliderPos] = useState<0 | 1 | 2 | 3 | 4>(0)

	const images: Backdrops = backdrops.slice(0, 5)

	useEffect(() => {
		setTimeout(() => {
			nextImage()
		}, 8000)
	}, [sliderPos])

	function nextImage(): void {
		if (refSlider.current == null) return
		const currentPosition: number = refSlider.current.scrollLeft
		const plus = refSlider.current.scrollWidth / 5
		if (position === 'right') {
			if (sliderPos === 4) {
				setSliderPos(3)
				setPosition('left')
				refSlider.current.scrollLeft = currentPosition - plus
			} else {
				setSliderPos((sliderPos + 1) as 0 | 1 | 2 | 3 | 4)
				refSlider.current.scrollLeft = currentPosition + plus
			}
		} else {
			if (sliderPos === 0) {
				setSliderPos(1)
				setPosition('right')
				refSlider.current.scrollLeft = currentPosition + plus
			} else {
				setSliderPos((sliderPos - 1) as 0 | 1 | 2 | 3 | 4)
				refSlider.current.scrollLeft = currentPosition - plus
			}
		}
	}
	return (
		<>
			<section className='max-[1100px]:hidden relative w-full h-[80vh] '>
				<div className='z-10 w-full absolute h-[70vh] bg-gradient-to-t from-primary to-transparent  bottom-0' />
				<Options images={images} setSlider={setSlider} />
				{images.map((item, index) => (
					<Image
						className={`h-[80vh] object-cover spin-slow  ${
							slider === index ? styles.imagenSlider : 'hidden'
						}`}
						src={item.url}
						alt=''
						width={1920}
						key={`${item.id}destop`}
						height={1080}
					/>
				))}
			</section>
			<section className='w-full h-[70vh] min-[1100px]:hidden pt-16'>
				<div
					ref={refSlider}
					className='flex items-center w-full h-full gap-5 overflow-x-scroll scroll-smooth snap-mandatory snap-x'
				>
					{images.map((item, index) => (
						<Image
							src={item.url}
							alt=''
							className={`h-[90%] object-cover snap-center w-[80%] rounded-xl ${
								index === 0 ? 'ml-[calc(11%-1.25rem)]' : ''
							} ${index === 4 ? 'mr-[calc(10%-1.25rem)]' : ''}`}
							width={1920}
							height={1080}
							key={`${item.id}mobile`}
						/>
					))}
				</div>
			</section>
		</>
	)
}

export default Slider

// <section className='w-[100vw] min-[1100px]:hidden h-[50vh] max-[500px]:h-[70vh] overflow-hidden scroll-smooth relative'>
//           <div className={`min-[1100px]:hidden  items-center h-[40vh] max-[500px]:h-[60vh] flex mt-16 ${dictionary[sliderMov]}`}>
//           {
//             images.map((item, index) =>
//                 <Image src={item.url} className={`w-[85vw] h-[40vh] max-[500px]:hidden transition-all rounded-lg flex-shrink-0 object-cover object-top ${sliderMov === index ? 'scale-1' : 'scale-90'}`} alt='' width={1920} height={1080} key={`${item.id}mobile`}/>
//             )
//             }
//             {
//             images.map((item, index) =>
//                 <Image src={item.poster} className={`w-[85vw] h-[60vh] max-[500px]:block hidden transition-all rounded-lg flex-shrink-0 object-cover object-center ${sliderMov === index ? 'scale-1' : 'scale-90'}`} alt='' width={1920} height={1080} key={`${item.id}mobileT`}/>
//             )
//             }
//           </div>
//         </section>
