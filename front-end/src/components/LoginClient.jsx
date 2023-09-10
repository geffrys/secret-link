import DefaultLayout from "../Layout/DefaultLayout";

export default function LoginClient() {
    return (

        <form className="form">
            <h1>Sign In</h1>
            <input type="text" placeholder="ID CLIENT*" />

            <input type="password" placeholder="PIN*" />

            <button>Validate</button>
            &nbsp;
            <button>Register</button>

            <form className="form">
                <h1>Category</h1>
                <button>See available plans</button>
                &nbsp;
                <button>Register agents</button>

            </form>
        </form>





    )
}