"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a JavaScript file
var TalkTop =
/*#__PURE__*/
function () {
  // コンストラクタ
  function TalkTop(common) {
    _classCallCheck(this, TalkTop);

    this.common = common;
  }
  /**
  * 役割を設定する
  */


  _createClass(TalkTop, [{
    key: "setWho",
    value: function setWho() {
      this.common.leftImg = this.getParam(GROBAL.talk_top.value.left_img);
      this.common.rightImg = this.getParam(GROBAL.talk_top.value.right_img);
      this.common.setRoleImage(this.common.leftImg, 2, GROBAL.talk_top.value.role_img);
      document.getElementById(GROBAL.talk_top.element.talk_top_down).innerHTML = GROBAL.talk_top.view.talk_top_down;
    }
    /**
    * カテゴリテーブル作成
    */

  }, {
    key: "setCategory",
    value: function setCategory() {
      $.ajax({
        url: 'lib/json/talking_type.json',
        type: 'GET',
        dataType: 'json',
        success: function success(data) {
          common_var.this_category_list = data;
        },
        error: function error(data) {
          console.log("error");
        },
        complete: function complete(data) {
          for (var i = 0; i < common_var.this_category_list.length; i += 2) {
            if (common_var.this_category_list[i + 1]) {
              $(GROBAL.talk_top.element.category_table).append('<tr>' + '<td class="talking_button" talking_id="' + common_var.this_category_list[i].talking_id + '">' + common_var.this_category_list[i].name + '</td>' + '<td class="talking_button" talking_id="' + common_var.this_category_list[i + 1].talking_id + '">' + common_var.this_category_list[i + 1].name + '</td>' + '</tr>');
            } else {
              $(GROBAL.talk_top.element.category_table).append('<tr>' + '<td class="talking_button" talking_id="' + common_var.this_category_list[i].talking_id + '">' + common_var.this_category_list[i].name + '</td>' + '</tr>');
            }
          }

          $(GROBAL.talk_top.element.category_table_box).mCustomScrollbar({
            mouseWheel: false,
            theme: "inset-3-dark",
            callbacks: {
              onOverflowY: function onOverflowY() {
                $(GROBAL.talk_top.element.category_table_box).css("left", "2%");
                $(GROBAL.talk_top.element.category_table_box).css("width", "98%");
              }
            }
          });
        }
      });
    }
    /**
    * カテゴリ選択時
    */

  }, {
    key: "toTalkSelect",
    value: function toTalkSelect(type) {
      // 空にする処理
      this.common.emptyParts(GROBAL.talk_top.value.talk_category_block); // 文言セット

      this.setSentence(type); // 表示変更

      this.common.changeParts(GROBAL.talk_top.value.transition);
    }
    /**
    * 文言を設定する
    */

  }, {
    key: "setSentence",
    value: function setSentence(type) {
      document.getElementById(GROBAL.talk_top.element.talk_select_down).innerHTML = GROBAL.talk_top.view.talk_select_down;
      /*document.getElementById("talk_select_up").innerHTML = common_var.this_category_list[type - 1].name;*/

      this.setSelect(type);
    }
    /**
    * 質問選択テーブル作成
    */

  }, {
    key: "setSelect",
    value: function setSelect(type) {
      $.ajax({
        url: 'lib/json/question_base_' + type + '.json',
        type: 'GET',
        dataType: 'json',
        success: function success(data) {
          common_var.this_question_list = data;
        },
        error: function error(data) {
          console.log("error");
        },
        complete: function complete(data) {
          for (var i = 0; i < common_var.this_question_list.length; i++) {
            $(GROBAL.talk_top.element.question_select_table).append('<tr>' + '<td class="question_select_button" question_id="' + common_var.this_question_list[i].question_id + '">' + common_var.this_question_list[i].question_text_ja + '</td>' + '</tr>');
          }

          $(GROBAL.talk_top.element.select_table_box).mCustomScrollbar({
            mouseWheel: false,
            theme: "inset-3-dark",
            callbacks: {
              onOverflowY: function onOverflowY() {
                $(GROBAL.talk_top.element.select_table_box).css("left", "2%");
                $(GROBAL.talk_top.element.select_table_box).css("width", "98%");
              }
            }
          });
        }
      });
    }
    /**
    * パラメータの値を取得する
    */

  }, {
    key: "getParam",
    value: function getParam(name) {
      var url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  }]);

  return TalkTop;
}();