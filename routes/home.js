let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
  let object = { title: 'node' };

  let myList = [
    { id: 1, text: 'Banana' },
    { id: 2, text: 'Apple' },
    { id: 3, text: 'Mango' }
  ];

  let myData = {
    list: myList,
    welcomeMsg: object
  };

  res.render('pages/index.ejs', myData);
});
module.exports = router;
