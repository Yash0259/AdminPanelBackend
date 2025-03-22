import "dotenv/config"; // Load environment variables
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT || "postgres",
        dialectOptions: {
            ssl: {
                require: process.env.DB_SSL === "true", // Ensures SSL is enabled
                rejectUnauthorized: false, // Prevents SSL verification issues
            },
        },
    }
);

sequelize
    .authenticate()
    .then(() => console.log("✅ PostgreSQL Connected!"))
    .catch((err) => console.error("❌ Connection Failed:", err));

export default sequelize;
