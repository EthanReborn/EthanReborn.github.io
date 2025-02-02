import {nouns, adjectives, verbs, locationsAndPlurals, abilities, weapons, vehicles} from './words.js'

document.title = "destiny's handbook 2"


shuffleAll();

var nextDivs = [];
var nextIndex = 0;
var wIndex = 0;
var wordLists = [];

//character word bank
wordLists.push(adjectives);
wordLists.push(nouns);

//title word bank
wordLists.push(adjectives);
wordLists.push(nouns);

//destiny word bank
wordLists.push(verbs);
wordLists.push(locationsAndPlurals);

//your name
// wordLists.push(firstNames);
// wordLists.push(lastNames);

//weapon word bank
wordLists.push(adjectives);
wordLists.push(weapons);

//ability word bank
var combined1 = adjectives.concat(nouns);
shuffleArray(combined1);
wordLists.push(combined1);
wordLists.push(abilities);

//companion work bank
wordLists.push(adjectives);
wordLists.push(nouns);

//vehicle word bank
wordLists.push(adjectives);
wordLists.push(vehicles);

//weakness word bank
var combined2 = nouns.map(item => [...item]).concat(weapons.map(item => [...item])); //deep copy
shuffleArray(combined2);

combined2.forEach(function(item, index) {
    combined2[index][0] = pluralize(item[0]); // Modify the word (first element) of each sub-array
});

wordLists.push(locationsAndPlurals);
wordLists.push(combined2);

//------------------------------Creating dom elements and storing them in list-------------------------------//

//main div
var div = document.createElement("div");
div.setAttribute('id', 'main');
div.setAttribute('class', 'stuff-box')

var title = document.createElement('h2');
title.textContent = "Destiny's Handbook 2";

var linebreak = document.createElement("br");

var manual = document.createElement('p');
manual.textContent = "click on changing words to select";
manual.setAttribute('class', 'small-text');


//YOU ARE A
var youAreDiv = document.createElement('h2');
youAreDiv.textContent = "You Are a: "
nextDivs.push(youAreDiv);

var adj1 = document.createElement('button');
adj1.textContent = "";
adj1.setAttribute('id', 'adj1');
adj1.onclick = function () {
    toggleSelected1();
}
adj1.style.display = "inline";
adj1.className = "text";
nextDivs.push(adj1);

var noun1 = document.createElement('button');
noun1.textContent = "";
noun1.setAttribute('id', 'noun1');
noun1.onclick = function () {
    toggleSelected2();
}
noun1.style.display = "inline";
noun1.className = "text";
nextDivs.push(noun1);

var firstContainer = document.createElement('div');
firstContainer.setAttribute('class', 'clear-column');
firstContainer.appendChild(adj1);
firstContainer.appendChild(noun1);


//THE
var theDiv = document.createElement('h2');
theDiv.textContent = "The: "
nextDivs.push(theDiv);

var adj2 = document.createElement('button');
adj2.textContent = "";
adj2.setAttribute('id', 'adj2');
adj2.onclick = function () {
    toggleSelected1();
}
adj2.style.display = "inline";
adj2.className = "text";
nextDivs.push(adj2);

var noun2 = document.createElement('button');
noun2.textContent = "";
noun2.setAttribute('id', 'noun2');
noun2.onclick = function () {
    toggleSelected2();
}
noun2.style.display = "inline";
noun2.className = "text";
nextDivs.push(noun2);


//DESTINED TO
var destinedDiv = document.createElement('h2');
destinedDiv.textContent = "Destined to: "
nextDivs.push(destinedDiv);

var verb1 = document.createElement('button');
verb1.textContent = "";
verb1.setAttribute('id', 'verb1');
verb1.onclick = function () {
    toggleSelected1();
}
verb1.style.display = "inline";
verb1.className = "text";
nextDivs.push(verb1);

var noun3 = document.createElement('button');
noun3.textContent = "";
noun3.setAttribute('id', 'noun3');
noun3.onclick = function () {
    toggleSelected2();
}
noun3.style.display = "inline";
noun3.className = "text";
nextDivs.push(noun3);


