/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */


/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

    const input = document.querySelector('#input');
    const itemsContainer = document.querySelector('#items');
    input.addEventListener('keydown', function(event) {
        if (event.key == 'Enter') {
          const value = input.value.trim();
        if (value == '') return;
        const li = document.createElement('li');
          li.textContent = value;
          li.addEventListener('click', function() {
            li.classList.toggle('done');
          })
          itemsContainer.appendChild(li);
    
          input.value = '';
        }
    })
  