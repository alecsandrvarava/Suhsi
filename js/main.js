// const hidden = document.querySelectorAll(".hidden")
const menuBurger = document.querySelector('.menu__burger')
const headerMenu = document.querySelector('.menu__body')
const popupLink = document.querySelectorAll(".popup__link")
const [popupClose] = document.querySelectorAll(".popup__close")
const [popupArea] = document.querySelectorAll(".popup__area")
const popup = document.querySelector('.popup')
const body = document.querySelector('body')
const formSubmission = document.getElementById('formSubmission')

if (headerMenu) {
	if (screen.width < 991) {
		headerMenu.classList.add('opacity')
		headerMenu.classList.add('hidden')
	} else {
		headerMenu.classList.remove('opacity')
	}
}

if (menuBurger) {
	menuBurger.onclick = function () {
		if (headerMenu.classList.contains('opacity')) {
			console.log('!')
			this.classList.add('animation')
			headerMenu.classList.remove('opacity')
			setTimeout(() => {
				headerMenu.classList.remove('hidden')
			}, 200)
			body.classList.add('lock')
		} else {
			console.log('!!')
			this.classList.remove('animation')
			headerMenu.classList.add('opacity')
			setTimeout(() => {
				headerMenu.classList.add('hidden')
			}, 200)
			body.classList.remove('lock')
		}
	}
}

const swiper = document.getElementById('swiper')
if (swiper) {
	new Swiper('.home-slider__swiper', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 4000,
		},
		speed: 1500,
		slideToClikedSlide: true,
	})
}

const hidden = document.querySelectorAll(".hidden")
const swiperSlide = document.getElementById('swiperSlide')
const productNew = document.getElementById('productNew')
const [productNewStyle] = document.querySelectorAll('.product-new')
const [productPopularStyle] = document.querySelectorAll('.product-popular')
const product = document.querySelectorAll('.product')
const productPopular = document.getElementById('productPopular')



const productBase = [
	{
		name: 'new',
		img: 'img/set-4.png',
		title: 'Сет "4 Филадельфии"',
		text: '1100 грамм 32 кусочек',
		price: '550 UAH',
		type: 'set',
		id: '0001',
	},
	{
		name: 'new',
		img: 'img/set-5.png',
		title: 'Сет "5 Филадельфий"',
		text: '1120 грамм 40 кусочек',
		price: '900 UAH',
		type: 'set',
		id: '0002',
	},
	{
		name: 'new',
		img: 'img/set-6.png',
		title: 'Сет "6 Филадельфий"',
		text: '1320 грамм 46 кусочек',
		price: '1100 UAH',
		type: 'set',
		id: '0003',
	},
	{
		name: 'new',
		img: 'img/top-set.png',
		title: 'Топовый сет',
		text: '1050 грамм, 30 кусочков',
		price: '990 UAH',
		type: 'set',
		id: '0004',
	},
	{
		name: 'new',
		img: 'img/set-ikudza.png',
		title: 'Якудза сет',
		text: '1270 грамм 50 кусочек',
		price: '990 UAH',
		type: 'set',
		id: '0005',
	},
	{
		name: 'popular',
		img: 'img/product-base3.png',
		title: 'Самая большая Филадельфия',
		text: '2050 грамм, 45 кусочков',
		price: '600 UAH',
		type: 'set',
		id: '0006',
	},
	{
		name: 'popular',
		img: 'img/product-base1.png',
		title: 'Соломон сет',
		text: '1050 грамм, 30 кусочков',
		price: '450 UAH',
		type: 'set',
		id: '0007',
	},
	{
		name: 'popular',
		img: 'img/product-base2.png',
		title: 'Филадельфия и лосось сет',
		text: '1260 грамм, 36 кусочков',
		price: '400 UAH',
		type: 'set',
		id: '0008',
	},
	{
		name: 'popular',
		img: 'img/product-base3.png',
		title: 'Большая Филадельфия',
		text: '2050 грамм, 45 кусочков',
		price: '600 UAH',
		type: 'set',
		id: '0009',
	},
	{
		name: 'popular',
		img: 'img/product-base1.png',
		title: 'Камикадзе сет',
		text: '1050 грамм, 30 кусочков',
		price: '450 UAH',
		type: 'set',
		id: '0010',
	},
	{
		name: 'popular',
		img: 'img/product-base2.png',
		title: 'Лосось сет',
		text: '1260 грамм, 36 кусочков',
		price: '400 UAH',
		type: 'set',
		id: '0011',
	},
	{
		name: 'popular',
		img: 'img/product-base2.png',
		title: 'Лосось top сет',
		text: '1260 грамм, 36 кусочков',
		price: '400 UAH',
		type: 'set',
		id: '0012',
	},
]
let searchData = []
if (swiperSlide) {
	searchData = productBase.filter(function (item) {
		return item.name === 'popular'
	})
	switcFunc(searchData)
	activeSwiper()
	product.forEach(el => {
		el.addEventListener('click', (e) => {
			const item = e.currentTarget
			if (item.id === 'productNew') {
				productNew.classList.add('_active')
				productPopular.classList.remove('_active')
				let searchData = productBase.filter(function (item) {
					return item.name === 'new'
				})
				switcFunc(searchData)
				activeSwiper()
				funcSliderMenuBtn()
				funcDisabled()
			} else if (item.id = 'popular') {
				productNew.classList.remove('_active')
				productPopular.classList.add('_active')

				switcFunc(searchData)
				activeSwiper()
				funcSliderMenuBtn()
				funcDisabled()
			}
		})
	});



	function switcFunc(item) {
		swiperSlide.innerHTML = ''
		item.map(function (element) {
			swiperSlide.insertAdjacentHTML('beforeend', `<div class="slider-menu__slide swiper-slide">
			<div data-id="${element.id}" class="slider-menu__body">
				<div class="slider-menu__img">
					<div><img src="${element.img}" alt="картинка"></div>
				</div>
				<h2 class="slider-menu__title">${element.title}</h2>
				<div class="slider-menu__text">${element.text}</div>
				<div class="slider-menu__items">
					<div class="slider-menu__price">${element.price}</div>
					<div class="slider-menu__btn">Хочу</div>
				</div>
			</div>
		</div>`)
		})
	}

	function activeSwiper() {
		new Swiper(".slider-menu__swiper", {
			slidesPerView: 3,
			loopedSlides: 3,
			spaceBetween: 30,
			slidesPerGroup: 1,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			},
			speed: 1500,
			slideToClickedSlide: false,
		})
	}
}

