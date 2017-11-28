const SOURCE = process.env.SOURCE;
const BikeSource = require('../Models/models.js').Bike;
const axios = require('axios');

const updateData = () => {
  axios(SOURCE).then(data => {
      let dataSource = data.data.values;
      let arr = [];
      dataSource.sort((a, b) => {
        return parseInt(a.number) - parseInt(b.number);
      });
      dataSource.forEach(item => {
        arr.push(BikeSource.findOne({
          number: item.number
        }));
      })
      console.log('adding promise successfully');
      Promise.all(arr).then(res => {
          const arr2 = [];
          res.forEach(function (data, index) {
            let item = dataSource[index];
            let standsObj = {
              time: item.last_update,
              available_bike_stands: item.available_bike_stands
            };
            let bikeObj = {
              time: item.last_update,
              available_bikes: item.available_bikes
            };
            updatingHistory(data.available_bike_stands_hist, standsObj);
            updatingHistory(data.available_bikes_hist, bikeObj);
            arr2.push(data.save());
          })
          return Promise.all(arr2);
        })
        .then(result => {
          console.log('updated successfully  ', new Date());
        }).catch(err => {
          console.log('some errors happens', err);
        })
      return dataSource;
    })
    .catch(err => {
      console.log('axios encountered error', error);
    })
}
const updatingHistory = (arr, data) => {
  if (arr.length < 2016) {
    arr.push(data);
  } else {
    arr.shift();
    arr.push(data);
  }
}
module.exports = updateData;
