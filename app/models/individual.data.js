module.exports = function LandingData(name) {

  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }


  this.title = 'About Realtor'
  this.name = name
    .replace('-', ' ')
    .split(' ')
    .map((str) => str.capitalizeFirstLetter())
    .join(' ')

  const shannon = {
    title: 'Partner',

  }

  const reine = {}

  const cui = {}

  const caroline = {}


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

  this.person = renderPerson(name)
}
