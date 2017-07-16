import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import mediumZoom from 'medium-zoom';

import Layout from '../../components/Layout/index';
import ProjectTitle from '../../components/Work/ProjectTitle';
import EditProject from '../../components/Work/EditProject';
import UILoader from '../../components/Home/UILoader';

class SonyMusicApp extends React.Component {

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
    axios.get('/api/project/sonymusicapp').then(response => {
      this.setState({ project: response.data, loading: false });
      mediumZoom('.med-img-wrapper img',{ margin: 70 })
    }).catch(error => {
      this.setState({ loading: false });
    });
  }


  render() {
    const content = this.state.project.content;
    return (
      <Layout title={`Project Sony Music - Karthik`}>
        <style global jsx>{`
          .knav a:nth-child(4) {
            border: solid #5F91F5;
            border-width: 0 0 3px;
            color: #5F91F5;
          }
          .bg-sonymusic {
            background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);
          }
        `}
        </style>
        <div className='body-content'>

          <ProjectTitle heading="SONY MUSIC" date="April, 2014" bgColor="bg-sonymusic" />

          <section className='w-100 ph2 ph3-m ph4-l'>
            <div className='cf pa2'>
              <section className="med-img-wrapper fw4 measure-wide db center f4 lh-copy black-60 ft-serif">
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

export default SonyMusicApp