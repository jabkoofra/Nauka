var cardsTemp = ['ciri.png', 'geralt.png', 'jaskier.png',
  'jaskier.png', 'iorweth.png', 'triss.png', 'geralt.png',
  'yen.png', 'ciri.png', 'triss.png', 'yen.png',
  'iorweth.png'
]

var cards = []

window.onload = function() {
  startLoad()
}

function startLoad() {
  var dl = cardsTemp.length
  for (i = 0; i < dl; i++) {
    let x = Math.floor(Math.random() * (cardsTemp.length - 1))
    cards.push(cardsTemp[x])
    cardsTemp.splice(x, 1)
    // console.log(cards)
  }
  console.log(cards)
  for (var i = 0; i < cards.length; i++) {
    $('.board').append("<div class='card' id='c" + i + "'></div>")
    //  $('#c' + i).click(function() {      revalCard(i)    })
  }
  $('.card').hide(1, function() {})
  $('.card').first().show(100, function showNext() {
    $(this).next('.card').show(200, showNext)
  })

  $('.board').append("<div class = 'score' > Turn counter: 0 </div>")
  // nasluchiwacze()
  nn()
}

function nn() {
  for (i = 0; i < cards.length; i++) {
    $('#c' + i).click(function() {
      revalCard(0)
    })
  }
}

function nasluchiwacze() {
  var c0 = document.getElementById('c0')
  c0.addEventListener('click', function() {
    revalCard(0)
  })

  var c1 = document.getElementById('c1')
  c1.addEventListener('click', function() {
    revalCard(1)
  })

  var c2 = document.getElementById('c2')
  c2.addEventListener('click', function() {
    revalCard(2)
  })

  var c3 = document.getElementById('c3')
  c3.addEventListener('click', function() {
    revalCard(3)
  })

  var c4 = document.getElementById('c4')
  c4.addEventListener('click', function() {
    revalCard(4)
  })

  var c5 = document.getElementById('c5')
  c5.addEventListener('click', function() {
    revalCard(5)
  })

  var c6 = document.getElementById('c6')
  c6.addEventListener('click', function() {
    revalCard(6)
  })

  var c7 = document.getElementById('c7')
  c7.addEventListener('click', function() {
    revalCard(7)
  })
  var c8 = document.getElementById('c8')
  c8.addEventListener('click', function() {
    revalCard(8)
  })
  var c9 = document.getElementById('c9')
  c9.addEventListener('click', function() {
    revalCard(9)
  })
  var c10 = document.getElementById('c10')
  c10.addEventListener('click', function() {
    revalCard(10)
  })
  var c11 = document.getElementById('c11')
  c11.addEventListener('click', function() {
    revalCard(11)
  })
}

var oneVisible = false
var turnCounter = 0
var visible_nr
var lock = false
var pairsLeft = 6

function revalCard(nr) {
  // alert(nr)

  var opacityValue = $('#c' + nr).css('opacity')
  // console.log(opacityValue)
  if (opacityValue != 0 && lock == false) {
    lock = true
    var obraz = 'url(img/' + cards[nr] + ')'
    $('#c' + nr).css('background-image', obraz)
    $('#c' + nr).addClass('cardActive')
    $('#c' + nr).removeClass('card')

    if (oneVisible == false) {
      // first card
      oneVisible = true
      visible_nr = nr
      lock = false
    } else {
      if (cards[nr] == cards[visible_nr]) {
        // alert('para')
        setTimeout(function() {
          hide2Cards(nr, visible_nr)
        }, 750)
      } else {
        // alert('pudlo')
        setTimeout(function() {
          restore2Cards(nr, visible_nr)
        }, 1000)
      }
      oneVisible = false
      turnCounter++
      $('.score').html('Turn counter: ' + turnCounter)
    }
  }
}

function hide2Cards(arg1, arg2) {
  $('#c' + arg1).css('opacity', '0')
  $('#c' + arg2).css('opacity', '0')
  pairsLeft--
  if (pairsLeft == 0) {
    // $('.board').hide()
    let h1 = '<h1> You Win!!! <br> Done in _ turns</h1> '
    let bt = " <input type='submit' id='restartButton' value='Restart and play again!!!' style='display:none' /> "
    $('.board').hide(1, function() {
      $(this).html(h1 + bt)
    })
    $('.board').show(3000, function() {
      $(this).html('<h1> You Win!!! <br> Done in ' + turnCounter + ' turns</h1>')
      // $('restartButton').show(3000)
      // naprawic to
    })
    //  var rb = '#restartButton'
    //  $(rb).prop('value', 'Restart and play again!!!')
    //  $(rb).show(3000)
  }
  lock = false
}

function restore2Cards(arg1, arg2) {
  $('#c' + arg1).css('background-image', 'url(img/karta.png)')
  $('#c' + arg1).addClass('card')
  $('#c' + arg1).removeClass('cardActive')

  $('#c' + arg2).css('background-image', 'url(img/karta.png)')
  $('#c' + arg2).addClass('card')
  $('#c' + arg2).removeClass('cardActive')
  lock = false
}