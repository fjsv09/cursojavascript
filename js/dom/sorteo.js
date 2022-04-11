const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];
        
        // console.log(`1: ${$players}`, `2: ${random}`, `3: ${winner}`);
        
        return `El ganador es: ${winner.textContent}`;

    }

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
            console.log(result);            
        }
    });

}


const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];
    
    return `El ganador es: ${winner.textContent}`;
}

//Comentarios de Youtube: obtner uno aleatorio
// getWinnerComment("ytd-comment-renderer #author-text span")