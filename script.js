function getCurrentValue() {
    let counter = document.getElementById('counter')
    return Number(counter.textContent)
}

function increment() {
    let plusBtn = document.getElementById('plus');
    plusBtn.addEventListener('click', () => {
        counter.textContent = getCurrentValue() + 1
        if (Number(counter.textContent) > 9) {
            counter.style.color = 'red';
        }
    })
};

function decrement() {
    let minusBtn = document.getElementById('minus');
    minusBtn.addEventListener('click', () => {
        counter.textContent = getCurrentValue() - 1;
        if (Number(counter.textContent) < 10) {
            counter.style.color = 'blue';
        }
    })
}

function nullify() {
    let nulifyBtn = document.getElementById('nullify');
    nulifyBtn.addEventListener('click', () => {
        counter.textContent = 0;
    })
};

function destroy() {
    let destroyBtn = document.getElementById('bum');
    destroyBtn.addEventListener('click', () => {
        document.body.innerHTML = ''
    })
}
destroy()
nullify()
increment()
decrement()
getCurrentValue()