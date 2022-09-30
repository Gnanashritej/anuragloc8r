const homelist = (req, res) => {
  res.render('locations-list',
    {
      title: 'Anurag University - Place where your dreams come true',
      pageHeader: {
        title: 'Anurag University',
        strapLine: 'Place where your dreams come true'
      },
      sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
      locations: [
        {
          name: 'D-Block',
          address: 'Anurag University',
          rating: 3,
          facilities: ['CSE', 'AI', 'AIML','ECE','MECH'],
          distance: '100m'
        },
        {
          name: 'B-Block',
          address: 'Anurag University',
          rating: 4,
          facilities: ['CHEM','PHARMA'],
          distance: '200m'
        },
        {
          name: 'C-Block',
          address: 'Anurag University',
          rating: 2,
          facilities: ['CIVIL'],
          distance: '250m'
        },
        {
          name: 'A-Block',
          address: 'Anurag University',
          rating: 5,
          facilities: ['CSE','ADMINISTRATION','MECH','EEE'],
          distance: '300m'
        },
        {
          name: 'E-Block',
          address: 'Anurag University',
          rating: 5,
          facilities: ['AI','AIML','ECE','MBA'],
          distance: '400m'
        }
      ]
    }
  );
};

const locationInfo = (req, res) => {
  res.render('location-info',
    {
      title: 'D-Block',
       pageHeader: {
        title: 'Anurag University',
      },
      sidebar: {
        context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
        name: 'D-Block',
        address: 'Anurag University',
        rating: 3,
        facilities: ['CSE', 'AI', 'AIML','ECE','MECH'],
        coords: {lat: 51.455041, lng: -0.9690884},
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Simon Holmes',
            rating: 5,
            timestamp: '16 July 2013',
            reviewText: 'What a great place. I can\'t say enough good things about it.'
          },
          {
            author: 'Charlie Chaplin',
            rating: 3,
            timestamp: '16 June 2013',
            reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }
        ]
      }
    }
  );
};

const addReview = (req, res) => {
  res.render('location-review-form',
    {
      title: 'Review D-Block on Anurag University' ,
      pageHeader: { title: 'Review D-Block' }
    }
  );
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};