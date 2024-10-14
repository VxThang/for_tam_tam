document.getElementById('dating-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const love = document.getElementById('love').value;
    
    alert(`Hey ${name}, I'm so happy to know that you love ${love}!`);
});
