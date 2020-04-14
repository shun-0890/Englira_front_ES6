// This is a JavaScript file

const GROBAL = {
  top : {
    img : {
      mother_1 : "img/mother_1.png",
      mother_2 : "img/mother_2.png",
      father_1 : "img/father_1.png",
      father_2 : "img/father_2.png",
      girl_1 : "img/girl_1.png",
      girl_2 : "img/girl_2.png",
      boy_1 : "img/boy_1.png",
      boy_2 : "img/boy_2.png"
    },
    element : {
      top_img : ".top_img",
      talk_start_block : ".talk_start_block",
      role_select_block : ".role_select_block",
      top_left_img : ".top_left_img",
      top_left_mother : "#top_left_mother",
      top_left_father : "#top_left_father",
      top_right_img : ".top_right_img",
      top_right_girl : "#top_right_girl",
      top_right_boy : "#top_right_boy",
      init_button : "#init_button",
      set_role : "#set_role",
      start_button : "#talk_start_button"
    },
    value : {
      mother : "mother",
      father : "father",
      boy : "boy",
      girl : "girl",
      left : "left",
      right : "right",
      loading : ".loading_page",
      top_transition : ".top_transition",
      role_transition : ".role_transition"
    }
  },
  main : {
    element : {
      category_table : "#category_table",
      day_button : ".day_button",
      question_select_table : "#question_select_table",
      question_select_button : ".question_select_button",
      answer_start_button : "#answer_start_button",
      answer_select_table : "#answer_select_table",
      answer_select_button : ".answer_select_button",
      select_word_table : "#select_word_table",
      select_word_button : ".select_word_button",
      one_point_start_button : "#one_point_start_button",
      restart_button : "#restart_button",
      question_table : "#question_table",
      answer_table : "#answer_table", 
      start_voice : ".listening_en_inner"
    },
    value : {
      transition : ".top_transition",
      role_transition : ".role_transition",
      day_id : "day_id",
      question_id : "question_id",
      answer_type : "answer_type",
      answer_id : "answer_id",
      word_detail_id : "word_detail_id",
      selected_id : "selected_id",
      type : "normal"
    }
  },
  talk_top : {
    element : {
      talk_category_block : ".talk_category_block",
      talk_top_down : "talk_top_down",
      category_table : "#category_table",
      category_table_box : "#category_table_box",
      talk_select_down : "talk_select_down",
      question_select_table : "#question_select_table",
      select_table_box : "#select_table_box",
      current_day : "current_day",
      talk_top_down_desc : "talk_top_down_desc"
    },
    value : {
      left_img : "first",
      right_img : "second",
      role_img : "#talk_top_img",
      talk_category_block : ".talk_category_block",
      transition : ".talk_transition"
    },
    view : {
      talk_top_down : "どんな<ruby>英会話<rt>えいかいわ</rt></ruby>をしますか？",
      talk_select_down : "<ruby>会話<rt>かいわ</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んでください",
      talk_mother: "お<ruby>母<rt>かあ</rt></ruby>さんから話しかけましょう",
      talk_father: "お<ruby>父<rt>とう</rt></ruby>さんから話しかけましょう"
    }
  },
  question_detail : {
    element : {
      current_day_question : "current_day_question",
      theme_text_question : "theme_text_question",
      theme_bottom_text_question : "theme_bottom_text_question"
    },
    value : {
      question_select_block : ".question_select_block",
      transition : ".question_transition",
      question_img : "#question_img",
      question_table_box : "#question_table_box",
      question_table : "#question_table",
      theme_role_question : "#theme_role_question"
    },
    view : {
      voice : "<ruby>音声<rt>おんせい</rt></ruby>で<ruby>聴<rt>き</rt></ruby>く"
    }
  },
  answer_select : {
    element : {
      answer_question_text_table : "#answer_question_text_table",
      answer_select_up : "answer_select_up",
      answer_select_down : "answer_select_down",
      answer_select_table : "#answer_select_table",
      select_table_box_ans : "#select_table_box_ans",
      answer_detail_select : "answer_detail_select",
      answer_detail_select_word : "answer_detail_select_word",
      select_word_table : "#select_word_table",
      current_day_answer : "current_day_answer",
      theme_text_answer : "theme_text_answer",
      theme_bottom_text_answer : "theme_bottom_text_answer"
    },
    value : {
      question_detail_block : ".question_detail_block",
      transition_first : ".answer_select_transition",
      question_top_img : "#question_top_img",
      answer_top_img : "#answer_top_img",
      answer_select_block : ".answer_select_block",
      transition_second : ".answer_detail_select_transition",
      answer_select_detail_img : "#answer_select_detail_img",
      theme_role_answer : "#theme_role_answer"
    },
    view : {
      answer_select_up : "<ruby>返答<rt>へんとう</rt></ruby>をえらんでね！",
      answer_select_down : "には<ruby>好<rt>す</rt></ruby>きな<ruby>言葉<rt>ことば</rt></ruby>をえらべるよ！",
      answer_detail_select : "にはいる<ruby>言葉<rt>ことば</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んでね"
    }
  },
  answer_detail : {
    element : {
      one_point_top : "one_point_top",
      one_point_question_table_box : "#one_point_question_table_box",
      listening_en_inner : ".listening_en_inner",
      modal_text_down_content : "modal_text_down_content",
      current_day_one_point : "current_day_one_point",
      theme_text_one_point : "theme_text_one_point"
    },
    value : {
      mode : "normal",
      answer_detail_select_block : ".answer_detail_select_block",
      answer_select_block : ".answer_select_block",
      transition_first : ".answer_detail_transition",
      answer_table : "#answer_table",
      answer_detail_img : "#answer_detail_img",
      answer_detail_block : ".answer_detail_block",
      one_point_block : ".one_point_block",
      transition_second : ".one_point_transition",
      one_point_question_table : "#one_point_question_table",
      one_point_answer_table : "#one_point_answer_table",
      table_type : "one_point",
      answer_detail_select_modal_transition : ".answer_detail_select_modal_transition",
      answer_detail_select_modal : ".answer_detail_select_modal",
      select_modal_table : "#select_modal_table",
      close_button : ".close_button"
    },
    view : {
      voice : "<ruby>音声<rt>おんせい</rt></ruby>で<ruby>聴<rt>き</rt></ruby>く",
      one_point : "<ruby>One Point<rt>ワンポイント</rt></ruby>",
      example_text : "〇〇〇〇"
    }
  },
  common : {
    element : {
      back_button : ".back_button",
      top_back_button : ".top_back_button",
    },
    value : {
      storage_base : "gs://englira-beta.appspot.com/",
      file_type : ".mp4",
      db_name : "sampleDB10"
    }
  }
}

