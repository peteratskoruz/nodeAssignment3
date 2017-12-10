var validateEmail = function(email) {
		var emailFilter =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
			if (!emailFilter.test(email)) 
				alert("Please enter a valid email.");
            return emailFilter.test(email);	
}