import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import * as schema from './shared/schema';

neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL!;

export const pool = new Pool({ connectionString });
export const db = drizzle(pool, { schema });
