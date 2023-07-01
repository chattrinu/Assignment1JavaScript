// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
//var textToSpeak = 'This is the text string that you will generate with your script';
//var speakButton = document.querySelector('button');


//declaring variable for speakSub
var speakSub = document.querySelector('.btnSub');
//declaring and assigning array for Noun button
var textToSpeakSub = ['The turkey','Mom','Dad','The dog','My teacher','The elephant','The cat'];
//declaring variable for speakVerb
var speakVerb = document.querySelector('.btnVerb');

//declaring and assigning array for Verb button
var textToSpeakVerb = ['sat on','ate','danced with','saw','doesn\'t like','kissed'];

//declaring variable for speakAdj
var speakAdj = document.querySelector('.btnAdj');

//declaring and assigning array for Adjective button
var textToSpeakAdj= ['a funny','a scary','a goofy','a slimy','a barking','a fat'];

//declaring variable for speakObj
var speakObj = document.querySelector('.btnObj');

//declaring and assigning array for textToSpeak
var textToSpeakObj = ['goat','monkey','fish','cow','frog','bug','worm'];

//declaring variable for speakPrep
var speakPrep= document.querySelector('.btnPrep');


var textToSpeakPrep = ['on the moom','on the chair','in my spaghetti','in my soup','on the grass','in my shoes'];

//declaring variable for read the surprise
var speakSur = document.querySelector('.btnSur');

//declaring variable for random story button
var speakPlay = document.querySelector('.btnPlay');

//declaring the sentence array for the Read the story button 
 var item =new Array(); 
 
 

 var text1 = document.querySelector('.text1');
 var text2 = document.querySelector('.text2');

// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak



/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
//this function takes an random string from an array
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.onclick = function() {
// 	speakNow(textToSpeak);
// }
speakSub.onclick = function() {
	//storing a random string from textToSpeakSub array to sub variable
	 var sub = randomValueFromArray(textToSpeakSub);
	speakNow(sub);	
	console.log(sub);     //dispalying to console
	 item[0] =  sub;    //storing value to item array
		
}

speakVerb.onclick = function() {
	//storing a random string from textToSpeakVerb array to verb variable
	var verb = randomValueFromArray(textToSpeakVerb);   
	speakNow(verb);
	
	 item[1] = verb;    //storing value to item array
}
speakAdj.onclick = function() {

	//storing a random string from textToSpeakAdj array to adj variable
	var adj = randomValueFromArray(textToSpeakAdj);
	speakNow(adj);
	
    item[2] = adj;     //storing value to item array
 }

speakObj.onclick = function() {
	//storing a random string from textToSpeakObj array to obj variable
    var obj = randomValueFromArray(textToSpeakObj);
	speakNow(obj);
	
	 item[3] = obj;    //storing value to item array
}

speakPrep.onclick = function() {
	//storing a random string from textToSpeakPrep array to prep variable
	var prep = randomValueFromArray(textToSpeakPrep);
	speakNow(prep);
	console.log(prep);   //dispalying to console
	 item[4] = prep;   //storing value to item array
}
speakSur.onclick = function() {

	console.log(item);     //dispalying to console
	speakNow(item);   
	text1.textContent = item;
	item = [];        //emptying the item array
}

//declaring random item array
var randomItem = new Array();

speakPlay.onclick = function() {

	//adding randon value from the texttoSpeak array to randomSentence array
randomItem[0] = randomValueFromArray(textToSpeakSub);
randomItem[1] = randomValueFromArray(textToSpeakVerb);
randomItem[2] = randomValueFromArray(textToSpeakAdj);
randomItem[3] = randomValueFromArray(textToSpeakObj);
randomItem[4] = randomValueFromArray(textToSpeakPrep);
	
	speakNow(randomItem);
	text2.textContent = randomItem;
	}
	
  randomItem = [];     //emptying randomItem array


