const {S3Client,PutObjectCommand} = require('@aws-sdk/client-s3')
const fs = require('fs')

const s3Client = new S3Client({
    region: 'eu-north-1',
    endpoint: 'https://s3-eu-north-1.amazonaws.com/learn-aws-storage',
    credentials:{
        accessKeyId: 'AKIAZZSMIBOGLUMC5BHI',
        secretAccessKey: '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'
    }

})
const uploadFile = async() => {
    try{
        const fileContent = fs.readFileSync('room3.jpg')
        const object=  new PutObjectCommand({
            Bucket:"learn-aws-storage",
            Key:"room3.jpg",
            Body: fileContent
        });

        await s3Client.send(object)

    }catch(error){
        console.log(error);
    }
}
uploadFile()
