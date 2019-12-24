import React from 'react'
import pack from '@images/arrow_right.svg'
import './app.css'

const App = () => {
  return (
    <div className="app">
      <nav className="app__nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Exit</li>
        </ul>
      </nav>
      <main className="app__main">
        <div className="top-bar">
          <img className="top-bar__image" src={pack} alt="Pack it!" />
          <h1>My table</h1>
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr className="table__row">
                <th className="table__cell">ID</th>
                <th className="table__cell">Name</th>
                <th className="table__cell">Surname</th>
                <th className="table__cell">Age</th>
                <th className="table__cell">Phone</th>
                <th className="table__cell">E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table__row">
                <td className="table__cell">1</td>
                <td className="table__cell">Gleb</td>
                <td className="table__cell">Bazanov</td>
                <td className="table__cell">24</td>
                <td className="table__cell">89994445533</td>
                <td className="table__cell">glbaznov@gmail.com</td>
              </tr>
              <tr className="table__row">
                <td className="table__cell">2</td>
                <td className="table__cell">Lesha</td>
                <td className="table__cell">Moshenkov</td>
                <td className="table__cell">24</td>
                <td className="table__cell">88889994411</td>
                <td className="table__cell">kulin3020@mail.ru</td>
              </tr>
              <tr className="table__row">
                <td className="table__cell">3</td>
                <td className="table__cell">Nikita</td>
                <td className="table__cell">Tsapaev</td>
                <td className="table__cell">24</td>
                <td className="table__cell">87775557711</td>
                <td className="table__cell">glumsik@icloud.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default App;