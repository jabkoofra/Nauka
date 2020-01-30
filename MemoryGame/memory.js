var cards = ['ciri.png', 'geralt.png', 'jaskier.png',
  'jaskier.png', 'iorweth.png', 'triss.png', 'geralt.png',
  'yen.png', 'ciri.png', 'triss.png', 'yen.png',
  'iorweth.png'
]

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

function revalCard(nr) {
  alert(nr)
}