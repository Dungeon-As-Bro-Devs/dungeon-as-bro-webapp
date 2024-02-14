import { createTheme } from "@mui/material";
import localFont from "@next/font/local";

/**
 * Based on the following code
 * https://stackoverflow.com/questions/58139833/loading-fonts-to-customize-material-ui-theme-in-next-js-not-working
 */
const customFont = localFont({
    src: '../../public/fonts/BOOTERFZ.woff2',
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: customFont.style.fontFamily,
    },
});

export default theme;
