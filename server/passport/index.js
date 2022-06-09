const passport = require("passport");
const local = require("./local");
const User = require("../models/user");
const Workspace = require("../models/workspace");

module.exports = () => {
  passport.serializeUser((user, done) => {
    //serializeUser -> user 객체를 전달받아 세션
    // 서버쪽에 [{ id: 1, cookie: 'clhxy' }]
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({
        where: { id },
        attributes: ["id", "nickname", "email"],
        include: [
          {
            model: Workspace,
            as: "Workspaces",
          },
        ],
      });
      done(null, user); // req.user
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
