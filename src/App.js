//3
import React, { Component } from 'react';
import styled ,{css}from 'styled-components';
const mainColor = 'indianred';
const Title = styled.h1`
  color: ${props => props.color ||  'goldenrod'};
  font-size: 2.8em;
  margin: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const border = css`
  ${props => {
    if (props.showBorder) {
      return `
        border: 1px solid ${mainColor};
        border-radius: 8px;
      `;
    }
  }}
`;

const Thumbnail = styled.img`
  flex-grow: 1;
  width: 300px;
  height: 250px;
  padding: 5px;
  margin: 15px;
  ${border}
`;
// const Thumbnail = styled.img`
//   flex-grow: 1;
//   width: 300px;
//   height: 250px;
//   padding: 5px;
//   margin: 15px;
//   border: 1px solid ${mainColor};
//   border-radius: 8px;
// `;
// const Thumbnail = styled.img`
//   flex-grow: 1;
//   width: 300px;
//   height: 250px;
//   padding: 5px;
//   margin: 15px;
//   ${props => {
//     if (props.showBorder) {
//       return `
//         border: 1px solid ${mainColor};
//         border-radius: 8px;
//       `;
//     }
//   }}
// `;

class App extends Component {
  render() {
    const thumbnails = Array.from({ length: 5 }, (_, index) => {
      const showBorder = index % 2 === 0;
      return <Thumbnail key={index + 1} src={require(`../assets/thumbnail-${index + 1}.jpeg`)} showBorder={showBorder} />;
    });

    return (
      <div className={this.props.className}>
        <Title color={mainColor}>Mystagram</Title>
        <Gallery>
          {thumbnails}
        </Gallery>
      </div>
    );
  }
}
// class App extends Component {
//   render() {
//     const thumbnails = Array.from({ length: 5 }, (_, index) => {
//       return <Thumbnail key={index + 1} src={require(`../assets/thumbnail-${index + 1}.jpeg`)} />;
//     });

//     return (
//       <div className={this.props.className}>
//         <Title color={mainColor}>Mystagram</Title>
//         <Gallery>
//           {thumbnails}
//         </Gallery>
//       </div>
//     );
//   }
// }
// class App extends Component {
//   render() {
//     return (
//       <div className={this.props.className}>
//         <Title color={mainColor}>Mystagram</Title>
//       </div>
//     );
//   }
// }

export default styled(App)`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;
//2
// import React, { Component } from 'react';
// import styled from 'styled-components';

// const mainColor = 'indianred'

// const Title = styled.h1`
//   color: ${props => props.color ||  'goldenrod'}
// `;

// class App extends Component {
//   render() {
//     return (
//       <Title color={mainColor}>Mystagram</Title>
//     );
//   }
// }

// export default App;
//1
// import React, { Component } from 'react';
// import styled from 'styled-components';

// const Title = styled.h1`
//   color: goldenrod;
// `;

// class App extends Component {
//   render() {
//     return (
//       <Title>Mystagram</Title>
//     );
//   }
// }

// export default App;

