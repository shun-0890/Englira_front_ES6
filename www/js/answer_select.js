"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a JavaScript file
var AnswerSelect =
/*#__PURE__*/
function () {
  // コンストラクタ
  function AnswerSelect(common) {
    _classCallCheck(this, AnswerSelect);

    this.common = common;
  }
  /**
  * 質問内容選択時
  */


  _createClass(AnswerSelect, [{
    key: "answerStart",
    value: function answerStart() {
      // 空にする処理
      this.common.emptyParts(GROBAL.answer_select.value.question_detail_block); // 質問内容セット

      this.setQuestionText(); // 画像と文言セット

      this.setWhoAnswer(); // 回答選択テーブル作成

      this.setAnswerTable(); // 表示変更

      this.common.changeParts(GROBAL.answer_select.value.transition_first);
    }
    /**
    * 質問内容セット
    */

  }, {
    key: "setQuestionText",
    value: function setQuestionText() {
      $(GROBAL.answer_select.element.answer_question_text_table).append('<tr>' + '<td>' + '<div class="left_table_img">' + '<img id="question_top_img" src="">' + '</div>' + '<div class="right_table_text">' + common_var.this_selected_question.question_text_ja + '</div>' + '</td>' + '</tr>');
      this.common.setRoleImage(this.common.leftImg, 3, GROBAL.answer_select.value.question_top_img);
    }
    /**
    * 画像と文言を設定する
    */

  }, {
    key: "setWhoAnswer",
    value: function setWhoAnswer() {
      this.common.setRoleImage(this.common.rightImg, 2, GROBAL.answer_select.value.answer_top_img);
      document.getElementById(GROBAL.answer_select.element.answer_select_up).innerHTML = GROBAL.answer_select.view.answer_select_up;
      document.getElementById(GROBAL.answer_select.element.answer_select_down).innerHTML = "<p class='question_mark'>?</p><p class='question_text'>" + GROBAL.answer_select.view.answer_select_down + "</p>";
    }
    /**
    * 回答選択テーブル作成
    */

  }, {
    key: "setAnswerTable",
    value: function setAnswerTable() {
      $.ajax({
        url: 'lib/json/answer_base_' + this.common.questionId + '.json',
        type: 'GET',
        dataType: 'json',
        success: function success(data) {
          common_var.this_answer_list = data;
        },
        error: function error(data) {
          console.log("error");
        },
        complete: function complete(data) {
          for (var i = 0; i < common_var.this_answer_list.length; i++) {
            if (common_var.this_answer_list[i].select_text == " ") {
              $(GROBAL.answer_select.element.answer_select_table).append('<tr>' + '<td class="answer_select_button" answer_id="' + common_var.this_answer_list[i].answer_id + '" answer_type="no_text">' + '<p class="answer_front">' + common_var.this_answer_list[i].answer_text_front_ja + '</p>' + '<p class="answer_rear">' + common_var.this_answer_list[i].answer_text_rear_ja + '</p>' + '</td>' + '</tr>');
            } else {
              $(GROBAL.answer_select.element.answer_select_table).append('<tr>' + '<td class="answer_select_button" answer_id="' + common_var.this_answer_list[i].answer_id + '" answer_type="normal">' + '<p class="answer_front">' + common_var.this_answer_list[i].answer_text_front_ja + '</p>' + '<p class="question_mark_text">' + common_var.this_answer_list[i].select_text + '</p>' + '<p class="answer_rear">' + common_var.this_answer_list[i].answer_text_rear_ja + '</p>' + '</td>' + '</tr>');
            }
          }

          $(GROBAL.answer_select.element.select_table_box_ans).mCustomScrollbar({
            mouseWheel: false,
            theme: "inset-3-dark",
            callbacks: {
              onOverflowY: function onOverflowY() {
                $(GROBAL.answer_select.element.select_table_box_ans).css("left", "2%");
                $(GROBAL.answer_select.element.select_table_box_ans).css("width", "98%");
              }
            }
          });
        }
      });
    }
    /**
    * 回答詳細テーブル作成
    */

  }, {
    key: "toAnswerSelect",
    value: function toAnswerSelect(type) {
      var local_answer_id = this.common.answerId = type;
      var target = common_var.this_answer_list.filter(function (item, index) {
        if (item.answer_id == local_answer_id) return true;
      });
      this.common.wordId = target[0].word_id; // 空にする処理

      this.common.emptyParts(GROBAL.answer_select.value.answer_select_block); // 画像と文言セット

      this.setForAnswer(target[0].answer_text_front_ja, target[0].select_text, target[0].answer_text_rear_ja); // 回答詳細テーブル作成

      this.setAnswerSelectDetailTable(); // パーツ表示

      this.common.changeParts(GROBAL.answer_select.value.transition_second);
    }
    /**
    * 画像と文言セット
    */

  }, {
    key: "setForAnswer",
    value: function setForAnswer(front, text, rear) {
      this.common.setRoleImage(this.common.rightImg, 2, GROBAL.answer_select.value.answer_select_detail_img);
      document.getElementById(GROBAL.answer_select.element.answer_detail_select).innerHTML = "<p class='question_mark'>?</p><p class='question_text'>" + GROBAL.answer_select.view.answer_detail_select + "</p>";
      document.getElementById(GROBAL.answer_select.element.answer_detail_select_word).innerHTML = "<p class='answer_front'>" + front + "</p>" + "<p class='answer_mark'>" + text + "</p>" + "<p class='answer_rear'>" + rear + "</p>";
    }
    /**
    * 回答詳細選択テーブル作成
    */

  }, {
    key: "setAnswerSelectDetailTable",
    value: function setAnswerSelectDetailTable() {
      $.ajax({
        url: 'lib/json/answer_detail_' + this.common.wordId + '.json',
        type: 'GET',
        dataType: 'json',
        success: function success(data) {
          common_var.this_word_list = data;
        },
        error: function error(data) {
          console.log("error");
        },
        complete: function complete(data) {
          for (var i = 0; i < common_var.this_word_list.length; i += 2) {
            if (common_var.this_word_list[i + 1]) {
              $(GROBAL.answer_select.element.select_word_table).append('<tr>' + '<td class="select_word_button" word_detail_id="' + common_var.this_word_list[i].word_detail_id + '">' + common_var.this_word_list[i].word_detail_text_ja + '</td>' + '<td class="select_word_button" word_detail_id="' + common_var.this_word_list[i + 1].word_detail_id + '">' + common_var.this_word_list[i + 1].word_detail_text_ja + '</td>' + '</tr>');
            } else {
              $(GROBAL.answer_select.element.select_word_table).append('<tr>' + '<td class="select_word_button" word_detail_id="' + common_var.this_word_list[i].word_detail_id + '">' + common_var.this_word_list[i].word_detail_text_ja + '</td>' + '</tr>');
            }
          }
        }
      });
    }
  }]);

  return AnswerSelect;
}();