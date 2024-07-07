import { DataSource } from "typeorm";

export const AppDataSourceTest = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3309,
    username: "fiap-test",
    password: "password",
    database: "tech-challenge-produtos-test",
    logging: true,
    entities: ["src/core/domain/entities/*.ts"],
    migrations: ["src/infra/data/database/migrations/*.ts"],
    synchronize: true,
    dropSchema: true
})

  