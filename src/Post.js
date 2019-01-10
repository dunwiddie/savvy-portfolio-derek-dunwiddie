import { capitalize } from 'lodash';
import { html } from 'lit-html';

export default function Post(post){
    return html`
        <div class="post">
            <h3>${post.id} | ${capitalize(post.title)}</h3>
            <p>${post.body}</p>
        </div>
    `;
}