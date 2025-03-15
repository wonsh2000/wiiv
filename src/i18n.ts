import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ko: {
    translation: {
      common: {
        home: '홈',
        share: '공유',
        tag: '태그',
        place: '장소',
        space: '공간',
        connectWallet: '지갑 연결'
      },
      tag: {
        title: 'NFT Tagging Service',
        intro: {
          title: '오프체인 데이터를 NFT로 변환',
          description: '실제 세상의 데이터를 블록체인에 기록하고 NFT로 만들어 신뢰할 수 있는 디지털 자산으로 변환하세요'
        },
        features: {
          dataVerification: {
            title: '데이터 인증',
            description: '오프체인 데이터의 진위여부를 검증하고 블록체인에 기록',
            list: [
              '문서 인증',
              '이미지 인증',
              '실물 자산 인증'
            ]
          }
        }
      }
    }
  },
  en: {
    translation: {
      // ... 영어 번역
    }
  }
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;