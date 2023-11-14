// Load environment variables from a .env file
require('dotenv').config();

// Export an object with configuration parameters for AWS S3 bucket
module.exports = {
    // AWS S3 credentials
    s3: {
        // AWS S3 access key ID
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        // AWS S3 secret access key
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
        // The AWS region where the S3 bucket is located
        region: process.env.AWS_S3_REGION,
    },

    // Configuration options for uploading files to the S3 bucket
    upload: {
        // The name of the S3 bucket to upload files to
        bucket: process.env.AWS_S3_BUCKET_NAME,
        // The access control list for the uploaded files
        acl: process.env.AWS_S3_ACL,
        // The storage class for the uploaded files
        storageClass: process.env.AWS_S3_STORAGE_CLASS,
    }
};

