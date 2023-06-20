/* NAV OPACITY */
var pos = document.documentElement;
/* const video = document.querySelector('video'); */

window.addEventListener('scroll', opa)
/* window.addEventListener('scroll', showTrailer) */

function opa(e) {
    var opacity = window.scrollY / 100
    if (opacity > 1) {
        opacity = 1
    }

    pos.style.setProperty('--op', opacity)
}


/* EPISODES LIST */
const minha_lista = [
    {
        img: "SandMan",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/0e20cb34-1429-41ad-8bf9-c08616e63cf0_icon_ratings_BR_A18_en.png",
        qtd_ep: "11 episódios",
        genero: "Sombrios • Fantasia - séries • Vários protagonistas"
    },

    {
        img: "Gambito",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/02768458-4248-4520-9d12-2f2d98826f81_icon_ratings_BR_16_en.png",
        qtd_ep: "Minissérie",
        genero: "Séries dramáticas • Séries dos EUA • Séries baseadas em livros"
    },

    {
        img: "TEOTFW",
        relevancia: "95% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "2 temporadas",
        genero: "Séries dramáticas • Britânico • Sombrios"
    },

    {
        img: "DARK",
        relevancia: "88% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "3 temporadas",
        genero: "Séries dramáticas • Alemão • Séries de ficção científica"
    },

    {
        img: "abstract",
        relevancia: "93% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "2 temporadas",
        genero: "Séries documentais • Documentários socioculturais • Séries dos EUA"
    },

    {
        img: "lucifer",
        relevancia: "93% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "6 temporadas",
        genero: "Séries dramáticas • Séries policiais • Séries dos EUA"
    },
];

const em_alta = [
    {
        img: "st",
        relevancia: "99% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "2 temporadas",
        genero: "Aventura • Fim do mundo • Aclamados pela crítica"
    },

    {
        img: "bb",
        relevancia: "96% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "4 episódios",
        genero: "Nostálgico • Complexos • Drama"
    },

    {
        img: "cfr",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/aec3bb15-be1a-4f9f-94fa-f71e36163aef_icon_ratings_BR_A10_en.png",
        qtd_ep: "8 episódios",
        genero: "Inspiradores • Séries documentais • Bem-estar"
    },

    {
        img: "bve",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "2 temporadas",
        genero: "Psicológico • Suspense no ar • Vários protagonistas"
    },

    {
        img: "ci",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/790bca57-7461-46dd-bc18-fdcb64c18ab9_icon_ratings_BR_14_en.png",
        qtd_ep: "2 temporadas",
        genero: "Realidade alternativa • Sinistros • Fantasia - séries"
    },

    {
        img: "vc",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/c7693d27-63e7-47d4-95eb-71df85217448_icon_ratings_BR_18_en.png",
        qtd_ep: "4 temporadas",
        genero: "Esperto • Psicológico • Suspense"
    },
];

const doc_eua = [
    {
        img: "abstract2",
        relevancia: "93% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "2 temporadas",
        genero: "Séries documentais • Documentários socioculturais • Séries dos EUA"
    },

    {
        img: "fut",
        relevancia: "72% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "12 episódios",
        genero: "Cativante • Séries documentais • Tecnologia"
    },

    {
        img: "dac",
        relevancia: "91% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "4 episódios",
        genero: "Controversos • Fascinantes • Séries documentais"
    },

    {
        img: "sa",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "Minissérie",
        genero: "Controversos • Fascinantes • Séries documentais"
    },

    {
        img: "exp",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "3 temporadas",
        genero: "Fascinante • Investigativo • Séries documentais"
    },

    {
        img: "cbg",
        relevancia: "90% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "Minissérie",
        genero: "Investigativos • Séries documentais • Mudança climática"
    }
];

const aclam_critica = [
    {
        img: "SandMan",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/0e20cb34-1429-41ad-8bf9-c08616e63cf0_icon_ratings_BR_A18_en.png",
        qtd_ep: "11 episódios",
        genero: "Sombrios • Fantasia - séries • Vários protagonistas"
    },

    {
        img: "peba",
        relevancia: "92% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "6 temporadas",
        genero: "Séries dramáticas • Britânico • Obras de época"
    },

    {
        img: "oa",
        relevancia: "93% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "2 partes",
        genero: "Realidade alternativa • Intimista • Amizade"
    },

    {
        img: "DARK",
        relevancia: "88% relevante",
        clas_ind: "https://help.nflxext.com/0e20cb34-1429-41ad-8bf9-c08616e63cf0_icon_ratings_BR_A18_en.png",
        qtd_ep: "10 eposiódios",
        genero: "Sinístros • Psicologia • Terror"
    },

    {
        img: "dhm",
        relevancia: "95% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "8 episódios",
        genero: "Séries dramáticas • Brasileiro • Comédias para a TV"
    },

    {
        img: "nob",
        relevancia: "96% relevante",
        clas_ind: "https://help.nflxext.com/02768458-4248-4520-9d12-2f2d98826f81_icon_ratings_BR_16_en.png",
        qtd_ep: "6 temporadas",
        genero: "Calientes • Intimista • Aventura"
    }
];

