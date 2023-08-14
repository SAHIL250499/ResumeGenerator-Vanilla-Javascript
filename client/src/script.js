///////////////////////////////
////////////////////////////////////
//////////////////////////////////
///Toggle Multiple Classes
function toggle_add_or_removeMultipleClass(elem, args) {
  args.map((e) => {
    e = e.trim();
    return elem.classList.toggle(e);
  });
}

const addWEFieldEditResume = () => {
  let parentNode = document.getElementById("_workExperience");
  parentNode.insertAdjacentHTML(
    "beforeend",
    `<li>
    <h3
      contenteditable="true"
      class="text-[24px] font-bold text-black"
    >
      Job Title
    </h3>
  </li>
  <li>
    <h3
      contenteditable="true"
      class="w-10/12 text-[24px] text-black"
    >
      Company Name
    </h3>
  </li>
  <li>
    <div class="text-[16px] text-[#449399]">
      <input
        class="w-10 text-center"
        type="number"
        oninput="this.value=this.value.slice(0,2)"
        placeholder="mm"
      /><span>/</span>
      <input
        class="w-10 text-center"
        type="number"
        oninput="this.value=this.value.slice(0,4)"
        maxlength="4"
        placeholder="yyyy"
      />
      <span>-</span>
      <input
        class="w-10 text-center"
        type="number"
        oninput="this.value=this.value.slice(0,2)"
        maxlength="2"
        placeholder="mm"
      />
      <span>/</span>
      <input
        class="w-10 text-center"
        type="number"
        oninput="this.value=this.value.slice(0,4)"
        maxlength="4"
        placeholder="yyyy"
      />
    </div>
  </li>

  <li>
    <div class="Achievements/Tasks">
      <h3 class="text-[16px] text-[#449399]">
        Achievements/Tasks
      </h3>
      <ul
        contenteditable="true"
        class="TaskList list-disc list-inside marker:text-[#449399] space-y-2"
      >
        <li>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </span>
        </li>
        <li>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </span>
        </li>
      </ul>
    </div>
  </li>`
  );
};
const addEQFieldEditResume = () => {
  let parentNode = document.getElementById("_education");
  parentNode.insertAdjacentHTML(
    "beforeend",
    `<li>
    <h1
      contenteditable="true"
      class="text-[24px] text-black font-bold"
    >
      COURSE NAME
    </h1>
  </li>
  <li>
    <h1 contenteditable="true" class="text-[24px] text-black">
      School Name
    </h1>
  </li>
  <li>
    <div class="text-[16px] text-[#449399]">
      <input
        class="w-10 text-center"
        type="number"
        oninput="this.value=this.value.slice(0,2)"
        placeholder="mm"
      /><span>/</span>
      <input
        class="w-10 text-center"
        type="number"
        oninput="this.value=this.value.slice(0,4)"
        maxlength="4"
        placeholder="yyyy"
      />
      <span>-</span>
      <input
        class="w-10 text-center"
        type="number"
        oninput="this.value=this.value.slice(0,2)"
        maxlength="2"
        placeholder="mm"
      />
      <span>/</span>
      <input
        class="w-10 text-center"
        type="number"
        oninput="this.value=this.value.slice(0,4)"
        maxlength="4"
        placeholder="yyyy"
      />
    </div>
  </li>`
  );
};

const addPPFieldEditResume = () => {
  let parentNode = document.getElementById("_personalProjects");
  parentNode.insertAdjacentHTML(
    "beforeend",
    `<li>
    <h1 contenteditable="true" class="text-[20px] text-black">
      Project Name
    </h1>
  </li>
  <li>
    <!--list of projects-->
    <div class="list of projects">
      <ul
        contenteditable="true"
        class="TaskList list-disc list-inside marker:text-[#449399]"
      >
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </li>
      </ul>
    </div>
  </li>`
  );
};

