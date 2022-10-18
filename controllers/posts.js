const postsData = require('../dummyData/dummyPosts.json');

// * GET ALL POSTS *
module.exports.findAll = async (req, res) => {
    try {
        const posts = postsData.posts;
        if(req.user.isAdmin)
            return res.status(200).json(posts);
        else
            return res.status(401).json("You are not admin.");
    } catch (err) {
        return res.status(500).json(err);
    }
}