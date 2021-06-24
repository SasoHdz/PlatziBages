import React from 'react';

import './styles/BadgeNew.css';
import header from '../components/images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.PureComponent{

    state = { 
      loading: false,
      error: null,
      form: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        twitter: '',
      },
   };

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

    handleSubmit = async e => {
      e.preventDefault();
      this.setState({ loading: true, error: null });

      try {
        await api.badges.create(this.state.form);
        this.setState({ loading: false });

        this.props.history.push('/badges');
      }catch(error){
        this.setState({ loading: false, error: error});
      }
    }

    render (){

        if(this.state.loading){
          return <PageLoading />;
        }

        return (
            <React.Fragment>
             
              <div className="BadgeNew__hero">
                <img className="BadgeNew__hero-img img-fluid" src={header} alt="Logo" />
              </div>
      
              <div className="container">
                <div className="row">
                  <div className="col-6">
                  <Badge
                    firstName={this.state.form.firstName || 'FIRST_NAME'}
                    lastName={this.state.form.lastName || 'LAST_NAME'}
                    twitter={this.state.form.twitter || 'twitter'}
                    jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                    email={this.state.form.email || 'EMAIL'}
                    avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                  />
                  </div>
      
                  <div className="col-6">
                  <h1>New Attendant</h1>
                    <BadgeForm 
                       onChange={this.handleChange}
                       onSubmit={this.handleSubmit}
                       formValues={this.state.form}
                       error={this.state.error}
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
    }
}

export default BadgeNew;