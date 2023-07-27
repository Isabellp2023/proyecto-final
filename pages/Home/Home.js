import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `

<section class="proyecto">
<section class="home">

<h1>Isabel Lopez</h1>
<p>Soy una apasionada estudiante de programación especializada en HTML, CSS, JavaScript, Github, React,  Node, Vite y MongoDB obteniendo una sólida formación en Portalento digital (Fundación ONCE), enfocada en desarrollar soluciones web atractivas y funcionales.
</p>
<p>Mi objetivo principal es seguir aprendiendo y creciendo en el campo de la programación, abordando nuevos desfios de manera proactiva.</p>
<a href="isabelopez.cursos@gmail.com"></a>
 
</section>
<section class="photo"> 
    <img src="./public/icons/foto.jpeg"></img>
    </section>
    </section>
`;

};


    
