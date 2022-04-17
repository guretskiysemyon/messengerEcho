const dataNickPsw = new Map();
const dataNickName = new Map();



// test input 
dataNickPsw.set("Borys", 1234);


function openFunctions() {
    var popup = document.getElementById("videoAudioImage");
    popup.classList.toggle("show");
}

function openFile() {
    document.getElementById("boxBack").classList.add("show");
}


function sendMessage(msg) {
    var time = new Date();
    var current = time.getHours() + ":" + time.getMinutes();
    if (msg != "") {
        el = document.createElement('li');
        el.innerHTML = '<div>' + '<span>' + msg + '<br><small class="time">' + current +'</small></span></div>';
        el.setAttribute("class", "right");
        document.getElementById('chat-message').appendChild(el);
        document.getElementById("input-msg").value = "";
    }
}


function send() {
    var msg = document.getElementById("input-msg").value;
    var time = new Date();
    var current = time.getHours() + ":" + time.getMinutes();
    if (msg != "") {
        el = document.createElement('li');
        el.innerHTML = '<div>' + '<span>' + msg + '<br><small class="time">' + current +'</small></span></div>';
        el.setAttribute("class", "right");
        document.getElementById('chat-message').appendChild(el);
        document.getElementById("input-msg").value = "";
    }
}


function sendFile(event) {
	var image = document.createElement('img');
	image.src = URL.createObjectURL(event.target.files[0]);
    sendMessage(image);
};


var imgMsg = "";
function closeAndSend() {
    if (imgMsg != "") {
        sendMessage(imgMsg);
    }
    resetForm();
}

function resetForm() {
    document.getElementById('file-selector').value = null;
    document.getElementById("boxBack").classList.remove("show");
}

function openFileHelper() {
    const status = document.getElementById('status');
    if (window.FileList && window.File && window.FileReader) {
        document.getElementById('file-selector').addEventListener('change', event => {
            const file = event.target.files[0];
            if (!file.type) {
                status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
                return;
            }
            if (!file.type.match('image.*')) {
                status.textContent = 'Error: The selected file does not appear to be an image.'
                return;
            }
            imgMsg = '<img src="' + URL.createObjectURL(file) + '"></img>';
        });
    }
}

function startRecordingAudio(mediaRecorder) {
    mediaRecorder.start();
    let chunks = [];

    mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
    }
}

function recordVoice() {
    // set up basic variables for app
    document.getElementById("boxBackAudio").classList.add("show");
    const record = document.getElementById("startAudioBtn");
    const stop = document.getElementById("stopAudioBtn");
    const reset = document.getElementById("resetAudioBtn");
    const send = document.getElementById("sendAudioBtn");
    const recordedAudio = document.querySelector(".recorded-audio");
    
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        record.onclick = function () {
            mediaRecorder.start();
        }

        let chunks = [];
        mediaRecorder.ondataavailable = function (e) {
            chunks.push(e.data);
        }

        stop.onclick = function () {
            mediaRecorder.stop();
        }

        mediaRecorder.onstop = function (e) {
            const clipName = "audio record";
            const clipContainer = document.createElement('article');
            const clipLabel = document.createElement('p');
            const audio = document.createElement('audio');

            clipContainer.classList.add('clip');
            audio.setAttribute('controls', '');
            clipLabel.innerHTML = clipName;
    
            clipContainer.appendChild(audio);
            clipContainer.appendChild(clipLabel);
            recordedAudio.appendChild(clipContainer);
    
            const blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
            chunks = [];
            const audioURL = window.URL.createObjectURL(blob);
            audio.src = audioURL;
    
            reset.onclick = function (e) {
                let evtTgt = e.target;
                evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
                document.getElementById("boxBackAudio").classList.remove("show");
            }

            send.onclick = function (e) {
                audioMsg = '<audio controls> <source src="' + audio.src + '" type="audio/ogg"></audio>';
                sendMessage(audioMsg);
                let evtTgt = e.target;
                evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
                document.getElementById("boxBackAudio").classList.remove("show");

            }
        }
    });
    console.log(recordedAudio.value);
}
