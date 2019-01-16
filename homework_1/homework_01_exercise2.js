function isWeekend(){
	const todayDate = new Date();
	const day = todayDate.getDay();
	const days = ["weekend","weekeday","weekeday","weekeday","weekeday","weekeday","weekend"];
	return days[day];
}