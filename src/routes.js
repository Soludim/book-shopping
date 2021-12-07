import Home from './components/Home';
import Admin from './components/Admin';
import CreateBook from './components/admin/Create';
import Login from './components/Login';

export const routes = [
    { path: '/', component: Home },
    { path: '/admin', component: Admin, name: 'admin'},
    { path: '/admin-create', name: "create", component: CreateBook, props: true },
    { path: '/login', component: Login, name: 'login'}
]