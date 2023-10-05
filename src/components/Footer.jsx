function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="text-white bg-[#0a192f] text-center">
      <footer className="font-semibold">© {date} Marpaul</footer>
    </div>
  );
}

export default Footer;
