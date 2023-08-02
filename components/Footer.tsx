const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <section className="bg-primary-orange ">
      <div className="p-8 ">
        <div className="flex flex-center justify-center">
          <p className="ternary_text font-bold text-white text-center">
            Copyright &copy; {currentYear}, Jakub Karbowski. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