const common_parts = {
  this_left_img: Symbol(),
  this_right_img: Symbol(),
  this_question_id: Symbol(),
  this_answer_id: Symbol(),
  this_word_id: Symbol(),
  this_word_detail_id: Symbol(),
  this_answer_type: Symbol(),
  this_current_number: Symbol(),
  // test funami 20200305
  this_category_list: Symbol(),
  this_question_list: Symbol(),
  this_answer_list: Symbol(),
  this_word_list: Symbol(),
  this_selected_question: Symbol(),
  this_question_records: Symbol(),
  this_answer_records: Symbol(),
  this_db_request: Symbol(),
  this_current_day: Symbol(),
  this_day_id: Symbol()
}

class CommonParts {
  constructor () {
    this[common_parts.this_left_img] = "";
    this[common_parts.this_right_img] = "";
    this[common_parts.this_question_id] = "";
    this[common_parts.this_answer_id] = "";
    this[common_parts.this_word_id] = "";
    this[common_parts.this_answer_type] = "";
    this[common_parts.this_current_number] = 0;
    this[common_parts.this_category_list] = [];
    this[common_parts.this_question_list] = [];
    this[common_parts.this_answer_list] = [];
    this[common_parts.this_word_list] = [];
    this[common_parts.this_selected_question] = [];
    this[common_parts.this_question_records] = "";
    this[common_parts.this_answer_records] = "";
    this[common_parts.this_db_request] = "";
    this[common_parts.this_current_day] = 1;
    this[common_parts.this_day_id] = "";
  }

