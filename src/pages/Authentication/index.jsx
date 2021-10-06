import React, { useState } from 'react'

import axios from 'axios';



import TextInputField  from '../../components/FormUtils/TextInputField';
import Button from '../../components/FormUtils/Button';
import PageWrapper from '../../components/PageWrapper';

import styled from "styled-components";
import { Center, Row } from '../../components/LayoutUtils';
import { useHistory } from 'react-router';
import { useStore } from '../../store';
import { setUser } from '../../store/actions/app';
import { useForm } from '../../Utils/useForm';


const StyledFormWrapper = styled.div`
    flex: 1;
    max-width: 400px;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
`;


const StyledFormHeader = styled.div`
    margin: 0.5rem 1rem 1.5rem;
`;

const StyledFormTitle = styled.div`
    text-align: center;
`

const StyledFormBody = styled.form`

`;

const StyledFormFooter = styled.div`
    box-sizing: border-box;
`;

const StyledLine = styled.div`
    width: 100%;
    height: 0px;
    border-top: 1px solid rgba(0,0,0, 0.1);
    margin: 1rem 0rem;
`


const email_regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


function LoginForm(){
    const [values, errors, register, validate] = useForm({
        email : {
            required: true,
            onValidate: value => email_regex.test(value),
            error: "enter valid email"
        },
        password: {
            required: true,
            error: "password can't be blank"
        }
    });

    const [loading, setLoading] = useState(false);


    const history = useHistory();
    const [store, dispatch] = useStore();


    const submit = async () => {


        const isValid = validate();
        if(!isValid) return;

        try {
            const response = await axios.post("/login", values).then(res => res.data);
            const { user, auth } = response;
            dispatch(setUser(user));
            localStorage.setItem('auth', JSON.stringify(auth));
            console.log("???", JSON.stringify(user));

            history.push("/");
        
        } catch (error) {
            console.log(error);
            alert("wrong credentials");
        } finally {
            setLoading(false);
        }
    }

    return (
        <StyledFormWrapper>
            <StyledFormHeader>
                <StyledFormTitle>Sign in</StyledFormTitle>
            </StyledFormHeader>
            <StyledFormBody>
                <div className="login-form-field">
                    <TextInputField
                        placeholder="Email"
                        onChange={register('email')}
                        value={values.email}
                        borderColor={'#3db16b'}
                        error={errors.email}
                    />
                </div>
                <div className="login-form-field">
                    <TextInputField
                        placeholder="Password"
                        type={'password'}
                        onChange={register('password')}
                        value={values.password}
                        borderColor={'#3db16b'}
                        error={errors.password}
                    />
                </div>
            </StyledFormBody>
            <StyledFormFooter>
                <Button
                    label={"Sign in"}
                    backgroundColor={'#3db16b'}
                    color={'white'}
                    onClick={submit}
                    loading={loading}
                />
            </StyledFormFooter>
            <StyledLine></StyledLine>
            <Center>
                <div>
                    <div className="muted">Don't have an account?</div>
                    <div style={{ marginTop: '1rem' }}>
                        <Button
                            label={"Sign Up"}
                            color={"black"}
                            width={'4rem'}
                            borderColor={'rgba(0,0,0, 0.4)'}
                            onClick={()=>history.push("/signup")}
                        />
                    </div>
                </div>
            </Center>
        </StyledFormWrapper>
    )
}

function SignUpForm(){
    const history = useHistory();
    const [store, dispatch] = useStore();
    const [loading, setLoading] = useState(false);
    const [values, errors, register, validate] = useForm({
        email: {
            required: true,
            onValidate: (value) => email_regex.test(value),
            error:"enter valid email"
        },
        firstName: {
            required: true,
            error: "first name can't be blank"
        },
        lastName: {
            required: true,
            error: "last name can't be blank"
        },
        password: {
            required: true,
            error: "password can't be blank"
        },
        confirmPassword: {
            required: true,
            error: "password din't match",
            onValidate: value => values['password'] === value
        }
    });

    const submit = async () => {
        const isValid = validate();
        if(!isValid) return;
        setLoading(true);
        try{

            const response = await axios.post("/signup", values).then(res => res.data).catch(error => { throw error.data});

            const { user, auth } = response;
            dispatch(setUser(user));
            localStorage.setItem('auth', JSON.stringify(auth));
            history.push("/");
        }catch(error){
            alert("something went wrong, try again with another email!");
        }finally{
            setLoading(false);
        }
        
    }

    return (
        <StyledFormWrapper>
            <StyledFormHeader>
                <StyledFormTitle>Create account</StyledFormTitle>
            </StyledFormHeader>
            <StyledFormBody>
                <div className="login-form-field">
                    <TextInputField
                        placeholder="Email"
                        borderColor={'#3db16b'}
                        error={errors.email}
                        value={values.email}
                        onChange={register('email')}
                    />
                </div>
                <div className="login-form-field">
                    <TextInputField
                        placeholder="First Name"
                        type={'text'}
                        borderColor={'#3db16b'}
                        error={errors.firstName}
                        value={values.firstName}
                        onChange={register('firstName')}
                    />
                </div>
                <div className="login-form-field">
                    <TextInputField
                        placeholder="Last Name"
                        type={'text'}
                        borderColor={'#3db16b'}
                        error={errors.lastName}
                        value={values.lastName}
                        onChange={register('lastName')}
                    />
                </div>
                <div className="login-form-field">
                    <TextInputField
                        placeholder="Password"
                        type={'password'}
                        borderColor={'#3db16b'}
                        error={errors.password}
                        value={values.password}
                        onChange={register('password')}
                    />
                </div>
                <div className="login-form-field">
                    <TextInputField
                        placeholder="Confirm password"
                        type={'password'}
                        borderColor={'#3db16b'}
                        error={errors.confirmPassword}
                        value={values.confirmPassword}
                        onChange={register('confirmPassword')}
                    />
                </div>
            </StyledFormBody>
            <StyledFormFooter>
                <Button
                    label={"Sign Up"}
                    backgroundColor={'#3db16b'}
                    color={'white'}
                    onClick={submit}
                    loading={loading}
                />
            </StyledFormFooter>
            <StyledLine></StyledLine>
            <Center>
                <div>
                    <div className="muted">Already have an account?</div>
                    <div style={{ marginTop: '1rem' }}>
                        <Button
                            label={"Log in"}
                            color={"black"}
                            width={'4rem'}
                            borderColor={'rgba(0,0,0, 0.4)'}
                            onClick={()=>history.push("/login")}
                        />
                    </div>
                </div>
            </Center>
        </StyledFormWrapper>
    )
}

export function LoginPage(){
    return (
        <PageWrapper centered>
            <LoginForm/>
        </PageWrapper>
    );
}

export function SignUpPage(){
    return (
        <PageWrapper centered>
            <SignUpForm />
        </PageWrapper>
    )
}
