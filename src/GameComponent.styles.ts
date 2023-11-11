export const gameComponentStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    gameInfo: {
      marginBottom: '20px',
      textAlign: 'center',
    },
    button: {
      padding: '10px',
      margin: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      outline: 'none',
      transition: 'background-color 0.3s',
    },
    startButton: {
      backgroundColor: '#008CBA',
    },
    optionButton: {
      backgroundColor: '#4CAF50',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    healthBar: {
      marginInline: 'auto',
      width: '300px',
      height: '20px',
      backgroundColor: '#ddd',
      borderRadius: '5px',
      overflow: 'hidden',
    },
    healthBarInner: {
      height: '100%',
      backgroundColor: '#4CAF50',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'width 0.3s',
    },
    stats: {
      display: 'grid', 
      gridTemplateRows: '1fr 1fr', 
      gridTemplateColumns: '1fr 1fr',
      width: '300px',
      marginInline: 'auto',
    }
  };
  
  export default gameComponentStyles;