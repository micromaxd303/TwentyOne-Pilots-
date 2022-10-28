const makeCards = (cardsValue, cardsMast) => {
    let deck = []
    for(const [keyValue, arrValue] of cardsValue){
        for(const [keyMast, arrMast] of cardsMast){
            deck.push([keyValue + ' ' + keyMast + ' ' + arrMast, arrValue])   
        }
    }
    return() => {   
        for(i = 0; i < deck.length; i++)
        {
            rand = Math.floor(Math.random() * deck.length);
            [deck[i], deck[rand]] = [deck[rand], deck[i]];    
        }
        return deck
    }
}

const takeCards = (shuffledCards, amount, player) => {
    let info = []
    let points = 0
    console.log(`Игрок номер ${player} берет карту`)
    for(i = takenCards; i < amount+takenCards; i++){
        
        console.log(shuffledCards.get(`${i}`)[0], shuffledCards.get(`${i}`)[1]);
        points += shuffledCards.get(`${i}`)[1]   
    } 
    console.log(`Его очки ${points}`) 
    console.log(' ')
    takenCards += amount
    player++
    return points
}

const checkWin = (result) => {
    max = 0
    for(y = 1; y < players+1; y++){
        if(result[y - 1] <= 11){
            console.log(`---У игрока ${y} мало карт, берите еще---`)
            console.log(' ')
            return false
        }
        if(Math.min.result > 21){
            console.log('Никто не выйграл лохи :)')
            return true
        }
        if(result[y-1] > max && result[y-1] <= 21){
            max = result[y-1]
            pl = y
        }
        
    }
    console.log(`Игрок ${pl} победил. Выйгриш есть - можно поесть`)
    return true
}

const game = (takeAmount) => {
    for(i = 0; end != true; i++){
        for(y = 1; y < players+1; y++){
            if(!result[y - 1]){
                result[y - 1] = 0
            }
            result[y - 1] += takeCards(obj, takeAmount, y)
        }
        takeAmount = 1
        end = checkWin(result)
    }
}

const shirt = new Map();
shirt.set('Червь', '♥')
shirt.set('Бубна', '♦')
shirt.set('Треф', '♣')
shirt.set('Пика', '♠')

const cards = new Map();
cards.set('Шестерка', 6);
cards.set('Семерка', 7);
cards.set('Восьмерка', 8);
cards.set('Девятка', 9);
cards.set('Десятка', 10);
cards.set('Валет', 2);
cards.set('Дама', 3);
cards.set('Король', 4);
cards.set('Туз', 11);

shuffleCards = makeCards(cards, shirt)
const obj = new Map(Object.entries(shuffleCards()));

max = 0
result = []
players = 3
end = false
takenCards = 0
takeAmount = 2

console.log('------------------------------------------')
console.log('Колода перемешанна, игра началась')
console.log(`В игре ${players} игроков`)
console.log('Вы игрок 1')
console.log('------------------------------------------')

game(takeAmount)
console.log(result)



