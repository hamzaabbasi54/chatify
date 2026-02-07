import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent accessing cookie from client side - prevent xss attacks :cross site scripting
        sameSite: "strict", // prevent cross site request forgery :csrf
        secure: process.env.NODE_ENV === "development" ? false : true
    })
}