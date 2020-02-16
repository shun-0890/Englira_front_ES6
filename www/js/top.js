"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a JavaScript file
// メイン処理
$(function () {
  //var common = new CommonParts();
  var top = new TopParts();
  setTimeout(top.setTimeOutDetail, 1000); // 役割画像クリック時

  $(GROBAL.top.element.top_left_img).on("click", function () {
    top.changeRole(GROBAL.top.value.left);
  });
  $(GROBAL.top.element.top_right_img).on("click", function () {
    top.changeRole(GROBAL.top.value.right);
  }); // スタートクリック時

  $(GROBAL.top.element.start_button).on("click", function () {
    top.talkStart();
  });
}); // 変数群

var top_values = {
  left_img: Symbol(),
  right_img: Symbol()
};

var TopParts =
/*#__PURE__*/
function () {
  function TopParts() {
    _classCallCheck(this, TopParts);

    this[top_values.left_img] = GROBAL.top.value.mother;
    this[top_values.right_img] = GROBAL.top.value.boy;
  }

  _createClass(TopParts, [{
    key: "changeRole",

    /**
    * 役割画像クリック時
    */
    value: function changeRole(type) {
      if (type == GROBAL.top.value.left) {
        if (this.leftImg == GROBAL.top.value.mother) {
          $(GROBAL.top.element.top_left_img).attr('src', GROBAL.top.img.father_img);
          this.leftImg = GROBAL.top.value.father;
        } else {
          $(GROBAL.top.element.top_left_img).attr('src', GROBAL.top.img.mother_img);
          this.leftImg = GROBAL.top.value.mother;
        }
      } else {
        if (this.rightImg == GROBAL.top.value.boy) {
          $(GROBAL.top.element.top_right_img).attr('src', GROBAL.top.img.girl_img);
          this.rightImg = GROBAL.top.value.girl;
        } else {
          $(GROBAL.top.element.top_right_img).attr('src', GROBAL.top.img.boy_img);
          this.rightImg = GROBAL.top.value.boy;
        }
      }
    }
    /**
    * スタートボタンクリック時
    */

  }, {
    key: "talkStart",
    value: function talkStart() {
      window.location.href = 'talk_top.html?first=' + this.leftImg + '&second=' + this.rightImg;
    }
    /**
    * setTimeOut内処理
    */

  }, {
    key: "setTimeOutDetail",
    value: function setTimeOutDetail() {
      $(GROBAL.top.element.top_img).css("top", "2%");
      $(GROBAL.top.element.top_img).css("left", "15%");
      $(GROBAL.top.element.top_img).css("width", "70%");
      CommonParts.viewDefaultParts();
    }
  }, {
    key: "leftImg",
    set: function set(value) {
      this[top_values.left_img] = value;
    },
    get: function get() {
      return this[top_values.left_img];
    }
  }, {
    key: "rightImg",
    set: function set(value) {
      this[top_values.right_img] = value;
    },
    get: function get() {
      return this[top_values.right_img];
    }
  }]);

  return TopParts;
}();