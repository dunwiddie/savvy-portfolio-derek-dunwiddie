import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import Store from './src/Store';
import { html, render } from 'lit-html';

var router = new Navigo(window.location.origin);
var root = document.querySelector('#root');

var State = {
    'posts': [],
    'active': 'home',
    'home': {
        'title': 'Savvy Coders Portfolio Project',
        'links': [ 'blog', 'contact', 'projects' ],
    },
    'blog': {
        'title': 'derek(dot)blog',
        'links': [ 'home', 'contact', 'projects' ],
    },
    'contact': {
        'title': 'derek(dot)contact',
        'links': [ 'home', 'blog', 'projects' ],
    },
    'projects': {
        'title': 'derek(dot)projects',
        'links': [ 'home', 'blog', 'contact' ],
    }
};

var store = new Store(State);

function handleNavigation(params){
    store.dispatch((state) => {
        state.active = params.page;

        return state;
    });
}

function App(state){
    return html`
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `;
}

function start(state){
    render(App(state), root);
}

store.addListener(start);
store.addListener(() => router.updatePageLinks());

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => store.dispatch((state) => {
        state.posts = posts;

        return state;
    }));