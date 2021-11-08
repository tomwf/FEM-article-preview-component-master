const shareBtn = document.getElementById('share-btn');
const shareBtnActive = document.getElementById('share-btn-active');
const cardShare = document.querySelector('.card__share');
const cardAuthor = document.querySelector('.card__author');

function onMobileScreen() {
  return !window.matchMedia('(min-width: 850px)').matches;
}

function socialMediaBtnAppeared() {
  return cardShare.style.display === 'flex';
}

// Hide social media buttons on window resize
window.onresize = () => {

  if (onMobileScreen() && socialMediaBtnAppeared()) {
    cardAuthor.style.display = 'flex';
  } else {
    shareBtn.className = 'share-btn light';
  }
  cardShare.style.display = 'none';
}

// Show social media buttons
shareBtn.onclick = () => {

  // Hide author info on mobile screen
  if (onMobileScreen()) {
    cardAuthor.style.display = 'none';
    cardShare.style.display = 'flex';
  } else {
    if (socialMediaBtnAppeared()) {
      shareBtn.className = 'share-btn light';
      cardShare.style.display = 'none';
    } else {
      shareBtn.className = 'share-btn dark';
      cardShare.style.display = 'flex';
    }
  }
}

// Hide social media buttons
shareBtnActive.onclick = () => {
  
  // Show author info on mobile screen
  if (onMobileScreen()) {
    cardAuthor.style.display = 'flex';
  } else {
    shareBtn.className = 'share-btn light';
    cardShare.style.display = 'none';
  }
  cardShare.style.display = 'none';
}


