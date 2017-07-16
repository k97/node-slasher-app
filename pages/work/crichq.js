import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import mediumZoom from 'medium-zoom';

import Layout from '../../components/Layout/index';
import ProjectTitle from '../../components/Work/ProjectTitle';
import EditProject from '../../components/Work/EditProject';
import UILoader from '../../components/Home/UILoader';

class CricHQ extends React.Component {

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
    axios.get('/api/project/crichq').then(response => {
      this.setState({ project: response.data, loading: false });
      mediumZoom('.work-detail-wrapper img',{ margin: 70 })
    }).catch(error => {
      this.setState({ loading: false });
    });
  }


  render() {
    const content = this.state.project.content;
    return (
      <Layout title={`Project CricHQ - Karthik`}>
        <div className='body-content'>

          <ProjectTitle heading="CricHQ" date="February, 2015" bgColor="bg-crichq" />

          <section className='w-100 ph2 ph3-m ph4-l'>
            <div className='cf pa2'>
              <section className="work-detail-wrapper fw4 measure-wide db center f4 lh-copy black-60 ft-serif">
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

export default CricHQ;
