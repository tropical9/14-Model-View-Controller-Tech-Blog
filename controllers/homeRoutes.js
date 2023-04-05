const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        //get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                { 
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get ({ plain: true }));
        //pass serialized data and session flag into template
        res.render('homepage', {
             posts,
             logged_in: req.session.logged_in
        
         });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        //get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                { 
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get ({ plain: true }));
        //pass serialized data and session flag into template
        res.render('dashboard', {
             posts,
             logged_in: req.session.logged_in
        
         });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/homepage', async (req, res) => {
    try {
        //get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                { 
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get ({ plain: true }));
        //pass serialized data and session flag into template
        res.render('homepage', {
             posts,
             logged_in: req.session.logged_in
        
         });
    } catch (err) {
        res.status(500).json(err);
    }
});


// //use with auth middleware to prevent access to route
// router.get ('/user', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Post }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('user', {
//             ...user,
//             logged_in: true
//         });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//login 
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect ('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;


