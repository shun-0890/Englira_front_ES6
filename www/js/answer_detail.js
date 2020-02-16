"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a JavaScript file
var AnswerDetail =
/*#__PURE__*/
function () {
  // コンストラクタ
  function AnswerDetail(common) {
    _classCallCheck(this, AnswerDetail);

    this.common = common;
  }
  /**
  * 質問内容選択時
  */


  _createClass(AnswerDetail, [{
    key: "toViewAnswerDetail",
    value: function toViewAnswerDetail(type) {
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : GROBAL.answer_detail.value.mode;

      if (mode == GROBAL.answer_detail.value.mode) {
        // 空にする処理
        this.common.emptyParts(GROBAL.answer_detail.value.answer_detail_select_block);
        this.common.wordDetailId = type;
      } else {
        // 空にする処理
        this.common.emptyParts(GROBAL.answer_detail.value.answer_select_block);
        this.common.answerId = type;
        this.common.wordDetailId = mode;
      } // 回答詳細文言セット


      this.setAnswerDetailTable(mode); // 画像系セット

      this.setForAnswerDetail(); // 表示パーツ変更

      this.common.changeParts(GROBAL.answer_detail.value.transition_first);
    }
    /**
    * 回答詳細文言セット
    */

  }, {
    key: "setAnswerDetailTable",
    value: function setAnswerDetailTable(mode) {
      var local_word_detail_id = this.common.wordDetailId;

      if (mode == GROBAL.answer_detail.value.mode) {
        var target_word = common_var.this_word_list.filter(function (item, index) {
          if (item.word_detail_id == local_word_detail_id) return true;
        });
      }

      var local_answer_id = this.common.answerId;
      var target_answer = common_var.this_answer_list.filter(function (item, index) {
        if (item.answer_id == local_answer_id) return true;
      });

      if (mode == GROBAL.answer_detail.value.mode) {
        var local_text_ja = target_answer[0].answer_text_front_ja + target_word[0].word_detail_text_ja + target_answer[0].answer_text_rear_ja;
        var local_text_en = target_answer[0].answer_text_front_en + target_word[0].word_detail_text_en + target_answer[0].answer_text_rear_en;
        var local_text_en_phonetic = target_answer[0].answer_text_front_en_phonetic + target_word[0].word_detail_text_en_phonetic + target_answer[0].answer_text_rear_en_phonetic;
      } else {
        var local_text_ja = target_answer[0].answer_text_front_ja + target_answer[0].answer_text_rear_ja;
        var local_text_en = target_answer[0].answer_text_front_en + target_answer[0].answer_text_rear_en;
        var local_text_en_phonetic = target_answer[0].answer_text_front_en_phonetic + target_answer[0].answer_text_rear_en_phonetic;
      }

      this.common.createDetailBlock(GROBAL.answer_detail.value.answer_table, local_text_ja, local_text_en, local_text_en_phonetic, GROBAL.answer_detail.view.voice);
    }
    /**
    * 画像系セット
    */

  }, {
    key: "setForAnswerDetail",
    value: function setForAnswerDetail() {
      this.common.setRoleImage(this.common.rightImg, 3, GROBAL.answer_detail.value.answer_detail_img);
    }
    /**
    * ワンポイント画面表示
    */

  }, {
    key: "toViewOnePoint",
    value: function toViewOnePoint() {
      // 空にする処理
      this.common.emptyParts(GROBAL.answer_detail.value.answer_detail_block); // ワンポイント詳細セット

      this.setOnePointTable(); // 画像セット
      //document.getElementById("restart_img").src="img/restart.png";
      // 表示パーツ変更

      this.common.changeParts(GROBAL.answer_detail.value.transition_second);
    }
    /**
    * ワンポイント詳細セット
    */

  }, {
    key: "setOnePointTable",
    value: function setOnePointTable() {
      document.getElementById(GROBAL.answer_detail.element.one_point_top).innerHTML = GROBAL.answer_detail.view.one_point;
      var local_question_id = this.common.questionId;
      var target_question = common_var.this_question_list.filter(function (item, index) {
        if (item.question_id == local_question_id) return true;
      });
      var local_answer_id = this.common.answerId;
      var target_answer = common_var.this_answer_list.filter(function (item, index) {
        if (item.answer_id == local_answer_id) return true;
      });
      this.common.createDetailBlock(GROBAL.answer_detail.value.one_point_question_table, target_question[0].question_text_ja, target_question[0].question_text_en, target_question[0].question_text_en_phonetic, target_question[0].one_point, GROBAL.answer_detail.value.table_type);

      if (this.common.answerType == GROBAL.main.value.type) {
        var local_text_ja = target_answer[0].answer_text_front_ja + GROBAL.answer_detail.view.example_text + target_answer[0].answer_text_rear_ja;
        var local_text_en = target_answer[0].answer_text_front_en + GROBAL.answer_detail.view.example_text + target_answer[0].answer_text_rear_en;
        var local_text_en_phonetic = target_answer[0].answer_text_front_en_phonetic + GROBAL.answer_detail.view.example_text + target_answer[0].answer_text_rear_en_phonetic;
      } else {
        var local_text_ja = target_answer[0].answer_text_front_ja;
        var local_text_en = target_answer[0].answer_text_front_en;
        var local_text_en_phonetic = target_answer[0].answer_text_front_en_phonetic;
      }

      this.common.createDetailBlock(GROBAL.answer_detail.value.one_point_answer_table, local_text_ja, local_text_en, local_text_en_phonetic, target_answer[0].one_point, GROBAL.answer_detail.value.table_type);
      $(GROBAL.answer_detail.element.one_point_question_table_box).mCustomScrollbar({
        mouseWheel: false,
        theme: "inset-3-dark",
        callbacks: {
          onOverflowY: function onOverflowY() {
            $(GROBAL.answer_detail.element.one_point_question_table_box).css("left", "2%");
            $(GROBAL.answer_detail.element.one_point_question_table_box).css("width", "98%");
          }
        }
      });
      $(GROBAL.answer_detail.element.listening_en_inner).css("background", "#fff8d6");
      $(GROBAL.answer_detail.element.listening_en_inner).css("border-color", "#ffea8a");
    }
    /**
    * トップに戻る
    */

  }, {
    key: "restartTalk",
    value: function restartTalk() {
      window.location.href = 'index.html';
    }
  }]);

  return AnswerDetail;
}();