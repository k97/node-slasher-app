import React from 'react';

class AddProject extends React.Component {

  constructor(){
    super();
    this.state = {
      postContent: "",
      isPublished: false
    }
    // this.handleMarkdownContent = this.handleMarkdownContent.bind(this);
    this.handleisPublishedChange = this.handleisPublishedChange.bind(this);
  }

  // handleMarkdownContent(value) {
  //   this.setState({ postContent: value });
  //   this.saveProject();
  // }

  handleisPublishedChange() {
    this.setState({
      isPublished: !this.state.isPublished
    });
  }

  saveProject(event) {
    if(event) {
     event.preventDefault();
    }
    let postDetail = {
      title: this.title.value,
      customUrlSlug: this.customUrlSlug.value,
      displayDate: this.displayDate.value,
      blurb: this.blurb.value,
      content: this.content.value,
      published: this.state.isPublished
    };
    this.props.saveProject(postDetail);
    // this.postForm.reset();
  }

  render() {
    return(
      <section className="pv2 ph5">
        <h1>🔐 Add Project</h1>
        <form action="" ref={input=>this.postForm=input} onSubmit={(e)=>this.saveProject(e)}>
          <div className="measure">

            <label htmlFor="title" className="mt3 f5 fw6 db">Title</label>
            <input type="text" ref={input => this.title = input} className="input-reset ba b--black-20 pa2 db w-100" />


            <label htmlFor="customUrlSlug" className="mt3 f5 fw6 db">Project URL
              <span className="f6 normal black-60"> (k97.in/work/connect)</span>
            </label>
            <input type="text" ref={input => this.customUrlSlug = input} className="input-reset ba b--black-20 pa2 db w-100"/>


            <label htmlFor="displayDate" className="mt3 f5 fw6 db">Display date</label>
            <input type="date" ref={input => this.displayDate = input} className="input-reset ba b--black-20 pa2 db w-100"/>

            </div>

            <label htmlFor="blurb" className="mt3 f5 fw6 db">Blurb
              <span className="f6 normal black-60"> (Text content for list screen)</span>
            </label>
            <textarea ref={input => this.blurb = input} className="db border-box hover-black w-60  ba b--black-20 pa2 br2"/>

            <label htmlFor="summary" className="mt3 f5 fw6 db">Content</label>
            <textarea ref={input => this.content = input} rows="5" className="db border-box hover-black w-60  ba b--black-20 pa2 br2"/>

            <div className="flex items-center mb2">
              <input className="mr2" type="checkbox" id="isPublished" name="isPublished" checked={this.state.isPublished} onChange={this.handleisPublishedChange} />
              <label htmlFor="isPublished" className="lh-copy">Publish</label>
            </div>

            <button type="submit" className="f5 link  ph4 pv3 mv4 mr3 dib black-70 ba b--black-50 bg-white shadow-hover">Close</button>
            <button type="submit" className="f5 link  ph4 pv3 mv4 dib white bg-dark-gray ba b--black-20 shadow-hover">Save</button>

        </form>
      </section>
    );
  }

}

export default AddProject;
