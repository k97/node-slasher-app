import React from 'react';
import Link from 'next/link';

import Layout from "../components/Layout/index";
import WorkCard from "../components/Work/WorkCard";
import { projectLinks } from "../handlers/projectLinks";


class HomePage extends React.Component {


  render() {
    return (
      <Layout title={"Projects - k97"}>
        <div className="body-content pt4 pb2 ph5 f4">
          <h2 className="f3 f2-ns black-70 lh-solid ma0 pa0">Work</h2>
          <p className="f5 black-60 db lh-copy ft-serif">Projects, case-studies &amp; code-snippets</p>
        </div>

        <section className="ph4 pb3">
          <div className="ka-work-list lab-cards">
            {
              Object.keys(projectLinks).map(
                key => ( <WorkCard details={projectLinks[key]} key={key} /> )
              )
            }
          </div>
        </section>
      </Layout>
    );
  }

}

export default HomePage;
