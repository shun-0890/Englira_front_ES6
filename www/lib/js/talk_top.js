// This is a JavaScript file

class TalkTop extends QuestionDetail {

  // コンストラクタ
  constructor (common) {
    super(common);
    this.common = common;
  }

  // オーバーライド
  toQuestionSelect (type) {
    super.toQuestionSelect(type);
  }

  /**
  * t_current_dayオブジェクト取得処理
  */
  getCurrentDay () {
    let that = this;
    //common_var.this_db_request = indexedDB.open(GROBAL.common.value.db_name);
    that.common.dbRequest = indexedDB.open(GROBAL.common.value.db_name);

    // オブジェクトへの接続が成功した場合
    that.common.dbRequest.onsuccess = function (e) {
      let db     = e.target.result;
      let tran   = db.transaction("t_current_day", "readwrite");
      let store  = tran.objectStore("t_current_day");
      tran.oncomplete = function () {
        // 会話開始時
        that.setBase();
        that.common.changeParts(GROBAL.main.value.transition);
        db.close();
      }
      let get_req = store.getAll();
      get_req.onsuccess = function (e) {
        console.log("current_day : " , e.target.result);
        that.common.currentDay = Number(e.target.result[0].current_day);
      };
    }
    // オブジェクトへの接続が失敗した場合
    that.common.dbRequest.onerror = function(e) {
      return false;
    };
  }

  /**
   * 基本パーツ導入
   */
  setBase () {
    $(GROBAL.talk_top.element.talk_category_block).append(
      '<p id="day_part">' + 'DAY' +
      '</p>' +
      '<p id="current_day">' +
      '</p>' +
      '<div id="current_day_line">' +
      '</div>' +
      '<div id="current_border_part">' +
      '</div>' +
      '<p id="talk_top_down">' +
      '</p>' +
      '<div class="talk_top_wrapper"><p id="talk_top_down_desc">' +
      '</p></div>' +
      '<div id="category_table_box">' +
      '<table id="category_table">' +
      '</table>' +
      '</div>'
    );
    this.common.leftImg = this.getParam(GROBAL.talk_top.value.left_img);
    this.common.rightImg = this.getParam(GROBAL.talk_top.value.right_img);
    document.getElementById(GROBAL.talk_top.element.current_day).innerHTML = this.common.currentDay.toString().padStart(2, '0');
    this.setCategory();
  }

  /**
  * カテゴリテーブル作成
  */
  setCategory() {
    let that = this;
    $.ajax({
      url: 'lib/json/talking_type.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        that.common.categoryList = data;
      },
      error: function(data) {
        console.log("error");
      },
      complete: function(data) {
        let append_item = "";
        for (var i = 0; i < that.common.categoryList.length; i++) {
          let day_number = Number(that.common.categoryList[i].talking_id);
          let class_name = "done";
          if (that.common.currentDay == day_number) {
            class_name = "current";
            document.getElementById(GROBAL.talk_top.element.talk_top_down).innerHTML = rubyContent(that.common.categoryList[i].name, that.common.categoryList[i].name_phonetic, that.common.categoryList[i].name_phonetic_info);
            document.getElementById(GROBAL.talk_top.element.talk_top_down_desc).innerHTML = rubyContent(that.common.categoryList[i].description, that.common.categoryList[i].description_phonetic, that.common.categoryList[i].description_phonetic_info);
          } else if (that.common.currentDay < day_number) {
            class_name = "future";
          }
          if (day_number % 5 == 1) {
            append_item = append_item + '<tr>' + 
              '<td class="day_button ' + class_name + '" day_id="' + day_number + '">' + day_number.toString().padStart(2, '0') + '</td>';
          } else if (day_number % 5 == 0 || Number(that.common.categoryList.length) - 1 == i) {
            append_item = append_item + 
              '<td class="day_button ' + class_name + '" day_id="' + day_number + '">' + day_number.toString().padStart(2, '0') + '</td>' + '</tr>';
          } else {
            append_item = append_item + 
              '<td class="day_button ' + class_name + '" day_id="' + day_number + '">' + day_number.toString().padStart(2, '0') + '</td>';
          }
          if (Number(that.common.categoryList.length) - 1 == i) {
            $(GROBAL.talk_top.element.category_table).append(append_item);
          }
        }
        $(GROBAL.talk_top.element.category_table_box).mCustomScrollbar({
          mouseWheel: false,
          theme: "inset-3-dark",
          callbacks: {
            onOverflowY: function() {
              $(GROBAL.talk_top.element.category_table_box).css("left", "2%");
              $(GROBAL.talk_top.element.category_table_box).css("width", "98%");
            }
          }
        });
      }
    });
    
