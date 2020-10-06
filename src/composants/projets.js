import React from 'react';
import{Tabs,Tab,Card,CardText,CardTitle,CardActions,Button,CardMenu,IconButton} from 'react-mdl';
import Carousel from 'react-bootstrap/Carousel';


class Projets extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            activeTab :0
        }
    }
    afficherProjet(){
        if(this.state.activeTab === 0){
            return(
                <div style={{display:'flex',justifyContent:'space-between',padding:'2em'}}>
                <div class="row col-md-12">
 
                <div class="col-md-6">
             
                <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/monportof.png')}
                    alt="First slide"
                  />
                  
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/monportof1.png')}
                    alt="Third slide"
                  />
              
                  
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/monportof3.png')}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./images/monportof2.png')}
                  alt="Third slide"
                />
              </Carousel.Item>
              </Carousel>
               
                
                </div>



                <div class="col-md-6">
                <CardText>
                  <h2>Protofolio ReactJS </h2>
                  <p><strong>Description </strong>monProtofolio est une application Web/ReactJS, cette application ,  va nous permettre d'aborder et suivre à la fois mon parcours académique, professionnel et mes projets personnel.</p>

             </CardText>
             <CardActions border>
                 <Button colored href="https://github.com/farisazzeddine/protofolio_React">GitHub</Button>
                 <Button colored>GitLab</Button>
                 <Button colored>CodePen</Button>
             </CardActions>
             <CardMenu>
                 <IconButton name="share" />
             </CardMenu>
                    
                </div>
                    
                </div>
               
             </div>

        
            )
        }
        
        else if(this.state.activeTab === 1){
            return(
                <div style={{display:'flex',justifyContent:'space-between',padding:'2em'}}>
                <div class="row col-md-12">
                <div class="col-md-6">
             
                <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/cloneAvito1.png')}
                    alt="First slide"
                  />
                  
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/cloneAvito2.png')}
                    alt="Third slide"
                  />
              
                  
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/cloneAvito3.png')}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
               
                
                </div>
                <div class="col-md-6">
                <CardText>
                  <h2>Application Web LARAVEL/BOOTSTRAP Clone AvitoMaroc  </h2>  
                  <p><strong>Description </strong> L' application ProxiBanque permettant à ses conseillers de gérer leurs clients et services à forte valeur ajoutée, comme le service de virement compte à compte.
                  L’application permet à trois profils de se connecter : <br/>
                  •	Un profil ‘Conseiller’ <br/>
                  •	Un profil ‘Gérant’ (Directeur d’agence)<br/> 
                  •	Un profil ‘Paramétrage’ (Back Office).<br/> 
                   </p>
             </CardText>
             <CardActions border>
                 <Button colored href="https://github.com/farisazzeddine/Application-Annonces-laravel6-bootstrap">GitHub</Button>
                 <Button colored>GitLab</Button>
                 <Button colored>CodePen</Button>
             </CardActions>
             <CardMenu>
                 <IconButton name="share" />
             </CardMenu>
                    
                </div>
                    
                </div>
               
             </div>

            )
        }
       
        else if(this.state.activeTab === 2){
            return(
            <div style={{display:'flex',justifyContent:'space-between',padding:'2em'}}>
                <div class="row col-md-12">
 
                <div class="col-md-6">
                <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/proxyBanque (1).png')}
                    alt="First slide"
                  />
                  
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/proxyBanque (2).png')}
                    alt="Third slide"
                  />
              
                  
                </Carousel.Item>
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./images/proxyBanque (3).png')}
                  alt="First slide"
                />
                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./images/proxyBanque (4).png')}
                  alt="Third slide"
                />                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./images/proxyBanque (5).png')}
                  alt="Third slide"
                />                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./images/proxyBanque (6).png')}
                  alt="Third slide"
                />                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./images/proxyBanque (7).png')}
                  alt="Third slide"
                />                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./images/proxyBanque (8).png')}
                  alt="Third slide"
                />                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./images/proxyBanque (9).png')}
                  alt="Third slide"
                />                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./images/proxyBanque (10).png')}
                  alt="Third slide"
                />                
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('./images/proxyBanque (11).png')}
                alt="Third slide"
              />                
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('./images/proxyBanque (12).png')}
              alt="Third slide"
            />                
          </Carousel.Item>
                
              </Carousel>

               
                
                </div>
                <div class="col-md-6">
                <CardText>
                  <h2>PROXIBANQUE (Angular/Laravel/WS)</h2>  
                  <p><strong>Description </strong> L' application ProxiBanque permettant à ses conseillers de gérer leurs clients et services à forte valeur ajoutée, comme le service de virement compte à compte.
                  L’application permet à trois profils de se connecter : <br/>
                  •	Un profil ‘Conseiller’ <br/>
                  •	Un profil ‘Gérant’ (Directeur d’agence)<br/> 
                  •	Un profil ‘Paramétrage’ (Back Office).<br/> 
                   </p>
             </CardText>
             <CardActions border>
                 <Button colored href="https://github.com/farisazzeddine/Proxy-front-angular-ws">GitHub</Button>
                 <Button colored>GitLab</Button>
                 <Button colored>CodePen</Button>
             </CardActions>
             <CardMenu>
                 <IconButton name="share" />
             </CardMenu>
                    
                </div>
                    
                </div>
               
             </div>


               
            )
        }
        else if(this.state.activeTab === 3){
            return(
             <div style={{display:'flex',justifyContent:'space-between',padding:'2em'}}>
               <div class="row col-md-12">


               <div class="col-md-6">
             
               <Carousel>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={require('./images/blog _php_nativ.png')}
                   alt="First slide"
                 />
                 
               </Carousel.Item>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={require('./images/blog _php_nativ2.png')}
                   alt="Third slide"
                 />
             
                 
               </Carousel.Item>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={require('./images/blog _php_nativ3.png')}
                   alt="Third slide"
                 />
               </Carousel.Item>
               <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={require('./images/blog _php_nativ4.png')}
                 alt="Third slide"
               />
             </Carousel.Item>
             </Carousel>
              
               
               </div>

               <div class="col-md-6">
               <CardText>
                 <h2>Blog PHP Native </h2>  
               <p><strong>Description </strong>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
               Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble 
               des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
                mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. </p>
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/farisazzeddine/projet_jardain_vert-php-native">GitHub</Button>
                <Button colored>GitLab</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu>
                <IconButton name="share" />
            </CardMenu>
                   
               </div>
                   
               </div>
              
            </div>
            )
        }
    }
render(){
         return(
          <div>  
            <Tabs activeTab={this.activeTab} onChange={(tabId) =>this.setState({activeTab :tabId})}>
                <Tab>React</Tab>
                <Tab>Laravel</Tab>
                <Tab>Angular</Tab>
                <Tab>Php Native</Tab>
            </Tabs>
            <section>
                {this.afficherProjet()}
            </section>
          </div> 
         )
     }
}
export default Projets;