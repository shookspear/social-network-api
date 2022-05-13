const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/<thoughtId>/<reactions>
router
  .route('/:thoughtId/reactions')
  .post(addReaction);


// /api/thoughts/<pizzaId>/<commentId>/<replyId>
router
  .route('/:thoughtId/:reactionId')
  .delete(deleteReaction);

module.exports = router;