const assis_fds = [
    {
        img: "arc",
        relevancia: "81% relevante",
        clas_ind: "https://help.nflxext.com/790bca57-7461-46dd-bc18-fdcb64c18ab9_icon_ratings_BR_14_en.png",
        qtd_ep: "9 episódios",
        genero: "Séries de ação e aventura • SérieS dos EUA • Séries de fantasia"
    },

    {
        img: "rs",
        relevancia: "78% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "6 episódios",
        genero: "Suspense no ar • Comédia dramática • Fraude"
    },

    {
        img: "cvdo",
        relevancia: "96% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "3 temporadas",
        genero: "Séries dramáticas • Alemão • Séries teen"
    },

    {
        img: "bio",
        relevancia: "95% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "2 temporadas",
        genero: "TV sobre médicos • Séries dramáticas • Alemão"
    },

    {
        img: "imps",
        relevancia: "89% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "10 episódios",
        genero: "Irreverentes • Empolgantes • Avnetura"
    },

    {
        img: "ci",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/790bca57-7461-46dd-bc18-fdcb64c18ab9_icon_ratings_BR_14_en.png",
        qtd_ep: "2 temporadas",
        genero: "Realidade alternativa • Sinistros • Fantasia - séries"
    }
];

const pop_netflx = [
    {
        img: "brba",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/02768458-4248-4520-9d12-2f2d98826f81_icon_ratings_BR_16_en.png",
        qtd_ep: "5 temporadas",
        genero: "Violentos • Realista • Suspense"
    },

    {
        img: "leg",
        relevancia: "91% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "3 temporadas",
        genero: "Realidade alternativa • Impacto visual • Superpoderes"
    },

    {
        img: "suits",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/790bca57-7461-46dd-bc18-fdcb64c18ab9_icon_ratings_BR_14_en.png",
        qtd_ep: "9 temporadas",
        genero: "Espirituoso • Comédia dramática • Tribunal"
    },

    {
        img: "ae",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "16 episódios",
        genero: "Inspiradores • Drama • Tribunal"
    },

    {
        img: "calei",
        relevancia: "96% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "Minissérie",
        genero: "Esperto • Suspense no ar • Mistério"
    },

    {
        img: "manif",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "4 temporadas",
        genero: "Realidade alternativa • Suspense no ar • Vários protagonistas"
    }
];

const sus_tv = [
    {
        img: "manif",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "4 temporadas",
        genero: "Realidade alternativa • Suspense no ar • Vários protagonistas"
    },

    {
        img: "bve",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "2 temporadas",
        genero: "Psicológico • Suspense no ar • Vários protagonistas"
    },

    {
        img: "dn",
        relevancia: "91% relevante",
        clas_ind: "https://help.nflxext.com/02768458-4248-4520-9d12-2f2d98826f81_icon_ratings_BR_16_en.png",
        qtd_ep: "37 episódios",
        genero: "Animes Shounen • Japonês • Animes - mistério e suspense"
    },

    {
        img: "assas",
        relevancia: "89% relevante",
        clas_ind: "https://help.nflxext.com/02768458-4248-4520-9d12-2f2d98826f81_icon_ratings_BR_16_en.png",
        qtd_ep: "6 temporadas",
        genero: "Suspense no ar • Mistério • Tribunal"
    },

    {
        img: "twd",
        relevancia: "90% relevante",
        clas_ind: "https://help.nflxext.com/0e20cb34-1429-41ad-8bf9-c08616e63cf0_icon_ratings_BR_A18_en.png",
        qtd_ep: "11 temporadas",
        genero: "Distopia • Sangrento • Terror"
    },

    {
        img: "13rh",
        relevancia: "90% relevante",
        clas_ind: "https://help.nflxext.com/c7693d27-63e7-47d4-95eb-71df85217448_icon_ratings_BR_18_en.png",
        qtd_ep: "4 temporadas",
        genero: "Sombreos • Suspense no ar • Teen"
    },

];

const list1 = document.querySelector(".l1");
const list2 = document.querySelector(".l2");
const list3 = document.querySelector(".l3");
const list4 = document.querySelector(".l4");
const list5 = document.querySelector(".l5");
const list6 = document.querySelector(".l6");
const list7 = document.querySelector(".l7");

function addCard(lista, catalogo) {
    for (let i = 0; i < catalogo.length; i++) {
        renderCard(lista, catalogo[i]);
    }
}

addCard(list1, minha_lista);
addCard(list2, em_alta);
addCard(list3, doc_eua);
addCard(list4, aclam_critica);
addCard(list5, assis_fds);
addCard(list6, pop_netflx);
addCard(list7, sus_tv);

