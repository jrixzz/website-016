document.getElementById('revealButton').addEventListener('click', function() {
    const surprise = document.getElementById('surprise');
    surprise.classList.toggle('visible');
    if (surprise.classList.contains('visible')) {
        surprise.classList.remove('hidden');
    } else {
        surprise.classList.add('hidden');
    }
});
