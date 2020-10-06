import React from 'react';
import{Grid} from 'react-mdl';

class Accueil extends React.Component{
     render(){
         return(
             <div>
                 <Grid className="grid-style">

                         <div className="container-fluid mt-5 p-0 w-100">
                             <div className="card bg-black text-light  col-md-8 offset-2">
                                 <div className="row">
                                    <div className="col-md-6 align-self-center">
                                        <img className="img-fluid w-75" src={require('./images/1V7A9554BQ.png')} alt="photo de profil"/>
                                    </div>
                                     <div className="col-md-6 align-self-center">
                                         <img className="w-50 align-items-cente m-0 p-0" src={require('./images/brand.png')}
                                              alt="logo"/>
                                        <h1>Full-stack Web Developer</h1>
                                         <h3 className=" mt-2"> Php/Laravel </h3>|
                                         <h3 className=" "> JavaScript/ReactJS/Angular </h3>|
                                         <h3 className=""> MySQL/FireBase </h3>
                                         <div className="resaux-sociaux align-self-center">
                                             {/*twiter link*/}
                                             <a className="mr-3" href="https://www.linkedin.com/in/azzeddine-faris-475a2414b/"><i className="fab fa-linkedin" target="_blank"></i></a>
                                             {/*github link*/}
                                             <a className="mx-3" href="https://github.com/farisazzeddine"><i className="fab fa-github-square" target="_blank"></i></a>
                                             {/*linkedin link */}
                                             <a className="mx-3" href="https://twitter.com/azzedinefaris"><i className="fab fa-twitter-square" target="_blank"></i></a>
                                         </div>
                                    </div>

                                 </div>


                             </div>

                         </div>


                 
                    
                 </Grid>
             </div>
         )
     }
}
export default Accueil;