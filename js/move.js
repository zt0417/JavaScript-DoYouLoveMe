var flag=1;
function yes(){
	alert("Yes, you are right")
}

function no(){
	if(flag==1)
	{
		noDiv.style.top="90px";
		noDiv.style.left="60%";
		flag=2;
	}else if(flag==2)
	{
		noDiv.style.top="250px";
		noDiv.style.left="30%";
		flag=3;
	}else if(flag==3)
	{
		noDiv.style.top="200px";
		noDiv.style.left="53%";
		flag=1;
	}
}