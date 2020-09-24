const request = require('request');

const fetchBreedDescription = function(breedChoice,callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedChoice}`;
  request.get(url,function(err,resp,body) {
    if (err) {
      callback(err,null)
    }  else if (!breedChoice) {
      callback(err,null)
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(err,null)
      } else {
        callback(null,data[0].description);
      }
       
    }
  });
};


module.exports = {fetchBreedDescription};