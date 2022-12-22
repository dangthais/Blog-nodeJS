import jwt from 'jsonwebtoken';


export const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, "DangThai", (err, user) => {
            if (err) {
                res.status(400).json({
                    message: "Token is not invalid"
                })
            }
            req.user = user;
            next();
        })
    }
    else {
        res.status(400).json({
            message: "You're not authenticated"
        })
    }
}