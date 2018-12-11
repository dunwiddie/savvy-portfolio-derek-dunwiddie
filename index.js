import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';

var router = new Navigo(window.location.origin); // constructor, create new client-side router
// alternative to History API or window.location

var State = {
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

var root = document.querySelector('#root');

function handleNavigation(params){
    State.active = params.page;
    render(State); // eslint-disable-line
}

function render(state){
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
        `;

    greet();

    router.updatePageLinks();
}

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();