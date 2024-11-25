import { connect, Connection } from "mongoose";

/**
 * Represents a database object.
 */
class Database {
  /**
   * The database instance.
   */
  private static instance: Database;

  /**
   * The database's connection.
   * @default null.
   */
  private connection: Connection | null = null;

  /**
   * Ensure singleton of this database.
   */
  private constructor() {}

  /**
   * Retrieves the database instance.
   *
   * @returns The database instance.
   */
  public static getInstance(): Database {
    if (!Database.instance) Database.instance = new Database();

    return Database.instance;
  }

  /**
   * Establishes a connection with the database instance
   * .
   * If the connection fails, the process exits with a status code of 1.
   *
   * @returns The database connection.
   * @throws {Error} If the connection to the database fails.
   */
  private async connect(): Promise<Connection | void> {
    if (this.connection) return this.connection;

    try {
      if (!process.env.MONGO_URI) {
        console.log("MONGO_URI missing");
        process.exit(1);
      }

      const mongooseInstance = await connect(process.env.MONGO_URI);
      this.connection = mongooseInstance.connection;
      console.log("Connected to MongoDB");
      return this.connection;
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
      process.exit(1);
    }
  }

  /**
   * Retrieves the database connection.
   *
   * @returns the database connection.
   */
  async getConnection(): Promise<void> {
    await this.connect();
  }
}

// Export a singleton of the Database
export default Database.getInstance();
