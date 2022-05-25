// const hidden = document.querySelectorAll(".hidden")
const menuBurger = document.querySelector('.menu__burger')
const headerMenu = document.querySelector('.menu__body')
const popupLink = document.querySelectorAll(".popup__link")
const [popupClose] = document.querySelectorAll(".popup__close")
const [popupArea] = document.querySelectorAll(".popup__area")
const popup = document.querySelector('.popup')
const body = document.querySelector('body')
const formSubmission = document.getElementById('formSubmission')

// if (headerMenu) {
// 	if (screen.width < 991) {
// 		headerMenu.classList.add('opacity')
// 		headerMenu.classList.add('hidden')
// 	} else {
// 		headerMenu.classList.remove('opacity')
// 	}
// }

// if (menuBurger) {
// 	menuBurger.onclick = function () {
// 		if (headerMenu.classList.contains('opacity')) {
// 			console.log('!')
// 			this.classList.add('animation')
// 			headerMenu.classList.remove('opacity')
// 			setTimeout(() => {
// 				headerMenu.classList.remove('hidden')
// 			}, 200)
// 			body.classList.add('lock')
// 		} else {
// 			console.log('!!')
// 			this.classList.remove('animation')
// 			headerMenu.classList.add('opacity')
// 			setTimeout(() => {
// 				headerMenu.classList.add('hidden')
// 			}, 200)
// 			body.classList.remove('lock')
// 		}
// 	}
// }
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

