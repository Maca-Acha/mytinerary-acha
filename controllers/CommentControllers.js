const Comment = require("../models/Comment");

const commentControllers = {
    getAllComments:async (req, res) => {
        Comment.find()
        .populate({ path: "user", select: ["name", "email", "photo"]})
        .then(response => {res.json({success: true, response: response})})
        
    },
    getComments: async (req, res) => {
        try {
            let commentList = await Comment.find({
                itinerary: req.params.itineraryId,
            }).populate({ path: "user", select: ["name", "email", "photo"]});
            res.json({ success: true, error: null, response: commentList });
        } catch (e) {
            res.json({ success: false, error: e, response: null });
        }
    },
    postComment: async (req, res) => {
        const { user, itinerary, message } = req.body;
        try {
            await new Comment({ user, itinerary, message }).save();
            res.json({
                success: true,
                response: "Uploaded comment with message: " + message,
                error: null,
            });
        } catch (e) {
            res.json({ success: false, error: e, response: null });
            console.error(e);
        }
    },
    editComment: async (req, res) => {
        try {
            let newComment = await Comment.findOneAndUpdate({ _id: req.body.id }, { message: req.body.message });
            res.json({
                success: true,
                response: newComment,
            });
        } catch (e) {
            res.json({ success: false, error: e });
            console.error(e);
        }
    },
    deleteComment: async (req, res) => {
        try {
            await Comment.findOneAndDelete({ _id: req.body.id });
            res.json({
            success: true,
            response: "Deleted comment with id" + req.body.id,
            });
        } catch (e) {
            res.json({ success: false, error: e });
            console.error(e);
        }
    }
}

module.exports = commentControllers 