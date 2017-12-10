function deleteOdd() {
	var links = document.querySelectorAll("ul li");
for (i = 0; i < links.length; i++) {
	var link = links[i];
   	var parent = link.parentNode;

   if ((i+1)%2 == 0) {
      console.log(link);
   }
   else {
	   link.remove();
   }
}

}


