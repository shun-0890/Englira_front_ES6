// This is a JavaScript file

import {CommonParts} from "./common";
import {TalkTop} from "./talk_top";
import {QuestionDetail} from "./question_detail";
import {AnswerSelect} from "./answer_select";
import {AnswerDetail} from "./answer_detail";
import {Config} from "./config";

$(function () {

    // インスタンス初期化
    let common = new CommonParts();
    let talk_top = new TalkTop(common);
    let question_detail = new QuestionDetail(common);
    let answer_select = new AnswerSelect(common);
    let answer_detail = new AnswerDetail(common);

    // 会話開始時
    talk_top.setWho();
    talk_top.setCategory(function(data : Array<Config.CategoryList>) {
        common.categoryList = data;
    });
    common.changeParts(Config.VALUES.main.value.transition);

    // 会話カテゴリが選択された時
    $(Config.VALUES.main.element.category_table).on("click", Config.VALUES.main.element.talking_button, function() {
        talk_top.toTalkSelect($(this).attr(Config.VALUES.main.value.talking_id));
        talk_top.setSelect($(this).attr(Config.VALUES.main.value.talking_id), function(data : Array<Config.QuestionList>) {
            common.questionList = data;
        });
    });

    // 質問種別が選択された時
    $(Config.VALUES.main.element.question_select_table).on("click", Config.VALUES.main.element.question_select_button, function() {
        question_detail.toQuestionSelect($(this).attr(Config.VALUES.main.value.question_id));
    });

    // 回答スタートがクリックされた時
    $(Config.VALUES.main.element.answer_start_button).on("click", function() {
        answer_select.answerStart();
        answer_select.setAnswerTable(function(data : Array<Config.AnswerList>) {
            common.answerList = data;
        });
    });

    // 回答基本が選択された時
    $(Config.VALUES.main.element.answer_select_table).on("click", Config.VALUES.main.element.answer_select_button, function() {
        if ($(this).attr(Config.VALUES.main.value.answer_type) == Config.VALUES.main.value.type) {
            answer_select.toAnswerSelect($(this).attr(Config.VALUES.main.value.answer_id));
            answer_select.setAnswerSelectDetailTable(function(data : Array<Config.WordList>) {
                common.wordList = data;
            });
        } else {
            answer_detail.toViewAnswerDetail($(this).attr(Config.VALUES.main.value.answer_id), $(this).attr(Config.VALUES.main.value.answer_type));
        }
    });

    // 回答詳細が選択された時
    $(Config.VALUES.main.element.select_word_table).on("click", Config.VALUES.main.element.select_word_button, function() {
        answer_detail.toViewAnswerDetail($(this).attr(Config.VALUES.main.value.word_detail_id));
    });

    // ワンポイント表示がクリックされた時
    $(Config.VALUES.main.element.one_point_start_button).on("click", function() {
        answer_detail.toViewOnePoint();
    });

    // もっと話すがクリックされた時
    $(Config.VALUES.main.element.restart_button).on("click", function() {
        answer_detail.restartTalk();
    });


});