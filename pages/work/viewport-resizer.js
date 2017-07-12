import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout/index';
import ProjectTitle from '../../components/Work/ProjectTitle';
import EditProject from '../../components/Work/EditProject';
import UILoader from '../../components/Home/UILoader';

class ViewPortRezier extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Layout title={`Viewport Resizer - Karthik`}>
        <style global jsx>{`
          .knav a:nth-child(4) {
            border: solid #5F91F5;
            border-width: 0 0 3px;
            color: #5F91F5;
          }
          .bg-vpr {
            background-image: linear-gradient(to right, #e2902d 0%, #fa5b5d 100%);
          }
        `}
        </style>
        <div className='body-content'>

          <ProjectTitle heading="Viewport Resizer" date="JUNE, 2014" bgColor="bg-vpr" />

          <section className='w-100 ph2 ph3-m ph4-l'>
            <div className='cf pa2'>
              <section className="fw4 measure-wide db center f4 lh-copy black-60 ft-serif">
                <p>A simple side project that solved the issue of testing responsive screens across different screen resolutions with a preloaded list of popular viewports and facility to enter custom resultions as well.</p>
                <p>The project may be pretty dated since the introduction of the similar feature in chrome but VPR still has a lit more bells and whistles compared to the browser ones.</p>

                <div className="tc pt1 pb4 load-tach">
                  <a href="http://k97.github.io/viewport/" target="_blank" className="f5 no-underline blue bg-animate hover-bg-blue hover-white inline-flex items-center ph4 pv3 shadow-hover ba b--blue br2">Visit the site
                  <i className="v-mid f3 lh-solid ml3 ion-ios-arrow-thin-right"></i></a>
                </div>
              </section>
            </div>
          </section>


        </div>
      </Layout>
    );
  }
}

export default ViewPortRezier
