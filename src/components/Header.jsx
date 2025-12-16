function Header({ toggleName, toggleBirth, nameActive, birthActive }) {
  return (
    <>
      <h2
        onClick={toggleName}
        style={{
          backgroundColor: nameActive ? 'blue' : '',
          color: nameActive ? 'white' : '',
        }}
      >
        Іванюта Дмитро Володимирович
      </h2>

      <p
        onClick={toggleBirth}
        style={{
          backgroundColor: birthActive ? 'green' : '',
          color: birthActive ? 'white' : '',
        }}
      >
        Дата народження: 18.11.2005 <br />
        Місце народження: м. Київ, Україна
      </p>
    </>
  );
}

export default Header;
