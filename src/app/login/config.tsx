

export const loginPageConfig = [
    {
        index:'login',
        title:'Log In',
        inputs:[
            {
                label:'E-mail',
                type:'mail',
                name:'email',
            },
            {
                label:'Password',
                type:'password',
                name:'password',
            },
        ],
        span:"Don't have an account?",
        onClick:"register"
    },
    {
        index:'register',
        title:'Register',
        inputs:[
            {
                label:'Username',
                type:'text',
                name:'username',
            },
            {
                label:'E-mail',
                type:'mail',
                name:'email',
            },
            {
                label:'Password',
                type:'password',
                name:'password',
            },
        ],
        span:"Have an account?",
        onClick:"login"
    },
]