const addAchieveFieldEditResume = () => {
  let parentNode = document.getElementById("_achievements");
  parentNode.insertAdjacentHTML(
    "beforeend",
    `<ul
  id="_achievements"
  contenteditable="true"
  class="achievements list-disc list-inside marker:text-[#449399] space-y-1"
>
  <li>
    <h1 class="text-[20px] text-black inline">
      ChatCodex-OpenAI
    </h1>
  </li>
</ul>`
  );
};

const gobackbutton = () => {
  let section1 = document.getElementById("section1");
  let section2 = document.getElementById("section2");
  section1.classList.toggle("hidden");
  section2.classList.toggle("hidden");
};

const printCV = () => {
  window.print();
};
////////////////////////////
//////////////////////////
///////////////////////////
////Dragable divs
const draggableboxes = document.getElementsByClassName("draggabledivs");
const droppableboxes = document.querySelectorAll(".cols");
for (let sectioncontainer of draggableboxes) {
  sectioncontainer.addEventListener("dragstart", () => {
    toggle_add_or_removeMultipleClass(sectioncontainer, [
      "shadow-2xl",
      "is-dragging",
    ]);
  });
  sectioncontainer.addEventListener("dragend", () => {
    toggle_add_or_removeMultipleClass(sectioncontainer, [
      "shadow-2xl",
      "is-dragging",
    ]);
  });
}
droppableboxes.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    const bottomTask = insertAboveTask(zone, e.clientY);
    const curSection = document.querySelector(".is-dragging");
    if (!bottomTask) {
      zone.appendChild(curSection);
    } else {
      zone.insertBefore(curSection, bottomTask);
    }
  });
});
const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".draggabledivs:not(.is-dragging)");
  let closestSection = null;
  let closestOffset = Number.NEGATIVE_INFINITY;
  els.forEach((section) => {
    const { top } = section.getBoundingClientRect();
    const offset = mouseY - top;
    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestSection = section;
    }
  });

  return closestSection;
};

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
//Listener to prevent all list from getting deleted

const allULList = document.querySelectorAll(".TaskList");
allULList.forEach((list) => {
  list.addEventListener("keydown", (e) => {
    const childrenLength = list.children.length;
    const emptytext = list.textContent.trim().length;
    if (emptytext === 0 && e.key === "Backspace" && childrenLength === 1) {
      e.preventDefault();
    }
  });
});

///////////////////////////////
////////////////////////////////////
/////////////////////////////////////////////////////////////////
////////////////////////////////////
/////////////////////////////////////////////////////////////////
////////////////////////////////////
/////////////////////////////////////////////////////////////////
////////////////////////////////////
//////////////////////////////////

///////////////////////////////
////////////////////////////////////
//////////////////////////////////BUTTONS
//////////////////////////////////////
/////////////////////////////////////
////////////////////////////////////

///////////////////////////////
////////////////////////////////////
//////////////////////////////////
////createAddButton on Select

const createAddButton = `<div id="weAddButton" class="container text-center mt-2">
<button
  onclick="addWEFieldEditResume()"
  class="text-white bg-green-500 rounded-full p-2"
>
  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
    <path
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
      clip-rule="evenodd"
      fill-rule="evenodd"
    ></path>
  </svg>
</button>
</div>`;
///////// Add Skills
const addSkill = () => {
  const skillsList = document.querySelector(".skillsList");
  skillsList.children[skillsList.children.length - 2].insertAdjacentHTML(
    "afterend",
    `<button
  contenteditable="true"
  class="text-white bg-[#989da6] rounded-lg px-5 py-2.5 mr-2 mb-2 cursor-text"
>
  <span class="text-[18px] font-semibold">Skill</span>
</button>`
  );
};
//////////////////////////////////////
/////////////////////////////////////
////////////////////////////////////
///////// Add Languages

