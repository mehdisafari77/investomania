const router = require('express').Router();
const sequelize = require('../config/connection')
const withAuth = require('../utils/auth');
const { User, Post, Comment } = require('../models');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {user_id: req.session.user_id}
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { 
        posts, 
        logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;