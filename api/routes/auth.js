const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const { username, email } = req.body;
  const usernameCheck = await User.findOne({ username });
  if (usernameCheck)
    return res.json({ msg: "Username already used", status: false });
  const emailCheck = await User.findOne({ email });
  if (emailCheck) return res.json({ msg: "Email already used", status: false });
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!email.match(mailformat)){
    return res.json({msg : "Invalid Email" , status : false});
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    return res.json({status : true, user});
  } 
  catch (err) {
    return res.json({status : false , msg : err});
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({msg : "Wrong password or username!", check : false});
      return;
    }

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      res.status(401).json({msg : "Wrong password or username!" , check : false});
      return;
    }

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    return res.status(200).json({ ...info, accessToken , check : true});
  } catch (err) {
    return res.status(500).json({msg : err, check : false});
  }
});

module.exports = router;
