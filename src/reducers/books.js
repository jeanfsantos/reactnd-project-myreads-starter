import { SET_BOOKS, SET_SEARCH_BOOKS, CLEAN_SEARCH_BOOKS } from '@Actions/books';

const initialState = {
	books: [],
	searchBooks: []
};

const books = (state = initialState, { type, payload }) => {
	switch (type) {
	case SET_BOOKS:
		return {...state, books: payload};
	case SET_SEARCH_BOOKS:
		return { ...state, searchBooks: payload };
	case CLEAN_SEARCH_BOOKS:
		return { ...state, searchBooks: [] };
	default:
		return state;
	}
};

export default books;