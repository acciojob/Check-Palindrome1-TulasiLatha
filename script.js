// complete the given function

function palindrome(str){
      var rev= "";
	str=str.split(" ");
	boolean ans=false;
	for(let i=str.length()-1;i>=0;i--){
		rev=rev+str.charAt(i);
	}
	if(str.equals(rev)){
		return ans=true;
	}
	return ans;
}
palindrome(race a car);
module.exports = palindrome
