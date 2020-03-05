// This is a JavaScript file

// メイン処理
$(function () {

  var common = new CommonParts();
  var top = new TopParts();

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

  // indexedDB初期化
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

  // 役割画像クリック時
  $(GROBAL.top.element.top_left_img).on("click", function() {
    top.changeRole(GROBAL.top.value.left);
    analytics.logEvent(
      'top_event', {
        action_type: 'left image',
        action_detail: top.leftImg
    });
    //media.play({numberOfLoops: 0});
    sounds.refFromURL("gs://englira-beta.appspot.com/1-1.m4a").getDownloadURL().then((url) => {
      const sound = new Audio(url);
      sound.play();
    });
  });
  $(GROBAL.top.element.top_right_img).on("click", function() {
    top.changeRole(GROBAL.top.value.right);
    // firebase analytics イベント
    analytics.logEvent(
      'screen_view', {
        key: 'test screen',
        app_name: "monaca",
        screen_name: "englira_top"
    });
    analytics.logEvent(
      'top_event', {
        action_type: 'right image',
        action_detail: top.rightImg
    });
  });

  // はじめるクリック時
  $(GROBAL.top.element.init_button).on("click", function() {
    common.emptyParts(GROBAL.top.value.top_transition);
    common.emptyParts(GROBAL.top.value.loading);
    common.changeParts(GROBAL.top.value.role_transition);
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
    top.talkStart();
  });

  // realtime database テスト
  var test = database.ref().child('test');

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
  right_img: Symbol()
};

// クラス
class TopParts {

  constructor () {
    this[top_values.left_img] = GROBAL.top.value.mother;
    this[top_values.right_img] = GROBAL.top.value.boy;
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

  /**
  * 役割画像クリック時
  */
  changeRole (type) {
    if (type == GROBAL.top.value.left) {
      if (this.leftImg == GROBAL.top.value.mother) {
        $(GROBAL.top.element.top_left_img).attr('src', GROBAL.top.img.father_img);
        this.leftImg = GROBAL.top.value.father;
      } else {
        $(GROBAL.top.element.top_left_img).attr('src', GROBAL.top.img.mother_img);
        this.leftImg = GROBAL.top.value.mother;
      }
    } else {
      if (this.rightImg == GROBAL.top.value.boy) {
        $(GROBAL.top.element.top_right_img).attr('src', GROBAL.top.img.girl_img);
        this.rightImg = GROBAL.top.value.girl;
      } else {
        $(GROBAL.top.element.top_right_img).attr('src', GROBAL.top.img.boy_img);
        this.rightImg = GROBAL.top.value.boy;
      }
    }
  }

  /**
  * スタートボタンクリック時
  */
  talkStart() {
    window.location.href = 'talk_top.html?first=' + this.leftImg + '&second=' + this.rightImg;
  }

  /**
  * setTimeOut内処理
  */
  setTimeOutDetail() {
    $(GROBAL.top.element.top_img).css("top", "2%");
    $(GROBAL.top.element.top_img).css("left", "15%");
    $(GROBAL.top.element.top_img).css("width", "70%");
    CommonParts.viewDefaultParts();
  }

}