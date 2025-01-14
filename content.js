// const createOverlay = () => {
//   const overlay = document.createElement("div");
//   overlay.style.position = "absolute";
//   overlay.style.pointerEvents = "none";
//   overlay.style.zIndex = "9999";
//   overlay.style.border = "2px solid red";
//   document.body.appendChild(overlay);
//   return overlay;
// };

// let selectedElement = null;
// let hoverElement = null;
// const overlay = createOverlay();
// const lines = [];

// const hoverOverlay = document.createElement("div");
// hoverOverlay.style.position = "absolute";
// hoverOverlay.style.pointerEvents = "none";
// hoverOverlay.style.zIndex = "9998";
// hoverOverlay.style.border = "2px solid blue";
// hoverOverlay.style.boxShadow = "0 0 10px blue";
// document.body.appendChild(hoverOverlay);

// const targetHoverOverlay = document.createElement("div");
// targetHoverOverlay.style.position = "absolute";
// targetHoverOverlay.style.pointerEvents = "none";
// targetHoverOverlay.style.zIndex = "9998";
// targetHoverOverlay.style.border = "2px solid blue";
// targetHoverOverlay.style.boxShadow = "0 0 10px blue";
// document.body.appendChild(targetHoverOverlay);

// document.addEventListener("mousemove", (event) => {
//   if (!selectedElement) {
//     hoverElement = event.target;
//     const rect = hoverElement.getBoundingClientRect();
//     hoverOverlay.style.width = `${rect.width}px`;
//     hoverOverlay.style.height = `${rect.height}px`;
//     hoverOverlay.style.left = `${rect.left + window.scrollX}px`;
//     hoverOverlay.style.top = `${rect.top + window.scrollY}px`;
//   }
// });

// document.addEventListener("click", (event) => {
//   event.stopPropagation();
//   event.preventDefault();
//   if (!selectedElement) {
//     selectedElement = event.target;
//     const rect = selectedElement.getBoundingClientRect();
//     overlay.style.width = `${rect.width}px`;
//     overlay.style.height = `${rect.height}px`;
//     overlay.style.left = `${rect.left + window.scrollX}px`;
//     overlay.style.top = `${rect.top + window.scrollY}px`;
//     hoverOverlay.style.width = "0px";
//     hoverOverlay.style.height = "0px";
//   }
// });

// document.addEventListener("mousemove", (event) => {
//   if (!selectedElement) return;

//   const selectedRect = selectedElement.getBoundingClientRect();
//   const mouseX = event.clientX + window.scrollX;
//   const mouseY = event.clientY + window.scrollY;

//   let startX, startY;

//   if (mouseX < selectedRect.left + window.scrollX) {
//     startX = selectedRect.left + window.scrollX;
//     startY = selectedRect.top + selectedRect.height / 2 + window.scrollY;
//   } else if (mouseX > selectedRect.right + window.scrollX) {
//     startX = selectedRect.right + window.scrollX;
//     startY = selectedRect.top + selectedRect.height / 2 + window.scrollY;
//   } else if (mouseY < selectedRect.top + window.scrollY) {
//     startX = selectedRect.left + selectedRect.width / 2 + window.scrollX;
//     startY = selectedRect.top + window.scrollY;
//   } else {
//     startX = selectedRect.left + selectedRect.width / 2 + window.scrollX;
//     startY = selectedRect.bottom + window.scrollY;
//   }

//   const targetElement = document.elementFromPoint(event.clientX, event.clientY);
//   if (targetElement && targetElement !== selectedElement) {
//     const targetRect = targetElement.getBoundingClientRect();
//     targetHoverOverlay.style.width = `${targetRect.width}px`;
//     targetHoverOverlay.style.height = `${targetRect.height}px`;
//     targetHoverOverlay.style.left = `${targetRect.left + window.scrollX}px`;
//     targetHoverOverlay.style.top = `${targetRect.top + window.scrollY}px`;
//   } else {
//     targetHoverOverlay.style.width = "0px";
//     targetHoverOverlay.style.height = "0px";
//   }

