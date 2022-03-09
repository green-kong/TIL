# Validation (유효성 체크) && idCheck(axios)

- 코드 너무 지저분해져서 module화 해서 import 한 뒤 사용함

### id

- id 중복체크 기능 비동기 통신으로 구현
- id 중복체크 안하면 가입 불가
- id 중복체크 패스 한뒤에 아이디 변경되는거 감지해서 중복체크 다시하라고 alert 띄움
- 정규식 이용해서 한글 막음
- 중복체크 시 value 비어잇으면 alert
- html maxlength 속성으로 10자리 이상 입력 안되게 막음

### pw

- 값이 비어있으면 alert
- 비번이랑 비번체크 값 다르면 alert
- html maxlength 속성으로 10자리 이상 입력 안되게 막음

### 이름 && nickname

- html maxlength 속성으로 5자리 이상 입력 안되게 막음

### 생년월일

- 계산하기 힘들어서 년, 월, 일 input 3개로 쪼갬
- 각각 maxlength 4, 2, 2 속성부여
- 입력된 연도와 현재 날짜 계산해서 100년 이전의 과거면 alert
- 입력된 연도와 현재 날짜 계산해서 미래의 날짜면 alert
- 월 범위 1-12 로 지정 벗어나면 alert
- 일 범위 1-31 로 지정 벗어나면 alert

### 전화번호

- maxlength 11
- 정규식 이용해서 숫자 이외의 값 alert
- null 허용
- 입력이 됐을때 자릿수 11자리 이하면 alert

### 핸드폰

- maxlength 11
- 정규식 이용해서 숫자 이외의 값 alert
- 자릿수 11자리 이하면 alert