const swiperProduct = document.getElementById('card-product')
if (swiperProduct) {
	new Swiper('.card-product__swiper', {
		navigation: {
			nextEl: ".card-product__button-next ",
			prevEl: ".card-product__button-prev ",
		},
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

const pageGrid = document.querySelector('.sectionsets__grid')
const set = document.querySelector('.set')
const pizza = document.querySelector('.pizza')
const wok = document.querySelector('.wok')
const rols = document.querySelector('.rols')
let setData = []

const productBase = [
	{
		name: 'new',
		img: 'img/caesar.webp',
		title: 'Цезар"',
		feature: 'Лист салату, моцарела, соус Цезар, курка, пармезан, помідори черрі',
		text: '30cm, 340г',
		price: '205 UAH',
		type: 'pizza',
		id: '0013',
	},
	{
		name: 'new',
		img: 'img/4-cheses.webp',
		title: 'Чотири Сири',
		feature: 'Вершкова основа, моцарела, пармезан, горгондзола, рiкота',
		text: '30cm, 340г',
		price: '175 UAH',
		type: 'pizza',
		id: '0014',
	},
	{
		name: 'new',
		img: 'img/diablo.webp',
		title: 'Diablo',
		text: '30cm, 340г',
		feature: 'Томатна основа, моцарела, салямі Picanto',
		price: '215 UAH',
		type: 'pizza',
		id: '0015',
	},
	{
		name: 'new',
		img: 'img/set-4.png',
		title: 'Сет "4 Філадельфій"',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '1100 г 32 кус',
		price: '550 UAH',
		type: 'set',
		id: '0001',
	},
	{
		name: 'new',
		img: 'img/set-5.png',
		title: 'Сет "5 Філадельфій"',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '1120 г 40 кус',
		price: '900 UAH',
		type: 'set',
		id: '0002',
	},
	{
		name: 'new',
		img: 'img/set-6.png',
		title: 'Сет "6 Філадельфій"',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '1320 г 46 кус',
		price: '1100 UAH',
		type: 'set',
		id: '0003',
	},
	{
		name: 'new',
		img: 'img/top-set.png',
		title: 'Топовий сет',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '1050 г, 30 кус',
		price: '990 UAH',
		type: 'set',
		id: '0004',
	},
	{
		name: 'new',
		img: 'img/set-ikudza.png',
		title: 'Якудза сет',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '1270 г 50 кус',
		price: '990 UAH',
		type: 'set',
		id: '0005',
	},
	{
		name: 'popular',
		img: 'img/hunting.webp',
		title: 'Мисливська',
		text: '30cm, 340г',
		feature: 'Томатна основа, моцарела, мисливськi ковбаски, печерицi, пармезан',
		price: '205 UAH',
		type: 'pizza',
		id: '0016',
	},
	{
		name: 'popular',
		img: 'img/margarita.webp',
		title: 'Маргарита',
		text: '30cm, 340г',
		feature: 'Томатна основа, моцарела, помідори, прованські трави',
		price: '160 UAH',
		type: 'pizza',
		id: '0017',
	},
	{
		name: 'popular',
		img: 'img/white-mushrooms.webp',
		title: 'З білими грибами',
		text: '30cm, 340г',
		feature: 'Вершкова основа, моцарела, горгонзола, білі гриби',
		price: '225 UAH',
		type: 'pizza',
		id: '0018',
	},
	{
		name: 'popular',
		img: 'img/product-base3.png',
		title: 'Найбільша Філадельфія',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '2050 г, 45 кус',
		price: '600 UAH',
		type: 'set',
		id: '0006',
	},
	{
		name: 'popular',
		img: 'img/product-base1.png',
		title: 'Соломон сет',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '1050 г, 30 кус',
		price: '450 UAH',
		type: 'set',
		id: '0007',
	},
	{
		name: 'popular',
		img: 'img/product-base2.png',
		title: 'Філадельфія та лосось сет',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '1260 г, 36 кус',
		price: '400 UAH',
		type: 'set',
		id: '0008',
	},
	{
		name: 'popular',
		img: 'img/product-base3.png',
		title: 'Велика Філадельфія',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '2050 г, 45 кус',
		price: '600 UAH',
		type: 'set',
		id: '0009',
	},
	{
		name: 'popular',
		img: 'img/product-base1.png',
		title: 'Камікадзе сет',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '1050 г, 30 кус',
		price: '450 UAH',
		type: 'set',
		id: '0010',
	},
	{
		name: 'popular',
		img: 'img/product-base2.png',
		title: 'Лосось сет',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '1260 г, 36 кус',
		price: '400 UAH',
		type: 'set',
		id: '0011',
	},
	{
		name: 'popular',
		img: 'img/product-base2.png',
		title: 'Лосось top сет',
		feature: 'Лосось, сыр "Филадельфия", огурец, авокадо',
		text: '1260 г, 36 кус',
		price: '400 UAH',
		type: 'set',
		id: '0012',
	},
	{
		name: 'popular',
		img: 'img/wok_1.webp',
		title: 'Скляна локшина з овочами під соусом кімчі',
		feature: 'Скляна локшина, овочі, соуси кімчі і соєвий, кунжут.',
		text: '400г',
		price: '150 UAH',
		type: 'wok',
		id: '0019',
	},
	{
		name: 'popular',
		img: 'img/wok_2.webp',
		title: 'Скляна локшина з креветками під устричним соусом',
		feature: 'Скляна локшина, королівські креветки, овочі, соуси устричний та соєвий, імбирна паста, кунжут',
		text: '400 г',
		price: '210 UAH',
		type: 'wok',
		id: '0020',
	},
	{
		name: 'popular',
		img: 'img/wok_3.webp',
		title: 'Скляна локшина зі свининою під соусом теріякі',
		feature: 'Локшина скляна, свинина, овочі, соуси териякі та соєвий, імбирна паста, зелений лук',
		text: '400 г',
		price: '160 UAH',
		type: 'wok',
		id: '0021',
	},
	{
		name: 'new',
		img: 'img/wok_4.webp',
		title: 'Скляна локшина з куркою',
		feature: 'Формат страви по 2 євро! Скляна локшина, ніжне філе курки, овочі, печериці, соус імбирний і соєвий, зелена цибуля, кунжут.',
		text: '250 г',
		price: '79 UAH',
		type: 'wok',
		id: '0022',
	},
	{
		name: 'new',
		img: 'img/wok_5.webp',
		title: 'Удон зі свининою в кисло-солодкому чилі',
		feature: 'Локшина удон, свинина, овочі, соуси кисло-солодкий чилі і соєвий, арахіс.',
		text: '400 г',
		price: '150 UAH',
		type: 'wok',
		id: '0023',
	},
	{
		name: 'popular',
		img: 'img/rols_1.webp',
		title: 'КАЛІФОРНІЯ З ЛОСОСЕМ В ВКРАЦІ',
		feature: 'Икра тобико, авокадо, огурец, лосось, рис, нори',
		text: '195 г',
		price: '230 UAH',
		type: 'rols',
		id: '0025',
	},
	{
		name: 'popular',
		img: 'img/rols_2.webp',
		title: 'ФІЛАДЕЛЬФІЯ В ВУГРІ',
		feature: 'Угорь, сливочный сыр, огурец, соус "Унаги", кунжут, рис, нори',
		text: '220 г',
		price: '275 UAH',
		type: 'rols',
		id: '0026',
	},
	{
		name: 'popular',
		img: 'img/rols_3.webp',
		title: 'МАКИ С ЛОСОСЕМ',
		feature: 'Рис, нори, лосось',
		text: '100 г ',
		price: '100 UAH',
		type: 'rols',
		id: '0027',
	},
	{
		name: 'new',
		img: 'img/rols_4.webp',
		title: 'РОЛ ЗОЛОТИЙ ДРАКОН',
		feature: 'Угорь, лосось, огурец, салат айсберг, кунжут, майонез, соус спайси, соус унаги, рис, нори',
		text: '215 г',
		price: '250 UAH',
		type: 'rols',
		id: '0028',
	},
	{
		name: 'new',
		img: 'img/rols_5.webp',
		title: 'КАЛІФОРНІЯ З ЛОСОСЕМ У КУНЖУТІ',
		feature: 'Кунжут, авокадо, огурец, лосось, рис, нори',
		text: '190 г ',
		price: '170 UAH',
		type: 'rols',
		id: '0029',
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
				// funcCartProduct(searchData)
				switcFunc(searchData)

				// funcSliderMenuBtn()
				// funcDisabled()

			} else if (item.id = 'popular') {
				productNew.classList.remove('_active')
				productPopular.classList.add('_active')
				// funcCartProduct(searchData)
				switcFunc(searchData)
				// activeSwiper()
				// funcSliderMenuBtn()
				// funcDisabled()
				// funcMenuImg()
			}
			funcSliderMenuBtn()
			funcDisabled()
			funcMenuImg()
			activeSwiper()
		})
	});

	function switcFunc(item) {
		swiperSlide.innerHTML = ''
		item.map(function (element) {
			swiperSlide.insertAdjacentHTML('beforeend', `<div class="slider-menu__slide swiper-slide">
			<div data-id="${element.id}" class="slider-menu__body">
				<a href="card-product.html" class="slider-menu__img">
					<img src="${element.img}" alt="картинка">
				</a>
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
			// slideToClickedSlide: false,
			slidesPerView: 3,
			// loop: true,
			// loopedSlides: 3,
			// loopAdditionalSlides: 3,
			spaceBetween: 30,
			slidesPerGroup: 3,
			// paginationClickable: true,
			// clickable: true,
			// grabCursor: true,
			// virtualTranslate: true,
			// cssMode: false,
			preventClicks: false,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			// autoplay: {
			// 	delay: 6000,
			// 	disableOnInteraction: false,
			// },
			// speed: 1500,


		})
	}
}

if (pizza) {
	setData = productBase.filter((item) => {
		return item.type === 'pizza'
	})
}
if (set) {
	setData = productBase.filter((item) => {
		return item.type === 'set'
	})
}
if (wok) {
	setData = productBase.filter((item) => {
		return item.type === 'wok'
	})
}
if (rols) {
	setData = productBase.filter((item) => {
		return item.type === 'rols'
	})
}
if (swiperSlide) {
	setData = productBase.filter((item) => {
		// funcMenuImg()
		funcDisabled()
		if (item.name === 'popular') {
			return item.name === 'popular'
		} else if (item.name === 'new') {
			return item.name === 'new'
		}
	})
	funcMenuImg()
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
const search = document.querySelector('.sectionsets__search')
const searchLinkList = document.querySelectorAll('.sectionsets__search-link')
if (search) {
	search.addEventListener('click', (e) => {
		funcMenuImg()
		let list = e.currentTarget.querySelector('.sectionsets__search-list')
		let arrow = e.currentTarget.querySelector('.sectionsets__arrow')
		arrow.classList.toggle('turn')
		list.classList.toggle('hidden')

	})
}
searchLinkList.forEach(element => {
	element.addEventListener('click', (e) => {
		console.log(element)
		let elem = e.currentTarget.textContent
		let sorting = e.currentTarget.dataset.sorting
		searchBtn.innerHTML = elem
		if (sorting == 'cheap') {
			setData.sort(compareNumeric)
			funcPrintPage(setData)
		} else if (sorting == 'expensive') {
			setData.sort(compareNumericBig)
			funcPrintPage(setData)
		} else if (sorting == 'quantity') {
			setData.sort(compareNumericQuantity)
			funcPrintPage(setData)
			console.log('vaga')
		} else if (sorting == 'default') {
			setData = productBase.filter((item) => {
				return item.type === 'set'
			})
			funcPrintPage(setData)
		}
		funcSliderMenuBtn()
		funcDisabled()
	})
});
function funcPrintPage(item) {
	pageGrid.innerHTML = ''
	item.map(function (element) {
		pageGrid.insertAdjacentHTML('beforeend', `<div class="slider-menu__slide">
		<div data-id="${element.id}" class="slider-menu__body">
			<a href="card-product.html" class="slider-menu__img">
				<img src="${element.img}" alt="картинка">
			</a>
			<div class="slider-menu__block">
				<div class="slider-menu__sub-block">
					<h2 class="slider-menu__title">${element.title}</h2>
					<div class="slider-menu__text">${element.text}</div>
				</div>
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
// else if (cardProduct) {
// 	funcPrintPage(setData)
// }

function compareNumericTest(a, b) {
	let numb1 = parseInt(a.numb)
	let numb2 = parseInt(b.numb)
	if (numb2 > numb1) return 1;
	if (numb2 == numb1) return 0;
	if (numb2 < numb1) return -1;
}
let menuImgId = ''
function funcMenuImg() {
	const menuImg = document.querySelectorAll('.slider-menu__img')
	menuImg.forEach(el => {
		el.closest('.slider-menu__body').setAttribute('data-numb', 1)
		el.addEventListener('click', (e) => {
			console.log(el)
			let self = e.currentTarget
			let parent = self.closest('.slider-menu__body')
			let numb = +parent.dataset.numb
			let menuImgId = parent.dataset.id
			console.log(parent)
			setData.forEach(element => {
				element.numb = numb
				if (menuImgId == element.id) {
					element.numb = 2
				}
				setData.sort(compareNumericTest)
				// funcCartProduct(setData)
				localStorage.setItem('set', JSON.stringify(setData));
			});
		})
	});
}
funcMenuImg()

const cardProduct = document.querySelector('.card-product__wrapper')
function funcCartProduct(item) {
	item.forEach(function (element) {
		cardProduct.insertAdjacentHTML('beforeend', `<div class="swiper-slide card-product__slide">
		<div data-id="${element.id}" class="slider-menu__body card-product__items">
			<div class="card-product__item">
				<div class="slider-menu__img card-product__img">
					<img src="${element.img}" alt="img">
				</div>
			</div>
			<div class="card-product__item">
				<div class="slider-menu__title card-product__title">${element.title}</div>
				<div class="card-product__weight">${element.text}</div>
				<div class="card-product__calc">
					<div class="cart-sub-body__calc">
						<!-- <div class="cart-sub-body__caunter">
							<div class="cart-sub-body__minus card-product__minus">
								<svg class="_minus" width="30" height="30">
									<use xlink:href="img/sprite-icon.svg#minus"></use>
								</svg>
							</div>
							<div class="cart-sub-body__summa"></div>
							<div class="cart-sub-body__plus card-product__plus">
								<svg width="30" height="30">
									<use class="_plus" xlink:href="img/sprite-icon.svg#amount"></use>
								</svg>
							</div>
						</div> -->
						<div class="slider-menu__price cart-sub-body__price card-product__price">${element.price}
						</div>
					</div>
				</div>
				<div class="card-product__compound">
					<div class="compound__title">Состав:</div>
					<div class="compound__text">${element.feature}</div>
				</div>
				<!-- <div class="card-product__button slider-menu__btn"> -->
				<div class="slider-menu__btn card-product__btn">Хочу!</d>
					<!-- </div> -->
				</div>
			</div>
		</div>
	</div>`)
	})
}

if (cardProduct) {
	setData = JSON.parse(localStorage.getItem("set"))
	// console.log(setData)
	funcCartProduct(setData)
	// setData = []
	// localStorage.setItem('set', JSON.stringify(setData));
}

const contentSpoiler = document.getElementById("contentSpoiler")
const linkSpoiler = document.getElementById("linkSpoiler")
const descriptionArrow = document.querySelector(".description__arrow")
const descriptionTitle = document.querySelector(".description__title")
if (linkSpoiler) {
	linkSpoiler.onclick = function () {
		if (contentSpoiler.classList.contains('hidden')) {
			descriptionArrow.classList.add('turn')
			contentSpoiler.classList.remove('hidden')
			descriptionTitle.classList.add('margin-bottom')
			setTimeout(() => {
			}, 200);
		} else {
			descriptionTitle.classList.remove('margin-bottom')
			descriptionArrow.classList.remove('turn')
			setTimeout(() => {
				contentSpoiler.classList.add('hidden')
			}, 700);
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
if (svg) {
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
	priceTest = {
		fullPrice: `${normalPrice(price)} UAH`,
		fullCount: cartNumb,
	}
	localStorage.setItem('Full', JSON.stringify(priceTest))
	FullPrice = JSON.parse(localStorage.getItem("Data"))
	cartSubBodyTotal.textContent = priceTest.fullPrice
	cartSubBodyTotal.textContent = `${normalPrice(price)} UAH`

}

let stored = localStorage.getItem('Data')
let data = []
if (stored)
	data = JSON.parse(stored)
if (priceTest.fullCount > 0) {
	cartSubBodyTotal.textContent = priceTest.fullPrice
	price = parseInt(priceWithoutSpaces(priceTest.fullPrice))
}



const printCart = () => {
	if (price <= 0) {
		cartBodyWrapper.classList.remove('hidden')
		cartSubBody.classList.add('hidden')
		localStorage.clear()
		data.length = 0;
		back.classList.remove('modal')
		// cartWrapper.classList.add('hidden')
	} else if (price > 0) {
		cartBodyWrapper.classList.add('hidden')
		cartSubBody.classList.remove('hidden')

	}
	// let productsListLength = cartSubBodyItems.children.length;
	// cartSubBodySumma.textContent = productsListLength
	// productsListLength > 0 ? cartBodyWrapper.classList.add('hidden') && cartSubBody.classList.remove('hidden') : cartBodyWrapper.classList.remove('hidden') && cartSubBody.classList.add('hidden')
};

const generateCartProduct = (img, title, price, id, count) => {
	return `<div class="cart-sub-body__item" data-id="${id}" >
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
	</div>`
}
let cartNumb = 1
const deleteProducts = (productParent) => {
	let id = productParent.dataset.id
	let value = document.querySelector(`.cart-sub-body__item[data-id="${id}"]`).querySelector('.cart-sub-body__summa')
	let sumProduct = --value.textContent
	data.forEach(function (el) {
		if (el.id == id) {
			el.count = sumProduct
			DataNewse = data.filter((el) => el.count !== 0);
			if (el.count == 0) {
				cartNumb = --cartSubBodyItems.children.length
				cartMobileNumb.innerHTML = cartNumb
				localStorage.setItem('Full', JSON.stringify(priceTest))
				// funcCartMobile(cartNumb)
				const sliderMenuBtn = document.querySelectorAll('.slider-menu__btn')
				sliderMenuBtn.forEach(elem => {
					let body = elem.closest('.slider-menu__body')
					let idBtn = body.dataset.id
					if (el.id == idBtn) {
						elem.classList.remove('disabled')
					}
				})
				productParent.remove()
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
	let sumProduct = value.textContent++
	data.forEach(function (el) {
		if (el.id == id) {
			el.count = ++sumProduct
			DataNewse = data.filter((el) => el.count !== 0);
		}
	});
	localStorage.setItem('Data', JSON.stringify(DataNewse))
	let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-sub-body__price').textContent))
	plusFullPrice(currentPrice)
	printFullPrice()
}
const header = document.querySelector('.header__body')
const cartMobileNumb = document.querySelector('.cart-mobile__numb')


function funcSliderMenuBtn() {
	const sliderMenuBtn = document.querySelectorAll('.slider-menu__btn')
	// console.log(sliderMenuBtn)
	sliderMenuBtn.forEach(elem => {
		elem.closest('.slider-menu__body').setAttribute('data-count', 1)
		elem.addEventListener('click', (e) => {
			// console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
			// header.style.backgroundColor = "red"
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
			const cartMobile = document.querySelector('.cart-mobile')
			data.push(dataObj)
			localStorage.setItem('Data', JSON.stringify(data))
			plusFullPrice(dataObj.priceNumber)
			printFullPrice()
			cartSubBodyItems.insertAdjacentHTML('afterbegin', generateCartProduct(dataObj.img, dataObj.title, dataObj.priceString, dataObj.id, dataObj.count))
			printCart()
			cartNumb = cartSubBodyItems.children.length
			priceTest.fullCount = cartNumb
			localStorage.setItem('Full', JSON.stringify(priceTest))
			cartMobileNumb.innerHTML = cartNumb
			// funcCartMobile(cartNumb)
			funcDisabled()
		})
	})
}
funcSliderMenuBtn()

if (priceTest.fullCount > 0 && cartMobileNumb) {
	FullCount = JSON.parse(localStorage.getItem("Full"))
	cartMobileNumb.innerHTML = FullCount.fullCount
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
	})
}
const searcher = document.getElementById('searcher')
const homeSlider = document.querySelector('.home-slider__swiper')
if (searcher) {
	searcher.oninput = function (e) {
		const searсherBody = document.querySelector('.searher')
		if (!e.target.value.length == 0) {
			if (homeSlider) {
				homeSlider.classList.add('hidden')
				searсherBody.classList.remove('hidden')
			} else {
				pageGrid.classList.add('hidden')
				searсherBody.classList.remove('hidden')
			}
		} else {
			if (homeSlider) {
				homeSlider.classList.remove('hidden')
				searсherBody.classList.add('hidden')
			} else {
				pageGrid.classList.remove('hidden')
				searсherBody.classList.add('hidden')
			}
		}

		let searchData = [];
		productBase.map(function (elem) {
			const textTest = elem.title.toLowerCase()
			const result = textTest.search(e.target.value.toLowerCase())
			if (result !== -1 && e.target.value !== ' ') {
				searchData.push(elem)
			}
		})
		searсherBody.innerHTML = ''
		searchData.map(function (element) {
			searсherBody.insertAdjacentHTML('beforeend', `<div class="slider-menu__slide">
			<div data-id="${element.id}" class="slider-menu__body">
				<a href="card-product.html" class="slider-menu__img">
					<img src="${element.img}" alt="картинка">
				</a>
				<div class="slider-menu__block">
					<div class="slider-menu__sub-block">
						<h2 class="slider-menu__title">${element.title}</h2>
						<div class="slider-menu__text">${element.text}</div>
					</div>
					<div class="slider-menu__items">
						<div class="slider-menu__price">${element.price}</div>
						<div class="slider-menu__btn">Хочу</div>
					</div>
				</div>
			</div>`)
		})
		funcSliderMenuBtn()
		funcDisabled()
	}
}

const cartWrapper = document.querySelector('.cart')
const cartMobile = document.querySelector('.cart-mobile')
const cartFooter = document.querySelector('.footer-cart')
const back = document.querySelector('.back')
if (cartWrapper) {
	if (screen.width < 991) {
		cartWrapper.classList.add('hidden')
	}
}
cartMobile.addEventListener('click', () => {
	cartWrapper.classList.toggle('hidden')
	if (cartSubBodyItems.children.length > 0) {
		back.classList.toggle('modal')
	}

})
if (cartFooter) {
	cartFooter.addEventListener('click', () => {
		cartWrapper.classList.toggle('hidden')
		if (cartSubBodyItems.children.length > 0) {
			back.classList.toggle('modal')
		}
	})
}
