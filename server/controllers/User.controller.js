const User = require("../models/user.model");

//fetch all users
exports.allusers = async (req, res) => {
  const data = await User.find();
  try {
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: data.length,
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

//get user
exports.getUser = async (req, res) => {
  const user = req.user._id;
  await User.findById(user, { password: 0, _id: 0 }, (err, user) => {
    if (err) {
      return res.status(400).json({
        message: "Your request could not be processed. Please try again.",
        error: err,
        status: "fail",
        requestedAt: req.requestTime,
      });
    }
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: data.length,
      data: user,
    });
  });
};

//update user
exports.updateUser = async (req, res) => {
  const user = req.user._id;
  const update = req.body.profile;
  const query = { _id: user };

  User.findOneAndUpdate(
    query,
    update,
    {
      new: true,
    },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "Your request could not be processed. Please try again.",
        });
      }

      res.status(200).json({
        success: true,
        message: "Your profile is successfully updated!",
        user,
      });
    }
  );
};
