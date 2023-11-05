/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '12px',

      // default breakpoints but with 40px removed
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        'xxl': '1282px',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'banner-pattern': "url('/assets/imgs/shapes/banner_shapes_1.png')",
        'banner-cover': "url('/assets/imgs/explore/cover_img.png')",
        'lineShape': "url('/assets/imgs/shapes/lineShape.png')",
        'loginBg': "url('/assets/imgs/Login/loginBg.png')",
        'gradient_1': 'linear-gradient(150.31deg, #2BFD27 -19.37%, #0A160C 15.65%, #9504D9 111.44%)',
        'gradient_2': 'linear-gradient(169.21deg, rgba(0, 0, 0, 0) 31.31%, #000000 102.73%)',
        'gradient_3': 'linear-gradient(1.15deg, #000000 -1.79%, rgba(0, 0, 0, 0.32) 32.56%, rgba(0, 0, 0, 0) 80.65%)',
        'gradient_border_1': 'linear-gradient(157.42deg, rgba(255, 255, 255, 0.5) -130.93%, rgba(255, 160, 17, 0.5) 151.34%)',
        'gradient_border_2': 'linear-gradient(157.42deg, rgba(255, 255, 255, 0.5) -130.93%, rgba(255, 160, 17, 0.5) 151.34%)'
      },
      padding: {
        '160px': '160px',
        '158px': '158px',
        '155px': '155px',
        '150px': '150px',
        '140px': '140px',
        '120px': '120px',
        '117px': '117px',
        '100px': '100px',
        '80px': '80px',
        '60px': '60px',
        '50px': '50px',
        '40px': '40px',
        '35px': '35px',
        '30px': '30px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "primary": "#FF9900",
        "secondary": "#1F1E30",
        'white': '#ffffff',
        'light_gray': '#E6E6E6',
        'gray_text': '#777E90',
        'gray_text5': '#DADADA',
        'gray_text6': '#807E7E',
        'green': '#00AC4F',
        'link_text': '#0F6AFF',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'gray-border': '#313131',
        'gray-border2': '#D1D1D1',
        // rgba 
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        'xxl': '1282px',
      },
      fontSize: {
        '40px': ['2.5rem', '1.2'],
      },
      // Adds a opacity
      opacity: {
        '0': '0',
        '18': '0.18',
        '20': '0.2',
        '40': '0.4',
        '49': '0.49',
        '60': '0.6',
        '80': '0.8',
        '100': '1',
      },
      boxShadow: {
        'theme_shadow': '11px 12px 32px rgba(255, 153, 0, 0.2)',
        'theme_shadow2': '0px 4px 4px rgba(0, 0, 0, 0.16)',
        'theme_shadow3': '0px 4px 30px 0px #9E9E9E33',
        'theme_shadow4': '11px 12px 32px 0px #FF990033',
        'theme_shadow5': '4px 4px 32px rgba(0, 0, 0, 0.11)',
        'theme_shadow6': '0px 4px 25px rgba(0, 0, 0, 0.4)',
        'theme_shadow7': '15px 14px 29px rgba(255, 153, 0, 0.06)',
        'theme_shadow8': '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        border: 'border 6s ease infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '400% 100%' },
          '50%': { backgroundPosition: '500% 100%' }
        },
      },

    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF9900",
          "secondary": "#1F1E30",
          "accent": "red",
          "neutral": "#231727",
          "base-100": "#FFFFFF",
          "info": "#21C6FB",
          "success": "#0F6AFF",
          "warning": "#FDBB27",
          "error": "#FF0000",
          "yellow": "#22381f",
        },
      }
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