// var answer4 = document.createElement('h2');
// answer4.textContent = "Your name: "
// nextDivs.push(answer4);
//
// var name3 = document.createElement('button');
// name3.textContent = "";
// name3.setAttribute('id', 'name3');
// name3.onclick = function () {
//     toggleSelected1();
// }
// name3.style.display = "inline";
// name3.className = "text";
// nextDivs.push(name3);
//
// var name4 = document.createElement('button');
// name4.textContent = "";
// name4.setAttribute('id', 'name4');
// name4.onclick = function () {
//     toggleSelected2();
// }
// name4.style.display = "inline";
// name4.className = "text";
// nextDivs.push(name4);


//YOUR WEAPON
var weaponDiv = document.createElement('h2');
weaponDiv.textContent = "Your weapon: "
nextDivs.push(weaponDiv);

var adj3 = document.createElement('button');
adj3.textContent = "";
adj3.setAttribute('id', 'adj3');
adj3.onclick = function () {
    toggleSelected1();
}
adj3.style.display = "inline";
adj3.className = "text";
nextDivs.push(adj3);

var weapon1 = document.createElement('button');
weapon1.textContent = "";
weapon1.setAttribute('id', 'weapon1');
weapon1.onclick = function () {
    toggleSelected2();
}
weapon1.style.display = "inline";
weapon1.className = "text";
nextDivs.push(weapon1);


//SPECIAL ABILITY
var abilityDiv = document.createElement('h2');
abilityDiv.textContent = "Special Ability: "
nextDivs.push(abilityDiv);

var adj4 = document.createElement('button');
adj4.textContent = "";
adj4.setAttribute('id', 'adj4');
adj4.onclick = function () {
    toggleSelected1();
}
adj4.style.display = "inline";
adj4.className = "text";
nextDivs.push(adj4);

var ability1 = document.createElement('button');
ability1.textContent = "";
ability1.setAttribute('id', 'ability1');
ability1.onclick = function () {
    toggleSelected2();
}
ability1.style.display = "inline";
ability1.className = "text";
nextDivs.push(ability1);


//YOUR COMPANION
var companionDiv = document.createElement('h2');
companionDiv.textContent = "Your companion: "
nextDivs.push(companionDiv);

var adj5 = document.createElement('button');
adj5.textContent = "";
adj5.setAttribute('id', 'adj5');
adj5.onclick = function () {
    toggleSelected1();
}
adj5.style.display = "inline";
adj5.className = "text";
nextDivs.push(adj5);

var noun4 = document.createElement('button');
noun4.textContent = "";
noun4.setAttribute('id', 'noun4');
noun4.onclick = function () {
    toggleSelected2();
}
noun4.style.display = "inline";
noun4.className = "text";
nextDivs.push(noun4);


//YOUR VEHICLE
var vehicleDiv = document.createElement('h2');
vehicleDiv.textContent = "Your vehicle: "
nextDivs.push(vehicleDiv);

var adj7 = document.createElement('button');
adj7.textContent = "";
adj7.setAttribute('id', 'adj7');
adj7.setAttribute('class', 'clear-1-column');
adj7.onclick = function () {
    toggleSelected1();
}
adj7.style.display = "inline";
adj7.className = "text";
nextDivs.push(adj7);

var vehicle1 = document.createElement('button');
vehicle1.textContent = "";
vehicle1.setAttribute('id', 'vehicle1');
vehicle1.onclick = function () {
    toggleSelected2();
}
vehicle1.style.display = "inline";
vehicle1.className = "text";
nextDivs.push(vehicle1);


//YOUR WEAKNESS
var weaknessDiv = document.createElement('h2');
weaknessDiv.textContent = "Your weakness: "
nextDivs.push(weaknessDiv);

var adj6 = document.createElement('button');
adj6.textContent = "";
adj6.setAttribute('id', 'adj6');
adj6.onclick = function () {
    toggleSelected1();
}
adj6.style.display = "center";
adj6.className = "text";
nextDivs.push(adj6);

var noun5 = document.createElement('button');
noun5.textContent = "";
noun5.setAttribute('id', 'noun5');
noun5.onclick = function () {
    toggleSelected2();
}
noun5.style.display = "center";
noun5.className = "text";
nextDivs.push(noun5);

//add space
var space1 = document.createElement('span');
space1.textContent = "\t \t \t";

//running score 
var score = 0; 
var scoreBox = document.createElement('div');
scoreBox.textContent = `Epicness: ${score.toLocaleString()}`
scoreBox.setAttribute('id', 'score');
scoreBox.className = "score-box"; 

