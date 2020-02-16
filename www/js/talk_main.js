"use strict";

// This is a JavaScript file
$(function () {
  // インスタンス初期化
  var common = new CommonParts();
  var talk_top = new TalkTop(common);
  var question_detail = new QuestionDetail(common);
  var answer_select = new AnswerSelect(common);
  var answer_detail = new AnswerDetail(common); // 会話開始時

  talk_top.setWho();
  talk_top.setCategory();
  common.changeParts(GROBAL.main.value.transition); // 会話カテゴリが選択された時

  $(GROBAL.main.element.category_table).on("click", GROBAL.main.element.talking_button, function () {
    talk_top.toTalkSelect($(this).attr(GROBAL.main.value.talking_id));
  }); // 質問種別が選択された時

  $(GROBAL.main.element.question_select_table).on("click", GROBAL.main.element.question_select_button, function () {
    question_detail.toQuestionSelect($(this).attr(GROBAL.main.value.question_id));
  }); // 回答スタートがクリックされた時

  $(GROBAL.main.element.answer_start_button).on("click", function () {
    answer_select.answerStart();
  }); // 回答基本が選択された時

  $(GROBAL.main.element.answer_select_table).on("click", GROBAL.main.element.answer_select_button, function () {
    common.answerType = $(this).attr(GROBAL.main.value.answer_type);

    if (common.answerType == GROBAL.main.value.type) {
      answer_select.toAnswerSelect($(this).attr(GROBAL.main.value.answer_id));
    } else {
      answer_detail.toViewAnswerDetail($(this).attr(GROBAL.main.value.answer_id), common.answerType);
    }
  }); // 回答詳細が選択された時

  $(GROBAL.main.element.select_word_table).on("click", GROBAL.main.element.select_word_button, function () {
    answer_detail.toViewAnswerDetail($(this).attr(GROBAL.main.value.word_detail_id));
  }); // ワンポイント表示がクリックされた時

  $(GROBAL.main.element.one_point_start_button).on("click", function () {
    answer_detail.toViewOnePoint();
  }); // もっと話すがクリックされた時

  $(GROBAL.main.element.restart_button).on("click", function () {
    answer_detail.restartTalk();
  });
});