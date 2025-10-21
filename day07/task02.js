const box = document.querySelectior(".white");

box.addEventListener("click", function() {
let name = "";

// Tant que le nom n'est pas rempli
while (!name) {
  name = prompt("what's your name?");
}

const confirmed = confirm('Are you sure that ${name} is your name ?');

if (confirmed) {
  alert('Hello ${name}!');
box.textContent = 'Hello ${name}!';
  }
});
