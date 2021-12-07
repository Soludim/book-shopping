import Vue from 'vue';
import { router } from '../../main';

const state = {
    activeUser: ''
}

const mutations = {
    'CHECK_AUTH'(state, userData) {
        state.activeUser = userData;
    },
    'LOGIN'(state, user) {
        state.activeUser = user;
        router.replace('/');
    },
    'LOGOUT'(state) {
        state.activeUser = '';
        if (router.currentRoute.path != '/') {
            router.replace('/')
        }
    }
}

const actions = {
    checkAuth: ({ commit }) => {
        if (localStorage.key('userId')) {
            Vue.http.get('https://solu-bookshop.firebaseio.com/users/' + localStorage.getItem('userId') + '.json')
                .then(res => res.json())
                .then(data => {
                    commit('CHECK_AUTH', data);
                })
                .catch(error => {
                    alert('An error occured');
                    commit('CHECK_AUTH', '');
                })
        }
    },
    login: ({ commit }, credentials) => {
        let url =
            credentials.loginMode ?
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJqeHDwG44QWFFqZL7S15DGUqd3q43bSo' :
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJqeHDwG44QWFFqZL7S15DGUqd3q43bSo';

        var authData = {
            'email': credentials.email,
            'password': credentials.password,
            'returnSecureToken': true
        }

        Vue.http.post(url, authData, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                const userData = {
                    id: res.body.localId,
                    email: credentials.email,
                    token: res.body.idToken
                }
                Vue.http.put('https://solu-bookshop.firebaseio.com/users/' + res.body.localId + '.json', userData)
                localStorage.setItem('userId', res.body.localId);
                commit('LOGIN', userData)
            })
            .catch(err => {
                alert(err.body.error.message);
            })
    },
    logout: ({ commit }) => {
        localStorage.removeItem('userId')
        commit('LOGOUT')
    }
}

const getters = {
    activeUser: state => {
        return state.activeUser
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}