  // setter・getter
  set leftImg (value) {
    this[common_parts.this_left_img] = value;
  }
  get leftImg () {
    return this[common_parts.this_left_img];
  }

  set rightImg (value) {
    this[common_parts.this_right_img] = value;
  }
  get rightImg () {
    return this[common_parts.this_right_img];
  }

  set questionId (value) {
    this[common_parts.this_question_id] = value;
  }
  get questionId () {
    return this[common_parts.this_question_id];
  }

  set answerId (value) {
    this[common_parts.this_answer_id] = value;
  }
  get answerId () {
    return this[common_parts.this_answer_id];
  }

  set wordId (value) {
    this[common_parts.this_word_id] = value;
  }
  get wordId () {
    return this[common_parts.this_word_id];
  }

  set wordDetailId (value) {
    this[common_parts.this_word_detail_id] = value;
  }
  get wordDetailId () {
    return this[common_parts.this_word_detail_id];
  }

  set answerType (value) {
    this[common_parts.this_answer_type] = value;
  }
  get answerType () {
    return this[common_parts.this_answer_type];
  }

  set currentNumber (value) {
    this[common_parts.this_current_number] = value;
  }
  get currentNumber () {
    return this[common_parts.this_current_number];
  }

  set categoryList (value) {
    this[common_parts.this_category_list] = value;
  }
  get categoryList () {
    return this[common_parts.this_category_list];
  }

  set questionList (value) {
    this[common_parts.this_question_list] = value;
  }
  get questionList () {
    return this[common_parts.this_question_list];
  }

  set answerList (value) {
    this[common_parts.this_answer_list] = value;
  }
  get answerList () {
    return this[common_parts.this_answer_list];
  }

  set wordList (value) {
    this[common_parts.this_word_list] = value;
  }
  get wordList () {
    return this[common_parts.this_word_list];
  }

  set selectedQuestion (value) {
    this[common_parts.this_selected_question] = value;
  }
  get selectedQuestion () {
    return this[common_parts.this_selected_question];
  }

  set questionRecords (value) {
    this[common_parts.this_question_records] = value;
  }
  get questionRecords () {
    return this[common_parts.this_question_records];
  }

  set answerRecords (value) {
    this[common_parts.this_answer_records] = value;
  }
  get answerRecords () {
    return this[common_parts.this_answer_records];
  }

  set dbRequest (value) {
    this[common_parts.this_db_request] = value;
  }
  get dbRequest () {
    return this[common_parts.this_db_request];
  }

  set currentDay (value) {
    this[common_parts.this_current_day] = value;
  }
  get currentDay () {
    return this[common_parts.this_current_day];
  }

  set dayId (value) {
    this[common_parts.this_day_id] = value;
  }
  get dayId () {
    return this[common_parts.this_day_id];
  }

  /**
  * loading完了後のパーツを表示
  */
  static viewDefaultParts() {
    setTimeout(function () {
      $(".top_transition").show();
    }, 1500);
  }

  /**
  * シングルページでのパーツ表示
  */
  changeParts (type) {
    if (this[common_parts.leftImg] !== "") {
      $(type).show();
    } else {
      setTimeout(function () {
        if (this[common_parts.leftImg] !== "") {
          $(type).show();
        } else {
          this.viewDefaultParts();
        }
      }, 100);
      this.changeParts(type);
    }
  }

  /**
  * 空にする処理
  */
  emptyParts (type) {
    $(type).empty();
  }

  /**
  * 隠す処理
  */
  hideParts (transition) {
    $(transition).hide();
  }

