const projects = [
    {
        name: "Cubes Building",
        type: "Business Centers",
        location: "Wilhelminakade 663, 3072 AP Rotterdam",
        client: "Mark Beids",
        architect: "OMA",
        size: "162000 sq. m.",
        value: "$900 million",
        completed: "June 2013",
        description: "Completed in 2013, Cubes Building provides spaces for offices, housing, shops and hotels, creating a dynamic urban landscape on the banks of the Meuse River. Its modern and innovative design reflects the modern architectural aesthetic and plays an important role in Rotterdam's modern urban appearance.",
        images: []
    },
    {
        name: "Modern Cottage",
        type: "Private houses",
        location: "2464 Royal Ln. Mesa, New Jersey",
        client: "Darlene Robertson",
        architect: "HIK Architecture",
        size: "840 sq. feet",
        value: "$2 million",
        completed: "May 2020",
        description: "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars. <br/><br/> Modern design and care for each family member to feel as comfortable as possible in the new home.",
        images: []
    }
]

const section = document.querySelector(".hero");
const href = window.location.href;
const projectNum = href[href.length - 1];

function loadProject(project) {
    const currentProject = projects[project];
    const markup = `<div class="container">
          <p class="page-path">
            <span class="page-path-dark">Homepage / Work</span> / ${currentProject.name}
          </p>
          <h1 class="page-title">${currentProject.name}</h1>
          <div class="project-img-list-wrapper">
            <ul class="project-img-list list"></ul>
            <button class="slider-left-btn" type="button">
              <svg class="slider-left-icon">
                <use href="./img/icons.svg#icon-left-arrow"></use>
              </svg>
            </button>
            <button class="slider-right-btn" type="button">
              <svg class="slider-right-icon">
                <use href="./img/icons.svg#icon-right-arrow"></use>
              </svg>
            </button>
          </div>
          <ul class="project-small-img-list list">
            <li class="project-small-img-item active"></li>
            <li class="project-small-img-item"></li>
            <li class="project-small-img-item"></li>
            <li class="project-small-img-item"></li>
            <li class="project-small-img-item"></li>
            <li class="project-small-img-item"></li>
          </ul>
          <div class="project-info-box">
            <div class="project-goal">
              <h2 class="section-title">Project goal</h2>
              <p class="project-goal-text">
                ${currentProject.description}
              </p>
            </div>
            <table class="project-info-table">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>CLIENT</th>
                  <th>ARCHITECT</th>
                  <th>SIZE</th>
                  <th>VALUE</th>
                  <th>COMPLETED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${currentProject.location}</td>
                  <td>${currentProject.client}</td>
                  <td>${currentProject.architect}</td>
                  <td>${currentProject.size}</td>
                  <td>${currentProject.value}</td>
                  <td>${currentProject.completed}</td>
                </tr>
              </tbody>
            </table>
          </div>`;
    section.innerHTML = markup;
}

loadProject(projectNum);