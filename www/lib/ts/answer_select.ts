// This is a JavaScript file

import {CommonParts} from "./common";
import {Config} from "./config";

export class AnswerSelect {

    private common : CommonParts;

    // コンストラクタ
    constructor (common : CommonParts) {
        this.common = common;
    }

    /**
     * 質問内容選択時
     */
    public answerStart() {
        // 空にする処理
        this.common.emptyParts(Config.VALUES.answer_select.value.question_detail_block);
        // 質問内容セット
        this._setQuestionText();
        // 画像と文言セット
        this._setWhoAnswer();
        // 表示変更
        this.common.changeParts(Config.VALUES.answer_select.value.transition_first);
    }

    /**
     * 質問内容セット
     */
    private _setQuestionText () {
        $(Config.VALUES.answer_select.element.answer_question_text_table).append(
            '<tr>' +
            '<td>' +
            '<div class="left_table_img">' +
            '<img id="question_top_img" src="">' +
            '</div>' +
            '<div class="right_table_text">' +
            this.common.selectedQuestion.question_text_ja +
            '</div>' +
            '</td>' +
            '</tr>'
        );
        this.common.setRoleImage(this.common.leftImg, "3", Config.VALUES.answer_select.value.question_top_img);
    }

    /**
     * 画像と文言を設定する
     */
    private _setWhoAnswer () {
        this.common.setRoleImage(this.common.rightImg, "2", Config.VALUES.answer_select.value.answer_top_img);
        $(Config.VALUES.answer_select.element.answer_select_up).html(Config.VALUES.answer_select.view.answer_select_up);
        $(Config.VALUES.answer_select.element.answer_select_down).html("<p class='question_mark'>?</p><p class='question_text'>" + Config.VALUES.answer_select.view.answer_select_down + "</p>");
    }

    /**
     * 回答選択テーブル作成
     */
    public setAnswerTable (callback: (data: Array<Config.AnswerList>) => void) {
        let temp : Array<Config.AnswerList> = [];
        $.ajax({
            url: 'lib/json/answer_base_' + this.common.questionId + '.json',
            type: 'GET',
            dataType: 'json',
            success: function(data : Array<Config.AnswerList>) {
                temp = data;
            },
            error: function() {
                console.log("error");
            },
            complete: function() {
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].select_text == " ") {
                        $(Config.VALUES.answer_select.element.answer_select_table).append(
                            '<tr>' +
                            '<td class="answer_select_button" answer_id="' + temp[i].answer_id + '" answer_type="no_text">' +
                            '<p class="answer_front">' +
                            temp[i].answer_text_front_ja +
                            '</p>' +
                            '<p class="answer_rear">' +
                            temp[i].answer_text_rear_ja +
                            '</p>' +
                            '</td>' +
                            '</tr>'
                        );
                    } else {
                        $(Config.VALUES.answer_select.element.answer_select_table).append(
                            '<tr>' +
                            '<td class="answer_select_button" answer_id="' + temp[i].answer_id + '" answer_type="normal">' +
                            '<p class="answer_front">' +
                            temp[i].answer_text_front_ja +
                            '</p>' +
                            '<p class="question_mark_text">' +
                            temp[i].select_text +
                            '</p>' +
                            '<p class="answer_rear">' +
                            temp[i].answer_text_rear_ja +
                            '</p>' +
                            '</td>' +
                            '</tr>'
                        );
                    }

                }
/*                $(Config.VALUES.answer_select.element.select_table_box_ans).mCustomScrollbar({
                    mouseWheel: false,
                    theme: "inset-3-dark",
                    callbacks: {
                        onOverflowY: function() {
                            $(Config.VALUES.answer_select.element.select_table_box_ans).css("left", "2%");
                            $(Config.VALUES.answer_select.element.select_table_box_ans).css("width", "98%");
                        }
                    }
                });*/
                callback(temp);
            }
        });
    }

    /**
     * 回答詳細テーブル作成
     */
    public toAnswerSelect (type : any) {
        let local_answer_id = this.common.answerId = type;
        let target = this.common.answerList.filter(function (item, index) {
            if (item.answer_id == local_answer_id) return true;
        });
        this.common.wordId = target[0].word_id;
        // 空にする処理
        this.common.emptyParts(Config.VALUES.answer_select.value.answer_select_block);
        // 画像と文言セット
        this._setForAnswer(target[0].answer_text_front_ja, target[0].select_text, target[0].answer_text_rear_ja);
        // パーツ表示
        this.common.changeParts(Config.VALUES.answer_select.value.transition_second);
    }

    /**
     * 画像と文言セット
     */
    private _setForAnswer (front : string, text : string, rear : string) {
        this.common.setRoleImage(this.common.rightImg, "2", Config.VALUES.answer_select.value.answer_select_detail_img);
        $(Config.VALUES.answer_select.element.answer_detail_select).html("<p class='question_mark'>?</p><p class='question_text'>" + Config.VALUES.answer_select.view.answer_detail_select + "</p>");
        $(Config.VALUES.answer_select.element.answer_detail_select_word).html("<p class='answer_front'>" + front + "</p>" + "<p class='answer_mark'>" + text + "</p>" + "<p class='answer_rear'>" + rear + "</p>");
    }

    /**
     * 回答詳細選択テーブル作成
     */
    public setAnswerSelectDetailTable (callback: (data: Array<Config.WordList>) => void) {
        let temp : Array<Config.WordList> = [];
        $.ajax({
            url: 'lib/json/answer_detail_' + this.common.wordId + '.json',
            type: 'GET',
            dataType: 'json',
            success: function(data : Array<Config.WordList>) {
                temp = data;
            },
            error: function() {
                console.log("error");
            },
            complete: function() {
                for (let i = 0; i < temp.length; i += 2) {
                    if (temp[i + 1]) {
                        $(Config.VALUES.answer_select.element.select_word_table).append(
                            '<tr>' +
                            '<td class="select_word_button" word_detail_id="' + temp[i].word_detail_id + '">' + temp[i].word_detail_text_ja + '</td>' +
                            '<td class="select_word_button" word_detail_id="' + temp[i + 1].word_detail_id + '">' + temp[i + 1].word_detail_text_ja + '</td>' +
                            '</tr>'
                        );
                    } else {
                        $(Config.VALUES.answer_select.element.select_word_table).append(
                            '<tr>' +
                            '<td class="select_word_button" word_detail_id="' + temp[i].word_detail_id + '">' + temp[i].word_detail_text_ja + '</td>' +
                            '</tr>'
                        );
                    }
                }
                callback(temp);
            }
        });
    }

}