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

/* let seg = 0;

function contarTempo() {
  seg++;
  console.log(seg);

  showTrailer()
}

setInterval(contarTempo, 1000);

function showTrailer(){
    if (window.scrollY == 0 && seg > 5) {
        video.play()
        // Iniciar a contagem do tempo
    }
}

 */

/* EPISODES LIST */
const minha_lista = [
    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSMdzWmaEM_IBBjN6ePXrrkSxnCpliUQN6JrK0g1NVVLnJbhZ3o58nTLsfqGogfd9TtP9uUMBeEJd0hEITRidl7snCGW0sm_SDjCFyPg3fTTiYwI7DNYuvaxZkgCgNoBTovj.jpg?r=697",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/0e20cb34-1429-41ad-8bf9-c08616e63cf0_icon_ratings_BR_A18_en.png",
        qtd_ep: "11 episódios",
        genero: "Sombrios • Fantasia - séries • Vários protagonistas"
    },

    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR9Q1lnThbbzLhCf8aRzyNOei69lEn45tlju84zdlZ1MHW8-VVkTHUH_2pgAUjR5jRMzE_5TMn4Rjp5PbIOv5cLtuHdI9r8QLPXFpmOzWw0TjHq5RBRFN3Cz8-aMapbVYN8Y.jpg?r=a18",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/02768458-4248-4520-9d12-2f2d98826f81_icon_ratings_BR_16_en.png",
        qtd_ep: "Minissérie",
        genero: "Séries dramáticas • Séries dos EUA • Séries baseadas em livros"
    },

    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWJ4m9z_PfIiP1VYWMpRClq1xYpE8_J3iUCPqrnX4W-ZXH5MqfsAP7F-HE55ivSk3dNY9fnFQAfEi6XFxmlJORAkiLMWVKqbL_zq73zEBbXUcdeFDxTOCEVhrkb7Lth9Q5BJ.jpg?r=431",
        relevancia: "95% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "2 temporadas",
        genero: "Séries dramáticas • Britânico • Sombrios"
    },

    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYuKjjKMzFh6RN2q7ml5nJDrNguQzImqCdD7tTYKKUXYnliwYVjasxzPERdiwpcDhL8zqUyaRHnRhYWtajxpwaRLf1FUTtHR7CGGFkn028rZF0CCpGfBAYA-e6H0DdaVUrdO.jpg?r=393",
        relevancia: "88% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "3 temporadas",
        genero: "Séries dramáticas • Alemão • Séries de ficção científica"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ4kTYxjV7lECALzt6h-hnwdx1xe_cwCSRNWyKAax_a1cP_vttn0LiC1wW3dmn2nRlDPnWRKhI1ymZK0_WX9HIX316dhPAlzqzSiLtBAVnEtlXp87sEszb4xFYyO1VwDbUSz.jpg?r=e74",
        relevancia: "93% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "2 temporadas",
        genero: "Séries documentais • Documentários socioculturais • Séries dos EUA"
    },

    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcVz7eGUvU9mNnXnRJ9XrNdPtHKmjTim0tq5eaDCUg_hWayw_wHYaYkX0qohmJU0BJkoJnqrcQVmTwnoX3vXebycawqFGRw8UwFqagm4NRRUBnNq6S19t6XNJigs-jxm6Maf.jpg?r=cee",
        relevancia: "93% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "6 temporadas",
        genero: "Séries dramáticas • Séries policiais • Séries dos EUA"
    },
];

