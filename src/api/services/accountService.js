import { Account } from '../../database/sequlizeDatabase';

/**
 * Service function to get user details by id and username
 * @param {string} id - User ID
 * @param {string} username - Username
 * @returns {Promise<object|null>} - User details or null if not found
 */
exports.getDetails = async (id, username) => {
    try {
        // Use findByPk directly without unnecessary object wrapping
        const account = await Account.(id);

        // Return null if user is not found or the usernames don't match
        if (!user || user.username !== username) {
            return null;
        }

        return user;

    } catch (error) {
        // If there is an error, handle it and log it
        console.error('Error in getDetails:', error);
        throw error; // Re-throw the error to be caught by the calling function
    }
};
