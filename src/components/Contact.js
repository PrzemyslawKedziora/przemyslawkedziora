const Contact = () => {
    return(
        <>
            <div className="mb-4 bg-gray-900 px-8 py-4 rounded-lg">
                <p className="text-center my-4 text-xl">Feel free to contact me!</p>
                    <form action="" className="flex flex-col items-center justify-center gap-y-4">
                        <input className="min-w-96 rounded-xl bg-transparent border-amber-50 border-2 p-2" type="text" name="message-sender-name" placeholder="Name..."/>
                        <textarea className="min-w-96 rounded-xl bg-transparent border-amber-50 border-2 p-2" name="message-text"
                                  id="message-text" cols="30" rows="10" placeholder="Message..."></textarea>
                        <button className="bg-cyan-950 rounded-full w-32 h-8" type="submit">Send email</button>
                    </form>
            </div>
        </>
    )
}
export default Contact;