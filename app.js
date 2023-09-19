const {S3Client,PutObjectCommand} = require('@aws-sdk/client-s3')

const s3Client = new S3Client({
    region: 'eu-north=1',
    endpoint: 'https://s3-eu-north-1/learn-s3-storage',
    credentials:{
        accessKeyId: 'AKIAZZSMIBOGLUMC5BHI',
        secretAccessKey: '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'
    }

})