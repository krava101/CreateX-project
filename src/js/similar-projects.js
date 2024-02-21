const projectsList = document.querySelector("#p-list");
const projectsLeftBtn = document.querySelector("#p-left-btn");
const projectsRightBtn = document.querySelector("#p-right-btn");
let projectsIndex = 0;

function activeSimilarProj() {
    projectsLeftBtn.addEventListener("click", () => {
        projectsIndex <= 0 ? projectsIndex = 0 : projectsIndex--;
        activeProjectsSlider(projectsIndex);
    })

    projectsRightBtn.addEventListener("click", () => {
        projectsIndex === projectsList.children.length-2 ? null : projectsIndex++;
        activeProjectsSlider(projectsIndex);
    })

    function activeProjectsSlider(index) {
        if (projectsList.children.length > 1) {
            const cardWidth = projectsList.children[0].getBoundingClientRect().width + 30;
            projectsList.style.transform = `translateX(${-index * cardWidth}px)`;
        }
    }
}

export default activeSimilarProj;
