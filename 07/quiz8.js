var btn = document.getElementById('btn');
var Min = document.getElementById('min').value;
var Max = document.getElementById('max').value;

btn.addEventListener('click', function () {
  document.getElementById('box').innerHTML = Math.floor(
    Math.random() * (Max - Min) + Min,
  );
  btn.disabled = 'disabled';
  setInterval(() => {
    document.getElementById('box').innerHTML++;
  }, 100);
});
