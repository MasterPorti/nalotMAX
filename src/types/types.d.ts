export type Backdrops = Array<{
  url: string
  poster: string
  title: string
  id: number
}>

export interface Props {
  backdrops: Backdrops
}

export type TypeSlider = 0 | 1 | 2 | 3 | 4
