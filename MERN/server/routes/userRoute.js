import express from 'express';
import path    from 'path';
import User    from '../modals/UserList';

let router = express.Router();

router.get('/', function (req, res) {
  console.log('******', req.query);
  User.find({_id: req.query.userId}, function(err, data) {
    if (err) console.log('err', err);
    res.json(data);
  });
});

router.post('/', (req, res) => {
  User.create(req.body, (err, data) => {
    if (err) {
      res.json({errorMessage: err});
    }
    res.json(data);
  });
});

module.exports = router;
