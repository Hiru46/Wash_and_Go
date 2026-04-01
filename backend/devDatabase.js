// Development fallback database using JSON file storage
const fs = require("fs");
const path = require("path");

const DB_FILE = path.join(__dirname, "dev-db.json");

// Initialize DB file if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ Register: [], Admin: [] }, null, 2));
}

const getDB = () => {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
};

const saveDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// Mock Mongoose model for development
const createMockModel = (modelName) => {
  return {
    findOne: async (query) => {
      const db = getDB();
      return db[modelName]?.find((item) => {
        for (const key in query) {
          if (item[key] !== query[key]) return false;
        }
        return true;
      }) || null;
    },
    create: async (data) => {
      const db = getDB();
      if (!db[modelName]) db[modelName] = [];
      db[modelName].push(data);
      saveDB(db);
      return data;
    },
    find: async (query = {}) => {
      const db = getDB();
      return db[modelName] || [];
    },
    findByIdAndUpdate: async (id, data) => {
      const db = getDB();
      const idx = db[modelName]?.findIndex((item) => item._id === id) || -1;
      if (idx > -1) {
        db[modelName][idx] = { ...db[modelName][idx], ...data };
        saveDB(db);
        return db[modelName][idx];
      }
      return null;
    },
    findByIdAndDelete: async (id) => {
      const db = getDB();
      const idx = db[modelName]?.findIndex((item) => item._id === id) || -1;
      if (idx > -1) {
        const deleted = db[modelName].splice(idx, 1);
        saveDB(db);
        return deleted[0];
      }
      return null;
    },
  };
};

module.exports = { createMockModel, getDB, saveDB };
