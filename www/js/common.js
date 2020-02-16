"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a JavaScript file
var GROBAL = {
  top: {
    img: {
      father_img: "img/father_1.png",
      mother_img: "img/mother_1.png",
      girl_img: "img/girl_1.png",
      boy_img: "img/boy_1.png"
    },
    element: {
      top_img: ".top_img",
      top_left_img: "#top_left_img",
      top_right_img: "#top_right_img",
      start_button: "#talk_start_button"
    },
    value: {
      mother: "m",
      father: "f",
      boy: "b",
      girl: "g",
      left: "left",
      right: "right"
    }
  },
  main: {
    element: {
      category_table: "#category_table",
      talking_button: ".talking_button",
      question_select_table: "#question_select_table",
      question_select_button: ".question_select_button",
      answer_start_button: "#answer_start_button",
      answer_select_table: "#answer_select_table",
      answer_select_button: ".answer_select_button",
      select_word_table: "#select_word_table",
      select_word_button: ".select_word_button",
      one_point_start_button: "#one_point_start_button",
      restart_button: "#restart_button"
    },
    value: {
      transition: ".top_transition",
      talking_id: "talking_id",
      question_id: "question_id",
      answer_type: "answer_type",
      answer_id: "answer_id",
      word_detail_id: "word_detail_id",
      type: "normal"
    }
  },
  talk_top: {
    element: {
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
      talk_top_down: "どんな英会話をしますか？",
      talk_select_down: "会話を選んでください"
    }
  },
  question_detail: {
    value: {
      question_select_block: ".question_select_block",
      transition: ".question_transition",
      question_img: "#question_img",
      question_table: "#question_table"
    },
    view: {
      voice: "音声で聴く"
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
      answer_select_up: "返答をえらんでね！",
      answer_select_down: "には好きな言葉をえらべるよ！",
      answer_detail_select: "にはいる言葉を選んでね"
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
      transition_second: ".one_point_transition",
      one_point_question_table: "#one_point_question_table",
      one_point_answer_table: "#one_point_answer_table",
      table_type: "one_point"
    },
    view: {
      voice: "音声で聴く",
      one_point: "One Point",
      example_text: "〇〇〇〇"
    }
  }
};
var common_var = {
  this_category_list: [],
  this_question_list: [],
  this_answer_list: [],
  this_word_list: [],
  this_selected_question: []
};
var common_parts = {
  this_left_img: Symbol(),
  this_right_img: Symbol(),
  this_question_id: Symbol(),
  this_answer_id: Symbol(),
  this_word_id: Symbol(),
  this_word_detail_id: Symbol(),
  this_answer_type: Symbol()
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
      if (type == '.question_select_block') {
        $('.talk_top_role').empty();
      }

      $(type).empty();
    }
    /**
    * 詳細ブロック作成
    */

  }, {
    key: "createDetailBlock",
    value: function createDetailBlock(table_name, text_ja, text_en, text_en_phonetic, detail_text) {
      var table_type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'normal';

      if (table_type == 'normal') {
        $(table_name).append('<tr>' + '<td class="normal_radius">' + '<div class="text_block_ja"><p>' + text_ja + '</p></div>' + '<div class="text_block_en"><p>' + text_en + '</p></div><div class="text_block_en_phonetic"><p>[ ' + text_en_phonetic + ' ]</p></div>' + '<div class="listening_en_inner">' + '<p>' + detail_text + '</p>' + '</div></td>' + '</tr>');
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
        case "m":
          _value = "img/mother_" + number + ".png";
          break;

        case "f":
          _value = "img/father_" + number + ".png";
          break;

        case "b":
          _value = "img/boy_" + number + ".png";
          break;

        case "g":
          _value = "img/girl_" + number + ".png";
          break;
      }

      $(id).attr('src', _value);
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