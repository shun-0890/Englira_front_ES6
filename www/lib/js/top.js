// This is a JavaScript file

// メイン処理
$(function () {

  let common = new CommonParts();
  let top = new TopParts();

  //document.addEventListener("deviceready", top.onDeviceReady, false);
  /*
  function onDeviceReady() {
    console.log("ready");
    // 音声再生動作確認（with firebase）
    var soundItem = sound.refFromURL("gs://englira-beta.appspot.com/D0002110201_00000_A_001.m4a");
    media = new Media(soundItem , onSuccess, onError);
    media.play();
  }
  */

  // アプリ初期起動時にindexedDB初期化
  //common.deleteIndexedDB();
  common.initIndexedDB();

  // firebase analytics ユーザープロパティ
  analytics.setUserProperties(
    {
      user_name : "test_tarou",
      user_session : document.cookie
    }
  )

  //console.log("cookie" , document.cookie);
  setTimeout(top.setTimeOutDetail, 1000);

  setTimeout(function () {
    // 現在の役割情報をセット
    common.dbRequest = indexedDB.open(GROBAL.common.value.db_name);
    // オブジェクトへの接続が成功した場合
    common.dbRequest.onsuccess = function (e) {
      let db     = e.target.result;
      let tran   = db.transaction("t_current_pair", "readwrite");
      let store  = tran.objectStore("t_current_pair");
      tran.oncomplete = function () {
        db.close();
      }
      let get_req = store.getAll();
      get_req.onsuccess = function (e) {
        let dataRef = database.ref('/test/' + e.target.result[0].account);
        dataRef.once("value")
        .then(function(snapshot) {
          top.currentId = snapshot.child("id").val();
          top.leftImg = snapshot.child("parent").val();
          top.rightImg = snapshot.child("child").val();
        });
      };
    }
  }, 1000);

  // 役割画像クリック時
  $(GROBAL.top.element.top_left_img).on("click", function() {
    top.changeRole(GROBAL.top.value.left, $(this).attr('role'));
    analytics.logEvent(
      'top_event', {
        action_type: 'left image',
        action_detail: top.leftImg
    });
    //media.play({numberOfLoops: 0});
    // 音再生サンプル
    /*
    sounds.refFromURL("gs://englira-beta.appspot.com/q_1.mp4").getDownloadURL().then((url) => {
      const sound = new Audio(url);
      sound.play();
    });
    */
  });
  $(GROBAL.top.element.top_right_img).on("click", function() {
    top.changeRole(GROBAL.top.value.right, $(this).attr('role'));
    // firebase analytics イベント
    /*
    analytics.logEvent(
      'screen_view', {
        key: 'test screen',
        app_name: "monaca",
        screen_name: "englira_top"
    });
    */
    analytics.logEvent(
      'top_event', {
        action_type: 'right image',
        action_detail: top.rightImg
    });
  });

  // はじめるクリック時
  $(GROBAL.top.element.init_button).on("click", function() {
    // GA
    analytics.logEvent(
      'top', {
        account: top.currentId,
        parent: top.leftImg,
        child: top.rightImg
    });
    top.talkStart(top.leftImg,top.rightImg);
  });
  
  // 設定ボタン押下時
  $(GROBAL.top.element.set_role).on("click", function() {
    common.emptyParts(GROBAL.top.value.top_transition);
    common.emptyParts(GROBAL.top.value.loading);
    common.changeParts(GROBAL.top.value.role_transition);

    top.setDefaultRole(top.leftImg, top.rightImg);
    // firebase analytics イベント
    analytics.logEvent(
      'page_view', {
        key: 'talk start',
        page_location: 'first',
        page_path: 'top',
        page_title: 'talk_start'
    });
  });

  // スタートボタンクリック時
  $(GROBAL.top.element.start_button).on("click", function() {
    // GA
    analytics.logEvent(
      'top', {
        account: top.currentId,
        parent: top.leftImg,
        child: top.rightImg
    });
    common.setSelectedRole(top.currentId, top.leftImg, top.rightImg);
    top.talkStart(top.leftImg, top.rightImg);
  });

  // イングリラについてボタン押下時
  $(GROBAL.top.element.about_englira_button).on("click", function() {
    // GA
    analytics.logEvent(
      'about', {
        aboutPage : 'view'
    });
    common.emptyParts(GROBAL.top.value.top_transition);
    common.emptyParts(GROBAL.top.value.loading);
    common.changeParts(GROBAL.top.value.about_transition);
    $('.englira_description').mCustomScrollbar({
      mouseWheel: true,
      theme: "dark-thin",
      callbacks: {
        onOverflowY: function() {
          $('.englira_description').css("left", "5%");
          $('.englira_description').css("width", "96%");
          $('.mCSB_scrollTools .mCSB_draggerContainer').css("left", "-10px");
        }
      }
    });
    // トップへボタン押下時
    $(GROBAL.common.element.top_back_button).on("click", function() {
      common.viewTop();
    });
  });

  // 友達に勧めるボタン押下時
  $(GROBAL.top.element.share_englira_button).on("click", function() {
    // GA
    analytics.logEvent(
      'share', {
        aboutPage : 'view'
    });
    common.emptyParts(GROBAL.top.value.top_transition);
    common.emptyParts(GROBAL.top.value.loading);
    common.changeParts(GROBAL.top.value.share_transition);
    // トップへボタン押下時
    $(GROBAL.common.element.top_back_button).on("click", function() {
      common.viewTop();
    });
  });

  // おすすめの本リストボタン押下時
  $(GROBAL.top.element.book_start).on("click", function() {
    // GA
    analytics.logEvent(
      'book', {
        aboutPage : 'view'
    });
    common.emptyParts(GROBAL.top.value.top_transition);
    common.emptyParts(GROBAL.top.value.loading);
    common.changeParts(GROBAL.top.value.book_transition);
    
    $('.englira_description_book').mCustomScrollbar({
      mouseWheel: true,
      theme: "dark-thin",
      callbacks: {
        onOverflowY: function() {
          $('.englira_description_book').css("left", "5%");
          $('.englira_description_book').css("width", "96%");
          $('.mCSB_scrollTools .mCSB_draggerContainer').css("left", "-10px");
        }
      }
    });
    
    // トップへボタン押下時
    $(GROBAL.common.element.top_back_button).on("click", function() {
      common.viewTop();
    });
  });

  // realtime database テスト
  /*
  let test = database.ref().child('test');
  //console.log("realtime database test : " , test);
  var dataRef = database.ref('/test/test1');
  dataRef.once("value")
  .then(function(snapshot) {
    let test_value = snapshot.child("personal").val();
    //console.log("personal : " , test_value);
  });
  */

  /*
  var postData = {
    test1 : "aaa2",
    test2 : "iii2"
  };
  */
  
  // 保存成功パターン start
  /*
  var postData = {
    personal : "aaa",
    test : "iii2"
  };
  database.ref('test/test1').set(postData);
  */
  // 保存成功パターン end

  // デバイスIDの取得（実端末での試験時でないとそもそも発火されない？）
  /*
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    console.log("uuid : " , device.uuid);
  }
  */
/*
  monaca.getDeviceId(function(id) {
    var postData = {
      personal : id,
      test : "iii2"
    };
    database.ref('test/test1').set(postData);
  });
*/

  /*
  var postData = {
    test1 : "aaa",
    test2 : "iii"
  };
  test.push(postData);
  var test2 = firebase.database().ref().child('test');
  console.log("test : " , test2);
  */

  // localstorage テスト
  /*
  localStorage.setItem("test_key", "test_value");
  var test_value = localStorage.getItem("test_key");
  console.log("test : " , test_value);
  */
  /*
  var test_value = localStorage.getItem("test_count");
  if (test_value !== null) {
    localStorage.setItem("test_count" , Number(test_value) + 1);
    var test_value_after = localStorage.getItem("test_count");
    console.log("test_value : " , test_value_after);
  } else {
    localStorage.setItem("test_count", 1);
  }
  */

});

