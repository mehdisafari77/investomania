const router = require('express').Router();
const { Project } = require('../../models');
// const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create({
      title: req.body.title,
      user_id: req.body.user_id,
      description: req.body.description,
      contributor: req.body.contributor,
      image: req.body.image,
      // timeLeft: req.body.timeLeft
    });
    res.status(200).json(newProject);
    console.log(newProject)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.delete('/:id',  async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;