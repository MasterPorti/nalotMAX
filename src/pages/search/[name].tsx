import { useRouter } from 'next/router'
import React from 'react'
import { type GetServerSideProps } from 'next'

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
	belongs_to_collection: any
	budget: number
	genres: Genre[]
	homepage: string
	id: number
	imdb_id: string
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | null
	production_companies: ProductionCompany[]
	production_countries: ProductionCountry[]
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: SpokenLanguage[]
	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

interface Props {
	response: Movie
}

function Movies({ response }: Props): JSX.Element {
	const route = useRouter()
	console.log(response)
	return (
		<div>
			https://api.themoviedb.org/3/{route.query.type}/{route.query.id}
			?api_key=2fb9383366095b338d395fa960a1ba1a
			<p>{route.query.name}</p>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const type = typeof query.type === 'string' ? query.type : ''
	const id = typeof query.id === 'string' ? query.id : ''
	const URL = `https://api.themoviedb.org/3/${type}/${id}?api_key=2fb9383366095b338d395fa960a1ba1a`

	const res = await fetch(URL)
	const response = await res.json()
	if (response.success === false) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}
	return {
		props: {
			response,
		},
	}
}

export default Movies
