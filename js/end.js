const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORE = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score); //sorting
    highScores.splice(5);  //only 5 scores can be save, others will be deleted.

    localStorage.setItem("highScores",JSON.stringify(highScores)); //convert it into string because localstorage only stores strings.
    window.location("index.html");
};
