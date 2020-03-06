"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a JavaScript file
var AnswerSelect =
/*#__PURE__*/
function () {
  // コンストラクタ
  function AnswerSelect(common, answer_detail) {
    _classCallCheck(this, AnswerSelect);

    this.common = common;
    this.answer_detail = answer_detail;
  }
  /**
  * 質問内容選択時
  */


  _createClass(AnswerSelect, [{
    key: "answerStart",
    value: function answerStart() {
      // 対象の子質問情報を取得してからパーツ表示
      var that = this;
      that.common.dbRequest = indexedDB.open(GROBAL.common.value.db_name);

      that.common.dbRequest.onsuccess = function (e) {
        var db = e.target.result;
        var child_key = that.common.talkingId + "_" + that.common.questionId;
        var child_records_tran = db.transaction("t_child_records", "readwrite");
        var child_records_store = child_records_tran.objectStore("t_child_records");
        var get_child_info = child_records_store.get(child_key);

        get_child_info.onsuccess = function (e) {
          if (e.target.result !== undefined) {
            that.common.answerRecords = e.target.result.records.split(',');
          } // 空にする処理


          that.common.emptyParts(GROBAL.answer_select.value.question_detail_block);
          that.common.hideParts(GROBAL.question_detail.value.transition); // 質問内容セット

          that.setQuestionText(); // 画像と文言セット

          that.setWhoAnswer(); // 回答選択テーブル作成

          that.setAnswerTable(); // 表示変更

          that.common.changeParts(GROBAL.answer_select.value.transition_first);
        };
      };
    }
    /**
    * 質問内容セット
    */

  }, {
    key: "setQuestionText",
    value: function setQuestionText() {
      $(GROBAL.answer_select.value.answer_select_block).append('<div class="answer_top_question_text">' + '<table id="answer_question_text_table" class="select_table_qes">' + '<tr>' + '<td>' + '<div class="left_table_img">' + '<img id="question_top_img" src="">' + '</div>' + '<div class="right_table_text">' + this.common.selectedQuestion.question_text_ja + '</div>' + '</td>' + '</tr>' + '</table>' + '</div>' + '<div class="answer_top_role">' + '<img id="answer_top_img" src="">' + '</div>' + '<div class="answer_select_desc">' + '<p id="answer_select_up">' + '</p>' + '<p id="answer_select_down">' + '</p>' + '<div id="select_table_box_ans">' + '<table id="answer_select_table" class="select_table_detail">' + '</table>' + '</div>' + '</div>');
      /*
          $(GROBAL.answer_select.element.answer_question_text_table).append(
            '<tr>' +
            '<td>' + 
            '<div class="left_table_img">' +
            '<img id="question_top_img" src="">' + 
            '</div>' +
            '<div class="right_table_text">' +
              common_var.this_selected_question.question_text_ja +
            '</div>' +
            '</td>' +
            '</tr>'
          );
      */

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
      var that = this;
      $.ajax({
        url: 'lib/json/answer_base_' + this.common.questionId + '.json',
        type: 'GET',
        dataType: 'json',
        success: function success(data) {
          that.common.answerList = data;
        },
        error: function error(data) {
          console.log("error");
        },
        complete: function complete(data) {
          for (var i = 0; i < that.common.answerList.length; i++) {
            var class_name = "new";

            for (var j = 0; j < that.common.answerRecords.length; j++) {
              if (that.common.answerList[i].answer_id == that.common.answerRecords[j]) {
                class_name = "done";
                break;
              }
            }

            if (that.common.answerList[i].select_text == " ") {
              $(GROBAL.answer_select.element.answer_select_table).append('<tr>' + '<td class="answer_select_button ' + class_name + '" answer_id="' + that.common.answerList[i].answer_id + '" answer_type="no_text">' + '<p class="answer_front">' + that.common.answerList[i].answer_text_front_ja + '</p>' + '<p class="answer_rear">' + that.common.answerList[i].answer_text_rear_ja + '</p>' + '</td>' + '</tr>');
            } else {
              $(GROBAL.answer_select.element.answer_select_table).append('<tr>' + '<td class="answer_select_button ' + class_name + '" answer_id="' + that.common.answerList[i].answer_id + '" answer_type="normal">' + '<p class="answer_front">' + that.common.answerList[i].answer_text_front_ja + '</p>' + '<p class="question_mark_text">' + that.common.answerList[i].select_text + '</p>' + '<p class="answer_rear">' + that.common.answerList[i].answer_text_rear_ja + '</p>' + '</td>' + '</tr>');
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
      $(GROBAL.main.element.answer_select_table).on("click", GROBAL.main.element.answer_select_button, {
        answer_select: this
      }, function (e) {
        e.data.answer_select.common.answerType = $(this).attr(GROBAL.main.value.answer_type);

        if (e.data.answer_select.common.answerType == GROBAL.main.value.type) {
          e.data.answer_select.toAnswerSelect($(this).attr(GROBAL.main.value.answer_id));
        } else {
          e.data.answer_select.answer_detail.toViewAnswerDetail($(this).attr(GROBAL.main.value.answer_id), e.data.answer_select.common.answerType);
          e.data.answer_select.common.currentNumber += 1;
        }

        e.data.answer_select.common.currentNumber += 1;
      });
    }
    /**
    * 回答詳細テーブル作成
    */

  }, {
    key: "toAnswerSelect",
    value: function toAnswerSelect(type) {
      var local_answer_id = this.common.answerId = type;
      var target = this.common.answerList.filter(function (item, index) {
        if (item.answer_id == local_answer_id) return true;
      });
      this.common.wordId = target[0].word_id; // 空にする処理

      this.common.emptyParts(GROBAL.answer_select.value.answer_select_block);
      this.common.hideParts(GROBAL.answer_select.value.transition_first); // 画像と文言セット

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
      $(GROBAL.answer_detail.value.answer_detail_select_block).append('<div class="answer_detail_select_desc">' + '<div class="answer_detail_select_role">' + '<img id="answer_select_detail_img" src="">' + '</div>' + '<p id="answer_detail_select">' + '</p>' + '<div id="select_word_table_box">' + '<table id="select_word_table_base">' + '<tr>' + '<td class="base_td">' + '<div class="answer_detail_select_text">' + '<p id="answer_detail_select_word">' + '</p>' + '</div>' + '</td>' + '</tr>' + '<tr>' + '<td class="base_td">' + '<table id="select_word_table">' + '</table>' + '</td>' + '</tr>' + '</table>' + '</div>' + '</div>');
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
      var that = this;
      $.ajax({
        url: 'lib/json/answer_detail_' + this.common.wordId + '.json',
        type: 'GET',
        dataType: 'json',
        success: function success(data) {
          that.common.wordList = data;
        },
        error: function error(data) {
          console.log("error");
        },
        complete: function complete(data) {
          for (var i = 0; i < that.common.wordList.length; i += 2) {
            if (that.common.wordList[i + 1]) {
              $(GROBAL.answer_select.element.select_word_table).append('<tr>' + '<td class="select_word_button" word_detail_id="' + that.common.wordList[i].word_detail_id + '">' + that.common.wordList[i].word_detail_text_ja + '</td>' + '<td class="select_word_button" word_detail_id="' + that.common.wordList[i + 1].word_detail_id + '">' + that.common.wordList[i + 1].word_detail_text_ja + '</td>' + '</tr>');
            } else {
              $(GROBAL.answer_select.element.select_word_table).append('<tr>' + '<td class="select_word_button" word_detail_id="' + that.common.wordList[i].word_detail_id + '">' + that.common.wordList[i].word_detail_text_ja + '</td>' + '</tr>');
            }
          }
        }
      });
      $(GROBAL.main.element.select_word_table).on("click", GROBAL.main.element.select_word_button, {
        answer_select: this
      }, function (e) {
        e.data.answer_select.answer_detail.toViewAnswerDetail($(this).attr(GROBAL.main.value.word_detail_id), "normal");
        e.data.answer_select.common.currentNumber += 1;
      });
    }
  }]);

  return AnswerSelect;
}();