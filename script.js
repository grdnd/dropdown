/**
 * Antra HW 04 - JavaScript Dropdown
 */

const states = {
  a: "apple",
  b: "banana",
  c: "city",
  d: "dom",
  e: "end",
  f: "forEach",
  g: "gold",
};

window.addEventListener("load", () => {
  const keys = document.getElementById("keys");
  const values = document.getElementById("values");
  Object.keys(states).map((key) => {
    const option = document.createElement("option");
    option.innerHTML = key;
    keys.appendChild(option);
  });
  Object.values(states).map((value) => {
    const option2 = document.createElement("option");
    option2.innerHTML = value;
    values.appendChild(option2);
  });
  keys.addEventListener("change", () => {
    values.value = states[keys.value];
  });
  values.addEventListener("change", () => {
    keys.value = Object.keys(states).filter(
      (state) => states[state] === values.value
    );
  });
});
