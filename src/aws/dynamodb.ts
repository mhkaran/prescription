import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, GetCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

class DynamoDBService {
    private docClient: DynamoDBDocumentClient;

    constructor() {
        const client = new DynamoDBClient({
            region: process.env.AWS_REGION || "ap-south-1",
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ""
            }
        });
        this.docClient = DynamoDBDocumentClient.from(client);
    }

    async create(tableName: string, item: Record<string, any>) {
        const command = new PutCommand({
            TableName: tableName,
            Item: item
        });
        return await this.docClient.send(command);
    }

    async get(tableName: string, key: Record<string, any>) {
        const command = new GetCommand({
            TableName: tableName,
            Key: key
        });
        return await this.docClient.send(command);
    }
    
    async query(tableName: string, keyConditionExpression: string, expressionAttributeValues: Record<string, any>) {
        const command = new QueryCommand({
            TableName: tableName,
            KeyConditionExpression: keyConditionExpression,
            ExpressionAttributeValues: expressionAttributeValues
        });
        return await this.docClient.send(command);
    }

}

export const dynamoDBService = new DynamoDBService();