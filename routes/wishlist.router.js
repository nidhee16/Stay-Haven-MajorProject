const express = require("express");

const verifyUser=require("../middleware/verify.user");
const { createWishListHandler, deleteWishlistHandler, getWishlistHandler } = require("../controller/wishlistController");

const router = express.Router();

router.route("/")
    .post(verifyUser,createWishListHandler)

router.route("/:id")
.delete(verifyUser,deleteWishlistHandler)

router.route("/")
.get( verifyUser,getWishlistHandler)

module.exports = router;