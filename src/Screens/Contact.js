export default function Contact(){
    return `
        <form action="https://formspree.io/dunwiddie.derek@gmail.com" method="POST">
            <textarea name="user_message" rows="8" cols="40" required autofocus></textarea><br>
            <input type="email" name="userEmail" placeholder="your.email@example.com" required><br>       
            <input type="submit">
        </form>
    `;
}