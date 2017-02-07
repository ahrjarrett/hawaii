module.exports = function (app) {

	app.locals.company = 'HawaiiMIL'

	app.locals.phone = 8082253736
  app.locals.altPhone = 8087383139
  app.locals.prettifyPhone = function(phone) {
    var ph = phone.toString()
    return '(' + ph.slice(0,3) + ') ' + ph.slice(3,6) + '-' + ph.slice(6)
  }

	app.locals.rootUrl = 'http://HawaiiMIL.com'
	app.locals.social = {
    //'https://github.com/ahrjarrett': 'icon-pacman',
    //'https://github.com/ahrjarrett': 'icon-github',
		//'https://twitter.com/': 'icon-twitter-with-circle',
    //'https://plus.google.com/': 'icon-google-plus3',
    //'https://youtube.com/': 'icon-youtube',
    //'https://www.linkedin.com/in/shannon-smith-7a43321': 'icon-linkedin2',
		'https://www.facebook.com/HawaiiMIL': 'icon-facebook-with-circle'
	}
	app.locals.blog = {}

	app.locals.footerUl = {
		//'Hospital & Education': '#',
    //'International Distribution': '#',
    //'Outpatient & Medical Specialties': '#',
    //'Medical Parts & Supplies': '#',
    //'Integrated Rental Services': '#',
    //'Veterinary Equipment': '#'
	}
	app.locals.nav = {
		'Welcome': '',
		'About us': 'about-us',
		'Profile': 'profile'
	}

	app.locals.subnav = {
		'Home': '',
		//'Sell': 'special-features',
		'Financing': 'financing',
		//'Learn': 'financing',
		//'Resources': 'financing',
		//'News': 'financing'
    'Contact': '#open-modal-contact'
	}

	app.locals.partners = [
		'apsp', 'bbb', 'pentair', 'wetedge'
	]

	app.locals.items = {'Link 1':'link-1','Link 2':'link-2','Link 3':'link-3','Link 4':'link-4'}

}