//selected/unselected flags for each of the two words being randomly generated
var selected1 = false;
var selected2 = false;

//start building DOM
document.body.appendChild(div);
div.appendChild(title);
div.appendChild(manual);
div.appendChild(youAreDiv);
div.appendChild(firstContainer);
div.appendChild(scoreBox);

//start random wheel for first question
leftWordLooper(adjectives, 'adj1');
rightWordLooper(nouns, 'noun1');


// function click() {

//     var amount = num1.value;
//     var unit = op.value;
//     console.log(amount);
//     var expression = document.createElement('p');
//     var name = op.label;
//     console.log(name);

//     document.getElementById('loading').textContent = "please wait ...";

//     var unitUrl = `http://localhost:8000/unitconv/convert?from=${unit}&to=t_oz&value=${amount}`;

//     if(num1.value.length == 0){
//         expression.setAttribute('class', 'red');
//         expression.textContent = new Date().toLocaleString() + " Error: Missing Input";
//         document.getElementById('loading').textContent += " Done";
//         rsTable.prepend(expression);
//         expression.onclick = function(){rsTable.removeChild(expression)};
//         return;
//     }
//     fetch(unitUrl)
//         .then( response => response.json() )
//         .then( json => {
//             // troyOzNum = json['value'];
//             console.log(troyOzNum);
//             console.log(json);
//         })
//         .catch( err => {
//             let message = `Request to ${unitUrl} did not work`;
//             document.getElementById('loading').textContent += " Request to 'localhost:8000/unitconv failed' ...";
//             // troyOzNum = NaN;
//             console.log(message);
//         })
//         .finally(() => {
//             if(!Number.isNaN(troyOzNum)){
//                 document.getElementById('loading').textContent += "  All done!";
//                 expression.setAttribute('class', 'stuff-box');
//                 expression.textContent = new Date().toLocaleString() + " Your worth in GOLD is: " + Number(troyOzNum * curPrice).toFixed(3);
//                 expression.onclick = function(){rsTable.removeChild(expression)};
//                 rsTable.prepend(expression);
//             }
//         })
// }

// function computeNum() {

//     document.getElementById('loading').textContent = "fetching current price of gold ... ";

//     var goldUrl = "https://data.nasdaq.com/api/v3/datasets/LBMA/GOLD.json?api_key=tmkky34G3yr4zpS-wAdJ&column_index=1&limit=1";

//     fetch(goldUrl)
//         .then( response => response.json() )
//         .then( json => {
//             theData = json;
//             curPrice = theData.dataset.data[0][1];
//             console.log(curPrice);
//         })
//         .catch( err => {
//             let message = `Request to ${goldUrl} did not work`;
//             document.getElementById('loading').textContent += " Request to data.nasdaq.com failed ... ";
//             console.log(err);
//             return;
//         })
//         .finally(() => {
//             if (curPrice){
//                 document.getElementById('loading').textContent = "";
//                 document.getElementById('listPrice').textContent = "The Price of Gold as of " + new Date().toLocaleString() + " is $" + curPrice + " per Troy Ounce.";
//             }
//         })
// }


function leftWordLooper(inputList, tagName) {
    let index = 0
    let list = inputList;

    function displayNextName() {
        index = (index + 1) % list.length;  // Loop back to the beginning when reaching the end
        document.getElementById(tagName).textContent = list[index][0];

        //if not selected keep looping
        if (!selected1) {
            setTimeout(displayNextName, 30); //displayNextName calls itself again in 30ms
        }
        //remove onclick function and turn off color change on hover 
        else{
            nextDivs[nextIndex + 1].onclick = function () { };
            nextDivs[nextIndex + 1].setAttribute('class', 'non-hover-text');
            
           //update score 
           let wordValue = list[index][1];
           let target = score + wordValue; 

           if(target < 0){
               scoreBox.className = "score-box-red"; 
           } else {
               scoreBox.className = "score-box-green"; 
           }

           animateScoreUpdate(document.getElementById('score'), score, target, 800); 
           score = target; 
        }
    }

    displayNextName();
}

