"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a JavaScript file
var QuestionDetail =
/*#__PURE__*/
function () {
  // コンストラクタ
  function QuestionDetail(common, answer_select) {
    _classCallCheck(this, QuestionDetail);

    this.common = common;
    this.answer_select = answer_select;
  }
  /**
  * 質問内容選択時
  */


  _createClass(QuestionDetail, [{
    key: "toQuestionSelect",
    value: function toQuestionSelect(type) {
      // 空にする処理
      this.common.emptyParts(GROBAL.question_detail.value.question_select_block);
      this.common.hideParts(GROBAL.talk_top.value.transition);
      this.common.hideParts(GROBAL.main.value.role_transition); //$(GROBAL.talk_top.value.role_img).attr('src', "");

      this.common.questionId = this.question_id = type; // 中身セット

      this.setForQuestionDetail(); // 表示パーツ変更

      this.common.changeParts(GROBAL.question_detail.value.transition);
    }
    /**
    * 中身セット
    */

  }, {
    key: "setForQuestionDetail",
    value: function setForQuestionDetail() {
      $(GROBAL.answer_select.value.question_detail_block).append('<div id="question_table_box">' + '<table id="question_table">' + '</table>' + '<div class="question_start">' + '<img id="question_img" src="">' + '<div id="answer_start_button" class="answer_start_outer">' + '<div class="answer_start_inner">' + '返答をする' + '</div>' + '<div class="answer_start_inner_border"></div>' + '</div>' + '</div>' + '</div>');
      this.common.setRoleImage(this.common.leftImg, 3, GROBAL.question_detail.value.question_img);
      this.setQuestionTable();
    }
    /**
    * 質問詳細テーブル作成
    */

  }, {
    key: "setQuestionTable",
    value: function setQuestionTable() {
      var local_question_id = this.common.questionId;
      var target = this.common.questionList.filter(function (item, index) {
        if (item.question_id == local_question_id) return true;
      });
      this.common.selectedQuestion = target[0];
      this.common.createDetailBlock(local_question_id, GROBAL.question_detail.value.question_table, this.common.selectedQuestion.question_text_ja, this.common.selectedQuestion.question_text_en, this.common.selectedQuestion.question_text_en_phonetic, GROBAL.question_detail.view.voice); // 回答スタートがクリックされた時

      $(GROBAL.question_detail.value.question_table_box).on("click", GROBAL.main.element.answer_start_button, {
        question_detail: this
      }, function (e) {
        e.data.question_detail.answer_select.answerStart();
        e.data.question_detail.common.currentNumber += 1;
      });
    }
  }]);

  return QuestionDetail;
}();