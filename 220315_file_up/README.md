# 업로드된 파일 백엔드에 저장하고, 프론트에 전달하기

1. multer로 업로드된 파일 저장하는 폴더 static 으로 지정

2. db에 파일 저장할때 파일 이름 || url+/파일이름 으로 저장

3. 프론트에서 요청 들어오면

   ```javascript
   `http://localhost:port/${파일이름}`;
   ```

   으로 전달 해주기

4. 랜더할 html 내의 img 태그 scr 속성에 위의 주소 넣어주기

자세한 내용은 [블로그](https://kong-dev.tistory.com/152)에
