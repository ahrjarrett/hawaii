var express       = require('express'),
		router        = express.Router()

var BlogData       = require('../models/blog_index.data.js'),
		FinanceData    = require('../models/finance.data.js'),
		IndexData      = require('../models/index.data.js'),
    IndividualData = require('../models/individual.data.js'),
		LandingData    = require('../models/landing.data.js'),
    MapData        = require('../models/map.data.js'),
		PoolsData      = require('../models/pools.data.js'),
		PortfolioData  = require('../models/portfolio.data.js'),
		PostData       = require('../models/_firstpost.data.js'),
		ProductData    = require('../models/product.data.js'),
    ReviewsData    = require('../models/reviews.data.js'),
		ServicesData   = require('../models/services.data.js'),
		SpasData       = require('../models/spas.data.js'),
		SpecialData    = require('../models/special.data.js'),
		ThanksData     = require('../models/thanks.data.js')

var ForecastIo = require('forecastio')
var weather = new ForecastIo('b4273f2056175820d34aa2636bac6ff5')

module.exports = function (app) {

	app.use('/', router)

	router.get('/', function (req, res, next) {
		var data = new IndexData()
		res.render('index', {
			title: data.title,
			url: data.url,
			buttons: data.buttons,
			features: data.features,
			home: data.home,
			info: data.info,
			info1: data.info1,
			quotes: data.quotes,
      weather: data.weather
		})
	})

  router.get('/about/:name', (req, res, next) => {
    const name = req.params.name
    const data = new IndividualData(name)
    res.render('individual', {
      title: data.title,
      name: data.name,
      person: data.person
    })
  })

  router.get('/weather', function(req, res, next){
    var latitude = 32.7767
    var longitude = -96.7970
    weather.forecast(latitude, longitude, function(err, data) {
      if (err) {
        next()
        return
      }
      res.json({
        temperature: data.currently.temperature,
        icon: data.currently.icon
      })
    })
  })

  router.get('/map', (req, res, next) => {
    let data = new MapData()
    res.render('map', {
      title: data.title,
      url: data.url
    })
  })

  router.get('/reviews', function(req, res, next) {
    var data = new ReviewsData()
    res.render('reviews', {
      title: data.title
    })
  })

	router.get('/profile', function (req, res, next) {
		var data = new LandingData()
		res.render('landing', {
			title: data.title,
			url: data.url,
			cta: data.cta,
			info: data.info
		})
	})

	router.get('/about-us', function (req, res, next) {
		var data = new ProductData()
		res.render('products', {
			title: data.title,
			url: data.url,
			spotlight: data.spotlight,
			accordion: data.accordion,
			showcase: data.showcase,
			showcase2: data.showcase2
		})
	})

	router.get('/swimming-pools', function (req, res, next) {
		var data = new PoolsData()
		res.render('pools', {
			title: data.title,
			url: data.url,
			features: data.features
		})
	})

	router.get('/swim-spas', function (req, res, next) {
		var data = new SpasData()
		res.render('spas', {
			title: data.title,
			url: data.url
		})
	})

	router.get('/financing', function (req, res, next) {
		var data = new FinanceData()
		res.render('finance', {
			title: data.title,
			url: data.url,
			cta: data.cta
		})
	})

	router.get('/special-features', function (req, res, next) {
		var data = new SpecialData()
		res.render('special', {
			title: data.title,
			url: data.url,
			buttons: data.buttons,
			home: data.home,
			showcase: data.showcase
		})
	})

	router.get('/thank-you', function (req, res, next) {
		var data = new ThanksData()
		res.render('thanks', {
			title: data.title,
			url: data.url
		})
	})

	router.get('/services', function (req, res, next) {
		var data = new ServicesData()
		res.render('services', {
			title: data.title,
			url: data.url
		})
	})

	router.get('/portfolio', function (req, res, next) {
		var data = new PortfolioData()
		res.render('portfolio', {
			title: data.title,
			url: data.url,
			cta: data.cta,
			features: data.features,
			spotlight: data.spotlight
		})
	})

	router.get('/blog', function(req, res, next) {
		var data = new BlogData()
		res.render('blog', {
			title: data.title,
			url: data.url,
			articles: data.articles
		})
	})

	router.get('/blog/post0', function(req, res, next) {
		var data = new PostData()
		res.render('post', {
			title: data.title,
			url: data.url,
			article: data.article,
			metadata: data.metadata
		})
	})

}

