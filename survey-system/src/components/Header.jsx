const Header = ({ title, darkMode }) => {
    return (
      <h1 style={{
        color: darkMode ? '#ffffff' : '#3a7bd5',
        fontSize: '24px',
        marginBottom: '20px',
        fontWeight: '600'
      }}>
        {title}
      </h1>
    );
  };
  
  export default Header;