const addLanguages = () => {
  const languageList = document.querySelector(".languageList");
  languageList.children[languageList.children.length - 2].insertAdjacentHTML(
    "afterend",
    `<button
    contenteditable="true"
    class="text-black border-2 border-[#989da6] rounded-lg px-5 py-2.5 mr-2 mb-2 cursor-text"
  >
    <span class="text-[18px] font-semibold"
      >Language</span
    >
  </button>`
  );
};
//////////////////////////////////////
/////////////////////////////////////
////////////////////////////////////
///////// Add Interests

const addInterests = () => {
  const interestList = document.querySelector(".interestList");
  interestList.children[interestList.children.length - 2].insertAdjacentHTML(
    "afterend",
    `<button
    contenteditable="true"
    class="text-black border-2 border-[#989da6] rounded-lg px-5 py-2.5 mr-2 mb-2 cursor-text"
  >
    <span class="text-[18px] font-semibold"
      >Interest</span
    >
  </button>`
  );
};

//////////////////////////////////////
/////////////////////////////////////
////////////////////////////////////
///////// On Select Editables Bottom Section

const Editables = document.querySelectorAll(".draggabledivs");
const hideButtons = document.querySelectorAll(".hideButton");

function addMultipleClass(elem, args) {
  args.map((e) => {
    e = e.trim();
    return elem.classList.add(e);
  });
}
function removeMultipleClass(elem, args) {
  args.map((e) => {
    e = e.trim();
    return elem.classList.remove(e);
  });
}

// Editables.forEach((editable) => {
//   editable.addEventListener("click", (e) => {
//     Editables.forEach((ed) => {
//       if (ed !== editable) {
//         //add hidden to all other divs which are not selected
//         addMultipleClass(ed.querySelector(".hideButton"), ["hidden"]);

//         removeMultipleClass(ed, classesToAddonClick);
//       }
//     });
//     toggle_add_or_removeMultipleClass(editable.querySelector(".hideButton"), [
//       "hidden",
//     ]);
//     toggle_add_or_removeMultipleClass(editable, classesToAddonClick);
//   });
// });
//////////////////////////////////////
/////////////////////////////////////
////////////////////////////////////
///////// GET MOUSE POSITION RELATIVE TO divs I will do Later
// Get arbitrary element with id "my-element"
// Get arbitrary element with id "my-element"

// Listen for click events on body

const is_mouse_in_shape = (x, y, shape) => {
  let shape_left = shape.x;
  let shape_right = shape.x + shape.width;
  let shape_top = shape.y;
  let shape_bottom = shape.y + shape.height;

  if (x > shape_left && x < shape_right && y > shape_top && y < shape_bottom) {
    return true;
  }
  return false;
};
// const contentEditables = document.querySelectorAll("[contenteditable=true]");
const classesToAddonClick = ["border-2", "cursor-move"];
const classesToAddForContentEditable = [
  "underline",
  "decoration-green-500",
  "underline-offset-8",
];

document.addEventListener("click", (e) => {
  const startX = parseInt(e.clientX);
  const startY = parseInt(e.clientY);
  // console.log(startX, startY);

  Editables.forEach((editable) => {
    const Dimension = editable.getBoundingClientRect();
    // console.log(workDimen);
    const contentEditables = editable.querySelectorAll(
      "[contenteditable=true]"
    );
    if (is_mouse_in_shape(startX, startY, Dimension)) {
      console.log(contentEditables);
      contentEditables.forEach((content) => {
        toggle_add_or_removeMultipleClass(
          content,
          classesToAddForContentEditable
        );
      });

      toggle_add_or_removeMultipleClass(editable.querySelector(".hideButton"), [
        "hidden",
      ]);

      toggle_add_or_removeMultipleClass(editable, classesToAddonClick);
    } else {
      addMultipleClass(editable.querySelector(".hideButton"), ["hidden"]);
      removeMultipleClass(editable, classesToAddonClick);
      //Removing ContentEditableclasses when not in focus
      contentEditables.forEach((content) => {
        removeMultipleClass(content, classesToAddForContentEditable);
      });
    }
  });
});
