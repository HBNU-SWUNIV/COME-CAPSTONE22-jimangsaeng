# Source Code
## 주의사항
 - 다른 Open Source SW를 사용하는 경우 저작권을 명시해야 함
 - 산학연계 캡스톤의 경우 기업의 기밀이 담긴 데이터는 제외할 것.
 <span style="color:red">
 - **기업 기밀 데이터가 Github에 공개되었을 시의 책임은 공개한 학생에게 있음**
 </span>

## 프로젝트 주요 기능
![image](https://user-images.githubusercontent.com/76714219/190954950-3d1f7681-fbf6-4059-9f20-7c3044eb9412.png)

1. 회원가입
하이퍼 레저 페브릭(블록체인) 네트워크에 만들어서 배포된 체인코드(스마트 컨트랙)는 NoSQL DB에 원하는 DB를 빼오기 위한 고정맞춤 쿼리문을 배포하는 것과 같다. 앱에서 회원가입 할 사용자의 ID, 이름, 나이, 거주지, 지문 이미지 등을 받아오면 블록체인(DB) 내에 중복되지 않으면 회원가입 한다.

2. 로그인(신원인증)
서버는 앱에서 유저 ID와 지문 이미지를 받으면 블록체인 내 해당 ID의 지문이미지를 요청한다. 서버에서 앱에서 받은 로그인하려는 이미지와 블록체인에서 받은 회원가입 시의 이미지를 인공지능 모델로 비교한 후 일정 정확도 이상이 일치하면 해당 ID의 인증정보(현재는 성인인증여부)를 반환하고 일치하지 않으면 불일치 여부를 반환한다.


## 오픈소스 출처
[Hyperledger Fabirc Sample](https://github.com/hyperledger/fabric-samples)
[GitHub Baseline Model(CNN)](https://github.com/kairess/fingerprint_recognition) 

## 🚀 기능 목록
### app.js (apiserver)
- [x] port open to http request, response
- [x] route open
- [x] administrate request
### app.py (AI apiserver)
- [x] port open
- [x] get compare image
- [x] Image Pretreatment
    - [x] increase brightness
    - [x] image resize
    - [x] image color change to gray
    - [x] image const change
    - [x] image fillter with adaptive thresh gaussian
- [x] compare block chain fingerprint and appliciont fingerprint
### fabinfo.js (chaincode)
- [x] query to member sign up 
- [x] query to get fingerprint image
- [x] query to get memeber is adult or not
- [x] query to get memebr's school
### addInfo.js (Sign up)
- [x] receive sing up member information
- [x] if already member, get error response
- [x] check block chain permission user
- [x] execute query to member information save block chain
- [x] response sing up result
### queryFinger.js
- [x] check block chain permission user
- [x] execute query to get fingerprint image at block chain
- [x] save block chain image to server
### queryAuth.js
- [x] check block chain permission user
- [x] execute query to get member is audlt or not
- [x] response member age certification
### querySchool.js
- [x] check block chain permission user
- [x] execute query to get member's school
- [x] response member school certification
### upload.js (Log in)
- [x] check block chain permission user
- [x] receive user's fingerprint and member_id
- [x] get fingerprint image from block chain 
- [x] create request AI server to compare image
- [x] if user correct, after additional certification continue
- [x] if user uncorrect, create exception response
- [x] delete fingerprint images
- [x] response app certification result
