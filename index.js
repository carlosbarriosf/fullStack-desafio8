document.body.addEventListener("focusin", function(event) {
    if(event.target.closest("#datosPersonales")) {
        document.getElementById("personal").classList.add("relativeFocus");
    } else if(event.target.closest("#datosContacto")) {
        document.getElementById("contacto").classList.add("relativeFocus");
    } else if(event.target.closest("#actividades")) {
        document.getElementById("actividadTitle").classList.add("relativeFocus");
    }
});

document.body.addEventListener("focusout", function(event) {
    if(!event.relatedTarget || !event.relatedTarget.closest("#datosPersonales")) {
        document.getElementById("personal").classList.remove("relativeFocus");
    }
    if (!event.relatedTarget || !event.relatedTarget.closest("#datosContacto")) {
        document.getElementById("contacto").classList.remove("relativeFocus");
    }    
    if (!event.relatedTarget || !event.relatedTarget.closest("#actividades")) {
        document.getElementById("actividadTitle").classList.remove("relativeFocus");
    }
});

const reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    let askUser = confirm("¿Desea restablecer el formulario?");
    if (askUser) {
        const nationality = document.getElementById("nacionalidad");
        nationality.value = "";
        const textArea = document.getElementById("info");
        textArea.value = "";
        const inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
            inputs[i].checked = false;
        }
    }
});


const cssFile = document.getElementById("stylesheet");

const cycleStyle = document.getElementById("cycle");
cycleStyle.addEventListener("click", function(){
    console.log(cssFile.getAttribute("href"))
    if (cssFile.getAttribute("href") === "styles/estilos.css") {
        cssFile.setAttribute("href", "styles/estilos-futuro.css");
    } else if (cssFile.getAttribute("href") === "styles/estilos-futuro.css") {
        cssFile.setAttribute("href", "styles/estilos-retro.css");
    } else if (cssFile.getAttribute("href") === "styles/estilos-retro.css") {
        cssFile.setAttribute("href", "styles/estilos.css");
    }
    if (cssFile.getAttribute("href") === "") {
        cssFile.setAttribute("href", "styles/estilos.css");
    }
    }
);

//Bonus 1

const styles = ["styles/estilos.css", "styles/estilos-futuro.css", "styles/estilos-retro.css", ""];
const randomizeStyles = document.getElementById("random");
randomizeStyles.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * styles.length);
    cssFile.setAttribute("href", styles[randomIndex]);
});

//Bonus 2

const storageButton = document.getElementById("storage");
storageButton.addEventListener("click", function(){
    if (!storageButton.classList.contains("stored")) {
        storageButton.classList.add("stored");
        localStorage.setItem("storedStyle", cssFile.getAttribute("href"));
    } else {
        storageButton.classList.remove("stored");
        localStorage.removeItem("storedStyle");
    }
});

document.addEventListener("DOMContentLoaded", function(){
    const storedStyle = localStorage.getItem("storedStyle");
    const selectedStyle = localStorage.getItem("selectedStyle");
    if(storedStyle) {
        cssFile.setAttribute("href", storedStyle);
        storageButton.classList.add("stored");
        console.log(selectedStyle)
        styleSelector.value = selectedStyle;
    }
});

//Bonus 3

const styleSelector = document.getElementById("styleSelector");
console.log(styleSelector.children[0].selected)
styleSelector.addEventListener("change", function(){
    for (let i = 0; i < styleSelector.children.length; i++) {
        if (styleSelector.children[i].selected) {
            cssFile.setAttribute("href", styles[i]);
            localStorage.setItem("selectedStyle", styleSelector.children[i].value)
        }
        if (storageButton.classList.contains("stored")) {
            localStorage.setItem("storedStyle", cssFile.getAttribute("href"));
        }
    }
})
