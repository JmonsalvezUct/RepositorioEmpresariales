const SurveyCard = ({ title, surveyTitle, onClick, darkMode }) => {
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
      }}>{title}</h2>
      <p style={{ 
        color: '#3a7bd5',
        fontStyle: 'italic',
        marginBottom: '15px',
        fontSize: '18px'
      }}>"{surveyTitle}"</p>
      <button 
        onClick={onClick}
        style={{
          backgroundColor: '#3a7bd5',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '15px',
          fontWeight: '500',
          transition: 'all 0.2s',
          ':hover': {
            backgroundColor: '#2c5fb3',
            transform: 'translateY(-1px)'
          }
        }}
      >
        Convocar Encuesta
      </button>
    </div>
  );
};

export default SurveyCard;