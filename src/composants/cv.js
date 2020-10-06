import React from 'react';
import{Grid, Cell,ProgressBar} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class cv extends React.Component{
     render(){
        return(
          <div className="cv-body">
              <Grid>
                  <Cell className="resume-left-col" col={4}>
                       <div style={{textAlign:'center'}}>
                            <img className="img-style" src={require('./images/1V7A9554BQ.png')} alt="photo de profil"/>
                       </div>
                       <h2 style={{paddingTop:'1em'}}>Azzeddine FARIS</h2>
                        <h4>Développeur Web Full Stack</h4>
                       <hr style={{borderTop:'3px solid #686DA1', width:'50%'}}/>
                        <p>
                        Je suis actuellement à la recherche d’une nouvelle opportunité au poste ‘‘développeur web full-stack ‘‘, Ayant bénéficié d’une connaissance  professionnelle réussie dans le domaine.
                       </p>
                       <hr style={{borderTop:'3px solid #686DA1', width:'50%'}}/>
                       <h5>Adresse</h5>
                       <p>Casablanca, Maroc</p>
                       <h5>Téléphone Mobile</h5>
                       <p>+212-(0)-660-715-090</p>
                       <h5>E-mail</h5>
                       <a href="a.faris1992@outlook.com" style={{fontSize:'.9em'}}>a.faris1992@outlook.com</a>
                       <h5>Site Web</h5>
                       <p>Mywebsite.com</p>
                       <hr style={{borderTop:'3px solid #686DA1', width:'50%'}}/>
                  </Cell>
                  <Cell className="resume-right-col" col={8}>
                      {/*start experience */}
                      <h1>Expériences Professionnelles</h1>
                      <Experience
                      startYear="2018/09/01"
                      endYear="En Cours"
                      jobName="ALL'in Marketing"
                      jobDescriptionn="Développeur web Back-end:"
                      jobDescription="Analyse des besoins,"
                      jjobDescription="Préconisation de solutions techniques,"
                      jjjobDescription="Développement et évolution des fonctionnalités techniques du site web."

                      
                      />
                      <Experience
                      startYear="2018/01/01"
                      endYear="2018/06/01"
                      jobName="PETRONACO S.A.R.L"
                      jobDescriptionn="Technico-Commercial Sédentaire:"
                      jobDescription=" Vente d'Équipements de distribution pour les produits Pétroliers."
                      
                      />
                      <Experience
                      startYear="2017/08/01"
                      endYear="2018/12/30"
                      jobName="ENIGMA TRANS S.A.R.L"
                      jobDescriptionn="STAGE: Intégrateur Web:"
                      jobDescription="Création de maquette HTML/CSS/JAVASCRIPT, "
                      jjobDescription=" Gestion et maintenance des sites web."
                      />
                      <ProgressBar indeterminate style={{margin: 'auto', width:'90%'}}/>
                      {/*start education */}
                      <h1>Formations Initials</h1>
                      <Education 
                      startYear={2015}
                      endYear={2017}
                      schoolName="Université Hassan II Faculté des Sciences Ben M’sik Casablanca"
                      schoolDescription="Master d’études Fondamentales, Filière: Traitement De l’information."
                      />
                      <Education 
                      startYear={2012}
                      endYear={2015}
                      schoolName="Université Hassan II Faculté des Sciences Ben M’sik Casablanca"
                      schoolDescription="Licence d’études Fondamentales, Filière: Sciences de la matière physique, Parcours « Électronique »."
                      />
                      <ProgressBar indeterminate style={{margin: 'auto', width:'90%'}}/>
                      <h1> Formations Continues</h1>
                      <Education 
                      startYear="2019/07/01"
                      endYear="2019/11/01"
                      schoolName="3W Academy Maroc"
                      schoolDescription="Foramtion Bootcamp en développement Web "
                      />
                      <Education 
                      startYear="2019/04/16"
                      endYear="2019/06/01"
                      schoolName="L’institut français de Casablanca"
                      schoolDescription="Foramtion en Français des affaires"
                      />
                      <Education 
                      startYear="2019/03/01"
                      endYear="2019/04/15"
                      schoolName="efe: L'éducation Pour l'emploi "
                      schoolDescription="Foramtion en Soft-Skills"
                      />
                      {/*start skills */}
                      <ProgressBar indeterminate style={{margin: 'auto', width:'90%'}}/>
                      <h1>Compétences</h1>
                      <Skills
                      skill="Php"
                      progress={80}
                      />
                      <Skills
                      skill="Laravel"
                      progress={60}
                      />
                      <Skills
                      skill="TypeScript"
                      progress={45}
                      />
                      <Skills
                      skill="javaScript"
                      progress={45}
                      />
                      <Skills
                      skill="React"
                      progress={25}
                      />
                      <Skills
                      skill="Angular"
                      progress={55}
                      />
                      <Skills
                          skill="VueJs"
                          progress={70}
                      />
                      <Skills
                      skill="Bootstrap"
                      progress={70}
                      />

                       
                  </Cell>
              </Grid>           
         </div>
        )
    }
}
export default cv;
