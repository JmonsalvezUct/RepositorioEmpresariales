const SupportQuestion = ({ question, option, onClick, darkMode }) => {
  return (
    <div style={{ 
      marginBottom: '30px',
      backgroundColor: darkMode ? '#252525' : 'transparent',
      padding: darkMode ? '20px' : '0',
      borderRadius: darkMode ? '8px' : '0'
    }}>
      <h2 style={{
        fontSize: '20px',
        marginBottom: '15px',
        fontWeight: '600',
        color: darkMode ? '#ffffff' : '#333'
      }}>Soporte</h2>
      <p style={{ 
        marginBottom: '10px',
        color: darkMode ? '#e0e0e0' : '#333'
      }}>{question}</p>
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={onClick}
      >
        <div style={{
          width: '18px',
          height: '18px',
          border: '2px solid #3a7bd5',
          borderRadius: '4px',
          marginRight: '10px',
          backgroundColor: darkMode ? '#252525' : 'white'
        }}></div>
        <span style={{ color: darkMode ? '#e0e0e0' : '#333' }}>{option}</span>
      </div>
    </div>
  );
};

export default SupportQuestion;