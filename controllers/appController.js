const {Router} = require('express');
const router = Router();


exports.mainPage = async (req, res, next) => {
    res.json([{
        id: 1,
        username: "samsepi0l"
    }, {
        id: 2,
        username: "D0loresH4ze"
    }]);
};

