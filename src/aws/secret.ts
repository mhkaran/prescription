import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

const client = new SecretsManagerClient({
  region: process.env.AWS_REGION || "ap-south-1",
});

export const getDbSecret = async () => {
  const command = new GetSecretValueCommand({
    SecretId: process.env.AWS_SECRET_NAME,
  });

  const response = await client.send(command);

  if (!response.SecretString) {
    throw new Error("Secret is empty");
  }

  return JSON.parse(response.SecretString);
};