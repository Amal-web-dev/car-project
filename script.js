let upSpeed = document.querySelector('.up-speed')
let lowSpeed = document.querySelector('.low-speed')
let benzin = document.querySelector('#benzin')
let speed = document.querySelector('#speed')
let longRange = document.querySelector('#toggle2')
let cost = document.querySelector('#cost')
let cond = document.querySelector('#toggle1')
let upDisk = document.querySelector('.up-disk')
let lowDisk = document.querySelector('.low-disk')
let disk = document.querySelector('#disk')
let upCond = document.querySelector('.up-cond')
let lowCond = document.querySelector('.low-cond')
let condition = document.querySelector('#cond')
let wheelOne = document.querySelector('.foot-1')
let wheelTwo = document.querySelector('.foot-2')
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

  longRange.addEventListener('change', function() {
    if (longRange.checked == true) {
      cost.innerHTML = '94,999';
    } else {
      cost.innerHTML = '89,999';
    }
  });

  cond.addEventListener('change', function() {
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

    if(condCount <= -10) {
      cond.setAttribute('checked', true);
    }
  }




