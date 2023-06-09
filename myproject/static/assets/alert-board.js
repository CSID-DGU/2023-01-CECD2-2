var count = 1;

function createAlert(_handType, _speed, _img) {
    var newAlert = document.createElement('li');
    newAlert.classList.add('list-group-item', 'px-0', 'alert');
    newAlert.onclick = toggleAlert;

    var innerRow = document.createElement('div');
    innerRow.classList.add('row', 'align-items-start');
    newAlert.appendChild(innerRow);

    var innerColLeft = document.createElement('div');
    innerColLeft.classList.add('col');
    innerRow.appendChild(innerColLeft);

    var alertIndex = document.createElement('h5');
    alertIndex.classList.add('mb-0');
    alertIndex.innerText = getFormattedIndex();
    innerColLeft.appendChild(alertIndex);

    var alertDate =  document.createElement('small');
    alertDate.classList.add('text-danger');
    alertDate.innerText = getCurrentDate();
    innerColLeft.appendChild(alertDate);

    var innerColRight = document.createElement('div');
    innerColRight.classList.add('col-auto');
    innerRow.appendChild(innerColRight);

    var alertTime = document.createElement('h5');
    alertTime.classList.add('mb-0');
    alertTime.innerText = getCurrentTime();
    innerColRight.appendChild(alertTime);

    var innerColImage = document.createElement('div');
    innerColImage.classList.add('col');
    innerColLeft.appendChild(innerColImage);

    var assultImage = document.createElement('img');
    assultImage.classList.add('assult-image');
    assultImage.src = '../../static/assets/'+_img+'.png';
    assultImage.alt = 'test image';
    innerColImage.appendChild(assultImage);

    var innerColLeft = document.createElement('div');
    innerColLeft.classList.add('col');
    innerColImage.appendChild(innerColLeft);

    var alertSpeed = document.createElement('h5');
    alertSpeed.classList.add('mb-0');
    alertSpeed.innerText = '속도: '+_speed;
    innerColLeft.appendChild(alertSpeed);

    var innerColRight = document.createElement('div');
    innerColRight.classList.add('col-auto');
    innerColImage.appendChild(innerColRight);

    var alertHand = document.createElement('h5');
    alertHand.classList.add('mb-0');
    alertHand.innerText = '타격: '+_handType;
    innerColRight.appendChild(alertHand);

    changeColor('rgba(252, 120, 108, 0.5)');
    document.getElementById('alert-list').appendChild(newAlert);
    setTimeout(() => changeColor('#ffffff'), 1000);
}

function toggleAlert() {
    if (this.style.height == '360px') {
        this.style.height = '80px';
    } else {
        this.style.height = '360px';
    }
}

function getFormattedIndex(){
    var formattedNumber = String(count).padStart(6, '0');
    count += 1;
    return 'HTSR-' + formattedNumber;
}

function getCurrentDate(){
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getCurrentTime(){
    var currentTime = new Date();
    var hours = String(currentTime.getHours()).padStart(2, '0');
    var minutes = String(currentTime.getMinutes()).padStart(2, '0');
    var seconds = String(currentTime.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function changeColor(targetColor){
    document.getElementById('alert-board').style.backgroundColor = targetColor;
}

window.onload = function(){
    setTimeout(() => createAlert("왼손", 60, 19), 20990);
    setTimeout(() => createAlert("오른손", 67, 25), 26990);
    setTimeout(() => createAlert("왼손", 64, 65), 66990);
    setTimeout(() => createAlert("오른손", 66, 73), 74990);
    setTimeout(() => createAlert("왼손", 68, 113), 114990);
    setTimeout(() => createAlert("오른손", 59, 122), 123990);
    setTimeout(() => createAlert("왼손", 70,159), 159990);
    setTimeout(() => createAlert("오른손", 61,167), 167990);
 }