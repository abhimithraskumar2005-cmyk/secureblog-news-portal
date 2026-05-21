const express = require("express");
const postController = require("../controllers/post.controller");
const {
  adminOnly,
  authenticate
} = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/public", postController.getPublishedPosts);
router.post("/", authenticate, postController.createPost);
router.get("/mine", authenticate, postController.getMyPosts);
router.patch("/:id", authenticate, postController.updateMyPost);
router.delete("/:id", authenticate, postController.deleteMyPost);
router.get("/admin/all", authenticate, adminOnly, postController.getAllPosts);
router.patch(
  "/admin/:id/status",
  authenticate,
  adminOnly,
  postController.updatePostStatus
);

module.exports = router;
