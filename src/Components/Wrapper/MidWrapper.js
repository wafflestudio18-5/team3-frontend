const MidWrapper = ({ children }) => {
  return (
    <section className="middle-flex-box">
      <article className="light-border-wrapper  pad-10">{children}</article>
    </section>
  );
};

export default MidWrapper;
