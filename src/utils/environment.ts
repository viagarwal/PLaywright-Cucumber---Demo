import { config } from "dotenv";

const envFile = process.env.ENV_FILE || "./env/.env";
const env = config({ path: envFile });

if (env.error) {
    throw new Error(`Unable to load environment file "${envFile}": ${env.error.message}`);
}

export default env;