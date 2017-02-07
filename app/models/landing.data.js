module.exports = function LandingData(opts) {

  this.title = 'Hawaii Real Estate'
	this.url = 'profile'

  this.cta = {
    bg: 'cta01.jpg',
    header: 'Locations Hawaii',
    subheader: 'Welcoming Military Personnel Home',
    links: {
      'More Info': '/',
      'FAQs': '/faq',
      'Special Offers': '/#open-modal'
    }
  }

	this.info = {
		header: 'What We Do:',
		class: 'color-product-view',
		cards: [
			{
					title: 'VA Homes',
					image: 'slide59.jpg',
					body: 'Owning a home in Hawaii offers distinct advantages to members of the military. Locations’ experienced military experts will show you how to use housing allowance (BAH) and access Veterans Affairs (VA) loans to own a home that fits your individual circumstances.',
					caption: 'Discover more about the military lifestyle.',
					anchor: {
						route: '#open-modal',
						text: 'Learn more'
					},
					bodySmall: 'Discover more about the military lifestyle.'
			},
			{
					title: 'VA Loans',
					image: 'slide60.jpg',
					body: 'We have a team of lenders ready to help you get pre-qualified or pre-approved, as well as advise you on how to best use your federal funding to build equity.',
					bodySmall: 'Get info about mortgage or financing plans.',
					anchor: {
						route: 'financing',
						text: 'Ask about financing'
					},
					caption: 'Get info about mortgage and financing plans.'
			},
			{
					title: 'Buying vs. Renting',
					image: 'slide61.jpg',
					body: 'Congratulations on your new Assignment! It’s an exciting time with lots to think about. Do you live on base, rent off base, or buy?  The decision is up to you, but the best choice financially is to buy and use your BAH allowance to pay for your mortgage.',
					bodySmall: 'Learn about the benefits of buying a home.',
					anchor: {
						route: '#open-modal-contact',
						text: 'Contact us'
					},
					caption: 'Learn about the benefits of buying a home.'
			}
		]
	}

}

