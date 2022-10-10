// import React from 'react';
// import { Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
// const Home=()=>  
// {  

//       return (
//         <div>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <title>ZenPanel</title>
//         <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/dashboard/" />
//         <link href="bootstrap.min.css" rel="stylesheet" />
//         <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n    " }} />
//         {/* Custom styles for this template */}
//         <link href="dashboard.css" rel="stylesheet" />
//         <div style={{'width':'70%','margin-left': '20%'}}>
//       <Carousel variant="dark">
//         <Carousel.Item interval={2500}>
//           <img className="d-block w-100"src={require('./Assets/images/ps-bg.jpg')}alt="Image One"/>
//           <Carousel.Caption>
//           <h1>Panel</h1>
//           <p >Panels can be created,updated,used.</p>  
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={2500}>

//           <img className="d-block w-100"src={require('./Assets/images/ps-bg.jpg')}alt="Image Two" />
//           <Carousel.Caption>
//           <h1>Slots</h1>
//           <p >Slots can be created,updated,used.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={2500}>
//         <Carousel.Caption>
//           <h1>Users</h1>
//           <p >Users can see and edit</p>
//         </Carousel.Caption>
//           <img className="d-block w-100"src={require('./Assets/images/ps-bg.jpg')}alt="Image Three" />
//         </Carousel.Item>
//       </Carousel>                    

//         </div>   
    



//         </div>
//       );
    
// }
// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
const Home=()=>  
{  

      return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ZenPanel</title>
        <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/dashboard/" />
        <link href="bootstrap.min.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n    " }} />
        {/* Custom styles for this template */}
        <link href="dashboard.css" rel="stylesheet" />
        <div style={{'width':'55%','margin-left': '25%','margin-top': '3%'}}>
      <Carousel variant="dark">
        <Carousel.Item interval={2500}>
          <img className="d-block w-100"src={require('./Assets/images/ps-bg.jpg')}alt="Image One"/>
          <Carousel.Caption style={{top: 375 }}>
            <br></br>
          <h2>Create and update the panels</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>

          <img className="d-block w-100"src={require('./Assets/images/ps-bg.jpg')}alt="Image Two" />
          <Carousel.Caption style={{top: 375}}>
            <br></br>
          <h2>Create and update slots</h2>
         
          
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
        <Carousel.Caption style={{top: 375}}>
          <br></br>
          <h2 >Edit user details</h2>
        
        </Carousel.Caption >
          <img className="d-block w-100"src={require('./Assets/images/ps-bg.jpg')}alt="Image Three" />
        </Carousel.Item>
      </Carousel>                    

        </div>   
    



        </div>
      );
    
}
export default Home;