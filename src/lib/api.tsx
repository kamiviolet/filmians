async function fetchWithTimeout(resource:string, options:any = {}) {
    const { timeout = 8000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
  
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
    clearTimeout(id);
  
    return response;
  }

export async function discoverMovies(page:number) {
    const res = 
    await fetchWithTimeout(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=${process.env.TMDB_API_KEY}`)

    if (!res.ok) { throw new Error("Failed to connect to database!") }

    const data = await (res.json());
    return data;
}

export async function getTopRatedMovies(page:number) {
  const res = 
  await fetchWithTimeout(`https://api.themoviedb.org/3/movie/top_rated?page=${page}&api_key=${process.env.TMDB_API_KEY}`)

  if (!res.ok) { throw new Error("Failed to connect to database!") }

  const data = res.json();
  return data;
}

