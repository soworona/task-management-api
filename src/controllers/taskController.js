const taskService = require('../services/taskService');
const {taskSchema, statusSchema}  = require('../utility/request-validator');

exports.getAllTask = async (req, res, next) => {
    try{
        const query = req.query;
        const tasks = await taskService.findAllTask(query);

        res.status(200).json({
            status: 'OK',
            message: "Got all tasks successfully",
            data: tasks
        });
    }catch(err) {
        return next(err);
    }
};

exports.getTask = async (req, res, next) => {
    try{
        const taskId= req.params.id;
        const task = await taskService.findTask(taskId);

        if(!task) {
            const err = new Error('Task not found');
            err.status = 400;
            return next(err);
        }

        res.status(200).json({
            status: 'OK',
            message: "Got task by id successfully",
            data: task
        });
    }catch (err) {
        if (err.kind === 'ObjectId') err.status = 400;
         next(err);
    }
};

exports.createTask = async (req, res, next) => {
    try{
        const { error, value } = taskSchema.validate(req.body);
        if(error){
            const err = new Error(error.details[0].message)
            err.status = 400;
            return next(err);
        }

        const newTask = await taskService.createTask(value);

        res.status(200).json({
            status: 'OK',
            message: "New task created successfully",
            data: newTask
        });
    }catch (err) {
        next(err);
    }
}; 

exports.updateTask = async (req, res, next) => {
    try{
        const taskId = req.params.id;

        const { error, value } = taskSchema.validate(req.body);
        if(error){
            const err = new Error(error.details[0].message)
            err.status = 400;
            return next(err);
        }
        
        const updatedTask = await taskService.updateTask(taskId, value);

        res.status(200).json({
            status: 'OK',
            message: 'Task updated successfully',
            data: updatedTask
        })
    }catch(err) {
        next(err);
    }      
};

exports.deleteTask = async (req, res, next) => {
    try{
        const taskId = req.params.id;
        const deletedTask = await taskService.deleteTask(taskId);

        res.status(200).json({
            status: 'OK',
            message: 'Task deleted successfully',
            data: deletedTask
        })
    }catch(err) {
        if (err.kind === 'ObjectId') err.status = 400;
        next(err);
    }
};

exports.updateTaskStatus = async (req, res, next) => {
    try{
        const taskId = req.params.id;

        const { error, value } = statusSchema.validate(req.body);
        if(error){
            const err = new Error(error.details[0].message)
            err.status = 400;
            return next(err);
        }

        const updatedStatus = await taskService.updateTaskStatus(taskId, value.status);

        if(!updatedStatus){
            const err = new Error('Task not found');
            err.status = 400;
            return next(err);
        }

        res.status(200).json({
            status: 'OK',
            message: 'Task status updated successfully',
            data: updatedStatus
        })
    }catch (error) {
        console.log(error);
    }
}

