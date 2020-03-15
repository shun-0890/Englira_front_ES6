const path = require('path');

module.exports = {
  // エントリーポイントの設定
  entry: {
    'common': __dirname + '/www/lib/js/common.js',
    'top':  __dirname + '/www/lib/js/top.js',
    'talk_top':  __dirname + '/www/lib/js/talk_top.js',
    'talk_main':  __dirname + '/www/lib/js/talk_main.js',
    'question_detail':  __dirname + '/www/lib/js/question_detail.js',
    'answer_select':  __dirname + '/www/lib/js/answer_select.js',
    'answer_detail':  __dirname + '/www/lib/js/answer_detail.js'
  },
  output: {
    // モジュールバンドルを行った結果を出力する場所やファイル名の指定
    // "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
    path: path.resolve(__dirname, 'www/js/dist'),
    filename: '[name].js'
  },
  devServer: {
    // webpack-dev-serverの公開フォルダ
    contentBase: path.join(__dirname,'node_modules')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',   //loader名
          options: {                //Babelの設定
            presets: ['@babel/env']
          }
        }
      }
    ]
    /*
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
    */
  }
};