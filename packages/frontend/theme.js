import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body:
      'Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading:
      'Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  shadows: {
    ...theme.shadows,
    cardLight: '0px 0px 36px rgba(155, 201, 255, 0.16)',
  },
  colors: {
    ...theme.colors,
    linkBlue: '#00C2FF',
    primaryButton: '#DAF888',
  },
  icons: {
    ...theme.icons,
    logo: {
      path: (
        <>
          <path
            d="M0 0h44.0318v11.0079h-11.008v11.008H22.0159v11.0079h-11.008v11.008H0V0z"
            fill="#BAEE2B"
          />
          <path
            d="M33.0238 0v11.0079H22.0159v11.008h-11.008v11.0079H0V0h33.0238z"
            fill="#39BABA"
          />
          <path d="M0 0v22.0159h11.0079v-11.008h11.008V0H0z" fill="#843472" />
          <path
            d="M44 38.6409v-8.2873c0-.3094.1797-.5746.5391-.7956.3594-.2431.7749-.3646 1.2466-.3646.4717 0 .876.1215 1.2129.3646.3594.221.5391.4862.5391.7956v8.2873c0 .884.3369 1.6795 1.0108 2.3867.6963.7072 1.5049 1.0608 2.4259 1.0608.9433 0 1.752-.3425 2.4258-1.0276.6739-.7072 1.0108-1.5138 1.0108-2.4199v-8.3205c0-.3094.1685-.5745.5054-.7955.3594-.221.7861-.3315 1.2803-.3315.4941 0 .8985.1105 1.2129.3315.3369.221.5054.4861.5054.7955v8.3205c0 1.7458-.6851 3.2707-2.0552 4.5746-1.3702 1.3038-2.9987 1.9558-4.8854 1.9558-1.8868 0-3.5265-.652-4.9192-1.9558C44.6851 41.9116 44 40.3867 44 38.6409zM60.9018 38.5746v-2.9834c0-1.9669.584-3.558 1.752-4.7735 1.168-1.2155 2.9088-1.8232 5.2224-1.8232 1.46 0 2.6841.2541 3.6724.7624.9883.4862 1.4825 1.0387 1.4825 1.6575 0 .3757-.146.7513-.438 1.127-.2695.3757-.5952.5636-.9771.5636-.1123 0-.5166-.1658-1.2129-.4973-.6739-.3536-1.4263-.5304-2.2574-.5304-2.4708 0-3.7062 1.1713-3.7062 3.5139v2.9834c0 2.3425 1.2466 3.5138 3.7399 3.5138.8535 0 1.6172-.1768 2.2911-.5304.6963-.3757 1.1118-.5635 1.2466-.5635.4492 0 .8086.1768 1.0782.5304.292.3536.438.7292.438 1.127 0 .5525-.438 1.0829-1.314 1.5912-.8761.5083-1.9654.8066-3.2682.895l-.438 1.5912c1.0781.0221 1.8868.2652 2.4258.7293.5616.4862.8423 1.0718.8423 1.7569 0 .7072-.2807 1.348-.8423 1.9226-.539.5746-1.3701.8619-2.4932.8619a6.5888 6.5888 0 0 1-1.8531-.2652c-.6065-.1547-.9097-.3757-.9097-.663 0-.1768.0562-.3978.1685-.663.1347-.2652.3032-.3977.5054-.3977.0449 0 .2695.0773.6738.232.4043.1547.8199.232 1.2466.232 1.1231 0 1.6847-.3978 1.6847-1.1933 0-.7293-.6065-1.1492-1.8194-1.2597l-1.6173-.1657.7413-2.7183c-2.0216-.1547-3.5378-.8177-4.5485-1.9889-1.0108-1.1934-1.5162-2.7183-1.5162-4.5746zM75.6525 38.6409v-8.2873c0-.3094.1797-.5746.5391-.7956.3594-.2431.7749-.3646 1.2466-.3646.4717 0 .876.1215 1.213.3646.3594.221.5391.4862.5391.7956v8.2873c0 .884.3369 1.6795 1.0107 2.3867.6963.7072 1.505 1.0608 2.4259 1.0608.9434 0 1.752-.3425 2.4259-1.0276.6738-.7072 1.0107-1.5138 1.0107-2.4199v-8.3205c0-.3094.1685-.5745.5054-.7955.3594-.221.7862-.3315 1.2803-.3315.4942 0 .8985.1105 1.213.3315.3369.221.5054.4861.5054.7955v8.3205c0 1.7458-.6851 3.2707-2.0553 4.5746-1.3702 1.3038-2.9986 1.9558-4.8854 1.9558-1.8868 0-3.5265-.652-4.9191-1.9558-1.3702-1.3039-2.0553-2.8288-2.0553-4.5746zM93.1271 43.7459V30.3204c0-.3314.1572-.5966.4717-.7955.3369-.221.7525-.3315 1.2466-.3315.4493 0 .8311.1105 1.1456.3315.3144.1989.4717.4641.4717.7955v1.4586c.3818-.7735.9546-1.4254 1.7183-1.9558.7861-.5525 1.6397-.8287 2.561-.8287h1.078c.359 0 .674.1547.943.4641.27.2873.404.6408.404 1.0607 0 .4199-.134.7846-.404 1.094-.269.3094-.584.464-.943.464h-1.078c-1.0785 0-2.0332.4531-2.8642 1.3592-.8087.906-1.213 2.0773-1.213 3.5138v6.7956c0 .2873-.1797.5524-.5391.7955-.3593.2431-.7861.3647-1.2803.3647-.4941 0-.9097-.1216-1.2466-.3647-.3145-.2431-.4717-.5082-.4717-.7955zM105.235 39.7348V23.1271c0-.3094.179-.5746.539-.7956.359-.221.763-.3315 1.213-.3315.449 0 .853.1105 1.213.3315.381.221.572.4862.572.7956v6.0663h4.111c.292 0 .528.1326.707.3978.18.2431.27.5414.27.895s-.09.663-.27.9282c-.179.2431-.415.3646-.707.3646h-4.111v7.9558c0 .7956.169 1.3591.506 1.6906.359.3315.977.4973 1.853.4973h1.179c.472 0 .842.1436 1.112.4309.269.2873.404.6409.404 1.0608 0 .4199-.135.7734-.404 1.0607-.27.2873-.64.431-1.112.431h-1.179c-3.931 0-5.896-1.7238-5.896-5.1713zM116.357 43.7459V30.3204c0-.3314.157-.5966.471-.7955.337-.221.764-.3315 1.281-.3315.426 0 .797.1105 1.111.3315.315.1989.472.4641.472.7955v1.1934c.966-1.6795 2.46-2.5193 4.481-2.5193.989 0 1.865.3094 2.628.9282.786.5966 1.382 1.3922 1.786 2.3867.561-1.0829 1.291-1.9006 2.19-2.453.921-.5746 1.887-.8619 2.897-.8619 1.595 0 2.965.5967 4.111 1.79 1.168 1.1713 1.752 2.7514 1.752 4.7404v8.221c0 .2873-.18.5524-.539.7955-.359.2431-.775.3647-1.247.3647-.449 0-.853-.1216-1.213-.3647-.359-.2431-.539-.5082-.539-.7955v-8.221c0-1.0829-.314-1.9337-.943-2.5525-.629-.6188-1.359-.9282-2.19-.9282s-1.572.3094-2.224.9282c-.629.6188-.943 1.4475-.943 2.4862v8.3204c0 .3757-.18.663-.539.8619-.337.1768-.753.2652-1.247.2652-.449 0-.853-.0884-1.213-.2652-.359-.1989-.539-.4862-.539-.8619v-8.2873c0-.9945-.314-1.8121-.943-2.453-.607-.6409-1.337-.9614-2.19-.9614-.854 0-1.595.3094-2.224.9282-.607.6188-.91 1.4586-.91 2.5194v8.221c0 .2873-.179.5524-.539.7955-.359.2431-.775.3647-1.246.3647-.495 0-.91-.1216-1.247-.3647-.337-.2431-.505-.5082-.505-.7955zM142.096 40.7956c0-1.768.674-2.9945 2.021-3.6796 1.348-.7072 3.302-1.0608 5.863-1.0608h1.482v-.5966c0-.9724-.28-1.8122-.842-2.5194-.539-.7072-1.37-1.0607-2.493-1.0607-.966 0-1.82.1657-2.561.4972-.719.3315-1.112.4972-1.179.4972-.382 0-.696-.1768-.944-.5304-.224-.3756-.336-.7845-.336-1.2265 0-.5746.539-1.0718 1.617-1.4917 1.1-.4199 2.257-.6298 3.47-.6298 2.314 0 4.021.6188 5.121 1.8563 1.123 1.2155 1.685 2.7404 1.685 4.5746v8.3205c0 .3093-.168.5856-.505.8287-.315.221-.719.3315-1.213.3315-.45 0-.831-.1105-1.146-.3315-.314-.2431-.472-.5194-.472-.8287v-1.1603c-1.504 1.7238-3.2 2.5857-5.087 2.5857-1.303 0-2.381-.3757-3.235-1.1271-.831-.7514-1.246-1.8343-1.246-3.2486zm3.571-.431c0 .7072.202 1.2487.607 1.6244.404.3535.932.5303 1.583.5303.854 0 1.662-.3536 2.426-1.0607.786-.7072 1.179-1.4586 1.179-2.2542v-1.2265h-.842c-1.011 0-1.842.0442-2.493.1326-.629.0884-1.202.3204-1.719.6961-.494.3757-.741.8951-.741 1.558z"
            fill="#4A4A4A"
          />
        </>
      ),
      viewBox: '0 0 155 52',
    },
  },
};

export default customTheme;
