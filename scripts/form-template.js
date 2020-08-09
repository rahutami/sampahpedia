

let createForm = () => {
    let style = document.createElement('style')
    style.innerHTML = `
        .login-form {
            display : grid;
            justify-items : center;
            margin : 10px 0;
        }

        .login-form .title {
            font-family : 'Raleway', sans-serif;
            font-size : 3rem;
            margin-bottom : 2rem;
            border-bottom : 1px solid white;
            padding : 10px;
        }

        .form-wrap {
            display : grid;
            grid-gap : 20px;
            justify-items : center;
        }

        .form-input {
            display : grid;
            justify-items : center;
        }

        .form-input label {
            margin: 0rem 0rem 2rem 0rem ;
            font-size : 1.2rem;
            text-align : center;
            display : block;
        }

        .form-input input {
            border : 2px solid  white;
            margin-bottom : 1rem;
            padding : 10px 2rem;
            border-radius : 2rem;
            display : block;
            // border-image-slice : 1;
            // border-image-source : linear-gradient(to left, #00C853, #B2FF59);
        }

        .form-input input:focus {
            outline : none;
        }

        .form-input button{
            padding : 10px 20px;
            font-size : 1rem;
            border : none;
            color : white;
            font-weight : 500;
            // background : linear-gradient(to left, #00C853, #B2FF59);
            background : #357843;
            border-radius : 10px
        }

        .form-input button[type="submit"]:focus{
            outline : none;
            // background : linear-gradient(to left, #00C853, #B2FF59, #5b54d2);
        }

        .signupLink:hover{
            color : #357843;
        }
    `

    let ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);

    let form = document.createElement('form')
    form.className = 'login-form'
    form.method = 'POST'
    form.innerHTML = `
        <div class="title">Login</div>
        <div class="form-wrap">
            <div class="form-input">
                <label for="uname"> Username </label>
                <input id="login-uname" type="text" name="uname" placeholder="Enter Username" autocomplete="off">
            </div>
            <div class="form-input">
                <label for="pwd"> Password</label>
                <input id="login-pwd" type="password" name="pwd" placeholder="Enter Password">
            </div>
            <h4 class="mini"> Don't have an account? Sign-up <a href="#" class="signupLink"> here</a></h4>
            <div class="form-input">
                <button class="login-submit" onclick="loginSubmit()">Login</button>
            </div>
            
        </div>
    `
    return form

}






export {createForm}