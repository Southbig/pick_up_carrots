const startBtn = document.querySelector('.startBtn')
const round = document.querySelector('.round')
const time = document.querySelector('.time')
const carrotNum = document.querySelector('.carrotNum')

let onOff = false
let timer

let selectCarrot
let carrot
let bug

let carrotCount


const handleStart = () => {
  time.textContent = 10
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

      carrotCount = round.getElementsByClassName('carrot');

      // console.log(p1.length)
      carrotNum.textContent = carrotCount.length

      const handleCarrotRemove = (e) => {
        if (e.target.classList.value === 'bug') {
          console.log('bug 클릭 게임 중지')
          clearInterval(timer)
          startBtn.textContent = '시작'
          onOff = false
          while (round.hasChildNodes()) {
            round.removeChild(
              round.firstChild
            );
          }
          timer = null
          onOff = false
        }
        if (e.target.classList.value === 'carrot') {
          e.target.remove()
          carrotNum.textContent--
        }
        if (carrotCount.length === 0) {
          console.log('타임 멈춤')
          clearInterval(timer)
          startBtn.textContent = '시작'
        }
        console.log(carrotCount.length)
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