import { useEffect, useState } from "react";

export const useUpdateLinks = () => {
	const [query, setQuery] = useState();

	useEffect(() => {
		setQuery(window.location.search.replace('?', '&'))
	}, [])

	return {
		query: query
	}

}