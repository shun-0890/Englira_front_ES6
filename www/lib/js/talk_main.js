// This is a JavaScript file

$(function () {

  // インスタンス初期化
  var common = new CommonParts();
  var answer_detail = new AnswerDetail(common);
  var answer_select = new AnswerSelect(common, answer_detail);
  var question_detail = new QuestionDetail(common, answer_select);
  var talk_top = new TalkTop(common, question_detail);

  // 現在の進捗取得処理 from indexedDB start 旧 20200226
  /*
  common_var.this_db_request = indexedDB.open(GROBAL.common.value.db_name);
  // オブジェクトの初期化
  common_var.this_db_request.onupgradeneeded = function (e) {
    let db = e.target.result;
    let objcetStore = db.createObjectStore("t_current_day", {
      keyPath : 'id'
    });
    let default_data = {
      id : 1,
      current_day : 1
    }
    objcetStore.transaction.oncomplete = function (e) {
      let targetObject = db.transaction("t_current_day", "readwrite").objectStore("t_current_day");
      targetObject.add(default_data);
    }
  }
  // オブジェクトへの接続が成功した場合
  common_var.this_db_request.onsuccess = function (e) {
    let db     = e.target.result;
    let tran   = db.transaction("t_current_day", "readwrite");
    let store  = tran.objectStore("t_current_day");
    tran.oncomplete = function () {
      console.log("tran finished");
      // 会話開始時
      talk_top.setBase();
      common.changeParts(GROBAL.main.value.transition);
      common.changeParts(GROBAL.main.value.role_transition);
      db.close();
    }
    let get_req = store.getAll();
    get_req.onsuccess = function (e) {
      common_var.this_current_day = Number(e.target.result[0].current_day);
      console.log("result : " , common_var.this_current_day);
    };
  }
  // オブジェクトへの接続が失敗した場合
  common_var.this_db_request.onerror = function(e) {
    answer_detail.restartTalk();
  };
  */
  // 現在の進捗取得処理 from indexedDB end

  // 新DB接続処理 20200227
  /*
  let current_day_dao = new DbAccess(GROBAL.common.value.db_name);
  let result = current_day_dao.getCurrentInfo();
  console.log("result dao : " , result);
  if (result == false) {
    answer_detail.restartTalk();
  } else {
    talk_top.setBase();
    common.changeParts(GROBAL.main.value.transition);
    common.changeParts(GROBAL.main.value.role_transition);
  }
  */
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