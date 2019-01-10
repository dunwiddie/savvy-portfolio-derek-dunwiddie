import { html } from 'lit-html';

export default function Header(state){
    return html`
    <div id="header">
        <div class="container">
            <h1>${state[state.active].title}</h1>
            <img id="personalPhoto" src="https://avatars2.githubusercontent.com/u/37190215?s=460&v=4" alt="Derek Dunwiddie">
        </div>
    </div>
    `;
}