import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';

var links;
var State = {
    'active': 'home',
    'home': {
        'title': 'Savvy Coders Portfolio Project',
        'links': [ 'blog', 'contact', 'projects' ],
    },
    'blog': {
        'title': 'derek(dot)blog',
    },
    'contact': {
        'title': 'derek(dot)contact',
    },
    'projects': {
        'title': 'derek(dot)projects',
    }
};
var root = document.querySelector('#root');

function handleNavigation(event){
    event.preventDefault();
    console.log(event.target.textContent);
    State.active = event.target.textContent;
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

    links = document.querySelectorAll('#navigation a');

    links[0].addEventListener('click', handleNavigation);
    links[1].addEventListener('click', handleNavigation);
    links[2].addEventListener('click', handleNavigation);
}

render(State);