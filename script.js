document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('start-button').style.display = 'none';
  });
  
  document.getElementById('play-button').addEventListener('click', function() {
    var playerChoice = document.querySelector('input[name="choice"]:checked').value;
    var playerNumber = parseInt(document.getElementById('player-number').value);
    var robotNumber = Math.floor(Math.random() * 6);
    var total = playerNumber + robotNumber;
    var result = (total % 2 === 0) ? 'par' : 'impar';
    var outcome = (result === playerChoice) ? 'Você ganhou!' : 'O robô ganhou!';
  
    document.getElementById('result').innerHTML = `Você escolheu ${playerChoice} e ${playerNumber}. O robô escolheu ${robotNumber}.<br>Total: ${total} (${result}). ${outcome}`;
  
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('start-button').style.display = 'block';
  });
  