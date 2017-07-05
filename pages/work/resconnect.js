import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout/index';
import ProjectTitle from '../../components/Work/ProjectTitle';
import EditProject from '../../components/Work/EditProject';
import UILoader from '../../components/Home/UILoader';

class ResConnect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      project: {},
      loading: true
    };
    this.fetchProjectDetail = this.fetchProjectDetail.bind(this);
  }

  componentDidMount() {
    this.fetchProjectDetail();
  }

  fetchProjectDetail() {
    axios.get('/api/project/resconnect').then(response => {
      this.setState({ project: response.data, loading: false });
    }).catch(error => {
      this.setState({ loading: false });
    });
  }


  render() {
    const content = this.state.project.content;
    return (
      <Layout title={`Project Connect - Karthik`}>
        <style global jsx>{`
          .knav a:nth-child(4) {
            border: solid #5F91F5;
            border-width: 0 0 3px;
            color: #5F91F5;
          }
          .bg-connect {
            background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
          }
        `}
        </style>
        <div className='body-content'>

          <ProjectTitle heading="Project Connect" date="March, 2015" bgColor="bg-connect" />

          <section className='w-100 ph2 ph3-m ph4-l'>
            <div className='cf pa2'>
              <section className="fw4 measure-wide db center f4 lh-copy black-60 ft-serif">
                <UILoader loading={this.state.loading} />
                {content ? <ReactMarkdown source={content} /> : ''}
              </section>
            </div>
          </section>

          <EditProject project={this.state.project} />

        </div>
      </Layout>
    );
  }
}

export default ResConnect;
