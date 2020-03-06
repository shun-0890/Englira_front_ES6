"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a JavaScript file
var GROBAL = {
  top: {
    img: {
      mother_1: "img/mother_1.png",
      mother_2: "img/mother_2.png",
      father_1: "img/father_1.png",
      father_2: "img/father_2.png",
      girl_1: "img/girl_1.png",
      girl_2: "img/girl_2.png",
      boy_1: "img/boy_1.png",
      boy_2: "img/boy_2.png"
    },
    element: {
      top_img: ".top_img",
      talk_start_block: ".talk_start_block",
      role_select_block: ".role_select_block",
      top_left_img: ".top_left_img",
      top_left_mother: "#top_left_mother",
      top_left_father: "#top_left_father",
      top_right_img: ".top_right_img",
      top_right_girl: "#top_right_girl",
      top_right_boy: "#top_right_boy",
      init_button: "#init_button",
      start_button: "#talk_start_button"
    },
    value: {
      mother: "mother",
      father: "father",
      boy: "boy",
      girl: "girl",
      left: "left",
      right: "right",
      loading: ".loading_page",
      top_transition: ".top_transition",
      role_transition: ".role_transition"
    }
  },
  main: {
    element: {
      category_table: "#category_table",
      day_button: ".day_button",
      question_select_table: "#question_select_table",
      question_select_button: ".question_select_button",
      answer_start_button: "#answer_start_button",
      answer_select_table: "#answer_select_table",
      answer_select_button: ".answer_select_button",
      select_word_table: "#select_word_table",
      select_word_button: ".select_word_button",
      one_point_start_button: "#one_point_start_button",
      restart_button: "#restart_button",
      question_table: "#question_table",
      answer_table: "#answer_table",
      start_voice: ".listening_en_inner"
    },
    value: {
      transition: ".top_transition",
      role_transition: ".role_transition",
      day_id: "day_id",
      question_id: "question_id",
      answer_type: "answer_type",
      answer_id: "answer_id",
      word_detail_id: "word_detail_id",
      selected_id: "selected_id",
      type: "normal"
    }
  },
  talk_top: {
    element: {
      talk_category_block: ".talk_category_block",
      talk_top_down: "talk_top_down",
      category_table: "#category_table",
      category_table_box: "#category_table_box",
      talk_select_down: "talk_select_down",
      question_select_table: "#question_select_table",
      select_table_box: "#select_table_box"
    },
    value: {
      left_img: "first",
      right_img: "second",
      role_img: "#talk_top_img",
      talk_category_block: ".talk_category_block",
      transition: ".talk_transition"
    },
    view: {
      talk_top_down: "どんな<ruby>英会話<rt>えいかいわ</rt></ruby>をしますか？",
      talk_select_down: "<ruby>会話<rt>かいわ</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んでください"
    }
  },
  question_detail: {
    value: {
      question_select_block: ".question_select_block",
      transition: ".question_transition",
      question_img: "#question_img",
      question_table_box: "#question_table_box",
      question_table: "#question_table"
    },
    view: {
      voice: "<ruby>音声<rt>おんせい</rt></ruby>で<ruby>聴<rt>き</rt></ruby>く"
    }
  },
  answer_select: {
    element: {
      answer_question_text_table: "#answer_question_text_table",
      answer_select_up: "answer_select_up",
      answer_select_down: "answer_select_down",
      answer_select_table: "#answer_select_table",
      select_table_box_ans: "#select_table_box_ans",
      answer_detail_select: "answer_detail_select",
      answer_detail_select_word: "answer_detail_select_word",
      select_word_table: "#select_word_table"
    },
    value: {
      question_detail_block: ".question_detail_block",
      transition_first: ".answer_select_transition",
      question_top_img: "#question_top_img",
      answer_top_img: "#answer_top_img",
      answer_select_block: ".answer_select_block",
      transition_second: ".answer_detail_select_transition",
      answer_select_detail_img: "#answer_select_detail_img"
    },
    view: {
      answer_select_up: "<ruby>返答<rt>へんとう</rt></ruby>をえらんでね！",
      answer_select_down: "には<ruby>好<rt>す</rt></ruby>きな<ruby>言葉<rt>ことば</rt></ruby>をえらべるよ！",
      answer_detail_select: "にはいる<ruby>言葉<rt>ことば</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んでね"
    }
  },
  answer_detail: {
    element: {
      one_point_top: "one_point_top",
      one_point_question_table_box: "#one_point_question_table_box",
      listening_en_inner: ".listening_en_inner"
    },
    value: {
      mode: "normal",
      answer_detail_select_block: ".answer_detail_select_block",
      answer_select_block: ".answer_select_block",
      transition_first: ".answer_detail_transition",
      answer_table: "#answer_table",
      answer_detail_img: "#answer_detail_img",
      answer_detail_block: ".answer_detail_block",
      one_point_block: ".one_point_block",
      transition_second: ".one_point_transition",
      one_point_question_table: "#one_point_question_table",
      one_point_answer_table: "#one_point_answer_table",
      table_type: "one_point"
    },
    view: {
      voice: "<ruby>音声<rt>おんせい</rt></ruby>で<ruby>聴<rt>き</rt></ruby>く",
      one_point: "<ruby>One Point<rt>ワンポイント</rt></ruby>",
      example_text: "〇〇〇〇"
    }
  },
  common: {
    element: {
      back_button: ".back_button"
    },
    value: {
      storage_base: "gs://englira-beta.appspot.com/",
      file_type: ".mp4",
      db_name: "sampleDB2"
    }
  }
};
var common_parts = {
  this_left_img: Symbol(),
  this_right_img: Symbol(),
  this_question_id: Symbol(),
  this_answer_id: Symbol(),
  this_word_id: Symbol(),
  this_word_detail_id: Symbol(),
  this_answer_type: Symbol(),
  this_current_number: Symbol(),
  // test funami 20200305
  this_category_list: Symbol(),
  this_question_list: Symbol(),
  this_answer_list: Symbol(),
  this_word_list: Symbol(),
  this_selected_question: Symbol(),
  this_question_records: Symbol(),
  this_answer_records: Symbol(),
  this_db_request: Symbol(),
  this_current_day: Symbol()
};

