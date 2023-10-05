function Contact() {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/66fdaf41-87cf-405e-8171-2297ecd141a2"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-stone-300 text-stone-300">
            Contact me here:
          </p>
          <p className="text-stone-300 text-lg pt-4">
            Submit the form below or shoot me an email -
            marpauljaybunani1314@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className="text-white border-2 hover:bg-[#ccd6f6]
         hover:border-stone-600 hover:font-bold px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let&apos;s Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
