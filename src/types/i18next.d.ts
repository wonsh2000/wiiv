import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    resources: {
      translation: {
        common: {
          home: string;
          share: string;
          tag: string;
          place: string;
          space: string;
          connectWallet: string;
        };
        tag: {
          title: string;
          intro: {
            title: string;
            description: string;
          };
          features: {
            dataVerification: {
              title: string;
              description: string;
              list: string[];
            };
          };
        };
      };
    };
  }
}