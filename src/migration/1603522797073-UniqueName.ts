import { MigrationInterface, QueryRunner } from 'typeorm'

export class UniqueName1603522797073 implements MigrationInterface {
    name = 'UniqueName1603522797073'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_7df7d1e250ea2a416f078a631f" ON "language" ("name") `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_7df7d1e250ea2a416f078a631f"`)
    }
}