const pageGrid = document.querySelector('.sectionsets__grid')
let setData = []
if (pageGrid) {
	setData = productBase.filter((item) => {
		return item.type === 'set'
	})
}
function compareNumeric(a, b) {
	let numb1 = parseInt(priceWithoutSpaces(a.price))
	let numb2 = parseInt(priceWithoutSpaces(b.price))
	if (numb1 > numb2) return 1;
	if (numb1 == numb2) return 0;
	if (numb1 < numb2) return -1;
}
function compareNumericBig(a, b) {
	let numb1 = parseInt(priceWithoutSpaces(a.price))
	let numb2 = parseInt(priceWithoutSpaces(b.price))
	if (numb2 > numb1) return 1;
	if (numb2 == numb1) return 0;
	if (numb2 < numb1) return -1;
}
function compareNumericQuantity(a, b) {
	let numb1 = parseInt(priceWithoutSpaces(a.text))
	let numb2 = parseInt(priceWithoutSpaces(b.text))
	if (numb1 > numb2) return 1;
	if (numb1 == numb2) return 0;
	if (numb1 < numb2) return -1;
}
const searchBtn = document.querySelector('.sectionsets__search-btn')
const searchList = document.querySelector('.sectionsets__search-list')
const searchArrow = document.querySelector('.sectionsets__arrow')
const searchLinkList = document.querySelectorAll('.sectionsets__search-link')
if (searchBtn) {
	searchBtn.addEventListener('click', () => {
		searchArrow.classList.toggle('turn')
		searchList.classList.toggle('hidden')
		searchLinkList.forEach(element => {
			element.onclick = (e) => {
				searchArrow.classList.toggle('turn')
				let elem = e.currentTarget.textContent
				let sorting = e.currentTarget.dataset.sorting
				if (sorting == 'cheap') {
					setData.sort(compareNumeric)
					funcPrintPage(setData)
					funcSliderMenuBtn()
					funcDisabled()
				} else if (sorting == 'expensive') {
					setData.sort(compareNumericBig)
					funcPrintPage(setData)
					funcSliderMenuBtn()
					funcDisabled()
				} else if (sorting == 'quantity') {
					setData.sort(compareNumericQuantity)
					funcPrintPage(setData)
					funcSliderMenuBtn()
					funcDisabled()
				} else if (sorting == 'default') {
					setData = productBase.filter((item) => {
						return item.type === 'set'
						// funcSliderMenuBtn()
						// funcDisabled()
					})
					funcPrintPage(setData)
					console.log(setData)
				}
				searchBtn.innerHTML = elem
				searchList.classList.add('hidden')
			}
		});
	})
}

