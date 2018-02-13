import React from "react";
import Layout from "../components/Layout/index";


class Info extends React.Component {

  render() {

    const features = [
      {
        isDone: true,
        text: 'Iterate designs for variations'
      },
      {
        isDone: true,
        text: 'Setup custom boilerplate for Node, React, Mongo & Markdown'
      },
      {
        isDone: true,
        text: 'Schema design for journal and project modules'
      },
      {
        isDone: false,
        text: 'Productivity tachometer using RescueTime data'
      },
      {
        isDone: false,
        text: 'Recent updates content on homepage'
      },
      {
        isDone: true,
        text: 'Productivity tachometer using RescueTime data'
      },
      {
        isDone: true,
        text: 'Component breakdown for journal and project modules'
      },
      {
        isDone: true,
        text: 'MongoDB data as a service hosting'
      },
      {
        isDone: false,
        text: 'Async loading for pages & transistions'
      }

    ];

    return (
      (
        <Layout title={"Build Information - Karthik"}>
          <style global jsx>{`

      `}
          </style>
          <div className="body-content ph3 ph5-ns pv2 f4 ">
            <article className="ph3 ph5-ns">
              <h1 className="f3 f2-m f1-l black-70">Build Info</h1>
              <div className="measure-wide lh-copy ft-serif black-70">
                <p>The current build on this site is an experiment to scratch my own itch on isomorphic rendering. To achieve that I have used React, NextJS for app scaffolding and NodeJS as the backend render engine, while the data comes from the MongoDB wonder world.
                </p>
                <p>
                  The following list consists of tasks or features that were listed while exploring the idea. Some of them were completed in the process, a few are pending and will be done as incremental updates.
                </p>

                {}
                <ul className="list pl0 ml0 center bg-white ba b--black-10 br2 f5">
                  {Object.keys(features).map(key => (
                    <li className={`grow hover-bg-yellow bg-white ph2 pv2 bb b--black-10 ${features[key].isDone ? 'strike black-40' : 'black-60' }`} key={key}>
                      <input type="checkbox" className="mr3 ml2 v-mid"
                        checked={features[key].isDone} disabled/>
                      {features[key].text}
                    </li>
                  ))}

                </ul>

              </div>
            </article>
          </div>
        </Layout>
      )
    );
  }

}
export default Info;
