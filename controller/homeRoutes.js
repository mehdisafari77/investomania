const router = require('express').Router();
const { Project, User, } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const projects = projectData.map((project) => project.get({ plain: true }));res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/projects/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/projects', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [Project],
    });
    const user = userData.get({ plain: true });
    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.put('/projects/:id', withAuth, async (req, res) => {
  console.log("hello world")
  try {
    const clicks = await Project.findByPk(req.params.id)
    console.log(clicks)
    const counter = clicks._previousDataValues.backing
    const backing = await clicks.increment(

    {
      backing: +1
     
    },
    {
      where: {
        id: req.params.id,
      },
    });
    console.log(backing.backing)
    res.status(200).json(backing);
    
  } catch (err) {
      res.status(500).json(err);
    };
});




module.exports = router;
