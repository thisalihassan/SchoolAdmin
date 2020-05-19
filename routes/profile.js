const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require('multer')
const path = require('path')
const Profile = require("../models/profile");
const User = require("../models/Users");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
// @route   Get api/profile/get-user-profile
// @desc    Get current user profile
// @access  private
router.get("/get-user-profile", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["fullname", "avatar", "roll"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this User" });
    }
    return res.json(profile);
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});


router.get("/userProfile/:uid", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.uid,
    }).populate("user", ["name", "avatar", "roll"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this User" });
    }
    return res.json(profile);
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

// @route   Post api/profile/update-user-profile
// @desc    Create or update a user profile
// @access  private
router.post("/update-user-profile", [auth], async (req, res) => {
  const errors = validationResult(req);
  console.log(req.user.id)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fname, lname, occupation, mobno, websiteurl, interests, about } = req.body;
  const profileFields = {};
  console.log(req.body)
  profileFields.user = req.user.id;
  if (fname) profileFields.firstName = fname;
  if (lname) profileFields.lastName = lname;
  if (mobno) profileFields.moblieNo = mobno;
  
  if (interests) profileFields.interests = interests;
  if (occupation) profileFields.occupation = occupation;
  if (about) profileFields.about = about;
  if (websiteurl) profileFields.websiteUrl = websiteurl;

  try {
    // let profile = await Profile.findOne({ user: req.user.id });
    // if (profile) {
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        options
      );

      return res.json(profile);
    ;

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});



const storageEngine = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, fn) {
    fn(null, req.user.id + path.extname(file.originalname)); //+'-'+file.fieldname
  }
});
//init
const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 200000 },
  fileFilter: function (req, file, callback) {

    validateFile(file, callback);
  }
}).single('myImage');
var validateFile = function (file, cb) {
  allowedFileTypes = /jpeg|jpg|png|gif/;
  const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedFileTypes.test(file.mimetype);
  if (extension && mimeType) {
    return cb(null, true);
  } else {
    cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
  }
}


// @route   POST api/profile/get-user-avatar
// @desc    Get user profile image
// @access  Private
router.get('/get-user-avatar', auth, async (req, res) => {
  await User.findById(req.user.id)
  .select('avatar')
  .then(usr=>{
    return res.json(usr.avatar)
  })
  .catch(err=>{
    return res.status(500).send("Server Error");
  })

});


// @route   POST api/profile/update-user-avatar
// @desc    Post users profile image
// @access  Private
router.post('/update-user-avatar', auth, async (req, res) => {
  upload(req, res, async (error) => {
    console.log(req.file)
    if (error) {
      let msg = null
      if (error.message)
        msg = error.message
      else
        msg = error
      return res.status(400).json({ errors: [{ msg: msg }] });
    } else {
      if (req.file == undefined) {

        return res.status(404).json({ errors: [{ msg: 'Image does not exist' }] });
      } else {

        /**
         * Create new record in mongoDB
         */
        var fullPath = "uploads/" + req.file.filename;
        // var document = {
        //   path:fullPath
        // };
        try {
            await User.updateOne({ _id: req.user.id }, { avatar: fullPath })

          return res.status(200).json({ msg: "Image uploaded successfully" })
        }
        catch (err) {
          return res.status(404).json({ errors: [{ msg: 'Image could not be uploaded' }] })
        }

      }
    }
  })
})


// @route   GET api/profile/
// @desc    Get All Profile
// @access  Public

// @route   GET api/profile/
// @desc    Get All Profile
// @access  Public
router.get("/", [auth], async (req, res) => {
  try {
    const profiles = await Profile.find({
      user: { $ne: req.user.id },
    }).populate("user", ["name", "avatar", "roll"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/delete", auth, async (req, res) => {
  try {
    const password = req.body.password;
    let user = await User.findOne({ _id: req.body.id });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentails" }] });
      }
      await Profile.findOneAndRemove({ user: req.body.id });
      await User.findOneAndRemove({ _id: req.body.id });
      res.json({ msg: "User deleted" });
    }
    res.json({ msg: "Wrong Password Entered" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
