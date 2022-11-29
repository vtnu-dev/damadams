// Custom scripts
// Burger mobile menu
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	const menuItems = document.querySelectorAll('.menu__item-link')

	const toogleMenu = () => {
		menu.classList.toggle('active')
		burger.classList.toggle('active-burger')
		body.classList.toggle('locked')

      const removeActive = () => {
         menu.classList.remove('active')
				burger.classList.remove('active-burger')
				body.classList.remove('locked')
      }
		menuItems.forEach(item => {
			item.addEventListener('click', removeActive)
		})

      document.addEventListener('keydown', e => {
         if (e.keyCode == 27) {
            // code for kye Escape, but can use e.key
            removeActive()
         }
      })

      // Hide menu when turning the screen
      window.addEventListener('orientationchange', removeActive)
	}

	burger.addEventListener('click', toogleMenu)

	// Here we put Breikpoint Navbar
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
burgerMenu()
/*------------------------------------------------*/
// We call this function if we need to fix the menu with scroll.
function fixedNav() {
	const nav = document.querySelector('nav')

	//Here we indicate in the pixels, how much we need to slip so that our menu becomes fixed
	const breakpoint = 1
	if (window.scrollY >= breakpoint) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)

/*------------------------------------------------*/

// Slider
const swiper = new Swiper('.swiper', {
	loop: true,
	spaceBetween: 50,
	autoplay: {
		delay: 5000,
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

/*------------------------------------------------*/

// Key UP

const handleKeyUp = () => {
   const keyUp = document.querySelector('.key-up')
	keyUp.classList.toggle('key-up-visible', window.scrollY > 80)

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }
   keyUp.addEventListener('click', scrollToTop)
}

window.addEventListener('scroll', handleKeyUp)

/*------------------------------------------------*/

//  Num counter
/*
window.addEventListener('load', ()=>{
   const counters = document.querySelectorAll('.counter')
const counterBox = document.querySelector('.about__stats')


const options = {
	rootMargin: '-250px',
}

const startCounter = entry => {
	console.log(entry[0].isIntersecting)

	if (entry[0].isIntersecting) {
		counters.forEach(counter => {
			const updateCounter = () => {
				const finalNumber = counter.getAttribute('data-number')
				const value = parseInt(counter.textContent)

				const speed = finalNumber / 50

				if (value < finalNumber) {
					counter.textContent = Math.floor(value + speed)
					setTimeout(updateCounter, 20)
				} else {
					counter.textContent = finalNumber
				}
			}

			updateCounter()
		})
	}
}

const observer = new IntersectionObserver(startCounter, options)
observer.observe(counterBox)
})
*/

/*------------------------------------------------*/

// Navbar (show / hidden)
const navToogle = () => {
   const nav = document.querySelector('nav');

let prevScrollpos = window.pageYOffset

window.addEventListener('scroll', function () {
	let currentScrollPos = window.pageYOffset
	if (prevScrollpos > currentScrollPos || window.scrollY <= 70) {
		nav.style.top = '0'
	} else {
		nav.style.top = '-80px'
	}
	prevScrollpos = currentScrollPos
})
}

window.addEventListener('scroll', navToogle)