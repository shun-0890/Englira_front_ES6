// This is a JavaScript file

class TalkTop {

  // コンストラクタ
  constructor (common, question_detail) {
    this.common = common;
    this.question_detail = question_detail;
  }
 
  /**
  * 役割を設定する
  */
  setWho() {
    this.setBase();
  }

  /**
   * 基本パーツ導入
   */
  setBase () {
    $(GROBAL.talk_top.element.talk_category_block).append(
      '<p id="talk_top_down">' +
      '</p>' +
      '<div id="category_table_box">' +
      '<table id="category_table">' +
      '</table>' +
      '</div>'
    );
    this.common.leftImg = this.getParam(GROBAL.talk_top.value.left_img);
    this.common.rightImg = this.getParam(GROBAL.talk_top.value.right_img);
    this.common.setRoleImage(this.common.leftImg, 2, GROBAL.talk_top.value.role_img);
    document.getElementById(GROBAL.talk_top.element.talk_top_down).innerHTML = GROBAL.talk_top.view.talk_top_down;
    this.setCategory();
  }

  /**
  * カテゴリテーブル作成
  */
  setCategory() {
    $.ajax({
      url: 'lib/json/talking_type.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        common_var.this_category_list = data;
      },
      error: function(data) {
        console.log("error");
      },
      complete: function(data) {
        for (var i = 0; i < common_var.this_category_list.length; i += 2) {
          if (common_var.this_category_list[i + 1]) {
            let name_one = rubyContent(common_var.this_category_list[i].name,common_var.this_category_list[i].name_phonetic,common_var.this_category_list[i].name_phonetic_info);
            let name_two = rubyContent(common_var.this_category_list[i + 1].name,common_var.this_category_list[i + 1].name_phonetic,common_var.this_category_list[i + 1].name_phonetic_info);
            $(GROBAL.talk_top.element.category_table).append(
              '<tr>' +
              '<td class="talking_button" talking_id="' + common_var.this_category_list[i].talking_id + '">' + name_one + '</td>' +
              '<td class="talking_button" talking_id="' + common_var.this_category_list[i + 1].talking_id + '">' + name_two + '</td>' +
              '</tr>'
            );
            
          } else {
            let name_one = rubyContent(common_var.this_category_list[i].name,common_var.this_category_list[i].name_phonetic,common_var.this_category_list[i].name_phonetic_info);
            $(GROBAL.talk_top.element.category_table).append(
              '<tr>' +
              '<td class="talking_button" talking_id="' + common_var.this_category_list[i].talking_id + '">' + name_one + '</td>' +
              '</tr>'
            );
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
    
    $(GROBAL.main.element.category_table).on("click", GROBAL.main.element.talking_button, {talk_top:this} , function(e) {
      e.data.talk_top.toTalkSelect($(this).attr(GROBAL.main.value.talking_id));
      e.data.talk_top.common.currentNumber += 1;
    });
    
  }

  /**
  * カテゴリ選択時
  */
  toTalkSelect(type) {
    // 隠す処理
    this.common.emptyParts(GROBAL.talk_top.value.talk_category_block);
    this.common.hideParts(GROBAL.main.value.transition);
    // 選択されたカテゴリIDのセット
    this.common.talkingId = type;
    // 文言セット
    this.setSentence(type);
    // 表示変更
    this.common.changeParts(GROBAL.talk_top.value.transition);
  }

  /**
  * 中身のセット
  */
  setSentence(type) {
    $(GROBAL.question_detail.value.question_select_block).append(
      '<p id="talk_select_down">' + 
      '</p>' +
      '<div id="select_table_box">' +
      '<table id="question_select_table" class="select_table">' +
      '</table>' +
      '</div>'
    );
    document.getElementById(GROBAL.talk_top.element.talk_select_down).innerHTML = GROBAL.talk_top.view.talk_select_down;
    /*document.getElementById("talk_select_up").innerHTML = common_var.this_category_list[type - 1].name;*/
    this.setSelect(type);
  }

  /**
  * 質問選択テーブル作成
  */
  setSelect(type) {
    $.ajax({
      url: 'lib/json/question_base_' + type + '.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        common_var.this_question_list = data;
      },
      error: function(data) {
        console.log("error");
      },
      complete: function(data) {
        for (var i = 0; i < common_var.this_question_list.length; i++) {
          $(GROBAL.talk_top.element.question_select_table).append(
            '<tr>' +
            '<td class="question_select_button" question_id="' + common_var.this_question_list[i].question_id + '">' + common_var.this_question_list[i].question_text_ja + '</td>' +
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
      e.data.talk_top.question_detail.toQuestionSelect($(this).attr(GROBAL.main.value.question_id));
      e.data.talk_top.common.currentNumber += 1;
    });
  }

  /**
  * パラメータの値を取得する
  */
  getParam (name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

}