const User = require("../models/User");

exports.updateUser = async (req, res, next) => {
  try {
    var data = req.body;
    data.updatedAt = new Date();
    await User.findById(req.params.id).updateMany(data);
    const user = await User.findById(req.params.id)
    res.status(200).json({ success: true, user: user });
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(new ErrorResponse(404, "Profile not found"));
    res.status(200).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

