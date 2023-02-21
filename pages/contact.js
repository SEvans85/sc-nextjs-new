

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useSate("");

    const handleChangeName = (event) => {
        const name = event.target.value
        setName(name)
    }

    const handleChangeEmail = (event) => {
        const email = event.target.value
        setName(email)
    }

    const handleChangeMessage = (event) => {
        const message = event.target.value
        setMessage(message)
    }



    return (




        <div className="w-full">
            {/* <Header name="Contact" /> */}

            {/* <Content>
                <div>Content</div>
            </Content> */}
            <form className ="flex flex-col space-y-3">
                <input placeholder="Name"
                 className="bg-gray-200 py-3 px-2 w-96 rounded"
                 value=""
                 onChange={handleChangeName}/>
                <input placeholder="Email" 
                className="bg-gray-200 py-3 px-2 w-96 rounded"
                value=""
                onChange={() => {}} />
                <textarea placeholder="Message" 
                className="bg-gray-200 py-3 px-2 w-96 rounded"
                value=""
                onChange={handleChangeEmail} />

                <button className="" />
            </form>

            {/* <Footer title="Home" href="/" /> */}
        </div>
    )
}