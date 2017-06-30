import React from "react";
import Link from "next/link";
import axios from "axios";

import Layout from "../components/Layout/index";
import AddProject from "../components/Work/AddProject";

class AddWork extends React.Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
    this.saveProject = this.saveProject.bind(this);
  }

  saveProject(newProject) {
    this.setState({ newProject })
    axios.post('/api/project/create', newProject)
      .then(response => {
        this.setState({ loading: true });
      }).catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Layout title={"New Journal"}>
        <div className="body-content">
          <section className="w-100">
            <AddProject saveProject={this.saveProject} />
          </section>
        </div>
      </Layout>
    );
  }
}

export default AddWork;
