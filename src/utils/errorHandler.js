// Define a generic error handler function
const errorHandler = (res, statusCode, errorMessage, details) => {
    console.log(details); 
    return res.status(statusCode).json({
        status: false,
        error: {
            message: errorMessage,
        }
    });
}

// Define a function to handle internal server errors
exports.internalError = (res, error) => {
    return errorHandler(res, 500, "Something Went Wrong", error);
}

// Define a function to handle invalid parameters
exports.invalidParameter = (res, error) => {
    const errorMessage = error.details[0].message || "Invalid Parameter";
    return errorHandler(res, 400, errorMessage, error);
}

// Define a function to handle OTP (One Time Password) mismatch errors
exports.otpMissMatch = (res) => {
    return errorHandler(res, 400, "Invalid Otp");
}

// Define a function to handle missing parameters
exports.noParameter = (res) => {
    return errorHandler(res, 400, "No Parameter");
}
