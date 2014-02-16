
var window = Ti.UI.createWindow({
	backgroundColor: '#68E',
});

//タイトルラベル
var titleLabel = Ti.UI.createLabel({
	text: '10sec game',
	top: '5%',
});
window.add(titleLabel);

//時間表示ラベル
var timeLabel = Ti.UI.createLabel({
	top: '30%',
	text: '0.00',
	font: {fontSize: 40, fontWeight: 'bold'},
	width: 200,
	textAlign: 'center',
});
window.add(timeLabel);

//「画面タップでスタート」
var textLabel = Ti.UI.createLabel({
	top: '60%',
	text: '画面タップでスタート',
});
window.add(textLabel);


//----イベント-----

//計測中フラグ
var inMeasure = false;
//定期的にラベルを更新するためのinterval
var interval = null;
//スタート時間
var startTime = null;

window.addEventListener('click',function(){
	if(inMeasure){ //計測中の時
		//ラベルの更新を止める
		clearInterval(interval);
		//時間の表示
		timeLabel.visible = true;
		//フラグを戻す
		inMeasure = false;
	}else{
		//スタート時間を取得
		startTime = new Date();
		//時間の表示を消す
		timeLabel.visible = false;
		//フラグを立てる
		inMeasure = true;
		interval = setInterval(function(){
			//現在時間
			var nowTime = new Date();
			//秒数の差を取得し、ミリ秒単位を秒単位になおす
			var sec = Math.round((nowTime.getTime() - startTime.getTime())/10)/100;
			timeLabel.text = sec; //ラベルに時間をセット
		},10);
	}
});


window.open();