  /**
  * 詳細ブロック作成
  */
  createDetailBlock (
    selected_id,
    table_name, 
    text_ja,
    text_en, 
    text_en_phonetic, 
    detail_text,
    table_type='normal',
    role_name="none",
    number=0
  ) {
    if (table_type == 'normal') {
      $(table_name).append(
        '<tr>' +
        '<td class="normal_radius">' + 
        '<div class="text_block_ja"><p>' +
          text_ja + 
        '</p></div>' +
        '<div class="text_block_en"><p>' + 
          text_en + 
        '</p></div><div class="text_block_en_phonetic"><p>[ ' + 
          text_en_phonetic +
        ' ]</p></div>' +
        '<div class="listening_en_inner" selected_id="' + selected_id + '">' +
        '<div class="sound_wrapper"><img class="sound_img" src="img/sounds.png"></div>' +
        '<p>' + 
          detail_text + 
        '</p>' +
        '</div></td>' + 
        '</tr>'
      );
    } else if (table_type == 'one_point') {
      $(table_name).append(
        '<tr>' +
        '<td class="normal_radius">' + 
        '<div class="theme_img"><img id="theme_one_point_img_' + role_name + '"></div>' +
        '<div class="text_block_ja"><p>' +
          text_ja + 
        '</p></div>' +
        '<div class="text_block_en"><p>' + 
          text_en + 
        '</p></div><div class="text_block_en_phonetic"><p>[ ' + 
          text_en_phonetic +
        ' ]</p></div>' +
        '<div class="one_point_inner">' +
        '<p>' + 
          detail_text + 
        '</p>' +
        '</div></td>' + 
        '</tr>'
      );
      this.setRoleImage(role_name, number, "#theme_one_point_img_" + role_name);
    }
  }

  /**
  * 役割画像セット
  */
  setRoleImage (type, number, id) {
    let _value = "";
    switch (type) {
      case "mother" :
        _value = "img/mother_" + number + ".png";
        break;
      case "father" :
        _value = "img/father_" + number + ".png";
        break;
      case "boy" :
        _value = "img/boy_" + number + ".png";
        break;
      case "girl" :
        _value = "img/girl_" + number + ".png";
        break;
    }
    $(id).attr('src', _value);
  }

  /**
  * トップに戻る
  */
  viewTop () {
    window.location.href = 'index.html';
  }


  /**
  * 音声再生
  */
  startTargetVoice (source_type, selected_id) {
    let _file_name = source_type + "_" + selected_id;
    sounds.refFromURL(GROBAL.common.value.storage_base + _file_name + GROBAL.common.value.file_type).getDownloadURL().then((url) => {
      const sound = new Audio(url);
      sound.play();
    });
  }

  /**
  * indexedDB初期化
  */
  initIndexedDB () {
    this.dbRequest = indexedDB.open(GROBAL.common.value.db_name);
    // オブジェクトの初期化
    this.dbRequest.onupgradeneeded = function (e) {
      console.log("create db");
      let db = e.target.result;
      let current_pair_store = db.createObjectStore("t_current_pair", {
        keyPath : 'id'
      });
      let current_day_store = db.createObjectStore("t_current_day", {
        keyPath : 'id'
      });
      let parent_records_store = db.createObjectStore("t_parent_records", {
        keyPath : "id"
      });
      let child_records_store = db.createObjectStore("t_child_records", {
        keyPath : "id"
      });
      // 効かない
      current_day_store.transaction.oncomplete = function (e) {
        let default_data = {
          id : 1,
          current_day : 1
        }
        let target_object = db.transaction("t_current_day", "readwrite").objectStore("t_current_day");
        target_object.put(default_data);
      }
      // 効かない
      current_pair_store.transaction.oncomplete = function (e) {
        let default_data = {
          id : 1,
          parent : "mother",
          child : "boy"
        }
        let target_object = db.transaction("t_current_pair", "readwrite").objectStore("t_current_pair");
        target_object.put(default_data);
      }
      putDefaultData(this);

      let str = "abcdefghijklmnopqrstuvwxyz0123456789";
      //桁数の定義
      var len = 8;
 
      //ランダムな文字列の生成
      var result = "";
      for(var i=0;i<len;i++){
        result += str.charAt(Math.floor(Math.random() * str.length));
      }
      let postData = {
        id : result,
        parent : "mother",
        child : "boy"      
      };
      database.ref('test/test_id').set(postData);
    }

    function putDefaultData (that) {
      that.dbRequest = indexedDB.open(GROBAL.common.value.db_name);
      that.dbRequest.onsuccess = function (e) {
        let db     = e.target.result;
        let current_day_tran      = db.transaction("t_current_day", "readwrite");
        let current_pair_tran     = db.transaction("t_current_pair", "readwrite");
        let current_day_store     = current_day_tran.objectStore("t_current_day");
        let current_pair_store    = current_pair_tran.objectStore ("t_current_pair");
        let default_data_day = {
          id : 1,
          current_day : 1
        }
        let default_data_pair = {
          id : 1,
          parent : "mother",
          child : "boy"
        }
        let put_current_day_records = current_day_store.put(default_data_day);
        let put_current_pair_records = current_pair_store.put(default_data_pair);
        put_current_day_records.onsuccess = function () {
          console.log("put current_day records success");
        }
        put_current_pair_records.onsuccess = function () {
          console.log("put current_pair records success");
        }
      }
    }
  }

