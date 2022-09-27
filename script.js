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

// setup on load
window.addEventListener("load", () => {
  const keys = document.getElementById("keys");
  const values = document.getElementById("values");

  // assign individual key values to keys
  Object.keys(states).map((key) => {
    const option = document.createElement("option");
    option.innerHTML = key;
    keys.appendChild(option);
  });

  // assign individual value for each key value
  Object.values(states).map((value) => {
    const option2 = document.createElement("option");
    option2.innerHTML = value;
    values.appendChild(option2);
  });

  // change values on key change
  keys.addEventListener("change", () => {
    values.value = states[keys.value];
  });

  // change keys on value change
  values.addEventListener("change", () => {
    keys.value = Object.keys(states).filter(
      (state) => states[state] === values.value
    );
  });
});
