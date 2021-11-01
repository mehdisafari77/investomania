const { Backing } = require('../models');

const backingData = [
    {
        "backing": "1000000",
        "project_id": "1"
      },
      {
        "backing": "750000",
        "project_id": "2"
      },
      {
        "backing": "500000",
        "project_id": "3"
      }
];

const seedBackings = () => Backing.bulkCreate(backingData);

module.exports = seedBackings;