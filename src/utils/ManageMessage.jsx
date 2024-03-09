const ManageMessage = messageInfo => {
  const { profileImageURL, sender, relationship, content, font } = messageInfo;

  const badge = { 친구: 'friend', 지인: 'acquaintance', 동료: 'colleague', 가족: 'family' };
  const date = messageInfo.createdAt.substr(0, 10).replaceAll('-', '.');
  const fontStyle = {
    'Noto Sans': 'notoSans',
    Pretendard: 'pretendard',
    나눔명조: 'nanumMyeongjo',
    '나눔손글씨 손편지체': 'nanumPenScript',
  };

  const newMessage = {
    profileImageURL,
    sender,
    relationship,
    content,
    fontStyle: fontStyle[font],
    badge: badge[relationship],
    date,
  };

  return newMessage;
};

export default ManageMessage;
