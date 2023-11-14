// Load environment variables from a .env file
require('dotenv').config();

// Exporting a configuration object
module.exports = {
    // Application mode (e.g., 'development', 'production')
    mode: process.env.MODE,

    // Port on which the server will listen for incoming requests
    port: process.env.SERVER_PORT,

    // Host address for the server
    host: process.env.SERVER_HOST,

    // HTTPS configuration
    https: {
        // Whether HTTPS is enabled or not (true/false)
        enabled: process.env.HTTPS_AVL,

        // Path to the private key file for HTTPS
        key: process.env.HTTPS_KEY,

        // Path to the certificate file for HTTPS
        cert: process.env.HTTPS_CERT,
    }
};
