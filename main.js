// intercetto il click sui pallini e li associo alle immagini
$('.fa-circle').click(function() {
    // recupero l'indice di ogni pallino e gli assegno un var
    var indice = $(this).index();

    // rimuovo momentaneamente la classe visible alle immagini
    $('img.visible').removeClass('visible');
    // rimuovo momentaneamente la classe bianco ai pallini
    $('.fa-circle').removeClass('bianco');

    // associo le img trovate con l'indice dei pallini, e gli aggiungo la classe visible ogni volta che clicco sul pallino.
    $('.images').find('img').eq(indice).addClass('visible');
    // associo la classe bianco con l'indice dei pallini, cosi facendo avranno lo sfondo bianco ogni volta che li clicco.
    $('.bullets').find('.fa-circle').eq(indice).addClass('bianco');
});


// intecetto il clic sulla freccia destra
$('.freccia-destra').click(function() {
    // recupero l'img che ha la classe visible in questo momento
    var current_image = $('img.visible');
    // recupero il paòlino che ha la classe bianco in questo momento
    var current_bullet = $('.fa-circle.bianco')

    // rimuovo temporaneamente la classe visible all'immagine
    current_image.removeClass('visible');
    // rimuovo temporaneamente la classe bianco al pallino
    current_bullet.removeClass('bianco');

    // recupero l'immagine successiva
    var next_image = current_image.next('.images img');
    // recupero il pallino successivo
    var next_bullet = current_bullet.next('.bullets .fa-circle');

    // verifico che esista l'immagine e il pallino successivo
    if (next_image.length !=0) {
        // c'è un immagine e un pallino successivo
        // gli metto la classe visible all'img e la classe bianco al pallino
        next_image.addClass('visible');
        next_bullet.addClass('bianco');
    } else {
        // non c'è un'immagine o un pallino successivo
        // riparto dall'inizio assegnando "first child" all'img e al pallino
        next_image = $('.images img:first-child');
        next_image.addClass('visible');

        // abbreviazione del comando sopra
        $('.bullets .fa-circle:first-child').addClass('bianco');
    }
});

// intecetto il clic sulla freccia sinistra
$('.freccia-sinistra').click(function() {
    // recupero l'img che ha la classe visible in questo momento
    var current_image = $('img.visible');
    // recupero il paòlino che ha la classe bianco in questo momento
    var current_bullet = $('.fa-circle.bianco')

    // rimuovo temporaneamente la classe visible all'immagine
    current_image.removeClass('visible');
    // rimuovo temporaneamente la classe bianco al pallino
    current_bullet.removeClass('bianco');

    // recupero l'immagine e il pallino precedente
    var next_image = current_image.prev('.images img');
    var next_bullet = current_bullet.prev('.bullets .fa-circle');

    // verifico che esista l'immagine e il pallino precedente
    if (next_image.length !=0) {
        // c'è un immagine e un pallino precedente
        // gli metto la classe visible all'img e la classe bianco al pallino
        next_image.addClass('visible');
        next_bullet.addClass('bianco');
    } else {
        // non c'è un'immagine o un pallino precedente
        // riparto dall'inizio assegnando "last child" all'img e al pallino
        next_image = $('.images img:last-child');
        next_image.addClass('visible');

        // abbreviazione del comando sopra
        $('.bullets .fa-circle:last-child').addClass('bianco');
    }
});

var slideIndex = 0;
showSlides();
var timeout;

function showSlides() {
  var i;
  var slides = $('.images img');
  var bullets = $('.bullets .fa-circle');
  slides.removeClass('visible');
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  bullets.removeClass('bianco');
  slides.eq(slideIndex-1).addClass('visible');
  bullets.eq(slideIndex-1).addClass('bianco');
  timeout = setTimeout(showSlides, 3000); // Change image every 2 seconds
};

$('.fa-pause').click(function(){
    clearTimeout(timeout);
    $('.fa-pause').removeClass('visible');
    $('.fa-play').addClass('visible');
});

$('.fa-play').click(function(){
    showSlides();
    $('.fa-play').removeClass('visible');
    $('.fa-pause').addClass('visible');
});
