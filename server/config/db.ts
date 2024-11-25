import { connect, Connection } from "mongoose";

class Database {
  private static instance: Database;
  private connection: Connection | null = null;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) Database.instance = new Database();

    return Database.instance;
  }

  private async _connect(): Promise<Connection | void> {
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

  async getConnection(): Promise<void> {
    await this._connect();
  }
}

// Export a singleton of the Database
export default Database.getInstance();
