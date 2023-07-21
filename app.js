function getItem(id){
    return document.getElementById(id);
}
function enroll(){
    const enrolledStdDiv = getItem('enrolled-std');
    const fName = getItem('fullname').value;
  const mail = getItem('email').value;
  let siteLink = getItem('sitelink').value;
  let imgLink = getItem('imagelink').value;
  const maleRadioButton = getItem('male');
  const femaleRadioButton = getItem('female');
  let html = getItem('email');
  let css = getItem('email');
  let js = getItem('js');
  const skillsCheckboxes = document.querySelectorAll('input[name="skills"]:checked');

  let selectedGender;



  if (maleRadioButton.checked) {
    selectedGender = maleRadioButton.value;
  }

  if (femaleRadioButton.checked) {
    selectedGender = femaleRadioButton.value;
  }

  const selectedSkills = Array.from(skillsCheckboxes).map(checkbox => checkbox.value);

  if(imgLink == '' && selectedGender == 'Male'){
    imgLink = "./assets/user-male.png";
  } else if(imgLink == '' && selectedGender == 'Female'){
    imgLink = "./assets/user-female.png";
  }

  if(siteLink == ''){
    siteLink = "No Website"
  }

//   if (selectedGender) {
//     console.log(selectedGender)
//   } else {
//     console.log('No radio button selected.');
//   }
    
    if(fName == '' || mail == '' || !selectedGender){
        alert('Name, Email and Gender are required');
    } else {

    enrolledStdDiv.innerHTML +=`
    <div class="enrolled-std-card">
                <img src="${imgLink}" alt="Student Image" id="st-img">
                <div class="info">
                    <h4>Name: </h4> <p>${fName}</p>
                </div>
                <div class="info">
                    <h4>Email: </h4> <p>${mail}</p>
                </div>
                <div class="info">
                    <h4>Website: </h4> <p>${siteLink}</p>
                </div>
                <div class="info">
                    <h4>Gender: </h4> <p>${selectedGender}</p>
                </div>
                <div class="info">
                    <h4>Skills: </h4> <p>${selectedSkills.join(" ")}</p>
                </div>
            </div>`
    }
}

            