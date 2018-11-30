export default function Footer(){
    return `
    <div id="navigation">
        <ul class="container">
            <li><a href="./blog">blog</a></li>
            <li><a href="./contact">contact</a></li>
            <li><a href="./projects">projects</a>
                <ul class="dropdown">
                    <li><a href="./projects/portfolio">portfolio</a></li>
                    <li><a href="./projects/">second</a></li>
                    <li><a href="./projects/">third</a></li>
                </ul>
            </li>
        </ul>
    </div>
    `;
}