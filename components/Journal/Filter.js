import React from 'react';
import Link from 'next/link';


class JournalFilter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      displayFlags: {
        showAll : true,
        showCase: false,
        showBlog: false
      }
    }
    this.displaySelectedTab = this.displaySelectedTab.bind(this);
  }

  selectFilter(selectedVal) {
    selectedVal = selectedVal ? selectedVal : {}
    this.displaySelectedTab(selectedVal);
    this.props.filterPosts({"type": selectedVal});
  }

  displaySelectedTab(val) {
    switch (val) {
      case "case-study":
        this.setState({
          displayFlags: {
            showAll : false,
            showCase: true,
            showBlog: false
          }
        })
        break;
      case "blog-post":
        this.setState({
          displayFlags: {
            showAll : false,
            showCase: false,
            showBlog: true
          }
        })
        break;
      default:
        this.setState({
          displayFlags: {
            showAll : true,
            showCase: false,
            showBlog: false
          }
        })
        break;
    }
  }



  render() {
    return (
      <div>
        <section className="pv4 ph5 black-90 bg--journal">
          <div className="b f3 f2-ns black-70 lh-solid journal--header">Recordings</div>
          <p className="f6 db ttu lh-solid journal--subtitle">about design and TECH</p>
        </section>

          <div className="ph4 bt bb b--black-10 f5 bg-white">
            <a className={`link dib ph4 pv3 b--black-50 black-60 bw1 ${this.state.displayFlags.showAll ? "bb fw5" : ""}`} onClick={this.selectFilter.bind(this, "")}>All</a>
            <a className={`link dib ph4 pv3 b--black-50 black-60 bw1 ${this.state.displayFlags.showCase ? "bb fw5" : ""}`} onClick={this.selectFilter.bind(this, "case-study")}>Case Studies</a>
            <a className={`link dib ph4 pv3 b--black-50 black-60 bw1 ${this.state.displayFlags.showBlog ? "bb fw5" : ""}`} onClick={this.selectFilter.bind(this, "blog-post")}>Blog Posts</a>
        </div>
      </div>
    );
  }

}

export default JournalFilter;
