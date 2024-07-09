import { DataSource } from "typeorm";

export const AppDataSourceTest = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3309,
    username: "root",
    password: "root",
    database: "testdb",
    logging: true,
    entities: ["src/core/domain/entities/*.ts"],
    migrations: ["src/infra/data/database/migrations/*.ts"],
    synchronize: true,
    dropSchema: true
})

  