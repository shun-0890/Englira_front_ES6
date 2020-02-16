// This is a JavaScript file

import {CommonParts} from "./common";
import {Config} from "./config";

export class AnswerDetail {

    private common : CommonParts;

    // コンストラクタ
    constructor (common : CommonParts) {
        this.common = common;
    }

    /**
     * 質問内容選択時
     */
    public toViewAnswerDetail (type : any, mode=Config.VALUES.answer_detail.value.mode) {
        if (mode == Config.VALUES.answer_detail.value.mode) {
            // 空にする処理
            this.common.emptyParts(Config.VALUES.answer_detail.value.answer_detail_select_block);
            this.common.wordDetailId = type;
        } else {
            // 空にする処理
            this.common.emptyParts(Config.VALUES.answer_detail.value.answer_select_block);
            this.common.answerId = type;
            this.common.wordDetailId = mode;
        }
        // 回答詳細文言セット
        this._setAnswerDetailTable(mode);
        // 画像系セット
        this._setForAnswerDetail();
        // 表示パーツ変更
        this.common.changeParts(Config.VALUES.answer_detail.value.transition_first);
    }

    /**
     * 回答詳細文言セット
     */
    private _setAnswerDetailTable(mode : string) {
        let local_word_detail_id = this.common.wordDetailId;
        let local_answer_id = this.common.answerId
        let target_answer = this.common.answerList.filter(function (item, index) {
            if (item.answer_id == local_answer_id) return true;
        });
        if (mode == Config.VALUES.answer_detail.value.mode) {
            let target_word = this.common.wordList.filter  (function (item, index) {
                if (item.word_detail_id == local_word_detail_id) return true;
            });
            var local_text_ja =
                target_answer[0].answer_text_front_ja +
                target_word[0].word_detail_text_ja +
                target_answer[0].answer_text_rear_ja;
            var local_text_en =
                target_answer[0].answer_text_front_en +
                target_word[0].word_detail_text_en +
                target_answer[0].answer_text_rear_en;
            var local_text_en_phonetic =
                target_answer[0].answer_text_front_en_phonetic +
                target_word[0].word_detail_text_en_phonetic +
                target_answer[0].answer_text_rear_en_phonetic;
        } else {
            var local_text_ja =
                target_answer[0].answer_text_front_ja +
                target_answer[0].answer_text_rear_ja;
            var local_text_en =
                target_answer[0].answer_text_front_en +
                target_answer[0].answer_text_rear_en;
            var local_text_en_phonetic =
                target_answer[0].answer_text_front_en_phonetic +
                target_answer[0].answer_text_rear_en_phonetic;
        }

        this.common.createDetailBlock(
            Config.VALUES.answer_detail.value.answer_table,
            local_text_ja,
            local_text_en,
            local_text_en_phonetic,
            Config.VALUES.answer_detail.view.voice
        );

    }

    /**
     * 画像系セット
     */
    private _setForAnswerDetail () {
        this.common.setRoleImage(this.common.rightImg, "3", Config.VALUES.answer_detail.value.answer_detail_img);
    }

    /**
     * ワンポイント画面表示
     */
    public toViewOnePoint() {
        // 空にする処理
        this.common.emptyParts(Config.VALUES.answer_detail.value.answer_detail_block);
        // ワンポイント詳細セット
        this._setOnePointTable();
        // 画像セット
        //document.getElementById("restart_img").src="img/restart.png";
        // 表示パーツ変更
        this.common.changeParts(Config.VALUES.answer_detail.value.transition_second);
    }

    /**
     * ワンポイント詳細セット
     */
    private _setOnePointTable () {
        $(Config.VALUES.answer_detail.element.one_point_top).html(Config.VALUES.answer_detail.view.one_point);
        let local_question_id = this.common.questionId;
        let target_question = this.common.questionList.filter(function (item, index) {
            if (item.question_id == local_question_id) return true;
        });
        let local_answer_id = this.common.answerId;
        let target_answer = this.common.answerList.filter(function (item, index) {
            if (item.answer_id == local_answer_id) return true;
        });

        this.common.createDetailBlock(
            Config.VALUES.answer_detail.value.one_point_question_table,
            target_question[0].question_text_ja,
            target_question[0].question_text_en,
            target_question[0].question_text_en_phonetic,
            target_question[0].one_point,
            Config.VALUES.answer_detail.value.table_type
        );
        let local_text_ja =
            target_answer[0].answer_text_front_ja +
            Config.VALUES.answer_detail.view.example_text +
            target_answer[0].answer_text_rear_ja;
        let local_text_en =
            target_answer[0].answer_text_front_en +
            Config.VALUES.answer_detail.view.example_text +
            target_answer[0].answer_text_rear_en;
        let local_text_en_phonetic =
            target_answer[0].answer_text_front_en_phonetic +
            Config.VALUES.answer_detail.view.example_text +
            target_answer[0].answer_text_rear_en_phonetic;
        this.common.createDetailBlock(
            Config.VALUES.answer_detail.value.one_point_answer_table,
            local_text_ja,
            local_text_en,
            local_text_en_phonetic,
            target_answer[0].one_point,
            Config.VALUES.answer_detail.value.table_type
        );
/*        $(Config.VALUES.answer_detail.element.one_point_question_table_box).mCustomScrollbar({
            mouseWheel: false,
            theme: "inset-3-dark",
            callbacks: {
                onOverflowY: function() {
                    $(Config.VALUES.answer_detail.element.one_point_question_table_box).css("left", "2%");
                    $(Config.VALUES.answer_detail.element.one_point_question_table_box).css("width", "98%");
                }
            }
        });*/
        $(Config.VALUES.answer_detail.element.listening_en_inner).css("background", "#fff8d6");
        $(Config.VALUES.answer_detail.element.listening_en_inner).css("border-color", "#ffea8a")
    }

    /**
     * トップに戻る
     */
    public restartTalk() {
        window.location.href = 'index.html';
    }
}
