![logo_small](https://github.com/janyongs/Global-Nomad/assets/151440365/e79a77c5-7f4d-4e13-ad15-c737b2b42721)
-------
프로젝트 개발 기간 : 2024.05.20 - 2024.06.21

## 📚목차

- 배포주소
- 프로젝트 소개
- 사용한 기술 스택
- 주요 기능
- 서비스 구성
- 팀 소개

## 🌎 배포 주소
https://globalnomad-13-fe.vercel.app/
<br>
<br>

## 📝 프로젝트 소개
사람들이 여행을 갈 때, 가서 뭘 할지, 비용은 얼마인지 등 여러 고민을 하게 된다. 바쁜 현대인의 이런 고민을 줄여주기 위해 플랫폼 안에 잘 짜인 체험 상품을 보고 간단하게 예약할 수 있는 서비스입니다.

코드잇 포론트엔드 4기에세 진행된 마지막 프로젝트로, 주어진 피그마 시안과 api에 맞춰 웹개발을 진행하였습니다. 
요구사항 뿐만아니라 사용자 입장에서 좀더 사용성이 좋게 수정하여 개발하였습니다.
<br>
<br>
## ⚙ 사용한 기술 스택
### ✔ Tools
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> 

### ✔ FlatForms & Language
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/nextJs-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/Axios-56A9EE?style=for-the-badge&logo=axios&logoColor=white">
 <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<br>

## ⭐ 주요 기능

- 로그인 기능
- 회원 가입 기능
- Gnb : 로그인시 프로필과 예약에 대한 알림을 볼 수 있고, 프로필 클릭시 메뉴창이 열립니다.
  
  ![image](https://github.com/janyongs/Global-Nomad/assets/151440365/2605c8d5-a172-45a2-84f8-63c805a73250)
<br>
- 모달 : 예약 취소, 후기작성, 알림창 등 커스텀 모달로 구현. (에러메세지, success의 경우 `toastify` 로 구현되있습니다.)
  
![image](https://github.com/janyongs/Global-Nomad/assets/151440365/c644f548-dc98-4792-a825-8c2129f06d69)
<br>
- 사이드 메뉴바 : 내정보/예약내역/내체험관리/예약현황으로 이동이되고 해당 페이지에 표시가 됩니다.
  
 ![image](https://github.com/janyongs/Global-Nomad/assets/151440365/f75fc00b-5eab-4d17-9cda-d0582e2eb7d8)

### ✅ 사용자
- 체험 예약 : 체험상세페이지에서 원하는 스케줄에 예약을 할 수 있습니다.
- 후기 작성 : 예약관리 페이지에서 체험이 끝난 체험의 후기를 남길 수 있습니다.
  
### ✅ 체험등록자
- 체험 등록/수정 : 새로운 체험을 등록하거나, 이미 등록한 체험을 수정할수있습니다.
- 예약 현황 관리 : 등록한 체험에 예약 정보를 보고 승인/거절 할수있습니다.

## ⭐ 전반적인 페이지 구성
### 1️⃣ 메인페이지 (주소: /)
- 사이트에 접속하면 처음 보이는 메인 페이지로 전체 체험리스트들이 보입니다. 비회원일 경우도 체험들을 구경하고, 상세페이지 까지는 들어갈 수 있습니다.
- 검색기능과 필터 기능으로 사용자가 원하는 정보를 쉽게 찾을 수 있습니다.

![image](https://github.com/janyongs/Global-Nomad/assets/151440365/e61d6a17-b16b-44fb-a767-16ffa3d2c82a)

### 2️⃣ 로그인, 회원가입 (주소: login, signup)
- 로그인, 회원가입 폼은 react-hook-form을 사용해 비제어 컴포넌트로 구현하였습니다.
- 로그인에 성공하면 로그인에 대한 토큰이 쿠키에 저장됩니다.
![image](https://github.com/janyongs/Global-Nomad/assets/151440365/bb362dc3-6e38-40ba-ab59-2fde1b0e14a2)

### 3️⃣ 내 정보 (주소: /myprofile)
- 프로필 사진을 최초 등록하거나, 수정 할 수 있습니다.
- 회원가입시 등록한 프로필 정보를 불러와 수정 할 수 있습니다.
![image](https://github.com/janyongs/Global-Nomad/assets/151440365/2b4b69e6-05f5-4847-ae8c-aff80805bb65)

### 4️⃣ 체험상세 페이지
- 체험에 대한 상세 정보 페이지 입니다.
- 지도를 클릭하면 카카오맵사이트로 이동하여 체험위치를 보거나 길찾기를 사용 할 수 있습니다.
- 캘린더에는 체험 스케줄이 있는 날짜가 표시되어 있으며 시간과 인원수를 체크 후 예약이 가능합니다.
- 체험에 대한 별점 후기를 볼 수 있습니다.
![image](https://github.com/janyongs/Global-Nomad/assets/151440365/70f745b1-85a6-45ba-a8c5-c9a48045d3a1)

### 5️⃣ 내 체험 관리 페이지
- 내가 등록한 체험 리스트들이 리액트 쿼리를 이용한 무한 스크롤로 구현되어있습니다.
- 케밥 메뉴 클릭시 해당 체험을 수정하거나 삭제할 수 있습니다.
- 해당 체험 카드를 클릭시 상세 페이지로 이동합니다.
![image](https://github.com/janyongs/Global-Nomad/assets/151440365/824be16c-6edc-4e89-8949-70ed60671851)

### 6️⃣ 체험 등록/수정 
react-hook-form을 사용해 비제어 컴포넌트로 구현하였습니다.
- 등록 : 체험 정보를 입력후 체험등록을 할 수 있습니다.
- 수정 : 내 체험의 수정페이지로 등록한 체험 정보를 불러와 수정 할 수 있습니다.

![image](https://github.com/janyongs/Global-Nomad/assets/151440365/6ab75baa-af1c-4a85-89ab-c0b79b3aebd5)

### 7️⃣ 예약내역
- 내가 신청한 예약 리스트들이 무한 스크롤로 구현되어있습니다.
- 예약을 취소하거나 후기를 남길 수 있습니다.
- 후기 작성은 커스텀한 모달로 구현되어있습니다.

![image](https://github.com/janyongs/Global-Nomad/assets/151440365/c5274932-a839-4860-939e-d52dbae2dabb)

### 8️⃣ 예약현황
- 내가 등록한 체험에 신청 한 사용자들이 예약 정보가 나타납니다.
- 달력을 클릭시 모달이 뜨고 예약건에 대해 승인/거절을 할 수 있습니다.

  ![image](https://github.com/janyongs/Global-Nomad/assets/151440365/ae07b624-beb1-47c9-8b52-a94beb471856)

### 추가 스켈레톤 구현
무한 스크롤로 구현 된 예약내역, 내체험관리 페이지에 더 나은 사용자경험을 위해 스켈레톤 구현
![image](https://github.com/janyongs/Global-Nomad/assets/151440365/1e0ccb0a-3594-4bee-93cb-5bfbeb082bff)

## 😎 팀 소개 
| FE | FE | FE |
| :-: | :-: | :-: |
| [강경미](https://github.com/gaem-gaem) | [류지영](https://github.com/janyongs) | [백승아](https://github.com/SeungAAA) |
| <img src="https://avatars.githubusercontent.com/u/144299767?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/151440365?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/155128712?v=4" width="200"> |

| FE | FE |
| :-: | :-: |
| [윤여진](https://github.com/rosedaily)  | [유승재](https://github.com/seungcar) |
| <img src="https://avatars.githubusercontent.com/u/101369040?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/128369466?v=4" width="200"> |