const em_alta = [
    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe0kLDD7JKkLXBxLWsGNotbypKpOHwfaF9AC3Mg6g1l9Sz4v5GLp11avPug8bhtWTIcLCP0zFUxA3TQTq36oy5SOb0oEn7QFkcKTgoxpmLtcMHWJR1JXpTnexJoM-npgo7dVl-D1yeZUxHj3T4oXsjlUndviS_rc4WY9gRE8zPT9ruTUw06NH_g1kJ_GwlUlNoGJ649luxgdZFcwDN6KDCDCj5jra8NrD1Vtj2So75SmW3zfIFw-kgZefv6IDDjJ5JaNXVpbNty7X6gwBfIGtCzUGpLep3QWRXYFHreozxc-gJfQN1dE0uuONd5RTOsgbJ5hbOFc-OoknBVMTA56iRxAZ5sB66d2msMADa65CXQHcKvpLFo.jpg?r=471",
        relevancia: "99% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "2 temporadas",
        genero: "Aventura • Fim do mundo • Aclamados pela crítica"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaeBTmrjFKI1GlK1J2-d4Q6kTmSOEwlrq0WUPXF79rAsO6FORY_unR467TgmawaruEI1in2DEwqSRBbuWn4xk4LBH-xrbj8z9lt6ipkjKEeleAzWEJ6otDzP9ulVixSn7Hw8.jpg?r=3cf",
        relevancia: "96% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "4 episódios",
        genero: "Nostálgico • Complexos • Drama"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcIGHwFU4tOKD1FEawce6Nj-PJPqStu4Rh7IaJmJUK9sKaFuTJ_FsYr_cG5VLe6jZb_wbAmCs1n4VZN49zJreg5aVWL66Z2jPQxB5lvCxz1KpglQ6U_VWy3A10l9bRFdzca1.jpg?r=523",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/aec3bb15-be1a-4f9f-94fa-f71e36163aef_icon_ratings_BR_A10_en.png",
        qtd_ep: "8 episódios",
        genero: "Inspiradores • Séries documentais • Bem-estar"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ3XgLwoxJH9BYaeGEqr8GHWEG9QORiOfXNOSlELGfnwNGrpEJoNv-TBtZrd_pjsIYhVUA1G8FHZRjDv-UmgdiijHWiZV3e-iMyfAGwAh0CmDERZpPXV3H4cILvEs7LVHUKAUN_r-uM77DCsx1pfgrSI5v3uK9GwmCEFLqxePrGYa3ZaOUIcUN4NlupVKr7ScXoFmWHVFxaY5C1s8KyIU4qs4NorwxHnTpc9Br7nQZcirAmP2dVui5oUu1HO6AkTdeYGticce2XqWsF1wTBOlq75u8eEDwn-qZlU3G7g093EgY51uyqmFrs8.jpg?r=e4d",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "2 temporadas",
        genero: "Psicológico • Suspense no ar • Vários protagonistas"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVBkVcfHz33ZUx4jtAAQm8VHBGeF9CqX4a-yMacdtGRJpGHjiEuHiJRmnNXudYS_9cT0ViV-dAWbW8gIC9L_mDF-1heY8QeMnxBIM1cvIF_YdL88e3mapqm_HRf8p490w9Wb.jpg?r=d22",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/790bca57-7461-46dd-bc18-fdcb64c18ab9_icon_ratings_BR_14_en.png",
        qtd_ep: "2 temporadas",
        genero: "Realidade alternativa • Sinistros • Fantasia - séries"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW1MfmL6v2EEz82u33Bg6KXmwA4dz69P_vovsQLCySGNto1ryvYv2klQ8KgTOwslPefodUp5V7cieDfNwef2Vd7gnZaaG2f_-93PfLXai9bAzZprmMlSpn6yTlGzRweEwj_f.jpg?r=9fd",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/c7693d27-63e7-47d4-95eb-71df85217448_icon_ratings_BR_18_en.png",
        qtd_ep: "4 temporadas",
        genero: "Esperto • Psicológico • Suspense"
    },
];

