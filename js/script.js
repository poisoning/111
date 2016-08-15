// JavaScript Document
var screenObj=document.getElementById("screen");
function inputKey(num){
	if(clearBool)
	{
		screenObj.value="";
		clearBool=false;
		
	}
	if(screenObj.value=="0" && num!=".")
	{
		screenObj.value=num;
	}
	else
	{
		if((screenObj.value.indexOf(".")==-1 && num==".") || num!=".")
		{
			screenObj.value=screenObj.value+num;
		}
	}
}
var beforeNum,afterNum,signGlobal,clearBool=false;
function operatingFun(sign){
	console.log("符号开始",beforeNum,afterNum);
	if(signGlobal!=null)
	{
		afterNum=screenObj.value;
		result();
	}
	afterNum=null;
	beforeNum=screenObj.value;
	signGlobal=sign;
	clearBool=true;
	console.log("符号结束",beforeNum,afterNum);
}
function result(){
	console.log("等于开始",beforeNum,afterNum);
	if(afterNum==null)
	{
		afterNum=screenObj.value;
	}
	if(signGlobal=="+"){
		screenObj.value=Number(beforeNum)+Number(afterNum);
	}
	if(signGlobal=="-"){
		screenObj.value=Number(beforeNum)-Number(afterNum);
	}
	if(signGlobal=="*"){
		screenObj.value=Number(beforeNum)*Number(afterNum);
	}
	if(signGlobal=="/"){
		screenObj.value=Number(beforeNum)/Number(afterNum);
	}
	if(signGlobal=="%"){
		screenObj.value=Number(beforeNum)%Number(afterNum);
	}
	clearBool=true;
	console.log("等于结束",beforeNum,afterNum);
}
function clearFun(){
	screenObj.value="";
}
function sqr(){
	screenObj.value=Math.sqrt(screenObj.value);
}
function del(){
	var screenVal=screenObj.value;
	screenObj.value=screenVal.substring(0,screenVal.length-1);
}