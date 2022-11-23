function run(){
	var bo = '<b style=display:block;>';
	var ld = '</b>';
	var ft = '<title>';
	var lt = '</title>';
	var fi = '<i>';
	var li = '</i>';
	var selectnone = '<style>:root{user-select:none;}</style>';
	var center = '<style>:root{position: absolute;text-align: center;left: 50%;top: 50%;transform: translate(-50%, -50%);}</style>';
	var fahref = '<a style="text-decoration: none;" href="';
	var fbhref = '" draggable="false"/>';
	var lhref = '</a>';
	var time = new Date();
	var help = 'Jvav DSK 6+ 语法帮助:<br/>help:获取语法帮助(部分)<br/>time:获取当前时间<br/>bo + ld:加粗字体<br/>fi + li:倾斜字体<br/>ft + lt:设置程序标题<br/>selectnone/sn:设置程序不可选中普通文本<br/>center/middle:将显示位置绝对居中(垂直+水平)<br/>提示:语法带+指闭合语法,前后者顺序分明,如:<br/>bo 你好 ld:<b> 你好 </b><br/><a draggable=\'false\' href=\'https://docs.jvav.space/\' target=\'_blank\'>点此查看详细文档</a>'
	var finalcode = code.replace(/time/g,time)
	.replace(/lbold/g,ld)
	.replace(/fbold/g,bo)
	.replace('ftitle',ft)
	.replace('selectnone',selectnone)
	.replace('midcenter',center)
	.replace(/fskew/g,fi)
	.replace(/lskew/g,li)
	.replace('ltitle',lt)
	.replace(/help/g,help)
	.replace(/fahref/g,fahref)
	.replace(/fbhref/g,fbhref)
	.replace(/lhref/g,lhref);
	window.open().document.write(finalcode);
}