var farmInfo = require('./farmInfo')

var staticPages = {
  aboutPage: {
    title: 'About',
    subtitle: 'What we is about!',
    image: '../assets/images/tomatoes_hand.jpg',
    text: 'Three Hearts Farm is a Certified Organic, diversified vegetable farm between Bozeman and Belgrade.  The farm is certified by the USDA as organic, and it follows more stringent, sustainable, organic growing practices in every aspect of its operations. Three Hearts in fact has sustainability as its overarching goal: it uses permaculture practices, grows its own manure, grows diversified crops, rotates crop, uses poultry for manure and pest control, sells all of produce within 150 miles of the farm.  Nothing but water is sprayed on the crops.'
  },
  defaultPage: {
    title: farmInfo.name,
    subtitle: 'Welcome!',
    image: '../assets/images/THF_farmhouse.jpg',
    text: 'Three Hearts Farm is a Certifed Organic, diversified vegetable farm located on the western edge of Bozeman. Our mission at Three Hearts Farm is to contribute to a healthy food system in the Gallatin Valley. We’re here to provide individuals, families, restaurants and businesses with local, safe, organically grown, fresh food options. In addition to producing food for you, we’re here to provide education about the importance of local foods at all levels ranging from healthy nutrition to sound environmental practices.',
  },
  teamPage: {
    title: "Team",
    subtitle: "The ones gettin' the work done",
  },
  contactPage: {
    title: 'Contact',
    subtitle: 'Get at us!',
    mapPath: "https://www.google.com/maps/embed/v1/place?q=Three+Hearts+Farm,+2111+Love+Ln,+Bozeman,+MT+59718,+United+States&key=AIzaSyCpz9iKFUss5-9MmjGh8YBaU7D50gzxeKk",
  },
}

module.exports = staticPages
