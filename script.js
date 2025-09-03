document.getElementById('btnAdd').addEventListener('click', function() {
    const taskValue = document.getElementById('txtTask').value;
    if (taskValue.trim() !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.textContent = taskValue;
        document.querySelector('.list').appendChild(li);
        li.appendChild(checkbox);
        document.getElementById('txtTask').focus();
        document.getElementById('txtTask').value = '';
    }
});