import React from 'react';

import './styles/BadgeNew.css';
import header from '../components/images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.PureComponent{

    state = { form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      twitter: '',
    }};

    handleChange = e => {
      //const nextForm = this.state.form;
      //nextForm[e.target.name] = e.target.value;
    
      this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      })
    }
    render (){
        return (
            <React.Fragment>
             
              <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="Logo" />
              </div>
      
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <Badge
                      firstName={this.state.form.firstName}
                      lastName={this.state.form.lastName}
                      twitter={this.state.form.twitter}
                      jobTitle={this.state.form.jobTitle}
                      avatarUrl="https://scontent.fqro1-1.fna.fbcdn.net/v/t1.6435-9/186369854_918866242020897_2260182689203836141_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHkL_3213g0xd3cHo3GbzFnrgJevSH_FgauAl69If8WBlcvBsSeouTzRFBwjnSVm0daqPyCybmVGBLPGSTX-rsK&_nc_ohc=yv4dIO3cflMAX8XO6Ie&tn=B_zKFSPla6C3ZdpL&_nc_ht=scontent.fqro1-1.fna&oh=6fc603851a06bfd86652e02969b413d6&oe=60E5F632"
                    />
                  </div>
      
                  <div className="col-6">
                    <BadgeForm 
                      onChange={this.handleChange}
                      formValues={this.state.form}
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
    }
}

export default BadgeNew;