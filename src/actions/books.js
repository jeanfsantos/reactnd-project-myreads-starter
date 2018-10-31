import * as BooksAPI from '@Api/BooksAPI';

export const SET_BOOKS = 'SET_BOOKS';
export const SET_SEARCH_BOOKS = 'SET_SEARCH_BOOKS';
export const CLEAN_SEARCH_BOOKS = 'CLEAN_SEARCH_BOOKS';

export const fetchBooks = () => dispatch => {
	BooksAPI.getAll().then(data => {
		dispatch({ type: SET_BOOKS, payload: data});
	});
};

export const updateBooks = (book, shelf) => (dispatch, getState) => {
	BooksAPI.update(book, shelf).then(() => {
		const books = getState().books.books.map(_book => {
			if (book.id === _book.id) {
				return { ..._book, shelf };
			}
			return _book;
		});
		dispatch({ type: SET_BOOKS, payload: books });
	});
};

export const fetchSearchBooks = (value) => dispatch => {
	BooksAPI.search(value).then((data = []) => {
		if (data.error) {
			return;
		}
		dispatch({ type: SET_SEARCH_BOOKS, payload: data });
	});
};

export const updateSearchBook = (book, shelf) => (dispatch, getState) => {
	BooksAPI.update(book, shelf).then(() => {
		const books = getState().books.searchBooks.filter(
			_book => book.id !== _book.id
		);
		dispatch({ type: SET_SEARCH_BOOKS, payload: books });
	});
};

export const cleanSearchBooks = () => ({
	type: CLEAN_SEARCH_BOOKS
});