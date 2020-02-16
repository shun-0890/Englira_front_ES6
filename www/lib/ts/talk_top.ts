// This is a JavaScript file

import {CommonParts} from "./common";
import {Config} from "./config";

export class TalkTop {

    private common: CommonParts;
    public categoryList : Array<Config.CategoryList>;

    // コンストラクタ
    constructor (common: CommonParts) {
        this.common = common;
        this.categoryList = [];
    }


    /**
     * 役割を設定する
     */
    public setWho() {
        this.common.leftImg = this._getParam(Config.VALUES.talk_top.value.left_img);
        this.common.rightImg = this._getParam(Config.VALUES.talk_top.value.right_img);
        this.common.setRoleImage(this.common.leftImg, "2", Config.VALUES.talk_top.value.role_img);
        $(Config.VALUES.talk_top.element.talk_top_down).html(Config.VALUES.talk_top.view.talk_top_down);
    }

/*    /!**
     * カテゴリテーブル作成test20191118
     *!/
    private _loadData(url: string) {
        return new Promise(resolve => {
/!*            let xhr = new XMLHttpRequest();
            xhr.onload = ()=> {
                resolve(JSON.parse(xhr.response));
            };
            xhr.open("GET", url);
            xhr.send(null);*!/
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function(data : Array<Config.CategoryList>) {
                    resolve(data);
                }
            });
        });
    }
/!*    private _loadData(url: string, callBack) {
        var xhr = new XMLHttpRequest();
        xhr.onload = callBack;
        xhr.open("GET", url);
        xhr.send(null);
    }*!/*/


    /**
     * カテゴリテーブル作成
     */
    public setCategory(callback: (data: Array<Config.CategoryList>) => void) {
        let temp : Array<Config.CategoryList> = [];
        $.ajax({
            url: 'lib/json/talking_type.json',
            type: 'GET',
            dataType: 'json',
            success: function(data : Array<Config.CategoryList>) {
                temp = data;
            },
            error: function() : void {
                console.log("error");
            },
            complete: function() {
                for (let i = 0; i < temp.length; i += 2) {
                    if (temp[i + 1]) {
                        $(Config.VALUES.talk_top.element.category_table).append(
                            '<tr>' +
                            '<td class="talking_button" talking_id="' + temp[i].talking_id + '">' + temp[i].name + '</td>' +
                            '<td class="talking_button" talking_id="' + temp[i + 1].talking_id + '">' + temp[i + 1].name + '</td>' +
                            '</tr>'
                        );
                    } else {
                        $(Config.VALUES.talk_top.element.category_table).append(
                            '<tr>' +
                            '<td class="talking_button" talking_id="' + temp[i].talking_id + '">' + temp[i].name + '</td>' +
                            '</tr>'
                        );
                    }
                }
                callback(temp);
            }
        });
    }

    /**
     * カテゴリ選択時
     */
    public toTalkSelect(type: any) {
        // 空にする処理
        this.common.emptyParts(Config.VALUES.talk_top.value.talk_category_block);
        // 文言セット
        this._setSentence(type);
        // 表示変更
        this.common.changeParts(Config.VALUES.talk_top.value.transition);
    }

    /**
     * 文言を設定する
     */
    private _setSentence(type: any) {
        $(Config.VALUES.talk_top.element.talk_select_down).html(Config.VALUES.talk_top.view.talk_select_down);
        /*document.getElementById("talk_select_up").innerHTML = common_var.this_category_list[type - 1].name;*/
    }

    /**
     * 質問選択テーブル作成
     */
     public setSelect(type: any, callback: (data: Array<Config.QuestionList>) => void) {
        let temp : Array<Config.QuestionList> = [];
        $.ajax({
            url: 'lib/json/question_base_' + type + '.json',
            type: 'GET',
            dataType: 'json',
            success: function(data : Array<Config.QuestionList>) {
                temp = data;
            },
            error: function() {
                console.log("error");
            },
            complete: function() {
                for (let i = 0; i < temp.length; i++) {
                    $(Config.VALUES.talk_top.element.question_select_table).append(
                        '<tr>' +
                        '<td class="question_select_button" question_id="' + temp[i].question_id + '">' + temp[i].question_text_ja + '</td>' +
                        '</tr>'
                    );
                }
                callback(temp);
/*                $(Config.VALUES.talk_top.element.select_table_box).mCustomScrollbar({
                    mouseWheel: false,
                    theme: "inset-3-dark",
                    callbacks: {
                        onOverflowY: function() {
                            $(Config.VALUES.talk_top.element.select_table_box).css("left", "2%");
                            $(Config.VALUES.talk_top.element.select_table_box).css("width", "98%");
                        }
                    }
                });*/
            }
        });
    }

    /**
     * パラメータの値を取得する
     */
    private _getParam (name: string): string {
        let url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return '';
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

}