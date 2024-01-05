(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();


	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();

			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});


			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	$('.book_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});
	$('.book_time').timepicker();



})(jQuery);









// const orderForm = document.getElementById('order-form');
// const orderTable = document.getElementById('order-table');
// const orderTableBody = document.getElementById('order-table-body');
// const cartButton = document.getElementById('cart-button');

// let orders = [];


// function renderOrders() {
// 	orderTableBody.innerHTML = '';

// 	if (orders.length === 0) {
// 		orderTable.style.display = 'none';
// 		cartButton.style.display = 'none';
// 		return;
// 	}

// 	orders.forEach((order, index) => {
// 		const orderRow = document.createElement('tr');

// 		const orderNumber = document.createElement('td');
// 		orderNumber.innerText = index + 1;
// 		orderRow.appendChild(orderNumber);

// 		const name = document.createElement('td');
// 		const nameInput = document.createElement('input');
// 		nameInput.style.border = 'none';
// 		nameInput.style.outline = 'none';
// 		nameInput.style.background = 'none';
// 		nameInput.type = 'text';
// 		nameInput.value = order.name;
// 		nameInput.disabled = true;
// 		name.appendChild(nameInput);
// 		orderRow.appendChild(name);

// 		const email = document.createElement('td');
// 		const emailInput = document.createElement('input');
// 		emailInput.style.border = 'none';
// 		emailInput.style.outline = 'none';
// 		emailInput.style.background = 'none';
// 		emailInput.type = 'email';
// 		emailInput.value = order.email;
// 		emailInput.disabled = true;
// 		email.appendChild(emailInput);
// 		orderRow.appendChild(email);

// 		const phone_number = document.createElement('td');
// 		const phoneInput = document.createElement('input');
// 		phoneInput.style.border = 'none';
// 		phoneInput.style.outline = 'none';
// 		phoneInput.style.background = 'none';
// 		phoneInput.type = 'tel';
// 		phoneInput.value = order.phone_number;
// 		phoneInput.disabled = true;
// 		phone_number.appendChild(phoneInput);
// 		orderRow.appendChild(phone_number);

// 		const day = document.createElement('td');
// 		const dayInput = document.createElement('input');
// 		dayInput.style.border = 'none';
// 		dayInput.style.outline = 'none';
// 		dayInput.style.background = 'none';
// 		dayInput.type = 'text';
// 		dayInput.value = order.day;
// 		dayInput.disabled = true;
// 		day.appendChild(dayInput);
// 		orderRow.appendChild(day);

// 		const time = document.createElement('td');
// 		const timeInput = document.createElement('input');
// 		timeInput.style.outline = 'none';
// 		timeInput.style.border = 'none';
// 		timeInput.style.background = 'none';
// 		timeInput.type = 'text';
// 		timeInput.value = order.time;
// 		timeInput.disabled = true;
// 		time.appendChild(timeInput);
// 		orderRow.appendChild(time);

// 		const people = document.createElement('td');
// 		const peopleInput = document.createElement('input');
// 		peopleInput.style.border = 'none';
// 		peopleInput.style.outline = 'none';
// 		peopleInput.style.background = 'none';
// 		peopleInput.type = 'number';
// 		peopleInput.value = order.people;
// 		peopleInput.min = 1;
// 		peopleInput.max = 10;
// 		peopleInput.disabled = true;
// 		people.appendChild(peopleInput);
// 		orderRow.appendChild(people);

// 		const editButton = document.createElement('button');
// 		editButton.innerText = 'Edit';
// 		editButton.classList.add('btn', 'btn-primary', 'edit-button');
// 		editButton.addEventListener('click', () => {
// 			if (editButton.innerText === 'Edit') {
// 				editButton.innerText = 'Save';
// 				nameInput.disabled = false;
// 				emailInput.disabled = false;
// 				phoneInput.disabled = false;
// 				dayInput.disabled = false;
// 				timeInput.disabled = false;
// 				peopleInput.disabled = false;
// 			} else {
// 				editButton.innerText = 'Edit';
// 				nameInput.disabled = true;
// 				emailInput.disabled = true;
// 				phoneInput.disabled = true;
// 				dayInput.disabled = true;
// 				timeInput.disabled = true;
// 				peopleInput.disabled = true;

// 				order.name = nameInput.value;
// 				order.email = emailInput.value;
// 				order.phone_number = phoneInput.value;
// 				order.day = dayInput.value;
// 				order.time = timeInput.value;
// 				order.people = peopleInput.value;
// 			}
// 		});

// 		orderRow.appendChild(editButton);

// 		const deleteButton = document.createElement('button');
// 		deleteButton.innerText = 'Delete';
// 		deleteButton.classList.add('btn', 'btn-danger', 'delete-button');
// 		deleteButton.addEventListener('click', () => {
// 			orders.splice(index, 1);
// 			renderOrders();
// 		});
// 		orderRow.appendChild(deleteButton);

// 		orderTableBody.appendChild(orderRow);
// 	});

// 	orderTable.style.display = 'table';
// 	cartButton.style.display = 'block';
// }



// orderForm.addEventListener('submit', function (event) {
// 	event.preventDefault();

// 	const name = document.getElementById('name');
// 	const email = document.getElementById('email');
// 	const phone_number = document.getElementById('phone_number');
// 	const day = document.getElementById('day');
// 	const time = document.getElementById('time');
// 	const people = document.getElementById('people');

// 	const order = {
// 		name: name.value,
// 		email: email.value,
// 		phone_number: phone_number.value,
// 		day: day.value,
// 		time: time.value,
// 		people: people.value
// 	};

// 	orders.push(order);

// 	orderForm.reset();

// 	renderOrders();

// 	name.value = '';
// 	email.value = '';
// 	phone_number.value = '';
// 	day.value = '';
// 	time.value = '';
// 	people.value = '';
// });

// cartButton.innerHTML = '<i class="fas fa-shopping-cart"></i>';

// cartButton.addEventListener('click', () => {
// 	if (orderTable.style.display === 'none') {
// 		orderTable.style.display = 'table';
// 		cartButton.innerHTML = '<i class="fas fa-shopping-cart"></i>';
// 	} else {
// 		orderTable.style.display = 'none';
// 		cartButton.innerHTML = '<i class="fas fa-shopping-cart"></i>';
// 	}
// });

// renderOrders();













































