var CommonParts =
/*#__PURE__*/
function () {
  function CommonParts() {
    _classCallCheck(this, CommonParts);

    this[common_parts.this_left_img] = "";
    this[common_parts.this_right_img] = "";
    this[common_parts.this_question_id] = "";
    this[common_parts.this_answer_id] = "";
    this[common_parts.this_word_id] = "";
    this[common_parts.this_answer_type] = "";
    this[common_parts.this_current_number] = 0;
    this[common_parts.this_category_list] = [];
    this[common_parts.this_question_list] = [];
    this[common_parts.this_answer_list] = [];
    this[common_parts.this_word_list] = [];
    this[common_parts.this_selected_question] = [];
    this[common_parts.this_question_records] = "";
    this[common_parts.this_answer_records] = "";
    this[common_parts.this_db_request] = "";
    this[common_parts.this_current_day] = 1;
  } // setter・getter


  _createClass(CommonParts, [{
    key: "changeParts",

    /**
    * シングルページでのパーツ表示
    */
    value: function changeParts(type) {
      if (this[common_parts.leftImg] !== "") {
        $(type).show();
      } else {
        setTimeout(function () {
          if (this[common_parts.leftImg] !== "") {
            $(type).show();
          } else {
            this.viewDefaultParts();
          }
        }, 100);
        this.changeParts(type);
      }
    }
    /**
    * 空にする処理
    */

  }, {
    key: "emptyParts",
    value: function emptyParts(type) {
      $(type).empty();
    }
    /**
    * 隠す処理
    */

  }, {
    key: "hideParts",
    value: function hideParts(transition) {
      $(transition).hide();
    }
    /**
    * 詳細ブロック作成
    */

  }, {
    key: "createDetailBlock",
    value: function createDetailBlock(selected_id, table_name, text_ja, text_en, text_en_phonetic, detail_text) {
      var table_type = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'normal';

      if (table_type == 'normal') {
        $(table_name).append('<tr>' + '<td class="normal_radius">' + '<div class="text_block_ja"><p>' + text_ja + '</p></div>' + '<div class="text_block_en"><p>' + text_en + '</p></div><div class="text_block_en_phonetic"><p>[ ' + text_en_phonetic + ' ]</p></div>' + '<div class="listening_en_inner" selected_id="' + selected_id + '">' + '<div class="sound_wrapper"><img class="sound_img" src="img/sound.png"></div>' + '<p>' + detail_text + '</p>' + '</div></td>' + '</tr>');
      } else if (table_type == 'one_point') {
        $(table_name).append('<tr>' + '<td class="normal_radius">' + '<div class="text_block_ja"><p>' + text_ja + '</p></div>' + '<div class="text_block_en"><p>' + text_en + '</p></div><div class="text_block_en_phonetic"><p>[ ' + text_en_phonetic + ' ]</p></div>' + '<div class="listening_en_inner">' + '<p>' + detail_text + '</p>' + '</div></td>' + '</tr>');
      }
    }
    /**
    * 役割画像セット
    */

  }, {
    key: "setRoleImage",
    value: function setRoleImage(type, number, id) {
      var _value = "";

      switch (type) {
        case "mother":
          _value = "img/mother_" + number + ".png";
          break;

        case "father":
          _value = "img/father_" + number + ".png";
          break;

        case "boy":
          _value = "img/boy_" + number + ".png";
          break;

        case "girl":
          _value = "img/girl_" + number + ".png";
          break;
      }

      $(id).attr('src', _value);
    }
    /**
    * 音声再生
    */

  }, {
    key: "startTargetVoice",
    value: function startTargetVoice(source_type, selected_id) {
      var _file_name = source_type + "_" + selected_id;

      sounds.refFromURL(GROBAL.common.value.storage_base + _file_name + GROBAL.common.value.file_type).getDownloadURL().then(function (url) {
        var sound = new Audio(url);
        sound.play();
      });
    }
    /**
    * indexedDB初期化
    */

  }, {
    key: "initIndexedDB",
    value: function initIndexedDB() {
      this.dbRequest = indexedDB.open(GROBAL.common.value.db_name); // オブジェクトの初期化

      this.dbRequest.onupgradeneeded = function (e) {
        var db = e.target.result;
        var current_day_store = db.createObjectStore("t_current_day", {
          keyPath: 'id'
        });
        var parent_records_store = db.createObjectStore("t_parent_records", {
          keyPath: "id"
        });
        var child_records_store = db.createObjectStore("t_child_records", {
          keyPath: "id"
        });

        current_day_store.transaction.oncomplete = function (e) {
          var default_data = {
            id: 1,
            current_day: 1
          };
          var target_object = db.transaction("t_current_day", "readwrite").objectStore("t_current_day");
          target_object.add(default_data);
        };
      };
    }
    /**
    * indexedDBの中身一旦削除
    */

  }, {
    key: "deleteIndexedDB",
    value: function deleteIndexedDB() {
      var deleteReq = indexedDB.deleteDatabase(GROBAL.common.value.db_name);

      deleteReq.onsuccess = function (event) {
        console.log('db delete success'); // 存在しないDB名を指定してもこっちが実行される
      };

      deleteReq.onerror = function () {
        console.log('db delete error');
      };
    }
  }, {
    key: "leftImg",
    set: function set(value) {
      this[common_parts.this_left_img] = value;
    },
    get: function get() {
      return this[common_parts.this_left_img];
    }
  }, {
    key: "rightImg",
    set: function set(value) {
      this[common_parts.this_right_img] = value;
    },
    get: function get() {
      return this[common_parts.this_right_img];
    }
  }, {
    key: "questionId",
    set: function set(value) {
      this[common_parts.this_question_id] = value;
    },
    get: function get() {
      return this[common_parts.this_question_id];
    }
  }, {
    key: "answerId",
    set: function set(value) {
      this[common_parts.this_answer_id] = value;
    },
    get: function get() {
      return this[common_parts.this_answer_id];
    }
  }, {
    key: "wordId",
    set: function set(value) {
      this[common_parts.this_word_id] = value;
    },
    get: function get() {
      return this[common_parts.this_word_id];
    }
  }, {
    key: "wordDetailId",
    set: function set(value) {
      this[common_parts.this_word_detail_id] = value;
    },
    get: function get() {
      return this[common_parts.this_word_detail_id];
    }
  }, {
    key: "answerType",
    set: function set(value) {
      this[common_parts.this_answer_type] = value;
    },
    get: function get() {
      return this[common_parts.this_answer_type];
    }
  }, {
    key: "currentNumber",
    set: function set(value) {
      this[common_parts.this_current_number] = value;
    },
    get: function get() {
      return this[common_parts.this_current_number];
    }
  }, {
    key: "categoryList",
    set: function set(value) {
      this[common_parts.this_category_list] = value;
    },
    get: function get() {
      return this[common_parts.this_category_list];
    }
  }, {
    key: "questionList",
    set: function set(value) {
      this[common_parts.this_question_list] = value;
    },
    get: function get() {
      return this[common_parts.this_question_list];
    }
  }, {
    key: "answerList",
    set: function set(value) {
      this[common_parts.this_answer_list] = value;
    },
    get: function get() {
      return this[common_parts.this_answer_list];
    }
  }, {
    key: "wordList",
    set: function set(value) {
      this[common_parts.this_word_list] = value;
    },
    get: function get() {
      return this[common_parts.this_word_list];
    }
  }, {
    key: "selectedQuestion",
    set: function set(value) {
      this[common_parts.this_selected_question] = value;
    },
    get: function get() {
      return this[common_parts.this_selected_question];
    }
  }, {
    key: "questionRecords",
    set: function set(value) {
      this[common_parts.this_question_records] = value;
    },
    get: function get() {
      return this[common_parts.this_question_records];
    }
  }, {
    key: "answerRecords",
    set: function set(value) {
      this[common_parts.this_answer_records] = value;
    },
    get: function get() {
      return this[common_parts.this_answer_records];
    }
  }, {
    key: "dbRequest",
    set: function set(value) {
      this[common_parts.this_db_request] = value;
    },
    get: function get() {
      return this[common_parts.this_db_request];
    }
  }, {
    key: "currentDay",
    set: function set(value) {
      this[common_parts.this_current_day] = value;
    },
    get: function get() {
      return this[common_parts.this_current_day];
    }
    /**
    * loading完了後のパーツを表示
    */

  }], [{
    key: "viewDefaultParts",
    value: function viewDefaultParts() {
      setTimeout(function () {
        $(".top_transition").show();
      }, 1500);
    }
  }]);

  return CommonParts;
}();
/**
* ルビ文字列作成
*/


function rubyContent(content, ruby_content, ruby_info) {
  var result = "";
  var current_position = 0;
  var ruby_content_array = ruby_content.split(',');

  if (ruby_content !== "") {
    for (var i = 0; i < ruby_info.length; i++) {
      var ruby_info_array = ruby_info[i].split(',');

      if (current_position !== ruby_info_array[0]) {
        result = result + content.substring(current_position, Number(ruby_info_array[0]));
      }

      result = result + "<ruby>" + content.substring(ruby_info_array[0], Number(ruby_info_array[1]) + 1) + "<rt>" + ruby_content_array[i] + "</rt></ruby>";
      current_position = Number(ruby_info_array[1]) + 1;

      if (current_position == content.length) {
        return result;
      }
    }
  }

  result = result + content.substring(current_position, Number(content.length));
  return result;
}