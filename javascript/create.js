// JavaScript Document

const cursor = document.querySelector('.cursor');
		
		document.addEventListener('mousemove', e => {
			cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
		})
		
		document.addEventListener('click', () => {
			cursor.classList.add("expand");
			
			setTimeout(() => {
				cursor.classList.remove("expand");
			}, 500)
		})
	

// Get the modal 1
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
	img.onclick = function(){
		modal.style.display = "block";
  		modalImg.src = this.src;
  		captionText.innerHTML = this.alt;
	}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function(){ 
  	modal.style.display = "none";
}



// Get the modal 2
var modal2 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg3");
var modalImg2 = document.getElementById("img03");
var captionText2 = document.getElementById("caption3");
	img2.onclick = function(){
  		modal2.style.display = "block";
  		modalImg2.src = this.src;
  		captionText2.innerHTML = this.alt;
	}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span2.onclick = function(){ 
  	modal2.style.display = "none";
}



// Get the modal 3
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
	img4.onclick = function(){
  		modal4.style.display = "block";
  		modalImg4.src = this.src;
  		captionText4.innerHTML = this.alt;
	}

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span4.onclick = function(){ 
  	modal4.style.display = "none";
}

// Get the modal 4
var modal6 = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption6");
	img6.onclick = function(){
  		modal6.style.display = "block";
  		modalImg6.src = this.src;
  		captionText6.innerHTML = this.alt;
	}

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close")[5];

// When the user clicks on <span> (x), close the modal
span6.onclick = function(){ 
  	modal6.style.display = "none";
}


