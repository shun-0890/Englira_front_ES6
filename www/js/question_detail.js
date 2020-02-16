"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a JavaScript file
var QuestionDetail =
/*#__PURE__*/
function () {
  // コンストラクタ
  function QuestionDetail(common) {
    _classCallCheck(this, QuestionDetail);

    this.common = common;
  }
  /**
  * 質問内容選択時
  */


  _createClass(QuestionDetail, [{
    key: "toQuestionSelect",
    value: function toQuestionSelect(type) {
      // 空にする処理
      this.common.emptyParts(GROBAL.question_detail.value.question_select_block);
      this.common.questionId = this.question_id = type; // 質問詳細文言セット

      this.setQuestionTable(); // 画像系セット

      this.setForQuestionDetail(); // 表示パーツ変更

      this.common.changeParts(GROBAL.question_detail.value.transition);
    }
    /**
    * 画像系セット
    */

  }, {
    key: "setForQuestionDetail",
    value: function setForQuestionDetail() {
      this.common.setRoleImage(this.common.leftImg, 3, GROBAL.question_detail.value.question_img);
    }
    /**
    * 質問詳細テーブル作成
    */

  }, {
    key: "setQuestionTable",
    value: function setQuestionTable() {
      var local_question_id = this.common.questionId;
      var target = common_var.this_question_list.filter(function (item, index) {
        if (item.question_id == local_question_id) return true;
      });
      common_var.this_selected_question = target[0];
      this.common.createDetailBlock(GROBAL.question_detail.value.question_table, common_var.this_selected_question.question_text_ja, common_var.this_selected_question.question_text_en, common_var.this_selected_question.question_text_en_phonetic, GROBAL.question_detail.view.voice);
    }
  }]);

  return QuestionDetail;
}();