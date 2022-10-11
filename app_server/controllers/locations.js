const homelist = (req, res) => {
  res.render('locations-list',
    {
      title: 'Anurag University - Place where your dreams come true',
      pageHeader: {
        title: 'Anurag University',
        strapLine: 'Place where your dreams come true'
      },
      sidebar: "Looking to fulfill your dreams Anurag University helps you find courses to join and how to get proceeded.If you visit the place don't forget to leave a feedback.",
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
        context: 'is a place of Anurag University which has top Courses to learn and fulfill all of your dreams.',
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
            days: 'Monday - Saturday',
            opening: '9:00am',
            closing: '4:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Gnana Shritej',
            rating: 5,
            timestamp: '11 October 2021',
            reviewText: 'What a great place. I can\'t say enough good things about it.'
          },
          {
            author: 'Chetan Kumar',
            rating: 3,
            timestamp: '6 may 2021',
            reviewText: 'This place was very good but wifi was very slow.'
          },
          {
            author: 'Chandraditya',
            rating: 3,
            timestamp: '21 September 2020',
            reviewText: 'This place in the college was very fine with full of greenery around.'
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
      pageHeader: { title: 'Feedback Form'}
    }
  );
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};