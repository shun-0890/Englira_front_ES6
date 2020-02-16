// This is a JavaScript file

const GROBAL = {
  top : {
    img : {
      father_img : "img/father_1.png",
      mother_img : "img/mother_1.png",
      girl_img : "img/girl_1.png",
      boy_img : "img/boy_1.png"
    },
    element : {
      top_img : ".top_img",
      top_left_img : "#top_left_img",
      top_right_img : "#top_right_img",
      start_button : "#talk_start_button"
    },
    value : {
      mother : "m",
      father : "f",
      boy : "b",
      girl : "g",
      left : "left",
      right : "right"
    }
  },
  main : {
    element : {
      category_table : "#category_table",
      talking_button : ".talking_button",
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
      talking_id : "talking_id",
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
      select_table_box : "#select_table_box"
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
      talk_select_down : "<ruby>会話<rt>かいわ</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んでください"
    }
  },
  question_detail : {
    value : {
      question_select_block : ".question_select_block",
      transition : ".question_transition",
      question_img : "#question_img",
      question_table_box : "#question_table_box",
      question_table : "#question_table"
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
      select_word_table : "#select_word_table"
    },
    value : {
      question_detail_block : ".question_detail_block",
      transition_first : ".answer_select_transition",
      question_top_img : "#question_top_img",
      answer_top_img : "#answer_top_img",
      answer_select_block : ".answer_select_block",
      transition_second : ".answer_detail_select_transition",
      answer_select_detail_img : "#answer_select_detail_img"
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
      listening_en_inner : ".listening_en_inner"
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
      table_type : "one_point"
    },
    view : {
      voice : "<ruby>音声<rt>おんせい</rt></ruby>で<ruby>聴<rt>き</rt></ruby>く",
      one_point : "<ruby>One Point<rt>ワンポイント</rt></ruby>",
      example_text : "〇〇〇〇"
    }
  },
  common : {
    element : {
      back_button : ".back_button"
    },
    value : {
      storage_base : "gs://englira-beta.appspot.com/",
      file_type : ".mp4"
    }
  }
}

var common_var = {
  this_category_list: [],
  this_question_list: [],
  this_answer_list: [],
  this_word_list: [],
  this_selected_question: []
}

const common_parts = {
  this_left_img: Symbol(),
  this_right_img: Symbol(),
  this_question_id: Symbol(),
  this_answer_id: Symbol(),
  this_word_id: Symbol(),
  this_word_detail_id: Symbol(),
  this_answer_type: Symbol(),
  this_current_number: Symbol()
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
    table_type='normal'
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
        '<div class="sound_wrapper"><img class="sound_img" src="img/sound.png"></div>' +
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
        '<div class="text_block_ja"><p>' +
          text_ja + 
        '</p></div>' +
        '<div class="text_block_en"><p>' + 
          text_en + 
        '</p></div><div class="text_block_en_phonetic"><p>[ ' + 
          text_en_phonetic +
        ' ]</p></div>' +
        '<div class="listening_en_inner">' +
        '<p>' + 
          detail_text + 
        '</p>' +
        '</div></td>' + 
        '</tr>'
      );
    }
  }

  /**
  * 役割画像セット
  */
  setRoleImage (type, number, id) {
    let _value = "";
    switch (type) {
      case "m" :
        _value = "img/mother_" + number + ".png";
        break;
      case "f" :
        _value = "img/father_" + number + ".png";
        break;
      case "b" :
        _value = "img/boy_" + number + ".png";
        break;
      case "g" :
        _value = "img/girl_" + number + ".png";
        break;
    }
    $(id).attr('src', _value);
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