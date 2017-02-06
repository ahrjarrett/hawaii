module.exports = function ProductData(opts) {
	// if(!opts) opts = {}

	this.title = 'About'
	this.url = 'about-us'


	this.spotlight = {
		'header': 'About Us',
		'subheader': 'Together, we are HawaiiMIL.',
		'bg': 'spotlight0.jpg',
		'action': 'Click on one of our profiles to learn more:',
		'products': {
			'Social Media': 'Learn about how social networking can help you grow, and take your business to the next level.',
			'Website Development': 'End-to-end website design and development, fully customized based on what you need, right now.',
			'Search Engine Marketing': 'You should be spending your time on your business, not learning how to rank higher than your competitors on Google.'
		}
	}

	this.showcase = [
		{
			img: 'About-Trimmed-SmithShannon.jpg',
			head: 'Shannon Smith',
			body: 'A company partner with 20 years of experience in real estate, Shannon is fully capable of handling a wide variety of clients.'
		},
		{
			img: 'About-Trimmed-AhMooReine.jpg',
			head: 'Reine Ah Moo',
			body: 'Reine’s dedication to her clients is unmatched, and her motivation and enthusiasm are contagious.'
		}
  ]

  this.showcase2 = [
		{
			img: 'About-Trimmed-HoCui.jpg',
			head: 'Cui Me Ho',
			body: 'While working with clients, she strives to understand their needs and goals and develop a strategy that helps them attain their goals.'
		},
		{
			img: 'About-Trimmed-MillerCaroline.jpg',
			head: 'Caroline Miller',
			body: 'Hard working real estate professional, always going over and beyond the call of duty to help each and every client thoroughly.'
		}
  ]

	this.accordion = [
		{
			head: 'Header Text 1',
			body: [
				{
					id: 0,
					display: 'Text to change text to change text to change',
					hidden: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 1,
					display: 'Text to change',
					hidden: 'Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 2,
					display: 'Text to change lots',
					hidden: 'Dispum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 3,
					display: 'Text to change fo\' real',
					hidden: 'Bordom Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				}
			]
		},
		// {
		// 	head: 'Header Text 2',
		// 	body: [
		// 		{
		// 			id: 4,
		// 			display: 'Text2 to change text to change text to change',
		// 			hidden: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
		// 		},
		// 		{
		// 			id: 5,
		// 			display: 'Text 2 change',
		// 			hidden: 'Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
		// 		},
		// 		{
		// 			id: 6,
		// 			display: 'Text to change 2 lots',
		// 			hidden: 'Dispum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
		// 		},
		// 		{
		// 			id: 7,
		// 			display: 'More info',
		// 			hidden: 'Bordom Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
		// 		}
		// 	]
		// },
		{
			head: 'Header Text 3',
			body: [
				{
					id: 8,
					display: 'Text to change text cubed',
					hidden: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 9,
					display: 'Text 3 change',
					hidden: 'Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 10,
					display: '3 Text to change lots',
					hidden: 'Dispum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 11,
					display: 'More info',
					hidden: 'Bordom Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				}
			]
		}

	]




}
