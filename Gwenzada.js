// camavor.js

document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.viego-btn');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const personagem = botao.previousElementSibling.textContent.trim();
      alert(`A Névoa Negra sussurra... Mais da história de ${personagem} será revelada em breve.`);
    });

    botao.addEventListener('mouseenter', () => {
      botao.style.boxShadow = '0 0 20px #94e2ff';
    });

    botao.addEventListener('mouseleave', () => {
      botao.style.boxShadow = 'none';
    });
  });

  // Efeito de leve oscilação da névoa para dar mais imersão
  const nevoa = document.getElementById('nevoa');
  let offset = 0;

  function animarNevoa() {
    offset += 0.5;
    nevoa.style.backgroundPosition = `${offset}px ${offset}px`;
    requestAnimationFrame(animarNevoa);
  }

  animarNevoa();
});
