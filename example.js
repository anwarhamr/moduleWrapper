var queries = require('./queries');
var fs = require('fs');

module.exports = {
  //todo have this actuall execute real function if we don't have the value local.

  getUniqEventsForDates:async (...params)=>{
    return new Promise((res,rej)=>{
      let fileName = 'tests/data/queries.getUniqEventsForDates.json';

      fs.readFile(fileName, async(err, data) => {
        if (err) {
          let result = await  queries.getUniqEventsForDates(...params);
          fs.writeFile(fileName,JSON.stringify(result),(err, data) => {
            if (err) throw err;
          });
          res(result);
        }
        else{
          console.log('*********returning cached data for getUniqEventsForDates');

          res(JSON.parse(data));
        }
      });
    });
  },
  getEpilogsConnectedToByCollectionDevice:async (...params)=>{
    return new Promise((res,rej)=>{
      let fileName = 'tests/data/queries.getEpilogsConnectedToByCollectionDevice.json';

      fs.readFile(fileName,async (err, data) => {
        if (err) {
          let result = await queries.getEpilogsConnectedToByCollectionDevice(...params);
          fs.writeFile(fileName,JSON.stringify(result),(err, data) => {
            if (err) throw err;
          });
          res(result);
        }
        else{
          console.log('*********returning cached data for getEpilogsConnectedToByCollectionDevice');

          res(JSON.parse(data));
        }
      });
    });
  },
  getRunsByDateRange:async (...params)=>{
    return new Promise((res,rej)=>{
      let fileName = 'tests/data/queries.getRunsByDateRange.json';

      fs.readFile(fileName, async(err, data) => {
        if (err) {
          let result = await queries.getRunsByDateRange(...params);
          console.log('got data',result);
          fs.writeFile(fileName,JSON.stringify(result),(err, data) => {
            if (err) throw err;
          });
          res(result);
        }
        else{
          console.log('*********returning cached data for getRunsByDateRange');
          res(JSON.parse(data));
        }
      });


    });
  }
};
