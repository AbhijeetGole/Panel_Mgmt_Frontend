import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Slotop from './Slotop.jsx';
//import './Assets/bootstrap.bundle.min.js';
import './Assets/bootstrap.min.css';
import './Assets/dashboard.css';
class Dash2 extends React.Component 
{
    render() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content />
          <title>ZenPanel</title>
          <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/dashboard/" />
          <link href="bootstrap.min.css" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n    " }} />
          {/* Custom styles for this template */}
          <link href="dashboard.css" rel="stylesheet" />
          {/*header component */ }
          <Header/>
          <div className="container-fluid">
            <div className="row">

              <Sidebar/>
              <Slotop/>
               
              <script src="bootstrap.bundle.min.js"></script> 
              <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script><script src="dashboard.js"></script>             
            </div></div></div>
      );
    }
}
export default Dash2;