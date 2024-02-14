'use client';
import {useState, useEffect} from 'react'
import Form from './Form/Form'
import Modal from './Modal/Modal'
import './SignUp.css'
import theme from '@/theme';
// import { animateWordChange } from './animations/animateWords'
import { gsapLandingAnimation } from '../../animations/gsapAnimation'
import { ThemeProvider, Typography, CssBaseline } from '@mui/material';
import { Animate, AnimateGroup, useAnimate }  from 'react-simple-animate';
import Box from '@mui/material/Box';


const termsOfService = [
    {
        termKey: "term-1",
        termText:  "1) We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal and non-commercial purposes. You may not use our site for any illegal or unauthorized purpose."
    },
    {
        termKey: "term-1",
        termText: "2) We reserve the right to terminate or suspend your access to our site at any time, without notice and for any reason. We may also modify or discontinue our services at any time without liability to you."
    },

];

/**
 * Display a header text that spans the entire screen
 *
 * @param {*} props
 * @returns
 */
function TitleCard(props) {

    // hook for simple transition animation
    const { play, style } = useAnimate({
        start: { opacity: 0 },
        end: { opacity: 1 }
      });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Animate
                play={true}
                duration={3}
                start={{ opacity: 0, filter: 'blur(10px)' }}
                end={{ opacity: 1, filter: 'blur(0)' }}
            >
                <Typography className='shine' variant='h1'>{props.titleText}</Typography>
            </Animate>
        </ThemeProvider>

    );
}

// TODO: MODAL animation damn bug fix (partly done - still need exit animation on close)
// TODO: word animation bug fix (fixed)
// TODO: responsive done
// TODO: accessibility check dooone
// TODO: landing animation with gsap done
// TODO: design tweaks done
// TODO: convert px to rems with calc done
// TODO: fix bg positioning

/**
 *

 *
 * @returns
 */
export default function SignUp() {

    const [isOpen, setIsOpen] = useState(false)
    const [openToS, setOpenToS] = useState(false)
    const [name,setName] = useState("")

    useEffect(()=> {
        var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if(!mediaQuery.matches) {
            gsapLandingAnimation();
        }
        // animateWordChange();
    }, [])

    return (
        <div className='sign-up-page'>
            <main className='sign-up-container'>
                <div className="sign-up-left sign-up-column">
                    <TitleCard titleText="Dungeon As Bro"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="sign-up-right sign-up-column">
                    <h2>
                        <span>Get the latest updates on all Dungeon As Bro news!</span>
                        &nbsp;
                    </h2>
                    <Form setName={setName} setIsOpen={setIsOpen} setOpenToS={setOpenToS} />
                    <p className='signup-form-terms' id="terms">By clicking the button you agree our&nbsp;
                    <button aria-labelledby="terms" onClick={()=> setOpenToS(true)}>terms and services</button>
                    </p>
                    <Box
                        sx={{ mx: 'auto', my: 2, color: 'white' }}
                        component={'img'}
                        src="https://placeholder-cover-image.s3.ap-southeast-2.amazonaws.com/Insignia-black.png"
                        height={.2}
                        width={.2}
                    />
                </div>
            </main>
            <Modal isOpen={isOpen} name={name} setIsOpen={setIsOpen}>
                <h3>Thank you {name}!</h3>
                <p>Your free trial has been sent to your email. Please check your inbox for instructions on how to get started.</p>
            </Modal>
            <Modal isOpen={openToS} setIsOpen={setOpenToS}>
                <h3>Terms of Services</h3>
                    <p>
                        These terms and conditions (&ldquo;Terms&rdquo;) govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
                    </p>
                    <ul>{termsOfService.map(term=><li key={term.termKey}><p>{term.termText}</p></li>)}</ul>
                    <p>
                        If you have any questions or concerns about these Terms, please contact us at <span style={{textDecoration:'underline'}}>support@mastertodesigncode.com. </span>
                    </p>
            </Modal>
        </div>
    );
}
