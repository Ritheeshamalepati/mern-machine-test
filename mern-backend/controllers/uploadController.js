// Sample content for controllers/uploadController.js
const csv = require('csv-parser');
const fs = require('fs');
const Agent = require('../models/Agent');
const ListItem = require('../models/ListItem');

// Upload and distribute CSV
exports.uploadCSV = async (req, res) => {
  if (!req.file) return res.status(400).json({ msg: 'No file uploaded' });

  const items = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (row) => {
      items.push(row); // row = { FirstName: "", Phone: "", Notes: "" }
    })
    .on('end', async () => {
      try {
        const agents = await Agent.find().limit(5);

        if (agents.length === 0) {
          return res.status(400).json({ msg: 'No agents available' });
        }

        const totalItems = items.length;
        const perAgent = Math.floor(totalItems / agents.length);
        let index = 0;

        for (let i = 0; i < agents.length; i++) {
          const chunkSize = perAgent + (i < totalItems % agents.length ? 1 : 0);
          const agentItems = items.slice(index, index + chunkSize);

          const formattedItems = agentItems.map(item => ({
            firstName: item.FirstName,
            phone: item.Phone,
            notes: item.Notes,
            agent: agents[i]._id
          }));

          await ListItem.insertMany(formattedItems);
          index += chunkSize;
        }

        res.json({ msg: 'CSV uploaded and list distributed successfully' });
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Error distributing list items' });
      }
    });
};