const doc_eua = [
    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVozOyX2CBc-nsReH6Tjgg7OySnjS7qzAXN4mDFPB-xeWYsbfYYUfByPVvOJW0K_ISd9WJ2RhpbNQAKyZA5cL9eNidY2RIfuq8vERDsoji8HbkMB45dokURE-XHLqiKuiF9q.jpg?r=19e",
        relevancia: "93% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "2 temporadas",
        genero: "Séries documentais • Documentários socioculturais • Séries dos EUA"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQxPBV00xMnXjLHXs3_u5G834AmIcO65pWCRdT9GkSh1J-2jXPOo_v391ViEjb3kd-cWz4mxlo3DNRwKALc-3ZOO3IuK6cywAg2ABkYFMKfNIACBnWX8BkO3y9P2w4UYxFW_.jpg?r=df9",
        relevancia: "72% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "12 episódios",
        genero: "Cativante • Séries documentais • Tecnologia"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdBmBDUMXrYnCLn6W7HD-TAHN9hRBjejxy1Ld9wHnMwGI1EUiUjaERqjBS3DXD68u58HeP5fMSOjFNQgTh5tA91f0GPUaw3DPBqbrgxz7YWpYqGHnjlMb6JPiEiq_i1OEbw8.jpg?r=e98",
        relevancia: "91% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "4 episódios",
        genero: "Controversos • Fascinantes • Séries documentais"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeEs5vchgm8igMuOwaC2W43SMUQsQ38NaIG2qfUnbLUaLos8_oGHDAe77o6c0jqR1ZMv1a0IRRuzV-LQBkoMrKycM-BXSzBl-dFZ0MedNdT0OP-9EN5y2pMtKq4XPwQf_nys.jpg?r=5ae",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "Minissérie",
        genero: "Controversos • Fascinantes • Séries documentais"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY9XUN-FdKdAv7W9BA6XNTtnNL-kWaSmbOk_ro-JsjH7gCiNyAQXzvG4XAZGCrA-XHI6Sx25rbb9G8dmOZIkSqURIiVM_dBfCXga3cCiAyqel5FJRMj1A4ejxdGwfN3OTe2D.jpg?r=5c9",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "3 temporadas",
        genero: "Fascinante • Investigativo • Séries documentais"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX0xn0-mIYX5XayasrJKxNBZoKHoMKBSlcVTdWDkjF5dMbIeB78kReUOaaiyFCNKL0_L0qtz0h36nRm9iYtnVr1DEzD3CiN_6EUSHfEMyXsodAmt2VTDQ9VgUBltCyG6zfvw.jpg?r=ed1",
        relevancia: "90% relevante",
        clas_ind: "https://help.nflxext.com/53a43095-64ee-4a04-b49b-a7865a4e0eab_icon_ratings_BR_A12_en.png",
        qtd_ep: "Minissérie",
        genero: "Investigativos • Séries documentais • Mudança climática"
    }
];

