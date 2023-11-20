function openCategoryContent_Album() {
    var paginaInicial = document.getElementById('categoria-artista');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('pagina-inicial');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('pagina-sobre');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('categoria-canção');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('categoria-gravação');
    paginaInicial.style.display = 'none';

    var categoriaAlbum = document.getElementById('categoria-album');
    categoriaAlbum.style.display = 'block';

    var cardsAlbum = document.getElementById('cards-album');
    cardsAlbum.style.display = 'block';
}

function openCategoryContent_Gravacao() {
    var paginaInicial = document.getElementById('categoria-artista');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('categoria-album');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('categoria-canção');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('pagina-inicial');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('pagina-sobre');
    paginaInicial.style.display = 'none';

    var categoriaAlbum = document.getElementById('categoria-gravação');
    categoriaAlbum.style.display = 'block';

    var cardsAlbum = document.getElementById('cards-gravação');
    cardsAlbum.style.display = 'block';
}

function openCategoryContent_Artista() {
    var paginaInicial = document.getElementById('categoria-gravação');
    paginaInicial.style.display = 'none'

    var paginaInicial = document.getElementById('categoria-album');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('categoria-canção');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('pagina-inicial');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('pagina-sobre');
    paginaInicial.style.display = 'none';

    var categoriaAlbum = document.getElementById('categoria-artista');
    categoriaAlbum.style.display = 'block';

    var cardsAlbum = document.getElementById('cards-artista');
    cardsAlbum.style.display = 'block';
}

function openCategoryContent_Cancao() {
    var paginaInicial = document.getElementById('categoria-gravação');
    paginaInicial.style.display = 'none'

    var paginaInicial = document.getElementById('categoria-album');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('pagina-inicial');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('categoria-artista');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('pagina-sobre');
    paginaInicial.style.display = 'none';

    var categoriaAlbum = document.getElementById('categoria-canção');
    categoriaAlbum.style.display = 'block';

    var cardsAlbum = document.getElementById('cards-cancao');
    cardsAlbum.style.display = 'block'; 
}

