const postsData = require('../dummyData/dummyPosts.json');

// Get all posts
module.exports.findAll = async (req, res) => {
    try {
        const posts = postsData.posts;
        const user = req.user;

        if(user.isAdmin)
            return res.status(200).json(posts);
        else
            return res.status(200).json(find(user.id));

    } catch (err) {
        return res.status(500).json(err);
    }
}

// Recherche d'un post en fonction de l'ID de son auteur :
find = (authorId) => {
    try {
        const posts = postsData.posts;
        const userPosts = posts.filter(post => post.author_id === authorId);
        return userPosts;

    } catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
}