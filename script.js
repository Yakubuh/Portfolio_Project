document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list");
    const addProjectBtn = document.getElementById("add-project");
  
    addProjectBtn.addEventListener("click", () => {
      const project = document.createElement("div");
      project.className = "project";
      project.innerHTML = `
        <label for="project-name">Project Name:</label>
        <input type="text" class="project-name" style ="margin-right: 10px;">
        <label for="project-description">Project Description:</label>
        <textarea class="project-description"></textarea>
      `;
      projectList.appendChild(project);
    });
  
    const previewBtn = document.getElementById("preview");
    const saveBtn = document.getElementById("save");
  
    previewBtn.addEventListener("click", () => {
      const preview = document.createElement("div");
      preview.className = "preview";
      // Collect user inputs and display a preview
      // You can create a formatted HTML structure here
      document.body.appendChild(preview);
    });
  
    saveBtn.addEventListener("click", () => {
      // Save user inputs to a database or storage
    });
  });
  