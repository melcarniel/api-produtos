import { MigrationInterface, QueryRunner } from "typeorm";

export class Database1706034116223 implements MigrationInterface {
    name = 'Database1706034116223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`produtos\` (\`id\` varchar(36) NOT NULL, \`nome\` varchar(255) NOT NULL, \`descricao\` varchar(255) NOT NULL, \`preco\` int NOT NULL, \`categoria\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
       }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`produtos\``);
    }

}
