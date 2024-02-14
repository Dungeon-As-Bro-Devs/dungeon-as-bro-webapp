import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {motion, AnimatePresence} from 'framer-motion'
import { errorSignProps, errorParagraphProps } from '../animations/animationProps';
import { Grid, IconButton } from '@mui/material';
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    YouTube,
} from '@mui/icons-material';
import './Form.css'


const formFields = [
    {
        labelText : "First Name",
        name : "first-name",
        type: "text",
        register: "firstName"
    },
    {
        labelText : "Last Name",
        name : "last-name",
        type: "text",
        register: "lastName"
    },
    {
        labelText : "Email",
        name : "email",
        type: "text",
        register: "email"
    },
]

/**
 * Functional component that displays a grid of social media icons.
 * @returns
 */
function SocialMediaGrid() {
   return (
     <Grid container spacing={2}>
       <Grid item>
         <IconButton aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100092327695529">
           <Facebook />
         </IconButton>
       </Grid>
       <Grid item>
         <IconButton aria-label="Twitter">
           <Twitter />
         </IconButton>
       </Grid>
       <Grid item>
         <IconButton aria-label="Instagram" href="https://www.instagram.com/dungeonas_bro/">
           <Instagram />
         </IconButton>
       </Grid>
       <Grid item>
         <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/company/dungeon-as-bro/about/">
           <LinkedIn />
         </IconButton>
       </Grid>
       <Grid item>
         <IconButton aria-label="YouTube">
           <YouTube />
         </IconButton>
       </Grid>
     </Grid>
   );
 }

export default function Form({setIsOpen, setName, setOpenToS}) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, form.current, process.env.EMAILJS_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }

    // define schema for parsing and validating form inputs
    const schema = yup.object().shape({
        firstName: yup.string().required("First Name cannot be empty"),
        lastName: yup.string().required("Last Name cannot be empty"),
        email: yup
            .string()
            .email("Looks like this is not an email")
            .required("Email cannot be empty"),
    });

    const {register, handleSubmit, formState: {errors} , reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setName(data.firstName)
        setIsOpen(true)
        reset({
            firstName: "",
            lastName: "",
            email: "",
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='signup-form'>

            {formFields.map((field)=> (
                <div key={field.name}>
                    <div className="signup-field">
                        <input
                            type={field.type}
                            id={field.name}
                            aria-invalid={errors[field.register] ? "true" :  "false"}
                            aria-describedby={field.register}
                            name={field.name}
                            placeholder={field.labelText}
                            autoComplete="off"
                            defaultValue=""
                            {...register(`${field.register}`)}
                        />
                        <label for="first-name" className="signup-field-label-wrapper">
                            <span className="signup-field-label-text">
                                {field.labelText}
                            </span>
                        </label>
                        <AnimatePresence>
                            {errors[field.register] &&
                            <motion.div {...errorSignProps}
                            className="signup-error-sign">!</motion.div>
                            }
                        </AnimatePresence>
                    </div>
                    <AnimatePresence>
                        {errors[field.register] &&
                          <motion.div
                            {...errorParagraphProps}
                            className="signup-error-container"
                          >
                            <p className='signup-error-message'>
                              <span role="alert">{errors[field.register].message}</span>
                            </p>
                          </motion.div>
                        }
                    </AnimatePresence>
                </div>
            ))}
            <input type="submit" value="Sign Up Now!"/>
            <SocialMediaGrid/>
        </form>
    );
}
