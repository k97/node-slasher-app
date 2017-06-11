import React from 'react';
import Link from 'next/link';

import Layout from "../components/Layout/index";
import WorkCard from "../components/Work/WorkCard";
import { labLinks } from "../handlers/labLinks";


class HomePage extends React.Component {

  render() {
    return (
      <Layout title={"Projects - k97"}>
        <div className="body-content pt4 ph5 f4">
          <h2 className="f3 f2-ns black-70 lh-solid ma0 pa0">Work</h2>
          <p className="f5 black-60 db lh-solid">Code experiments, snippets and side-projects</p>
        </div>
        <div className="lab-cards ph4 cf ">
          {
            Object.keys(labLinks).map(key => (
              <WorkCard details={labLinks[key]} key={key} />
            )
            )
          }

        </div>

      </Layout>
    );
  }

}

export default HomePage;
