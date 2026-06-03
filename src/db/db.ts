import { DataSource } from "typeorm";
import { getDbSecret } from "../aws/secret";

export let AppDataSource: DataSource;

export const initDataSource = async () => {
  if (AppDataSource && AppDataSource.isInitialized) return AppDataSource;

  const secret = await getDbSecret();
  AppDataSource = new DataSource({
    type: "postgres",
    host: secret.host,
    port: secret.port,
    username: secret.username,
    password: secret.password,
    database: secret.dbname,
    entities: ["src/db/entity/*.entity.ts"],
    synchronize: false,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await AppDataSource.initialize();
  return AppDataSource;
};