let st=document.getElementsByTagName("strong");
function highlight() {
    //Write your code here
	for(let i=0;i<st.length;i++){
		st[i].style.color="green";
	}

}
function return_normal() {
    //Write your code here
for(let i=0;i<st.length;i++){
		st[i].style.color="black";
	}
    
}
