/* GET homepage */
const about = (req, res) => {
  res.render('generic-text',
    {
      title: 'About Anurag University',
      content: 'Anurag University, Hyderabad was established in the year 2020. The college is ranked 3rd among Best Infrastructure & Research Institutes in 2019. The institution offers undergraduate and postgraduate courses in the field of Engineering, Business Administration and Pharmacy.'
    }
  );
};

module.exports = {
  about
};