var args = arguments[0] || {};

var sData;
var listItems1 = [];
var listItems2 = [];
var listItems3 = [];
var listItems4 = [];
var listItems5 = [];
var listItems6 = [];
var listItems7 = [];
var listItems8 = [];
var listItems9 = [];
var listItems10 = [];
var listItems11 = [];
var listItems12 = [];

(function() {
	var data = '[{"transId":"1","sYear":"2018","sMonth":"3","sDate":"18","name":"Uttam"},{"transId":"2","sYear":"2018","sMonth":"3","sDate":"19","name":"Shubha"},{"transId":"3","sYear":"2018","sMonth":"3","sDate":"20","name":"Madhyam"},{"transId":"4","sYear":"2018","sMonth":"3","sDate":"21","name":"Ashubha"},{"transId":"5","sYear":"2018","sMonth":"3","sDate":"22","name":"18:05 After Uttam"},{"transId":"6","sYear":"2018","sMonth":"3","sDate":"23","name":"Uttam"},{"transId":"7","sYear":"2018","sMonth":"3","sDate":"24","name":"Ashubha"},{"transId":"8","sYear":"2018","sMonth":"3","sDate":"25","name":"Ashubha"},{"transId":"9","sYear":"2018","sMonth":"3","sDate":"26","name":"Shubha"},{"transId":"10","sYear":"2018","sMonth":"3","sDate":"27","name":"Madhyam"},{"transId":"11","sYear":"2018","sMonth":"3","sDate":"28","name":"10:05After Madhyam"},{"transId":"12","sYear":"2018","sMonth":"3","sDate":"29","name":"Ashubha"},{"transId":"13","sYear":"2018","sMonth":"3","sDate":"30","name":"Uttam"},{"transId":"14","sYear":"2018","sMonth":"3","sDate":"31","name":"Shubha"},{"transId":"15","sYear":"2018","sMonth":"4","sDate":"1","name":"Shubha"},{"transId":"16","sYear":"2018","sMonth":"4","sDate":"2","name":"Shubha"},{"transId":"17","sYear":"2018","sMonth":"4","sDate":"3","name":"Ashubha"},{"transId":"18","sYear":"2018","sMonth":"4","sDate":"4","name":"Shubha"},{"transId":"19","sYear":"2018","sMonth":"4","sDate":"5","name":"Ashubha"},{"transId":"20","sYear":"2018","sMonth":"4","sDate":"6","name":"Ashubha"},{"transId":"21","sYear":"2018","sMonth":"4","sDate":"7","name":"14:36 Till Madhyam"},{"transId":"22","sYear":"2018","sMonth":"4","sDate":"8","name":"Ashubha"},{"transId":"23","sYear":"2018","sMonth":"4","sDate":"9","name":"Uttam"},{"transId":"24","sYear":"2018","sMonth":"4","sDate":"10","name":"Shubha"},{"transId":"25","sYear":"2018","sMonth":"4","sDate":"11","name":"Shubha"},{"transId":"26","sYear":"2018","sMonth":"4","sDate":"12","name":"Madhyam"},{"transId":"27","sYear":"2018","sMonth":"4","sDate":"13","name":"Ashubha"},{"transId":"28","sYear":"2018","sMonth":"4","sDate":"14","name":"Ashubha"},{"transId":"29","sYear":"2018","sMonth":"4","sDate":"15","name":"Ashubha"},{"transId":"30","sYear":"2018","sMonth":"4","sDate":"16","name":"Ashubha"},{"transId":"31","sYear":"2018","sMonth":"4","sDate":"17","name":"Madhyam"},{"transId":"32","sYear":"2018","sMonth":"4","sDate":"18","name":"Ashubha"},{"transId":"33","sYear":"2018","sMonth":"4","sDate":"19","name":"12:19 After Ashubha"},{"transId":"34","sYear":"2018","sMonth":"4","sDate":"20","name":"Shubha"},{"transId":"35","sYear":"2018","sMonth":"4","sDate":"21","name":"Ashubha"},{"transId":"36","sYear":"2018","sMonth":"4","sDate":"22","name":"4:20 Till Shubha"},{"transId":"37","sYear":"2018","sMonth":"4","sDate":"23","name":"Shubha"},{"transId":"38","sYear":"2018","sMonth":"4","sDate":"24","name":"Ashubha"},{"transId":"39","sYear":"2018","sMonth":"4","sDate":"25","name":"Madhyam"},{"transId":"40","sYear":"2018","sMonth":"4","sDate":"26","name":"14:30 After Uttam"},{"transId":"41","sYear":"2018","sMonth":"4","sDate":"27","name":"Uttam"},{"transId":"42","sYear":"2018","sMonth":"4","sDate":"28","name":"Shubha"},{"transId":"43","sYear":"2018","sMonth":"4","sDate":"29","name":"Ashubha"},{"transId":"44","sYear":"2018","sMonth":"4","sDate":"30","name":"Ashubha"},{"transId":"45","sYear":"2018","sMonth":"5","sDate":"1","name":"16:02 After Shubha"},{"transId":"46","sYear":"2018","sMonth":"5","sDate":"2","name":"17:45 Till Uttam"},{"transId":"47","sYear":"2018","sMonth":"5","sDate":"3","name":"Ashubha"},{"transId":"48","sYear":"2018","sMonth":"5","sDate":"4","name":"Madhyam"},{"transId":"49","sYear":"2018","sMonth":"5","sDate":"5","name":"Ashubha"},{"transId":"50","sYear":"2018","sMonth":"5","sDate":"6","name":"15:57 Till Uttam"},{"transId":"51","sYear":"2018","sMonth":"5","sDate":"7","name":"Shubha"},{"transId":"52","sYear":"2018","sMonth":"5","sDate":"8","name":"Shubha"},{"transId":"53","sYear":"2018","sMonth":"5","sDate":"9","name":"Shubha"},{"transId":"54","sYear":"2018","sMonth":"5","sDate":"10","name":"10:54 After Ashubha"},{"transId":"55","sYear":"2018","sMonth":"5","sDate":"11","name":"13:42 After Uttam"},{"transId":"56","sYear":"2018","sMonth":"5","sDate":"12","name":"Uttam"},{"transId":"57","sYear":"2018","sMonth":"5","sDate":"13","name":"Shubha"},{"transId":"58","sYear":"2018","sMonth":"5","sDate":"14","name":"Ashubha"},{"transId":"59","sYear":"2018","sMonth":"5","sDate":"15","name":"Ashubha"},{"transId":"60","sYear":"2018","sMonth":"5","sDate":"16","name":"09:00 After Uttam"},{"transId":"61","sYear":"2018","sMonth":"5","sDate":"17","name":"Shubha"},{"transId":"62","sYear":"2018","sMonth":"5","sDate":"18","name":"Ashubha"},{"transId":"63","sYear":"2018","sMonth":"5","sDate":"19","name":"Shubha"},{"transId":"64","sYear":"2018","sMonth":"5","sDate":"20","name":"Shubha"},{"transId":"65","sYear":"2018","sMonth":"5","sDate":"21","name":"Ashubha"},{"transId":"66","sYear":"2018","sMonth":"5","sDate":"22","name":"09:26After Madhyam"},{"transId":"67","sYear":"2018","sMonth":"5","sDate":"23","name":"Ashubha"},{"transId":"68","sYear":"2018","sMonth":"5","sDate":"24","name":"Uttam"},{"transId":"69","sYear":"2018","sMonth":"5","sDate":"25","name":"Ashubha"},{"transId":"70","sYear":"2018","sMonth":"5","sDate":"26","name":"Ashubha"},{"transId":"71","sYear":"2018","sMonth":"5","sDate":"27","name":"Shubha"},{"transId":"72","sYear":"2018","sMonth":"5","sDate":"28","name":"Ashubha"},{"transId":"73","sYear":"2018","sMonth":"5","sDate":"29","name":"Shubha"},{"transId":"74","sYear":"2018","sMonth":"5","sDate":"30","name":"Ashubha"},{"transId":"75","sYear":"2018","sMonth":"5","sDate":"31","name":"Madhyam"},{"transId":"76","sYear":"2018","sMonth":"6","sDate":"1","name":"Ashubha"},{"transId":"77","sYear":"2018","sMonth":"6","sDate":"2","name":"09:00 After Uttam"},{"transId":"78","sYear":"2018","sMonth":"6","sDate":"3","name":"Madhyam"},{"transId":"79","sYear":"2018","sMonth":"6","sDate":"4","name":"Shubha"},{"transId":"80","sYear":"2018","sMonth":"6","sDate":"5","name":"Ashubha"},{"transId":"81","sYear":"2018","sMonth":"6","sDate":"6","name":"Madhyam"},{"transId":"82","sYear":"2018","sMonth":"6","sDate":"7","name":"Ashubha"},{"transId":"83","sYear":"2018","sMonth":"6","sDate":"8","name":"Uttam"},{"transId":"84","sYear":"2018","sMonth":"6","sDate":"9","name":"12:54 After Shubha"},{"transId":"85","sYear":"2018","sMonth":"6","sDate":"10","name":"Shubha"},{"transId":"86","sYear":"2018","sMonth":"6","sDate":"11","name":"Madhyam"},{"transId":"87","sYear":"2018","sMonth":"6","sDate":"12","name":"Ashubha"},{"transId":"88","sYear":"2018","sMonth":"6","sDate":"13","name":"Ashubha"},{"transId":"89","sYear":"2018","sMonth":"6","sDate":"14","name":"02:06 Till Shubha"},{"transId":"90","sYear":"2018","sMonth":"6","sDate":"15","name":"Ashubha"},{"transId":"91","sYear":"2018","sMonth":"6","sDate":"16","name":"Shubha"},{"transId":"92","sYear":"2018","sMonth":"6","sDate":"17","name":"Ashubha"},{"transId":"93","sYear":"2018","sMonth":"6","sDate":"18","name":"Madhyam"},{"transId":"94","sYear":"2018","sMonth":"6","sDate":"19","name":"Ashubha"},{"transId":"95","sYear":"2018","sMonth":"6","sDate":"20","name":"Ashubha"},{"transId":"96","sYear":"2018","sMonth":"6","sDate":"21","name":"Shubha"},{"transId":"97","sYear":"2018","sMonth":"6","sDate":"22","name":"Shubha"},{"transId":"98","sYear":"2018","sMonth":"6","sDate":"23","name":"03:38 Till Shubha"},{"transId":"99","sYear":"2018","sMonth":"6","sDate":"24","name":"Ashubha"},{"transId":"100","sYear":"2018","sMonth":"6","sDate":"25","name":"Shubha"},{"transId":"101","sYear":"2018","sMonth":"6","sDate":"26","name":"Ashubha"},{"transId":"102","sYear":"2018","sMonth":"6","sDate":"27","name":"Ashubha"},{"transId":"103","sYear":"2018","sMonth":"6","sDate":"28","name":"12:20 After Ashubha"},{"transId":"104","sYear":"2018","sMonth":"6","sDate":"29","name":"15:25 After Uttam"},{"transId":"105","sYear":"2018","sMonth":"6","sDate":"30","name":"Ashubha"},{"transId":"106","sYear":"2018","sMonth":"7","sDate":"1","name":"Ashubha"},{"transId":"107","sYear":"2018","sMonth":"7","sDate":"2","name":"Shubha"},{"transId":"108","sYear":"2018","sMonth":"7","sDate":"3","name":"Madhyam"},{"transId":"109","sYear":"2018","sMonth":"7","sDate":"4","name":"Ashubha"},{"transId":"110","sYear":"2018","sMonth":"7","sDate":"5","name":"12:26 After Uttam"},{"transId":"111","sYear":"2018","sMonth":"7","sDate":"6","name":"Uttam"},{"transId":"112","sYear":"2018","sMonth":"7","sDate":"7","name":"Shubha"},{"transId":"113","sYear":"2018","sMonth":"7","sDate":"8","name":"Ashubha"},{"transId":"114","sYear":"2018","sMonth":"7","sDate":"9","name":"Ashubha"},{"transId":"115","sYear":"2018","sMonth":"7","sDate":"10","name":"Uttam"},{"transId":"116","sYear":"2018","sMonth":"7","sDate":"11","name":"Shubha"},{"transId":"117","sYear":"2018","sMonth":"7","sDate":"12","name":"Ashubha"},{"transId":"118","sYear":"2018","sMonth":"7","sDate":"13","name":"Ashubha"},{"transId":"119","sYear":"2018","sMonth":"7","sDate":"14","name":"16:10 After Ashubha"},{"transId":"120","sYear":"2018","sMonth":"7","sDate":"15","name":"Ashubha"},{"transId":"121","sYear":"2018","sMonth":"7","sDate":"16","name":"Ashubha"},{"transId":"122","sYear":"2018","sMonth":"7","sDate":"17","name":"Ashubha"},{"transId":"123","sYear":"2018","sMonth":"7","sDate":"18","name":"Varjya"},{"transId":"124","sYear":"2018","sMonth":"7","sDate":"19","name":"13:43 Till Shubha"},{"transId":"125","sYear":"2018","sMonth":"7","sDate":"20","name":"Shubha"},{"transId":"126","sYear":"2018","sMonth":"7","sDate":"21","name":"09:02 After Ashubha"},{"transId":"127","sYear":"2018","sMonth":"7","sDate":"22","name":"10:48 After Shubha"},{"transId":"128","sYear":"2018","sMonth":"7","sDate":"23","name":"Ashubha"},{"transId":"129","sYear":"2018","sMonth":"7","sDate":"24","name":"Ashubha"},{"transId":"130","sYear":"2018","sMonth":"7","sDate":"25","name":"Ashubha"},{"transId":"131","sYear":"2018","sMonth":"7","sDate":"26","name":"Ashubha"},{"transId":"132","sYear":"2018","sMonth":"7","sDate":"27","name":"Varjya"},{"transId":"133","sYear":"2018","sMonth":"7","sDate":"28","name":"Varjya"},{"transId":"134","sYear":"2018","sMonth":"7","sDate":"29","name":"Madhyam"},{"transId":"135","sYear":"2018","sMonth":"7","sDate":"30","name":"Shubha"},{"transId":"136","sYear":"2018","sMonth":"7","sDate":"31","name":"Ashubha"},{"transId":"137","sYear":"2018","sMonth":"8","sDate":"1","name":"11:25 After Uttam"},{"transId":"138","sYear":"2018","sMonth":"8","sDate":"2","name":"Uttam"},{"transId":"139","sYear":"2018","sMonth":"8","sDate":"3","name":"Uttam"},{"transId":"140","sYear":"2018","sMonth":"8","sDate":"4","name":"14:56 Till Shubha"},{"transId":"141","sYear":"2018","sMonth":"8","sDate":"5","name":"Ashubha"},{"transId":"142","sYear":"2018","sMonth":"8","sDate":"6","name":"14:04 After Uttam"},{"transId":"143","sYear":"2018","sMonth":"8","sDate":"7","name":"Ashubha"},{"transId":"144","sYear":"2018","sMonth":"8","sDate":"8","name":"10:45 After Ashubha"},{"transId":"145","sYear":"2018","sMonth":"8","sDate":"9","name":"08:25 After Shubha"},{"transId":"146","sYear":"2018","sMonth":"8","sDate":"10","name":"Ashubha"},{"transId":"147","sYear":"2018","sMonth":"8","sDate":"11","name":"Ashubha"},{"transId":"148","sYear":"2018","sMonth":"8","sDate":"12","name":"Madhyam"},{"transId":"149","sYear":"2018","sMonth":"8","sDate":"13","name":"Ashubha"},{"transId":"150","sYear":"2018","sMonth":"8","sDate":"14","name":"16:40 Till Uttam"},{"transId":"151","sYear":"2018","sMonth":"8","sDate":"15","name":"Shubha"},{"transId":"152","sYear":"2018","sMonth":"8","sDate":"16","name":"Shubha"},{"transId":"153","sYear":"2018","sMonth":"8","sDate":"17","name":"Ashubha"},{"transId":"154","sYear":"2018","sMonth":"8","sDate":"18","name":"Ashubha"},{"transId":"155","sYear":"2018","sMonth":"8","sDate":"19","name":"14:55 Till Shubha"},{"transId":"156","sYear":"2018","sMonth":"8","sDate":"20","name":"Ashubha"},{"transId":"157","sYear":"2018","sMonth":"8","sDate":"21","name":"Madhyam"},{"transId":"158","sYear":"2018","sMonth":"8","sDate":"22","name":"Ashubha"},{"transId":"159","sYear":"2018","sMonth":"8","sDate":"23","name":"Uttam"},{"transId":"160","sYear":"2018","sMonth":"8","sDate":"24","name":"Shubha"},{"transId":"161","sYear":"2018","sMonth":"8","sDate":"25","name":"15:15 Till Shubha"},{"transId":"162","sYear":"2018","sMonth":"8","sDate":"26","name":"Shubha"},{"transId":"163","sYear":"2018","sMonth":"8","sDate":"27","name":"Madhyam"},{"transId":"164","sYear":"2018","sMonth":"8","sDate":"28","name":"Ashubha"},{"transId":"165","sYear":"2018","sMonth":"8","sDate":"29","name":"Ashubha"},{"transId":"166","sYear":"2018","sMonth":"8","sDate":"30","name":"Shubha"},{"transId":"167","sYear":"2018","sMonth":"8","sDate":"31","name":"Shubha"},{"transId":"168","sYear":"2018","sMonth":"9","sDate":"1","name":"Madhyam"},{"transId":"169","sYear":"2018","sMonth":"9","sDate":"2","name":"Ashubha"},{"transId":"170","sYear":"2018","sMonth":"9","sDate":"3","name":"Uttam"},{"transId":"171","sYear":"2018","sMonth":"9","sDate":"4","name":"Shubha"},{"transId":"172","sYear":"2018","sMonth":"9","sDate":"5","name":"Ashubha"},{"transId":"173","sYear":"2018","sMonth":"9","sDate":"6","name":"Uttam"},{"transId":"174","sYear":"2018","sMonth":"9","sDate":"7","name":"Ashubha"},{"transId":"175","sYear":"2018","sMonth":"9","sDate":"8","name":"Ashubha"},{"transId":"176","sYear":"2018","sMonth":"9","sDate":"9","name":"Ashubha"},{"transId":"177","sYear":"2018","sMonth":"9","sDate":"10","name":"10:09 After Uttam"},{"transId":"178","sYear":"2018","sMonth":"9","sDate":"11","name":"Shubha"},{"transId":"179","sYear":"2018","sMonth":"9","sDate":"12","name":"Shubha"},{"transId":"180","sYear":"2018","sMonth":"9","sDate":"13","name":"15:00 After Shubha"},{"transId":"181","sYear":"2018","sMonth":"9","sDate":"14","name":"Ashubha"},{"transId":"182","sYear":"2018","sMonth":"9","sDate":"15","name":"Shubha"},{"transId":"183","sYear":"2018","sMonth":"9","sDate":"16","name":"Ashubha"},{"transId":"184","sYear":"2018","sMonth":"9","sDate":"17","name":"Ashubha"},{"transId":"185","sYear":"2018","sMonth":"9","sDate":"18","name":"Ashubha"},{"transId":"186","sYear":"2018","sMonth":"9","sDate":"19","name":"10:38 After Uttam"},{"transId":"187","sYear":"2018","sMonth":"9","sDate":"20","name":"12:00 Till Uttam"},{"transId":"188","sYear":"2018","sMonth":"9","sDate":"21","name":"Shubha"},{"transId":"189","sYear":"2018","sMonth":"9","sDate":"22","name":"Shubha"},{"transId":"190","sYear":"2018","sMonth":"9","sDate":"23","name":"Madhyam"},{"transId":"191","sYear":"2018","sMonth":"9","sDate":"24","name":"Ashubha"},{"transId":"192","sYear":"2018","sMonth":"9","sDate":"25","name":"Uttam"},{"transId":"193","sYear":"2018","sMonth":"9","sDate":"26","name":"Shubha"},{"transId":"194","sYear":"2018","sMonth":"9","sDate":"27","name":"Shubha"},{"transId":"195","sYear":"2018","sMonth":"9","sDate":"28","name":"Madhyam"},{"transId":"196","sYear":"2018","sMonth":"9","sDate":"29","name":"Ashubha"},{"transId":"197","sYear":"2018","sMonth":"9","sDate":"30","name":"Ashubha"},{"transId":"198","sYear":"2018","sMonth":"10","sDate":"1","name":"Ashubha"},{"transId":"199","sYear":"2018","sMonth":"10","sDate":"2","name":"Ashubha"},{"transId":"200","sYear":"2018","sMonth":"10","sDate":"3","name":"Shubha"},{"transId":"201","sYear":"2018","sMonth":"10","sDate":"4","name":"Madhyam"},{"transId":"202","sYear":"2018","sMonth":"10","sDate":"5","name":"Ashubha"},{"transId":"203","sYear":"2018","sMonth":"10","sDate":"6","name":"Madhyam"},{"transId":"204","sYear":"2018","sMonth":"10","sDate":"7","name":"Ashubha"},{"transId":"205","sYear":"2018","sMonth":"10","sDate":"8","name":"Ashubha"},{"transId":"206","sYear":"2018","sMonth":"10","sDate":"9","name":"Ashubha"},{"transId":"207","sYear":"2018","sMonth":"10","sDate":"10","name":"Ashubha"},{"transId":"208","sYear":"2018","sMonth":"10","sDate":"11","name":"10:36 After Ashubha"},{"transId":"209","sYear":"2018","sMonth":"10","sDate":"12","name":"Ashubha"},{"transId":"210","sYear":"2018","sMonth":"10","sDate":"13","name":"Madhyam"},{"transId":"211","sYear":"2018","sMonth":"10","sDate":"14","name":"Ashubha"},{"transId":"212","sYear":"2018","sMonth":"10","sDate":"15","name":"Madhyam"},{"transId":"213","sYear":"2018","sMonth":"10","sDate":"16","name":"Ashubha"},{"transId":"214","sYear":"2018","sMonth":"10","sDate":"17","name":"Uttam"},{"transId":"215","sYear":"2018","sMonth":"10","sDate":"18","name":"Ashubha"},{"transId":"216","sYear":"2018","sMonth":"10","sDate":"19","name":"Shubha"},{"transId":"217","sYear":"2018","sMonth":"10","sDate":"20","name":"Ashubha"},{"transId":"218","sYear":"2018","sMonth":"10","sDate":"21","name":"Ashubha"},{"transId":"219","sYear":"2018","sMonth":"10","sDate":"22","name":"07:40 After Uttam"},{"transId":"220","sYear":"2018","sMonth":"10","sDate":"23","name":"Shubha"},{"transId":"221","sYear":"2018","sMonth":"10","sDate":"24","name":"10:22 After Shubha"},{"transId":"222","sYear":"2018","sMonth":"10","sDate":"25","name":"09:25 Till Shubha"},{"transId":"223","sYear":"2018","sMonth":"10","sDate":"26","name":"Ashubha"},{"transId":"224","sYear":"2018","sMonth":"10","sDate":"27","name":"Ashubha"},{"transId":"225","sYear":"2018","sMonth":"10","sDate":"28","name":"Shubha"},{"transId":"226","sYear":"2018","sMonth":"10","sDate":"29","name":"Ashubha"},{"transId":"227","sYear":"2018","sMonth":"10","sDate":"30","name":"13:10 Till Shubha"},{"transId":"228","sYear":"2018","sMonth":"10","sDate":"31","name":"Shubha"},{"transId":"229","sYear":"2018","sMonth":"11","sDate":"1","name":"Ashubha"},{"transId":"230","sYear":"2018","sMonth":"11","sDate":"2","name":"Ashubha"},{"transId":"231","sYear":"2018","sMonth":"11","sDate":"3","name":"Ashubha"},{"transId":"232","sYear":"2018","sMonth":"11","sDate":"4","name":"Ashubha"},{"transId":"233","sYear":"2018","sMonth":"11","sDate":"5","name":"Shubha"},{"transId":"234","sYear":"2018","sMonth":"11","sDate":"6","name":"Ashubha"},{"transId":"235","sYear":"2018","sMonth":"11","sDate":"7","name":"Ashubha"},{"transId":"236","sYear":"2018","sMonth":"11","sDate":"8","name":"Shubha"},{"transId":"237","sYear":"2018","sMonth":"11","sDate":"9","name":"Shubha"},{"transId":"238","sYear":"2018","sMonth":"11","sDate":"10","name":"Ashubha"},{"transId":"239","sYear":"2018","sMonth":"11","sDate":"11","name":"Ashubha"},{"transId":"240","sYear":"2018","sMonth":"11","sDate":"12","name":"Ashubha"},{"transId":"241","sYear":"2018","sMonth":"11","sDate":"13","name":"Uttam"},{"transId":"242","sYear":"2018","sMonth":"11","sDate":"14","name":"Madhyam"},{"transId":"243","sYear":"2018","sMonth":"11","sDate":"15","name":"Ashubha"},{"transId":"244","sYear":"2018","sMonth":"11","sDate":"16","name":"Shubha"},{"transId":"245","sYear":"2018","sMonth":"11","sDate":"17","name":"Ashubha"},{"transId":"246","sYear":"2018","sMonth":"11","sDate":"18","name":"16:28 After Uttam"},{"transId":"247","sYear":"2018","sMonth":"11","sDate":"19","name":"14:26 After Uttam"},{"transId":"248","sYear":"2018","sMonth":"11","sDate":"20","name":"17:20 After Ashubha"},{"transId":"249","sYear":"2018","sMonth":"11","sDate":"21","name":"Ashubha"},{"transId":"250","sYear":"2018","sMonth":"11","sDate":"22","name":"Ashubha"},{"transId":"251","sYear":"2018","sMonth":"11","sDate":"23","name":"Ashubha"},{"transId":"252","sYear":"2018","sMonth":"11","sDate":"24","name":"Uttam"},{"transId":"253","sYear":"2018","sMonth":"11","sDate":"25","name":"Ashubha"},{"transId":"254","sYear":"2018","sMonth":"11","sDate":"26","name":"11:39 After Shubha"},{"transId":"255","sYear":"2018","sMonth":"11","sDate":"27","name":"Shubha"},{"transId":"256","sYear":"2018","sMonth":"11","sDate":"28","name":"Ashubha"},{"transId":"257","sYear":"2018","sMonth":"11","sDate":"29","name":"Ashubha"},{"transId":"258","sYear":"2018","sMonth":"11","sDate":"30","name":"Ashubha"},{"transId":"259","sYear":"2018","sMonth":"12","sDate":"1","name":"Uttam"},{"transId":"260","sYear":"2018","sMonth":"12","sDate":"2","name":"14:04 After Shubha"},{"transId":"261","sYear":"2018","sMonth":"12","sDate":"3","name":"Shubha"},{"transId":"262","sYear":"2018","sMonth":"12","sDate":"4","name":"Shubha"},{"transId":"263","sYear":"2018","sMonth":"12","sDate":"5","name":"Ashubha"},{"transId":"264","sYear":"2018","sMonth":"12","sDate":"6","name":"Ashubha"},{"transId":"265","sYear":"2018","sMonth":"12","sDate":"7","name":"Ashubha"},{"transId":"266","sYear":"2018","sMonth":"12","sDate":"8","name":"Madhyam"},{"transId":"267","sYear":"2018","sMonth":"12","sDate":"9","name":"Ashubha"},{"transId":"268","sYear":"2018","sMonth":"12","sDate":"10","name":"10:40 After Uttam"},{"transId":"269","sYear":"2018","sMonth":"12","sDate":"11","name":"Ashubha"},{"transId":"270","sYear":"2018","sMonth":"12","sDate":"12","name":"Shubha"},{"transId":"271","sYear":"2018","sMonth":"12","sDate":"13","name":"Shubha"},{"transId":"272","sYear":"2018","sMonth":"12","sDate":"14","name":"Madhyam"},{"transId":"273","sYear":"2018","sMonth":"12","sDate":"15","name":"Ashubha"},{"transId":"274","sYear":"2018","sMonth":"12","sDate":"16","name":"Ashubha"},{"transId":"275","sYear":"2018","sMonth":"12","sDate":"17","name":"Shubha"},{"transId":"276","sYear":"2018","sMonth":"12","sDate":"18","name":"Shubha"},{"transId":"277","sYear":"2018","sMonth":"12","sDate":"19","name":"Ashubha"},{"transId":"278","sYear":"2018","sMonth":"12","sDate":"20","name":"Ashubha"},{"transId":"279","sYear":"2018","sMonth":"12","sDate":"21","name":"Uttam"},{"transId":"280","sYear":"2018","sMonth":"12","sDate":"22","name":"12:41 After Shubha"},{"transId":"281","sYear":"2018","sMonth":"12","sDate":"23","name":"Ashubha"},{"transId":"282","sYear":"2018","sMonth":"12","sDate":"24","name":"Shubha"},{"transId":"283","sYear":"2018","sMonth":"12","sDate":"25","name":"Ashubha"},{"transId":"284","sYear":"2018","sMonth":"12","sDate":"26","name":"Ashubha"},{"transId":"285","sYear":"2018","sMonth":"12","sDate":"27","name":"Ashubha"},{"transId":"286","sYear":"2018","sMonth":"12","sDate":"28","name":"Ashubha"},{"transId":"287","sYear":"2018","sMonth":"12","sDate":"29","name":"Shubha"},{"transId":"288","sYear":"2018","sMonth":"12","sDate":"30","name":"Shubha"},{"transId":"289","sYear":"2018","sMonth":"12","sDate":"31","name":"Shubha"},{"transId":"290","sYear":"2019","sMonth":"1","sDate":"1","name":"Ashubha"},{"transId":"291","sYear":"2019","sMonth":"1","sDate":"2","name":"09:42 After Uttam"},{"transId":"292","sYear":"2019","sMonth":"1","sDate":"3","name":"11:12 Till Shubha"},{"transId":"293","sYear":"2019","sMonth":"1","sDate":"4","name":"Ashubha"},{"transId":"294","sYear":"2019","sMonth":"1","sDate":"5","name":"Ashubha"},{"transId":"295","sYear":"2019","sMonth":"1","sDate":"6","name":"Ashubha"},{"transId":"296","sYear":"2019","sMonth":"1","sDate":"7","name":"Uttam"},{"transId":"297","sYear":"2019","sMonth":"1","sDate":"8","name":"Shubha"},{"transId":"298","sYear":"2019","sMonth":"1","sDate":"9","name":"Shubha"},{"transId":"299","sYear":"2019","sMonth":"1","sDate":"10","name":"Ashubha"},{"transId":"300","sYear":"2019","sMonth":"1","sDate":"11","name":"Ashubha"},{"transId":"301","sYear":"2019","sMonth":"1","sDate":"12","name":"Uttam"},{"transId":"302","sYear":"2019","sMonth":"1","sDate":"13","name":"Shubha"},{"transId":"303","sYear":"2019","sMonth":"1","sDate":"14","name":"Madhyam"},{"transId":"304","sYear":"2019","sMonth":"1","sDate":"15","name":"Varjya"},{"transId":"305","sYear":"2019","sMonth":"1","sDate":"16","name":"Madhyam"},{"transId":"306","sYear":"2019","sMonth":"1","sDate":"17","name":"Ashubha"},{"transId":"307","sYear":"2019","sMonth":"1","sDate":"18","name":"Shubha"},{"transId":"308","sYear":"2019","sMonth":"1","sDate":"19","name":"Ashubha"},{"transId":"309","sYear":"2019","sMonth":"1","sDate":"20","name":"Ashubha"},{"transId":"310","sYear":"2019","sMonth":"1","sDate":"21","name":"Shubha"},{"transId":"311","sYear":"2019","sMonth":"1","sDate":"22","name":"Ashubha"},{"transId":"312","sYear":"2019","sMonth":"1","sDate":"23","name":"13:46 till Madhyam"},{"transId":"313","sYear":"2019","sMonth":"1","sDate":"24","name":"Ashubha"},{"transId":"314","sYear":"2019","sMonth":"1","sDate":"25","name":"Uttam"},{"transId":"315","sYear":"2019","sMonth":"1","sDate":"26","name":"Shubha"},{"transId":"316","sYear":"2019","sMonth":"1","sDate":"27","name":"Shubha"},{"transId":"317","sYear":"2019","sMonth":"1","sDate":"28","name":"14:36 Till Shubha"},{"transId":"318","sYear":"2019","sMonth":"1","sDate":"29","name":"15:23 After Shubha"},{"transId":"319","sYear":"2019","sMonth":"1","sDate":"30","name":"Ashubha"},{"transId":"320","sYear":"2019","sMonth":"1","sDate":"31","name":"Ashubha"},{"transId":"321","sYear":"2019","sMonth":"2","sDate":"1","name":"Madhyam"},{"transId":"322","sYear":"2019","sMonth":"2","sDate":"2","name":"Ashubha"},{"transId":"323","sYear":"2019","sMonth":"2","sDate":"3","name":"Ashubha"},{"transId":"324","sYear":"2019","sMonth":"2","sDate":"4","name":"Ashubha"},{"transId":"325","sYear":"2019","sMonth":"2","sDate":"5","name":"Ashubha"},{"transId":"326","sYear":"2019","sMonth":"2","sDate":"6","name":"Madhyam"},{"transId":"327","sYear":"2019","sMonth":"2","sDate":"7","name":"Ashubha"},{"transId":"328","sYear":"2019","sMonth":"2","sDate":"8","name":"15:00 After Uttam"},{"transId":"329","sYear":"2019","sMonth":"2","sDate":"9","name":"12:24 After Uttam"},{"transId":"330","sYear":"2019","sMonth":"2","sDate":"10","name":"Shubha"},{"transId":"331","sYear":"2019","sMonth":"2","sDate":"11","name":"Shubha"},{"transId":"332","sYear":"2019","sMonth":"2","sDate":"12","name":"Madhyam"},{"transId":"333","sYear":"2019","sMonth":"2","sDate":"13","name":"Ashubha"},{"transId":"334","sYear":"2019","sMonth":"2","sDate":"14","name":"Ashubha"},{"transId":"335","sYear":"2019","sMonth":"2","sDate":"15","name":"Shubha"},{"transId":"336","sYear":"2019","sMonth":"2","sDate":"16","name":"Ashubha"},{"transId":"337","sYear":"2019","sMonth":"2","sDate":"17","name":"Ashubha"},{"transId":"338","sYear":"2019","sMonth":"2","sDate":"18","name":"14:00 till Shubha"},{"transId":"339","sYear":"2019","sMonth":"2","sDate":"19","name":"11:15 Till Ashubha"},{"transId":"340","sYear":"2019","sMonth":"2","sDate":"20","name":"Ashubha"},{"transId":"341","sYear":"2019","sMonth":"2","sDate":"21","name":"Uttam"},{"transId":"342","sYear":"2019","sMonth":"2","sDate":"22","name":"11:00 After Shubha"},{"transId":"343","sYear":"2019","sMonth":"2","sDate":"23","name":"Ashubha"},{"transId":"344","sYear":"2019","sMonth":"2","sDate":"24","name":"Shubha"},{"transId":"345","sYear":"2019","sMonth":"2","sDate":"25","name":"Ashubha"},{"transId":"346","sYear":"2019","sMonth":"2","sDate":"26","name":"Shubha"},{"transId":"347","sYear":"2019","sMonth":"2","sDate":"27","name":"Ashubha"},{"transId":"348","sYear":"2019","sMonth":"2","sDate":"28","name":"Madhyam"},{"transId":"349","sYear":"2019","sMonth":"3","sDate":"1","name":"Ashubha"},{"transId":"350","sYear":"2019","sMonth":"3","sDate":"2","name":"11:35 After Uttam"},{"transId":"351","sYear":"2019","sMonth":"3","sDate":"3","name":"Shubha"},{"transId":"352","sYear":"2019","sMonth":"3","sDate":"4","name":"16:45 Till Shubha"},{"transId":"353","sYear":"2019","sMonth":"3","sDate":"5","name":"Ashubha"},{"transId":"354","sYear":"2019","sMonth":"3","sDate":"6","name":"Ashubha"},{"transId":"355","sYear":"2019","sMonth":"3","sDate":"7","name":"Ashubha"},{"transId":"356","sYear":"2019","sMonth":"3","sDate":"8","name":"Uttam"},{"transId":"357","sYear":"2019","sMonth":"3","sDate":"9","name":"Shubha"},{"transId":"358","sYear":"2019","sMonth":"3","sDate":"10","name":"15:33 Till Shubha"},{"transId":"359","sYear":"2019","sMonth":"3","sDate":"11","name":"Madhyam"},{"transId":"360","sYear":"2019","sMonth":"3","sDate":"12","name":"Ashubha"},{"transId":"361","sYear":"2019","sMonth":"3","sDate":"13","name":"Uttam"},{"transId":"362","sYear":"2019","sMonth":"3","sDate":"14","name":"Ashubha"},{"transId":"363","sYear":"2019","sMonth":"3","sDate":"15","name":"Ashubha"},{"transId":"364","sYear":"2019","sMonth":"3","sDate":"16","name":"Shubha"},{"transId":"365","sYear":"2019","sMonth":"3","sDate":"17","name":"Shubha"},{"transId":"366","sYear":"2019","sMonth":"3","sDate":"18","name":"Ashubha"},{"transId":"367","sYear":"2019","sMonth":"3","sDate":"19","name":"Madhyam"},{"transId":"368","sYear":"2019","sMonth":"3","sDate":"20","name":"Ashubha"},{"transId":"369","sYear":"2019","sMonth":"3","sDate":"21","name":"Ashubha"},{"transId":"370","sYear":"2019","sMonth":"3","sDate":"22","name":"Shubha"},{"transId":"371","sYear":"2019","sMonth":"3","sDate":"23","name":"11:50 After Shubha"},{"transId":"372","sYear":"2019","sMonth":"3","sDate":"24","name":"Ashubha"},{"transId":"373","sYear":"2019","sMonth":"3","sDate":"25","name":"Shubha"},{"transId":"374","sYear":"2019","sMonth":"3","sDate":"26","name":"Ashubha"},{"transId":"375","sYear":"2019","sMonth":"3","sDate":"27","name":"Ashubha"},{"transId":"376","sYear":"2019","sMonth":"3","sDate":"28","name":"Ashubha"},{"transId":"377","sYear":"2019","sMonth":"3","sDate":"29","name":"12:45 After Uttam"},{"transId":"378","sYear":"2019","sMonth":"3","sDate":"30","name":"14:08 Till Uttam"},{"transId":"379","sYear":"2019","sMonth":"3","sDate":"31","name":"Shubha"},{"transId":"380","sYear":"2019","sMonth":"4","sDate":"1","name":"Shubha"},{"transId":"381","sYear":"2019","sMonth":"4","sDate":"2","name":"Madhyam"},{"transId":"382","sYear":"2019","sMonth":"4","sDate":"3","name":"Ashubha"},{"transId":"383","sYear":"2019","sMonth":"4","sDate":"4","name":"Ashubha"},{"transId":"384","sYear":"2019","sMonth":"4","sDate":"5","name":"Ashubha"}]';
	sData = JSON.parse(data);
	loadList();	
})();

