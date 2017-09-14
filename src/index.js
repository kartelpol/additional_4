module.exports = function multiply(first, second) {
  if ((+first <= 100000000) && (+second <= 100000000)){
  	var result = (+first*+second) + "";
  	return result;
  }
var a =[];
  var b =[];
  var res =[];
  var result =[];
  var ten =0;
  var mult =0;
  var theLongerNumb;

  if(first > second) {
  	a = first.split("");
  	b = second.split("");
  }
  else {
  	a = second.split("");
  	b = first.split("");
  }
  for (var k=0; k<b.length; k++){
  			res[k]=[];
  		}

  for(var i=0; i < b.length; i++){

	for (var k=0; k<i; k++){
	  			res[i][k]=0;
	  		}
  	for (var j=0; j<a.length; j++){
  		mult = a[a.length - j - 1] *b[b.length - i - 1] + ten;
  		ten = 0;
  		
  		if(mult > 9){
  			ten = Math.floor(mult/10);
  			mult = mult % 10;
  		}
  		  		
  		res[i].unshift(mult);
  		
	}

	if( ten >0){
		res[i].unshift(ten);
	}
	ten=0;
	//mult = 0;
 }

 for (i=0; i < res.length-1; i++){

 	if (res[i].length > res[i+1].length ) theLongerNumb = res[i].length; 
 	else theLongerNumb = res[i+1].length;
 }
 //alert(theLongerNumb);

 for(i=0; i<theLongerNumb; i++){
 	mult=0;
 	for(j=0; j<res.length; j++){
 		
 		if( res[j] [res[j].length - i -1]){
 		mult= mult + res[j][res[j].length - i -1] + ten;
 		
 		ten=0;
 	}
 	}
 	if (mult > 9){
 		ten = Math.floor(mult/10);
  			mult = mult % 10;
 	}//alert(mult);
 	result.unshift(mult);
 }

 if(ten) 
 	result.unshift(mult);

 //alert(result);
 return result.join("");
  }
