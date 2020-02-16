// This is a JavaScript file

class AnswerDetail {
  // コンストラクタ
  constructor (common) {
    this.common = common;
  }

  /**
  * 質問内容選択時
  */
  toViewAnswerDetail (type, mode) {
    this.common.answerType = mode;
    if (mode == GROBAL.answer_detail.value.mode) {
      // 空にする処理
      this.common.emptyParts(GROBAL.answer_detail.value.answer_detail_select_block);
      this.common.hideParts(GROBAL.answer_select.value.transition_second);
      this.common.wordDetailId = type;
    } else {
      // 空にする処理
      this.common.emptyParts(GROBAL.answer_detail.value.answer_select_block);
      this.common.hideParts(GROBAL.answer_select.value.transition_first);
      this.common.answerId = type;
      this.common.wordDetailId = mode;
    }
    // 回答詳細文言セット
    this.setAnswerDetailTable(mode);
    // 画像系セット
    this.setForAnswerDetail();
    // 表示パーツ変更
    this.common.changeParts(GROBAL.answer_detail.value.transition_first);
  }

  /**
  * 回答詳細文言セット
  */
  setAnswerDetailTable(mode) {
    $(GROBAL.answer_detail.value.answer_detail_block).append(
      '<div id="answer_table_box">' +
      '<table id="answer_table">' +
      '</table>' +
      '<div class="answer_detail_role">' +
      '<img id="answer_detail_img" src="">' +
      '</div>' +
      '<div class="one_point_start">' +
      '<div id="one_point_start_button" class="one_point_start_outer">' +
      '<div class="one_point_start_inner">' +
      'One Point' +
      '</div>' +
      '<div class="one_point_start_inner_border"></div>' +
      '</div>' +
      '</div>' +
      '</div>'
    );
    var local_word_detail_id = this.common.wordDetailId;
    console.log("detailid : " + this.common.wordDetailId);
    if (mode == GROBAL.answer_detail.value.mode) {
      var target_word = common_var.this_word_list.filter  (function (item, index) {
        if (item.word_detail_id == local_word_detail_id) return true;
      });
    }
    var local_answer_id = this.common.answerId
    var target_answer = common_var.this_answer_list.filter(function (item, index) {
      if (item.answer_id == local_answer_id) return true;
    });
    if (mode == GROBAL.answer_detail.value.mode) {
      var local_text_ja = 
        target_answer[0].answer_text_front_ja + 
        target_word[0].word_detail_text_ja + 
        target_answer[0].answer_text_rear_ja;
      var local_text_en = 
        target_answer[0].answer_text_front_en + 
        target_word[0].word_detail_text_en + 
        target_answer[0].answer_text_rear_en;
      var local_text_en_phonetic = 
        target_answer[0].answer_text_front_en_phonetic + 
        target_word[0].word_detail_text_en_phonetic + 
        target_answer[0].answer_text_rear_en_phonetic;
    } else {
      var local_text_ja = 
        target_answer[0].answer_text_front_ja + 
        target_answer[0].answer_text_rear_ja;
      var local_text_en = 
        target_answer[0].answer_text_front_en + 
        target_answer[0].answer_text_rear_en;
      var local_text_en_phonetic = 
        target_answer[0].answer_text_front_en_phonetic + 
        target_answer[0].answer_text_rear_en_phonetic;
    }

    this.common.createDetailBlock(
      local_answer_id + "_" + local_word_detail_id,
      GROBAL.answer_detail.value.answer_table,
      local_text_ja,
      local_text_en,
      local_text_en_phonetic, 
      GROBAL.answer_detail.view.voice
    );

    // ワンポイントボタンが押下された時のアクション
    $(GROBAL.main.element.one_point_start_button).on("click", {answer_detail:this} ,function(e) {
      e.data.answer_detail.toViewOnePoint();
      e.data.answer_detail.common.currentNumber += 1;
    });

  }

  /**
  * 画像系セット
  */
  setForAnswerDetail () {
    this.common.setRoleImage(this.common.rightImg, 3, GROBAL.answer_detail.value.answer_detail_img);
  }

