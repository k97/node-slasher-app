import React from "react";
import Layout from "../components/Layout/index";
import ProjectForm from "../components/Work/ProjectForm";

class AddWork extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout title={"Create New Project"}>
        <div className="body-content">
          <section className="w-100">
            <ProjectForm editMode={false} />
          </section>
        </div>
      </Layout>
    );
  }
}

export default AddWork;
