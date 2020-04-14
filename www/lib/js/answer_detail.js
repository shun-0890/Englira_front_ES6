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
      this.common.emptyParts(GROBAL.answer_select.value.answer_select_block);
      this.common.hideParts(GROBAL.answer_select.value.transition_first);
      this.common.emptyParts(GROBAL.answer_detail.value.answer_detail_select_modal);
      this.common.hideParts(GROBAL.answer_detail.value.answer_detail_select_modal_transition);
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
      '<div class="one_point_start">' +
      '<img id="answer_detail_img" src="">' +
      '<div id="one_point_start_button" class="role_next_inner">' +
      '<img src="img/next_btn.png">' +
      '<p>ワンポイント</p>' +
      '</div>' +
      '</div>' +
      '</div>'
    );
    let local_word_detail_id = this.common.wordDetailId;
    if (mode == GROBAL.answer_detail.value.mode) {
      var target_word = this.common.wordList.filter  (function (item, index) {
        if (item.word_detail_id == local_word_detail_id) return true;
      });
    }
    let local_answer_id = this.common.answerId
    let target_answer = this.common.answerList.filter(function (item, index) {
      if (item.answer_id == local_answer_id) return true;
    });
    if (mode == GROBAL.answer_detail.value.mode) {
      var local_text_ja = 
        rubyContent(target_answer[0].answer_text_front_ja, target_answer[0].answer_text_front_ja_phonetic, target_answer[0].answer_text_front_ja_phonetic_info) + 
        rubyContent(target_word[0].word_detail_text_ja, target_word[0].word_detail_text_ja_phonetic, target_word[0].word_detail_text_ja_phonetic_info) + 
        rubyContent(target_answer[0].answer_text_rear_ja, target_answer[0].answer_text_rear_ja_phonetic, target_answer[0].answer_text_rear_ja_phonetic_info);
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
        rubyContent(target_answer[0].answer_text_front_ja, target_answer[0].answer_text_front_ja_phonetic, target_answer[0].answer_text_front_ja_phonetic_info) + 
        rubyContent(target_answer[0].answer_text_rear_ja, target_answer[0].answer_text_rear_ja_phonetic, target_answer[0].answer_text_rear_ja_phonetic_info);
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
    this.common.setRoleImage(this.common.rightImg, 4, GROBAL.answer_detail.value.answer_detail_img);
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
    // 表示パーツ変更
    this.common.changeParts(GROBAL.answer_detail.value.transition_second);
    // 学習履歴オブジェクト更新
    this.updateHistoryOb();
  }

  /**
  * ワンポイント詳細セット
  */
  setOnePointTable () {
    $(GROBAL.answer_detail.value.one_point_block).append(
      '<div class="theme_wrapper_one_point">' +
      '<p class="day_part">' + 'DAY' +
      '</p>' +
      '<p id="current_day_one_point">' +
      '</p>' +
      '<div class="current_day_line_one_point">' +
      '</div>' +
      '<p id="theme_text_one_point">' +
      '</p>' +
      '<div class="border_part_one_point">' +
      '</div>' +
      '</div>' +
      '<div id="one_point_question_table_box">' +
      '<table id="one_point_question_table">' +
      '</table>' +
      '<table id="one_point_answer_table">' +
      '</table>' +
      '<div class="restart">' +
      '<div id="restart_button" class="role_next_inner">' +
      '<img src="img/next_btn.png">' +
      '<p><ruby>別<rt>べつ</rt></ruby>の<ruby>会話<rt>かいわ</rt></ruby>をする</p>' +
      '</div>' +
      '</div>' +
      '</div>'
    ); 
    document.getElementById(GROBAL.answer_detail.element.current_day_one_point).innerHTML = this.common.currentDay.toString().padStart(2, '0');
    document.getElementById(GROBAL.answer_detail.element.theme_text_one_point).innerHTML = "ワンポイント";
    let local_question_id = this.common.questionId;
    let target_question = this.common.questionList.filter(function (item, index) {
      if (item.question_id == local_question_id) return true;
    });
    let local_answer_id = this.common.answerId;
    var target_answer = this.common.answerList.filter(function (item, index) {
      if (item.answer_id == local_answer_id) return true;
    });

    // ルビ振り（ワンポイント質問用）
    let question_text_ja = rubyContent(target_question[0].question_text_ja, target_question[0].question_text_ja_phonetic, target_question[0].question_text_ja_phonetic_info);
    let one_point = rubyContent(target_question[0].one_point, target_question[0].one_point_phonetic, target_question[0].one_point_phonetic_info);

    this.common.createDetailBlock(
      "",
      GROBAL.answer_detail.value.one_point_question_table,
      question_text_ja,
      target_question[0].question_text_en,
      target_question[0].question_text_en_phonetic, 
      one_point,
      GROBAL.answer_detail.value.table_type,
      this.common.leftImg,
      3
    );
    if (this.common.answerType == GROBAL.main.value.type) {
      var local_text_ja = 
        rubyContent(target_answer[0].answer_text_front_ja, target_answer[0].answer_text_front_ja_phonetic, target_answer[0].answer_text_front_ja_phonetic_info) + 
        GROBAL.answer_detail.view.example_text +
        rubyContent(target_answer[0].answer_text_rear_ja, target_answer[0].answer_text_rear_ja_phonetic, target_answer[0].answer_text_rear_ja_phonetic_info);
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
        rubyContent(target_answer[0].answer_text_front_ja, target_answer[0].answer_text_front_ja_phonetic, target_answer[0].answer_text_front_ja_phonetic_info);
      var local_text_en = 
        target_answer[0].answer_text_front_en;
      var local_text_en_phonetic = 
        target_answer[0].answer_text_front_en_phonetic;
    }

    // ルビ振り（回答用）
    let one_point_ans = rubyContent(target_answer[0].one_point, target_answer[0].one_point_phonetic, target_answer[0].one_point_phonetic_info);

    this.common.createDetailBlock(
      "",
      GROBAL.answer_detail.value.one_point_answer_table,
      local_text_ja,
      local_text_en,
      local_text_en_phonetic, 
      one_point_ans,
      GROBAL.answer_detail.value.table_type,
      this.common.rightImg,
      3
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
    $(GROBAL.main.element.restart_button).on("click", {answer_detail:this}, function(e) {
      e.data.answer_detail.restartTalk();
    });
  }

  /**
  * 学習履歴オブジェクトの更新処理
  */
  updateHistoryOb () {
    let that = this;
    that.common.dbRequest = indexedDB.open(GROBAL.common.value.db_name);
    that.common.dbRequest.onsuccess = function (e) {
      let db     = e.target.result;
      let current_day_tran      = db.transaction("t_current_day", "readwrite");
      let parent_records_tran   = db.transaction("t_parent_records", "readwrite");
      let child_records_tran    = db.transaction("t_child_records", "readwrite");
      let current_day_store     = current_day_tran.objectStore("t_current_day");
      let parent_records_store  = parent_records_tran.objectStore("t_parent_records");
      let child_records_store   = child_records_tran.objectStore("t_child_records");

      // 親オブジェクト中身編集
      let parent_key = that.common.talkingId;
      let parent_records_data;
      let parent_upd_flg = true;
      if (that.common.questionRecords == "") {
        parent_records_data = {
          id: parent_key,
          records: that.common.questionId
        }
      } else {
        for (let i = 0; i < that.common.questionRecords.length; i++) {
          if (that.common.questionId == that.common.questionRecords[i]) {
            parent_upd_flg = false;
            break;
          }
        }
        if (parent_upd_flg) {
          parent_records_data = {
            id: parent_key,
            records: that.common.questionRecords.join(',') + "," + that.common.questionId
          }
        }
      }
      if (parent_upd_flg) {
        let put_parent_records = parent_records_store.put(parent_records_data);
        put_parent_records.onsuccess = function () {
          console.log("put parent records success");
        }
      }

      // 子オブジェクト中身編集
      let child_key = parent_key + "_" + that.common.questionId;
      let child_records_data;
      let child_upd_flg = true;
      if (that.common.answerRecords == "") {
        child_records_data = {
          id: child_key,
          records: that.common.answerId
        }
      } else {
        for (let i = 0; i < that.common.answerRecords.length; i++) {
          if (that.common.answerId == that.common.answerRecords[i]) {
            child_upd_flg = false;
            break;
          }
        }
        if (child_upd_flg) {
          child_records_data = {
            id: child_key,
            records: that.common.answerRecords.join(',') + "," + that.common.answerId
          }
        }
      }
      if (child_upd_flg) {
        let put_child_records = child_records_store.put(child_records_data);
        put_child_records.onsuccess = function () {
          console.log("put child records success");
        }
      }

      // 現在の日付データ更新
      if (that.common.talkingId == that.common.currentDay) {
        console.log("current_day update : " , that.common.currentDay);
        let current_day_data = {
          id: 1,
          current_day: that.common.currentDay + 1
        }
        let put_current_day    = current_day_store.put(current_day_data);
        put_current_day.onsuccess = function () {
          var now_current_day = current_day_store.getAll();
          console.log("now current day : " , now_current_day);
          console.log("put current day success");
        }
      }
      
      current_day_tran.oncomplete = function () {
        console.log("tran current day finished");
      }
      parent_records_tran.oncomplete = function () {
        console.log("tran parent records finished");
      }
      child_records_tran.oncomplete = function () {
        console.log("tran child records finished");
      }

      /* 動作確認用
      var getRec = store.getAll();
      getRec.onsuccess = function (e) {
        if (e.target.result.length == 0) {
          let default_data = {
            id : 1,
            current_day : 1
          }
          store.put(default_data);
        } else {
          common_var.this_current_day = e.target.result[0].current_day;
        }
        console.log("current_day : " , e.target.result[0].current_day);
      }
      var getRec = parent_records_store.get(parent_key);
      getRec.onsuccess = function (e) {
        console.log("parent_value : " , e.target.result.records);
      }
      */
      
      db.close();
    }
  }

  /**
  * 会話の最初に戻る
  */
  restartTalk() {
    this.common.emptyParts(GROBAL.answer_detail.value.one_point_block);
    this.common.hideParts(GROBAL.answer_detail.value.transition_second);
    this.common.currentNumber = 1;
    this.toTalkSelect(this.common.dayId);
  }
}
