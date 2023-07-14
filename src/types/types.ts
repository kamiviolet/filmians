type Robots = {
    rules:
      | {
          userAgent?: string | string[]
          allow?: string | string[]
          disallow?: string | string[]
          crawlDelay?: number
        }
      | Array<{
          userAgent: string | string[]
          allow?: string | string[]
          disallow?: string | string[]
          crawlDelay?: number
        }>
    sitemap?: string | string[]
    host?: string
  }

export type Movie = {  
  poster_path: string,  
  adult: boolean,  
  overview: string,  
  release_date: string,  
  genre_ids: number[],  
  id: number,  
  original_title: string,  
  original_language: string,  
  title: string,  
  backdrop_path: string,  
  popularity: number,  
  vote_count: number,  
  video: boolean,  
  vote_average: number  
}