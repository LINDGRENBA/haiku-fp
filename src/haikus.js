export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = { ...newState };
    return newState;
  };
};

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};
// This function checks for letter only input, and 17 vowels, and vowel pairs

export const syllableChecker = (string) =>{
  let letters = /^[A-Za-z']+$/;
  if (string.match(letters)){ 
    return "error";
  } else if (string.match(/[aeiouy]{1,2}/g).length === 17){
      return string
  } else {
    return "error";
  }
}

// end of regex function



const preSufRulesArray = ["pre", "ing", "re"];
const consPairRulesArray = ["th", "sh", "ph"];
const ckleRuleArray = ["ckle"];
const leRuleArray = ["le"];

word.include(preSufRulesArray[0]);
// if word includes an element from le rule, then we separate _le from the word 



// get our string
const ourString = "Is this a haiku"
// split string into an array
const ourArray = string.split(" ") // ["Is", "this", "a", "haiku"]
const withRulesArray = ourArray.map(function(element) {
  if(element.includes(leRuleArray[0] && /*letter before le is a consonant*/) {
    //split between consonant and le
    // return the letters before the split
    // return the letters after the split
    // each one is a consonant
    // can we use currying to pass a function to test each rule/Array
  });
});
// use .map to create a new array, broken up based on the rules in the arrays above

function curryingRules() {
  return function(preSufRulesArray) {
    return function(consPairRulesArray) {
      return function(ckleRuleArray) {
        return function(leRuleArray) {
        }
      }
    }
  }
}

curryingRules(preSufRulesArray)(consPairRulesArray)(ckleRuleArray)(leRuleArray);

// block of text
// split into an array of words
// check each word to see how many syllables
// 

// break into 3 lines
// check the first line = 5 syllables
    // split into an array of words
    // check each word to see how many syllables
    // syllable count of line one should be 5

// check the second line = 7 syllables
    // split into an array of words
    // check each word to see how many syllables
    // syllable count of line one should be 7

// check the third line = 5 syllables
    // split into an array of words
    // check each word to see how many syllables
    // syllable count of line one should be 5





