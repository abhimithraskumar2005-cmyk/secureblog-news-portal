const postModel = require("../models/post.model");
const {
  createPostSchema,
  updatePostSchema,
  updateStatusSchema
} = require("../validators/post.validator");

async function createPost(req, res, next) {
  try {
    const { error, value } = createPostSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid post data",
        details: error.details.map((detail) => detail.message)
      });
    }

    const post = await postModel.createPost({
      ...value,
      authorId: req.user.id
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      post
    });
  } catch (error) {
    return next(error);
  }
}

async function getPublishedPosts(req, res, next) {
  try {
    const posts = await postModel.findPublishedPosts();
    return res.status(200).json({
      success: true,
      posts
    });
  } catch (error) {
    return next(error);
  }
}

async function getMyPosts(req, res, next) {
  try {
    const posts = await postModel.findPostsByAuthor(req.user.id);
    return res.status(200).json({
      success: true,
      posts
    });
  } catch (error) {
    return next(error);
  }
}

async function getAllPosts(req, res, next) {
  try {
    const posts = await postModel.findAllPosts();
    return res.status(200).json({
      success: true,
      posts
    });
  } catch (error) {
    return next(error);
  }
}

async function updateMyPost(req, res, next) {
  try {
    const { error, value } = updatePostSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid post data",
        details: error.details.map((detail) => detail.message)
      });
    }

    const post = await postModel.updatePostByAuthor(
      req.params.id,
      req.user.id,
      value
    );

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found or not owned by user"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      post
    });
  } catch (error) {
    return next(error);
  }
}

async function deleteMyPost(req, res, next) {
  try {
    const deletedPost = await postModel.deletePostByAuthor(
      req.params.id,
      req.user.id
    );

    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found or not owned by user"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully"
    });
  } catch (error) {
    return next(error);
  }
}

async function updatePostStatus(req, res, next) {
  try {
    const { error, value } = updateStatusSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid status data",
        details: error.details.map((detail) => detail.message)
      });
    }

    const post = await postModel.updatePostStatus(req.params.id, value.status);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post status updated successfully",
      post
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createPost,
  deleteMyPost,
  getAllPosts,
  getMyPosts,
  getPublishedPosts,
  updateMyPost,
  updatePostStatus
};
