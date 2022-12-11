const startBtn = document.querySelector('.startBtn')
const round = document.querySelector('.round')
const time = document.querySelector('.time')

let onOff = false
let timer

let selectCarrot
let carrot
let bug


const handleStart = () => {
  if (!onOff) {
    startBtn.textContent = '정지'
    for (let i = 0; i < 10; i++) {
      carrot = document.createElement('img')
      bug = document.createElement('img')

      carrot.src = './img/carrot.png'
      bug.src = './img/bug.png'

      carrot.classList = 'carrot'
      bug.classList = 'bug'

      round.appendChild(carrot)
      round.appendChild(bug)


      const handleCarrotRemove = () => {
        console.log('지우기 성공')
      }

      carrot.addEventListener('click', handleCarrotRemove)
      bug.addEventListener('click', handleCarrotRemove)

      if (!timer) {
        timer = setInterval(() => {
          if (time.textContent !== '0') {
            time.textContent--
          }
          if (time.textContent === '0') {
            console.log('끝')
            startBtn.textContent = '시작'
            clearInterval(timer)
            time.textContent = 10
            while (round.hasChildNodes()) {
              round.removeChild(
                round.firstChild
              );
            }
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

// if (time.textContent === 10) {
//   clearInterval(timer)
//   timer = null
// }

startBtn.addEventListener('click', handleStart)

const handleCarrotRemove = () => {
  console.log('지우기 성공')
}

carrot?.document.querySelector('.carrot')
console.log(carrot, selectCarrot)


carrot?.addEventListener('click', handleCarrotRemove)