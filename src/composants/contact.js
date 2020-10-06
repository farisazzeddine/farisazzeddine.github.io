import React from 'react';
import{Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class Contact extends React.Component{
     render(){
         return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <section>
                    <div >
                    <img className="img-contact" src={require('./images/brand.png')} alt="photo de profil"/>
                    </div>
                    <p>‘‘A propos, <strong>AZZEDDINE FARIS </strong>, âgé de 28 ans,
                    j'occupe actuellement le poste de "Développeur web Back-end" chez <em>la société AIM - ALL'in Marketing  </em>
                        lauréat de la faculté des sciences Ben M'sik ayant un Master des études fondamentaux en Traitement d'information en 2017 .’’</p>
                    </section>
                </Cell>
                <Cell col={6}>
                    <h2>Contact</h2>
                    <hr />
                    <List>
                         <ListItem>
                            <ListItemContent className="list-contact" icon="phone">+212-(0)-660-715-090</ListItemContent>
                       </ListItem>
                        <ListItem>
                        <ListItemContent className="list-contact" icon="home">Ain Sbaa Casablanca Maroc</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent className="list-contact" icon="email"><a href="a.faris1992@outlook.com">a.faris1992@outlook.com</a></ListItemContent>
                        </ListItem>
                    </List>
                </Cell>
            </Grid>
        </div>
         )
     }
}
export default Contact;