const aclam_critica = [
    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSMdzWmaEM_IBBjN6ePXrrkSxnCpliUQN6JrK0g1NVVLnJbhZ3o58nTLsfqGogfd9TtP9uUMBeEJd0hEITRidl7snCGW0sm_SDjCFyPg3fTTiYwI7DNYuvaxZkgCgNoBTovj.jpg?r=697",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/0e20cb34-1429-41ad-8bf9-c08616e63cf0_icon_ratings_BR_A18_en.png",
        qtd_ep: "11 episódios",
        genero: "Sombrios • Fantasia - séries • Vários protagonistas"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcpWJPUNeXpIVKDsL-h6H-nNdsOMTQzjj3h0iOsmFdCNq7ktnrFk9Q1fUgzVhMjDyJ41BHdHUq0SAvGmOdGUK419flOqCNOYOqTLUd2wjZopXudZi2NeIINoS-qFN7AkzfKI.jpg?r=7f6",
        relevancia: "92% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "6 temporadas",
        genero: "Séries dramáticas • Britânico • Obras de época"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVUK0iqldH5xZsFRsM5XeDgHQC2gUxlBlJsB2KlAK3NaiWlGSn9ZdM7AwK6jad63KAsVFBwdibSkCToK757Y7gUhVxD_C1kykYiAFeA3uR8x-SOd6pDJIFEEuauT1J__K654.jpg?r=280",
        relevancia: "93% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "2 partes",
        genero: "Realidade alternativa • Intimista • Amizade"
    },

    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYuKjjKMzFh6RN2q7ml5nJDrNguQzImqCdD7tTYKKUXYnliwYVjasxzPERdiwpcDhL8zqUyaRHnRhYWtajxpwaRLf1FUTtHR7CGGFkn028rZF0CCpGfBAYA-e6H0DdaVUrdO.jpg?r=393",
        relevancia: "88% relevante",
        clas_ind: "https://help.nflxext.com/0e20cb34-1429-41ad-8bf9-c08616e63cf0_icon_ratings_BR_A18_en.png",
        qtd_ep: "10 eposiódios",
        genero: "Sinístros • Psicologia • Terror"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZvUcJ56xd0UH0atq244i0LLLtPljDqDzGu1250JZUmhAK7PvTXZCk1vwYg5lgtoL3CHrKNtJkqGAAzsVtil2KhD-6_43p5xxGb81iaRwGOYIVpWED6yloNAQ9l-JTbCaUZm.jpg?r=e31",
        relevancia: "95% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "8 episódios",
        genero: "Séries dramáticas • Brasileiro • Comédias para a TV"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX3JAszGkPIQu6cYtq8MnAHQgML3LgJ55rJ5SbhvqRUMmsijHbWtDyqz57rpOkpAlmi6OF-MyD1GzwcVuIPwJctAQ0AukUMgv8tPL0_TiLMSSCBCnqOGfriudYp_Ic-1sRrT.jpg?r=847",
        relevancia: "96% relevante",
        clas_ind: "https://help.nflxext.com/02768458-4248-4520-9d12-2f2d98826f81_icon_ratings_BR_16_en.png",
        qtd_ep: "6 temporadas",
        genero: "Calientes • Intimista • Aventura"
    }
];

const assis_fds = [
    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ9MBFQyJqdHMTOHCD-tHYGvw5V7Imnx0RsfWwFYgmvaIplbBqFQqkkbVJ1Tkr4MaMLRgI4EbEI62k9VAjeFxcOxqBz2LUX9XYRIiLkhZJ-7nPKd0YAGIaOZD2xUY3Ivkkgq.jpg?r=d7f",
        relevancia: "81% relevante",
        clas_ind: "https://help.nflxext.com/790bca57-7461-46dd-bc18-fdcb64c18ab9_icon_ratings_BR_14_en.png",
        qtd_ep: "9 episódios",
        genero: "Séries de ação e aventura • SérieS dos EUA • Séries de fantasia"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf6NR2aU2ZKlCAHuLBDZmYoF5V424-nK1GE26M4j7HMMeIWytf4XPw4NGO-1dHGkQnFFgT3kh9ymv37XmHF9Ht2Wens5L730XTEaJmDiYuXdJeXR2zYRiYWnnn0icWujjH3N.jpg?r=bbf",
        relevancia: "78% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "6 episódios",
        genero: "Suspense no ar • Comédia dramática • Fraude"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQyEILSWxZ3NzBXM-5tcsUbJa6ZxqJS0Y7tA8bgaLMvBmZTTqWk9G9lame9uaY875yCcpRxao7cXrH6hdeG6vDbN3-_9N-qm-u9DpUwIBzw6EuMtrr9dZ9BmCtXA-g1Ol4WW.jpg?r=b9a",
        relevancia: "96% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "3 temporadas",
        genero: "Séries dramáticas • Alemão • Séries teen"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXvsWSnRJpwhPmHeYJS8axTZDbZohwMZP2b6akgHpLaL3yOrIfJ7RUlkh_SHdYucyeQWSVryrUgJnI0uf92VtfaU3BC7u00FqJQdzSS5iwH-ltUXii9cuhSNadLbQWvkJp8R.jpg?r=79f",
        relevancia: "95% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "2 temporadas",
        genero: "TV sobre médicos • Séries dramáticas • Alemão"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZbgQpoeIp0FuRSJ8YHVu-vRjQJgLCqAQ4c4RgsXFyRrsUNUOkTlyg6wUC18vOPt1qjmSWg2y013j0vu_OAQF2caVUYmWcwzAQB3CfcPX0EWcum1NzwQvvPlkJ0tV1Ot8hVC.jpg?r=b35",
        relevancia: "89% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "10 episódios",
        genero: "Irreverentes • Empolgantes • Avnetura"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVBkVcfHz33ZUx4jtAAQm8VHBGeF9CqX4a-yMacdtGRJpGHjiEuHiJRmnNXudYS_9cT0ViV-dAWbW8gIC9L_mDF-1heY8QeMnxBIM1cvIF_YdL88e3mapqm_HRf8p490w9Wb.jpg?r=d22",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/790bca57-7461-46dd-bc18-fdcb64c18ab9_icon_ratings_BR_14_en.png",
        qtd_ep: "2 temporadas",
        genero: "Realidade alternativa • Sinistros • Fantasia - séries"
    }
];

