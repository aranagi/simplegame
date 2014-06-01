//スコア画面

var window = Ti.UI.createWindow({
	backgroundColor: '#6E8',
});

var titleLabel = Ti.UI.createLabel({
	text: 'スコア',
	top: '5%',
});
window.add(titleLabel);

//スコア一覧
var view = Ti.UI.createView({
	top: '10%',
	height: '70%',
});
window.add(view);
view.add(createScoreView());

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

function createScoreView(){
	//スコアview
	var view = Ti.UI.createView({
		height: '100%',
		width: '100%',
		layout: 'vertical',
	});
		
	//---タイトル---
	view.add(createScoreRow('順位','スコア'));

	//TODO:どっかで余計なスコアを削除する
	//上位10件スコア取得
	var rowData = scoreDB.execute('SELECT * FROM SCORE ORDER BY SCORE LIMIT 10');
	
	var i = 0;
	while(rowData.isValidRow()){
		Ti.API.info(i);
		i++;
		scoreText = rowData.fieldByName('SCORE');
	    view.add(createScoreRow(i, scoreText));
	    rowData.next();
	}
	
	rowData.close();

	return view;	
}

function createScoreRow(noText, scoreText){
	// (5) 15 (5) 70 (5)
	var row = Ti.UI.createView({
		width: 300,
		height: '9%',
		layout: 'horizontal',
	});
	//順位
	var no = Ti.UI.createLabel({
		width: '15%',
		height: '100%',
		left: '5%',
	});
	//スコア
	var score = Ti.UI.createLabel({
		width: '70%',
		height: '100%',
		left: '5%',
	});
	row.add(no);
	row.add(score);
	
	if(noText != null) 		no.text = noText;
	if(scoreText != null) 	score.text = scoreText;
	
	return row;
}
