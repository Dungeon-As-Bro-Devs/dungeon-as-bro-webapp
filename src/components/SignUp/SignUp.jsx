'use client';
import {useState, useEffect} from 'react'
import Form from './Form/Form'
import Modal from './Modal/Modal'
import './SignUp.css'
import theme from '@/theme';
// import { animateWordChange } from './animations/animateWords'
import { gsapLandingAnimation } from './animations/gsapAnimation'
import {termsOfService} from './ToS.js'
import { ThemeProvider, Typography, CssBaseline } from '@mui/material';
import { Animate, AnimateGroup, useAnimate }  from 'react-simple-animate';

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
                </div>
            </main>
            <Modal isOpen={isOpen} name={name} setIsOpen={setIsOpen}>
                <h3>Thank you {name}!</h3>
                <p>Your free trial has been sent to your email. Please check your inbox for instructions on how to get started.</p>
            </Modal>
            <Modal isOpen={openToS} setIsOpen={setOpenToS}>
                <h3>Terms of Services</h3>
                    <p>
                        These terms and conditions ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
                    </p>
                    <ul>{termsOfService.map(term=><li><p>{term}</p></li>)}</ul>
                    <p>
                        If you have any questions or concerns about these Terms, please contact us at <span style={{textDecoration:'underline'}}>support@mastertodesigncode.com. </span>
                    </p>
            </Modal>
        </div>
    );
}
