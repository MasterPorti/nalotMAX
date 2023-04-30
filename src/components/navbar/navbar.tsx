import React from 'react'
import { IconMenu2, IconSearch } from '@tabler/icons-react'
import Image from 'next/image'
import Styles from './navbar.module.css'
function Navbar(): JSX.Element {
	return (
		<nav
			className={`bg-gradient-to-b from-black to-transparent flex items-center justify-between max-[750px]:px-3 py-6 px-14 text-slate-100 absolute z-10 w-[100vw] ${Styles.navbar}`}
		>
			<div className='flex gap-8  w-[115px] max-[750px]:w-[66px]'>
				<button className='cursor-pointer'>
					<IconMenu2 className='opacity-70 hover:opacity-100' size={24} />
				</button>
				<button className='max-[750px]:hidden text-sm text-white transition cursor-pointer opacity-70 hover:opacity-100'>
					Movies
				</button>
				<button className='max-[750px]:hidden text-sm text-white cursor-pointer opacity-70 hover:opacity-100'>
					Series
				</button>
			</div>
			<Logo />
			<div className='flex items-center gap-3 w-[115px] max-[750px]:w-[66px] '>
				<IconSearch
					size={24}
					className='cursor-pointer opacity-70 hover:opacity-100'
				/>
				<Image
					src='https://avatars.githubusercontent.com/u/78400796?v=4'
					alt='Logo'
					className='h-[30px] w-[30px] rounded-full'
					width={100}
					height={100}
				/>
				<button className=' max-[750px]:hidden text-sm text-white transition opacity-100 cursor-pointer'>
					Julio
				</button>
			</div>
		</nav>
	)
}

function Logo(): JSX.Element {
	return (
		<svg
			className='invert w-[134px] max-[750px]:w-[100px]'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 600 165'
		>
			<path d='m413.43,160.46h51.71c12.21-19.75,25.98-37.68,41.84-54.57,15.59,16.89,28.58,34.82,40.8,54.57h52.23c-17.93-27.28-37.42-53.27-60.81-78.99,23.13-24.69,42.88-50.15,60.81-76.92h-51.19c-12.73,19.75-26.5,36.38-41.84,52.75-15.59-16.37-29.36-33-41.84-52.75h-51.71c17.67,27.54,37.68,52.23,61.07,76.92-23.39,25.72-43.4,52.49-61.07,78.99m-101.6,4.16c21.05,0,39.24-7.8,53.27-24.69v20.53h40.8V4.55h-40.8v20.53C351.06,8.18,332.87.39,311.82.39c-42.61,0-77.95,36.64-77.95,82.11,0,45.48,35.34,82.11,77.95,82.11m-39.5-82.11c0-25.47,20.53-45.99,45.99-45.99s45.99,20.53,45.99,45.99-20.53,45.99-45.99,45.99c-25.47,0-45.99-20.53-45.99-45.99m10.65,0c0,19.75,15.85,35.6,35.34,35.6s35.34-15.85,35.34-35.6-15.85-35.6-35.34-35.6c-19.49,0-35.34,15.85-35.34,35.6M0,160.46h42.88V63.53c18.71-14.81,27.28-19.49,34.3-19.49,8.31,0,13.77,5.2,13.77,18.19v98.22h42.87V63.27c18.71-14.55,27.03-19.23,34.3-19.23,8.32,0,13.77,5.2,13.77,18.19v98.22h42.87V47.16c0-35.08-20.01-46.77-39.24-46.77-16.37,0-33,6.76-54.83,23.39C123.69,6.36,108.36.39,94.59.39c-16.37,0-33,7.28-54.31,23.65V4.54H0v155.91Z' />
		</svg>
	)
}

export default Navbar
