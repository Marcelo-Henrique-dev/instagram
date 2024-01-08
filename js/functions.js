$('.destaques .dest-flex').slick({
    slidesToShow: 9,
    arrows: false,
    infinite: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 3
            }
        }
    ]
})

var els = document.getElementsByClassName('btn')
var alternar = function(){
    var aba = this.getAttribute('aba')
    var el = document.getElementById(aba)
    removerAbas()
    document.getElementById('galery').style.display = 'none'
    document.getElementById('igtvGalery').style.display = 'none'
    document.getElementById('salvos').style.display = 'none'
    document.getElementById('marcados').style.display = 'none'
    el.style.display = 'block'
    this.style.borderTop = '1px solid black'
    this.style.color = 'black'
}

for(var i = 0; i < els.length; i++){
    els[i].addEventListener('click', alternar, false)
}

function removerAbas(){
    var abas = document.getElementsByClassName('btn')
    for(var i = 0; i < abas.length; i++){
        abas[i].style.borderTop = '0'
        abas[i].style.color = "#ccc"
    }
}