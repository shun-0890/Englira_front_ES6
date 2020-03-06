// This is a JavaScript file

$(function () {

  // インスタンス初期化
  let common = new CommonParts();
  let answer_detail = new AnswerDetail(common);
  let answer_select = new AnswerSelect(common, answer_detail);
  let question_detail = new QuestionDetail(common, answer_select);
  let talk_top = new TalkTop(common, question_detail);

  // 現在の進捗状況を取得しそれに応じた画面表示 20200228
  let result = talk_top.getCurrentDay();
  if (result == false) {
    answer_detail.restartTalk();
  }
  
  // 戻るボタンが押下された時の処理
  $(GROBAL.common.element.back_button).on("click", function() {
    switch (common.currentNumber) {
      case 0:
        answer_detail.restartTalk();
        break;
      case 1:
        common.emptyParts(GROBAL.question_detail.value.question_select_block);
        common.hideParts(GROBAL.talk_top.value.transition);
        talk_top.setBase();
        common.changeParts(GROBAL.main.value.transition);
        break;
      case 2:
        common.emptyParts(GROBAL.answer_select.value.question_detail_block);
        common.hideParts(GROBAL.question_detail.value.transition);
        talk_top.setSentence(common.talkingId);
        common.changeParts(GROBAL.talk_top.value.transition);
        common.changeParts(GROBAL.main.value.role_transition);
        break;
      case 3:
        common.emptyParts(GROBAL.answer_select.value.answer_select_block);
        common.hideParts(GROBAL.answer_select.value.transition_first);
        question_detail.setForQuestionDetail();
        common.changeParts(GROBAL.question_detail.value.transition);
        break;
      case 4:
        common.emptyParts(GROBAL.answer_detail.value.answer_detail_select_block);
        common.hideParts(GROBAL.answer_select.value.transition_second);
        answer_select.answerStart();
        break;
      case 5:
        common.emptyParts(GROBAL.answer_detail.value.answer_detail_block);
        common.hideParts(GROBAL.answer_detail.value.transition_first);
        if (common.answerType == GROBAL.main.value.type) {
          answer_select.toAnswerSelect(common.answerId);
        } else {
          answer_select.answerStart();
          common.currentNumber -= 1;
        }
        break;
      case 6:
        common.emptyParts(GROBAL.answer_detail.value.one_point_block);
        common.hideParts(GROBAL.answer_detail.value.transition_second);
        if (common.answerType == GROBAL.main.value.type) {
          answer_detail.toViewAnswerDetail(common.wordDetailId, common.answerType);
        } else {
          answer_detail.toViewAnswerDetail(common.answerId, common.answerType);
        }
        break;
    }
    common.currentNumber -= 1;
  });
});