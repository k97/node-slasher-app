import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import axios from "axios";

import DisplayAlert from "../Home/DisplayAlert";
import UILoader from '../Home/UILoader';

class ProjectForm extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      alertInfo: {
        type: 'success',
        isVisible: false
      },
      project: {
        title: '',
        customUrlSlug: '',
        displayDate: '',
        blurb: '',
        content: '',
        published: false
      }
    }

    this.handleMarkdownContent = this.handleMarkdownContent.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleMarkdownContent = this.handleMarkdownContent.bind(this);
    // this.handleisPublishedChange = this.handleisPublishedChange.bind(this);
  }

  handleMarkdownContent(value) {
    let project = this.state.project;
    project.content = value;
    this.setState({ project });
    this.saveProject();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let project = this.state.project;
    project[name] = value;
    this.setState({ project });
    this.saveProject();
  }

  saveProject(event) {
    if (!event) return;
    event.preventDefault();
    this.setState({  loading: true });
    let url = (this.props.editMode) ? `/api/project/update/${this.state.project._id}` : '/api/project/create';
    axios.post(url, this.state.project)
      .then(response => {
        let alertInfo = this.state.alertInfo;
        alertInfo.isVisible = true;
        if(response.status !== 200) this.state.alertInfo.type = 'error';
        this.setState({  alertInfo, loading: false });

      }).catch(error => {
        this.setState({  loading: false });
        console.error(error);
      });

  }

  render() {
    let saveBtnText = 'Create';
    if (this.props.editMode) {
      saveBtnText = 'Update';
      this.state.project = this.props.newProject;
    }
    return (
      <section className="pv2 ph5">
        <h1>🔐 {saveBtnText} Project</h1>

        <span className="db">
          {(this.state.alertInfo.isVisible) ? <DisplayAlert type={this.state.alertInfo.type} /> : '' }
        </span>

        <form action="" ref={input => this.postForm = input} onSubmit={(e) => this.saveProject(e)}>
          <section className="measure">

            <label htmlFor="title" className="mt3 f5 fw6 db">Title</label>
            <input type="text"
              className="input-reset ba b--black-20 pa2 db w-100"
              name="title"
              value={this.state.project.title}
              onChange={this.handleInputChange} />


            <label htmlFor="customUrlSlug" className="mt3 f5 fw6 db">Post URL
              <span className="f6 normal black-60"> (k97.in/project-falcon)</span>
            </label>
            <input type="text"
              className="input-reset ba b--black-20 pa2 db w-100"
              name="customUrlSlug"
              value={this.state.project.customUrlSlug}
              onChange={this.handleInputChange} />


            <label htmlFor="displayDate" className="mt3 f5 fw6 db">Display date</label>
            <input type="date"
              className="input-reset ba b--black-20 pa2 db w-100"
              name="displayDate"
              value={this.state.project.displayDate}
              onChange={this.handleInputChange} />
          </section>

          <label htmlFor="blurb" className="mt3 f5 fw6 db">Blurb
              <span className="f6 normal black-60"> (Text blurb for list screen)</span>
          </label>
          <textarea className="db border-box hover-black w-60  ba b--black-20 pa2 br2"
            name="blurb"
            value={this.state.project.blurb}
            onChange={this.handleInputChange} />

          <label htmlFor="content" className="mt3 f5 fw6 db">Content</label>
          <div className="">
            <SimpleMDE value={this.state.project.content}
              onChange={this.handleMarkdownContent} />
          </div>

          <div className="flex items-center mb2">
            <input type="checkbox"
              id="published"
              name="published"
              className="mr2"
              checked={this.state.project.published}
              onChange={this.handleInputChange} />
            <label htmlFor="published" className="lh-copy">Publish</label>
          </div>

          <button type="submit" className="f5 link  ph4 pv3 mv4 dib white bg-dark-gray ba b--black-20 shadow-hover">{saveBtnText}</button>

        </form>
      </section>
    );
  }

}

export default ProjectForm;
