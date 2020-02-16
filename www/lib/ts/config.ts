// 定数宣言ファイル

export namespace Config {
    export interface CategoryList {
        talking_id : string;
        name : string;
        name_phonetic : string;
    }

    export interface QuestionList {
        question_id : string;
        question_text_ja : string;
        question_text_ja_phonetic : string;
        question_text_en : string;
        question_text_en_phonetic : string;
        one_point : string;
    }

    export interface AnswerList {
        answer_id : string;
        answer_text_front_ja : string;
        answer_text_front_ja_phonetic : string;
        answer_text_rear_ja : string;
        answer_text_rear_ja_phonetic : string;
        answer_text_front_en : string;
        answer_text_front_en_phonetic : string;
        answer_text_rear_en : string;
        answer_text_rear_en_phonetic : string;
        word_id : string;
        select_text : string;
        select_text_phonetic : string;
        one_point : string;
    }

    export interface WordList {
        word_detail_id : string;
        word_detail_text_ja : string;
        word_detail_text_ja_phonetic : string;
        word_detail_text_en : string;
        word_detail_text_en_phonetic : string;
    }

    export const VALUES : {
        [index: string] : {
            [index: string]: {
                [index: string] : string
            }
        }
    } = {
        common : {
            element : {
                talk_top_role : ".talk_top_role"
            },
            value : {
                mother : "m",
                father : "f",
                boy : "b",
                girl : "g",
                question_select_block : ".question_select_block",
                normal : "normal",
                one_point : "one_point"
            }
        },
        top : {
            img : {
                father_img : "img/father_1.png",
                mother_img : "img/mother_1.png",
                girl_img : "img/girl_1.png",
                boy_img : "img/boy_1.png"
            },
            element : {
                top_img : ".top_img",
                top_left_img : "#top_left_img",
                top_right_img : "#top_right_img",
                start_button : "#talk_start_button"
            },
            value : {
                mother : "m",
                father : "f",
                boy : "b",
                girl : "g",
                left : "left",
                right : "right"
            }
        },
        main : {
            element : {
                category_table : "#category_table",
                talking_button : ".talking_button",
                question_select_table : "#question_select_table",
                question_select_button : ".question_select_button",
                answer_start_button : "#answer_start_button",
                answer_select_table : "#answer_select_table",
                answer_select_button : ".answer_select_button",
                select_word_table : "#select_word_table",
                select_word_button : ".select_word_button",
                one_point_start_button : "#one_point_start_button",
                restart_button : "#restart_button"
            },
            value : {
                transition : ".top_transition",
                talking_id : "talking_id",
                question_id : "question_id",
                answer_type : "answer_type",
                answer_id : "answer_id",
                word_detail_id : "word_detail_id",
                type : "normal"
            }
        },
        talk_top : {
            element : {
                talk_top_down : "#talk_top_down",
                category_table : "#category_table",
                category_table_box : "#category_table_box",
                talk_select_down : "#talk_select_down",
                question_select_table : "#question_select_table",
                select_table_box : "#select_table_box"
            },
            value : {
                left_img : "first",
                right_img : "second",
                role_img : "#talk_top_img",
                talk_category_block : ".talk_category_block",
                transition : ".talk_transition"
            },
            view : {
                talk_top_down : "どんな英会話をしますか？",
                talk_select_down : "会話を選んでください"
            }
        },
        question_detail : {
            value : {
                question_select_block : ".question_select_block",
                transition : ".question_transition",
                question_img : "#question_img",
                question_table : "#question_table"
            },
            view : {
                voice : "音声で聴く"
            }
        },
        answer_select : {
            element : {
                answer_question_text_table : "#answer_question_text_table",
                answer_select_up : "#answer_select_up",
                answer_select_down : "#answer_select_down",
                answer_select_table : "#answer_select_table",
                select_table_box_ans : "#select_table_box_ans",
                answer_detail_select : "#answer_detail_select",
                answer_detail_select_word : "#answer_detail_select_word",
                select_word_table : "#select_word_table"
            },
            value : {
                question_detail_block : ".question_detail_block",
                transition_first : ".answer_select_transition",
                question_top_img : "#question_top_img",
                answer_top_img : "#answer_top_img",
                answer_select_block : ".answer_select_block",
                transition_second : ".answer_detail_select_transition",
                answer_select_detail_img : "#answer_select_detail_img"
            },
            view : {
                answer_select_up : "返答をえらんでね！",
                answer_select_down : "には好きな言葉をえらべるよ！",
                answer_detail_select : "にはいる言葉を選んでね"
            }
        },
        answer_detail : {
            element : {
                one_point_top : "#one_point_top",
                one_point_question_table_box : "#one_point_question_table_box",
                listening_en_inner : ".listening_en_inner"
            },
            value : {
                mode : "normal",
                answer_detail_select_block : ".answer_detail_select_block",
                answer_select_block : ".answer_select_block",
                transition_first : ".answer_detail_transition",
                answer_table : "#answer_table",
                answer_detail_img : "#answer_detail_img",
                answer_detail_block : ".answer_detail_block",
                transition_second : ".one_point_transition",
                one_point_question_table : "#one_point_question_table",
                one_point_answer_table : "#one_point_answer_table",
                table_type : "one_point"
            },
            view : {
                voice : "音声で聴く",
                one_point : "One Point",
                example_text : "〇〇〇〇"
            }
        }
    }
}