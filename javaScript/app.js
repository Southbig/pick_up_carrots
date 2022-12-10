const startBtn = document.querySelector('.startBtn')
const round = document.querySelector('.round')
const time = document.querySelector('.time')

let onOff = false
let timer

const handleStart = () => {
  if (!onOff) {
    startBtn.textContent = '정지'
    for (let i = 0; i < 10; i++) {
      let rabbit = document.createElement('span')
      let bug = document.createElement('span')
      rabbit.classList = 'rabbit'
      bug.classList = 'bug'
      round.appendChild(rabbit)
      rabbit.textContent = 'rabbit'
      round.appendChild(bug)
      bug.textContent = 'bug'

      if (!timer) {
        timer = setInterval(() => {
          if (time.textContent !== '0') {
            time.textContent--
          }
          if (time.textContent === '0') {
            console.log('끝')
            clearInterval(timer)
            time.textContent = 10
            timer = null
            onOff = false
          }
        }, 1000)
      }


      onOff = true
    }
  } else {
    startBtn.textContent = '시작'
    while (round.hasChildNodes()) {	// 부모노드가 자식이 있는지 여부를 알아낸다
      round.removeChild(
        round.firstChild
      );
    }
    clearInterval(timer)
    time.textContent = 10
    timer = null
    onOff = false
  }
}

if (time.textContent === 10) {
  clearInterval(timer)
  timer = null
}

startBtn.addEventListener('click', handleStart)