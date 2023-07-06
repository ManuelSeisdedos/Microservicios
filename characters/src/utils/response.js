export default (res,statusCode,data) => {

    res.status(statusCode).send({
        error:false,
        data
    })
}