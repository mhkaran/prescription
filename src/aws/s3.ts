import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

class S3Service {
    private s3Client: S3Client;
    private bucketName: string;

    constructor() {
        this.s3Client = new S3Client({
            region: process.env.AWS_REGION || "ap-south-1" 
        });
        this.bucketName = process.env.AWS_S3_BUCKET_NAME || "MediNote";
    }

    async uploadFile(key: string, body: Buffer | Uint8Array | Blob | string, contentType?: string) {
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: key,
            Body: body,
            ContentType: contentType
        });
        return await this.s3Client.send(command);
    }

    async deleteFile(key: string) {
        const command = new DeleteObjectCommand({
            Bucket: this.bucketName,
            Key: key
        });
        return await this.s3Client.send(command);
    }

    getPublicUrl(key: string) {
        return `https://${this.bucketName}.s3.amazonaws.com/${key}`;
    }
}

export const s3Service = new S3Service();