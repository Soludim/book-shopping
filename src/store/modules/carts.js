const state = {
    books: []
}

const mutations = {
    'ADD_TO_CART'(state, { id, title, price }) {
        const record = state.books.find(element => element.id == id);
        if (record) {
            record.quantity += 1;
        } else {
            state.books.push({
                id,
                title,
                price,
                quantity: 1
            });
        }

    },
    'INCREASE_QUAN'(state, book) {
        const record = state.books.find(elem => elem.id == book.id);
        if (book.quantity > record.quantity) {
            record.quantity++;
        }
    },
    'DECREASE_QUAN'(state, id) {
        const record = state.books.find(elem => elem.id == id);
        if (record.quantity == 1) {
            state.books.splice(state.books.indexOf(record), 1);
        } else {
            record.quantity--;
        }
    }
}

const actions = {
    addToCart: ({ commit }, cart) => {
        commit('ADD_TO_CART', cart);
    },
    decreaseQuan: ({ commit }, bookId) => {
        commit('DECREASE_QUAN', bookId);
    },
    increaseQuan: ({ commit, rootGetters }, bookId) => {
        let book = rootGetters.books.find(b => b.id == bookId);
        commit('INCREASE_QUAN', book)
    }
}

const getters = {
    carts: state => {
        return state.books;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}