// This is a JavaScript file

import {Config} from "./config";

export class CommonParts {

    // 変数
    private _left_img: string;
    private _right_img: string;
    private _question_id: string;
    private _answer_id: string;
    private _word_id: string;
    private _word_detail_id: string;

    // リスト
    private _category_list: Array<Config.CategoryList>;
    private _question_list: Array<Config.QuestionList>;
    private _answer_list: Array<Config.AnswerList>;
    private _word_list: Array<Config.WordList>;
    private _selected_question: Config.QuestionList;

    constructor () {
        this._left_img = "";
        this._right_img = "";
        this._question_id = "";
        this._answer_id = "";
        this._word_id = "";
        this._word_detail_id = "";
        this._category_list = [];
        this._question_list = [];
        this._answer_list = [];
        this._word_list = [];
        this._selected_question = {
            question_id : "",
            question_text_ja : "",
            question_text_ja_phonetic : "",
            question_text_en : "",
            question_text_en_phonetic : "",
            one_point : ""
        };
    }

    // setter・getter
    set leftImg (value: string) {
        this._left_img = value;
    }
    get leftImg () {
        return this._left_img;
    }

    set rightImg (value: string) {
        this._right_img = value;
    }
    get rightImg () {
        return this._right_img;
    }

    set questionId (value: string) {
        this._question_id = value;
    }
    get questionId () {
        return this._question_id;
    }

    set answerId (value: string) {
        this._answer_id = value;
    }
    get answerId () {
        return this._answer_id;
    }

    set wordId (value: string) {
        this._word_id = value;
    }
    get wordId () {
        return this._word_id;
    }

    set wordDetailId (value: string) {
        this._word_detail_id = value;
    }
    get wordDetailId () {
        return this._word_detail_id;
    }

    set categoryList (value: Array<Config.CategoryList>) {
        this._category_list = value;
    }
    get categoryList () {
        return this._category_list;
    }

    set questionList (value: Array<Config.QuestionList>) {
        this._question_list = value;
    }
    get questionList () {
        return this._question_list;
    }

    set answerList (value: Array<Config.AnswerList>) {
        this._answer_list = value;
    }
    get answerList () {
        return this._answer_list;
    }

    set wordList (value: Array<Config.WordList>) {
        this._word_list = value;
    }
    get wordList () {
        return this._word_list;
    }

    set selectedQuestion (value: Config.QuestionList) {
        this._selected_question = value;
    }
    get selectedQuestion () {
        return this._selected_question;
    }

    /**
     * loading完了後のパーツを表示
     */
    public viewDefaultParts() {
        setTimeout(function () {
            $(".top_transition").show();
        }, 1500);
    }

    /**
     * シングルページでのパーツ表示
     */
    public changeParts (type: string) {
        if (this.leftImg !== "") {
            $(type).show();
        } else {
            setTimeout(this._timeOutDetail, 100, type);
            this.changeParts(type);
        }
    }

    /**
     * タイムアウト内の処理
     */
    private _timeOutDetail (type: string) {
        if (this.leftImg !== "") {
            $(type).show();
        } else {
            this.viewDefaultParts();
        }
    }

    /**
     * 空にする処理
     */
    public emptyParts (type: string) {
        if (type == Config.VALUES.common.value.question_select_block) {
            $(Config.VALUES.common.element.talk_top_role).empty();
        }
        $(type).empty();
    }

    /**
     * 詳細ブロック作成
     */
    public createDetailBlock (
        table_name: string,
        text_ja: string,
        text_en: string,
        text_en_phonetic: string,
        detail_text: string,
        table_type='normal'
    ) {
        if (table_type == Config.VALUES.common.value.normal) {
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
        } else if (table_type == Config.VALUES.common.value.one_point) {
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
    public setRoleImage (type: string, number: string, id: string) {
        switch (type) {
            case Config.VALUES.common.value.mother :
                //document.getElementById(id).src="img/mother_" + number + ".png";
                $(id).attr('src', 'img/mother_' + number + '.png');
                break;
            case Config.VALUES.common.value.father :
                //document.getElementById(id).src="img/father_" + number + ".png";
                $(id).attr('src', 'img/father_' + number + '.png');
                break;
            case Config.VALUES.common.value.boy :
                //document.getElementById(id).src="img/boy_" + number + ".png";
                $(id).attr('src', 'img/boy_' + number + '.png');
                break;
            case Config.VALUES.common.value.girl :
                //document.getElementById(id).src="img/girl_" + number + ".png";
                $(id).attr('src', 'img/girl_' + number + '.png');
                break;
        }
    }

}