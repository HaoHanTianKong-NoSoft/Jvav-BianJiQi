# Jvav-编辑器介绍
## 语言 Language
- [中文](README.md)
## 关于
Jvav-编辑器 是适用于[Jvav语言](https://jvav.space/)的编辑器，并且已获得[UraSoft](https:urasoft.top)站长的授权，由[NoSoft](https:nosoft.urasoft.top)开发。
## 与[UraSoft](https:urasoft.top)（或[Jvav语言](https://jvav.space/)）的关系
[NoSoft](https:nosoft.urasoft.top)是[UraSoft](https:urasoft.top)下属网站。
Jvav-编辑器已与[Jvav语言](https://jvav.space/)达成合作，合作内容：NoSoft帮忙开发语法提示。
## 版本
编辑器版本：1.0.0（多彩界面）
Jvav语法版本：Jvav DSK 6.1([点击此处跳转到语法帮助](https://docs.jvav.space/))
## 更新说明
1.0.0 初始版本
## 不用安装的Jvav-编辑器网页端
[点击此处跳转](https:nosoft.urasoft.top/jvav)或者复制并跳转下列网址
`nosoft.urasoft.top/jvav`
## 安装须知
无，直接下载，使用即可
## 如何新增主题
#### 注：name替换为自己想取的名字、img替换为演示图片
- ### 新建主题css
1. 在Java根目录新建`name.css`
2. 写入
```css
			.iconfont {
			  font-family: "iconfont" !important;
			  font-size: 18px;
			  font-style: normal;
			  -webkit-font-smoothing: antialiased;
			  -moz-osx-font-smoothing: grayscale;
			}
			.center{
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				width: 100%;
			}
			.middle{
				position: absolute;
				text-align: center;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
			:root{
				background-color:#2b2b2b ;
				color: #f1f1f1;
			}
			#codetext{
				display: inline-block;
				width: 80%;
				height: 60%;
				resize: none;
				border: none;
				outline: none;
				font-size: 20px;
				transition: all .3s;
				padding: 10px;
				border-radius: 10px;
				font-family: 'microsoft yahei';
				font-weight: bold;
			}
			#codetext:focus{
				box-shadow: 0 0 10px #000;
			}
			#toplist{
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				width: 100%;
				height: 66px;
				background-color: #fff;
				box-shadow: 0 0 10px #000;
				color: #000;
				font-weight: lighter;
			}
			#toplist p{
				display: inline-block;
				margin-right: 10px;
			}
			.toplist-btn{
				cursor: pointer;
				border-radius: 5px;
				padding: 5px;
				transition: all .3s;
			}
			.toplist-btn:hover{
				background-color: rgba(113, 113, 113, .6);
			}
			.toplist-btn:active{
				background-color: rgba(113, 113, 113, .4);
			}
```
3. 修改
```
.iconfont为图标字体 不建议修改
.center为代码键入Div 不建议修改
.middle未知 不建议修改
:root为界面 可以修改背景颜色、字体颜色
#codetext为文本框 可修改
#toplist为上方菜单
.toplist-btn为上方菜单文字按钮
```
4. HTML添加
进入``newfile.html``
找到第三十四行
```javascript
var about ='XXXXXX'
```
在XXXXXX后面添加HTML代码：
```html
<p id="toplist-pifu" class="toplist-btn iconfont" style="color:blue" onclick="pf name ()"><img src="img.png" height="300px"/><br/>name</p>
```
5. 修改javascript
找到第八十五行，回车下一行
输入javascipt代码：
```javascript
        function pf name (){
            var obj = document.getElementById("css");
            obj.setAttribute("href","name.css");
		}
```
6. 添加预览图
添加你的主题的预览图，路径：img/img.png
7. 大功告成
