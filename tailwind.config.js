/** @type {import('tailwindcss').Config} */

const plDesignSystem = {
  separator: ':',
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        gray: {
          1: '#fbfcfd',
          2: '#B3B3B3',
          3: '#F8F9FA',
          4: '#E5E5E5',
          5: '#E6E6E6',
          6: '#F0F0F0',
          7: '#6C757D'
        },
        red: {
          1: '#DC3545',
          2: '#dc4b38'
        },
        blue: {
          1: '#3b599b'
        },
        green: {
          1: '#68cc9c',
          2: '#85d6af',
          3: '#E0F5EB'
        },

        'white-2': '#F8F9FA',
        'black-2': '#343A40'
      },
      fontFamily: {
        adobe: ['adobe-caslon-pro'],
        brandon: ['brandon-grotesque'],
        sanchez: ['Sanchez']
      },
      fontSize: {
        '2r': '2rem',
        '1.4rem': '1.4rem',
        0.55: '0.55rem',
        1.8: '1.8rem',
        inherit: 'inherit'
      },
      minHeight: (theme) => ({
        ...theme('spacing')
      }),
      zIndex: {
        1: '1',
        2: '2',
        1040: '1040',
        1041: '1041',
        998: '998',
        999: '999',
        1071: '1071'
      },
      spacing: {
        '0925': '0.925rem',
        '07': '0.7rem',
        '04': '0.4rem',
        '18r': '18rem',
        '22r': '22rem',
        '30r': '30rem',
        '32r': '32rem',
        '13r': '13rem',
        '15r': '15rem',
        '10.5r': '10.5rem',
        '25r': '25rem'
      },
      margin: {
        0.188: '0.188rem'
      },
      transitionDelay: {
        800: '800ms'
      },
      transitionProperty: {
        top: 'top'
      },
      boxShadow: {
        '2sm': '0 2px 4px 0px rgba(0, 0, 0, 0.25)',
        '1sm-0.1': '0 1px 4px 0px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1536px',
        xxxl: '1920px'
      },
      lineHeight: {
        0: '0rem'
      },
      inset: {
        0.19: '0.19rem'
      }
    },
    container: {
      center: true
    }
  }
};

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [],
  presets: [
    //* notes default tailwind present still applied
    plDesignSystem
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          8: '#D9D9D9'
        }
      },
      opacity: {
        15: '0.15',
        45: '0.45',
        65: '0.65',
        85: '0.85',
        95: '0.95'
      }
    }
  }
};
