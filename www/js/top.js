"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a JavaScript file
// メイン処理
$(function () {
  var common = new CommonParts();
  var top = new TopParts(); //document.addEventListener("deviceready", top.onDeviceReady, false);

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

  common.initIndexedDB(); // firebase analytics ユーザープロパティ

  analytics.setUserProperties({
    user_name: "test_tarou",
    user_session: document.cookie
  }); //console.log("cookie" , document.cookie);

  setTimeout(top.setTimeOutDetail, 1000); // 役割画像クリック時

  $(GROBAL.top.element.top_left_img).on("click", function () {
    top.changeRole(GROBAL.top.value.left, $(this).attr('role'));
    analytics.logEvent('top_event', {
      action_type: 'left image',
      action_detail: top.leftImg
    }); //media.play({numberOfLoops: 0});

    sounds.refFromURL("gs://englira-beta.appspot.com/1-1.m4a").getDownloadURL().then(function (url) {
      var sound = new Audio(url);
      sound.play();
    });
  });
  $(GROBAL.top.element.top_right_img).on("click", function () {
    top.changeRole(GROBAL.top.value.right, $(this).attr('role')); // firebase analytics イベント

    analytics.logEvent('screen_view', {
      key: 'test screen',
      app_name: "monaca",
      screen_name: "englira_top"
    });
    analytics.logEvent('top_event', {
      action_type: 'right image',
      action_detail: top.rightImg
    });
  }); // はじめるクリック時

  $(GROBAL.top.element.init_button).on("click", function () {
    common.emptyParts(GROBAL.top.value.top_transition);
    common.emptyParts(GROBAL.top.value.loading);
    common.changeParts(GROBAL.top.value.role_transition); // firebase analytics イベント

    analytics.logEvent('page_view', {
      key: 'talk start',
      page_location: 'first',
      page_path: 'top',
      page_title: 'talk_start'
    });
  }); // スタートボタンクリック時

  $(GROBAL.top.element.start_button).on("click", function () {
    top.talkStart();
  }); // realtime database テスト

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
}); // 変数群

var top_values = {
  left_img: Symbol(),
  right_img: Symbol()
}; // クラス

var TopParts =
/*#__PURE__*/
function () {
  function TopParts() {
    _classCallCheck(this, TopParts);

    this[top_values.left_img] = GROBAL.top.value.mother;
    this[top_values.right_img] = GROBAL.top.value.boy;
  }

  _createClass(TopParts, [{
    key: "changeRole",

    /**
    * 役割画像クリック時
    */
    value: function changeRole(type, role) {
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
    * スタートボタンクリック時
    */

  }, {
    key: "talkStart",
    value: function talkStart() {
      window.location.href = 'talk_top.html?first=' + this.leftImg + '&second=' + this.rightImg;
    }
    /**
    * setTimeOut内処理
    */

  }, {
    key: "setTimeOutDetail",
    value: function setTimeOutDetail() {
      $(GROBAL.top.element.top_img).css("top", "2%");
      $(GROBAL.top.element.top_img).css("left", "15%");
      $(GROBAL.top.element.top_img).css("width", "70%");
      CommonParts.viewDefaultParts();
    }
  }, {
    key: "leftImg",
    set: function set(value) {
      this[top_values.left_img] = value;
    },
    get: function get() {
      return this[top_values.left_img];
    }
  }, {
    key: "rightImg",
    set: function set(value) {
      this[top_values.right_img] = value;
    },
    get: function get() {
      return this[top_values.right_img];
    }
  }]);

  return TopParts;
}();