import {
	SET_LOADING,
	SET_STORIES,
	REMOVE_STORY,
	HANDLE_PAGE,
	HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
	const { hits, query, page, nbPages } = state;
	switch (action.type) {
		case SET_LOADING: {
			return { ...state, isLoading: true };
		}

		case SET_STORIES: {
			return {
				...state,
				isLoading: false,
				hits: action.payload.hits,
				nbPages: action.payload.nbPages,
			};
		}
		case REMOVE_STORY: {
			return {
				...state,
				hits: hits.filter(hit => hit.objectID !== action.payload),
			};
		}

		case HANDLE_SEARCH: {
			return {
				...state,
				query: action.payload,
				page: 0,
			};
		}

		case HANDLE_PAGE: {
			if (action.payload === 'inc') {
				let nextPage = page + 1;

				if (nextPage > nbPages - 1) {
					nextPage = 0;
				}
				return { ...state, page: nextPage };
			}
			if (action.payload === 'dec') {
				let prevPage = page - 1;

				if (prevPage < 0) {
					prevPage = nbPages - 1;
				}
				return { ...state, page: prevPage };
			}
		}

		default:
			throw new Error(`no matching "${action.type}" action type`);
	}
};
export default reducer;
