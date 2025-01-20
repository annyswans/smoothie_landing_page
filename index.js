function changeSmoothie(fruit){
    const bowl = document.getElementById('bowl')

    if (bowl) {
        bowl.className = '';  // Limpa todas as classes

        bowl.classList.add(fruit); // Adiciona a classe baseada no nome da fruta selecionada
    } else {
        console.error("Elemento com id 'bowl' não encontrado!");
    }

    const body = document.querySelector('body');
    body.style.backgroundColor = `var(--${fruit}-background)`


    const circle = document.getElementById('circle')

    if (circle) {  // Verifica se o elemento existe
        circle.style.backgroundColor = `var(--${fruit}-circle)`;  // Aplica a cor de fundo correspondente
    } else {
        console.error("Elemento com id 'circle' não encontrado!");
    }
   
}
