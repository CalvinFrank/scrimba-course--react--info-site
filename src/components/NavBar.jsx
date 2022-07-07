import img from '../OIP.jpg' 

function NavBar() {
    return (
        <nav>
            <img src={img} width="60px" />
            <h2 className='h2'>ReactFacts</h2>
            <h3 className="h3">React Course - Project 1</h3>
        </nav>
    )
}
export default NavBar