var frm=document.getElementById("frm")
 var btn=document.getElementById("btn")
 
var array=[{name:"krishna",pwd:"Krish"},{name:"abc",pwd:"123"},{name:"guna",pwd:"123"},{name:"sree",pwd:"123"}]
	
 
 btn.addEventListener("click",function(e){
	let uname=document.getElementById("uname").value
	let upwd=document.getElementById("upwd").value
	// e.preventDefault()
	
	
	var count=0;
	//method 1
	// for(i=0;i<array.length;i++){
		// if(uname==array[i].name && upwd==array[i].pwd){
			// alert("success")
			// count++
		// }
	// }
	// if(count==0){
		// alert("invalid user")
	// }
	
	//method 2
	array.forEach(function(ch){
	if(uname==ch.name && upwd==ch.pwd){
			alert("success")
			count++
		}
	})
	if(count==0){
		alert("invalid user")
	}
	
 })
 
