const jwt = require("jsonwebtoken");
const usersData = require('../dummyData/dummyUsers.json');

// Login a user
module.exports.login = async (req, res) => {
  try {
    // 👩‍🔧 Recherche de l'utilisateur :
    const user = findOne(req.body.username);

    // ❌ Requête invalide :
    if(!user)
        return res.status(404).json("Ce compte n'existe pas.");
    
    if(user.password !== req.body.password)
        return res.status(401).json("Le mot de passe est incorrect.");

    // 🔑 Génération du token :
    const accessToken = jwt.sign({
        id: user.id, 
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET, 
    {expiresIn: "1d"}
    )

    // ✔️ Requête valide :
    const { password, ...rest } = user;
    res.status(200).json({...rest, accessToken}); // On ne renvoit pas le mot de passe (par sécurité)
  } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}

// Recherche d'un utilisateur dans les dummy data :
findOne = (username) => {
    try {
        const users = usersData.users;
        const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
        return user;

    } catch(err) {
        console.log(err);
        throw 'Unable to search users list.'
    }
}