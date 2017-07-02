import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import Layout from "../components/Layout/index";
import WorkCard from "../components/Work/WorkCard";
import { projectLinks } from "../handlers/projectLinks";


class HomePage extends React.Component {


  navigateToPost(pageUrl){
    console.log(pageUrl);
    let pKey = sessionStorage.getItem('k97passphrase');
    if (pKey && pKey.length) {
      Router.push("/work/" + pageUrl);
    } else {
      Router.push("/passphrase#"+pageUrl);
    }
  }
  
  render() {
    
    return (
      <Layout title={"Projects - k97"}>
        <style global jsx>{`
          .knav a:nth-child(4) {
            border: solid #5F91F5;
            border-width: 0 0 3px;
            color: #5F91F5;
          }
          `}
        </style>
        <div className="body-content pt4 pb2 ph5 f4">
          <h2 className="f3 f2-ns black-70 lh-solid ma0 pa0">Work</h2>
          <p className="f5 black-60 db lh-copy ft-serif">Projects, case-studies &amp; code-snippets</p>
        </div>

        <section className="ph4 pb3">
          <div className="ka-work-list lab-cards">
            {
              Object.keys(projectLinks).map(
                key => (
                  <div onClick={this.navigateToPost.bind(this, projectLinks[key].url)} key={key}>
                    <WorkCard details={projectLinks[key]}  />
                  </div>
                 )
              )
            }
          </div>
        </section>
      </Layout>
    );
  }

}

export default HomePage;
