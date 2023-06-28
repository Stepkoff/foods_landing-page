document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach((item) => {
    item.classList.toggle('active');
  })
})

const icons = document.querySelectorAll('.section-1__icon')
let i = 1

setInterval(() => {
  i++
  const icon = document.querySelector('.section-1__icon.section-1__icon--selected')
  icon.classList.remove('section-1__icon--selected')

  if (i > icons.length) {
    icons[0].classList.add('section-1__icon--selected')
    i = 1
  } else {
    icon.nextElementSibling.classList.add('section-1__icon--selected')
  }
}, 2000)

console.log('test')

const galleryItems = document.querySelectorAll('.gallery__item')
galleryItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
  })
})