//   lines.forEach((line) => line.remove());
//   lines.length = 0;

//   const line = document.createElement("div");
//   line.style.position = "absolute";
//   line.style.pointerEvents = "none";
//   line.style.zIndex = "10000";
//   line.style.backgroundColor = "blue";
//   line.style.height = "2px";

//   const deltaX = mouseX - startX;
//   const deltaY = mouseY - startY;
//   const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

//   const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

//   line.style.width = `${distance}px`;
//   line.style.transformOrigin = "0 50%";
//   line.style.transform = `rotate(${angle}deg)`;
//   line.style.left = `${startX}px`;
//   line.style.top = `${startY}px`;

//   const label = document.createElement("div");
//   label.style.position = "absolute";
//   label.style.pointerEvents = "none";
//   label.style.zIndex = "10001";
//   label.style.backgroundColor = "white";
//   label.style.color = "black";
//   label.style.padding = "2px 5px";
//   label.style.border = "1px solid black";
//   label.style.fontSize = "12px";
//   label.textContent = `${Math.round(distance)} px`;
//   label.style.left = `${startX + deltaX / 2}px`;
//   label.style.top = `${startY + deltaY / 2}px`;

//   document.body.appendChild(line);
//   document.body.appendChild(label);
//   lines.push(line, label);
// });

// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     selectedElement = null;
//     overlay.style.width = "0px";
//     overlay.style.height = "0px";
//     hoverOverlay.style.width = "0px";
//     hoverOverlay.style.height = "0px";
//     targetHoverOverlay.style.width = "0px";
//     targetHoverOverlay.style.height = "0px";
//     lines.forEach((line) => line.remove());
//     lines.length = 0;
//   }
// });

const createOverlay = () => {
  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.pointerEvents = "none";
  overlay.style.zIndex = "9999";
  overlay.style.border = "2px solid red";
  document.body.appendChild(overlay);
  return overlay;
};

let selectedElement = null;
let hoverElement = null;
const overlay = createOverlay();
const lines = [];

const hoverOverlay = document.createElement("div");
hoverOverlay.style.position = "absolute";
hoverOverlay.style.pointerEvents = "none";
hoverOverlay.style.zIndex = "9998";
hoverOverlay.style.border = "2px solid blue";
hoverOverlay.style.boxShadow = "0 0 10px blue";
document.body.appendChild(hoverOverlay);

const targetHoverOverlay = document.createElement("div");
targetHoverOverlay.style.position = "absolute";
targetHoverOverlay.style.pointerEvents = "none";
targetHoverOverlay.style.zIndex = "9998";
targetHoverOverlay.style.border = "2px solid blue";
targetHoverOverlay.style.boxShadow = "0 0 10px blue";
document.body.appendChild(targetHoverOverlay);

const blockClicks = (event) => {
  if (selectedElement) {
    event.stopPropagation();
    event.preventDefault();
  }
};

document.addEventListener("mousemove", (event) => {
  if (!selectedElement) {
    hoverElement = event.target;
    const rect = hoverElement.getBoundingClientRect();
    hoverOverlay.style.width = `${rect.width}px`;
    hoverOverlay.style.height = `${rect.height}px`;
    hoverOverlay.style.left = `${rect.left + window.scrollX}px`;
    hoverOverlay.style.top = `${rect.top + window.scrollY}px`;
  }
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (!selectedElement) {
    selectedElement = event.target;
    const rect = selectedElement.getBoundingClientRect();
    overlay.style.width = `${rect.width}px`;
    overlay.style.height = `${rect.height}px`;
    overlay.style.left = `${rect.left + window.scrollX}px`;
    overlay.style.top = `${rect.top + window.scrollY}px`;
    hoverOverlay.style.width = "0px";
    hoverOverlay.style.height = "0px";
  }
});

