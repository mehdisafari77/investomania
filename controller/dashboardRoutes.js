const router = require('express').Router();
const sequelize = require('../config/connection')
const withAuth = require('../utils/auth');
const { User, Project, Backing } = require('../models');

router.get('/', withAuth, async (req, res) => {
    try {
        const projectData = await Project.findAll({
            where: {user_id: req.session.user_id}
        });
        const projects = projectData.map((project) => project.get({ plain: true }));
        res.render('dashboard', { 
        projects, 
        logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;