const shareKakao = (route, title) => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_APP_KEY);
      }
  
      kakao.Link.sendDefault({
        objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입
        content: {
          title,
          description: '🌟내 롤링퍼에 놀러와!🙏',
          imageUrl: 'https://github.com/thgus5335/RollingProject/blob/dev/src/assets/icons/logo.svg',
          link: {
            mobileWebUrl: route,
            webUrl: route
          }
        },
        buttons: [
          {
            title,
            link: {
              mobileWebUrl: route,
              webUrl: route
            }
          }
        ]
      });
    }
  };
  
  export default shareKakao;