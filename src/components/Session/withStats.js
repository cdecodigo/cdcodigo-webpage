import React from 'react';
import ClientJS from 'clientjs';

import { withFirebase } from '../Firebase';

const withStats = Component => {
    class WithStats extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: JSON.parse(localStorage.getItem('authUser'))
            };
        };

        componentDidMount() {
            const client = new ClientJS();
            let session = {};
            console.log('haber', client.getBrowser());  

            let user = this.state.authUser;
            if(user){
                session.user = {email: user.email, userame: user.username}
            }else {
                session.user = 'guess';
            }

            session.browser = client.getBrowser();

            const date = new Date()
            //year getfullyear day getdate
            console.log(date.getFullYear(), date.getMonth(), date.getDate(),);
            // const ref = `stats/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
            this.props.firebase.db.collection('stats')
            .doc(date.getFullYear().toString()+'-'+date.getMonth().toString())
            .set({
                sessions: this.props.firebase.firestore.FieldValue.arrayUnion(session),
            },{merge: true});

            // this.props.firebase.db.collection('stats').get().then((doc)=>{
            //     // docs.forEach(doc => console.log(doc.data()));
            //     console.log(doc.data());
            // })
        }
        
        render() {
            return (
                <Component {...this.props} />
            )
        }
    }

    return withFirebase(WithStats);
}

export default withStats;