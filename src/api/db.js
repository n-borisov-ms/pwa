/* eslint-disable */
const DB_NAME = 'tododb';
const STORAGE_NAME = 'todo';
const DB_VERSION = 1;
let DB;
export default {
  async getDb() {
    return new Promise((resolve, reject) => {
      if (DB) {
        return resolve(DB);
      }
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = (e) => {
        console.error('Error opening db', e);
        reject('Error');
      };
      request.onsuccess = (e) => {
        DB = e.target.result;
        resolve(DB);
      };
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        db.createObjectStore(STORAGE_NAME, { autoIncrement: true, keyPath: 'id' });
      };
    });
  },

  async getItems() {
    const db = await this.getDb();
    return new Promise((resolve) => {
      const trans = db.transaction([STORAGE_NAME], 'readonly');
      trans.oncomplete = () => {
        resolve(items);
      };
      const store = trans.objectStore(STORAGE_NAME);
      const items = [];
      store.openCursor().onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          items.push(cursor.value);
          cursor.continue();
        }
      };
    });
  },

  async addItem(data) {
    const item = {...data, id: new Date().getTime()};
    const db = await this.getDb();
    return new Promise((resolve) => {
      const trans = db.transaction([STORAGE_NAME], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };
      const store = trans.objectStore(STORAGE_NAME);
      store.add(item);
    });
  },

  async updateItem(item) {
    const db = await this.getDb();
    return new Promise((resolve) => {
      const trans = db.transaction([STORAGE_NAME], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };
      const store = trans.objectStore(STORAGE_NAME);
      store.put(item);
    });
  },

  async deleteItem(item) {
    const db = await this.getDb();
    return new Promise((resolve) => {
      const trans = db.transaction([STORAGE_NAME], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };
      const store = trans.objectStore(STORAGE_NAME);
      store.delete(item.id);
    });
  },
};