function rightWordLooper(inputList, tagName) {
    let index = 0
    let list = inputList;

    if(inputList == null){
        nextIndex += 3;
        return;
    }

    function displayNextName() {
        index = (index + 1) % list.length;  // Loop back to the beginning when reaching the end
        document.getElementById(tagName).textContent = list[index][0];
    
        if (!selected2) {
            setTimeout(displayNextName, 30); //displayNextName calls itself again in 30ms
        }
        else{
            nextDivs[nextIndex + 2].onclick = function () { };
            nextDivs[nextIndex + 2].setAttribute('class', 'non-hover-text');

            //update score 
            let wordValue = list[index][1];
            let target = score + wordValue; 

            if(target < 0){
                scoreBox.className = "score-box-red"; 
            } else {
                scoreBox.className = "score-box-green"; 
            }

            animateScoreUpdate(document.getElementById('score'), score, target, 800); 
            score = target; 
        }
    }

    displayNextName();
}

function toggleSelected1() {
    console.log("left toggle selected")
    selected1 = !selected1;

    //how long to wait until next section 
    if(selected1 && selected2){
        setTimeout( () => {

            console.log(nextDivs[nextIndex].textContent);

            if (isVowel(nextDivs[nextIndex].textContent[nextDivs[nextIndex].textContent.length - 1])){

            }

            nextIndex += 3;
            wIndex += 2;
            console.log("left word chosen")

            //reposition score box
            let box = document.getElementById('score');

            // Apply fade-in-out animation
            box.classList.add('fade-in-out');

            // Ensure the class is removed after the animation completes (1 second)
            setTimeout(() => {
                box.classList.remove('fade-in-out');
            }, 100); // Match this with the animation duration in CSS (1s)

            setTimeout(completedStep(nextDivs[nextIndex], wordLists[wIndex], wordLists[wIndex + 1]), 10);
        }, 850);
    }
}

function toggleSelected2() {
    console.log("right toggle selected")
    selected2 = !selected2;

    //how long to wait until next section 
    if(selected1 && selected2) {
         setTimeout( () => {
            nextIndex += 3;
            wIndex += 2;
            console.log("right word chosen")

            //reposition score counter
            let box = document.getElementById('score');

            // Apply fade-in-out animation
            box.classList.add('fade-in-out');

            // Ensure the class is removed after the animation completes (1 second)
            setTimeout(() => {
                box.classList.remove('fade-in-out');
            }, 100); // Match this with the animation duration in CSS (1s)

            setTimeout(completedStep(nextDivs[nextIndex], wordLists[wIndex], wordLists[wIndex + 1]), 10);
        }, 850);
    }
}

