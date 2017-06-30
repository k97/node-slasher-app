import React from 'react';
import axios from 'axios';

import Layout from '../../components/Layout/index';

class LaDetail extends React.Component {

  static getInitialProps({ query: workDetail }) {
    return { workDetail };
  }

  constructor(props) {
    super(props);
    this.state = {
      pId: null
    };
  }


  render() {
    const pId = this.props.workDetail.id;
    const { total } = this.state;
    return (
      <Layout title={`${pId} || ${'Work Detail'} - Karthik`}>
        <div className='body-content'>
          <section className='w-100 ph2 ph3-m ph4-l'>
            <div className='cf pa2'>
              <h1>Display Directions</h1>
              <p>The infamous AIR</p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default LaDetail;
