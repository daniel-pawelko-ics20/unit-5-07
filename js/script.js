// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"


// Generates random number
const rndInt = Math.floor(Math.random() * 10)
console.log(rndInt)

// Defining function that activates when user presses "check" Button
function userInputClick() {
  // Store input/requirements in variables
  const guess = parseInt(document.getElementById("guess-entered").value)

  // Checks if guess is higher, lower or equal to random number
  if (guess == rndInt) {
    document.getElementById('output').innerHTML = "You guessed the number, the number is " + rndInt
  } else if (guess < rndInt) {
    document.getElementById('output').innerHTML = "Higher"
  } else if (guess > rndInt) {
    document.getElementById('output').innerHTML = "Lower"
  }
}