function funcPrintPage(item) {
	pageGrid.innerHTML = ''
	item.map(function (element) {
		pageGrid.insertAdjacentHTML('beforeend', `<div class="slider-menu__slide">
		<div data-id="${element.id}" class="slider-menu__body">
			<div class="slider-menu__img">
				<div><img src="${element.img}" alt="картинка"></div>
			</div>
			<h2 class="slider-menu__title">${element.title}</h2>
			<div class="slider-menu__text">${element.text}</div>
			<div class="slider-menu__items">
				<div class="slider-menu__price">${element.price}</div>
				<div class="slider-menu__btn">Хочу</div>
			</div>
		</div>
	</div>`)
	})
}
if (pageGrid) {
	funcPrintPage(setData)
}

const contentSpoiler = document.getElementById("contentSpoiler")
const linkSpoiler = document.getElementById("linkSpoiler")
const descriptionArrow = document.querySelector(".description__arrow")
const descriptionTitle = document.querySelector(".description__title")
if (linkSpoiler) {
	linkSpoiler.onclick = function () {
		if (contentSpoiler.classList.contains('opacity')) {
			descriptionArrow.classList.add('turn')
			contentSpoiler.classList.remove('opacity')
			descriptionTitle.classList.add('margin-bottom')
			setTimeout(() => {
			}, 200);
		} else {
			descriptionTitle.classList.remove('margin-bottom')
			setTimeout(() => {
				descriptionArrow.classList.remove('turn')
				contentSpoiler.classList.add('opacity')
			}, 200);
		}
	}
}


const mask = (selector) => {
	const maskedNodes = document.querySelectorAll(selector);

	function createMask(event) {
		const matrix = " (___) ___ __ __";
		const def = "+38";
		let keyPressed = "";

		const isSmthInInput = this.value.length > def.length;

		if (event.type === "blur" && !isSmthInInput) {
			this.value = "";
			return;
		} else if (event.type === "input") {
			keyPressed = event.data;
		}

		let val = isSmthInInput
			? this.value.slice(0, def.length) === def
				? this.value.slice(def.length).replace(/\D/g, "")
				: (keyPressed + this.value.slice(def.length + 1)).replace(/\D/g, "")
			: "";

		let i = 0;

		this.value =
			def +
			matrix.replace(/./g, function (a) {
				return /[_\d]/.test(a) && i < val.length
					? val.charAt(i++)
					: i >= val.length
						? ""
						: a;
			});
	}

	maskedNodes.forEach((node) => {
		node.addEventListener("input", createMask);
		node.addEventListener("focus", createMask);
		node.addEventListener("blur", createMask);
	});
};
mask('[name="phone"]');

const closeBtn = document.querySelector('.close');
const searchLink = document.getElementById('search-link')

// const funcSearch = function () {
// 	const svg = document.querySelector('.svg')
// 	const search = document.querySelector('.search')
// 	svg.classList.toggle('change')
// 	search.classList.remove('hidden')
// 	closeBtn.classList.toggle('hidden')
// }
// searchLink.addEventListener('click', funcSearch)
// closeBtn.addEventListener('click', funcSearch)


const headerContacts = document.querySelector('.header__contacts')
const svg = document.querySelector('.svg')
const linkHidden = document.querySelectorAll('.link-hidden')
svg.onclick = function () {
	const search = document.querySelector('.search')
	if (search.classList.contains('hidden')) {
		setTimeout(() => {
			search.classList.add('width')
		}, 0);
		// headerContacts.classList.add('opacity')
		if (screen.width < 991) {
			headerContacts.classList.add('hidden')
			headerContacts.classList.add('opacity')
			headerContacts.classList.remove('opacity-none')
		}

		search.classList.remove('hidden')
		linkHidden.forEach(element => {
			element.classList.add('hidden')
		});
	} else {
		setTimeout(() => {
			linkHidden.forEach(element => {
				element.classList.remove('hidden')
			});
			search.classList.add('hidden')
			if (screen.width < 991) {
				// headerContacts.classList.remove('hidden')
				headerContacts.classList.add('opacity-none')
			}
		}, 300);
		search.classList.remove('width')
		if (screen.width < 991) {
			headerContacts.classList.remove('hidden')

		}
	}
	search.value = ""
}

