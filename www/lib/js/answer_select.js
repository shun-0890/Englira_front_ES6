// This is a JavaScript file

class AnswerSelect extends AnswerDetail {

  // コンストラクタ
  constructor (common) {
    super(common);
    this.common = common;
  }

  // オーバーライド
  toViewAnswerDetail (type, mode) {
    super.toViewAnswerDetail(type, mode);
  }

  /**
  * 質問内容選択時
  */
  answerStart() {
    // 対象の子質問情報を取得してからパーツ表示
    let that = this;
    that.dbRequest = indexedDB.open(GROBAL.common.value.db_name);
    that.dbRequest.onsuccess = function (e) {
      let db     = e.target.result;
      let child_key = that.common.talkingId + "_" + that.common.questionId;
      let child_records_tran    = db.transaction("t_child_records", "readwrite");
      let child_records_store   = child_records_tran.objectStore("t_child_records");
      let get_child_info = child_records_store.get(child_key);
      get_child_info.onsuccess = function (e) {
        if (e.target.result !== undefined) {
          that.common.answerRecords = e.target.result.records.split(',');
        }
        // 空にする処理
        that.common.emptyParts(GROBAL.answer_select.value.question_detail_block);
        that.common.hideParts(GROBAL.question_detail.value.transition);
        // 質問内容セット
        that.setQuestionText();
        // 回答選択テーブル作成
        that.setAnswerTable();
        // 表示変更
        that.common.changeParts(GROBAL.answer_select.value.transition_first);
      }
    }
  }

  /**
  * 質問内容セット
  */
  setQuestionText () {
    // ルビ振り
    let text_ja = rubyContent(this.common.selectedQuestion.question_text_ja, this.common.selectedQuestion.question_text_ja_phonetic, this.common.selectedQuestion.question_text_ja_phonetic_info);
    $(GROBAL.answer_select.value.answer_select_block).append(
      '<div class="theme_wrapper">' +
      '<p class="day_part">' + 'DAY' +
      '</p>' +
      '<p id="current_day_answer">' +
      '</p>' +
      '<div class="current_day_line">' +
      '</div>' +
      '<p id="theme_text_answer">' +
      '</p>' +
      '<div class="theme_img"><img id="theme_role_answer"></div>' +
      '<div class="theme_bottom_text"><p id="theme_bottom_text_answer"></p></div>' +
      '<div class="border_part">' +
      '</div>' +
      '</div>' +
      '<div id="select_table_box_ans">' +
      '<table id="answer_select_table" class="select_table_detail">' +
      '</table>' +
      '</div>' +
      '</div>'
    );
    document.getElementById(GROBAL.answer_select.element.current_day_answer).innerHTML = this.common.currentDay.toString().padStart(2, '0');
    document.getElementById(GROBAL.answer_select.element.theme_text_answer).innerHTML = text_ja;
    this.common.setRoleImage(this.common.rightImg, 3, GROBAL.answer_select.value.theme_role_answer);
    document.getElementById(GROBAL.answer_select.element.theme_bottom_text_answer).innerHTML = "<ruby>返事<rt>へんじ</rt></ruby>をしてみましょう";
  }

