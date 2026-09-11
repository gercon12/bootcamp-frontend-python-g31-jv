const Profile = ({nombre, role}) => {
    return (
        <section style={{border: '1px solid green', marginBottom:'8px'}}>
            <h2>Profile</h2>
            <p>Hola {nombre}</p>
            <p>Tu role es {role}</p>
        </section>
    )
}



export default Profile