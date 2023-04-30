import React from 'react'
import { type GetServerSideProps } from 'next'
import response from '../../mocks/movieResponse.json'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image'
interface Genre {
	id: number
	name: string
}

interface ProductionCompany {
	id: number
	logo_path: string | null
	name: string
	origin_country: string
}

interface ProductionCountry {
	iso_3166_1: string
	name: string
}

interface SpokenLanguage {
	iso_639_1: string
	name: string
}

interface Movie {
	adult: boolean
	backdrop_path: string | null
	belongs_to_collection: null | {
		id: number
		name: string
		poster_path: string
		backdrop_path: string
	}
	budget: number
	genres: Genre[]
	homepage: string
	id: number
	imdb_id: string | null
	original_language: string
	original_title: string
	overview: string | null
	popularity: number
	poster_path: string | null
	production_companies: ProductionCompany[]
	production_countries: ProductionCountry[]
	release_date: string
	revenue: number
	runtime: number | null
	spoken_languages: SpokenLanguage[]
	status: string
	tagline: string | null
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

interface Props {
	response: Movie
}

function Movies(): JSX.Element {
	const data = {
		id: response.id,
		title: response.title ?? '',
		overview: response.overview ?? '',
		backdrops: response.backdrop_path ?? '',
		generes: response.genres ?? [],
		homepage: response.homepage ?? '',
		productions: response.production_companies ?? [],
		release_date: response.release_date ?? '',
	}
	return (
		<>
			<Navbar />
			<section className='relative w-full h-[70vh]'>
				<div className='absolute bg-gradient-to-r w-[90%] h-[70vh] from-primary to-transparent' />
				<Image
					className='object-cover w-[100vw] h-[70vh]'
					src={`https://image.tmdb.org/t/p/original${data.backdrops}`}
					alt=''
					width={1920}
					height={1080}
				/>
			</section>
			<p>{data.title}</p>
			<p>{data.overview}</p>
			<p>{data.release_date}</p>
		</>
	)
}

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
// 	const id = typeof query.id === 'string' ? query.id : ''
// 	const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=2fb9383366095b338d395fa960a1ba1a`
// 	const res = await fetch(URL)
// 	const response = await res.json()

// 	if (response.success === false) {
// 		return {
// 			redirect: {
// 				destination: '/',
// 				permanent: false,
// 			},
// 		}
// 	}
// 	return {
// 		props: {
// 			response,
// 		},
// 	}
// }

export default Movies