  /**
  * ワンポイント画面表示
  */
  toViewOnePoint() {
    // 空にする処理
    this.common.emptyParts(GROBAL.answer_detail.value.answer_detail_block);
    this.common.hideParts(GROBAL.answer_detail.value.transition_first);
    // ワンポイント詳細セット
    this.setOnePointTable();
    // 画像セット
    //document.getElementById("restart_img").src="img/restart.png";
    // 表示パーツ変更
    this.common.changeParts(GROBAL.answer_detail.value.transition_second);
  }

  /**
  * ワンポイント詳細セット
  */
  setOnePointTable () {
    $(GROBAL.answer_detail.value.one_point_block).append(
      '<div class="one_point_text">' +
      '<p id="one_point_top">' +
      '</p>' +
      '</div>' +
      '<div id="one_point_question_table_box">' +
      '<table id="one_point_question_table">' +
      '</table>' +
      '<table id="one_point_answer_table">' +
      '</table>' +
      '<div class="restart">' +
      '<div id="restart_button" class="restart_outer">' +
      '<div class="restart_inner">' +
      'はじめからもう一度' +
      '</div>' +
      '<div class="restart_inner_border"></div>' +
      '</div>' +
      '</div>' +
      '</div>'
    ); 
    document.getElementById(GROBAL.answer_detail.element.one_point_top).innerHTML = GROBAL.answer_detail.view.one_point;
    var local_question_id = this.common.questionId;
    var target_question = common_var.this_question_list.filter(function (item, index) {
      if (item.question_id == local_question_id) return true;
    });
    var local_answer_id = this.common.answerId;
    var target_answer = common_var.this_answer_list.filter(function (item, index) {
      if (item.answer_id == local_answer_id) return true;
    });

    this.common.createDetailBlock(
      "",
      GROBAL.answer_detail.value.one_point_question_table,
      target_question[0].question_text_ja,
      target_question[0].question_text_en,
      target_question[0].question_text_en_phonetic, 
      target_question[0].one_point,
      GROBAL.answer_detail.value.table_type
    );
    if (this.common.answerType == GROBAL.main.value.type) {
      var local_text_ja = 
        target_answer[0].answer_text_front_ja + 
        GROBAL.answer_detail.view.example_text +
        target_answer[0].answer_text_rear_ja;
      var local_text_en = 
        target_answer[0].answer_text_front_en + 
        GROBAL.answer_detail.view.example_text + 
        target_answer[0].answer_text_rear_en;
      var local_text_en_phonetic = 
        target_answer[0].answer_text_front_en_phonetic + 
        GROBAL.answer_detail.view.example_text + 
        target_answer[0].answer_text_rear_en_phonetic;
    } else {
      var local_text_ja = 
        target_answer[0].answer_text_front_ja;
      var local_text_en = 
        target_answer[0].answer_text_front_en;
      var local_text_en_phonetic = 
        target_answer[0].answer_text_front_en_phonetic;
    }

    this.common.createDetailBlock(
      "",
      GROBAL.answer_detail.value.one_point_answer_table,
      local_text_ja,
      local_text_en,
      local_text_en_phonetic, 
      target_answer[0].one_point,
      GROBAL.answer_detail.value.table_type
    );
    $(GROBAL.answer_detail.element.one_point_question_table_box).mCustomScrollbar({
      mouseWheel: false,
      theme: "inset-3-dark",
      callbacks: {
        onOverflowY: function() {
          $(GROBAL.answer_detail.element.one_point_question_table_box).css("left", "2%");
          $(GROBAL.answer_detail.element.one_point_question_table_box).css("width", "98%");
        }
      }
    });
    $(GROBAL.answer_detail.element.listening_en_inner).css("background", "#fff8d6");
    $(GROBAL.answer_detail.element.listening_en_inner).css("border-color", "#ffea8a");
    $(GROBAL.main.element.restart_button).on("click", {answer_detail:this}, function(e) {
      e.data.answer_detail.restartTalk();
    });
  }

  /**
  * トップに戻る
  */
  restartTalk() {
    window.location.href = 'index.html';
  }
}
