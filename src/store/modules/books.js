import books from '../../data/books';
import Vue from 'vue';

const state = {
    books: [],
    filter: ''
}

const mutations = {
    'SET_BOOKS'(state, books) {
        state.books = books;
    },
    'ADD_BOOK'(state, book) {
        state.books.push(book);
        alert('Book added successfully')
    },
    'EDIT_BOOK'(state, book) {
        let record = state.books.findIndex(b => b.id == book.id);
        if (record > -1)
            state.books.splice(record, 1, book);
    },
    'DELETE_BOOK'(state, book) {
        state.books.splice(state.books.indexOf(book), 1);
    },
    'FILTER'(state, filter) {
        state.filter = filter
    }
}

const actions = {
    initBooks: ({ commit }) => {
        Vue.http.get('https://solu-bookshop.firebaseio.com/data/books.json')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    commit('SET_BOOKS', data);
                }
            })
            .catch(error => {
                commit('SET_BOOKS', books);
            })

    },
    addBook: ({ commit }, book) => {
        commit('ADD_BOOK', book);
    },
    editBook: ({ commit, state }, book) => {
        commit('EDIT_BOOK', book);
    },
    deleteBook: ({ commit }, book) => {
        commit('DELETE_BOOK', book);
    },
    filter: ({ commit }, filter) => {
        commit('FILTER', filter);
    }
}

const getters = {
    books: state => {
        return state.books.filter(b => b.title.toLowerCase().indexOf(state.filter.toLowerCase()) > -1);
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}