import "./Button.css";
export const Button = (icon, text) => `
<button class="my-btn">
<img src=${icon} alt='${text} icon'/>
<a href="http://www.github.com"><h4>${text}</h4></a>
</button>
`;