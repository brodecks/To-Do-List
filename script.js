document.getElementById('btnAdd').addEventListener('click', function() {
    const taskValue = document.getElementById('txtTask').value;
    if (taskValue.trim() !== '') {
        const p = document.createElement('p');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        p.textContent = taskValue;
        p.appendChild(checkbox);
        document.querySelector('.list').appendChild(p);
        document.getElementById('txtTask').focus();
        document.getElementById('txtTask').value = '';

        // Déclare test en dehors de l'écouteur
        let test;

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                test = document.createElement('p');
                test.textContent = 'hello';
                document.querySelector('.list').appendChild(test);
            } else {
                if (test) {
                    test.remove();
                }
            }
        });
    }
});