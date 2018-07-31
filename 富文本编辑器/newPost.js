let postContent=document.getElementById('postContent'),
	excelFile=document.getElementById('excelFile'),
	articleButton=document.getElementById('articleButton');
postContent.onfocus=edit;
postContent.onblur=noedit;
function edit(){
	if(postContent.innerHTML=="输入正文..."){
		postContent.innerHTML="";
		postContent.style="color:#444";
	}
}
function noedit(){
	if(!postContent.innerHTML){
		postContent.innerHTML="输入正文..."
		postContent.style="color:#aaa";
	}
}
	navList.addEventListener('click',function(e){
	let target=e.target;
	switch(target.classList[1]){
		case 'fa-bold':changeStyle('bold');break;
		case 'fa-italic':changeStyle('italic');break;
		case 'fa-underline':changeStyle('underline');break;
		case 'fa-header':changeStyle('FontSize');break;
		case 'fa-code':changeStyle('code');break;
		case 'fa-quote-right':changeStyle('quote');break;
	}
});

function changeStyle(style){
	switch(style){
		case 'bold':
		case 'italic':
		case 'underline':
			document.execCommand(style);
			break;
		case 'FontSize':
			document.execCommand(style,false,5);
			document.execCommand('bold');
			document.execCommand('ForeColor',false,'#000');
			break;
		case 'code':
			postContent.innerHTML+=`<code contentEditable='true'>输入代码</code>
									<span class="newPage" contentEditable='true'></span>`
			break;
		case 'quote':
			postContent.innerHTML+=`<span class="italic">--“插入引用”</span>`;
			break;
	}
}

excelFile.addEventListener('change',function(){
	let str=window.URL.createObjectURL(excelFile.files[0]);
	uploadPhoto();
});
function uploadPhoto(){
	let excelFile=document.getElementById('excelFile');
	if(excelFile.files[0].size>5000000){
		coolAlert('图片不能大于5M');
	}
	else{
		let uploadFile = new FormData(document.getElementById("file"));
		if("undefined" != typeof(uploadFile) && uploadFile != null && uploadFile != ""){
		let	xhr=new XMLHttpRequest();
			xhr.open('post','http://202.116.162.57:8080/se52/noteimg.do',true);
			xhr.send(uploadFile);
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status==200){
						postContent.innerHTML+=`<img src="${'http://202.116.162.57:8080'+xhr.responseText}" width="300px" style="display:block;">`
					}
				}
			}
		}
	}
}