const pop_netflx = [
    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZWidBZMBa8QPNBShxxivvCdIxHJuQimVoAqepq6dI_Fo5j7o9bQu1JCq3Sa_a5ZwqYCAg95zOkR6tFxJwTYx5MuAMQS5PIIMGM.webp?r=e8f",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/02768458-4248-4520-9d12-2f2d98826f81_icon_ratings_BR_16_en.png",
        qtd_ep: "5 temporadas",
        genero: "Violentos • Realista • Suspense"
    },

    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTCMsEsAV40gqZ2li1XyXix1iURz9QIOUmADFS1ejByRU8RCSlHMnf4R5rM7-PlVztrvElWZ0uwQ3bJR1HcFG07teZO73VgOOgQ.webp?r=a30",
        relevancia: "91% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "3 temporadas",
        genero: "Realidade alternativa • Impacto visual • Superpoderes"
    },

    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdkpMg0dSgVnyDHb1nVhX08bNDphBpyrc5ebRCvYRRECAyJzPL7Mo74Vl6h1gPFueFSn6FbIvRL35slVIk3UYPrcdmcNz1IPWIM.webp?r=256",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/790bca57-7461-46dd-bc18-fdcb64c18ab9_icon_ratings_BR_14_en.png",
        qtd_ep: "9 temporadas",
        genero: "Espirituoso • Comédia dramática • Tribunal"
    },

    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfIofrzCBlmkmigaSgOZMYhaulmZpR2SlHOfJ-2vTxuF-_NheFcRSs2Fv0O-lhSlml4LNz71F7EJ97yIl7YBUcpu9vSILHQ9RQRHKo-VsfZKFSxweQdCvDqks9LBxaNMFo_w.jpg?r=233",
        relevancia: "97% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "16 episódios",
        genero: "Inspiradores • Drama • Tribunal"
    },

    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbAV2pUjbWLBN_PM4eITDL8KNNNEMojV6a_SQFrhHaaP-mDzKmtmJpnDheSCLkAv6DvIYNhL2ZMZpqwjZbLN3n4oEBukoln0CCDbL9n_4Shcm1eGg4-WWDiyGRtIeLojXNe-.jpg?r=fb9",
        relevancia: "96% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "Minissérie",
        genero: "Esperto • Suspense no ar • Mistério"
    },

    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU5qBfVXDpaxjHQwpFGVufe8uv-tjwDj2__yoCodjzyuCMyADp3vASzNJ8GSXGHuInUv6A5tG4LfYZM4C12uUbf_MvsiExpwb3pUQ40B8JB7P5vcZMeU5oe1rAyR-qNHeZAn.jpg?r=200",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "4 temporadas",
        genero: "Realidade alternativa • Suspense no ar • Vários protagonistas"
    }
];

