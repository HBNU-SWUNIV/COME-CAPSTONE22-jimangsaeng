# 한밭대학교 컴퓨터공학과 지망생팀

**팀 구성**

- 20171619 유재건
- 20171632 함규식
- 20171595 임동휘 

## <u>Teamate</u> Project Background

- ### 필요성

  - 아날로그 기반 환경에서 디지털 기반의 환경으로 변화하는 과정에서 디지털 신원인증 플랫폼이 등장하고 있다. 하지만 현존하는 디지털 신원인증 플랫폼은 디바이스에 개인 생체정보(지문)를 저장하고 사용한다. 이는 디바이스의 필수성이 높아지며 디바이스의 유실시 데이터의 유출과 유실이 우려된다는 단점이 존재한다.
  - 이러한 문제점을 해결하고자 우리는 개인 디바이스의 필요성을 낮추기 위하여 개인 지문과 잉여 디바이스를 활용하여 신원인증을 할 수 있는 플랫폼을 구상하였다.

- ### 기존 해결책의 문제점

  - 문제점을 해결하기 위한 플랫폼의 구상은 Covid-19의 백신 qr인증에서 아이디어를 얻었다. qr인증은 특정 디바이스가 아닌 잉여(모든)디바이스에서 사용이 가능하여 별도의 설치 비용이 발생하지 않는 장점을 가진다.
  - 신원인증을 위하여 블록체인을 활용하는데 제한적 정보 접근이 가능한 폐쇄형 블록체인을 활용한다. 허용된 사용자만 블록체인에 새로운 데이터를 담을수 있게 하고 나머지의 인원은 지문을 제외한 개인정보의 열람 권한을 부여하지 않아 더욱 안전한 신원인증을 할 수 있다.

## System Design

  - ### System Requirements

    - 폐쇄형 블록체인
      - 사용자의 생체정보와 개인정보를 저장하는 블록체인으로 폐쇄형 블록체인인 Hyperledger fabric을 사용한다.
      - 폐쇄형 블록체인의 특징을 살려 허가된 사용자만이 새로운 데이터를 등록 할 수 있다. 이때 사용자는 개인 고유 ID를 부여받는데 이는 데이터 접근 속도를 단축하는데 있다.
    - 애플리케이션
      - 사용자의 편의를 위하여 UI를 개발한다. 애플리케이션은 React-Native로 구현한다. 애플리케이션은 후면카메라를 이용하여 사용자가 입력한 데이터와 촬영한 손가락의 사진을 블록체인과 연결된 서버로 보낸다. 또한 일치 여부에 따라 해당하는 값을 반환받아 사용자에게 출력한다.
    - 인공지능
      - 지문비교를 위하여 기존 알고리즘 방식에서 인공지능 방식을 처리 속도 단축을 위하여 사용한다.
      - 지문의 비교는 Siamese Neural Network 구조로 두개의 인풋값을 받아 유사도를 판별한다. 해당 구조의 장점은 비교적 적은양의 데이터로도 학습이 가능하다. 또한 같은 weigth를 공유하는 두개의 층을 사용해 유사도 판별에 적합하다.

## Case Study

  - Minsung Son, Heeyoul Kim. “A Real Estate Lease Transaction System Using Blockchain and Open Banking API” *Journal of KIIT.,* Vol. 18, No. 5, pp 109-119, May 31, 2020.
  - S.B. Pan, J.H. Moon, Y.W. Chung, H.I. Kim. “Technology Trends of the Fingerprint Recognition” *Electronics and Telecommunications Trends(ETRI),* Vol. 16, No. 5, 2020.
  - J.S Bong. “A Personal Health Information Sharing Platform based on Hyperledger Fabric Blockchain” *Doctoral dissertation. Soongsil-Univ. 2019.*
  - Hanjun Kim, Eunmi Choi. “A Survey on Hyperledger Fabric Technologies” *Autumn Annual Conference,* 2019.  
  - GitHub Baseline Model(CNN) : https://github.com/kairess/fingerprint_recognition.


## Conclusion

  - ### 해당 플랫폼을 구현하며

  - ### OOO

## Project Outcome

- ### 2022년 한국통신학회 추계논문 발표회 
