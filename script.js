function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    addToHistory(`${document.getElementById('display').value} = ${result}`);
    document.getElementById('display').value = result;
  } catch {
    alert("Invalid calculation!");
  }
}

function calculatePercentage() {
  let value = document.getElementById('display').value;
  if (value) {
    document.getElementById('display').value = eval(value) / 100;
  }
}

function calculateSquareRoot() {
  let value = document.getElementById('display').value;
  if (value) {
    document.getElementById('display').value = Math.sqrt(eval(value));
  }
}

function calculateSquare() {
  let value = document.getElementById('display').value;
  if (value) {
    document.getElementById('display').value = Math.pow(eval(value), 2);
  }
}

function calculateReciprocal() {
  let value = document.getElementById('display').value;
  if (value) {
    document.getElementById('display').value = 1 / eval(value);
  }
}

function insertPi() {
  document.getElementById('display').value += Math.PI.toFixed(8);
}

function addToHistory(entry) {
  const list = document.getElementById('history-list');
  const item = document.createElement('li');
  item.textContent = entry;
  list.prepend(item);
}

function toggleHistory() {
  const panel = document.getElementById('history-panel');
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}
