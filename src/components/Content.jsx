import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <>
        <p>
          Освіта:
          <br />
          Середня школа №123, м. Київ
          <br />
          НТУУ «КПІ ім. Ігоря Сікорського»
        </p>

        <h3>Мої хобі</h3>
        <ul>
          <li>Програмування</li>
          <li>Спорт</li>
          <li>Подорожі</li>
        </ul>

        <h3>Улюблені фільми</h3>
        <ol>
          <li>Interstellar</li>
          <li>Inception</li>
          <li>The Matrix</li>
        </ol>

        <p>
          Моє улюблене місто — <b>Прага</b>.
        </p>
      </>
    );
  }
}

export default Content;
