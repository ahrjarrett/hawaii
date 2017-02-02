module.exports = function (app) {

	app.locals.company = 'Dallas Medical Equipment';

	app.locals.phone = 8005228331;
  app.locals.prettifyPhone = function(phone) {
    var ph = phone.toString()
    return '(' + ph.slice(0,3) + ') ' + ph.slice(3,6) + '-' + ph.slice(6)
  }

	app.locals.rootUrl = 'https://git.heroku.com/medical-equipment.git';
	app.locals.social = {
    'https://github.com/ahrjarrett': 'icon-pacman',
    'https://github.com/ahrjarrett': 'icon-github',
		//'https://www.facebook.com/': 'icon-facebook-with-circle',
		//'https://twitter.com/': 'icon-twitter-with-circle',
    //'https://plus.google.com/': 'icon-google-plus3',
    //'https://youtube.com/': 'icon-youtube',
		'https://www.linkedin.com/in/andrewhjarrett/': 'icon-linkedin2'
	};
	app.locals.blog = {
		features: [
			{
				title: 'Does Chlorine Really Keep the Pool Cleaner? Sun Ray Pools Plays Mythbusters',
				link: 'feature1link'
			},
			{
				title: 'Feature 2 Title is just a regular title that should give some indication as to what’s inside',
				link: 'feature2link'
			},
			{
				title: 'Feature 3 Title, keeping it kinda short but not that whort, really.',
				link: 'feature3link'
			},
			{
				title: 'Feature 4 Title cool new features how with they integrate with our lives?',
				link: 'feature4link'
			}
		],
		newnews: [
			{
				title: 'Story 1 Title, with a subtitle, and a secret alternate ending.',
				link: 'story1link'
			},
			{
				title: 'Story 2 Title.',
				link: 'story2link'
			},
			{
				title: 'Story3 Title with headlines and such!',
				link: 'story3link'
			},
			{
				title: 'Story 4 Title testing line-height',
				link: 'story4link'
			}
		]
	};

	app.locals.footerUl = {
		'Hospital & Education': '#',
    'International Distribution': '#',
    'Outpatient & Medical Specialties': '#',
    'Medical Parts & Supplies': '#',
    'Integrated Rental Services': '#',
    'Veterinary Equipment': '#'
	};
	app.locals.nav = {
		'Welcome': '',
		'About': 'about-us',
		'Services': 'outdoor-living',
		'Portfolio': 'swimming-pools'
	};

	app.locals.subnav = {
		'Medical Equipment': 'outdoor-living',
		'Specialties': 'special-features',
		'Services': 'financing',
		'Medical Supplies': 'financing',
		'Resources': 'financing',
		'Brands': 'financing',
		'News': 'financing'
	};

	app.locals.partners = [
		'apsp', 'bbb', 'pentair', 'wetedge'
	];

	app.locals.items = {'Link 1':'link-1','Link 2':'link-2','Link 3':'link-3','Link 4':'link-4'};

};
