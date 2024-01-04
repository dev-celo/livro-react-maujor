import Image from '../images/logo.svg';

export function Logo() {
  return (
    <header>
      <section id="logo">
        <img width={250} src={ Image } alt="Logo Livros salvam vidas colorido em diferentes tons de azul, vermelho e laranja" />
      </section>
    </header>
  );
}