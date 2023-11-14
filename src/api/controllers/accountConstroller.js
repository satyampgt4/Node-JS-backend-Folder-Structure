const Joi = require('joi');
const { internalError, invalidParameter } = require('../../utils/errorHandler');
const userService = require('../services/userService');

/**
 * Controller function to handle user details retrieval
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
exports.create = async (req, res) => {
    try {
        // Define the schema for validating request body
        const schema = Joi.object({
           
        });

        // Validate the request body against the defined schema
        const { error, value } = schema.validate(req.body);

        // If validation fails, handle invalid parameter error
        if (error) {
            return invalidParameter(res, error);
        }

        // Call the userService to get user details based on validated values
        const details = await userService.getDetails(value.username, value.id);

        // Send a successful response with user details
        return res.status(200).json({
            status: true,
            data: details
        });

    } catch (error) {
        // If there is an error, send an internal server error response
        internalError(res);
    }
};
