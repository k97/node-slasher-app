import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout/index';

class ResConnect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
    this.fetchProjectDetail = this.fetchProjectDetail.bind(this);
  }

  componentDidMount() {
    this.fetchProjectDetail();
  }

  fetchProjectDetail(){
    this.setState(() => {
      axios.get('/api/project/resconnect').then(response => {
        this.setState({
          project: response.data
        });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
    });
  }


  render() {
    const content = this.state.project.content;
    return (
      <Layout title={`Project Connect - Karthik`}>
        <div className='body-content'>
          <section className='w-100 ph2 ph3-m ph4-l'>
            <div className='cf pa2'>
               <section className="fw4 measure-wide db center f4 lh-copy black-60 ft-serif">
                  <h1>Project Connect</h1>
                  {content ? <ReactMarkdown source={content} /> : ''}
              </section>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default ResConnect;
