const string = `* {
    box-sizing: border-box;
}
*::before,
*::after {
    box-sizing: border-box;
}
body {
    background-color: #ffcb00;
}
.skin {
    margin-top: 100px;
}
.nose {
    position: relative;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: black;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    z-index: 100;
}
.eye-left, .eye-right {
    position: relative;
    width: 40px;
    height: 40px;
    border: 2px solid #000;
    border-radius: 50%;
    background-color: #000;
}
.eye-left {
    left: 50%;
    margin-left: -120px;
    top: -60px;
}
.eye-right {
    left: 50%;
    margin-left: 70px;
    top: -100px;
}
.eye-left .l-child,.eye-right .r-child {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
}
.eye-left .l-child {
    left: 14px;
    top: 5px;
}
.eye-right .r-child {
    right: 14px;
    top: 5px;
}
.mouth {
    height: 200px;
    width: 180px;
    position: relative;
    left: 50%;
    margin-left: -90px;
    top: -100px;
    overflow: hidden;
}
.mouth .up {
    position: relative;
}
.mouth .up::before,.mouth .up::after {
    position: absolute;
    content: "";
    height: 30px;
    width: 80px;
    border: 3px solid transparent;
    border-bottom-color: #000;
    z-index: 1;
    background-color: #ffcb00;
}
.mouth .up::before {
    right: 91px;
    transform: rotate(-25deg);
    border-bottom-left-radius: 100%;
}
.mouth .up::after {
    left: 91px;
    border-bottom-right-radius: 100%;
    transform: rotate(25deg);
}
.mouth .down {
    position: relative;
    width: 110px;
    height: 400px;
    left: 50%;
    top: -243px;
    margin-left: -55px;
    border-radius: 80px/300px;
    border: 2px solid #000;
    background-color: rgb(161,30,22);
    overflow: hidden;
    z-index: -99;
}
.mouth .down .d-child {
    position: absolute;
    height: 200px;
    width: 150px;
    bottom: -78px;
    border-radius: 50%;
    background-color: rgb(255,91,93);
    transform: rotate(-45deg);
}
.wrap {
    position: relative;
    width: 128px;
    height:18px;
    top: -311px;
    left: 50%;
    margin-left: -65px;
    border: 10px solid #ffcb00;
    z-index: 10;
}
.face1, .face2 {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 2px solid #000;
    background-color: rgb(255,24,0);
}
.face1 {
    position: relative;
    top: -277px;
    left: 50%;
    margin-left: -172px;
}
.face2 {
    position: relative;
    top: -338px;
    left: 50%;
    margin-left: 113px;
}
`
export default string;