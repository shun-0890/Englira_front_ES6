// This is a JavaScript file

class DbAccess {

  // コンストラクタ（接続と初期化）
  constructor (db_name) {
    this.db_name = db_name;
    this.db_request = indexedDB.open(db_name);
    this.db_request.onupgradeneeded = function (e) {
      let db = e.target.result;
      let currentStore = db.createObjectStore("t_current_day", {
        keyPath : 'id'
      });
      currentStore.transaction.oncomplete = function (e) {
        let targetObject = db.transaction("t_current_day", "readwrite").objectStore(object_name);
        targetObject.add({
          id : 1,
          current_day : 1
        });
      }
      let parentObject = db.createObjectStore("t_parent_records", {
        keyPath : 'id'
      });
      let childObject = db.createObjectStore("t_child_records", {
        keyPath : 'id'
      });
    }
  }

  // 情報取得処理
  getCurrentInfo () {
    this.db_request = indexedDB.open(this.db_name);

    // オブジェクトへの接続が成功している場合
    console.log("object_name : " , "t_current_day");
    console.log("db_request : " , this.db_request);
    this.db_request.onsuccess = function (e) {
      var db     = e.target.result;
      var tran   = db.transaction("t_current_day", "readwrite");
      var store  = tran.objectStore("t_current_day");
      tran.oncomplete = function () {
        db.close();
      }
      let get_req = store.getAll();
      get_req.onsuccess = function (e) {
        console.log("here 3 : " , e.target.result);
        common_var.this_current_day = Number(result[0].current_day);
      };
      get_req.onerror = function (e) {
        console.log("here 2");
        return false;
      }
    }
    // オブジェクトへの接続が失敗している場合
    this.db_requestonerror = function (e) {
      console.log("here 1");
      return false;
    }
  }

  // 情報追加処理

  // 情報変更処理

  // 情報削除処理

}