const sliderMenuSlide = document.querySelectorAll('.slider-menu__body')
const cartBodyWrapper = document.querySelector('.cart-body__wrapper')
const cartSubBodyItems = document.querySelector('.cart-sub-body__items')
const cartSubBody = document.querySelector('.cart-sub-body')
const cartSubBodyTotal = document.querySelector('.cart-sub-body__total')

let stored2 = localStorage.getItem('Full')
let priceTest = {}
if (stored2)
	priceTest = JSON.parse(stored2)
let price = 0
let summa = 0

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '')
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
};

const plusFullPrice = (currentPrice) => {
	return price += currentPrice

};
const minusFullPrice = (currentPrice) => {
	return price -= currentPrice
};

const multFullPrice = (currentPrice) => {
	return price = currentPrice
}

const printFullPrice = () => {
	priceTest = `${normalPrice(price)} UAH`
	localStorage.setItem('Full', JSON.stringify(priceTest))
	FullPrice = JSON.parse(localStorage.getItem("Data"))
	cartSubBodyTotal.textContent = priceTest
	cartSubBodyTotal.textContent = `${normalPrice(price)} UAH`

}

if (priceTest.length > 1) {
	cartSubBodyTotal.textContent = priceTest
	price = parseInt(priceWithoutSpaces(priceTest))
}

const printCart = () => {
	if (price <= 0) {
		cartBodyWrapper.classList.remove('hidden')
		cartSubBody.classList.add('hidden')
		localStorage.clear()
		data.length = 0;
	} else if (price > 0) {
		cartBodyWrapper.classList.add('hidden')
		cartSubBody.classList.remove('hidden')

	}
	// let productsListLength = cartSubBodyItems.children.length;
	// cartSubBodySumma.textContent = productsListLength
	// productsListLength > 0 ? cartBodyWrapper.classList.add('hidden') && cartSubBody.classList.remove('hidden') : cartBodyWrapper.classList.remove('hidden') && cartSubBody.classList.add('hidden')
};

const generateCartProduct = (img, title, price, id, count) => {
	return `
	<div class="cart-sub-body__item" data-id="${id}">
		<div class="cart-sub-body__img">
			<img src="${img}" alt="">
		</div>
		<div class="cart-sub-body__text">
			<h2 class="cart-sub-body__title">${title}</h2>
			<div class="cart-sub-body__calc">
				<div class="cart-sub-body__caunter">
				<div class="cart-sub-body__minus ">
					<svg class="_minus" width="20" height="20">
						<use  xlink:href="img/sprite-icon.svg#minus"></use>
					</svg>
				</div>
				<div class="cart-sub-body__summa">${count}</div>
				<div class="cart-sub-body__plus ">
					<svg  width="20" height="20">
						<use class="_plus" xlink:href="img/sprite-icon.svg#amount"></use>
					</svg>
				</div>
			</div>
			<div class="cart-sub-body__price">${normalPrice(price)}</div>
		</div>
	</div>
	`
}

const deleteProducts = (productParent) => {
	let id = productParent.dataset.id
	let value = document.querySelector(`.cart-sub-body__item[data-id="${id}"]`).querySelector('.cart-sub-body__summa')
	let sumProduct = --value.textContent
	data.forEach(function (el) {
		if (el.id == id) {
			el.count = sumProduct
			DataNewse = data.filter((el) => el.count !== 0);
			if (el.count == 0) {
				const sliderMenuBtn = document.querySelectorAll('.slider-menu__btn')
				sliderMenuBtn.forEach(elem => {
					let body = elem.closest('.slider-menu__body')
					let idBtn = body.dataset.id
					if (el.id == idBtn) {
						elem.classList.remove('disabled')
					}
				})
				productParent.remove()
				// arr.forEach(function (element, index) {
				// 	if (element.id == id) {
				// 		arr.splice(index, 1)
				// 		// const sliderMenuBtn = document.querySelectorAll('.slider-menu__btn')
				// 		// sliderMenuBtn.forEach(elem => {
				// 		// 	let body = elem.closest('.slider-menu__body')
				// 		// 	let idBtn = body.dataset.id
				// 		// 	if (element.id == idBtn) {
				// 		// 		elem.classList.remove('disabled')
				// 		// 	}
				// 		// })
				// 	}
				// })
			}
		}
	})
	localStorage.setItem('Data', JSON.stringify(DataNewse))
	// localStorage.setItem('disabled', JSON.stringify(arr))
	let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-sub-body__price').textContent))
	minusFullPrice(currentPrice)
	printFullPrice()
	printCart()
}

