const modal = document.querySelector('.dialog');
const modal2 = document.querySelector('.dialog2');
const modal3 = document.querySelector('.dialog3');
const modal4 = document.querySelector('.dialog4');
const modalBox = document.getElementById('modal-box');
const modalBox2 = document.getElementById('modal-box2');
const modalBox3 = document.getElementById('modal-box3');
const modalBox4 = document.getElementById('modal-box4');
const showModalBtn = document.getElementById('show-modal-btn');
const showModalBtn2 = document.getElementById('show-modal-btn2');
const showModalBtn3 = document.getElementById('show-modal-btn3');
const showModalBtn4 = document.getElementById('show-modal-btn4');
const closeModalBtn = document.getElementById('close-modal-btn');
const closeModalBtn2 = document.getElementById('close-modal-btn2');
const closeModalBtn3 = document.getElementById('close-modal-btn3');
const closeModalBtn4 = document.getElementById('close-modal-btn4');

let isModalOpen = false

showModalBtn.addEventListener('click', (e) => {
  modal.showModal()
  isModalOpen = true
  e.stopPropagation()
})

showModalBtn2.addEventListener('click', (e) => {
    modal2.showModal()
    isModalOpen = true
    e.stopPropagation()
  })

  showModalBtn3.addEventListener('click', (e) => {
    modal3.showModal()
    isModalOpen = true
    e.stopPropagation()
  })

  showModalBtn4.addEventListener('click', (e) => {
    modal4.showModal()
    isModalOpen = true
    e.stopPropagation()
  })

closeModalBtn.addEventListener('click', () => {
  modal.close()
  isModalOpen = false
})

closeModalBtn2.addEventListener('click', () => {
    modal2.close()
    isModalOpen = false
  })

  closeModalBtn3.addEventListener('click', () => {
    modal3.close()
    isModalOpen = false
  })

  closeModalBtn4.addEventListener('click', () => {
    modal4.close()
    isModalOpen = false
  })

document.addEventListener('click', (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close()
  }
  if (isModalOpen && !modalBox2.contains(e.target)) {
    modal2.close()
  }
  if (isModalOpen && !modalBox3.contains(e.target)) {
    modal3.close()
  }
  if (isModalOpen && !modalBox4.contains(e.target)) {
    modal4.close()
  }
})

// document.addEventListener('click', (e) => {
//     if (isModalOpen && !modalBox2.contains(e.target)) {
//       modal2.close()
//     }
//   })

//   document.addEventListener('click', (e) => {
//     if (isModalOpen && !modalBox3.contains(e.target)) {
//       modal3.close()
//     }
//   })

//   document.addEventListener('click', (e) => {
//     if (isModalOpen && !modalBox4.contains(e.target)) {
//       modal4.close()
//     }
//   })