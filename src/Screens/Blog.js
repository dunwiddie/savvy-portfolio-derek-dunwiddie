import { html } from 'lit-html';
import Post from '../Post';

export default function Blog(state){
    return html`
        <div id="blog">
            <h2>Blog</h2>
            <p>A pile of opinions, content, and junk</p>
            ${state.posts.map((post) => Post(post))}
        </div>    
    `;
}