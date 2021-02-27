import { config } from 'process';

const fs = require('fs');

export default (req, res) => {
    if (req.method === 'GET') {
      let configData;
      try {
        configData = fs.readFileSync('../money-maker/src/config.json');
      } catch (err) {
        res.status(500);
        return;
      }

      res.status(200).json(configData)

    } else if (req.method === 'POST') {
      try {
        const configData = JSON.parse(req.body);
        fs.writeFileSync('../money-maker/src/config.json', JSON.stringify(configData, null, 2));
      } catch (err) {
        res.status(500);
        return;
      }
      
      res.status(200).json("{Success}");
    }
    
  }
  