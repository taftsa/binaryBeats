var rhythmNumber = 0;
var rhythmCode = toCode(rhythmNumber);

function toCode(number) {
    let binaryString = (number / 1).toString(2);
	let paddingLength = 8 - binaryString.length;
    let paddedBinaryString = '0'.repeat(paddingLength) + binaryString;

    return paddedBinaryString;
}

$(document).on('click', '#submit', function(){
	rhythmNumber = document.getElementById("value").value;
	rhythmCode = toCode(rhythmNumber);
	document.getElementById("value").value = "";

	updateBeats(rhythmCode.substring(0, 2), rhythmCode.substring(2, 4), rhythmCode.substring(4, 6), rhythmCode.substring(6, 8));
});

$(document).on('click', '#next', function(){
	if (rhythmNumber < 255) {
		rhythmNumber = rhythmNumber/1 + 1;
		rhythmCode = toCode(rhythmNumber);
		document.getElementById("value").value = "";

		updateBeats(rhythmCode.substring(0, 2), rhythmCode.substring(2, 4), rhythmCode.substring(4, 6), rhythmCode.substring(6, 8));
	};
});

$(document).on('click', '#previous', function(){
	if (rhythmNumber > 0) {
		rhythmNumber = rhythmNumber/1 - 1;
		rhythmCode = toCode(rhythmNumber);
		document.getElementById("value").value = "";

		updateBeats(rhythmCode.substring(0, 2), rhythmCode.substring(2, 4), rhythmCode.substring(4, 6), rhythmCode.substring(6, 8));
	};
});


function updateBeats(b1, b2, b3, b4){
	$('#rhythm').empty();
	
	$('#rhythm').append('<img src="img/' + b1 + '.jpg">');
	$('#rhythm').append('<img src="img/' + b2 + '.jpg">');
	$('#rhythm').append('<img src="img/' + b3 + '.jpg">');
	$('#rhythm').append('<img src="img/' + b4 + '.jpg">');
	
	$('#num').html(rhythmNumber);
	$('#code').html(rhythmCode);
};

$(document).ready(function(){
	updateBeats("00", "00", "00", "00");
});