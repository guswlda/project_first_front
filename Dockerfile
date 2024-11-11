# 1단계: Node.js 빌드 스테이지
FROM node:20 AS build

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 종속성 설치
RUN npm install

# 소스 코드 복사 및 React 애플리케이션 빌드
COPY . .
RUN npm run build  # 정적 파일 생성

# 2단계: Nginx 설정 및 빌드된 파일 제공
FROM nginx:1.27.2

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 빌드된 정적 파일을 Nginx의 기본 경로로 복사
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Nginx 포트 설정
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]
