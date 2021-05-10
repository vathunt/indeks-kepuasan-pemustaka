let numVsVotes = 0
let numSVotes  = 0
let numNsVotes = 0
let numVdVotes = 0

let vsVotes          = document.getElementById('vsVotes')
let sVotes           = document.getElementById('sVotes')
let nsVotes          = document.getElementById('nsVotes')
let vdVotes          = document.getElementById('vdVotes')

let verySatisfied    = document.getElementById('verySatisfied')
let satisfied        = document.getElementById('satisfied')
let notSatisfied     = document.getElementById('notSatisfied')
let veryDissatisfied = document.getElementById('veryDissatisfied')

let feedback = ''

if (localStorage.getItem("numVsVotes")) {
  numVsVotes = localStorage.getItem("numVsVotes")
  vsVotes.innerHTML = `${numVsVotes}`
}

if (localStorage.getItem("numSVotes")) {
  numSVotes = localStorage.getItem("numSVotes")
  sVotes.innerHTML = `${numSVotes}`
}

if (localStorage.getItem("numNsVotes")) {
  numNsVotes = localStorage.getItem("numNsVotes")
  nsVotes.innerHTML = `${numNsVotes}`
}

if (localStorage.getItem("numVdVotes")) {
  numVdVotes = localStorage.getItem("numVdVotes")
  vdVotes.innerHTML = `${numVdVotes}`
}

verySatisfied.addEventListener('click', () => votes(4))
satisfied.addEventListener('click', () => votes(3))
notSatisfied.addEventListener('click', () => votes(2))
veryDissatisfied.addEventListener('click', () => votes(1))

function votes(reaction) {
  switch(reaction) {
    case 1:
    numVdVotes++;
    feedback = 'Sangat Tidak Puas';
    localStorage.setItem("numVdVotes", numVdVotes);
    vdVotes.innerHTML= `${numVdVotes}`;
    break;
    case 2:
    numNsVotes++;
    feedback = 'Tidak Puas';
    localStorage.setItem("numNsVotes", numNsVotes);
    nsVotes.innerHTML= `${numNsVotes}`;
    break;
    case 3:
    numSVotes++;
    feedback = 'Puas';
    localStorage.setItem("numSVotes", numSVotes);
    sVotes.innerHTML= `${numSVotes}`;
    break;
    case 4:
    numVsVotes++;
    feedback = 'Sangat Puas';
    localStorage.setItem("numVsVotes", numVsVotes);
    vsVotes.innerHTML= `${numVsVotes}`;
    break;
  }

  if (feedback) {
    Swal.fire({
      icon: 'success',
      title: `Terimakasih!<br /> Anda Memberikan Feedback <br /><strong>${feedback.toUpperCase()}</strong>`,
      showConfirmButton: false,
      // showClass: {
      //   popup: 'animate__animated animate__zoomInDown'
      // },
      // hideClass: {
      //   popup: 'animate__animated animate__backOutDown'
      // },
      timer: 2500
    })
  }
}