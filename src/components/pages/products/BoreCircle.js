export default function BoreCircle({ bore }) {
    const getBoreStyles = (bore) => {
      switch (bore) {
        case 'small':
          return {
            backgroundColor: 'lightyellow',
            color: 'white',
            width: '20px',
            height: '20px',
            fontSize: '0.8rem',
          };
        case 'medium':
          return {
            backgroundColor: 'orange',
            color: 'white',
            width: '25px',
            height: '25px',
            fontSize: '0.9rem',
          };
        case 'large':
          return {
            backgroundColor: 'darkorange',
            color: 'white',
            width: '30px',
            height: '30px',
            fontSize: '1rem',
          };
        default:
          return {};
      }
    };
  
    return (
      <div
        style={{
          ...getBoreStyles(bore),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}
      >
        {bore[0].toUpperCase()}
      </div>
    );
  }
  