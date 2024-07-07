import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
     host: "localhost",
    // host: "mysql-service",
    port: 3308,
    username: "fiap",
    password: "password",
    database: "tech-challenge-produtos",
    synchronize: true,
    logging: true,
    entities: ["./src/core/domain/entities/*.ts"],
    subscribers: [],
    migrations: ["./src/infra/data/database/migrations/*.ts"]
})