function animateScoreUpdate(element, startValue, targetValue, duration) {
    const frameRate = 60; // Roughly 60 frames per second
    const totalFrames = Math.round(duration / (duration / frameRate));
    const increment = (targetValue - startValue) / totalFrames;
    let currentValue = startValue;
    let frame = 0;
    let points = targetValue - startValue; 
  
    function updateScore() {
      frame++;
      currentValue += increment;
  
      // Update the display
          // Update the display with colored spans
        element.innerHTML = `
            <span style="color: ${points > 0 ? 'green' : 'red'};">
            ${points > 0 ? '+' : ''}${points}
            </span><br>
            Epicness: ${Math.round(currentValue).toLocaleString()}
        `;
  
      // Check if the animation should stop
      if (frame < totalFrames) {
        requestAnimationFrame(updateScore);
      } else {
        // Ensure the final score is precise
        element.textContent = `Epicness: ${targetValue.toLocaleString()}`;
      }
    }
  
    requestAnimationFrame(updateScore);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function completedStep(div, list1, list2) {

    //if end of game, end of game cleanup
    if(nextIndex >= nextDivs.length || wIndex >= wordLists.length){
        console.log('create button');

        //pluralize weaknesses
        // setTimeout( () =>
        // {
        //     let oldText = nextDivs[nextIndex - 1].textContent.concat("s");
        //     let oldText = pluralize(nextDivs[nextIndex - 1].textContent);
        //     nextDivs[nextIndex - 1].textContent = oldText;
        //     console.log(nextDivs[nextIndex - 1]);
        //     nextDivs[nextIndex - 1].style.display='none';
        //     nextDivs[nextIndex - 1].style.display='block';
        // }, 10);

        //turn off hover and toggles for last words
        nextDivs[nextDivs.length -1].onclick = function () { console.log('dummy function'); }
        nextDivs[nextDivs.length -2].onclick = function () { console.log('dummy function'); }
        nextDivs[nextDivs.length -1].setAttribute('class', 'non-hover-text');
        nextDivs[nextDivs.length -2].setAttribute('class', 'non-hover-text');

        //create save png button
        let save = document.createElement('button');
        save.setAttribute('class', 'button');
        save.setAttribute('id', 'saveButton');
        save.textContent = "Save as PNG";

        //save as png function
        save.onclick = function () {
            setTimeout(() => {
                    savePNG();
                }, 100);
        };

        //save as text button
        let saveTxt = document.createElement('button');
        saveTxt.setAttribute('class', 'button');
        saveTxt.setAttribute('id', 'saveTxt');
        saveTxt.textContent = "Save as Text";

        //save as txt function
        saveTxt.onclick = function () {
            setTimeout(() => {
                    saveTXT();
                }, 100);
        };

        //play again
        let restart = document.createElement('button');
        restart.setAttribute('class', 'red-button');
        restart.setAttribute('id', 'restart');
        restart.textContent = "Play Again?";

        restart.onclick = function () {
            setTimeout( () => {
                resetPage();
            }, 100);
        }

        //div container of button1
        let buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class', 'tall-centered');
        buttonDiv.appendChild(restart);
        document.getElementById('main').appendChild(buttonDiv);

        //div container of button2
        let buttonDiv2 = document.createElement('div');
        buttonDiv2.setAttribute('class', 'tall-centered');
        buttonDiv2.appendChild(save);
        document.getElementById('main').appendChild(buttonDiv2);

        //div container of button3
        let buttonDiv3 = document.createElement('div');
        buttonDiv3.setAttribute('class', 'tall-centered');
        buttonDiv3.appendChild(saveTxt);
        document.getElementById('main').appendChild(buttonDiv3);

        //set main div visible just in case for png capture
        document.getElementById('main').style.visibility = "visible";
        document.getElementById('main').height = screen.height;
        document.getElementById('main').width = screen.width;

        return;
    }

    //shuffle between each second
    shuffleAll();

    let space = document.createElement('p');
    space.textContent = "\t";
    console.log(nextDivs.length);
    console.log(nextIndex);
    space.style.display = "inline";

    //hard code "son of" based on last name
    // if (nextIndex == 12){
    //     let relations = [
    //         "Cousin of: ",
    //         "Son of: ",
    //         "Father of:",
    //         "Brother of: ",
    //         "Sister of: ",
    //         "Uncle of: ",
    //         "Aunt of: ",
    //         "Daughter of: ",
    //         "Grandfather of: ",
    //         "Grandmother of: ",
    //         "2nd Cousin of: ",
    //         "3rd Cousin of",
    //         "4th Cousin of: ",
    //         "5th Cousin of: ",
    //         "6th Cousin of: ",
    //         "Wife of: ",
    //         "Husband of: "
    //     ];
    //
    //     shuffleArray(relations);
    //     var sonOf = document.createElement('h2');
    //     sonOf.textContent = relations[0];
    //     document.getElementById('main').appendChild(sonOf);
    //
    //     let altContainer = document.createElement('div');
    //     altContainer.setAttribute('class', 'clear-1-column');
    //     var text = document.createElement('p');
    //     altContainer.appendChild(text);
    //
    //     setTimeout ( () => {
    //         let search = name4.textContent;
    //         console.log(search)
    //
    //         for (let i of fullNames) {
    //             if (i.split(" ")[1] == search) {
    //                 search = i;
    //             }
    //         }
    //         console.log(search)
    //
    //         text.textContent = search;
    //         text.setAttribute('class', 'centered-text');
    //
    //     }, 100);
    //
    //     document.getElementById('main').appendChild(altContainer);
    // }

    //--------------------------------------//
    //----create and append next section----//
    //--------------------------------------//

    let box = document.getElementById('score');

    //retrieve main doc div
    document.getElementById('main').insertBefore(div, box);

    //create container for next section 
    let container = document.createElement('div');
    container.setAttribute('class', 'clear-column');

    //apply centered 1 column container (for 'son of' section)
    if (nextIndex == nextDivs.length - 3) {
        //alert('center column section'); 
        space.textContent = "\t and \t";
        space.setAttribute('class', 'centered-text');
        container.setAttribute('class', 'clear-1-column');
        container.appendChild(nextDivs[nextIndex + 1]);
        container.appendChild(space);
        container.appendChild(nextDivs[nextIndex + 2]);
        document.getElementById('main').insertBefore(container, box);

    //apply two column container (all other containers)
    }else{
        // //document.getElementById('main').appendChild(document.getElementById('score'));
        // const box = document.getElementById('score');

        // // Slide the scoreBox down when needed
        // box.classList.add('slide-down');

        console.log(nextDivs); 
        container.appendChild(nextDivs[nextIndex + 1]);
        container.appendChild(space);
        container.appendChild(nextDivs[nextIndex + 2]);
        document.getElementById('main').insertBefore(container, box);
    }

    //reset flags to unselected 
    setTimeout(() => {
        selected1 = !selected1;
        selected2 = !selected2;
    }, 100);

    document.getElementById('adj1').setAttribute('class', 'non-hover-text');
    document.getElementById('noun1').setAttribute('class', 'non-hover-text');

    //pass next section to looper function
    setTimeout(() => leftWordLooper(list1, nextDivs[nextIndex + 1].id), 100);
    setTimeout(() => rightWordLooper(list2, nextDivs[nextIndex + 2].id), 200);

    //let box = document.getElementById('score');
    //box.classList.remove('fade-number'); 
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function shuffleAll() {
    shuffleArray(nouns);
    shuffleArray(adjectives);
    shuffleArray(verbs);
    // shuffleArray(firstNames);
    // shuffleArray(lastNames);
    // shuffleArray(fullNames);
    shuffleArray(abilities);
    shuffleArray(weapons);
    shuffleArray(locationsAndPlurals);
}

//save raw text as .txt
function saveTXT() {
    let string = "";
    let count = 0;

    for (let i of nextDivs) {
        console.log(i.tagName);
        if (i.tagName != "BUTTON") {
            string += "\n";
            string += "\n";
        }else{
            string += "   ";
        }
        string += i.textContent;
        string += " ";
        if (i.tagName != "BUTTON"){
            string += "\n";
            string += "\n";
        }
        count += 3;
    }

    const title = document.getElementById('adj1').textContent + " " + document.getElementById('noun1').textContent + ".txt";

    const link = document.createElement('a');
    const file = new Blob([string], {type: 'text/plain'});
    link.href = URL.createObjectURL(file);
    link.download = title;
    link.click();
    URL.revokeObjectURL(link.href);
}

function pluralize(word) {
    if(word == "xenomorph"){
        return "xenomorphs";
    }
    if(word == "cyclops"){
        return "cyclops";
    }
    if(word == "psychopath"){
        return "psychopaths";
    }
    if(word == "donkey"){
        return "donkeys";
    }
    if(word == "poison"){
        return "poison";
    }
    if(word == "venom"){
        return "venom";
    }
    if(word == "shoes"){
        return "shoes";
    }
    if(word == "man"){
        return "men";
    }
    if(word == "claws"){
        return "claws";
    }
    if(word == "woman"){
        return "women";
    }
    if(word == "elf"){
        return "elves";
    }
    if(word == "knife"){
        return "knives";
    }
    if(word == "knuckles"){
        return "knuckles";
    }
    if(word == "night-vision"){
        return "night-vision";
    }
    if(word == "sleigh"){
        return "sleighs";
    }
    if(word == "soap"){
        return "soap";
    }
    else if(word[word.length -1] == "h" || word[word.length -1] == "o" || word[word.length -1] == "s"){
        return word += "es";
    }
    else if(word[word.length -1] == "y"){
        word = word.slice(0, word.length - 1);
        word += "ies";
        return word;
    }
    else {
        return word += "s";
    }
}


function resetPage() {

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    shuffleAll();

    //score
    nextDivs = [];
    nextIndex = 0;
    wIndex = 0;
    score = 0; 
    scoreBox.textContent = `Epicness: ${score.toLocaleString()}`;

    document.body.removeChild(div);
    // document.body.remove();
    div.replaceChildren();

    nextDivs.push(youAreDiv);


    adj1.textContent = "";
    adj1.onclick = function () {
        toggleSelected1();
    }
    adj1.style.display = "inline";
    adj1.className = "text";
    nextDivs.push(adj1);

    noun1.textContent = "";
    noun1.setAttribute('id', 'noun1');
    noun1.onclick = function () {
        toggleSelected2();
    }
    noun1.style.display = "inline";
    noun1.className = "text";
    nextDivs.push(noun1);


    nextDivs.push(theDiv);


    adj2.textContent = "";
    adj2.onclick = function () {
        toggleSelected1();
    }
    adj2.style.display = "inline";
    adj2.className = "text";
    nextDivs.push(adj2);

    noun2.textContent = "";
    noun2.onclick = function () {
        toggleSelected2();
    }
    noun2.style.display = "inline";
    noun2.className = "text";
    nextDivs.push(noun2);


    nextDivs.push(destinedDiv);


    verb1.textContent = "";
    verb1.onclick = function () {
        toggleSelected1();
    }
    verb1.style.display = "inline";
    verb1.className = "text";
    nextDivs.push(verb1);

    noun3.textContent = "";
    noun3.onclick = function () {
        toggleSelected2();
    }
    noun3.style.display = "inline";
    noun3.className = "text";
    nextDivs.push(noun3);


    // nextDivs.push(answer4);
    //
    //
    // name3.textContent = "";
    // name3.onclick = function () {
    //     toggleSelected1();
    // }
    // name3.style.display = "inline";
    // name3.className = "text";
    // nextDivs.push(name3);
    //
    // name4.textContent = "";
    // name4.onclick = function () {
    //     toggleSelected2();
    // }
    // name4.style.display = "inline";
    // name4.className = "text";
    // nextDivs.push(name4);


    nextDivs.push(weaponDiv);


    adj3.textContent = "";
    adj3.onclick = function () {
        toggleSelected1();
    }
    adj3.style.display = "inline";
    adj3.className = "text";
    nextDivs.push(adj3);

    weapon1.textContent = "";
    weapon1.onclick = function () {
        toggleSelected2();
    }
    weapon1.style.display = "inline";
    weapon1.className = "text";
    nextDivs.push(weapon1);


    nextDivs.push(abilityDiv);


    adj4.textContent = "";
    adj4.onclick = function () {
        toggleSelected1();
    }
    adj4.style.display = "inline";
    adj4.className = "text";
    nextDivs.push(adj4);

    ability1.textContent = "";
    ability1.onclick = function () {
        toggleSelected2();
    }
    ability1.style.display = "inline";
    ability1.className = "text";
    nextDivs.push(ability1);


    nextDivs.push(companionDiv);


    adj5.textContent = "";
    adj5.onclick = function () {
        toggleSelected1();
    }
    adj5.style.display = "inline";
    adj5.className = "text";
    nextDivs.push(adj5);

    noun4.textContent = "";
    noun4.onclick = function () {
        toggleSelected2();
    }
    noun4.style.display = "inline";
    noun4.className = "text";
    nextDivs.push(noun4);


    //vehicle 
    nextDivs.push(vehicleDiv);


    adj7.textContent = "";
    adj7.onclick = function () {
        toggleSelected1();
    }
    adj7.style.display = "inline";
    adj7.className = "text";
    nextDivs.push(adj7);

    vehicle1.textContent = "";
    vehicle1.onclick = function () {
        toggleSelected2();
    }
    vehicle1.style.display = "inline";
    vehicle1.className = "text";
    nextDivs.push(vehicle1);


    nextDivs.push(weaknessDiv);


    adj6.textContent = "";
    adj6.onclick = function () {
        toggleSelected1();
    }
    adj6.style.display = "center";
    adj6.className = "text";
    nextDivs.push(adj6);

    noun5.textContent = "";
    noun5.onclick = function () {
        toggleSelected2();
    }
    noun5.style.display = "center";
    noun5.className = "text";
    nextDivs.push(noun5);

    //selected flags for each of the two words being randomly generated
    selected1 = false;
    selected2 = false;

    //add first section to dom 
    document.body.appendChild(div);
    div.appendChild(title);
    div.appendChild(manual);
    div.appendChild(youAreDiv);
    div.appendChild(firstContainer);
    div.append(scoreBox); 

    //start random wheel for first question
    leftWordLooper(adjectives, 'adj1');
    rightWordLooper(nouns, 'noun1');
}

function isVowel(letter) {
    // Convert letter to lowercase to handle both uppercase and lowercase letters
    letter = letter.toLowerCase();
    // Check if the letter is one of the vowels
    return ['a', 'e', 'i', 'o', 'u'].includes(letter);
}
