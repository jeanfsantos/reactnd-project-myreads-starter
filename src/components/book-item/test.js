import React from 'react';
import BookItem from './index';
import { shallow } from 'enzyme';

describe('BookItem', () => {
	const book = {
		title: 'teste',
		authors: ['teste'],
		imageLinks: { thumbnail: 'teste' },
		shelf: 'read'
	};
	const mockFn = jest.fn();

	beforeEach(() => {
		mockFn.mockClear();
	});

	it('deve renderizar titulo `teste`', () => {
		const wrapper = shallow(
			<BookItem book={book} onChangeShelf={mockFn} />
		);
		expect(wrapper.find('.book-title').text()).toEqual('teste');
	});

	it('deve renderizar autor `teste`', () => {
		const wrapper = shallow(
			<BookItem book={book} onChangeShelf={mockFn} />
		);
		expect(wrapper.find('.book-authors').text()).toEqual('teste');
	});

	it('deve renderizar autor `teste1, teste2`', () => {
		const book2 = { ...book, authors: ['teste1', 'teste2'] };
		const wrapper = shallow(
			<BookItem book={book2} onChangeShelf={mockFn} />
		);
		expect(wrapper.find('.book-authors').text()).toEqual('teste1, teste2');
	});

	it('deve renderizar imagem `teste`', () => {
		const wrapper = shallow(
			<BookItem book={book} onChangeShelf={mockFn} />
		);
		expect(
			wrapper.find('.book-cover').prop('style').backgroundImage
		).toEqual('url("teste")');
	});

	it('não deve deve renderizar imagem', () => {
		const book = {
			title: 'teste',
			authors: ['teste'],
			shelf: 'read'
		};
		const wrapper = shallow(
			<BookItem book={book} onChangeShelf={mockFn} />
		);
		expect(
			wrapper.find('.book-cover').prop('style').backgroundImage
		).toEqual('');
	});

	it('deve renderizar shelf `read` selecionado', () => {
		const wrapper = shallow(
			<BookItem book={book} onChangeShelf={mockFn} />
		);
		expect(
			wrapper.find('.book-shelf-changer select').prop('defaultValue')
		).toEqual('read');
	});

	it('deve renderizar shelf `none` quando não passar nenhuma opção no prop', () => {
		const book = {
			title: 'teste',
			authors: ['teste'],
			imageLinks: { thumbnail: 'teste' }
		};
		const wrapper = shallow(
			<BookItem book={book} onChangeShelf={mockFn} />
		);
		expect(
			wrapper.find('.book-shelf-changer select').prop('defaultValue')
		).toEqual('none');
	});

	it('deve chamar o callback onChangeShelf quando alterar o select', () => {
		const wrapper = shallow(
			<BookItem book={book} onChangeShelf={mockFn} />
		);
		wrapper
			.find('.book-shelf-changer select')
			.simulate('change', { target: { value: 'wantToRead' } });

		expect(mockFn).toHaveBeenCalled();
	});

	it('não deve chamar o callback onChangeShelf quando alterar o select para `move`', () => {
		const wrapper = shallow(
			<BookItem book={book} onChangeShelf={mockFn} />
		);
		wrapper
			.find('.book-shelf-changer select')
			.simulate('change', { target: { value: 'move' } });

		expect(mockFn).not.toHaveBeenCalled();
	});
});
