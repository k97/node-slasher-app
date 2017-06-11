import Head from 'next/head';
import Link from 'next/link';

class Tacho extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      jid: null,
      journalList: [],
      limit: 6,
      count: 0,
      page: 1
    };
    this.fetchTimeLogged = this.fetchTimeLogged.bind(this);
  }

  componentDidMount() {
    this.fetchTimeLogged();
  }

  fetchTimeLogged() {

  }


  render() {
    const productiveVal = 75;
    return (
      <div className="vh-100 dt w-100">
        <section className="dtc v-mid tc white ph3 ph4-l">
        <div className="rippler">

                <p className="rippler--text">{productiveVal}</p>


          </div>
        </section>

        {/** <div className="hero--img" />
                <div className="outer">
            <div className="middle">
              <div className="inner"> <p className="rippler--text">{productiveVal}</p></div>
            </div>
          </div>


 */}
      </div>
    );
  }
}

export default Tacho
