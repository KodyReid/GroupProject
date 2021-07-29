
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