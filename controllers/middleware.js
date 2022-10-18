const jwt = require("jsonwebtoken");

verify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // ❌ No 'Authorization' header :
    if(!authHeader)
        return res.status(401).json("Vous n'êtes pas authentifié(e).");

    const token = authHeader.split(' ')[1];     // authHeader.split(' ')[0] == 'Bearer'

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if(err)
            return res.status(403).json("Le token d'accès est invalide. Le format suivant doit être respecté : Bearer <access-token>.");
        
        req.user = payload;
        next();
    })
}

module.exports = { verify };