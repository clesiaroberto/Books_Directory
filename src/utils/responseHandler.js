/**
 * @param {*} req;
 * @param {*} res;
 * @param {*} statusCode;
 * @param {*} message;
 * @param {*} data;
 *  */

export const responseHandler = (req, res, statusCode, data, message) => {

    let Error = false;
    let Message = message;

    switch (statusCode) {
        case 200:
        case 201:
        case 203:
            Message = message || "Your request was Successfully submited!";
            break;

        case 400:
            Error = true;
            Message = message || "Invalid data";
            break;

        case 401:
            Error = true;
            Message = message || "You are not authenticated";

        case 403:
            Error = true;
            Message = message || "You can not access this resource";
            break;

        case 404:
            Error = true;
            Message = message || "Resource was not found";
            break;

        case 409:
            Error = true;
            Message = message || "Regist already exist";
            break;

        default:
            Error = true;
            Message = message || "Something went wrong while processing your request";
            break;

    }

    return res.status(statusCode).json({ statusCode, Error, Message: message, data });

}