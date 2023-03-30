const BASE_URL = 'https://newsapi.org/v2/'
const API_KEY = '87ccea9da9234d05938c7875ac0e519c'

export const getNews = (searchText, page) => {
	return fetch(`${BASE_URL}everything?q=${searchText}&page=${page}`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
}