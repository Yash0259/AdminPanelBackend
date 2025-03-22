import "dotenv/config";  // Loads environment variables
import { Sequelize } from "sequelize";

// PostgreSQL connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
    }
);

sequelize
    .authenticate()
    .then(() => console.log("✅ PostgreSQL Connected!"))
    .catch((err) => console.error("❌ Connection Failed:", err));

export default sequelize; // Export using ES Modules
