export const sceneStyles = {
    container: {
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '20px',
      },
      text: {
        marginBottom: '10px',
        fontSize: '18px',
      },
      optionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      optionButton: {
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
      enemyInfoContainer: {
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      enemyHealthBar: {
        width: '100%',
        height: '20px',
        backgroundColor: '#ddd',
        borderRadius: '5px',
        overflow: 'hidden',
        marginBottom: '5px',
      },
      enemyHealthBarInner: {
        height: '100%',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'width 0.3s',
      },
    };
  
  export default sceneStyles;
  