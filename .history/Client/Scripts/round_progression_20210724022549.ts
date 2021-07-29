
function round1_to_round2()
{
    let match1 =  document.getElementById("round1")
    let match2 = document.getElementById("round2")
}

function nextRound()
{
    let winner = document.getElementById("winner1")

    let table = document.getElementById('newMatch')
    let newRow = table.insertRow(-1)
    let newCell = newRow.insertCell(0);
    newCell.appendChild(winner)

}