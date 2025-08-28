document.getElementById('btnAdd').addEventListener('click', function(){
    document.querySelector('.list').innerHTML = `${document.getElementById('txtTask').value}`;
    document.getElementById('txtTask').value = '';
})