function renderCard(lista, titulo) {
    const listItem = document.createElement("div");
    listItem.classList.add("opt");

    listItem.innerHTML = `

    <img src="imagens/${titulo.img}.jpg">

    <div class="minfo">
        <div class="btns">
            <div class="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="#000" stroke="none" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="lucide lucide-play">
                    <circle fill="#FFF" cx="12" cy="12" r="12"></circle>
                    <polygon points="7.75 5 19 12 7.75 19 7.75 3" fill="#000"></polygon>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="#ddd" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" class="lucide lucide-plus">
                    <circle stroke="#FFF" cx="12" cy="12" r="11"></circle>
                    <line x1="12" x2="12" y1="8" y2="16"></line>
                    <line x1="8" x2="16" y1="12" y2="12"></line>
                </svg>

                <svg width="24" height="24" viewbox="0 0 24 24" stroke="#fff" fill="none"
                    stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
                    <circle stroke="#FFF" cx="12" cy="12" r="11"></circle>
                    <path transform="scale(0.6) translate(8,6)" fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.407 6.25579L13.313 5.50407C13.1342 4.07353 11.9181 3 10.4764 3C10.2133 3 10 3.21331 10 3.47644V6.7132C10 6.90062 9.94733 7.08427 9.848 7.2432L7.90742 10.3481C7.64516 10.7677 7.23665 11.0752 6.76086 11.2112L4.72528 11.7928C4.29598 11.9154 4 12.3078 4 12.7543V18.3161C4 18.6938 4.30618 19 4.68387 19C5.874 19 7.04352 19.3106 8.07684 19.9011L8.25 20C9.39679 20.6553 10.6947 21 12.0156 21H13H16H16.5C17.3284 21 18 20.3284 18 19.5C18 19.1158 17.8556 18.7654 17.6181 18.5H18C18.8284 18.5 19.5 17.8284 19.5 17C19.5 16.4601 19.2147 15.9868 18.7867 15.7226C19.478 15.5888 20 14.9804 20 14.25C20 13.4216 19.3284 12.75 18.5 12.75H18.3294C18.7336 12.4813 19 12.0217 19 11.5C19 10.6716 18.3284 10 17.5 10H13.125L13.407 7.74421C13.4688 7.24999 13.4688 6.75001 13.407 6.25579Z">
                    </path>
                </svg>
            </div>
            <div class="right">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" class="lucide lucide-chevron-down">
                    <circle stroke="#FFF" cx="12" cy="12" r="11"></circle>
                    <polyline transform="scale(0.6) translate(8,8)" points="6 9 12 15 18 9">
                    </polyline>
                </svg>
            </div>
        </div>

        <div class="inf">
            <div class="rel">
                <h4>${titulo.relevancia}</h4>
            </div>
            <img class="cl_in" src="${titulo.clas_ind}">
                <h4>${titulo.qtd_ep}</h4>
                <h4 class="qual">HD</h4>
        </div>

        <div class="gen">
            <h4>${titulo.genero}</h4>
        </div>

        <div class="curt">
            <svg width="24" height="24" viewbox="0 0 30 30" fill="none" stroke-width="1.5"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="30" height="30" fill="red"></rect>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF"
                    transform="translate(2, 2)"
                    d="M13.407 6.25579L13.313 5.50407C13.1342 4.07353 11.9181 3 10.4764 3C10.2133 3 10 3.21331 10 3.47644V6.7132C10 6.90062 9.94733 7.08427 9.848 7.2432L7.90742 10.3481C7.64516 10.7677 7.23665 11.0752 6.76086 11.2112L4.72528 11.7928C4.29598 11.9154 4 12.3078 4 12.7543V18.3161C4 18.6938 4.30618 19 4.68387 19C5.874 19 7.04352 19.3106 8.07684 19.9011L8.25 20C9.39679 20.6553 10.6947 21 12.0156 21H13H16H16.5C17.3284 21 18 20.3284 18 19.5C18 19.1158 17.8556 18.7654 17.6181 18.5H18C18.8284 18.5 19.5 17.8284 19.5 17C19.5 16.4601 19.2147 15.9868 18.7867 15.7226C19.478 15.5888 20 14.9804 20 14.25C20 13.4216 19.3284 12.75 18.5 12.75H18.3294C18.7336 12.4813 19 12.0217 19 11.5C19 10.6716 18.3284 10 17.5 10H13.125L13.407 7.74421C13.4688 7.24999 13.4688 6.75001 13.407 6.25579Z">
                </path>
            </svg>
            <h4>Mais curtidos</h4>
        </div>
    </div>
    `;

    lista.appendChild(listItem);
}



/* MENU HAMBURGUER */
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.NavLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass)
        pos.style.setProperty('--op', "1")
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavbar.init();