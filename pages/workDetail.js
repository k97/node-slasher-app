import React from 'react';
import axios from 'axios';

import Layout from '../components/Layout/index';

class LaDetail extends React.Component {

  static getInitialProps({ query: workDetail }) {
    return { workDetail };
  }

  constructor(props) {
    super(props);
    this.state = {
      pId: null
    };
    this.fetchProjectDetail = this.fetchProjectDetail.bind(this);
  }

  componentDidMount() {
    this.fetchProjectDetail();
  }

  fetchProjectDetail() {
    const urlVal = this.props.workDetail.id;
    console.log("GetLabDetail", this.props.workDetail.id);

  }

  render() {
    const pId = this.props.workDetail.id;
    const { total } = this.state;
    return (
      <Layout title={`${pId} || ${'Work Detail'} - Karthik`}>
        <div className='body-content'>
          <section className='w-100 ph2 ph3-m ph4-l'>
            <div className='cf pa2'>
              <h1>Game of Life</h1>
              <p>This is my dig at emulating the infamous Conway's Game of Life using plain ES6.</p>
              <script async src="//jsfiddle.net/doktormolle/kCL5A/embed/js,html,css,result/dark/"></script>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default LaDetail;
