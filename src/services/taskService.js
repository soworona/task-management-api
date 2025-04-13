const Task = require('../models/task');

exports.findAllTask = (query) => {

   const { page = 1, limit = 5, status , createdAt} = query;
   const offset = (page - 1) * limit;

   const filter = {};

   if(status) {
    filter.status = status;
    }

    if(createdAt) {
      const startOfDay = new Date(createdAt);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(createdAt);
      endOfDay.setHours(23, 59, 59, 999);

      filter.createdAt = { $gte: startOfDay, $lte: endOfDay };
    }


   return Task.find(filter)
   .sort({ createdAt: 1 }) 
   .skip(offset)
   .limit(parseInt(limit));
};

exports.findTask = (id) => {
    return Task.findById(id);
};

exports.createTask = (task) => {
    return Task.create(task);
};

exports.updateTask = (id, task) => {
    return Task.findByIdAndUpdate(id, task, {new: true});
};

exports.deleteTask = (id) => {
    return Task.findByIdAndDelete(id);
};

exports.updateTaskStatus = (id, status) => {    
     return Task.findByIdAndUpdate(id, { status }, {new: true});
};