const sus_tv = [
    {
        img: "http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU5qBfVXDpaxjHQwpFGVufe8uv-tjwDj2__yoCodjzyuCMyADp3vASzNJ8GSXGHuInUv6A5tG4LfYZM4C12uUbf_MvsiExpwb3pUQ40B8JB7P5vcZMeU5oe1rAyR-qNHeZAn.jpg?r=200",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/18c47a92-62ed-4509-aaa1-799e538a0468_icon_ratings_BR_A14_en.png",
        qtd_ep: "4 temporadas",
        genero: "Realidade alternativa • Suspense no ar • Vários protagonistas"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ3XgLwoxJH9BYaeGEqr8GHWEG9QORiOfXNOSlELGfnwNGrpEJoNv-TBtZrd_pjsIYhVUA1G8FHZRjDv-UmgdiijHWiZV3e-iMyfAGwAh0CmDERZpPXV3H4cILvEs7LVHUKAUN_r-uM77DCsx1pfgrSI5v3uK9GwmCEFLqxePrGYa3ZaOUIcUN4NlupVKr7ScXoFmWHVFxaY5C1s8KyIU4qs4NorwxHnTpc9Br7nQZcirAmP2dVui5oUu1HO6AkTdeYGticce2XqWsF1wTBOlq75u8eEDwn-qZlU3G7g093EgY51uyqmFrs8.jpg?r=e4d",
        relevancia: "98% relevante",
        clas_ind: "https://help.nflxext.com/2c7604ae-e0f9-466a-8821-3efdbd42be2a_icon_ratings_BR_A16_en.png",
        qtd_ep: "2 temporadas",
        genero: "Psicológico • Suspense no ar • Vários protagonistas"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV001g1xarsnczulP4QgAwna_3mLxLVIFBOBVXAUGh_SlrWFx9mtyypE9jtTSNsblhsqR9gHxKWY8Worm8Y9fsx635513AVXu9Q.webp?r=bc9http://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTCMsEsAV40gqZ2li1XyXix1iURz9QIOUmADFS1ejByRU8RCSlHMnf4R5rM7-PlVztrvElWZ0uwQ3bJR1HcFG07teZO73VgOOgQ.webp?r=a30",
        relevancia: "91% relevante",
        clas_ind: "https://help.nflxext.com/02768458-4248-4520-9d12-2f2d98826f81_icon_ratings_BR_16_en.png",
        qtd_ep: "37 episódios",
        genero: "Animes Shounen • Japonês • Animes - mistério e suspense"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYgcfrrdMUY6VAUnV8lSsRcCEgvGPHwSzrh9yhyrN4iM4t-Pn23LgzxUWmMgHaZbVZ1iOtWoQtCJUwD-DfuNzFJAG84-uSqAkj4.webp?r=27b",
        relevancia: "89% relevante",
        clas_ind: "https://help.nflxext.com/02768458-4248-4520-9d12-2f2d98826f81_icon_ratings_BR_16_en.png",
        qtd_ep: "6 temporadas",
        genero: "Suspense no ar • Mistério • Tribunal"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSqvdOleKGTzXDcmHYC5gT1NnTSKpDSavzQyyCdHDjvUB88Hq3bTW7dUxJPrYrDtX9zX3Y8scSPuGVgRcyydnhrdUOVUgo-WeFc.webp?r=a29",
        relevancia: "90% relevante",
        clas_ind: "https://help.nflxext.com/0e20cb34-1429-41ad-8bf9-c08616e63cf0_icon_ratings_BR_A18_en.png",
        qtd_ep: "11 temporadas",
        genero: "Distopia • Sangrento • Terror"
    },

    {
        img: "https://occ-0-894-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcDl0dBsxNJZbedEKOxVO4dLuP41A5x2jkW6ZzelaEhJIPoqxzUD4Ah2bEYNSxukswZfDG6TIooHj3Lm26sWqvPCEwyAiiUF5nZYbZaJwyV7KN2Y3-Tafj2kAxgaQ2J2XaIV.jpg?r=4e7",
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

    <img src="${titulo.img}">

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