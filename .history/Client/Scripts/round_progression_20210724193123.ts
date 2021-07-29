
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