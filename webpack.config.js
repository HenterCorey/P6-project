var path = require('path');
var webpack = require('webpack');  
//var ExtractTextPlugin = require("extract-text-webpack-plugin");  //单独分离css
const CleanWebpackPlugin = require('clean-webpack-plugin');    //每次构建之前删掉目录
const CopyWebpackPlugin = require('copy-webpack-plugin');           //拷贝文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');      //压缩文件
var HtmlWebpackPlugin = require('html-webpack-plugin');        //模板文件调用
module.exports={
	entry: './src/js/index.js',                                //入口文件路径
	output: {                                                   //输出路径、文件名
		filename: 'bundle.js',              
		path: path.resolve(__dirname,'./dist')  
	},
	module: {                                                 //模块目录
		rules: [{                                           //css文件整合进‘bundle.js’中
			test: /\.css$/,
			use: ['style-loader','css-loader']
//			use: ExtractTextPlugin.extract({
//                fallback: 'style-loader',
//                use: 'css-loader'
//            })
		}]
	},
	plugins: [                                                //插件目录
	    new UglifyJsPlugin(),                                 //执行压缩---调用
	    new HtmlWebpackPlugin({                               //模板调用---调用
	    	template: 'src/index.html',
	    	filename: 'index.html'
	    }),
	    new CopyWebpackPlugin([{                             //拷贝文件---调用
	    	from: 'src/images',
            to: 'images'
	    }]),
	   new CleanWebpackPlugin(),                               //默认构建之前删除目录---调用
//	   new ExtractTextPlugin('style.css'),                                      //！！！！！！！！！！！！分离失败
	]
}