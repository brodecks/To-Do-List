document.getElementById('btnAdd').addEventListener('click', function() {
    const taskValue = document.getElementById('txtTask').value;
    if (taskValue.trim() !== '') {
        const p = document.createElement('p');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        p.textContent = taskValue;
        document.querySelector('.list').appendChild(p);
        p.appendChild(checkbox);
        document.getElementById('txtTask').focus();
        document.getElementById('txtTask').value = '';
    }
});

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    if(checkbox.checked){
        const pa = document.createElement('p');
        pa.textContent = 'Bravo ! Vous avez realise toutes vos taches.';
        document.querySelector('.list').appendChild(pa);
    }
});