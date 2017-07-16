import React from 'react';
import axios from 'axios';
import mediumZoom from 'medium-zoom';

import Layout from '../../components/Layout/index';

class LaDetail extends React.Component {

  static getInitialProps({ query: workDetail }) {
    return { workDetail };
  }

  constructor(props) {
    super(props);
    this.state = {
      pId: null
    };
  }

  componentDidMount() {
    mediumZoom('.work-detail-wrapper img',{ margin: 70 })
  }

  render() {
    return (
      <Layout title={`Case study on display directions - Karthik`}>
        <div className='body-content'>
          <style global jsx>{`
            .knav a:nth-child(4) {
              border: solid #5F91F5;
              border-width: 0 0 3px;
              color: #5F91F5;
            }
          `}
          </style>
          <article className="">
            <div className="vh-100 dt w-100 tc bg-ddir black-70 cover">
              <div className="dtc v-mid">
                <header className="">
                  <h2 className="f6 fw3 ttu tracked mb2 lh-title br ba dib ph3 pv2 br2 b--black-40 bg-yellow black-80">DRAFT, yet to be published</h2>
                </header>
                <h1 className="f1 f-headline-l fw1 ft-head black-80">Display Directions</h1>
                <blockquote className="ph0 mh0 measure f4 lh-copy center">
                  <p className="fw1 black-70">
                    A case-study to understand directions on devices contextually.
        </p>
                </blockquote>
              </div>
            </div>

            <section className='w-100 ph2 ph3-m ph4-l'>
              <div className='cf pa2'>
                <section className="work-detail-wrapper fw4 measure-wide db center f4 lh-copy black-60 ft-serif">
                  <p>This is a case-study to understand the device orientation and direction contextually when a user is holding or using the device. With the advent of smart devices such as watches, glasses with VR and AR, information delivery using the right context has become more complex.</p>

                  <p>Heads-up display is still a conceptual technology and the mass adaption of it is not very far. Each iteration of these HUDs have shown promise in terms of display delegation moving away from a dedicated hardware solution. While hardware oriented solution allows the device to take a first hand in processing the user information, there are software emulators on the other-hand like the glasses and watches, need the context to output such information before displaying.</p>

                  <p>The smartwatches and glasses have a bit of hardware integrated into them to delegate some of the information processing. Gyroscope is a key element when it comes to calculating the device direction with respect to the user and the APIs offer a much wider array of information to process while consuming these in the app.</p>

                  <p>Today most map apps such as Google Maps offer information to users in a very simple and digestible form on usage. When driving these information has to be diminutive in size but concrete in information. Even the minute level of discrepancy may lead to driver distraction. Most of these imperative information is either consumed by the mobile phones or the build in GPS. These devices have the aforementioned hardware which takes care of the user context. But when it comes to devices which do a dedicated task the context becomes more less likely to exist. Heads up display or remote displays are perfect examples.</p>

                  <h4>Complexity in designing interaction</h4>
                  <p>So it is necessary to bake some hardware into these devices which has to calculate key contextual information. The interactions are fairly simple when delivering information imperatively. The complexity arises when there is a bidirectional interaction, allowing the user to perform actions like swipes or hand-gestures.</p>
                  <img src="https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/ddir-1-hud.jpg" />
                  <p>Gestures are inherently better in terms of user interaction since it does not enforce the user to interact with the device physically, but more than the hardware reliability in terms of motion capturing the design for commands have to intuitive. Gestures have not been iterated as much as the other design interaction aspects, maybe because of the hardware limitations. But these hardware limitation are self imposed in terms of existing user demographic and the cost in user adaption.</p>
                </section>
              </div>
            </section>


          </article>




        </div>
      </Layout>
    );
  }
}

export default LaDetail;
