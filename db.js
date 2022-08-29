import * as SQLite from "expo-sqlite";
import * as expo_fs from "expo-file-system";

// ===========================================================
const db = SQLite.openDatabase(
  { name: "traverse-data.db", location: "default" },
  () => {},
  (error) => {
    console.log(error);
  }
);
function init_db() {
  //   console.log("Starting database file...");
  db.transaction((trans) => {
    trans.executeSql(
      `
    CREATE TABLE IF NOT EXISTS descriptions (
        description_id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL, 
        data TEXT NOT NULL,
    );

    CREATE TABLE IF NOT EXISTS traverse (  
        id INT NOT NULL PRIMARY KEY,
        station TEXT NOT NULL, 
        description_id INT NOT NULL,
        FOREIGN KEY (description_id)
       REFERENCES descriptions (group_id) 
    );
    `,
      [],
      (sqlTransaction, sqlResult) => {
        console.log("table created successfully");
      },
      (error) => {
        console.log(error);
      }
    );
  });
  //   console.log("Finishing up database init...");
}
function addData() {
  db.exec(
    `INSERT INTO descriptions VALUES(?)`,
    ["rr", "this a first description"],
    (sqltxn, res) => {
      console.log("done");
    }
  );
}

export { init_db, addData };