function funcPlusCount(productParent) {
	let id = productParent.dataset.id
	let value = document.querySelector(`.cart-sub-body__item[data-id="${id}"]`).querySelector('.cart-sub-body__summa')
	let sumProduct = ++value.textContent
	data.forEach(function (el) {
		if (el.id == id) {
			el.count = sumProduct
			DataNewse = data.filter((el) => el.count !== 0);
		}
	});
	localStorage.setItem('Data', JSON.stringify(DataNewse))
	let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-sub-body__price').textContent))
	plusFullPrice(currentPrice)
	printFullPrice()
}

let stored = localStorage.getItem('Data')
// let storedTitle = localStorage.getItem('disabled')
let data = []
// let arr = []
if (stored)
	data = JSON.parse(stored)
// if (storedTitle) {
// 	arr = JSON.parse(storedTitle)
// }

function funcSliderMenuBtn() {
	const sliderMenuBtn = document.querySelectorAll('.slider-menu__btn')
	sliderMenuBtn.forEach(elem => {
		// elem.closest('.slider-menu__body').setAttribute('data-id', randomId())
		elem.closest('.slider-menu__body').setAttribute('data-count', 1)
		elem.addEventListener('click', (e) => {
			let self = e.currentTarget
			let parent = self.closest('.slider-menu__body')
			// elem.classList.add('disabled')
			let dataObj = {
				id: parent.dataset.id,
				title: parent.querySelector('.slider-menu__title').textContent,
				img: parent.querySelector('.slider-menu__img img').getAttribute('src'),
				priceString: priceWithoutSpaces(parent.querySelector('.slider-menu__price').textContent),
				priceNumber: parseInt(priceWithoutSpaces(parent.querySelector('.slider-menu__price').textContent)),
				count: parent.dataset.count,
			}

			data.push(dataObj)
			localStorage.setItem('Data', JSON.stringify(data))
			plusFullPrice(dataObj.priceNumber)
			printFullPrice()
			cartSubBodyItems.insertAdjacentHTML('afterbegin', generateCartProduct(dataObj.img, dataObj.title, dataObj.priceString, dataObj.id, dataObj.count))
			printCart()

			// id = {
			// 	id: parent.dataset.id,
			// }
			// arr.push(id)
			// localStorage.setItem('disabled', JSON.stringify(arr))
			funcDisabled()
		})
	})
}

function funcDisabled() {
	const sliderMenuBtn = document.querySelectorAll('.slider-menu__btn')
	DataNews = JSON.parse(localStorage.getItem("Data"))
	if (DataNews) {
		DataNews.forEach(element => {
			sliderMenuBtn.forEach(elem => {
				let body = elem.closest('.slider-menu__body')
				let idBtn = body.dataset.id
				if (element.id == idBtn) {
					elem.classList.add('disabled')
				}
			})
		})
	}
}
funcDisabled()
funcSliderMenuBtn()

const cart = document.querySelector('.cart-body')
if (cart) {
	cart.addEventListener('click', (e) => {
		if (e.target.classList.contains('_minus')) {
			deleteProducts(e.target.closest('.cart-sub-body__item'))
		} else if (e.target.classList.contains('_plus')) {
			funcPlusCount(e.target.closest('.cart-sub-body__item'))
		}
	})
}

if (data.length > 0) {
	cartBodyWrapper.classList.add('hidden')
	cartSubBody.classList.remove('hidden')
	DataNew = JSON.parse(localStorage.getItem("Data"))
	DataNew.forEach(function (el, index) {
		cartSubBodyItems.insertAdjacentHTML('afterbegin', generateCartProduct(el.img, el.title, el.priceString, el.id, el.count))
	});
}


const formBtn = document.querySelector('.form__btn')
if (formBtn) {
	formBtn.addEventListener('click', () => {
		localStorage.clear()
		cartSubBodyItems.remove()
		data.length = 0
	})

}








const checkboxCars = document.querySelectorAll('input[name="news"]')
checkboxCars.forEach(function (elem) {
	elem.onclick = function () {
		flag = this.dataset.flag
	}
})
