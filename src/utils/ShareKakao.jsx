const ShareKakao = (route, title) => {
  // Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }

    kakao.Link.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입
      content: {
        title,
        description: '🌟내 롤링페이퍼에 놀러와!🙏',
        imageUrl: 'https://raw.githubusercontent.com/thgus5335/RollingProject/main/src/assets/icons/logo.svg',
        link: {
          mobileWebUrl: route,
          webUrl: route,
        },
      },
      buttons: [
        {
          title,
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
};

export default ShareKakao;
