import { capitalize } from 'lodash';

export default function Post(post){
    return `
        <div class="post">
            <h3>${post.id} | ${capitalize(post.title)}</h3>
            <p>${post.body}</p>
        </div>
    `;
}