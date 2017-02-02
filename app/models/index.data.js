module.exports = function IndexData(opts) {

	this.title = 'DME';
	this.url = '#';

	//this.buttons = [
	//	'Pools', 'Spas', 'Firepits', 'Patio'
	//];

	this.home = {
		ns: 'hero',
		init: 'main0.jpg',
		icon: 'icon02.png',
		btnMain: 'Submit',
		sales: {
			header: 'Sun Ray Pools',
			bannerA: 'Download the Checklist',
			bannerB: '10 Tips for a Perfect Pool',
			btntext: 'Download'
		},
		dev: {
			header: 'Relax.',
			bannerA: 'Download the Checklist',
			bannerB: '11 Tricks for a Smooth Deploy(ment)',
			btntext: 'Download'
		},
		builds: {
			header: 'Fire & Water.',
			bannerA: 'Download the Checklist',
			bannerB: 'The 12 Secrets of Architecture',
			btntext: 'Download'
		},
		sexy: {
			header: 'Outdoor Living.',
			bannerA: 'Download the Checklist',
			bannerB: '13 Hacks for a Summer Bod',
			btntext: 'Download'
		}
	};

	this.info = {
		header: 'New & Used Medical Equipment',
		class: 'color-index-view',
		cards: [
			{
					title: 'Vital Signs Monitors',
					image: 'info-1.jpg',
					body: 'These vital signs monitors are available new or professionally refurbished to original factory specifications by our trained biomedical technicians. Every refurbished machine from DME Medical comes backed by a warranty.',
					bodySmall: 'Every refurbished machine from DME Medical comes backed by a warranty.',
					anchor: {
						route: 'about-us',
						text: 'Learn more'
					},
					caption: 'Know what to expect.'
			},
			{
					title: 'Defibrillators',
					image: 'info-2.jpg',
					body: 'DRE offers defibrillators in a variety of configurations, from manually-operated defibrillators for EMS professionals to wall-mounted AED units that allow non-medical personnel to offer guided resuscitation in schools, gyms, and other environments.',
					bodySmall: 'Sun Ray Pools has one focus: Building unique and beautiful custom pools.',
					anchor: {
						route: 'swimming-pools',
						text: 'Compare models',
					},
					caption: 'Top brands including Philips, Zoll, Lifepak and more.'
			},
			{
					title: 'Ultrasound Equipment',
					image: 'info-3.jpg',
					body: 'Choose either a factory new, DRE brand or a professionally refurbished unit from an industry-leading brand such as Siemens, GE, Philips and more.',
					bodySmall: 'Spend more quality time with those you love. Tell us how our family can help yours!',
					anchor: {
						route: '#open-modal-contact',
						text: 'Get an Estimate'
					},
					caption: 'Tell us what we can do to help you!'
			}
		]
	};

	this.info1 = {
		header: 'What else?',
		class: 'color-index-alt-view',
		cards: [
			{
					title: 'Special Features',
					image: 'resource04.jpg',
					body: 'With the right design creativity and today’s new features, the possibilities for customizing your special project are limitless. Take a look at the photos below for a small sampling of the many custom water features that could be part of your backyard project.',
					bodySmall: 'Custom features to make your pool truly one-of-a-kind.',
					anchor: {
						route: 'special-features',
						text: 'More special features'
					},
					caption: 'Custom features to make your pool truly one-of-a-kind.'
			},
			{
					title: 'Financing',
					image: 'resource05.jpg',
					body: 'There are numerous financing options available today that make it possible for everyone to own a swimming pool. We are committed to helping our customers secure the best financing available. We work with many local lenders, or with your financial institution of choice.',
					bodySmall: 'We make financing a very simple process and we will help you find the lender you need.',
					anchor: {
						route: 'financing',
						text: 'Learn more'
					},
					caption: 'We make financing simple.'
			},
			{
					title: 'FAQ',
					image: 'resource06.jpg',
					body: 'Do you have questions about building, maintaining or just owning a pool? We\'ve assembled some questions below to help you know what to expect. Check out the link below to get your questions answered.',
					bodySmall: 'We put together a list of answers that will help you understand what to expect.',
					anchor: {
						route: '#open-modal-contact',
						text: 'Frequently asked questions'
					},
					caption: 'We put together a list of answers that will help you understand what to expect.'
			}
		]
	};

	this.features = {
		rowone: {
			0:[
				'Residential Pools', 'slide03.jpg', 'location-arrow', ['slide07.jpg', 'slide18.jpg', 'slide19.jpg', 'slide20.jpg']
			],
			1:[
				'Waterfalls', 'slide32.jpg', 'anchor', ['slide25.jpg', 'slide33.jpg', 'slide34.jpg', 'slide47.jpg']
			],
			2:[
				'Spas', 'slide08.jpg', 'map-marker', ['slide44.jpg', 'slide38.jpg', 'slide40.jpg', 'slide46.jpg']
			],
			3:[
				'Outdoor Kitchens', 'slide12.jpg', 'compass', ['slide11.jpg', 'slide13.jpg', 'slide14.jpg', 'slide17.jpg']
			],
			4:[
				'Patios', 'slide05.jpg', 'flag', ['slide06.jpg', 'slide09.jpg', 'slide10.jpg', 'slide36.jpg']
			],
			5:[
				'Decks', 'slide03.jpg', 'map-marker', ['slide05.jpg', 'slide06.jpg', 'slide10.jpg', 'slide57.jpg']
			]
		},
		rowtwo: {
			0:[ 'slide07.jpg', 'Residential Pools', 'taxi', 'outdoor-living', 'See just how beautiful your new pool could be' ],
			1:[ 'slide08.jpg', 'Outdoor Kitchens', 'subway', 'financing', 'Custom-made and designed for outdoor living' ],
			2:[ 'slide09.jpg', 'Patios & Decks', 'bicycle', 'swimming-pools', 'Your whole backyard, custom-built to your liking' ]
		}
	};

	this.quotes = {
		heads: [
			{
				// id:0,
				quote: '',
				name: ''
			},
			{
				// id:1,
				quote: '',
				name: ''
			},
			{
				// id:2,
				quote: '',
				name: ''
			},
			{
				// id:3,
				quote: '',
				name: ''
			},
			{
				// id:4,
				quote: '',
				name: ''
			}
		]
	};

};