  /**
  * 現在の役割情報をセット
  */
  /*
  setCurrentRole (callback) {
    let that = this;
    that.dbRequest = indexedDB.open(GROBAL.common.value.db_name);
    // オブジェクトへの接続が成功した場合
    that.dbRequest.onsuccess = function (e) {
      let db     = e.target.result;
      let tran   = db.transaction("t_current_pair", "readwrite");
      let store  = tran.objectStore("t_current_pair");
      tran.oncomplete = function () {
        //callback(that.leftImg, that.rightImg);
        db.close();
      }
      let get_req = store.getAll();
      get_req.onsuccess = function (e) {
        console.log("current_pair : " , e.target.result);
        that.leftImg = e.target.result[0].parent;
        that.rightImg = e.target.result[0].child;
        console.log("parent : " , e.target.result[0].parent);
        callback(e.target.result[0].parent, that.rightImg);
      };
    }
  }
  */

  /**
  * 選択後の役割情報をセット
  */
  setSelectedRole (parent, child) {
    console.log("parent : " , parent);
    console.log("child : " , child);
    let that = this;
    that.dbRequest = indexedDB.open(GROBAL.common.value.db_name);
    that.dbRequest.onsuccess = function (e) {
      let db     = e.target.result;
      let current_pair_tran      = db.transaction("t_current_pair", "readwrite");
      let current_pair_store     = current_pair_tran.objectStore("t_current_pair");

      // 役割ペア情報の更新
      let pair_data;
      pair_data = {
        id: 1,
        parent: parent,
        child: child
      }
      let put_current_pair_records = current_pair_store.put(pair_data);
      put_current_pair_records.onsuccess = function () {
        console.log("put selected pair records success");
      }
      
      db.close();
    }
  }

  /**
  * indexedDBの中身一旦削除
  */
  deleteIndexedDB () {
    let deleteReq = indexedDB.deleteDatabase(GROBAL.common.value.db_name);

    deleteReq.onsuccess = function(event){
      console.log('db delete success');
      // 存在しないDB名を指定してもこっちが実行される
    }

    deleteReq.onerror = function(){
      console.log('db delete error');
    }
  }

}

/**
* ルビ文字列作成
*/
function rubyContent(content, ruby_content, ruby_info) {
  let result = "";
  let current_position = 0;
  let ruby_content_array = ruby_content.split(',');
  if (ruby_content !== "") {
    for (var i = 0;i < ruby_info.length; i++) {
      let ruby_info_array = ruby_info[i].split(',');
      if (current_position !== ruby_info_array[0]) {
        result = result + content.substring(current_position, Number(ruby_info_array[0]));
      }
      result = result + "<ruby>" + content.substring(ruby_info_array[0], Number(ruby_info_array[1]) + 1) + "<rt>" + ruby_content_array[i] + "</rt></ruby>";
      current_position = Number(ruby_info_array[1]) + 1;
      if (current_position == content.length) {
        return result;
      }
    }
  }
  result = result + content.substring(current_position, Number(content.length));
  return result;
}