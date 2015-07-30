$(document).ready(function(){
	var refreshTiles = function() {
		var totalLength = $(".flip-container > div").length;
		var randInd = Math.floor( Math.random() * 10 );
		while(randInd >= totalLength)
		{randInd = Math.floor( Math.random() * 10 );}
		var randElement = $(".flip-container > div").eq(randInd);
		var rawData = [{img:"img/0.jpg",title:"Lightning about to strike"}, {img:"img/1.jpg",title:"Dare to face any odds"}, {img:"img/2.jpg",title:"Law is enforced"}, {img:"img/3.jpg",title:"Brothers in Assasination"}, {img:"img/4.jpg",title:"Crisis Core Strip"}, {img:"img/5.jpg",title:"Cortana in my phone"}, {img:"img/6.jpg",title:"Judgement is never Judged"}, {img:"img/7.jpg",title:"Lonely Lion of Savannah"}, {img:"img/8.jpg",title:"Cortana with Emotions"}, {img:"img/9.jpg",title:"Unconditional Protector of Mankind"}];
		var totalDataLength = rawData.length;
	//here multiplication factor is not needed, data length won't exceed one digit. if it reaches more than one digit, we need to find out the total digits and multiply the random number accordingly(or generate a random number between range)
		var randInd = Math.floor( Math.random() * 10 );
		while(randInd >= totalDataLength)
		{randInd = Math.floor( Math.random() * 10 );}
		var selectedData = rawData[randInd];
		var targetSelector = randElement.attr("data-selector_ref");
		randElement.find(targetSelector).html('<img src="' + selectedData.img + '"/><a href="#">' + selectedData.title + '</a>');
		targetSelector = (targetSelector===".back")?".front":".back";
		randElement.attr("data-selector_ref", targetSelector);
		randElement.find(".flipper").toggleClass("hover");
	};
	setInterval(refreshTiles, 3000);
});
