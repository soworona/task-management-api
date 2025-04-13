const mongoose = require ('mongoose');

const Schema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String, 
        required: true
    },
    status: { 
        type: String, 
        enum: ['pending', 'in-progress', 'completed'], default: 'pending' 
    },
     createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("task", Schema);