import React from 'react'
import Navbar from '../components/navbar/navbar'
import Slider from '@/components/slider/slider'
import Carousel from '@/components/Carousel/carousel'
import { type Backdrops } from '../types/types'
import CarouselLives from '@/components/CarouselLives/CarouselLives'
import { type GetServerSideProps } from 'next'
import response from '@/mocks/moviesResponse.json'
import responseTV from '@/mocks/tvResponse.json'
import responseLive from '@/mocks/LiveResponse.json'
// https://api.themoviedb.org/3/trending/movie/day?api_key=2fb9383366095b338d395fa960a1ba1a
// https://api.themoviedb.org/3/trending/tv/day?api_key=2fb9383366095b338d395fa960a1ba1a
//! crear mi api para peliculas exclusivas donde seras 100% funcionales
//! TODO cambiar la api de LiveResponse a API
//! Responsive LiveCaousel
interface Movie {
	adult: boolean
	backdrop_path: string
	id: number
	title: string
	original_language: string
	original_title: string
	overview: string
	poster_path: string
	media_type: string
	genre_ids: number[]
	popularity: number
	release_date: string
	video: boolean
	vote_average: number
	vote_count: number
}

interface ApiResponse {
	page: number
	results: Movie[]
	total_pages: number
	total_results: number
}
interface Props {
	response: ApiResponse
	responseTV: ApiResponse
}

// { response, responseTV }: Props

export default function Home(): JSX.Element {
	const backDrops: Backdrops = response.results.map((movie) => {
		return {
			id: movie.id,
			url: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
			poster: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
			title: movie.name ?? movie.title,
		}
	})
	const backDropsTv: Backdrops = responseTV.results.map((movie) => {
		return {
			id: movie.id,
			url: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
			poster: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
			title: movie.name,
		}
	})
	return (
		<>
			<Navbar />
			<Slider backdrops={backDrops} />
			<Carousel backdrops={backDropsTv} />
			<CarouselLives data={responseLive.results} />
			<p className='text-white'>Paco</p>
		</>
	)
}

// export const getServerSideProps: GetServerSideProps = async () => {
// 	const res = await fetch(
// 		'https://api.themoviedb.org/3/movie/popular?api_key=2fb9383366095b338d395fa960a1ba1a'
// 	)
// 	const response = await res.json()
// 	const res2 = await fetch(
// 		'https://api.themoviedb.org/3/trending/tv/day?api_key=2fb9383366095b338d395fa960a1ba1a'
// 	)
// 	const responseTV = await res2.json()
// 	return {
// 		props: {
// 			response,
// 			responseTV,
// 		},
// 	}
// }
