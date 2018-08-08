function initMofang(containerID,maxwidth,minwidth,number,durationMin,durationMax){
	/*传入魔方容器ID，魔方最大宽度，魔方最小宽度，魔方个数,最小过度时长，最大过度时长*/
	document.body.innerHTML+=`<div id="${containerID}"></div>`;
	var mofang=function(){},
	getRandom=(max,min)=>(Math.ceil(Math.random()*(max-min)+min)),
	vW=window.innerWidth,
	vH=window.innerHeight;
	var colorArray=["#339999","#ccccff","#FF4499","#000","#FFCCFF",
			"rgb(0,108,255)","rgb(0,108,255)","#006633","#9933CC"];
mofang.prototype={
	init(){
		this.ul=document.createElement('ul');
		this.ul.className="mofang";
		this.w=getRandom(maxwidth,minwidth);
		this.h=this.w;
		this.pointY=getRandom(vH,vH+200);
		this.pointX=getRandom(0,vW);
		this.duration=getRandom(durationMax,durationMin);
		this.ul.style.top=this.pointY+'px';
		this.ul.style.left=this.pointX+'px';
		this.lineColor=colorArray[getRandom(0,colorArray.length-1)];
		this.addLi();
		this.ul.style.animationDuration=this.duration+'s';
		document.getElementById('wrap').append(this.ul);
	},
	addLi(){
		let style=`width:${this.w}px;height:${this.h}px;`,
			li="",
			arrayOfMofangColor=['rgb(255,255,0)','rgb(236,142,34)','rgb(0,108,255)','rgb(208,50,0)','rgb(108,255,0)','rgb(255,255,255)'];

		for(let i=0;i<6;i++){
			switch(i){
				case 0:style+=`transform:translateZ(${this.w/2}px);border-color:${this.lineColor};`;break;
				case 1:style+=`transform:translateZ(${-this.w/2}px);`;break;
				case 2:style+=`transform:rotateY(90deg) translateZ(${this.w/2}px);`;break;
				case 3:style+=`transform:rotateY(90deg) translateZ(${-this.w/2}px);`;break;
				case 4:style+=`transform:rotateX(90deg) translateZ(${this.w/2}px);`;break;
				case 5:style+=`transform:rotateX(90deg) translateZ(${-this.w/2}px);`
			}
			li+=`<li style="${style}">
					<ul style="display:flex;flex-wrap:wrap;box-sizing:border-box;width:100%;height:${this.h}px;background-color:#000;">
						<li style="flex:1 1 33.3%;width:${this.w/3}px;height:${this.h/3}px;box-sizing:border-box;border:1px solid #000;border-radius:2px;background-color:${arrayOfMofangColor[i]}"></li>
						<li style="flex:1 1 33.3%;width:${this.w/3}px;height:${this.h/3}px;box-sizing:border-box;border:1px solid #000;border-radius:2px;background-color:${arrayOfMofangColor[i]}"></li>
						<li style="flex:1 1 33.3%;width:${this.w/3}px;height:${this.h/3}px;box-sizing:border-box;border:1px solid #000;border-radius:2px;background-color:${arrayOfMofangColor[i]}"></li>
						<li style="flex:1 1 33.3%;width:${this.w/3}px;height:${this.h/3}px;box-sizing:border-box;border:1px solid #000;border-radius:2px;background-color:${arrayOfMofangColor[i]}"></li>
						<li style="flex:1 1 33.3%;width:${this.w/3}px;height:${this.h/3}px;box-sizing:border-box;border:1px solid #000;border-radius:2px;background-color:${arrayOfMofangColor[i]}"></li>
						<li style="flex:1 1 33.3%;width:${this.w/3}px;height:${this.h/3}px;box-sizing:border-box;border:1px solid #000;border-radius:2px;background-color:${arrayOfMofangColor[i]}"></li>
						<li style="flex:1 1 33.3%;width:${this.w/3}px;height:${this.h/3}px;box-sizing:border-box;border:1px solid #000;border-radius:2px;background-color:${arrayOfMofangColor[i]}"></li>
						<li style="flex:1 1 33.3%;width:${this.w/3}px;height:${this.h/3}px;box-sizing:border-box;border:1px solid #000;border-radius:2px;background-color:${arrayOfMofangColor[i]}"></li>
						<li style="flex:1 1 33.3%;width:${this.w/3}px;height:${this.h/3}px;box-sizing:border-box;border:1px solid #000;border-radius:2px;background-color:${arrayOfMofangColor[i]}"></li>
					</ul>
				</li>`;
		
		}
		this.ul.innerHTML=li;
	}
}
function addMofang(num){
	for(var i=0;i<num;i++){
		new mofang().init();
	}
}
addMofang(number);
}
initMofang('wrap',50,100,40,15,60);