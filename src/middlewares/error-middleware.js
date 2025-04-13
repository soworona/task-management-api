const errorMiddleware = (err, req, res, next) => {
    console.log("Error middleware triggered: ", err);

    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
       status,
       message
    });
};

module.exports = errorMiddleware;