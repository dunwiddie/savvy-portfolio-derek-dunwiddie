export default function Blog(){
    return `
        <div class="post">
            <h2>{{ title }}</h2>
            <p class=code>{{ path }}</p>
            <p>{{ content }}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eum labore nulla perferendis, sed harum, accusantium, enim amet molestiae inventore blanditiis quidem quis cupiditate eaque in. Laboriosam consequuntur neque officiis.</p>
        </div>
        <div class="news">
            <h2>{{ title }}</h2>
            <p class=code>{{ path }}</p>
            <p>{{ content }}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eum labore nulla perferendis, sed harum, accusantium, enim amet molestiae inventore blanditiis quidem quis cupiditate eaque in. Laboriosam consequuntur neque officiis.</p>
        </div>
    `;
}