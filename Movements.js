// JavaScript Document
Movements = window.Movements || {};

Movements = function () {

 

  //Het typewriter effect zorgt ervoor dat het lijkt alsof de tekst nog getyped word, hiervoor zijn 3 waarde nodig, de tekst die u wilt weergeven, het id van de parent waarin u de tekst wilt zetten, en de snelheid waarin u de tekst wilt laten verschijnen.
  Typewriter = function( TypewriterparentID, Typewriterstring, Typewriterspeed) {

	  var settings = {
		  i: 0,
		  speed: typeof Typewriterspeed !== 'undefined' ? Typewriterspeed : 200,
		  string: typeof Typewriterstring !=='undefined' ? Typewriterstring : "deze string is leeg",
		  parentID: TypewriterparentID,
		  isTag: false,
		  Typewritertext: ""


	  };

	  var Type = function () {

		  var str = settings.string;

		  settings.Typewritertext = str.slice(0, ++settings.i);
		  document.getElementById(settings.parentID).innerHTML = settings.Typewritertext;
		  if (settings.i == str.length + 1) {
			  settings.Typewritertext = settings.Typewritertext + "<span id='position'>|</span>";
			  document.getElementById(settings.parentID).innerHTML = settings.Typewritertext;
		  }


		  var char = settings.Typewritertext.slice(-1);
		  if (char === '<') settings.isTag = true;
		  if (char === '>') settings.isTag = false;

		  if (settings.i != str.length + 1) {
			  settings.timeout = setTimeout(Type.bind(settings), settings.speed);
		  }

	  }

	setTimeout(Type(), Typewriterspeed);
				
			
  };

  //Code plaatst # voor uw tekst en gaat 1 voor 1 de letters na met die van het alfabet na als de letter overeen komt word deze zichtbaar en gaat de code verder met de volgende letter, zo lijkt het alsof de tekst gedecodeerd word.
  Decode = function(CodingparentID, Codingstring, Codingspeed) {

		var settings = {
			i: 0,
			searchPosition: 0,
			stringPosition: 0,
			start: false,
			ABC: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "!", "?", "@", ".", ",", "/"],
			speed: typeof Codingspeed !== 'undefined' ? Codingspeed : 100,
			string: typeof Codingstring !=='undefined' ? Codingstring : "deze string is leeg",
			parentID: CodingparentID,

			codingtext: "",
			strArray: ""



		};

	  var Coding = function () {

		  var str = settings.string;

		  if (settings.start == false) {
			  settings.strArray = str.split("");
			  for (settings.i; settings.i < settings.strArray.length; settings.i++) {
				  settings.codingtext = settings.codingtext + "#";
			  }
			  settings.start = true;
		  } else {

			  if (settings.strArray[settings.stringPosition].toLowerCase() == settings.ABC[settings.searchPosition]) {
				  if (settings.strArray[settings.stringPosition].toLowerCase() == settings.strArray[settings.stringPosition]) {
					  settings.codingtext = settings.codingtext.substr(0, settings.stringPosition) + settings.ABC[settings.searchPosition] + settings.codingtext.substr(settings.stringPosition + settings.ABC[settings.searchPosition].length);

				  } else {
					  settings.codingtext = settings.codingtext.substr(0, settings.stringPosition) + settings.ABC[settings.searchPosition].toUpperCase() + settings.codingtext.substr(settings.stringPosition + settings.ABC[settings.searchPosition].length);

				  }
				  settings.stringPosition++;
				  settings.searchPosition = 0;
			  } else {
				  settings.codingtext = settings.codingtext.substr(0, settings.stringPosition) + settings.ABC[settings.searchPosition] + settings.codingtext.substr(settings.stringPosition + settings.ABC[settings.searchPosition].length);
				  settings.searchPosition++;
			  }

		  }

		  document.getElementById(settings.parentID).innerHTML = settings.codingtext;


		  if (settings.stringPosition != settings.strArray.length){
			  settings.timeout = setTimeout(Coding.bind(settings), settings.speed);
		  }

	  }
		setTimeout(Coding(), Codingspeed);


  };



	return {
    "Typewriter" :  Typewriter,
	"Decode" : Decode
  }

}();
