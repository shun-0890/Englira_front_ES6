// This is a JavaScript file

import {CommonParts} from "./common";
import {Config} from "./config";

export class QuestionDetail {

    private common : CommonParts;

    // コンストラクタ
    constructor (common: CommonParts) {
        this.common = common;
    }

    /**
     * 質問内容選択時
     */
    public toQuestionSelect(type: any) {

        // 空にする処理
        this.common.emptyParts(Config.VALUES.question_detail.value.question_select_block);
        this.common.questionId = type;
        // 質問詳細文言セット
        this._setForQuestionDetail();
        // 画像系セット
        this._setQuestionTable();
        // 表示パーツ変更
        this.common.changeParts(Config.VALUES.question_detail.value.transition);

    }

    /**
     * 画像系セット
     */
    private _setForQuestionDetail () {
        this.common.setRoleImage(this.common.leftImg, "3", Config.VALUES.question_detail.value.question_img);
    }

    /**
     * 質問詳細テーブル作成
     */
    private _setQuestionTable() {
        let local_question_id = this.common.questionId;
        let target = this.common.questionList.filter(function (item, index) {
            if (item.question_id == local_question_id) return true;
        });
        this.common.selectedQuestion = target[0];
        this.common.createDetailBlock(
            Config.VALUES.question_detail.value.question_table,
            this.common.selectedQuestion.question_text_ja,
            this.common.selectedQuestion.question_text_en,
            this.common.selectedQuestion.question_text_en_phonetic,
            Config.VALUES.question_detail.view.voice
        );
    }

}