let upSpeed = document.querySelector('.up-speed')
let lowSpeed = document.querySelector('.low-speed')
let benzin = document.querySelector('#benzin')
let speed = document.querySelector('#speed')
let longRange = document.querySelector('#toggle2')
let cond = document.querySelector('#toggle1')
let look = document.querySelector('#toggle3')
let cost = document.querySelector('#cost')
let upDisk = document.querySelector('.up-disk')
let lowDisk = document.querySelector('.low-disk')
let disk = document.querySelector('#disk')
let upCond = document.querySelector('.up-cond')
let lowCond = document.querySelector('.low-cond')
let condition = document.querySelector('#cond')
let wheelOne = document.querySelector('.foot-1')
let wheelTwo = document.querySelector('.foot-2')
let up = document.querySelectorAll('.up')
let low = document.querySelectorAll('.low')
let count = 60
let benzinCount = 750
condCount = 20

upSpeed.onclick = () => {
  if (count < 140) {
    count += 5
    speed.innerHTML = count
    benzinCount -= 10
    benzin.innerHTML = benzinCount
  }
}

lowSpeed.onclick = () => {
  if (count > 60) {
    count -= 5
    speed.innerHTML = count
    benzinCount += 10
    benzin.innerHTML = benzinCount
  }
}

longRange.addEventListener('change', function () {
  if (longRange.checked == true) {
    cost.innerHTML = '94,999';
  } else {
    cost.innerHTML = '89,999';
  }
});

cond.addEventListener('change', function () {
  if (cond.checked == true) {
    benzinCount -= 20;
    benzin.innerHTML = benzinCount
  } else {
    benzinCount += 20;
    benzin.innerHTML = benzinCount
  }
});

upDisk.onclick = () => {
  disk.innerHTML = '21'
  wheelOne.style.height = '70px'
  wheelTwo.style.height = '70px'
}

lowDisk.onclick = () => {
  disk.innerHTML = '19'
  wheelOne.style.height = '65px'
  wheelTwo.style.height = '65px'
}

upCond.onclick = () => {
  if (condCount < 40) {
    condCount++;
    condition.innerHTML = condCount + '°';
  }

  if (condCount >= 30) {
    cond.setAttribute('checked', true);
  } else {
    cond.removeAttribute('checked');
  }
}

lowCond.onclick = () => {
  if (condCount > -30) {
    condCount--;
    condition.innerHTML = condCount + '°';
  }

  if (condCount >= 30) {
    cond.setAttribute('checked', true);
  } else {
    cond.removeAttribute('checked');
  }

  if (condCount <= -10) {
    cond.setAttribute('checked', true);
  }
}

let teslaImg = document.querySelector('.tesla-car')
let modalTesla = document.querySelector('.modal-tesla')
let teslaScreen = document.querySelector('.tesla-screen')
let tc = document.querySelectorAll('.tc')
let black = document.querySelector('.black')

teslaImg.onclick = (event) => {
  let imgHeight = teslaImg.getBoundingClientRect().height
  let clickY = event.clientY - teslaImg.getBoundingClientRect().top

  console.log(clickY);
  if (clickY == 180 || clickY == 181 || clickY == 182 || clickY == 183 || clickY == 184 || clickY == 185 || clickY == 186 || clickY == 179 || clickY == 178) {
    teslaImg.classList.add('tesla-animation')
    wheelOne.classList.add('opac')
    wheelTwo.classList.add('opac')
    up.forEach(u => {
      u.classList.add('opac')
    })
    low.forEach(lo => {
      lo.classList.add('opac')
    })
    tc.forEach(t => t.classList.add('opac'))


    setTimeout(() => {
      teslaScreen.style.display = 'none'
      modalTesla.style.display = 'block'
      black.classList.add('tesla-animation')
    }, 1000)

    setTimeout(() => {
      black.classList.remove('tesla-animation')
      black.style.transition = '1s ease'
    }, 1500)
  }
}

let lookCar = document.querySelector('#toggle4')
let colorOne = document.querySelector('.color-1')
let colorTwo = document.querySelector('.color-2')
let colorThree = document.querySelector('.color-3')




lookCar.addEventListener('change', () => {
  if (lookCar.checked) {
    wheelOne.classList.remove('opac')
    wheelTwo.classList.remove('opac')
    up.forEach(u => {
      u.classList.remove('opac')
    })
    low.forEach(lo => {
      lo.classList.remove('opac')
    })
    tc.forEach(t => t.classList.remove('opac'))


    setTimeout(() => {
      teslaScreen.style.display = 'block'
      modalTesla.style.display = 'none'
      black.classList.add('tesla-animation')
    teslaImg.classList.add('tesla-animation')
    }, 1500)

    setTimeout(() => {
      black.classList.add('tesla-animation')
      black.style.transition = '1s ease'
    }, 500)

    setTimeout(() => {
      teslaImg.classList.remove('tesla-animation')
      teslaImg.style.transition = '1s ease'
    }, 2000)
  }
})

colorOne.onclick = () => {
  black.src = './img/black.png'
}

colorTwo.onclick = () => {
  black.style.transition = '1s ease'
  setTimeout(() => {
    black.src = './img/white.png'
  }, 300)
}

colorThree.onclick = () => {
  black.src = './img/brown.png'
}