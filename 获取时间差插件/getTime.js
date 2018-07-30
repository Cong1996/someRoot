
function getTime(time){/*接受字符串或对象，返回与当前时间差*/
	/*动作发生时间*/
	let theDate;
	if(time instanceof Date){
		theDate=time;
	}
	else{
		theDate=new Date(time);
	}
		console.log(theDate);
	let	theYear=theDate.getFullYear(),
		theMonth=theDate.getMonth()+1,
		theDay=theDate.getDate(),
		theHour=theDate.getHours(),
		theMinute=theDate.getMinutes();
	let date = new Date(),
		nowYear=date.getFullYear(),
		nowMonth=date.getMonth()+1,
		nowDay=date.getDate(),
		nowHour=date.getHours(),
		nowMinute=date.getMinutes();
	if(nowYear-theYear>=1){
		return nowYear-theYear+'年前';
	}
	else if(nowMonth-theMonth>=1){
		return nowMonth-theMonth+'月前';
	}
	else if(nowDay-theDay>=7){
		return Math.floor((nowDay-theDay)/7)+'周前';
	}
	else if(nowDay-theDay>=1){
		return nowDay-theDay+'天前';
	}
	else if(nowHour-theHour>=1){
		return nowHour-theHour+'小时前';
	}
	else if(nowMinute-theMinute>=1){
		return nowMinute-theMinute+'分钟前';
	}
	else{
		return '刚刚';
	}
alert(getTime('2018-7-7 11:11:11'));