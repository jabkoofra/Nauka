var haslo = ''
var haslo1 = ''
var ile_bledow = 0

var yes = new Audio('yes.wav')
var no = new Audio('no.wav')

var litery = ['A', 'Ą', 'B', 'C', 'Ć', 'D',
  'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ż', 'Ź'
]

function wczytajHaslo() {
  haslo = document.getElementById('nowe_Haslo').value
  if (haslo.length > 0) {
    haslo = haslo.toUpperCase()
    for (i = 0; i < haslo.length; i++) {
      if (haslo.charAt(i) === ' ') {
        haslo1 = haslo1 + ' '
      } else {
        haslo1 = haslo1 + '-'
      }
    }
    start()
    document.getElementById('wczytanieHasla').style.visibility = 'hidden'
    document.getElementById('wczytanieHasla').height = '1px'
  }
}

function wypisz_haslo() {
  document.getElementById('plansza').innerHTML = haslo1
}
// window.onload = start // wypisz_haslo

function start() {
  var tresc_diva = ''

  for (var i = 0; i < 35; i++) {
    var element = 'lit' + i
    tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' +
      element + '">' + litery[i] + '</div>'
    if (!((i + 1) % 7)) {
      tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
    }
  }
  document.getElementById('alfabet').innerHTML = tresc_diva
  wypisz_haslo()
}

String.prototype.ustawZnak = function(miejsce, znak) {
  if (miejsce > this.length - 1) {
    return this.toString()
  } else {
    return this.substr(0, miejsce) + znak + this.substr(miejsce + 1)
  }
}

function sprawdz(nr) {
  var trafiona = false

  for (i = 0; i < haslo.length; i++) {
    if (haslo.charAt(i) == litery[nr]) {
      haslo1 = haslo1.ustawZnak(i, litery[nr])
      trafiona = true
    }
  }

  if (trafiona == true) {
    yes.play()
    var element = 'lit' + nr
    document.getElementById(element).style.background = '#003300'
    document.getElementById(element).style.color = '#00c000'
    document.getElementById(element).style.border = '3px solid #00c000'
    document.getElementById(element).style.cursor = 'default'

    wypisz_haslo()
  } else {
    no.play()
    var element = 'lit' + nr
    document.getElementById(element).style.background = '#330000'
    document.getElementById(element).style.color = '#c00000'
    document.getElementById(element).style.border = '3px solid #c00000'
    document.getElementById(element).style.cursor = 'default'
    document.getElementById(element).setAttribute('onclick', ';')

    ile_bledow++
    var obraz = 'img/s' + ile_bledow + '.jpg'
    document.getElementById('szubienica').innerHTML = '<img src="' + obraz + '"alt="" />'
  }
  // wygrana
  if (haslo == haslo1) {
    document.getElementById('alfabet').innerHTML = 'Tak jest! To prawidłowe hasło: ' + haslo +
      '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
  }
  if (ile_bledow >= 9) {
    document.getElementById('alfabet').innerHTML = 'Przegrana!! To prawidłowe hasło: ' + haslo +
      '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
  }
}