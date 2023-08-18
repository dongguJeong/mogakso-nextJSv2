import {  useRef,useState } from "react"

export default function Mike(){

    const 오디오 = useRef();
    const 버튼 = useRef();

    const [isRecording, setIsRecording] = useState(false);

    //mediaRecorder 변수 생성
    let mediaRecorder = null;

    //녹음 데이터 저장 배열
    const audioArray = [];

    //버튼 클릭시 녹음 시작
    const record = async(event) => {
        if(!isRecording){

            //마이크 mediaStream 생성 . 
            const mediaStream = await navigator.mediaDevices.getUserMedia({audio : true});

            //mediaStream을 녹음할 mediaRecorder 생성
            mediaRecorder = new MediaRecorder(mediaStream);

            //녹음 데이터를 audioArray에 저장
            mediaRecorder.ondataavailable = (event) => {
                audioArray.push(event.data);
            };

            //녹음 종료, 재생 하는 이벤트 핸들러
            mediaRecorder.onstop = (event) => {

                //녹음이 종료되면 데이터를 Blob형식으로 합친다. 코덱도 설정
                const blob = new Blob(audioArray,{"type" :  "audio/ogg codecs=opus"});
                audioArray.splice(0); //오디오 데이터 비우기

                //blob에 접근할 수 있는 주소 생성
                const blobURL = window.URL.createObjectURL(blob);

                오디오.src = blobURL;
                오디오.play();
            }

            mediaRecorder.start();
            setIsRecording(cur => true);
        }
        else{
            mediaRecorder.stop();
            setIsRecording(cur => false);
        }
    }





    return (
        <>
            <div>마이크 녹음</div>
            <button onClick={record} ref={오디오}> {isRecording ? "종료" : "시작"} </button>
            <br></br>
            <audio controls ref={버튼}></audio>
        </>
    )
}