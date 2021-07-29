
function round1_to_round2()
{
    let match1 =  document.getElementById("round1")
    let match2 = document.getElementById("round2")
}

function nextRound()
{
    let winner = document.getElementById('winner1')

    let newParticipant = document.getElementById('newPart')

    let clone = winner.cloneNode(true)

    newParticipant.appendChild(clone)
    document.getElementById("myButton").disabled = true;
}

function nextRoundB()
{
    let winner = document.getElementById('winner2')

    let newParticipant = document.getElementById('newPart')

    let clone = winner.cloneNode(true)

    newParticipant.prepend(clone)
}

function nextRoundC()
{
    let winner = document.getElementById('winner3')

    let newParticipant = document.getElementById('newPart2')

    let clone = winner.cloneNode(true)

    newParticipant.prepend(clone)
}

function nextRoundD()
{
    let winner = document.getElementById('winner4')

    let newParticipant = document.getElementById('newPart2')

    let clone = winner.cloneNode(true)

    newParticipant.prepend(clone)
}

function nextRoundE()
{
    let winner = document.getElementById('winner5')

    let newParticipant = document.getElementById('newPart3')

    let clone = winner.cloneNode(true)

    newParticipant.prepend(clone)
}

function nextRoundF()
{
    let winner = document.getElementById('winner6')

    let newParticipant = document.getElementById('newPart3')

    let clone = winner.cloneNode(true)

    newParticipant.prepend(clone)
}

function nextRoundG()
{
    let winner = document.getElementById('winner7')

    let newParticipant = document.getElementById('newPart4')

    let clone = winner.cloneNode(true)

    newParticipant.prepend(clone)
}

function nextRoundH()
{
    let winner = document.getElementById('winner8')

    let newParticipant = document.getElementById('newPart4')

    let clone = winner.cloneNode(true)

    newParticipant.prepend(clone)
}