// MENÚ HAMBURGUESA
var hamburguesa = document.getElementById("hamburguesa");
var menu = document.querySelector("header ul");

if (hamburguesa && menu) {
    hamburguesa.addEventListener("click", () => {
        menu.classList.toggle("actiu");
    });
}

// POP UP VISITA (primer cop que entres a la web)

// agafem l'element del popup del HTML perquè el puguem controlar amb JS
var popup = document.getElementById("popup");

if (popup) {
    // comprovem si el popup existeix, perquè no doni error si estem en una altra pàgina

    // sessionStorage serveix per guardar dades només mentre el navegador està obert
    // aquí l'utilitzem per saber si l'usuari ja ha vist el popup en aquesta sessió
    if (!sessionStorage.getItem("poppop")) {

        // si encara no l'ha vist, el mostrem amb display flex per centrar-lo
        popup.style.display = "flex";

        // guardem una marca perquè no torni a sortir fins que es tanqui el navegador
        sessionStorage.setItem("poppop", "si");
    }
}

// funció que s'executa quan l'usuari clica el botó de tancar popup
function tancopop() {

    // tornem a agafar el popup per assegurar-nos que existeix
    var popup = document.getElementById("popup");

    if (popup) {
        // l'amaguem canviant display a none
        popup.style.display = "none";
    }
}

// VALIDACIÓ FORMULARI DE REGISTRE

// agafem el formulari de registre per poder detectar quan s'envia
var formulari = document.getElementById("formulari");

if (formulari) {
    // només executem això si realment estem a la pàgina de registre

    // escoltem quan l'usuari envia el formulari (submit) això es fa perquè no es recarregui la pàgina automàticament i així podem validar tots els camps abans d'enviar res
    formulari.addEventListener("submit", function(event) {

        // evitem que la pàgina es recarregui perquè així podem validar abans d'enviar
        event.preventDefault();

        // agafem els camps del formulari que volem validar
        var correu = document.getElementById("correu");
        var contrasenya = document.getElementById("contrasenya");
        var confirmar = document.getElementById("confirmar");

        // comprovem que tots els camps existeixen abans de treballar amb ells
        if (correu && contrasenya && confirmar) {

            // abans de tornar a validar el formulari
            // eliminem els errors anteriors per evitar que es quedin marcats
            correu.classList.remove("error");
            contrasenya.classList.remove("error");
            confirmar.classList.remove("error");

            // variable que ens serveix per saber si tot el formulari és correcte
            let correcte = true;

            // expressió regular per comprovar que el correu tingui format correcte
            // exemple: algo@algo.com
            var correuvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // comprovem si el correu compleix el format
            if (!correuvalid.test(correu.value)) {

                // si no és correcte, afegim classe error per marcar-lo en vermell
                correu.classList.add("error");

                // indiquem que el formulari ja no és vàlid
                correcte = false;
            }

            // comprovem que les contrasenyes coincideixin i que no estiguin buides
            if (contrasenya.value !== confirmar.value || contrasenya.value === "") {

                // si hi ha error, marquem els dos camps perquè l'usuari ho vegi clar
                contrasenya.classList.add("error");
                confirmar.classList.add("error");

                // indiquem que el formulari no és correcte
                correcte = false;
            }

            // si no s'ha detectat cap error, podem donar el missatge d'èxit
            if (correcte) {

                alert("Formulari enviat correctament!");
            }
        }
    });
}


// ===============================
// VALIDACIÓ FORMULARI DE CONTACTE
// ===============================

// agafem el formulari de contacte (només existeix en la pàgina de contacte)
var formulariContacte = document.getElementById("formulariContacte");

if (formulariContacte) {

    formulariContacte.addEventListener("submit", function(event) {

        // evitem recàrrega per poder validar abans d'enviar
        event.preventDefault();

        // agafem els camps del formulari de contacte
        var correuContacte = document.getElementById("correuContacte");
        var assumpte = document.getElementById("assumpte");
        var missatge = document.getElementById("missatge");
        var nom = document.getElementById("nom");

        // variable que controla si tot és correcte o no
        let correcte = true;

        // netegem errors anteriors per començar validació neta
        if (correuContacte) correuContacte.classList.remove("error");
        if (assumpte) assumpte.classList.remove("error");
        if (missatge) missatge.classList.remove("error");
        if (nom) nom.classList.remove("error");

        // regex per validar el format del correu electrònic
        var correuvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // comprovem només el correu (aquí podríem afegir més validacions si volguéssim)
        if (correuContacte && !correuvalid.test(correuContacte.value)) {

            // si el correu no és correcte, el marquem en vermell
            correuContacte.classList.add("error");

            // indiquem error global
            correcte = false;
        }

        // si tot està bé, mostrem missatge final d'enviament correcte
        if (correcte) {

            alert("Missatge enviat correctament!");

            // aquí també es podria connectar amb un backend en el futur
        }
    });
}

// MODAL DE LA GALERIA
var imatges = document.querySelectorAll('.imatge-hover img');
var modal = document.getElementById('modal-galeria');
var imgAmpliada = document.getElementById('img-ampliada');
var tancar = document.getElementById('tancar');

if (modal && imgAmpliada && tancar && imatges.length > 0) {
    imatges.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            imgAmpliada.src = img.src;
        });
    });

    tancar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}