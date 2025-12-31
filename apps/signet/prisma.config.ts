import { defineConfig } from 'prisma/config';
import { homedir } from 'os';
import { join } from 'path';

const defaultDbPath = join(homedir(), '.signet-config', 'signet.db');

export default defineConfig({
    schema: 'prisma/schema.prisma',
    migrations: {
        path: 'prisma/migrations',
    },
    datasource: {
        url: process.env.DATABASE_URL ?? `file:${defaultDbPath}`,
    },
});
