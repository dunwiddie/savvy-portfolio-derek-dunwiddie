import Content from '../../js/portfolio/Content';
import Footer from '../../js/portfolio/Footer';
import Header from '../../js/portfolio/Header';
import Navigation from '../../js/portfolio/Navigation';

let state = {
    'title': 'Portfolio Project - Scheduler',
    'view': 'default',
};

document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
`;

// fundamentally, focus

function linkToHome(){
    state.view = 'home';
    state.title = 'Home Title';
}

// Event Listeners
// Navigation Buttons
document.querySelector('#navigation #homepage').addEventListener('click', linkToHome());