// 変数群
const top_values = {
  left_img: Symbol(),
  right_img: Symbol(),
  current_id: Symbol()
};

// クラス
class TopParts {

  constructor () {
    this[top_values.left_img] = GROBAL.top.value.mother;
    this[top_values.right_img] = GROBAL.top.value.boy;
    this[top_values.current_id] = "";
  }

  set leftImg (value) {
    this[top_values.left_img] = value;
  }

  get leftImg () {
    return this[top_values.left_img];
  }

  set rightImg (value) {
    this[top_values.right_img] = value;
  }

  get rightImg () {
    return this[top_values.right_img];
  }

  set currentId (value) {
    this[top_values.current_id] = value;
  }

  get currentId () {
    return this[top_values.current_id];
  }

  /**
  * 役割画像クリック時
  */
  changeRole (type, role) {
    if (type == GROBAL.top.value.left && this.leftImg !== role) {
      if (this.leftImg == GROBAL.top.value.mother) {
        $(GROBAL.top.element.top_left_mother).attr('src', GROBAL.top.img.mother_2);
        $(GROBAL.top.element.top_left_father).attr('src', GROBAL.top.img.father_1);
        this.leftImg = GROBAL.top.value.father;
      } else {
        $(GROBAL.top.element.top_left_mother).attr('src', GROBAL.top.img.mother_1);
        $(GROBAL.top.element.top_left_father).attr('src', GROBAL.top.img.father_2);
        this.leftImg = GROBAL.top.value.mother;
      }
    } else if (type == GROBAL.top.value.right && this.rightImg !== role) {
      if (this.rightImg == GROBAL.top.value.boy) {
        $(GROBAL.top.element.top_right_boy).attr('src', GROBAL.top.img.boy_2);
        $(GROBAL.top.element.top_right_girl).attr('src', GROBAL.top.img.girl_1);
        this.rightImg = GROBAL.top.value.girl;
      } else {
        $(GROBAL.top.element.top_right_boy).attr('src', GROBAL.top.img.boy_1);
        $(GROBAL.top.element.top_right_girl).attr('src', GROBAL.top.img.girl_2);
        this.rightImg = GROBAL.top.value.boy;
      }
    }
  }

