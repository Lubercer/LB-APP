import { Link } from "react-router-dom";

const form = () => {


    return (
    
            <><div class="form-container sign-up-container">
            <form action="#">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Crea tu cuenta</button>
            </form>
        </div><div class="form-container sign-in-container">
                <form action="#">
                    <h2 id="tituloShop">Entra a tu cuenta para poder comprar</h2>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Contraseña" />
                    <a href="#">olvidaste tu contraseña?</a>
                    <button>ENTRAR</button>
                </form>
            </div><div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hola, amigx!</h1>
                        <p>Crea tu cuenta aqui</p>
                        <button class="ghost" id="signUp">CREAR</button>
                    </div>
                </div>
            </div></>

        
    );
}

export default form;