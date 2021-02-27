const ps = require('ps-node');

export default (req, res) => {
    let healthy = false;
    ps.lookup({ command: 'python3', arguments: 'moneyMaker' }, function(err, resultList ) {
        if (!err) {
            healthy = resultList.length >= 1;
        }
        res.status(200).json({ healthy: healthy });
    });
  }
  