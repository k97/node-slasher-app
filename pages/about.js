import Layout from "../components/Layout/index";

export default () => (
  <Layout title={"About - Karthik"}>
    <style global jsx>{`
      .knav a:nth-child(2) {
        border: solid #5F91F5;
        border-width: 0 0 3px;
        color: #5F91F5;
      }
      del {
        opacity: 0.55;
      }
      `}
    </style>
    <div className="body-content pt1 ph3 ph5-ns f4 black-90 ">
      <article className="pv4 ph3 ph5-ns">
        <h1 className="f3 f2-m f1-l">About</h1>
        <div className="measure lh-copy ft-serif black-70">
          <p>I am Karthikeyan Rajendran and I like to think myself as part designer and a part coder. I have been tinkering with web ever since I started using it and I spend most of my time on designing and building digital products.
          </p>
          <p>
            Right now, I'm working for FastTrack in Melbourne, designing and building digital products that helps recruitment businesses <del>surviving the scorching heat of Dubai, while pushing code that keeps the Emirates aircrafts aflight</del>. I share my prespectives on things that are interesting <a href="/journal">here</a> and if you are looking for my resume, <a href="/resume">it's here</a>.
          </p>
        </div>
      </article>
    </div>
  </Layout>
)
