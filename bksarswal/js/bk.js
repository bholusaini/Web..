
'use strict';
const modal = document.querySelector(".modal");
const btncloseModal = document.querySelector(".close-modal");
const btndisplayModal = document.querySelector(".display-modal");
//   const blurEffect =document.querySelector(".blurEffect");
const showModal = function(){
    modal.classList.remove('hidden');
// blurEffect.classList.remove("hidden");
};

const closeModal = function(){
    modal.classList.add("hidden")
    // blurEffect.classList.add("hidden");
};

btndisplayModal.addEventListener('mouseover',showModal);
btncloseModal.addEventListener('mouseover',closeModal);
