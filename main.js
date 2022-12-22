//////////////////////////
//////////////////////////
const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");


selectMenu.addEventListener("change", function () {
  let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
  saveBtn.innerText = `Save as ${selectedOption.split(" ")[0]} File`;
})

saveBtn.addEventListener("click", function () {
  const blob = new Blob([textarea.value], {type:selectMenu.value});
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileNameInput.value;
  link.href = fileUrl;
  link.click();
});