// ...existing code...

document.addEventListener("mousemove", (event) => {
  if (!selectedElement) return;

  const selectedRect = selectedElement.getBoundingClientRect();
  const mouseX = event.clientX + window.scrollX;
  const mouseY = event.clientY + window.scrollY;

  let startX, startY, endX, endY;

  const targetElement = document.elementFromPoint(event.clientX, event.clientY);
  if (targetElement && targetElement !== selectedElement) {
    const targetRect = targetElement.getBoundingClientRect();
    targetHoverOverlay.style.width = `${targetRect.width}px`;
    targetHoverOverlay.style.height = `${targetRect.height}px`;
    targetHoverOverlay.style.left = `${targetRect.left + window.scrollX}px`;
    targetHoverOverlay.style.top = `${targetRect.top + window.scrollY}px`;

    if (mouseX < selectedRect.left + window.scrollX) {
      // Draw vertical line to the left
      startX = selectedRect.left + window.scrollX;
      endX = targetRect.right + window.scrollX;
      startY = endY =
        Math.max(selectedRect.top, targetRect.top) + window.scrollY;
    } else if (mouseX > selectedRect.right + window.scrollX) {
      // Draw vertical line to the right
      startX = selectedRect.right + window.scrollX;
      endX = targetRect.left + window.scrollX;
      startY = endY =
        Math.max(selectedRect.top, targetRect.top) + window.scrollY;
    } else if (mouseY < selectedRect.top + window.scrollY) {
      // Draw horizontal line above
      startY = selectedRect.top + window.scrollY;
      endY = targetRect.bottom + window.scrollY;
      startX = endX =
        Math.max(selectedRect.left, targetRect.left) + window.scrollX;
    } else {
      // Draw horizontal line below
      startY = selectedRect.bottom + window.scrollY;
      endY = targetRect.top + window.scrollY;
      startX = endX =
        Math.max(selectedRect.left, targetRect.left) + window.scrollX;
    }
  } else {
    targetHoverOverlay.style.width = "0px";
    targetHoverOverlay.style.height = "0px";
    return;
  }

  lines.forEach((line) => line.remove());
  lines.length = 0;

  const line = document.createElement("div");
  line.style.position = "absolute";
  line.style.pointerEvents = "none";
  line.style.zIndex = "10000";
  line.style.backgroundColor = "orange";

  if (startX === endX) {
    line.style.width = "2px";
    line.style.height = `${Math.abs(endY - startY)}px`;
    line.style.left = `${startX}px`;
    line.style.top = `${Math.min(startY, endY)}px`;
  } else {
    line.style.width = `${Math.abs(endX - startX)}px`;
    line.style.height = "2px";
    line.style.left = `${Math.min(startX, endX)}px`;
    line.style.top = `${startY}px`;
  }

  const distance = Math.abs(startX === endX ? endY - startY : endX - startX);

  const label = document.createElement("div");
  label.style.position = "absolute";
  label.style.pointerEvents = "none";
  label.style.zIndex = "10001";
  label.style.backgroundColor = "white";
  label.style.color = "black";
  label.style.padding = "2px 5px";
  label.style.border = "1px solid black";
  label.style.fontSize = "16px"; // Increased font size
  label.textContent = `${distance} px`;
  label.style.left = `${(startX + endX) / 2}px`;
  label.style.top = `${(startY + endY) / 2}px`;

  document.body.appendChild(line);
  document.body.appendChild(label);
  lines.push(line, label);
});

// ...existing code...

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    selectedElement = null;
    overlay.style.width = "0px";
    overlay.style.height = "0px";
    hoverOverlay.style.width = "0px";
    hoverOverlay.style.height = "0px";
    targetHoverOverlay.style.width = "0px";
    targetHoverOverlay.style.height = "0px";
    lines.forEach((line) => line.remove());
    lines.length = 0;
  }
});

document.addEventListener("click", blockClicks, true);
