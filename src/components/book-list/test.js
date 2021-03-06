import React from 'react';
import BookList from './index';
import { shallow } from 'enzyme';

describe('BookItem', () => {
	const books = [
		{
			id: 123,
			title: 'teste',
			authors: ['teste'],
			imageLinks: { thumbnail: 'teste' },
			shelf: 'read'
		}
	];
	const title = 'Currently Reading';

	it('deve renderizar titulo `teste`', () => {
		const wrapper = shallow(
			<BookList title={title} books={books} onChangeShelf={() => { }} onCheckedItem={() => { }} />
		);
		expect(wrapper.find('.bookshelf-title').text()).toEqual(title);
	});
});
