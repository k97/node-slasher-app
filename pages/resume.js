import React from "react";
import Layout from "../components/Layout/index";
import { cvObj } from "../handlers/resumeSrc";
import { formateDate } from '../handlers/helpers';


class Resume extends React.Component {

  skillsPartials(skill){
    return (
      <div className="bg-white pv3 ph3 mb3 mr3">
        <strong className="db b f5 black-60 tracked ttu ft-head mt1 mb3">{skill.name}</strong>
        {
          Object.keys(skill.keywords).map(
            key => (
              <span className="f6 br-pill ba ph3 pv2 dib black-60 b--black-40 mr2 mb3" key={key}>
                {skill.keywords[key]}
              </span>
            )
          )
        }
      </div>
    );

  }


  educationPartial(edu){
    return (
      <div className="bg-white pv3 ph3 mb3 mr3">
        <strong className="db b f5 black-60 tracked ttu ft-head mt1 mb1">{edu.studyType} in {edu.area}</strong>

        <span className="db f5 black-60 tracked ttu mb1">{edu.institution}</span>
        <span className="db f5 black-60 tracked mb1">{edu.college}</span>


        <span className="db f5 black-50">
          {formateDate(edu.startDate)}
          &nbsp;-&nbsp;
          {edu.endDate.toLowerCase() !== 'current' ? formateDate(edu.endDate) : 'Current'}
        </span>

        {/* <p className="f4 black-70 lh-copy">{work.summary}</p> */}
      </div>
    );

  }

  expPartial(work){
    return (
      <div className="bg-white pv3 ph3 mb3 mr3 br1 cf">
        <section className="fl w-70-l w-100-ns w-70-m pt0-ns pt2-m pt3-l">
          <strong className="db b f5 black-60 tracked ttu ft-head mt1 mb1">{work.company}</strong>
          <span className="db f5 black-60 tracked ttu">{work.position}</span>
          <span className="f5 black-50">
            {formateDate(work.startDate)}
            &nbsp;-&nbsp;
            {work.endDate.toLowerCase() !== 'current' ? formateDate(work.endDate) : 'Current'}
          </span>
        </section>
        <section className="fl w-30-l w-100-ns w-30-m">
          <a href={work.website} target="_blank">
          <img src={work.logo} className="db fr mr3 br-100 pa2 mw4 bg-white ba b--black-10" />
        </a>
        </section>
        {/* <p className="f4 black-70 lh-copy">{work.summary}</p> */}
      </div>
    );
  }


  render() {

    return (
      (
        <Layout title={"Resume - Karthik"}>
          <style global jsx>{`

          `}
          </style>
          <div className="body-content f4">
            <article className="ph3 ph3-ns ph4-m ph6-l pv2 ">

              <div className="cf mt4">
                <section className="fl w-100-m w-100-ns w-70-l">
                  <h1 className="f3 f2-m f2-l black-70 mv0 pt0 pb2 lh-title">{cvObj.basics.name}</h1>
                  <h2 className="f4 f3-m f3-l black-60 fw4 mv0 pv0">{cvObj.basics.label}</h2>
                </section>
                <section className="fl w-100-m w-100-ns w-30-l">
                    <a
                      href="https://drive.google.com/file/d/0BzLAIi367ff9Q1FUMGpzS1RsTUE/view?usp=sharing"
                      target="_blank"
                      className=" mt3 fr-l mr4-l mb1 f5 no-underline blue bg-animate hover-bg-blue hover-white inline-flex items-center br2 pv2 ph4 ba border-box pointer">
                      <span className="ft-head dib">Download PDF</span>
                    </a>
                </section>
              </div>

              <p className="f4 black-60 lh-copy mt1 pt1">{cvObj.basics.summary}</p>

              <div className="db mb1 pb1 black-70">
                <i className="ion-university dib f3 mr2"></i>
                <span className="f3 fw7 ft-head">Education</span>
              </div>
              <ul className="list mh0 ph0 cf mt0 pt0">
                 {
                    Object.keys(cvObj.education).map(
                      key => (
                        <li className="fl w-100 w-100-m w-50-l db" key={key}>
                          {this.educationPartial(cvObj.education[key])}
                        </li>
                      )
                    )
                  }
              </ul>

              <div className="db mb1 pb1 black-70">
                <i className="ion-ios-briefcase dib f3 mr2 "></i>
                <span className="f3 fw7 ft-head">Work Experience</span>
              </div>
              <ul className="list mh0 ph0 cf mt0 pt0">
                 {
                    Object.keys(cvObj.work).map(
                      key => (
                        <li className="fl w-100 w-100-m w-50-l db" key={key}>
                          {this.expPartial(cvObj.work[key])}
                        </li>
                      )
                    )
                  }
              </ul>

              <div className="db mb1 pb1 black-70">
                <i className="ion-ios-bolt dib f3 mr2"></i>
                <span className="f3 fw7 ft-head">Skills</span>
              </div>
              <ul className="list mh0 ph0 cf mt0 pt0">
                 {
                    Object.keys(cvObj.skills).map(
                      key => (
                        <li className="fl w-100 w-100-m w-50-l db" key={key}>
                          {this.skillsPartials(cvObj.skills[key])}
                        </li>
                      )
                    )
                  }
              </ul>

            </article>
          </div>
        </Layout>
      )
    );
  }

}
export default Resume;
