  import React from 'react';
import SimpleMDE from 'react-simplemde-editor';

class JournalForm extends React.Component {

  constructor(){
    super();
    this.state = {
      post : {
      title : '',
      customUrlSlug : '',
      displayDate : '',
      type : '',
      blurb : '',
      summary : '',
      content : '',
      published : false
      }
    }
    this.handleMarkdownContent = this.handleMarkdownContent.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleMarkdownContent(value) {
    let post = this.state.post;
    post.content = value;
    this.setState({ post });
    this.savePost();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let post = this.state.post;
    post[name] = value;
    this.setState({ post });
    this.savePost();
  }

  savePost(event) {
    this.props.setPostReady(false);
    if(event) {
     event.preventDefault();
     this.props.setPostReady(true);
    }
    this.props.savePost(this.state.post);
  }
  

  render() {
    let saveBtnText = 'Save';
    if(this.props.editMode) {
      saveBtnText = 'Update';
      this.state.post = this.props.newPost;
    }
    
    return(
      <section className="pv2 ph5">
        <h1>🔐 New journal</h1>
        <form ref={input=>this.postForm=input} onSubmit={(e)=>this.savePost(e)}>
          <section className="measure">

            <label htmlFor="title" className="mt3 f5 fw6 db">Title</label>
            <input type="text" 
                  className="input-reset ba b--black-20 pa2 db w-100"
                  name="title"
                  value={this.state.post.title} 
                  onChange={this.handleInputChange}  />

            <label htmlFor="customUrlSlug" className="mt3 f5 fw6 db">Post URL
              <span className="f6 normal black-60"> (k97.in/designing-for-the-droid)</span>
            </label>
            <input type="text" 
                    className="input-reset ba b--black-20 pa2 db w-100" 
                    name="customUrlSlug"
                    value={this.state.post.customUrlSlug} 
                    onChange={this.handleInputChange} />


            <label htmlFor="displayDate" className="mt3 f5 fw6 db">Display date</label>
            <input type="date" 
                  className="input-reset ba b--black-20 pa2 db w-100" 
                  name="displayDate"
                  value={this.state.post.displayDate} 
                  onChange={this.handleInputChange} />


            <label htmlFor="type" className="mt3 f5 fw6 db">Type</label>
              <select className="ba b--black-20 pa2 db w-100" 
                      name="type"
                      value={this.state.post.type} 
                      onChange={this.handleInputChange} >
                <option value="case-study">Case study</option>
                <option value="blog-post">Blog post</option>
              </select>
            </section>

            <label htmlFor="blurb" className="mt3 f5 fw6 db">Blurb
              <span className="f6 normal black-60"> (Text blurb for list screen)</span>
            </label>
            <textarea className="db border-box hover-black w-60  ba b--black-20 pa2 br2"
                      name="blurb"
                      value={this.state.post.blurb}
                      onChange={this.handleInputChange}/>

            <label htmlFor="summary" className="mt3 f5 fw6 db">Summary</label>
            <textarea rows="3" 
                    className="db border-box hover-black w-60  ba b--black-20 pa2 br2"
                    name="summary"
                    value={this.state.post.summary} 
                    onChange={this.handleInputChange}/>


            <label htmlFor="content" className="mt3 f5 fw6 db">Content</label>
            <div className="ft-serif">
              <SimpleMDE value={this.state.post.content} 
                        onChange={this.handleMarkdownContent} />
            </div>

            <div className="flex items-center mb2">
              <input type="checkbox" 
                      id="published" 
                      name="published" 
                      className="mr2" 
                      checked={this.state.post.published} 
                      onChange={this.handleInputChange} />
              <label htmlFor="published" className="lh-copy">Publish</label>
            </div>

            {!this.props.editMode 
              ? <button type="submit" className="f5 link ph4 pv3 mv4 mr3 dib black-70 ba b--black-50 bg-white shadow-hover">Close</button>
              : ''
            }
            
            <button type="submit" className="f5 link  ph4 pv3 mv4 dib white bg-dark-gray ba b--black-20 shadow-hover">{saveBtnText}</button>
        </form>
      </section>
    );
  }

}

export default JournalForm;
