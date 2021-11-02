const router = require('express').Router();
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');
const { Backing } = require('../../models');
  
router.post('/', async (req, res) => {
  try {
    const backingData = await Backing.create(req.body);
    res.status(200).json(backingData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const backingData = await Backing.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!backingData) {
      res.status(404).json({ message: 'No backing found with that id!' });
      return;
    } res.status(200).json(backingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports =router;