function loadList()
{
	for (var i = 0; i < sData.length; i++) 
	{
		var delim = ",";
		var regex = new RegExp(delim,"g");
			
		var sFullDate = sData[i].sDate + "/" + sData[i].sMonth + "/" + sData[i].sYear;
		var sName = sData[i].name.replace(regex,"\n");
		
			switch( sData[i].sMonth )
			{
				case  "1":
				{
					listItems1.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});				
					break;
				}
				case  "2":
				{
					listItems2.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
				case  "3":
				{
					listItems3.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
				case  "4":
				{
					listItems4.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
				case  "5":
				{
					listItems5.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
				case  "6":
				{
					listItems6.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
				case  "7":
				{
					listItems7.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
				case  "8":
				{
					listItems8.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
				case  "9":
				{
					listItems9.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
				case  "10":
				{
					listItems10.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
				case  "11":
				{
					listItems11.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
				case  "12":
				{
					listItems12.push({				
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});	
					break;
				}
			}
			
	}
	
	/**
	 * CREATE SECTIONS
	 */
	var section1 = Ti.UI.createListSection();
	var section2 = Ti.UI.createListSection();
	var section3 = Ti.UI.createListSection();
	var section4 = Ti.UI.createListSection();
	var section5 = Ti.UI.createListSection();
	var section6 = Ti.UI.createListSection();
	var section7 = Ti.UI.createListSection();
	var section8 = Ti.UI.createListSection();
	var section9 = Ti.UI.createListSection();
	var section10 = Ti.UI.createListSection();
	var section11 = Ti.UI.createListSection();
	var section12 = Ti.UI.createListSection();
	
	/**
	 * ADD ITEMS TO SECTIONS
	 */
	section1.items = listItems1;
	section2.items = listItems2;
	section3.items = listItems3;
	section4.items = listItems4;
	section5.items = listItems5;
	section6.items = listItems6;
	section7.items = listItems7;
	section8.items = listItems8;
	section9.items = listItems9;
	section10.items = listItems10;
	section11.items = listItems11;
	section12.items = listItems12;
	
	/**
	 * ADD SECTIONS TO LIST
	 */
	$.slist.sections = [section3, section4, section5, section6, section7, section8, section9, section10, section11, section12, section1, section2];
	
	/**
	 * SET SECTION HEADERS
	 */
	$.slist.sections[0].headerTitle = "March";
	$.slist.sections[1].headerTitle = "April";
	$.slist.sections[2].headerTitle = "May";
	$.slist.sections[3].headerTitle = "June";
	$.slist.sections[4].headerTitle = "July";
	$.slist.sections[5].headerTitle = "August";
	$.slist.sections[6].headerTitle = "September";
	$.slist.sections[7].headerTitle = "October";
	$.slist.sections[8].headerTitle = "November";
	$.slist.sections[9].headerTitle = "December";
	$.slist.sections[10].headerTitle = "January";
	$.slist.sections[11].headerTitle = "February";
	
	/**
	 * SCROLL THE LIST TO CURRENT MONTH
	 */
	var d = new Date();
	$.slist.scrollToItem(d.getMonth(), 1);
}

function closeWindow()
{
	$.winShubha.close();
}