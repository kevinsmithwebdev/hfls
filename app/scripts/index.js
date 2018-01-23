import './../styles/main.scss'
import './../styles/header.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}

let elNavbar = document.querySelector('.navbar')

let navbarArr = [
  'home',
  'store',
  'blog',
  'testemonials',
  'about',
  'contact'
]

let navbarStr =
  '<ul>' +
    navbarArr.map((nav) => '<li><a href="#' + nav + '">' + nav.toUpperCase() + '</li>').join('') +
  '</ul>'
// eslint-disable-line
console.log('navbarStr...')
// eslint-disable-line
console.log(navbarStr)
elNavbar.innerHTML = navbarStr
