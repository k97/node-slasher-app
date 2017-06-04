import React from 'react';
import SimpleMDE from 'react-simplemde-editor';

class AddForm extends React.Component {

  constructor(){
    super();
    this.state = {
      postContent: "",
      published: false
    }
    this.handleMarkdownContent = this.handleMarkdownContent.bind(this);
    this.handlePublishedChange = this.handlePublishedChange.bind(this);
  }

  handleMarkdownContent(value) {
    this.setState({ postContent: value });
    this.savePost();
  }

  handlePublishedChange() {
    this.setState({
      published: !this.state.published
    });
  }

  savePost(event) {
    debugger
    this.props.setPostReady(false);
    if(event) {
     event.preventDefault();
     this.props.setPostReady(true);
    }
    let postDetail = {
      title: this.title.value,
      customUrlSlug: this.customUrlSlug.value,
      displayDate: this.displayDate.value,
      type: this.type.value,
      blurb: this.blurb.value,
      summary: this.summary.value,
      content: this.state.postContent,
      published: this.state.published
    };
    this.props.newPost(postDetail);
    // this.postForm.reset();
  }

  render() {
    return(
      <section className="pv2 ph5">
        <h1>🔐 New journal</h1>
        <form action="" ref={input=>this.postForm=input} onSubmit={(e)=>this.savePost(e)}>
          <div className="measure">

            <label htmlFor="title" className="mt3 f5 fw6 db">Title</label>
            <input type="text" ref={input => this.title = input} className="input-reset ba b--black-20 pa2 db w-100" />


            <label htmlFor="customUrlSlug" className="mt3 f5 fw6 db">Post URL
              <span className="f6 normal black-60"> (k97.in/designing-for-the-droid)</span>
            </label>
            <input type="text" ref={input => this.customUrlSlug = input} className="input-reset ba b--black-20 pa2 db w-100"/>


            <label htmlFor="displayDate" className="mt3 f5 fw6 db">Display date</label>
            <input type="date" ref={input => this.displayDate = input} className="input-reset ba b--black-20 pa2 db w-100"/>


            <label htmlFor="type" className="mt3 f5 fw6 db">Type</label>
              <select ref={input => this.type = input} className="ba b--black-20 pa2 db w-100">
                <option value="case-study">Case study</option>
                <option value="blog-post">Blog post</option>
              </select>
            </div>

            <label htmlFor="blurb" className="mt3 f5 fw6 db">Blurb
              <span className="f6 normal black-60"> (Text content for list screen)</span>
            </label>
            <textarea ref={input => this.blurb = input} className="db border-box hover-black w-60  ba b--black-20 pa2 br2"/>

            <label htmlFor="summary" className="mt3 f5 fw6 db">Summary</label>
            <textarea ref={input => this.summary = input} rows="3" className="db border-box hover-black w-60  ba b--black-20 pa2 br2"/>


            <label htmlFor="content" className="mt3 f5 fw6 db">Content</label>
            <div className="ft-serif">
              <SimpleMDE onChange={this.handleMarkdownContent} value={this.state.postContent}/>
            </div>

            <div className="flex items-center mb2">
              <input className="mr2" type="checkbox" id="published" name="published" checked={this.state.published} onChange={this.handlePublishedChange} />
              <label htmlFor="published" className="lh-copy">Publish</label>
            </div>

            <button type="submit" className="f5 link  ph4 pv3 mv4 mr3 dib black-70 ba b--black-50 bg-white shadow-hover">Close</button>
            <button type="submit" className="f5 link  ph4 pv3 mv4 dib white bg-dark-gray ba b--black-20 shadow-hover">Save</button>

        </form>
      </section>
    );
  }

}

export default AddForm;
