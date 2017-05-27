import Header from '../components/Header/Header'
import Counter from '../components/Counter/Counter'
import ss from './index.scss'

export default () => (
  <div>
    <Header />
    <p>HOME PAGE is here!</p>
    <button className='btn'>Not Rounded</button>
    <div className='overflow-hidden border rounded'>
      <ul className="list-reset">
        <li className="inline-block mr1">Half-Smoke</li>
        <li className="inline-block mr1">Kielbasa</li>
        <li className="inline-block mr1">Bologna</li>
        <li className="inline-block mr1">Prosciutto</li>
      </ul>
    </div>

    <Counter />
  </div>
)