  /**
  * 役割の初期設定
  */
  setDefaultRole (parent, child) {
      if (parent == GROBAL.top.value.mother) {
        $(GROBAL.top.element.top_left_mother).attr('src', GROBAL.top.img.mother_1);
        $(GROBAL.top.element.top_left_father).attr('src', GROBAL.top.img.father_2);
      } else {
        $(GROBAL.top.element.top_left_mother).attr('src', GROBAL.top.img.mother_2);
        $(GROBAL.top.element.top_left_father).attr('src', GROBAL.top.img.father_1);
      }
      if (child == GROBAL.top.value.boy) {
        $(GROBAL.top.element.top_right_boy).attr('src', GROBAL.top.img.boy_1);
        $(GROBAL.top.element.top_right_girl).attr('src', GROBAL.top.img.girl_2);
      } else {
        $(GROBAL.top.element.top_right_boy).attr('src', GROBAL.top.img.boy_2);
        $(GROBAL.top.element.top_right_girl).attr('src', GROBAL.top.img.girl_1);
      }
  }

  /**
  * スタートボタンクリック時
  */
  talkStart(parent, child) {
    window.location.href = 'talk_top.html?first=' + parent + '&second=' + child;
  }

  /**
  * setTimeOut内処理
  */
  setTimeOutDetail() {
    $(GROBAL.top.element.top_img).css("top", "5%");
    $(GROBAL.top.element.top_img).css("left", "15%");
    $(GROBAL.top.element.top_img).css("width", "70%");
    CommonParts.viewDefaultParts();
  }

  /**
  * 現在の役割をセットする
  */
  setCurrentRole (parent, child) {
    this.leftImg = parent;
    this.rightImg = child;
  }

}