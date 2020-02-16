// This is a JavaScript file
/**
 * @author Shun Funami
 * @since 2019/11/14
 */

import {CommonParts} from "./common";
/// <reference path="./config.ts" />
import {Config} from "./config";

// メイン処理
$(function () {

    let top = new TopParts();

    setTimeout(top.timeOutDetail, 1000);

    // 役割画像クリック時
    $(Config.VALUES.top.element.top_left_img).on("click", function() {
        top.changeRole(Config.VALUES.top.value.left);
    });
    $(Config.VALUES.top.element.top_right_img).on("click", function() {
        top.changeRole(Config.VALUES.top.value.right);
    });

    // スタートクリック時
    $(Config.VALUES.top.element.start_button).on("click", function() {
        top.talkStart();
    });

});

/**
 * top画面用クラス
 */
class TopParts extends CommonParts {

    private _top_left_img: string;
    private _top_right_img: string;

    constructor () {
        super();
        this._top_left_img = Config.VALUES.top.value.mother;
        this._top_right_img = Config.VALUES.top.value.boy;
    }

    set leftImg (value: string) {
        this._top_left_img = value;
    }

    get leftImg () {
        return this._top_left_img;
    }

    set rightImg (value: string) {
        this._top_right_img = value;
    }

    get rightImg () {
        return this._top_right_img;
    }

    /**
     * 役割クリック時に作動
     * @param type 役割種別
     */
    public changeRole (type: string) {
        if (type == Config.VALUES.top.value.left) {
            if (this.leftImg == Config.VALUES.top.value.mother) {
                //document.getElementById("top_left_img").src="img/father_1.png";
                $(Config.VALUES.top.element.top_left_img).attr('src', Config.VALUES.top.img.father_img);
                this.leftImg = Config.VALUES.top.value.father;
            } else {
                //document.getElementById("top_left_img").src="img/mother_1.png";
                $(Config.VALUES.top.element.top_left_img).attr('src', Config.VALUES.top.img.mother_img);
                this.leftImg = Config.VALUES.top.value.mother;
            }
        } else {
            if (this.rightImg == Config.VALUES.top.value.boy) {
                //document.getElementById("top_right_img").src="img/girl_1.png";
                $(Config.VALUES.top.element.top_right_img).attr('src', Config.VALUES.top.img.girl_img);
                this.rightImg = Config.VALUES.top.value.girl;
            } else {
                //document.getElementById("top_right_img").src="img/boy_1.png";
                $(Config.VALUES.top.element.top_right_img).attr('src', Config.VALUES.top.img.boy_img);
                this.rightImg = Config.VALUES.top.value.boy;
            }
        }
    }

    /**
     * スタートボタンクリック時作動
     */
    public talkStart() {
        window.location.href = 'talk_top.html?first=' + this.leftImg + '&second=' + this.rightImg;
    }

    /**
     * タイムアウト時処理
     */
    public timeOutDetail() {
        $(Config.VALUES.top.element.top_img).css("top", "2%");
        $(Config.VALUES.top.element.top_img).css("left", "15%");
        $(Config.VALUES.top.element.top_img).css("width", "70%");
        super.viewDefaultParts();
    }

}