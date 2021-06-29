function Logo() {
    return <div className="logo"></div>
}
function HeaderAuthElement() {
    return (
        <div className="auth">
            <button className="login">LogIn</button>
            <button className="signup">SignUp</button>
        </div>
    )
}

export default function Header() {
    return (
        <div className="header">
            <Logo></Logo>
            <HeaderAuthElement></HeaderAuthElement>
        </div>
    )
}
