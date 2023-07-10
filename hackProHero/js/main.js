const milestonesData = JSON.parse(data).data;

// load course milestone data
function loadMilestones() {
	const milestones = document.querySelector(".milestones");

	milestones.innerHTML = `${milestonesData
		.map(function (milestone) {
			return `<div class="milestone border-b" id="${milestone._id}">
        <div class="flex">
            <div  class="checkbox">
                <input type="checkbox" onclick="markMilestone(this, ${
					milestone._id
				})">
            </div>
            <div onclick="openMilestone(this, ${milestone._id})">
                <p>
                    ${milestone.name}
                    <span><i class="fas fa-chevron-down"></i></span>
                </p>
            </div>
        </div>
        <div class="hidden_panel">
            ${milestone.modules
				.map((module) => {
					return `<div class="module border-b">
                <p>${module.name}</p>
            </div>`;
				})
				.join("")}
            
        </div>
    </div>`;
		})
		.join("")}`;
}

function openMilestone(milestoneElement, id) {
	const currentPanel = milestoneElement.parentNode.nextElementSibling;
	const shownPanel = document.querySelector(".show");
	const active = document.querySelector(".active");

	if (!milestoneElement.classList.contains("active") && active) {
		active.classList.remove("active");
	}
	milestoneElement.classList.toggle("active");

	if (!currentPanel.classList.contains("show") && shownPanel) {
		shownPanel.classList.remove("show");
	}

	currentPanel.classList.toggle("show");

	showMilestoneImage(id);
}

function showMilestoneImage(id) {
	const milestoneImage = document.querySelector(".milestoneImage");
	const title = document.querySelector(".title");
	const details = document.querySelector(".details");

	milestoneImage.style.opacity = "0";
	milestoneImage.src = milestonesData[id].image;
	title.innerText = milestonesData[id].name;
	details.innerText = milestonesData[id].description;
}

const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
	this.style.opacity = "1";
};

function markMilestone(checkbox, id) {
	const doneList = document.querySelector(".doneList");
	const milestoneList = document.querySelector(".milestones");
	const item = document.getElementById(id);

	//if cheked, then remove child from milestone list and append to done list
	if (checkbox.checked) {
		milestoneList.removeChild(item);
		doneList.appendChild(item);
		reloadForDoneList();
	} else {
		// else  vice versa
		doneList.removeChild(item);
		milestoneList.appendChild(item);
		reload();
	}
}

function reloadForDoneList() {
	const doneList = document.querySelector(".doneList");
	const items = Array.from(doneList.children);

	items.sort(compareItemsId);

	//clear the milestoneList
	//milestoneList.innerHTML = "";

	//append the sorted items back to the milestone list
	items.forEach((item) => doneList.appendChild(item));
}

function reload() {
	const milestoneList = document.querySelector(".milestones");
	const items = Array.from(milestoneList.children);

	items.sort(compareItemsId);

	//clear the milestoneList
	//milestoneList.innerHTML = "";

	//append the sorted items back to the milestone list
	items.forEach((item) => milestoneList.appendChild(item));
}

function compareItemsId(a, b) {
	const idA = a.getAttribute("id");
	const idB = b.getAttribute("id");

	return idA - idB;
}

loadMilestones();
