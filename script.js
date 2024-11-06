const jokeText = document.getElementById("joke-text");
const characterCount = document.getElementById("character-count");
const getJokeButton = document.getElementById("get-joke");
const clearJokeButton = document.getElementById("clear-joke");

// Function to fetch joke
async function fetchJoke() {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();
        let joke = "";

        // Check if the joke is a single part or two-part
        if (data.type === "single") {
            joke = data.joke;
        } else {
            joke = `${data.setup} ${data.delivery}`;
        }

        jokeText.textContent = joke;
        characterCount.textContent = `Character count: ${joke.length}`;
    } catch (error) {
        jokeText.textContent = "Failed to fetch a joke!";
        characterCount.textContent = "Character count: 0";
    }
}

// Function to clear the joke
function clearJoke() {
    jokeText.textContent = "Press the button for a joke!";
    characterCount.textContent = "Character count: 0";
}

// Event listeners
getJokeButton.addEventListener("click", fetchJoke);
clearJokeButton.addEventListener("click", clearJoke);