function openCategorySobre() {
    var paginaInicial = document.getElementById('categoria-gravação');
    paginaInicial.style.display = 'none'

    var paginaInicial = document.getElementById('categoria-album');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('pagina-inicial');
    paginaInicial.style.display = 'none';

    var paginaInicial = document.getElementById('categoria-artista');
    paginaInicial.style.display = 'none';

    var categoriaAlbum = document.getElementById('categoria-canção');
    categoriaAlbum.style.display = 'none';

    var categoriaAlbum = document.getElementById('pagina-sobre');
    categoriaAlbum.style.display = 'block';

}
    
    //FORMULARIO
    document.getElementById('categoria').addEventListener('change', function () {
        var categoria = this.value;
        var passwordField = document.getElementById('obra');

        if (categoria === 'Artista Revelação') {
            passwordField.setAttribute('disabled', 'true');
            passwordField.setAttribute('placeholder', 'Esse campo não é necessário');
        } else {
            passwordField.removeAttribute('disabled');
            passwordField.setAttribute('placeholder', 'Obra');
        }
    });

    //ABRIR CONTEUDO DOS CARDS ALBUM
    var toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function() {

        var cardBodies = document.querySelectorAll('.card-body');
        cardBodies.forEach(function(cardBody) {
            if (cardBody.style.display === 'none' || cardBody.style.display === '') {
                cardBody.style.display = 'block';
            } else {
                cardBody.style.display = 'none';
            }
        });
    });
    //ABRIR CONTEUDO DOS CARDS GRAVAÇÃO
    var toggleButton = document.getElementById('toggleButton-2');

    toggleButton.addEventListener('click', function() {

        var cardBodies = document.querySelectorAll('.card-body');
        cardBodies.forEach(function(cardBody) {
            if (cardBody.style.display === 'none' || cardBody.style.display === '') {
                cardBody.style.display = 'block';
            } else {
                cardBody.style.display = 'none';
            }
        });
    });

    //ABRIR CONTEUDO CARD ARTISTA
    var toggleButton = document.getElementById('toggleButton-3');

    toggleButton.addEventListener('click', function() {

        var cardBodies = document.querySelectorAll('.card-body');
        cardBodies.forEach(function(cardBody) {
            if (cardBody.style.display === 'none' || cardBody.style.display === '') {
                cardBody.style.display = 'block';
            } else {
                cardBody.style.display = 'none';
            }
        });
    });

    //ABRIR CONTEUDO CARD CANÇÃO
    var toggleButton = document.getElementById('toggleButton-4');

    toggleButton.addEventListener('click', function() {

        var cardBodies = document.querySelectorAll('.card-body');
        cardBodies.forEach(function(cardBody) {
            if (cardBody.style.display === 'none' || cardBody.style.display === '') {
                cardBody.style.display = 'block';
            } else {
                cardBody.style.display = 'none';
            }
        });
    });

     //YOUTUBE

    document.addEventListener('DOMContentLoaded', function () {
        //ALBUM DO ANO
        var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
        var youtubeVideo = document.getElementById('youtubeVideo');
    
        var btnClose = document.querySelector('#videoModal .btn-close');
        btnClose.addEventListener('click', function () {
            youtubeVideo.removeAttribute('src');
            videoModal.hide();
        });
    
        videoModal._element.addEventListener('show.bs.modal', function () {
            youtubeVideo.setAttribute('src', 'https://www.youtube.com/embed/Dbo1B9-0Q3Q?si=VxVr1Rit_5VZl-Fv');
        });
        //GRAVAÇÃO DO ANO
        var videoModal_2 = new bootstrap.Modal(document.getElementById('videoModal_2'));
        var youtubeVideo_2 = document.getElementById('youtubeVideo_2');
    
        var btnClose_2 = document.querySelector('#videoModal_2 .btn-close');
        btnClose_2.addEventListener('click', function () {
            youtubeVideo_2.removeAttribute('src');
            videoModal_2.hide();
        });
        
        videoModal_2._element.addEventListener('show.bs.modal', function () {
            youtubeVideo_2.setAttribute('src', 'https://www.youtube.com/embed/azg3JiCs3Bg?si=kDMgeeOM35YBU3Kz');
        });

        //ARTISTA REVELAÇÃO
        var videoModal_3 = new bootstrap.Modal(document.getElementById('videoModal_3'));
        var youtubeVideo_3 = document.getElementById('youtubeVideo_3');
    
        var btnClose_3 = document.querySelector('#videoModal_3 .btn-close');
        btnClose_3.addEventListener('click', function () {
            youtubeVideo_3.removeAttribute('src');
            videoModal_3.hide();
        });
        
        videoModal_3._element.addEventListener('show.bs.modal', function () {
            youtubeVideo_3.setAttribute('src', 'https://www.youtube.com/embed/bTRKshShesU?si=YCgxBSEBlSU2elSO');
        });

        //CANÇÃO DO ANO
        var videoModal_4 = new bootstrap.Modal(document.getElementById('videoModal_4'));
        var youtubeVideo_4 = document.getElementById('youtubeVideo_4');
    
        var btnClose_4 = document.querySelector('#videoModal_4 .btn-close');
        btnClose_4.addEventListener('click', function () {
            youtubeVideo_4.removeAttribute('src');
            videoModal_4.hide();
        });
        
        videoModal_4._element.addEventListener('show.bs.modal', function () {
            youtubeVideo_4.setAttribute('src', 'https://www.youtube.com/embed/4SGDteHRh4Q?si=RF1V4TI_GKarO8Ap');
        });
        $(document).ready(function () {
            $('.participate-link').click(function (e) {
                e.preventDefault();
                $('#participateModal').modal('show');
            });
        });
    });
    
    
    document.addEventListener("click",function (e){
        if(e.target.classList.contains("gallery-item")){
              const src = e.target.getAttribute("src");
              document.querySelector(".modal-img").src = src;
              const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
              myModal.show();
        }
      })
    
    