    $(GROBAL.main.element.category_table).on("click", GROBAL.main.element.day_button, {talk_top:this} , function(e) {
      e.data.talk_top.toTalkSelect($(this).attr(GROBAL.main.value.day_id));
      e.data.talk_top.common.currentNumber += 1;
      e.data.talk_top.common.dayId = $(this).attr(GROBAL.main.value.day_id);
    });
    
  }

  /**
  * カテゴリ選択時
  */
  toTalkSelect(type) {
    let that = this;
    if (type <= that.common.currentDay) {
      // 対象の親質問情報を取得してからパーツ表示
      that.common.dbRequest = indexedDB.open(GROBAL.common.value.db_name);
      that.common.dbRequest.onsuccess = function (e) {
        let db     = e.target.result;
        let parent_records_tran   = db.transaction("t_parent_records", "readwrite");
        let parent_records_store  = parent_records_tran.objectStore("t_parent_records");
        let get_parent_info = parent_records_store.get(type);
        get_parent_info.onsuccess = function (e) {
          if (e.target.result !== undefined) {
            that.common.questionRecords = e.target.result.records.split(',');
          }
          // 隠す処理
          that.common.emptyParts(GROBAL.talk_top.value.talk_category_block);
          that.common.hideParts(GROBAL.main.value.transition);
          // 選択されたカテゴリIDのセット
          that.common.talkingId = type;
          // 文言セット
          that.setSentence(type);
          // 表示変更
          that.common.changeParts(GROBAL.talk_top.value.transition);
        }
      }
    }
  }

  /**
  * 中身のセット
  */
  setSentence(type) {
    $(GROBAL.question_detail.value.question_select_block).append(
      '<div class="theme_wrapper">' +
      '<p class="day_part">' + 'DAY' +
      '</p>' +
      '<p id="current_day_question">' +
      '</p>' +
      '<div class="current_day_line">' +
      '</div>' +
      '<p id="theme_text_question">' +
      '</p>' +
      '<div class="theme_img"><img id="theme_role_question"></div>' +
      '<div class="theme_bottom_text"><p id="theme_bottom_text_question"></div>' +
      '</p>' +
      '<div class="border_part">' +
      '</div>' +
      '</div>' +
      '<div id="select_table_box">' +
      '<table id="question_select_table" class="select_table">' +
      '</table>' +
      '</div>'
    );
    document.getElementById(GROBAL.question_detail.element.current_day_question).innerHTML = this.common.currentDay.toString().padStart(2, '0');
    document.getElementById(GROBAL.question_detail.element.theme_text_question).innerHTML = rubyContent(this.common.categoryList[this.common.currentDay].name, this.common.categoryList[this.common.currentDay].name_phonetic, this.common.categoryList[this.common.currentDay].name_phonetic_info);
    this.common.setRoleImage(this.common.leftImg, 3, GROBAL.question_detail.value.theme_role_question);
    if (this.common.leftImg == "mother") {
      document.getElementById(GROBAL.question_detail.element.theme_bottom_text_question).innerHTML = GROBAL.talk_top.view.talk_mother;
    } else {
      document.getElementById(GROBAL.question_detail.element.theme_bottom_text_question).innerHTML = GROBAL.talk_top.view.talk_father;
    }
    this.setSelect(type);
  }

  /**
  * 質問選択テーブル作成
  */
  setSelect(type) {
    let that = this;
    $.ajax({
      url: 'lib/json/question_base_' + type + '.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        that.common.questionList = data;
      },
      error: function(data) {
        console.log("error");
      },
      complete: function(data) {
        for (var i = 0; i < that.common.questionList.length; i++) {
          let class_name = "new";
          
          for (let j = 0; j < that.common.questionRecords.length; j++) {
            if (that.common.questionList[i].question_id == that.common.questionRecords[j]) {
              class_name = "done";
              break;
            }
          }

          // ルビ振り
          let text = rubyContent(that.common.questionList[i].question_text_ja, that.common.questionList[i].question_text_ja_phonetic, that.common.questionList[i].question_text_ja_phonetic_info);
          
          $(GROBAL.talk_top.element.question_select_table).append(
            '<tr>' +
            '<td class="question_select_button ' + class_name + '" question_id="' + that.common.questionList[i].question_id + '">' + text + '</td>' +
            '</tr>'
          );
        }
        $(GROBAL.talk_top.element.select_table_box).mCustomScrollbar({
          mouseWheel: false,
          theme: "inset-3-dark",
          callbacks: {
            onOverflowY: function() {
              $(GROBAL.talk_top.element.select_table_box).css("left", "2%");
              $(GROBAL.talk_top.element.select_table_box).css("width", "98%");
            }
          }
        });
      }
    });
    $(GROBAL.main.element.question_select_table).on("click", GROBAL.main.element.question_select_button,{talk_top:this}, function(e) {
      e.data.talk_top.toQuestionSelect($(this).attr(GROBAL.main.value.question_id));
      e.data.talk_top.common.currentNumber += 1;
    });
  }

  /**
  * パラメータの値を取得する
  */
  getParam (name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

}