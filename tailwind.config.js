module.exports = {
    plugins: [require('daisyui'),require('@tailwindcss/typography')],
    darkMode: 'class',
      theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                    }
                }
            })
        }
      }
};
