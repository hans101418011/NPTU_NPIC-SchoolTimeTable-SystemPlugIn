javascript: (function () {
    try {
        jQuery();
    } catch (e) {
        s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
        document.getElementsByTagName('head')[0].appendChild(s);
    }
    setTimeout(function () {
        var tdnums = $('table:first td').size();
        var row = Math.floor(tdnums / 22);
        var cel = 22;
        var array1 = new Array(row);
        for (i = 0; i < cel; i++) {
            array1[i] = new Array(cel);
        }
        for (i = 0; i < row; i++) {
            for (j = 0; j < cel; j++) {
                array1[i][j] = $('table:first td:eq(' + (i * 22 + j) + ')').text();
            }
        }
        var text1 = "";
        var x = 2,
            y = 3,
            z = 1;
        var d1 = 8;
        var d2 = 10;
        var subject = new Array(d1);
        for (i = 0; i < d2; i++) {
            subject[i] = new Array(d2);
        }
        for (x = 1; x < d1; x++) {
            for (y = 1; y < d2; y++) {
                subject[y][x] = "";
            }
        }
        for (x = 1; x < d1; x++) {
            for (y = 1; y < d2; y++) {
                for (z = 1; z < row; z++) {
                    if (array1[z][x + 9].indexOf(y) >= 0) {
                        subject[y][x] += array1[z][1] + "<br />" + array1[z][9] + "<br />" + array1[z][18] + "<br />";
                    }
                }
            }
        }
        subject[0][1] = "一";
        subject[0][2] = "二";
        subject[0][3] = "三";
        subject[0][4] = "四";
        subject[0][5] = "五";
        subject[0][6] = "六";
        subject[0][7] = "日";
        subject[1][0] = "8:10~9:00";
        subject[2][0] = "9:10~10:00";
        subject[3][0] = "10:10~11:00";
        subject[4][0] = "11:10~12:00";
        subject[5][0] = "13:20~14:10";
        subject[6][0] = "14:20~15:10";
        subject[7][0] = "15:20~16:10";
        subject[8][0] = "16:20~17:10";
        subject[9][0] = "17:20~18:10";
  	
        for (x = 0; x < d2; x++) {
            text1 += '<tr>';
            for (y = 0; y < d1; y++) {
                text1 += '<td>' + ((subject[x][y]) ? subject[x][y] : " ") + ' </td>';
            }
            text1 += '</tr>';
        }
        $('body').prepend('  <style type="text/css">
	body {
		text-align: center;	
	}
	table {
		margin-right: auto;
		margin-left: auto;
  		border: 1px solid #000;
  		border-collapse: collapse;
	}
	tr, td {
  		border: 1px solid #000;
		text-align: center;
	}
  </style> <table id="t1" border="1">' + text1 + '</table>');
    }, 100)
})()
