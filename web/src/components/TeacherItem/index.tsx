import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
          <header>
              <img src="https://avatars3.githubusercontent.com/u/63361459?s=460&u=f9a90e4966fdbd1c69b51d5302f971913003b671&v=4" alt="Davi Freitas"/>
              <div>
                  <strong>Davi Freitas</strong>
                  <span>Math</span>
              </div>
          </header>

          <p>
              Entusiasta das melhores tecnologias de química avançada.
              <br /><br />
              Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mas de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
              <p>
                  Preço/hora
                  <strong>R$ 100,00</strong>
              </p>
              <button type="button">
                  <img src={whatsappIcon} alt="Whatsapp"/>
                  Entrar em contato
              </button>

          </footer>
      </article>
    )
}

export default TeacherItem;