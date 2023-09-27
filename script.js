document.querySelectorAll('.main_button').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling //получаем последующий элемент 

        if (content.style.maxHeight) {
            document.querySelectorAll('.main_content').forEach((el) => el.style.maxHeight = null) // скрываем элемент если maxHeight не ноль
        } else {
            content.style.maxHeight = content.scrollHeight + 'px' //показываем элемент в противном случае
        }
    })
})
