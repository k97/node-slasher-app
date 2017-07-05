import React from 'react';
import ProjectForm from "./ProjectForm";

class EditProject extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section className="w-100 mt4 admin-section">
        <div className="tc">
          <a className="ft-head tc pointer ttu tracked fw7 f6 grow no-underline ph4 pv3 br3 mv1 dib  ba b--blue blue">Project Edit</a>
        </div>
        <ProjectForm editMode={true} newProject={this.props.project} />
      </section>
    );
  }

}

export default EditProject;
