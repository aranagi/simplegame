//スコア画面

var window = Ti.UI.createWindow({
	backgroundColor: '#6E8',
});

var titleLabel = Ti.UI.createLabel({
	text: 'スコア',
	top: '5%',
});
window.add(titleLabel);

//画面を閉じるボタン
var closeButton = Ti.UI.createButton({
	bottom: '10%',
	title: '閉じる',
});
window.add(closeButton);

closeButton.addEventListener('click',function(){
	window.close();
});

exports.window = window;