  /**
  * 回答選択テーブル作成
  */
  setAnswerTable () {
    let that = this;
    $.ajax({
      url: 'lib/json/answer_base_' + this.common.questionId + '.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        that.common.answerList = data;
      },
      error: function(data) {
        console.log("error");
      },
      complete: function(data) {
        for (var i = 0; i < that.common.answerList.length; i++) {
          let class_name = "new";
          
          for (let j = 0; j < that.common.answerRecords.length; j++) {
            if (that.common.answerList[i].answer_id == that.common.answerRecords[j]) {
              class_name = "done";
              break;
            }
          }

          // ルビ振り共通
          let text_front_ja = rubyContent(that.common.answerList[i].answer_text_front_ja, that.common.answerList[i].answer_text_front_ja_phonetic, that.common.answerList[i].answer_text_front_ja_phonetic_info);
          let text_rear_ja = rubyContent(that.common.answerList[i].answer_text_rear_ja, that.common.answerList[i].answer_text_rear_ja_phonetic, that.common.answerList[i].answer_text_rear_ja_phonetic_info);

          if (that.common.answerList[i].select_text == " ") {
            $(GROBAL.answer_select.element.answer_select_table).append(
              '<tr>' +
              '<td class="answer_select_button ' + class_name + '" answer_id="' + that.common.answerList[i].answer_id + '" answer_type="no_text">' + 
                '<p class="answer_front">' + 
                text_front_ja + 
                '</p>' +
                '<p class="answer_rear">' + 
                text_rear_ja + 
                '</p>' +
                '</td>' +
              '</tr>'
            );
          } else {
            // ルビ振り（選択肢）
            let select_text = rubyContent(that.common.answerList[i].select_text, that.common.answerList[i].select_text_phonetic, that.common.answerList[i].select_text_phonetic_info);
            $(GROBAL.answer_select.element.answer_select_table).append(
              '<tr>' +
              '<td class="answer_select_button ' + class_name + '" answer_id="' + that.common.answerList[i].answer_id + '" answer_type="normal">' + 
                '<p class="answer_front">' + 
                text_front_ja + 
                '</p>' +
                '<p class="question_mark_text">' + 
                select_text + 
                '</p>' +
                '<p class="answer_rear">' + 
                text_rear_ja + 
                '</p>' +
                '</td>' +
              '</tr>'
            );
          }
        }
        $(GROBAL.answer_select.element.select_table_box_ans).mCustomScrollbar({
          mouseWheel: false,
          theme: "inset-3-dark",
          callbacks: {
            onOverflowY: function() {
              $(GROBAL.answer_select.element.select_table_box_ans).css("left", "2%");
              $(GROBAL.answer_select.element.select_table_box_ans).css("width", "98%");
            }
          }
        });
      }
    });
    $(GROBAL.main.element.answer_select_table).on("click", GROBAL.main.element.answer_select_button, {answer_select:this} , function(e) {
      e.data.answer_select.common.answerType = $(this).attr(GROBAL.main.value.answer_type);
      if (e.data.answer_select.common.answerType == GROBAL.main.value.type) {
        e.data.answer_select.toAnswerSelect($(this).attr(GROBAL.main.value.answer_id));
      } else {
        e.data.answer_select.toViewAnswerDetail($(this).attr(GROBAL.main.value.answer_id), e.data.answer_select.common.answerType);
        e.data.answer_select.common.currentNumber += 1;
      }
      e.data.answer_select.common.currentNumber += 1;
    });
  }

  /**
  * 回答詳細テーブル作成
  */
  toAnswerSelect (type) {
    let local_answer_id = this.common.answerId = type;
    let target = this.common.answerList.filter(function (item, index) {
      if (item.answer_id == local_answer_id) return true;
    });
    this.common.wordId = target[0].word_id;
    // 画像と文言セット
    // ルビ振り
    let text_front_ja = rubyContent(target[0].answer_text_front_ja, target[0].answer_text_front_ja_phonetic, target[0].answer_text_front_ja_phonetic_info);
    let select_text = rubyContent(target[0].select_text, target[0].select_text_phonetic, target[0].select_text_phonetic_info);
    let text_rear_ja = rubyContent(target[0].answer_text_rear_ja, target[0].answer_text_rear_ja_phonetic, target[0].answer_text_rear_ja_phonetic_info);
    this.setForAnswer(text_front_ja, select_text, text_rear_ja);
    // 回答詳細テーブル作成
    this.setAnswerSelectDetailTable();
    this.common.changeParts(GROBAL.answer_detail.value.answer_detail_select_modal_transition);
  }

  /**
  * 画像と文言セット
  */
  setForAnswer (front, text, rear) {
    $(GROBAL.answer_detail.value.answer_detail_select_modal).append(
      '<div class="close_button"><span></span></div>' +
      '<div class="answer_detail_modal_content">' +
      '<div class="modal_text_up">' +
      '<p class="question_mark_text">???</p><p class="modal_text_inner">の<ruby>中<rt>なか</rt></ruby>の</p><p class="modal_text_inner_down"><ruby>言葉<rt>ことば</rt></ruby>を<ruby>選<rt>えら</rt></ruby>びましょう！</p>' +
      '</div>' +
      '<div class="modal_text_down">' +
      '<p id="modal_text_down_content"></p>' +
      '</div>' +
      '<div class="select_modal_table_wrapper">' +
      '<table id="select_modal_table">' +
      '</table>' +
      '</div>' +
      '</div>'
    );
    document.getElementById(GROBAL.answer_detail.element.modal_text_down_content).innerHTML = 
    "<p class='answer_front'>" + front + "</p>" + "<p class='question_mark_text'>" + text + "</p>" + "<p class='answer_rear'>" + rear + "</p>";
  }

  /**
  * 回答詳細選択テーブル作成
  */
  setAnswerSelectDetailTable () {
    let that = this;
    $.ajax({
      url: 'lib/json/answer_detail_' + this.common.wordId + '.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        that.common.wordList = data;
      },
      error: function(data) {
        console.log("error");
      },
      complete: function(data) {
        for (var i = 0; i < that.common.wordList.length; i++) {
          // ルビ振り
          let text_ja = rubyContent(that.common.wordList[i].word_detail_text_ja, that.common.wordList[i].word_detail_text_ja_phonetic, that.common.wordList[i].word_detail_text_ja_phonetic_info);
          $(GROBAL.answer_detail.value.select_modal_table).append(
            '<tr>' +
            '<td class="select_word_button" word_detail_id="' + that.common.wordList[i].word_detail_id + '">' + text_ja + '</td>' +
            '</tr>'
          );
        }
      }
    });

    $(GROBAL.answer_detail.value.select_modal_table).on("click", GROBAL.main.element.select_word_button,{answer_select:this}, function(e) {
      e.data.answer_select.toViewAnswerDetail($(this).attr(GROBAL.main.value.word_detail_id), "normal");
      e.data.answer_select.common.currentNumber += 1;
    });
    $(GROBAL.answer_detail.value.close_button).on("click", function() {
      that.common.emptyParts(GROBAL.answer_detail.value.answer_detail_select_modal);
      that.common.hideParts(GROBAL.answer_detail.value.answer_detail_select_modal_transition);
      that.common.currentNumber -= 1;
    });
  }

}