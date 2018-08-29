shuffle('.col-md-3.portfolio-item');
shuffle('.col-md-2.portfolio-item');
shuffle('.team-member', function (node) {
  return node.parentNode;
});

function shuffle (query, mapping) {
  var results = document.querySelectorAll(query);
  var shuffled = [];

  for (var i = 0; i < results.length; i++) {
    shuffled[i] = mapping ? mapping(results[i]) : results[i];
  }

  shuffleArray(shuffled);

  var root = shuffled[0].parentNode;
  for (var i = shuffled.length - 1; i > 0; i--) {
    root.insertBefore(shuffled[i], shuffled[0]);
  }
}

function shuffleArray(array) {
  var tmp, current, top = array.length;

  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }

  return array;
}
