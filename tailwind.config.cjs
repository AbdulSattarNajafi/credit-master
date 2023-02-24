/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            poppins: ['Inter', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '20px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1220px',
        },
        extend: {
            colors: {
                background: '#ECF2F5',
                darkFont: '#1E3144',
                lightFont: '#375B6A',
                menuText: '#5A7886',
                brandTurquoise: '#1DC8BE',
                'turquoise-light': '#68DAD4',
                'green-light': '#D6EEF0',
                'green-50': '#B5E8E8',
                'green-500': '#24B3B0',
                'blue-700': '#008FC1',
                stroke: '#C7D3D9',
                disabled: '#A1B3BD',
                redFont: '#F4333D',
                overlay: 'rgba(0, 0, 0, 0.5)',
            },
            backgroundImage: {
                yellowGradient: 'linear-gradient(96.43deg, #FFDA70 0%, #FFC729 100%)',
                homeHero:
                    'linear-gradient(111.23deg, #55C2E3 -11.52%, #ECF2F5 16.21%, #ECF2F5 31.95%, #68DAD4 48.45%, #55C2E3 57.21%, #B5AEE6 67.76%, #ECF2F5 110.89%)',
                loanHero:
                    'linear-gradient(102.31deg, #B5AEE6 10.69%, #68DAD4 28.45%, #ECF2F5 38.52%, #AAE6E5 49.09%, #B5AEE6 54.7%, #D1D0EE 61.45%, #ECF2F5 89.06%)',
                aboutHero:
                    'linear-gradient(102.31deg, #68DAD4 10.69%, #ECF2F5 28.45%, #ECF2F5 38.52%, #FFDA70 49.09%, #68DAD4 54.7%, #55C2E3 61.45%, #ECF2F5 89.06%)',
                blogHero:
                    'linear-gradient(102.31deg, #ECF2F5 10.69%, #AAE6E5 28.45%, #F6E6B3 38.52%, #ECF2F5 49.09%, #ECF2F5 54.7%, #AAE6E5 61.45%, #FFDA70 89.06%)',
                textBg: 'linear-gradient(94.77deg, #1DC8BE -0.27%, #00A3D5 99.73%)',
                easyBg: 'linear-gradient(94.77deg, #68DAD4 -0.27%, #24B3B0 99.73%)',
                easyApply: "url('./src/assets/images/easy-apply-bg.png')",
                quickApply: "url('./src/assets/images/quick-apply-bg.png')",
                honestApply: "url('./src/assets/images/honest-apply-bg.png')",
                flexibleApply: "url('./src/assets/images/flexible-apply-bg.png')",
                installmentBg: "url('./src/assets/images/installment-bg.png')",
                'installment-card-bg':
                    'linear-gradient(150.99deg, #1DC8BE 33.33%, #00A3D5 67.71%, #9085DA 100%)',
                'bottom-bg': 'linear-gradient(180deg, #ECF2F5 0%, rgba(236, 242, 245, 0) 100%)',
                'home-faq-bg':
                    'linear-gradient(102.31deg, #55C2E3 10.69%, #ECF2F5 28.45%, #ECF2F5 38.52%, #68DAD4 49.09%, #55C2E3 54.7%, #B5AEE6 61.45%, #ECF2F5 89.06%)',
                'loan-faq-bg':
                    'linear-gradient(102.31deg, #B5AEE6 10.69%, #ECF2F5 28.45%, #ECF2F5 38.52%, #68DAD4 49.09%, #B5AEE6 54.7%, #D1D0EE 61.45%, #ECF2F5 89.06%)',
                'getstarted-bg': "url('./src/assets/images/getstarted-bg.png')",
                'personal-loan-bg':
                    ' linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 37.96%)',
                'get-loan-apply': 'linear-gradient(180deg, #68DAD4 31.77%, #55C2E3 100%)',
                'get-loan-get': 'linear-gradient(180deg, #55C2E3 31.77%, #B5AEE6 100%)',
                'get-loan-collect': 'linear-gradient(180deg, #B5AEE6 31.77%, #FFA8AE 100%)',
                'show-more-bg':
                    'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 94.27%)',
                'customised-laon-bg':
                    'linear-gradient(102.31deg, #68DAD4 10.69%, #ECF2F5 28.45%, #ECF2F5 38.52%, #FFDA70 49.09%, #68DAD4 54.7%, #55C2E3 61.45%, #ECF2F5 89.06%)',
                'toltip-bg':
                    'linear-gradient(92.69deg, #1DC8BE 0%, #00A3D5 49.71%, #9085DA 100.46%);',
                'toltip-arrow':
                    'linear-gradient(90.5deg, #1DC8BE -165.95%, #00A3D5 46.16%, #9085DA 262.73%)',
                'input-border': 'linear-gradient(#1DC8BE, #00A3D5, #9085DA)',
                'blog-getstarted':
                    "url('./src/assets/images/getstarted-bg.png'), linear-gradient(95.64deg, #AAE6E5 0%, #ECF2F5 16.67%, #F6E6B3 33.85%, #AAE6E5 50.52%, #ECF2F5 66.67%,#F6E6B3 83.33%, #FFDA70 100%)",
                'blog-card':
                    "url('./src/assets/images/getstarted-bg.png'), linear-gradient(150.99deg, #FFDA70 0%, #F6E6B3 20.31%, #FFFFFF 40.62%, #AAE6E5 60.94%, #68DAD4 100%)",
                'reveiw-bg':
                    'linear-gradient(131.86deg, #A1DAEC 0%, #ECF2F5 25.52%, #AAE6E5 50.52%, #A1DAEC 75.52%, #D1D0EE 100%)',
            },
            boxShadow: {
                'dropdown-shadow': '0px 5px 10px rgba(30, 49, 68, 0.1)',
                'header-btn-shadow': ' 0px 5px 10px rgba(30, 49, 68, 0.12)',
                'install-card-shadow': '0px 5px 30px rgba(30, 49, 68, 0.12)',
                'label-shadow': '0px 2px 10px rgba(30, 49, 68, 0.2)',
            },
        },
    },
    plugins: [],
};
