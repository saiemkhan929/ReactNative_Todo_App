import SQLiteDatabase from 'react-native-sqlite-storage'

const db = SQLiteDatabase.openDatabase(
  {
    'name' : 'MainDB',
    'location' : 'default'
  },
  () => {console.log('success connection')},
  ()=>{console.log('error connection')}
)

db.transaction((tx) =>{
  tx.executeSql(`CREATE TABLE IF NOT EXISTS todo (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(45) NOT NULL,
    content VARCHAR(45) NOT NULL)`, [], ()=>{}, (err)=>{console.log(err)});
});

export const setData = (title, content) => {
    db.transaction((tx) =>{
        tx.executeSql(`INSERT INTO todo (title, content) VALUES (?, ?)`, [title, content]);
    });
}

export const updateData = (title, content, id) => {
  db.transaction((tx) =>{
      tx.executeSql(`UPDATE todo SET title=?, content=? WHERE id=?`, [title, content, id]);
  });
}

export const removeData = (id) => {
  db.transaction((tx) =>{
      tx.executeSql(`DELETE FROM todo WHERE id=?`, [id]);
  });
} 

export const getData = (callback) => {
  
    db.transaction((tx) =>{
       tx.executeSql(`SELECT * FROM todo`, [], (tx, results)=>{
        callback(results.rows.raw());
       },
       (err)=>{
        console.log(err)
       }
       );
       
    });
} 