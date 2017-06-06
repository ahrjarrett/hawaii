module.exports = function IndividualData(name) {
  const imgDir = '/images/'

  const shannon = {
    title: 'REALTOR, Partner',
    img: imgDir + 'About-SmithShannon.jpg',
    id: 'RB-21159',
    email: 'shannon.smith@locationshawaii.com',
    phone: '8087383139',
    mobile: '8082253736',
    url: 'https://www.locationshawaii.com/agent/shannon.smith/',
    recentSales: 'https://www.locationshawaii.com/agent/portal/shannon.smith/',
    description: [
      'A company partner with 20 years of experience in real estate, Shannon is fully capable of handling a wide variety of clients. She loves helping out members of the military, but can also assist the first-time buyer, someone looking for a commercial property, or even clients in need of a short sale. Shannon enjoys being a realtor and finds it the most rewarding work she has ever done.',
      'Shannon places a strong emphasis on understanding the desires and needs of all her clients. This allows her to develop a plan and strategy that will best position them in the market and hopefully make their dreams become a reality. Shannon takes great pride in successfully guiding her clients through the biggest purchase of their lives.',
      'Shannonʻs hard work and dedication is always recognized by her clients, as she has won the Client Service award multiple times since 2004. Her desire to help others also extends into the community, where she has served on the Locations Foundationʻs board and also chaired events around Oahu that have helped area elementary schools better the lives of their students.',
      'With the desire to constantly improve as a person and agent in order to provide the best service possible, Shannon always goes above and beyond so that her clients are prepared to win in all situations.'
    ],
    expertise: [
      'I enjoy working with Buyers and especially first-time Buyers. It gives me a great sense of accomplishment that I am able to utilize my organizational and negotiation skills assisting people with the biggest purchase of their lives. I believe my "job" is to listen very carefully to the desires and needs of clients and then providing all of their options and then working as hard as I can to make those dreams become a reality.',
      'I am also a memeber of the Short Sale Team at Prudential and while it is not a "fun" position to be in I work hard to make the best of a bad situation utilizing my skills to assist Sellers move their properties as quickly as possible.'
    ],
    education: [],
    awards: [],
    articles: [
      'https://www.locationshawaii.com/news/locations-foundation/the-locations-foundation-the-2nd-annual-legacy-project-deadline-is-june-15th!/',
      'https://www.locationshawaii.com/news/investing-in-real-estate/short-sales-to-buy-or-not-to-buy-that-is-the-question!/'
    ]
  }

  const reine = {
    title: 'REALTOR, Fine Homes Specialist',
    img: imgDir + 'About-AhMooReine.jpg',
    id: 'RB-21168',
    email: 'reine.ahmoo@locationshawaii.com',
    phone: '8087383173',
    mobile: '8083434204',
    url: 'https://www.locationshawaii.com/agent/reine.ahmoo/',
    recentSales: 'https://www.locationshawaii.com/agent/portal/reine.ahmoo/',
    description: [
      'Reine Ah Moo is a native of Honolulu, Hawaii and is a graduate of La Pietra. She further pursued her education in California, where she received her Bachelor’s Degree in Psychology and Minor in Business at the University of San Francisco.',
      'Upon graduation, Reine pursued a career in Retail Management and in 1993 was selected as one of the Retail Candidates to participate in the prestigious Management Associate Program for the Mirage Hotel in Las Vegas, Nevada.  Reine also held management positions in Beverly Hills and Las Vegas, with luxury boutiques in the Mirage, Moschino, BCBG Max Azria, and Lalique.',
      'Looking for a new challenge, Reine decided to explore a career in real estate and became a licensed Realtor in the State of California in 2002.  With the constant encouragement and guidance from her Uncle, Bill Chee, she decided to explore a career in Hawaiian real estate.  Reine chose to bring her experience and energy and began working for Locations (formerly Prudential Locations) in 2004. Reine obtained her Hawaii Brokers License in 2013.',
      'Reine’s dedication to her clients is unmatched, and her motivation and enthusiasm are contagious.  Combining her years of industry experience in service, communication, and customer satisfaction with her mainland and local market knowledge, Reine is committed to helping her clients meet their real estate needs.',
    ],
    expertise: [],
    education: [],
    awards: [],
    articles: []
  }

  const cui = {
    title: 'REALTOR',
    img: imgDir + 'About-HoCui.jpg',
    id: 'RB-20657',
    email: 'cui.ho@locationsllc.com',
    phone: '8087325087',
    mobile: '8083827935',
    url: 'https://www.locationshawaii.com/agent/cui.ho/',
    recentSales: 'https://www.locationshawaii.com/agent/portal/cui.ho/',
    description: [
      'Cui “Chui” was born in Guangdong, China and grew up on the west side of Oahu in Waianae.  Shortly after graduation from McKinley High School, Cui left Hawaii and went to Seattle University to complete her freshmen year of college.  After she realized how much she missed Hawaii, she moved back to attend the University of Hawaii at Manoa, where she majored in Finance and International Business with a minor in Economics.  While at UH, she really enjoyed the Real Estate aspect of Finance, which led her to attain a Real Estate license in 2004 broadening her understanding about the Real Estate market.  Her early Real Estate career started off as an office assistant to a Realtor followed by working with a small local developer, where she learned various aspects about land use ordinance, zoning, and CPR.  Over the years, she worked with many buyers, sellers, and investors as their Realtor.  She also became a short-sale specialist in homes with response to the subprime loan crisis.',
      'During her spare time, Cui enjoys spending time with her family, traveling, volunteering her time to help the community through events with the foundation, and exploring new types of food.  She is a mother to a little boy, Caden, and wife of a Naval Officer. Her Husband is a 2004 Naval Academy graduate.',
      'Helping people was always a true passion of hers. She is a firm believer in planning, planning, and did I mention planning?  The key to success with anything in life starts with a solid plan.  While working with clients, she strives to understand their needs and goals and develop a strategy that helps them attain their goals.  Owning Real Estate can be one of the biggest investments in life, and her top priority is to help others succeed.'
    ],
    expertise: [
      'Short sales Buy and Sell on Oahu Investing in Real Estate Military.'
    ],
    education: [],
    awards: [],
    articles: []
  }

  const caroline = {
    title: 'REALTOR',
    img: imgDir + 'About-MillerCaroline.jpg',
    id: 'RB-21113',
    email: 'caroline.miller@locationshawaii.com',
    phone: '8087383133',
    mobile: '8086309396',
    url: 'https://www.locationshawaii.com/agent/caroline.miller/',
    recentSales: 'https://www.locationshawaii.com/agent/portal/caroline.miller/',
    description: [
      'Hard working real estate professional, always going over and beyond the call of duty to help each and every client thoroughly with their real estate transaction process. You will be in good hands and find comfort in having me as your realtor.'
    ],
    expertise: [],
    education: [],
    awards: [],
    articles: []
  }

  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }

  function renderPerson(name) {
    if(name === 'shannon-smith') {
      return this.person = shannon
    }
    else if(name === 'reine-ah-moo') {
      return this.person = reine
    }
    else if(name === 'cui-mei-ho') {
      return this.person = cui
    }
    else if(name === 'caroline-miller') {
      return this.person = caroline
    }
    else return 404
  }

  this.title = 'About Realtor'
  this.name = name
    .replace(/-/g, ' ')
    .split(' ')
    .map((str) => str.capitalizeFirstLetter())
    .join(' ')
  this.person = renderPerson(name)


}
